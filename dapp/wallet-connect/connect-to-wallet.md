# Connect to Wallet

*shan@57blocks.com*

In this post we will introduce some battlefield tested react libraries in order to connect users to MetaMask or any wallet from the frontend.

## web3-react

A simple, maximally extensible, dependency minimized framework for building modern Ethereum dApps

### Features

1. Supports many different wallet connectors
2. Basic hooks for managing account
3. Used by Uniswap and some other popular projects

### Reference

- [Repo](https://github.com/Uniswap/web3-react)
- [Example](https://web3-react-mu.vercel.app/)

## wagmi

wagmi is a collection of React Hooks containing everything you need to start working with Ethereum. wagmi makes it easy to "Connect Wallet," display ENS and balance information, sign messages, interact with contracts, and much more — all with caching, request deduplication, and persistence.

### Features

1. 20+ hooks for working with wallets, ENS, contracts, transactions, signing, etc.
2. Built-in wallet connectors for MetaMask, WalletConnect, Coinbase Wallet, and Injected
3. Caching, request deduplication, and persistence powered
4. Auto-refresh data on wallet, block, and network changes
5. Multicall support
6. Test suite running against forked Ethereum network
7. TypeScript ready (infer types from ABIs and EIP-712 Typed Data)
8. Extensive documentation and examples
9. Used by ENS, Foundation, SushiSwap, and more

### Reference

- [wagmi docs](https://wagmi.sh/react/getting-started)

## useDapp

Features:

1. React hooks - Uses React hooks as your primary building ingredient
2. Auto refresh - Refreshes on a new block, wallet change or network change
3. Multicall - Combines multiple blockchain calls into a single multicall

Best practices:

1. Modern stack - Employs ethers.js, multicall & waffle
2. Extendability - Extends easily with custom hooks
3. Testability - Simple integration tests for UI and blockchain

### Reference

- [useDapp docs](https://usedapp-docs.netlify.app/docs/)

## Web3Modal

Web3Modal is a versatile ui library built on top of WalletConnect and wagmi. It is designed to make complex tasks like connecting wallets, performing transactions and managing accounts easy. Built on top of latest web standards, Web3Modal can be used in any front-end environment. Check out web3modal.com for a live demo and in-depth feature list.

### Reference

- [Web3Modal docs](https://docs.walletconnect.com/2.0/web3modal/about)

## Web3-Onboard

Web3-Onboard is the quickest and easiest way to add multi-wallet and multi-chain support to your project. With built-in modules for more than 35 unique hardware and software wallets, Web3-Onboard saves you time and headaches.

Features:

1. Minimal Dependencies - All wallet dependencies are included in separate packages, so you only include the ones you want to use in your app
2. Multiple Wallets and Accounts Connection, Multichain Support - Allow your users to connect multiple wallets and multiple accounts within each wallet at the same time to your app. Let users switch between chains/networks with ease. ALL EVM networks supported
3. Unified Provider Interface - All wallet modules expose a provider that is patched to be compliant with the EIP-1193, EIP-1102, EIP-3085 and EIP-3326 specifications. Whether your user is using Ledger or Metamask the provider will operate identically
4. Dynamic Imports - Supporting multiple wallets in your app requires a lot of dependencies. Onboard dynamically imports a wallet and its dependencies only when the user selects it, so that minimal bandwidth is used
5. Framework Agnostic - Avoid framework lock in -- Web3-Onboard works with any framework and includes helper packages for vue & react
6. Account Center - An interface to manage wallet connections and networks, with a minimal version for mobile
7. Notify - Real-time transaction notifications for all transaction states for the connected wallet address(es). In-notification speedups & cancels for hardware wallet connections

### Reference

- [Web3-Onboard docs](https://onboard.blocknative.com/docs/overview/introduction#features)
