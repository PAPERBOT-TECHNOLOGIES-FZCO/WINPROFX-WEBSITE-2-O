import React from 'react'
import { Container } from '@/components/grid'
import Accordion from '@/components/accordion'
import CommonTitle from '@/components/common-title';
import Card from '@/components/trade/card';
import Cta from '@/components/trade/cta';
import banner_bg from '@/assets/img/trade/indices-banner-bg.png'
import CommonBanner from '@/components/common-banner';
import img from '@/assets/img/trade/indices.png'
import SeoHead from '@/components/seo-head'


export default function Indices() {
    const item = [
        {
            title: 'DISCOVER HOW TO TRADE',
            body: `
                <p>Download our Education app to learn how to trade on WinproFX Trader's various financial instruments. To get started, we've covered every aspect of trading.</p>
                <p>A Brief Summary of Recent News and Opinions</p>
                <p>Volatility Forecast Based on Technical Analysis</p>
                <p>Brief overview of major currency pairs based on the provided fundamental</p>
                <p>For example, if you choose to trade GBP/USD (British pound/US dollar) and you think the value of the GBP will rise against USD, you go long (buy). If you think GBP will fall against USD, you go short (sell). If your prediction is correct, you make a profit. If your prediction is incorrect, you would make a loss. Remember, losses can exceed deposits..</p>
            `,
        },
        {
            title: 'HOW ARE STOCK MARKET INDICES CALCULATED?',
            body: `
                <p>Most stock market indices are calculated according to the market capitalisation of their component companies. This method gives greater weighting to larger cap companies, which means their performance will affect an index’s value more than lower cap companies.</p>
            `,
        },
        {
            title: 'TRADE WITH LEVERAGE',
            body: `
                <p>When trading with leverage, you should remember that your profit or loss is calculated using the entire position size, not just the initial margin used to open it. This means that while leverage can magnify profits, it can also amplify losses.</p>
            `,
        },
    ]
    return (
        <>
            <SeoHead
                title="Best Indices Trading Platform in India | WinproFX"
                description="Explore the best indices trading app and platform in India with WinproFX. Enjoy free funded accounts, low spreads, and advanced tools to enhance your trading experience."
                keywords="Best Indices Trading App in India, WinProFX Indices Trading Platform, Free Funded Accounts, Indices Brokers in India, Indices Trading India, Low Spreads Indices Trading, User-Friendly Indices Trading App"
                canonicalPath="/indices"
            />
            <CommonBanner
                containerClass="text-center lg:text-start max-w-180 lg:max-w-210"
                bg={banner_bg}
                meta="Indices trading"
                title="Indices Trading"
                des="Indices track the performance of a group of top-performing companies, giving you exposure to entire economies through a single trade."
                desClass="max-w-140 lg:max-w-156 mx-auto lg:mx-0"
            />
            <div className="common-padding">
                <Container>
                    <div className="flex flex-col gap-y-6 lg:gap-y-8 max-w-6xl">
                        <Card
                            meta="Forex trading"
                            title="Popular Indices Markets"
                            des={<>
                                <p>Forex or the Foreign Exchange is a global market where currencies trade. It vastly overshadows the stock market, with forex trading reaching up to 5 trillion USD a day. </p>
                                <p>Since the forex market is not centralized it is open 24 hours a day, from Sunday night to Friday night. Choosing the Best Forex Trading Platform is crucial for optimizing your trading experience.</p>
                            </>}
                            img={img}
                        />
                        <Cta />
                    </div>
                </Container>
            </div>
            <div className="common-padding pt-0">
                <div className='max-w-215 mx-auto px-3'>
                    <CommonTitle className='text-center' title="Learn About Indices Trading" />
                    <Accordion items={item} activeItem={0} />
                </div>
            </div>
        </>
    )
}
