# Uniswap

![](../../../assets/images/defi-uniswap.png)

[Uniswap](https://uniswap.org) is a decentralized finance protocol that is used to exchange cryptocurrencies and tokens. It is provided on blockchain networks that run open-source software. This is in contrast to cryptocurrency exchanges that are run by centralized companies.

Uniswap allows users to manage their own assets without depositing them on an exchange. It also does not require any tedious procedures such as KYC, and users do not need to provide any personal information. Uniswap uses a novel mechanism called automated market maker ([AMM](../advanced-topics-of-defi/amms.md)) to provide liquidity and execute trades without relying on order books or intermediaries. Anyone can create a liquidity pool for any pair of tokens, and earn fees by providing liquidity. Anyone can also swap tokens instantly at market prices determined by the pool's reserves.

Uniswap is a key player in the DeFi ecosystem, as it enables users to access a wide range of tokens and applications with low friction and high transparency. It also supports innovation and experimentation by allowing anyone to create new markets and products on top of it.

## Swap and Earn

Uniswap has two main features: swap and earn.

- **Swap**: This feature allows users to exchange any ERC-20 token for another token at the current market price. Users can also specify a maximum slippage and a deadline for their swap. Swapping tokens on Uniswap incurs the fee, which goes to the liquidity providers of the pool.
- **Earn**: This feature allows users to provide liquidity to any pair of tokens and earn fees from every swap that happens in that pool. Users can also stake their LP tokens in various liquidity mining programs to earn additional rewards. Providing liquidity on Uniswap involves some risks, such as impermanent loss and price volatility, so users should do their own research before participating.

## V2 vs. V3

The main differences between Uniswap v2 and v3 are as follows.

- **Fees**: Uniswap v2 had a fixed 0.3% fee revenue for liquidity providers (LPs), but v3 allows them to choose from 0.05%, 0.3%, or 1% for each pair. Also, v3 allows governance to set protocol fees between 10% and 25% of LP fees on a per-pool basis.
- **Liquidity**: Uniswap v2 required LPs to provide liquidity evenly across the entire pair, but v3 allows LPs to provide concentrated liquidity within any price range they choose. This allows LPs to optimize their capital efficiency according to their risk tolerance and market prediction.
- **Algorithm**: Uniswap v2 used the equation x*y=k to represent the price curve of a pair, but v3 uses a generalized curve function f(x,y) = k to represent it. This makes it easier to integrate with different types of assets and oracle services.

## Providing liquidity

Uniswap uses a mechanism called automated market maker (AMM), which allows anyone to pool assets and provide liquidity.

### benefits

Providing liquidity can be beneficial for several reasons:

- **Fee-sharing**: LPs earn a share of the 0.3% transaction fee that users pay when they swap tokens on Uniswap. The fee is proportional to the amount of liquidity provided and the volume of trades in the pool.
- **Capital efficiency**: LPs can concentrate their capital within custom price ranges, providing more liquidity at desired prices and earning higher returns. This also allows LPs to use less capital to provide the same depth as v2 LPs, or use their remaining capital for other purposes.
- **Liquidity mining**: LPs can also earn additional rewards by staking their LP tokens in various liquidity mining programs that offer incentives for providing liquidity to certain pools. These rewards can be in the form of governance tokens, interest-bearing tokens, or other benefits.

### risks

Providing liquidity can be rewarding, but also risky. Some of the risks are:

- **[Impermanent loss](../advanced-topics-of-defi/impermanent-loss.md)**: This is the loss of value that occurs when the price of one of the tokens in a pair changes significantly compared to the other. This causes the LP to end up with less total value than if they had just held the tokens outside of Uniswap.
- **Price volatility**: This is the risk of losing money due to large and sustained movements in the underlying asset price. This can affect both v2 and v3 LPs, but v3 LPs have more control over their exposure by setting their price ranges. However, this also means that v3 LPs need to monitor and adjust their positions more frequently to avoid being out of range or liquidated.
- **Smart contract risk**: This is the risk of losing money due to bugs, hacks, or exploits in the smart contracts that power Uniswap. While Uniswap has been audited and tested extensively, there is no guarantee that it is completely secure or immune to attacks. 

### *Recommend Reading*

- [Introducing Uniswap V3](https://uniswap.org/blog/uniswap-v3)
- [What Is Uniswap?](https://docs.uniswap.org/concepts/overview)
