import React from 'react'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import SeoHead from '@/components/seo-head'

export default function RiskDisclosure() {
    const info = [
        {
            title: null,
            des: [
                {
                    name: `WinproFX (a trading name of Winpro), is reputed by the Financial Services Commission of the Republic of Mauritius with an Investment Dealer license 2023-00197, having its registered office at 1st Floor, The Sotheby Building,Rodney Bay, Gros-Islet,SAINT Lucia P.O Box 838,Castries, Saint Lucia.`
                }
            ],
        },
        {
            title: 'We do not provide investment advice.',
            des: [
                {
                    name: `If you are unsure if this form of investing suits you, you should seek advice from an authorised financial adviser. We are not currently authorised to give investment advice of any kind and therefore will not provide advice to you. However, from time to time, we may give you information in relation to an underlying market or a transaction which you have enquired about.`
                }

            ],
        },
        {
            title: 'Only speculate with money you can afford to lose.',
            des: [
                {
                    name: `This Risk Warning is meant to help you understand the risks involved with the products and services offered by us; however, this Risk Warning cannot explain all risks involved. It can only serve as a general guide to the risks involved with trading our products and using our services, and you must determine for yourself if the risks involved are appropriate for your investment strategy and risk appetite.`
                },
                {
                    name: `Trading in derivative financial products involves high risks. Spread bets and CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. Prices may move rapidly against you, particularly during volatile market conditions. Certain Products are more volatile than others and may be even more susceptible to sharp and sudden movements in price.`
                },
                {
                    name: `You should not enter into CFD Margin Trades unless you fully understand the risks involved.`
                },
            ],
        },
        {
            title: 'When deciding whether to trade in such instruments you should be aware of the following:',
            des: [
                {
                    name: null,

                },
            ],
            list: [
                {
                    title: 'CFD Trading May Not be Appropriate for You',
                    des: [
                        {
                            name: `Before you are able to open an account to trade a CFD or spread bet product, WinproFX will evaluate whether the product(s) and/ or services you have chosen are appropriate for you, and to warn you if, on the basis of the information you provide to us, any product or service is not appropriate. Any decision to open an account and to use our products or services is yours. It is your responsibility to understand the risks involved with our products or services.`
                        },
                        {
                            name: `During our application process, our assessment process may include a questionnaire that focuses on previous experience and knowledge around the product and the risks involved in trading complex instruments. It is up to you to assess whether your financial resources are adequate for your financial activity with us and your risk appetite in the products and services you use.`
                        },
                    ]
                },
                {
                    title: 'We Do Not Provide Advice',
                    des: [
                        {
                            name: `Our services are provided on an execution only basis. We do not provide investment advice in relation to CFDs or spread bets. We sometimes provide factual information or research recommendations about a market, information about transaction procedures and information about the potential risks involved and how those risks may be minimised.`
                        },
                        {
                            name: `Any information we provide to you, including any information provided by our client services team, is purely factual and does not take into account your personal circumstances. Any decision to use our products or services is made by you.`
                        },
                        {
                            name: `You are responsible for managing your tax and legal affairs including making any regulatory filings and payments and complying with applicable laws and regulations. We do not provide any regulatory, tax or legal advice. If you are in any doubt as to the tax treatment or liabilities of investment products available through your CFD or spread betting account, you should seek independent advice.`
                        },
                    ]
                },
                {
                    title: 'Trading Off-Exchange',
                    des: [
                        {
                            name: `When you trade with us, you will be entering into an off-exchange (also known as an over-the-counter, or OTC) derivative which is non-transferable. This means you will enter into trades directly with us and those trades must be closed with us. You will not be able to sell or transfer your trades to third parties. This can involve greater risk than investing in a financial instrument which is transferable, or dealing in an exchange-traded derivative, because your ability to open and close trades with us is dependent on our being in a position to accept orders from you and to execute them.`,
                        },
                    ],
                },
                {
                    title: 'Margin',
                    des: [
                        {
                            name: `CFD Margin Trades involve leverage (also known as ‘gearing’ or ‘margining’), which means that the effects of small movements in Price are multiplied and may have large impacts on the value of your Positions, both in respect of profits made and losses incurred and the higher the leverage rate, the higher the risk involved. You can rapidly lose on a trade. Any market losses exceeding the Margin will be taken from your account. You may be called upon to deposit additional Margin at short notice to maintain your trade. We will revalue your open trades continuously during each trading day, and any profit or loss will be immediately reflected in your account. A loss may require you immediately to deposit additional funds in your account in order to maintain your open trades.`,
                        },
                        {
                            name: `It is therefore important that you monitor your CFD Margin Trades closely and the rate of leverage utilized. A small movement in price may have a large impact on your CFD margin trades and account and may result in immediate account close-out.`,
                        },
                    ]
                },
                {
                    title: 'TO PROVIDE YOU WITH PRODUCTS AND SERVICES, INFORMATION',
                    des: [
                        {
                            name: `Once you successfully open a trading account with us, or subscribe to an update, we will need to use your personal information to perform our services and comply with our obligations to you. It is also in our legitimate interests to try to ensure that we are providing the best products and services so we may periodically review your needs based on our assessment of your personal information to try to ensure that you are getting the benefit of the best possible products and services from us.`,
                        },
                    ]
                },
                {
                    title: 'Loss Limits Are Not Guaranteed',
                    des: [
                        {
                            name: `Making a stop loss order may limit your loss but this is not guaranteed. Your loss may be greater in some circumstances. Slippage (also called 'gapping') occurs when the market moves past the price at which you have set your stop loss order. This may occur because the underlying market has become unusually volatile. In such a circumstance we would close your open trade at or as quickly after the reopening of trading in that underlying market, i.e. at the next price available. Additionally, markets may also be extremely busy when the underlying market becomes volatile. This may result in your stop loss order being executed at a price below your stop loss order price in a rapidly falling underlying market.`,
                        },
                    ]
                },
                {
                    title: 'Past Performance',
                    des: [
                        {
                            name: `You should not assume that past performance bears any relation to potential future performance. There can be no certainty concerning the future performance of any underlying market or trades that you make. No representation can be made as to future performance.`,
                        },
                    ]
                },
                {
                    title: 'Currency',
                    des: [
                        {
                            name: `If you trade in a market denominated in a currency other than your base currency, currency exchange fluctuations may impact your profits and losses.`,
                        },
                    ]
                },
                {
                    title: 'Volatility',
                    des: [
                        {
                            name: `Movements in the price of underlying markets can be volatile. This will have a direct impact on your profits and losses. Knowing the volatility of an underlying market will help guide you as to where any Stops should be placed. It should be noted that volatility can be unexpected and unpredictable.`,
                        },
                    ]
                },
                {
                    title: 'Out-Of-Hours Markets',
                    des: [
                        {
                            name: `During the out-of-hours sessions on index markets, our quotations reflect our own view of the prospects for a market. This could include referring to price movements in other relevant markets which are open. Furthermore, business done by other clients may itself affect our quotations. There may be nothing against which to measure our quotation at these times.`,
                        },
                    ]
                },
                {
                    title: 'Out-Of-Hours Markets',
                    des: [
                        {
                            name: `At times, market conditions and the operation of the rules of certain markets (i.e. suspension of trades due to volatility, lack of liquidity in the underlying, and other reasons) may make trading riskier. This may lead, in extreme cases, to a change of the settlement of a contract. We reserve the right to change settlement for contracts expiring on a given day if, on that day, trading is suspended.`,
                        },
                    ]
                },
                {
                    title: 'Leverage of Gearing',
                    des: [
                        {
                            name: `Leverage or gearing enables you to enter into trades with a small deposit (also called margin) in terms of the overall contract value. However, this means a small movement in the underlying market can have a disproportionately dramatic effect on your trade.`,
                        },
                        {
                            name: `Even a small movement in the underlying market may result in the loss of your entire margin amount. Therefore, it is imperative that you only speculate with money that you can afford to lose.`,
                        },
                    ]
                },
                {
                    title: 'Contingent Liability Transaction',
                    des: [
                        {
                            name: `Where a trade is margined, we require you to make a series of payments against the purchase price, instead of paying the whole purchase price immediately. Even if a trade is not margin, it may still carry an obligation to make further payments in certain circumstances over and above any amount paid when you entered into the contract. Contingent liability transactions which are not traded on or under the rules of a recognised or designated investment exchange may expose you to substantially greater risks.`,
                        },
                    ]
                },
                {
                    title: 'Spreads, Commissions and Costs',
                    des: [
                        {
                            name: `Before you begin to trade with us, you should obtain details of all commissions and other charges for which you will be liable. If any charges are not expressed in money terms (for example, as a bid offer spread), you should obtain a clear explanation of what such charges are likely to mean in specific money terms. In the case of futures, when commission is charged as a percentage, it will normally be as a percentage of the total contract value, and not simply as a percentage of your initial payment.`,
                        },
                        {
                            name: `Depending on the type of trade you make and how long it lasts we may require you to pay financing costs. Also, if you trade in currencies different from your base currency, we may require you to convert those foreign currencies to your base currency. The aggregate of financing costs and foreign exchange costs may exceed any profits on your trade or increase the losses you may suffer on a trade.`,
                        },
                    ]
                },
                {
                    title: 'Insolvency',
                    des: [
                        {
                            name: `The insolvency or default of any other brokers involved with your transaction, may lead to positions being liquidated or closed out without your consent. In certain circumstances, you may not get back the actual assets that you have invested, and you may have to accept any available payments in cash.`,
                        },
                    ]
                },
                {
                    title: 'Regulatory and Legal Risk',
                    des: [
                        {
                            name: `The risk that a change in laws and regulations will materially impact a security and investments in a sector or market. A change in laws or regulations made by the government or a regulatory body can increase the costs of operating a business, reduce the attractiveness of investment and/or change the competitive landscape and as such alter the profit potential of an investment. This risk is unpredictable and may vary from market to market. In emerging markets such risk may be higher than in more developed markets.`,
                        },
                    ]
                },
                {
                    title: 'Tax Risk',
                    des: [
                        {
                            name: `You take the risk that your trades and any related profits may be or become subject to tax. We do not represent or warrant that no tax or stamp duty (other than trading duty) will be payable. You will be responsible for all taxes and stamp duty in respect of your trades. WinproFX does not provide any tax advice to clients, and you are responsible for your own tax affairs.`,
                        },
                    ]
                },
                {
                    title: 'Your Money',
                    des: [
                        {
                            name: `If you have been categorised as a retail client or we have otherwise agreed to treat you as a professional client, we will hold your money in trust in a segregated client money bank account separate from our money; however, this may not provide complete protection (for example, in the insolvency of our bank). Your attention is also drawn to the 'Your Money' section of our Customer Terms and Conditions.`,
                        },
                    ]
                },
                {
                    title: 'System Failure',
                    des: [
                        {
                            name: `Operational risks with WinproFX on your device are inherent in every CFD transaction. Disruptions in WinproFX’s operational processes such as phone systems, IT systems, networks or external events may lead to delays in the execution and settlement of a transaction.`,
                        },
                        {
                            name: `The functions that enable you to access our Platform via mobile applications are not identical to the functions available to you when accessing our Platform via a desktop computer. This may limit the information that you are able to see at any time and adversely affect your ability to take quick and reliable actions on our Platform and to limit the related risks.`,
                        },
                        {
                            name: `WinproFX accepts or bears any liability whatsoever in relation to the operational processes of WinproFX, except to the extent that it is caused by the fraud or dishonesty by WinproFX.`,
                        },
                        {
                            name: `For more information you can contact us at support <strong>support@winprofx.com</strong>`,
                        },
                    ]
                },
            ]
        },
    ]
    return (
        <div className='padding-top-245'>
            <SeoHead
                title="Risk Disclosure | WinproFX"
                description="Explore the risks of Forex trading with WinproFX's detailed risk disclosure. Understand market volatility and learn key safety measures. Click to read more!"
                canonicalPath="/risk-disclosure"
            />
            <TopShape />
            <PolicyTitle
                title="Risk Disclosure"
            />
            <Container>
                <Card>
                    {info.map((item, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: y + 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.1` }}
                            viewport={{ once: once, amount: 0.2 }}
                            className='flex flex-col mb-6 md:mb-8 lg:mb-10 last:mb-0' key={idx}
                        >
                            {item.title &&
                                <h4 className='text-2xl mb-3 md:mb-4 lg:mb-5 font-medium max-w-max w-full'>{item.title}</h4>
                            }
                            {item.des.map((des, i) => (
                                <React.Fragment key={i}>
                                    {des.name &&
                                        <p key={i} className='mb-4 md:mb-5 lg:mb-6 last:mb-0 [&>strong]:font-semibold [&>strong]:text-white [&>strong]:underline' dangerouslySetInnerHTML={{ __html: des.name }}></p>
                                    }
                                    {des.ul &&
                                        <div className="flex flex-col gap-y-0.5 pl-2 -mt-2 mb-4 md:mb-5 lg:mb-6 last:mb-0">
                                            {des.ul?.map((uli, ulk) =>
                                                <p key={ulk} className='flex gap-x-2.5 items-start'>
                                                    <span className='block size-1 rounded-full bg-para translate-y-2.5'></span>
                                                    {uli}
                                                </p>
                                            )}
                                        </div>
                                    }
                                </React.Fragment>
                            ))}
                            {item.list &&
                                <div className=" bg-white/2 border border-solid border-white/8 p-4 md:p-6 lg:p-8 rounded-2xl lg:rounded-[20px]">
                                    {item.list.map((l, k) => (
                                        <div className='flex flex-col mb-6 md:mb-8 lg:mb-10 last:mb-0' key={k}>
                                            <h4 className='text-lg leading-tight font-semibold uppercase mb-3 md:mb-4 lg:mb-5 max-w-max w-full'>{k + 1}. {l.title}</h4>
                                            {l.des.map((ldes, li) => (
                                                <React.Fragment key={li}>
                                                    <p key={li} className='mb-4 md:mb-5 lg:mb-6 last:mb-0 [&>strong]:font-semibold [&>strong]:text-white [&>strong]:underline' dangerouslySetInnerHTML={{ __html: ldes.name }} />
                                                    {ldes.ul &&
                                                        <div className="flex flex-col gap-y-0.5 pl-2 -mt-2">
                                                            {ldes.ul?.map((uli, ulk) =>
                                                                <p key={ulk} className='flex gap-x-2.5 items-start'>
                                                                    <span className='block size-1 rounded-full bg-para translate-y-2.5'></span>
                                                                    {uli}
                                                                </p>
                                                            )}
                                                        </div>
                                                    }
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            }
                        </motion.div>
                    ))}
                </Card>
            </Container>
        </div>
    )
}
