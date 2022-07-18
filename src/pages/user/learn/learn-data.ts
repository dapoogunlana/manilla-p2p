import {
    LearnImg1bitcoin,
    LearnImg2ethereum,
    LearnImg3tether,
    LearnImg4usdc,
    LearnImg5bnb,
    LearnImg6xpr,
    LearnImg7cardano,
    LearnImg8solana,
    LearnImg9android,
    LearnImg10trust,
    LearnImg11blockchain,
    LearnImg12imtoken,
    LearnImg13atomic,
    LearnImg14bitcoin,
    LearnImg15ethereum,
} from '../../../assets/images';

export interface IlearnData {
    id: number | undefined,
    image: string,
    title: string,
    content: {
        topic: string,
        point: string,
        subPoints: string[],
    }[],
};
export const learnDataInitialState: IlearnData = {
    id: undefined,
    image: '',
    title: '',
    content: [
        {
            topic: '',
            point: '',
            subPoints: [],
        }
    ],
};

export const learnList = [
    {
        id: 1,
        image: LearnImg1bitcoin,
        title: 'Bitcoin - The Overview',
        content: [
            {
                topic: ``,
                point: `Although it started less than a decade ago, the cryptocurrency market as at the time of writing boasts of a market capitalization above $1 Trillion USD. This triumph being relished by crypto investors and enthusiasts today is credited to the first ever digital currency, Bitcoin, which currently controls about 50% of the industry’s market capitalization..`,
                subPoints: [],
            },
            {
                topic: `Brief History Of Bitcoin`,
                point: `Checkingyourself.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `The original whitepaper of Bitcoin was written by a famous but anonymous individual or group of individuals by the name Satoshi Nakamoto in 2008. The token itself was published in 2009 and in the subsequent year, the first Bitcoin transaction was carried out. A few thousands of this coin were transferred between two parties. Today, a Bitcoin token is worth an average of $30,000, leaving many of the adopters regretting having not boarded the train when it was almost nothing. Financial analysts and experts are already predicting that the price of Bitcoin (BTC) will skyrocket above $100,000 in the coming  years.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `The advent of Bitcoin has given rise to the creation of other digital currencies which are largely regarded as Alternate coins (Altcoin). At present, there are over three thousand digital currencies out there which are each associated with their unique use-cases. In a more succinct way; cryptocurrencies are providing an economy for decentralized applications and with Bitcoin spearheading the efforts, cryptocurrencies have become a significant threat to the traditional FX market.`,
                subPoints: [],
            },
            {
                topic: `How Bitcoin (BTC) Works`,
                point: `Bitcoin is published over millions of computer nodes which are running complex mathematical algebras. It is worthy of note taking that we cannot create new Bitcoin tokens. According to its whitepaper, the total supply of BTC that can ever exist has been printed. Nevertheless, fierce discrepancy among the leading figures in the Bitcoin community has led to the creation of new hard forks of Bitcoin which are hosted over new chains.`,
                subPoints: [],
            },
            {
                topic: `Use-cases Of Bitcoin (btc)`,
                point: `Online and offline payment (Medium of exchange): Bitcoin is being widely accepted as a form of payment at stores, malls, eateries, etc., online and offline. With the inception of Bitcoin cards, cryptocurrency enthusiasts can now transfer, store and spend their assets at point of sales, ATMs, and so on.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Value storage: One of the drawbacks to the mass adoption of cryptocurrency is volatility. Despite the strength of this factor, Bitcoin is still one of the most stable digital assets out there. Towards the end of 2021, Bitcoin rose to an all-time highest value of over $65,000. This fetched impractical amount of profits for the early adopters. Bitcoin has proved to be the next-generation entity for storing assets' value.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Digital economy: Ever since its inception, thousands of individuals have adopted this new economy concept; investing when the price is down, HODLing through the hard times and trading when the value rises.`,
                subPoints: [],
            },
            {
                topic: `Bitcoin Market History, Market Cap And Price Stat`,
                point: `Although the whitepaper was published in 2008, it was not until July, 2013 that the first cryptocurrency exchange (where Bitcoin could be traded) was launched. At that time, this powerful digital currency was traded at $0.05 per coin. On February 13th, 2011, Bitcoin went in pair with the United States fiat currency and was traded at exactly $1 USD.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `By November 25th, 2014, Bitcoin was valued at $979.45. That kick-started a successful journey for cryptocurrency as it got the attention of big guns in the finance world. By the second quartile (Q3) of 2017, BTC was already being traded at $2,851.07. By the third quartile of the same year, it rose to $4,276.26 with a market cap of over $2 Billion and by November 10th in the year 2021, Bitcoin got to the all-time highest rate of over $68,789.63 with an all-time highest market cap of over $1 Trillion.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `BTC is currently being traded at $$BTCcurrentPrice on major exchanges with a market cap of $$BTCcurrentMarketCap, 24-hour volume of $$$BTCcurrent24HourVolume and a circulating supply of $$BTCcurrentSupply BTC.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 2,
        image: LearnImg2ethereum,
        title: 'Ethereum - The Overview',
        content: [
            {
                topic: ``,
                point: `Ethereum is the second largest cryptocurrency both by market capitalization and popularity. It is arguably the most used digital assets with thousands of decentralized projects running on its chain.`,
                subPoints: [],
            },
            {
                topic: `Brief History Of Ethereum`,
                point: `In creating the Ethereum operating system, Vitalik Buterin, the writer of its whitepaper used the concept similar to Bitcoin’s. Vitalik is a programmer and worked at Bitcoin Magazine where he gained all-out acquaintance with cryptocurrency and blockchain technology. In 2013, he wrote the Ethereum whitepaper with the goal of building a virtual machine on which decentralized applications can be built.
                Today, thousands of DApp or decentralized apps are running on Ethereum operating system.
                `,
                subPoints: [],
            },
            {
                topic: `Ethereum Native Currencies - Eth And Erc Tokens`,
                point: `Ether (ETH) is the native currency of Ethereum. It is a tradeable digital currency, ranking only second to Bitcoin by market capitalization.
                Unlike Bitcoin, there are various protocol tokens on the Ethereum network called the ERC or Ethereum Request for Comment tokens. These tokens express to blockchain programmers the set of rules that define how tokens are to be implemented on the network. The inception of ERC tokens made creating utility tokens easy for newly incepted decentralized applications.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `As individuals come together to create decentralized projects, they generate use-cases around the projects' native currencies which are published over the Ethereum chain. These currencies that are being burnt through the Ethereum operating system are standalone and create an economy by which the projects are monetised.
                One of the most used among the ERC tokens is the ERC-20. This token is being used by over a thousand DApps to publish their independent native currencies. Examples of tokens that were published on Ethereum's ERC-20 are EOS, Tron (TRX), Maker (MKR), Basic Attention Token (BAT), Omisego (OMG), Paxos Standard Token (PAX), IOST and DAI.
                Other Ethereum chain tokens are ERC223, ERC721, ERC777 and many more.
                `,
                subPoints: [],
            },
            {
                topic: `Use-cases Of Ethereum`,
                point: ``,
                subPoints: [
                    `Payments: Ethereum is among the cryptocurrencies that are being accepted as a form of payment for merchandise both online and offline, across the globe.`,
                    `Smart Contract: Ethereum, rather than Bitcoin is an operating system powering scripts in which Smart Contracts are being held. This eliminates the use of legal practitioners whose charges are usually enormous in executing contracts. Today, with the help of blockchain technology and computer code, we can set up, manage and control contractual agreements using the concept known as Smart Contract.`,
                    `Bringing real world assets in tokenized form: As we have discussed above, the blockchain technology has brought about the creation of several decentralized projects. Most of these projects have their native currencies which are being sold during the ICO (Initial Coin Offering) or IDO (Initial DEX Offering) exercices. Ethereum makes token creation easy for project owners and as well, HODLers of these coins get their real-world assets tokenized amassing huge profits when the coins get listed on exchanges.`,
                ],
            },
            {
                topic: ``,
                point: `Other applications of Ethereum include digital identity, security, health and many more.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Eth Market History, Market Cap And Price Stat.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `On August 7, 2015, the first ETH trading took place with an initial price of $2.83. By January the subsequent year, it was being sold on multiple exchanges at $1.06 and although that indicates a drop in value, it accumulated a staggering market cap of $81,051,494 USD. By the second quartile of 2017, ETH was already being valued at $333.50 with a market cap of over $30 billion USD.  On November 16, 2021, ETH got its all-time highest value of $4,891.70 USD and alongside its highest market cap of $560.56 Billion USD thereby registering a 24-hour volume of over $29 Billion USD.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `ETH is currently being traded at $ETHcurrentPrice on major exchanges with a market cap of $ETHcurrentMarketCap, 24-hour volume of $ETH24hourVolume and a circulating supply of $ETHcirculatingSupply ETH.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 3,
        image: LearnImg3tether,
        title: 'Tether USDT',
        content: [
            {
                topic: ``,
                point: `Tether (USDT) is a cryptocurrency token having its value pegged around the United States fiat currency (US dollar). It is developed to provide stability and increase liquidity in the cryptocurrency space. Think of USDT as the US dollar in its digital form. Since its value is pegged around a fiat currency and its rise and fall solely depend on the value of US dollar in the FX market, USDT is referred to as a "stable coin".`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Although it is really hard to say if USDT can successfully hold its ground and never deviate from being valued at exactly $1 at all time, it has brought about a new mechanism to the industry which some other cryptocurrencies tend to leverage upon.`,
                subPoints: [],
            },
            {
                topic: `Volatility In The Cryptosphere: The Importance And Setback`,
                point: `Instability has been one of the major challenges facing the mass adoption of cryptocurrency right from the early days. Crypto coins tend to move up and down the trend thereby resulting in massive loss or profit for the enthusiastic traders. While the same factor is responsible for the continued rise in crypto values from nearly-zero to thousands of US dollars, there is no doubt that it has resulted in many traders going bankrupt.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `However, without volatility, the amount of profits that traders could make from an entity is very close to nothing. Let us take a look at an instance where a certain commodity is bought for $5. With absolute stability, you cannot sell such a commodity beyond the cost amount. The only factor that could influence the trade and result in you making extra dollars is the development in the foreign exchange (FX) market.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `If a coin is pegged around a particular fiat currency, the rise and fall of its value is directly dependent on the pegged fiat currency. This definitely creates stability in the market but at the same time makes trading quite boring.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `While stability means a reduced amount of loss in the cryptocurrency market, it, at the same time brings about a minimum amount of profits for the investors. Hence, instability is not so bad or at least not as bad as we believe it to be. As traders, we have lost some fortunes thanks to the volatility in the market, in spite of that, we have acquired a reasonable amount of profits courtesy of the same factor.`,
                subPoints: [],
            },
            {
                topic: `Brief History Of USDT`,
                point: `J.R. Willet, the writer of Ether whitepaper developed a new idea in the cryptocurrency space in 2012. The concept was to create a new currency that can stand in both the FX market and cryptocurrency world on Bitcoin protocol. This advancement was implemented into "Mastercoin", the very foundation of Tether cryptocurrency.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Willet worked with Brock Pierce and Craig Sellers who all went on to become co-founders and the very pioneers of stablecoins in the cryptosphere.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `By the first quartile of 2017 (Q1), Tether went on to be listed on Bitfinex exchange, the first exchange to allow USDT trading. After having a feud with a Taiwan bank, Wells Fargo, which resulted in a lawsuit, Tether announced the launch of an additional ERC-20 token not only for US dollar but euros as well on Ethereum chain.`,
                subPoints: [],
            },
            {
                topic: `USDT Market History, Market Cap And Price Stat`,
                point: `USDT was launched with an initial price of $1 USD as pegged with an initial market cap of $251,300 USD. It maintained the pegged value until February 25th 2015 USDT when it went up to what happens to be its all-time highest value of $1.05. The value however, dropped to its all-time low of $0.5683 USD the subsequent month.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `USDT is currently being traded at exactly $USDTcurrentPrice on major exchanges with a market cap of $USDTcurrentMarketCap USD, 24 hour volume of $USDT24hourVolume and a circulating supply of $USDTcirculatingSupply USDT from the total supply of $USDTtotalSupply USDT.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 4,
        image: LearnImg4usdc,
        title: 'USDC',
        content: [
            {
                topic: ``,
                point: `USDC is a leading cryptocurrency, recording the best performance among stablecoins with its value hovering around $0.9998 and $1.1 USD at most times.`,
                subPoints: [],
            },
            {
                topic: `External Links`,
                point: ``,
                subPoints: [
                    `Project website: https://www.crypto.com/en/chain`,
                    `Whitepaper 1: https://crypto.com/images/chain_whitepaper.pdf`,
                    `Whitepaper 2: https://crypto.com/images/mco_whitepaper.pdf`
                ],
            },
            {
                topic: ``,
                point: `With the introduction of stablecoins, the cryptocurrency industry finally found a solution to volatility, the leading factor characterising the market in the last few years. While volatility is responsible for the massive growth enjoyed in this financial sector, it has at the same time left many traders in bankruptcy.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Many business tycoons are still not convinced that digital currencies possess the quality needed to battle it out with fiat currencies. While its potential cannot be denied by even its greatest foe, cryptocurrency is way too unstable to perform a total sweep of fiat currencies out of the business world, thereby revolutionising the finance market.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `The year 2016, saw many of the existing cryptocurrency tokens gain popularity in the market with numerous centralised bodies bringing their services on blockchain, thereby producing decentralised applications. In the succeeding year, most digital currencies boomed, multiplying in values and luring new investors onboard.`,
                subPoints: [],
            },
            {
                topic: `Why USDC?`,
                point: `There are various reasons why you should go for this coin. Some of them are listed below.`,
                subPoints: [],
            },
            {
                topic: `Stability brought by its USD backing`,
                point: `While all cryptocurrencies in general have been characterized by constant instability, stablecoins have their way of ensuring that their values do not exceed far from their pegged fiat values. However, not all of them are backed by financial institutions due to the fact that they are published on a census-resistant technology, blockchain.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `USDC is backed and reserved by financial institutions, making it one of the leaders as far as stablecoins are concerned. The tokens are issued by these institutions and hence, this ensures that the value does not go any far from $1 USD.`,
                subPoints: [],
            },
            {
                topic: `Transparency`,
                point: `The fact that USDC is built on blockchain technology makes the currency fully transparent. This technology is well known for this feature as transactions are broadcasted to all the nodes on the network as well as all the members of the ecosystem are able to view transactions.`,
                subPoints: [],
            },
            {
                topic: `Agglomerates centralized and decentralized systems`,
                point: `While USDC has the features of fiat since it is very stable, it at the same time exhibits that of a digital currency. The centralized attributes and backing ensures stability while the decentralized brought about total flexibility and transparency.`,
                subPoints: [],
            },
            {
                topic: `USDC Market History, Market Capitalization And Price Stat`,
                point: `An all-time high occurred on January 30th, 2020 when USDC was sold around $1.044 USD, however, with zero recorded market cap. For the record, the lowest price that USDC has been sold in its market history is $0.9702 USD, taking place on 17th of March, 2020.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `USDC is currently being traded at $ USDCcurrentPrice USD on major exchanges with a market cap of $USDCcurrentMarketCap USD, 24-hour volume of $USDT24hourVolume USD and a total number of $USDCcirculatingSupply USDC is currently circulating in the cryptocurrency market from the total supply of $ USDCtotalSupply USDC.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 5,
        image: LearnImg5bnb,
        title: 'BNB - The Overiview',
        content: [
            {
                topic: ``,
                point: `Binance Coin (BNB) is the cryptocurrency coin created and owned by one of the largest exchanges in the cryptocurrency sphere today, Binance. It is a native token with its primary utility being an alternative form of payment for transaction fees on Binance exchange.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Unlike other cryptocurrency exchanges, Binance does not deal in fiat currencies, rather it is strictly only for cryptocurrency. It is pertinent to note that Binance did not have the facility for fiat deposit until January 2019, as this new development gave us various deposit options in cryptocurrency, fiat and the use of Bitspark mobile app that allows direct cash deposit.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Various other major cryptocurrency exchanges offer both digital assets and fiat currencies, thereby agglomerating the cryptocurrency and foreign exchange worlds.`,
                subPoints: [],
            },
            {
                topic: `The BNB Journey`,
                point: `Binance coin (BNB) was initially published on Ethereum chain as an ERC-20 token. After undergoing a successful launch and rise in value within a short period of time, the token was moved to the Binance blockchain which was developed shortly after the Binance coin launch. Binance coin is heavily traded on DEX, which happens to be an exchange created on the Binance blockchain..`,
                subPoints: [],
            },
            {
                topic: `BNB Incentives`,
                point: `Trading on Binance attracts a service fee of 0.1% of the transaction amount. This is usually associated with digital currency deposit. Withdrawals incur an extra fee that is calculated based on the transaction amount.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Today, you can pay service fees using the Binance native currency. Using this payment method brings discount in the following format:`,
                subPoints: [
                    `50% discount on all transactions in the first year.`,
                    `25% discount on transactions done in the second year.`,
                    `12.5% discount on the transaction done in the third year.`,
                    `6.75% discount in the fourth year.`
                ],
            },
            {
                topic: ``,
                point: `Transactions done in the subsequent years will attract no discount regardless of the payment method used. However, nothing is constant in the business world and Binance might bring about new plans that offer seasonal discounts in the near future.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Although the use of Bitspark mobile application in making deposit into your Binance wallet attracts fewer charges compared to credit cards and bank transfers, Binance Coin (BNB) remains the best deposit method as the discounts offered by this bring about the fewest transaction fees on deposits.`,
                subPoints: [],
            },
            {
                topic: `BNB Market History, Martket Cap And Price Stat`,
                point: `BNB coin was launched on July 25th, 2017 with an initial price of $0.115203 USD, accumulating a market cap of $11,520,300 USD. It only took it two months to climb to a new high price of $2.12 US dollar, generating a market cap of $211,960,000 USD in the process.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `On January 12th, 2018, BNB made a sudden climb to the uptrend, increasing its price to $24.46 USD with a market cap of $2,422,090,369 USD. BNB is one of the few coins to have gotten their all-time highest value within the year 2019 despite the presence of intense volatility in the market. A record highest price of $690.93USD with a market cap of over $100 Billion USD was reached on 10th of May, 2021.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `BNB is currently being traded at exactly $ BNBcurrentPrice on major exchanges with a market cap of $ BNBcurrentMarketCap USD, 24 hour volume of $BNB24hourVolume USD and a circulating supply of $BNBcirculatingSupply  BNB from the total supply of $BNBtotalSupply  BNB.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 6,
        image: LearnImg6xpr,
        title: 'XRP -  The Overview',
        content: [
            {
                topic: ``,
                point: `Ripple is a real-time operating system, a network for settlement as well as a digital currency exchange that is built on open-source network mechanism rather than most of other cryptocurrencies. It uses a concept known as Ripple Consensus Ledger.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Ripple is widely being used as a settlement by financial sectors as it has the ability to process transaction confirmation in the most efficient way possible and at a very high speed.`,
                subPoints: [],
            },
            {
                topic: `Brief History Of Ripple`,
                point: `Ripple (XRP) was developed with the primary function of supporting instant financial transaction processing and confirmation, in a very secure means at zero fees. The idea came from Jed McCaleb, a blockchain expert. He teamed up with developers, Arthur Britto and David Schwartz who worked together in building the chain with the help of another leading figure in blockchain programming and cryptocurrency, Ryan Fugger.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Although, the Ripple Lab only built the Ripple chain in 2013, Ryan Fugger, an important figure on this project, has been into financial institutions since 2005. The XRP coin was published using the concept related to that of Bitcoin (as it is with other cryptocurrencies) but with a different mindset.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `The Ripple network has a functionality of integrating with the centralized financial systems such as banks, using a consensus verification code developed by their programmers in Ripple Lab. The successful launch of this project resulted in Ripple Lab being named as one of the 50 Smartest Companies in the world in the 2014 first quartile (2014 Q4) edition of the magazine review published by MIT Technology.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Today, XRP is among the major digital currencies ranking third only behind the industry-leading BTC and ETH by market capitalization.`,
                subPoints: [],
            },
            {
                topic: `Ripple Network’s Native Currency (XRP)`,
                point: `Usually, blockchain projects, also referred to as decentralized applications or DApps have an associated utility token that provides liquidity on the network. XRP is the Ripple network's native token that is used in carrying out transactions across the network. It is believed to be faster, cheaper and more scalable compared to other cryptocurrencies. This makes XRP the ideal cryptocurrency for payments in the technology space.`,
                subPoints: [],
            },
            {
                topic: `XRP Market History, Market Cap And Price Stat`,
                point: `On August 4th, 2013, XRP hit the market with an initial price of $0.005874, resulting in an initial market cap of $45,921,033 USD. By the end of September, the same year, the coin enjoyed an increase in price and was sold at $0.014141. It went on to experience instability in the market causing it to spend most of the time in the downtrend. However, on December 17th, 2014, XRP gained an increase in value and broke to a new high price of $0.025283 generating a market cap of $780,785,789 US dollar in the process.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `The unforgettable breakthrough experienced in the cryptocurrency industry between the last quartile of 2017 and first quartile of 2018 extended to this cryptocurrency. On January 4th 2018, XRP amassed an all-time highest price of $3.84, generating a market cap of $,555,070,000 USD in the process.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `XRP is currently being traded at $XRPcurrentPrice on major exchanges with a market cap of $XRPcurrentMarketCap, 24-hour volume of $XRP24hourVolume and a circulating supply of $XRPcirculatingSupply XRP from the total supply of $XRPtotalSupply XRP.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 7,
        image: LearnImg7cardano,
        title: 'Cardano - The Overview',
        content: [
            {
                topic: ``,
                point: `With the inception of CARDANO comes an untapped implementation of an entirely new programming language in the cryptocurrency industry. While most of the previously existing blockchain projects were developed using common programming languages like C++, CARDANO was written in Haskell.`,
                subPoints: [],
            },
            {
                topic: `External Links`,
                point: ``,
                subPoints: [
                    `Project website: https://www.cardano.org/en/home/`,
                    `Whitepaper: https://www.cardano.org/en/philosophy/`,
                    `Source code: https://github.com/input-output-hk/cardano-sl/`
                ],
            },
            {
                topic: ``,
                point: `CARDANO is a fully open-source project which is made available for the public to jump into. It uses a better concept different from that of Bitcoin with its proof-of-work (POS) mechanism. As well, one of its primary functionalities is to ensure total privacy of the users.`,
                subPoints: [],
            },
            {
                topic: `Brief History Of The Project`,
                point: `One of the reasons why new blockchain projects tend to bring about a better ideology is because most of them are founded by experts who have either co-founded or have worked significantly on previously existing blockchains. Their experiences are put to work and their ability to recognize the weaknesses of the established chains help in bringing better concepts in new projects.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `The founder of Cardano, Charles Hoskinson co-founded the Ethereum blockchain and was the ex CEO of the said enterprise. The man put together a team and formed an independent organization Input Output HK (IOHK) who worked with great enthusiasm to create a unique algorithm for the blockchain in 2017.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Today, Cardano is among the top fifteen cryptocurrencies by market capitalization despite still being in its infancy. ADA has a market capitalization of $1,062,441,494 US dollar with a 24-hour market volume of $45,049,535 USD as at the press time.`,
                subPoints: [],
            },
            {
                topic: `How Cardano Works`,
                point: `Cardano has two unique layers that facilitate users’ transactions on the network. These are, the Cardano Settlement Later (CSL) and Cardano Computation Later (CCL). The former acts as a ledger on which users’ token transfer records are kept. The computation layer works around the Smart Contracts as they are created by users on the network.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Transactions fees are calculated based on the transaction sizes in bites and a set of figures. It is usually calculated in this format:`,
                subPoints: [
                    `Transaction size in byte multiplied by the addition of (0.155381 + 0.000043946).`,
                ],
            },
            {
                topic: ``,
                point: `In a situation where a user is processing a transaction of 5 bytes size, the transaction fees would be:`,
                subPoints: [
                    `(0.155381 + 0.000043946) * 5`
                ],
            },
            {
                topic: ``,
                point: `Which results in 0.77712473 ADA.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `ADA Market History, Market Capitalization And Price Stat.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `A 24-hour market volume of $11,867,200 was recorded on October 1st, 2017 as ADA was launched with an initial price of $0.021678. The token’s all-time low was experienced that same day as it dropped a little bit to be sold at of $0.01735. Exactly 60 days later, the token was being sold at $0.128264 with a market cap of $3,325,509,225. The market experienced a huge level of volatility resulting in the price being unpredictable. The major event, however, occurred on January 4th 2018 when ADA got an all-time high of being sold at $3.10 resulting in a market cap of over $95 Billion USD.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `ADA is currently being traded at $ADAcurrentPrice  on major exchanges with a market cap of $ADAcurrentMarketCap USD, 24-hour volume of $ADA24hourVolume USD and a circulating supply of $ADAcirculatingSupply  ADA from the total supply of $ADAtotalSupply  ADA.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 8,
        image: LearnImg8solana,
        title: 'Solana - The Overview',
        content: [
            {
                topic: ``,
                point: `.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 9,
        image: LearnImg9android,
        title: 'Best Android Wallets',
        content: [
            {
                topic: `Best Cryptocurrency Wallets For Android Users`,
                point: `The android OS is the most used mobile operating system today with millions of applications on Android stores. Mobile phone users utilize the andriod OS more than any other OS and that's the reason  we are making recommendations for top wallets they can use to store their tokens.`,
                subPoints: [],
            },
            {
                topic: `Why do we need a wallet?`,
                point: `As a coin HODLer, it is strongly recommended that you move your Bitcoin and/or other cryptocurrencies out of centralised exchanges as soon as you have purchased them. It is expected that you transfer such cryptocurrencies to a wallet that gives you a complete control of your assets. Though there are exchanges that offer high secure wallets, example of which is the Coinbase exchange, however, third party wallets stand to give you more control.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `We have heard of various hacking attacks on exchanges in the past. Top exchanges with massive daily trading volume becomes the target for hackers. Whenever exchanges suffer attacks, the users end up with the larger percentage of losses as cryptocurrencies do not have insurance coverage. This has called for a new way of storing digital assets, with stand-alone third-party wallets, we can safely store our cryptocurrencies, trade, spend and get to move around with our assets.`,
                subPoints: [],
            },
            {
                topic: `What are Android Crypto wallets?`,
                point: `Crypto wallets for Android users are mobile applications that allow you to conveniently store Bitcoin alongside other (supported) cryptocurrencies right on your android devices. These wallets either store your digital assets on your device and make it accessible offline (for cold wallets) or store them online (for hot wallets). See the different types of crytocurrency wallets that we have here.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Android users can now walk around with assets worth millions of dollars safely without the fear of losing them to hacking attacks on exchanges. Although,  there was supposed to be a cause of concern as regards the possibility of the android device getting lost, most Android bitcoin wallets have recovery features which require the users to export their private keys and recovery seeds from their mobile devices.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Without holding anything behind, mobile wallets are not as secure as hardware wallets. In fact, it has been established that they are the least secure option. This is because most of these crypto wallets for android users store the assets online. Online storages in general can be attacked by internet thieves with the contents getting stolen in such occurrences.`,
                subPoints: [],
            },
            {
                topic: `Top 7 Best Cryptocurrency Wallets For Android`,
                point: `.`,
                subPoints: [],
            },
            {
                topic: `Blockchain Wallet`,
                point: `The blockchain wallet to be our favourite Bitcoin wallet for Android and you can feel that from the tone in our critical review of this wallet. The wallet is best known for its efficient security, low fees and intuitive user interface. In addition to Bitcoin, Blockchain wallet supports ETH, BCH, XLM and USD PAX. The wallet allows you to export the wallet seeds and private keys thereby giving you recovery options in case of device loss.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Get the full wallet review here.`,
                subPoints: [],
            },
            {
                topic: `Blockchain Wallet Summary`,
                point: ``,
                subPoints: [
                    `Download link (https://www.blockchain.com/wallet)`,
                    `Google Play Store rating: 4.8`,
                    `Supported cryptocurrencies: BTC, ETH, BCH, XLM, USDT, DOT, ALGO, AAVE.`,
                    `PROS: Intuitive user interface, allows web and mobile wallet pairing, low and customizable fees, decentralized exchange, very secure.`,
                    `CONS: It only supports a few coins, it does not support fiat, very burdensome verification processes.`
                ],
            },
            {
                topic: `Trust Wallet`,
                point: `Trust wallet is one of the leading cryptocurrency wallets in general as at the year, 2021. The wallet comes with a very attractive user interface and supports tons of coins and tokens. The wallet was acquired by Binance in July  2018 and has since gone on to be adopted by hundreds of thousands of cryptocurrency traders.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Trust wallet’s supportability for ERC tokens made it an ideal one usually recommended by ICO projects, it offers full transaction information and market statistics for your stored cryptocurrencies.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Keys and seeds are stored on the device rather than online, also the wallet is known for its intense security measures to protect users’ assets.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Full wallet review here.`,
                subPoints: [],
            },
            {
                topic: `Trust Wallet Summary`,
                point: ``,
                subPoints: [
                    `Download link (https://trustwallet.com/)`,
                    `Google Play Store rating: 4.5`,
                    `Supported cryptocurrencies: BTC, ETH, EOS, BCH, LTC, all ERC tokens and various others.`,
                    `PROS: Best for airdrops, attention-to-detail user interface, offers market statistics, Very secure.`,
                    `CONS: Slow customer support`
                ],
            },
            {
                topic: `imToken Wallet`,
                point: `imToken wallet is a simple light-weight digital crypto wallet that allows cryptocurrency traders to conveniently store, send and spend their cryptocurrencies using their Android device. imToken wallet supports hundreds of cryptocurrencies including both the popular ones and the newly launched tokens.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Full imToken wallet review here.`,
                subPoints: [],
            },
            {
                topic: `imToken Wallet Summary`,
                point: ``,
                subPoints: [
                    `Download link`,
                    `Google Play Store rating: 4.5`,
                    `Supported cryptocurrencies: BTC, ETH, EOS, BCH, LTC, all ERC tokens and various others.`,
                    `PROS: Best for airdrops, attention-to-detail user interface, offers market statistics, Very secure.`,
                    `CONS: Slow customer support`,
                ],
            },
            {
                topic: `Coinomi Wallet`,
                point: `Coinomi is a mobile crypto wallet for android devices that offers in-app trading capabilities for the enthusiastic users of cryptocurrency. This wallet is security-focused and offers a friendly interface with a vast number of exceptional features. Its functionalities make it one of the most-recommended wallets by ICO projects.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Cryptocurrency users have the ability to manage all their assets in a single portfolio due to Coinomi’s multi-cryptocurrency support. As well, the app is very easy to use. Coinomi offers too much to be disregarded among the top best Bitcoin wallets of the year, 2021.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Full Coinomi wallet review here.`,
                subPoints: [],
            },
            {
                topic: `Coinomi Wallet Summary`,
                point: ``,
                subPoints: [
                    `Download link ()`,
                    `Google Play Store rating: 3.8`,
                    `Supported cryptocurrencies: BTC, ETH, BTG, BCH, EOS, LTC, XMR, XRP, ETC, all ERCs, hundreds others`,
                    `PROS: Easy to use interface, multiple cryptocurrency support, cross platform support, very security-focused`,
                    `CONS: Not an open source application`
                ],
            },
            {
                topic: `Atomic Wallet`,
                point: `The atomic wallet is a completely decentralized  wallet for android users that was developed and launched in 2017. The wallet has several key features with one of the leading ones being the Changely, ChangeNow and ShapeShift exchanges incorporation. Apart from giving its users the ability to store multiple cryptocurrencies, Atomic wallet is seamlessly linked to exchanges where users can securely trade cryptocurrencies.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Full Atomic wallet review here.`,
                subPoints: [],
            },
            {
                topic: `Atomic Wallet Summary`,
                point: ``,
                subPoints: [
                    `Download link (https://play.google.com/store/apps/details?id=io.atomicwallet&hl=en&gl=US)`,
                    `Google Play Store rating: 4.3`,
                    `Supported cryptocurrencies: BTC, ETH, EOS, BCH, LTC, all ERC tokens and various others.`,
                    `PROS: Supports multiple cryptocurrencies, has in-app decentralized exchange, fast`,
                    `CONS: Various technical issues reported`,
                ],
            },
            {
                topic: `Abra Wallet`,
                point: `Abra is one of the few android wallets that supports both cryptocurrency and fiat currencies interoperability. The wallet comes best on android devices although there is a supported version for iOS users. You can easily store, transfer, spend and trade Bitcoin, Bitcoin Cash, Ethereum, Litecoin and 25 other cryptocurrencies.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Although there is a drawback of complete transparency where anonymity is not an option, the wallet provides an overall pleasant user experience with all security options positively checked.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Full Abra wallet review here.`,
                subPoints: [],
            },
            {
                topic: `Abra Wallet Summary`,
                point: ``,
                subPoints: [
                    `Download link (https://play.google.com/store/apps/details?id=com.plutus.wallet&hl=en&gl=US)`,
                    `Google Play Store rating: 4.1`,
                    `Supported cryptocurrencies: BTC, TRX, ADA, ETH, EOS, BCH, LTC, all ERC tokens and various others.`,
                    `PROS: Supports multiple cryptocurrencies, supports purchase of cryptocurrencies with fiats, pleasant user interface, open source, very secure`,
                    `CONS: None`
                ],
            },
            {
                topic: `Edge Wallet`,
                point: `Edge wallet is a mobile digital wallet that supports bitcoin and hundreds of other cryptocurrencies. This wallet is our top recommendation for newbie traders as it offers special features for the new comers in the cryptocurrency space. Edge also has a business partnership with Bitcoin, offering cashback as this coin is bought through the app.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `If you are security concerned, Edge is one of the few bitcoin wallets that you can use on your android device. As an open source application, the project is often updated by reputable contributors from different parts of the globe.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Learn more through our full Edge wallet review here.`,
                subPoints: [],
            },
            {
                topic: `Edge Wallet Summary`,
                point: ``,
                subPoints: [
                    `Download link (https://play.google.com/store/apps/details?id=co.edgesecure.app&hl=en&gl=US)`,
                    `Google Play Store rating: 4.1`,
                    `Supported cryptocurrencies: Bitcoin and hundreds of other cryptocurrencies`,
                    `PROS: Beginner friendly, attractive cashback on Bitcoin purchases, supports multiple cryptocurrencies, open source`,
                    `CONS: None reported`
                ],
            },
            {
                topic: `Conclusion`,
                point: `Android cryptocurrency wallets provide cryptocurrency enthusiasts with various options to securely store their digital assets. There are more of these wallets for android devices than others due to the population of Android users. Online wallets are often criticized for their security weaknesses and hackers’ abilities to launch attacks.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `To have your coins completely safe from theft, attacks and other factors that can result in you losing them, we recommend that you take on the following precautions:`,
                subPoints: [
                    `Save your private keys outside the wallet applications,`,
                    `Export your recovery seeds to your protected drives,`,
                    `Enable two-factor authentication for wallets that have the functionality.`,
                ],
            },
            {
                topic: ``,
                point: `Cryptocurrency trading has been found to be a very lucrative business venture. However, you can find yourself exposed to too many risks than you are ready to cover. So, we recommend that you use secure wallets always and be as attentive as you can be in handling your digital assets.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 10,
        image: LearnImg10trust,
        title: 'Trust Wallet Review',
        content: [
            {
                topic: ``,
                point: `Personalervices.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Checkingyourself.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 11,
        image: LearnImg11blockchain,
        title: 'Blockchain Wallet Review',
        content: [
            {
                topic: ``,
                point: `Personalervices.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Checkingyourself.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 12,
        image: LearnImg12imtoken,
        title: 'imToken Wallet Review',
        content: [
            {
                topic: ``,
                point: `Personalervices.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Checkingyourself.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 13,
        image: LearnImg13atomic,
        title: 'Atomic Wallet Review',
        content: [
            {
                topic: ``,
                point: `Personalervices.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Checkingyourself.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 14,
        image: LearnImg14bitcoin,
        title: 'Understanding The Bitcoin Blockchain - Full Guide; Bitcoin Block Fields, Blockheaders, Concensus Algorithm & Mining',
        content: [
            {
                topic: ``,
                point: `Personalervices.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Checkingyourself.`,
                subPoints: [],
            },
        ],
    },
    {
        id: 15,
        image: LearnImg15ethereum,
        title: 'The Ethereum Blockchain Guide, Decentralized Governance, Smart Contracts & DApps',
        content: [
            {
                topic: ``,
                point: `Personalervices.`,
                subPoints: [],
            },
            {
                topic: ``,
                point: `Checkingyourself.`,
                subPoints: [],
            },
        ],
    },
];