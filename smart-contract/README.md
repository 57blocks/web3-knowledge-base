# Smart Contract

_bin@57blocks.com_

## What is a Smart Contract?

A "smart contract" is simply a program that runs on the Ethereum blockchain. It's a collection of code (its functions) and data (its state) that resides at a specific address on the Ethereum blockchain.

Smart contracts are a type of Ethereum account. This means they have a balance and can be the target of transactions. However they're not controlled by a user, instead they are deployed to the network and run as programmed. User accounts can then interact with a smart contract by submitting transactions that execute a function defined on the smart contract. Smart contracts can define rules, like a regular contract, and automatically enforce them via the code. Smart contracts cannot be deleted by default, and interactions with them are irreversible.

## A Digital Vending Machine

Perhaps the best metaphor for a smart contract is a vending machine, as described by Nick Szabo. With the right inputs, a certain output is guaranteed.

To get a snack from a vending machine:

```solidity
money + snack selection = snack dispensed
```

This logic is programmed into the vending machine.

A smart contract, like a vending machine, has logic programmed into it. Here's a simple example of how this vending machine would look if it were a smart contract written in Solidity:

```solidity
pragma solidity 0.8.7;

contract VendingMachine {

    // Declare state variables of the contract
    address public owner;
    mapping (address => uint) public cupcakeBalances;

    // When 'VendingMachine' contract is deployed:
    // 1. set the deploying address as the owner of the contract
    // 2. set the deployed smart contract's cupcake balance to 100
    constructor() {
        owner = msg.sender;
        cupcakeBalances[address(this)] = 100;
    }

    // Allow the owner to increase the smart contract's cupcake balance
    function refill(uint amount) public {
        require(msg.sender == owner, "Only the owner can refill.");
        cupcakeBalances[address(this)] += amount;
    }

    // Allow anyone to purchase cupcakes
    function purchase(uint amount) public payable {
        require(msg.value >= amount * 1 ether, "You must pay at least 1 ETH per cupcake");
        require(cupcakeBalances[address(this)] >= amount, "Not enough cupcakes in stock to complete this purchase");
        cupcakeBalances[address(this)] -= amount;
        cupcakeBalances[msg.sender] += amount;
    }
}
```

Like how a vending machine removes the need for a vendor employee, smart contracts can replace intermediaries in many industries.

## Permissionless

Anyone can write a smart contract and deploy it to the network. You just need to learn how to code in a smart contract language, and have enough ETH to deploy your contract. Deploying a smart contract is technically a transaction, so you need to pay Gas in the same way you need to pay gas for a simple ETH transfer. However, gas costs for contract deployment are far higher.

However, they must be compiled before they can be deployed so that Ethereum's virtual machine can interpret and store the contract.

## Composability

Smart contracts are public on Ethereum and can be thought of as open APIs. This means you can call other smart contracts in your own smart contract to greatly extend what's possible. Contracts can even deploy other contracts.

Learn more about [smart contract composability](https://ethereum.org/en/developers/docs/smart-contracts/composability/).

## Limitations

Smart contracts alone cannot get information about "real-world" events because they can't send HTTP requests. This is by design. Relying on external information could jeopardise consensus, which is important for security and decentralization.

There are ways to get around this using oracles.

Another limitation of smart contracts is the maximum contract size. A smart contract can be a maximum of 24KB or it will run out of gas. This can be circumnavigated by using The Diamond Pattern.

## References

[Introduction to smart contracts](https://ethereum.org/en/smart-contracts/)

[Smart Contracts: The Blockchain Technology That Will Replace Lawyers](https://blockgeeks.com/guides/smart-contracts/)
