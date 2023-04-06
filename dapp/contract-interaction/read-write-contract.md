# Read/Write Smart Contracts

*shan@57blocks.com*

ABIs (Application Binary Interface) can be thought of as a restaurant menu, they describe the possible functions that can be called to interact with a smart contract.

By knowing the functions available to a contract, we can programmatically use them — in situations where the project websites are down or when you need to automate certain transactions.

You will need Node.js installed, a valid [Etherscan API](https://docs.etherscan.io/getting-started/viewing-api-usage-statistics) Key and access to an Ethereum node, such as from [Infura](https://www.infura.io/) or [Alchemy](https://www.alchemy.com/).

## 1. Setting up a Node.js project

In a new folder, initiate a new Node.js project with the command npm init -y to accept all default project parameters.

A package.json file will be created for you, which contains all your packages and project information.

## 2. Obtaining a contract's ABI

Create a new file named script.js.

In JavaScript, we'll be writing our code to make a request to the endpoint ["Get Contract ABI for Verified Contract Source Codes"](https://docs.etherscan.io/api-endpoints/contracts#get-contract-abi-for-verified-contract-source-codes), which you will need to specify your verified contract address.

```javascript
https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=0xFc7a5BD22dFc48565D6f04698E566Dd0C71d3155&apikey=YourApiKeyToken
```

For this example, we'll be borrowing a default contract available from [Remix](https://remix.ethereum.org/), which has been deployed on the [Sepolia Testnet](https://sepolia.etherscan.io/address/0xFc7a5BD22dFc48565D6f04698E566Dd0C71d3155).

```javascript
async function main() {
  // make an API call to the ABIs endpoint
  const response = await fetch(
    "https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=0xFc7a5BD22dFc48565D6f04698E566Dd0C71d3155&apikey=YourApiKeyToken"
  );
  const data = await response.json();

  // print the JSON response
  let abi = data.result;
  console.log(abi);
}

main();
```

## 3. Connecting to a node

To interact with smart contracts, we will need a connection to an Ethereum node.

In this case we're using a public RPC endpoint available from [Chainlist](https://chainlist.org/?search=sepolia&testnets=true).

```javascript
https://rpc.sepolia.org
```

## 4. Integrating Ethers.js

We'll need to integrate a JavaScript library, known as Ethers.js that will be used to interact with the Ethereum blockchain.

To do so, run the command **npm i ethers** from a terminal within this project directory to install it.

Ethers.js provides several classes such as a **Provider**, which represents the state of the Ethereum blockchain.

We can create a new **Provider** using the syntax below, and pass in our node URL to initiate a connection to the Ethereum network.

```javascript
const ethers = require("ethers");

async function main() {
  const response = await fetch(
    "https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=0xFc7a5BD22dFc48565D6f04698E566Dd0C71d3155&apikey=YourApiKeyToken"
  );
  const data = await response.json();

  let abi = data.result;
  console.log(abi);

  // creating a new Provider, and passing in our node URL
  const node = "https://rpc.sepolia.org";
  const provider = new ethers.providers.JsonRpcProvider(node);
}

main();
```

## 5. Creating a wallet

Another class that Ether.js allows us to create is a Wallet, which will allow us to specify a private key and use an Ethereum address.

Performing write operations will incur gas costs, as such you may get some [testnet ETH](https://ethereum.org/en/developers/docs/networks/) from a [faucet](https://twitter.com/etherscan/status/1578243103789547520) to pay for transaction fees.

```javascript
const ethers = require("ethers");

async function main() {
  const response = await fetch(
    "https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=0xFc7a5BD22dFc48565D6f04698E566Dd0C71d3155&apikey=YourApiKeyToken"
  );
  const data = await response.json();

  let abi = data.result;
  console.log(abi);

  const node = "https://rpc.sepolia.org";
  const provider = new ethers.providers.JsonRpcProvider(node);

  // initiating a new Wallet, passing in our private key to sign transactions
  let privatekey =
    "fdfb72ce9754e3cbc1e79e44a8e20804cebd3c4a347605c6a3462a8de05b8784";
  let wallet = new ethers.Wallet(privatekey, provider);

  // print the wallet address
  console.log("Using wallet address " + wallet.address);
}

main();
```

## 6. Reading a contract

Finally, to interact with a smart contract we'll need to create a new Contract class.

The Contract class accepts an input of a contract address, an ABI (which we retrieved from the API earlier), and a wallet address to pay gas for any contract interactions.

```javascript
const ethers = require("ethers");

async function main() {
  const response = await fetch(
    "https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=0xFc7a5BD22dFc48565D6f04698E566Dd0C71d3155&apikey=YourApiKeyToken"
  );
  const data = await response.json();

  let abi = data.result;
  console.log(abi);

  const node = "https://rpc.sepolia.org";
  const provider = new ethers.providers.JsonRpcProvider(node);

  let privatekey =
    "fdfb72ce9754e3cbc1e79e44a8e20804cebd3c4a347605c6a3462a8de05b8784";
  let wallet = new ethers.Wallet(privatekey, provider);

  console.log("Using wallet address " + wallet.address);

  // specifying the deployed contract address
  let contractaddress = "0xFc7a5BD22dFc48565D6f04698E566Dd0C71d3155";

  // initiating a new Contract
  let contract = new ethers.Contract(contractaddress, abi, wallet);
}

main();
```

Having a closer look at the ABI we retrieved in Step 2, we can see that the contract has a function named retrieve, that doesn't accept an input however does return a uint256 number as an output.

```javascript
[
  {
    inputs: [
      // has no inputs needed
    ],
    name: "read", // function name read
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256", // returns a uint256 number
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newScore",
        type: "uint256",
      },
    ],
    name: "write",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
```

We can therefore call that function of the contract, read the value stored and print it out.

You may run this code from your console using the command node script.js.

Reading data stored in a contract incurs no gas cost, as it does not change the state of the Ethereum blockchain.

```javascript
const ethers = require("ethers");

async function main() {
  const response = await fetch(
    "https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=0xFc7a5BD22dFc48565D6f04698E566Dd0C71d3155&apikey=YourApiKeyToken"
  );
  const data = await response.json();

  let abi = data.result;
  console.log(abi);

  const node = "https://rpc.sepolia.org";
  const provider = new ethers.providers.JsonRpcProvider(node);

  let privatekey =
    "fdfb72ce9754e3cbc1e79e44a8e20804cebd3c4a347605c6a3462a8de05b8784";
  let wallet = new ethers.Wallet(privatekey, provider);

  console.log("Using wallet address " + wallet.address);

  let contractaddress = "0xFc7a5BD22dFc48565D6f04698E566Dd0C71d3155";
  let contract = new ethers.Contract(contractaddress, abi, wallet);

  // calling the "retrieve" function to read the stored value
  let read = await contract.read();
  console.log("Value stored in contract is " + read.toString());
}

main();
```

## 7. Writing a contract

Referring to the ABI once again, we can see that the contract has another method store, which accepts a uint256 number as an input and does not return any output.

```javascript
[
  {
    inputs: [],
    name: "read",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newScore",
        type: "uint256", // requires a uint256 new score input
      },
    ],
    name: "write", // function name write
    outputs: [
      // has no outputs
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
```

We can call that function and pass in any number as a parameter. To check that its updated, we'll wait for a 2 block confirmation, and read the contract again to confirm that the number has been updated.

You may run this code from your console using the command node script.js.

Writing new data to a contract will incur gas costs, as it requires fees to be paid to miners to process your transaction. Make sure your wallet has been funded with some testnet ETH

```javascript
const ethers = require("ethers");

async function main() {
  const response = await fetch(
    "https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=0xFc7a5BD22dFc48565D6f04698E566Dd0C71d3155&apikey=YourApiKeyToken"
  );
  const data = await response.json();

  let abi = data.result;
  console.log(abi);

  const node = "https://rpc.sepolia.org";
  const provider = new ethers.providers.JsonRpcProvider(node);

  let privatekey =
    "fdfb72ce9754e3cbc1e79e44a8e20804cebd3c4a347605c6a3462a8de05b8784";
  let wallet = new ethers.Wallet(privatekey, provider);

  console.log("Using wallet address " + wallet.address);

  let contractaddress = "0xFc7a5BD22dFc48565D6f04698E566Dd0C71d3155";
  let contract = new ethers.Contract(contractaddress, abi, wallet);

  let read = await contract.read();
  console.log("Value stored in contract is " + read.toString());

  // call the "store" function to update the value to 420
  let write = await contract.write(420);

  // wait for 2 blocks of confirmation
  write.wait(2).then(async () => {
    // read the contract again, similar to above
    let read = await contract.read();
    console.log("Updated value stored in contract is " + read.toString());
  });
}

main();
```

# Reference

- [Read/Write Smart Contracts](https://docs.etherscan.io/tutorials/read-write-smart-contracts#4.-integrating-ethers.js)
