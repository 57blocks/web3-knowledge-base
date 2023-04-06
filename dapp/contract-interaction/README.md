# Smart Contract Interaction

*shan@57blocks.com*

The Ethereum network makes a distinction between writing data to the network and reading data from it, and this distinction plays a significant part in how you write your application. In general, writing data is called a transaction whereas reading data is called a call. Transactions and calls are treated very differently, and have the following characteristics.

## Transactions

Transactions fundamentally change the state of the network. A transaction can be as simple as sending Ether to another account, or as complicated as executing a contract function or adding a new contract to the network. The defining characteristic of a transaction is that it writes (or changes) data. Transactions cost Ether to run, known as "gas", and transactions take time to process. When you execute a contract's function via a transaction, you cannot receive that function's return value because the transaction isn't processed immediately. In general, functions meant to be executed via a transaction will not return a value; they will return a transaction id instead. So in summary, transactions:

- Cost gas (Ether)
- Change the state of the network
- Aren't processed immediately
- Won't expose a return value (only a transaction id).

## Calls

Calls, on the other hand, are very different. Calls can be used to execute code on the network, though no data will be permanently changed. Calls are free to run, and their defining characteristic is that they read data. When you execute a contract function via a call you will receive the return value immediately. In summary, calls:

- Are free (do not cost gas)
- Do not change the state of the network
- Are processed immediately
- Will expose a return value (hooray!)
- Choosing between a transaction and a call is as simple as deciding whether you want to read data, or write it.

# Reference

- [Interact with your contracts](https://trufflesuite.com/docs/truffle/how-to/contracts/interact-with-your-contracts/)
