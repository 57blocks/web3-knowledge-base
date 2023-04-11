# Advanced topics of DeFi

## Impermanent Loss

Impermanent loss is a concept that is unique to automated market maker ([AMM](./amms.md)) protocols. It refers to the potential loss of value that liquidity providers may experience when providing liquidity to a liquidity pool. This loss occurs when the price of the tokens in the pool diverge from the price of the same tokens on a centralized exchange.

For example, let's say a liquidity provider deposits equal amounts of two tokens into a liquidity pool with a ratio of 1:1. If the price of one of the tokens increases on a centralized exchange, traders will buy more of that token on the AMM, causing the ratio in the pool to shift. This shift in ratio means that the liquidity provider's share of the liquidity pool is now weighted more heavily towards the token that decreased in price, which could result in a loss when compared with holding the tokens on a centralized exchange.

While impermanent loss is a risk for liquidity providers, it is important to note that it is not a guaranteed loss. There are strategies that can be used to mitigate the risk of impermanent loss, such as choosing to deposit assets in pools with lower volatility or using hedging strategies.

Impermanent loss is a complex topic that requires careful consideration from liquidity providers. It is important for DeFi protocols to educate users on the risks of impermanent loss and provide tools to help them make informed decisions when providing liquidity to liquidity pools.

## How to avoid impermanent loss?

While you can’t avoid impermanent loss, you can reduce exposure. Here are some tips to help:

there are strategies that liquidity providers can use to mitigate this risk. Here are some ways to avoid impermanent loss:

1. Choose Pools with Lower Volatility: Liquidity providers can choose a liquidity pool that has low volatility in the tokens being traded. This can reduce the risk of impermanent loss, as there is less likelihood of the price of the tokens in the pool diverging significantly from the price on a centralized exchange.

2. Consider Hedging Strategies: Liquidity providers can hedge their positions by holding an equal amount of the tokens they have deposited in the liquidity pool on a centralized exchange. This can help to mitigate any potential losses caused by impermanent loss, as the liquidity provider would also benefit from any price changes on the centralized exchange.

3. Look for Stablecoins: Liquidity providers can consider providing liquidity to pools that involve stablecoins, such as DAI or USDC. These stablecoins are usually pegged to a fiat currency and tend to be less volatile than other cryptocurrencies, reducing the risk of impermanent loss.

4. Monitor the Pool and Adjust as Necessary: Liquidity providers should monitor the liquidity pool regularly and adjust their position as necessary. If they notice that the ratio of tokens in the pool has shifted significantly, they can remove their liquidity and deposit it in a different pool or on a centralized exchange.

By choosing the right pool and employing hedging strategies, liquidity providers can reduce the risk of impermanent loss and potentially earn a profit from their participation in DeFi protocols.

### *Recommend Reading*

- [Impermanent Loss](https://www.ledger.com/academy/glossary/impermanent-loss)