# ABI

*shan@57blocks.com*

While interacting with a smart contract ABI is one of the essential components. In this guide, let us understand what the ABI of smart contracts is.

## What is ABI?

ABI (Application Binary Interface) in the context of computer science is an interface between two program modules, often between operating systems and user programs.

EVM (Ethereum Virtual Machine) is the core component of the Ethereum network, and smart contract is pieces of code stored on the Ethereum blockchain which are executed on EVM. Smart contracts written in high-level languages like Solidity or Vyper need to be compiled in EVM executable bytecode; when a smart contract is deployed, this bytecode is stored on the blockchain and is associated with an address. For Ethereum and EVM, a smart contract is just this sequence of bytecode. To access functions defined in high-level languages, users need to translate names and arguments into byte representations for byte code to work with it. To interpret the bytes sent in response, users need to convert back to the tuple of return values defined in higher-level languages. Languages that compile for the EVM maintain strict conventions about these conversions, but in order to perform them, one must know the precise names and types associated with the operations. The ABI documents these names and types precisely, easily parseable format, doing translations between human-intended method calls and smart-contract operations discoverable and reliable.

It is very similar to API (Application Program Interface), a human-readable representation of a code’s interface. ABI defines the methods and structures used to interact with the binary contract, just like API does but on a lower-level. The ABI indicates the caller of the function to encode the needed information like function signatures and variable declarations in a format that the EVM can understand to call that function in bytecode; this is called ABI encoding. ABI encoding is mostly automated, taken care of by compilers like REMIX or wallets interacting with the blockchain. Contract ABI is represented in JSON format. There are clear specifications of how to encode and decode a contract ABI.

## Understanding the elements of ABI

The JSON format of a contract’s ABI is given by various functions and/or events descriptions.

Following are the elements present in the ABI description of a function:

type: Defines the type of function. It can be one of the following, ‘function’, ‘constructor’, ‘receive' (for receive ether function), or ‘fallback’ (for default function).
name: Defines the name of the function.
inputs: It is an array of objects which defines parameters; each object has:
name: Defines the name of the parameters.
type: Defines the canonical types of the parameters. For example, uint256.
components: Used to define tuple types, if a tuple type is reached, it is represented as type = tuple [other properties of tuple elements like name, type goes here].
outputs: It is an array of output objects similar to inputs.
stateMutability: Defines the mutability of a function. It can be one of the following values: ‘pure’ (specified not to read or write blockchain state), ‘view’ (specified when blockchain state is to be read, but no modification can be done), ‘nonpayable’ (this is the default mutability and doesn’t need to be mentioned while writing a function in code, this means a function does not accept Ether; using this we can read and write blockchain state), ‘payable’ (mentioning this means a function accepts Ether and can read/write blockchain state).
Note: The ABI of Constructor and fallback functions have name and output fields blank; even the input field is empty for the fallback function.

Following are the elements present in the ABI description of an event:

type: here, it’s always ‘event’.
name: Defines the name of the event.
inputs: It is an array of objects which defines parameters; each object has:
name: Defines the name of the parameters.
type: Defines the canonical types of the parameters. For example, uint256.
components: Used to define tuple types, if a tuple type is reached, it is represented as type = tuple [other properties of tuple elements like name, type goes here].
indexed: This is ‘true’ if the field is part of the log’s topics and ‘false’ if it is one of the log’s data segments.
anonymous: This field is true if the event was declared as anonymous in the contract code.

# Reference

- [What is an ABI?](https://www.quicknode.com/guides/ethereum-development/smart-contracts/what-is-an-abi/?utm_term=what%20is%20an%20abi&utm_campaign=Documentation+%26+Guides&utm_source=google&utm_medium=cpc&hsa_acc=1365030395&hsa_cam=18929922623&hsa_grp=144580035795&hsa_ad=636776847832&hsa_src=g&hsa_tgt=kwd-1905765597587&hsa_kw=what%20is%20an%20abi&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=EAIaIQobChMIw_LRsPSU_gIVYpzCCh27PQl5EAAYASAAEgKqyPD_BwE)
