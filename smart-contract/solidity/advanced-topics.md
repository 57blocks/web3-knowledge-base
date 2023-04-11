# Advanced Topics

_bin@57blocks.com_

## [Layout]()

### [1. Layout of State Variables in Storage](https://docs.soliditylang.org/en/latest/internals/layout_in_storage.html#layout-of-state-variables-in-storage)

This part introduces how data is laid out in storage.

### [2. Layout in Memory](https://docs.soliditylang.org/en/latest/internals/layout_in_memory.html#layout-in-memory)

This part introduces how data is laid out in memory.

### [3. Layout of Call Data](https://docs.soliditylang.org/en/latest/internals/layout_in_calldata.html#layout-of-call-data)

This part introduces how arguments of external functions are laid out.

## [Contract ABI Specification](https://docs.soliditylang.org/en/latest/abi-spec.html#contract-abi-specification)

The Contract Application Binary Interface (ABI) is the standard way to interact with contracts in the Ethereum ecosystem, both from outside the blockchain and for contract-to-contract interaction. Data is encoded according to its type, as described in this specification. The encoding is not self describing and thus requires a schema in order to decode.

We assume that the interface functions of a contract are strongly typed, known at compilation time and static. We assume that all contracts will have the interface definitions of any contracts they call available at compile-time.

## [NatSpec Format](https://docs.soliditylang.org/en/latest/natspec-format.html#natspec-format)

Solidity contracts can use a special form of comments to provide rich documentation for functions, return variables and more. This special form is named the Ethereum Natural Language Specification Format (NatSpec).

## [Security Considerations](https://docs.soliditylang.org/en/latest/security-considerations.html#security-considerations)

While it is usually quite easy to build software that works as expected, it is much harder to check that nobody can use it in a way that was not anticipated.

In Solidity, this is even more important because you can use smart contracts to handle tokens or, possibly, even more valuable things. Furthermore, every execution of a smart contract happens in public and, in addition to that, the source code is often available.

Of course you always have to consider how much is at stake: You can compare a smart contract with a web service that is open to the public (and thus, also to malicious actors) and perhaps even open source. If you only store your grocery list on that web service, you might not have to take too much care, but if you manage your bank account using that web service, you should be more careful.
