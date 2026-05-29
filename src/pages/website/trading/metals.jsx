import React from 'react'
import { Container } from '@/components/grid'
import Accordion from '@/components/accordion'
import CommonTitle from '@/components/common-title';
import Card from '@/components/trade/card';
import Cta from '@/components/trade/cta';
import banner_bg from '@/assets/img/trade/metals-banner-bg.png'
import CommonBanner from '@/components/common-banner';
import img from '@/assets/img/trade/metals.png'
import SeoHead from '@/components/seo-head'

export default function Metals() {
    const item = [
        {
            title: 'WHY TRADE METAL WITH WINPROFX',
            body: `
                <p>WinproFX a rich track record spanning more than 16 years. We have delivered our traders great opportunities and unparalleled trading experience. This positions us as one of the leading brokers when it comes to metals trading. So, if you’re looking to trade in Gold, there are many reasons to choose WinproFX: Thousands of happy and satisfied traders</p>                
                <p>Round-the-clock support available
                   Super-fast withdrawal and executionl
                Rich analytics to make informed decisions</p>
                <p>For example, if you choose to trade GBP/USD (British pound/US dollar) and you think the value of the GBP will rise against USD, you go long (buy). If you think GBP will fall against USD, you go short (sell). If your prediction is correct, you make a profit. If your prediction is incorrect, you would make a loss. Remember, losses can exceed deposits..</p>
            `,
        },
        {
            title: 'STEP UP YOUR COMMODITIES TRADING GAME',
            body: `
                <p>Gold is the most actively traded metal. Based on the law of supply and demand, its price is determined by the 24/7 market. Other factors like the value of the US dollar, industrial demand, as well as inflation also influence its price. If you’re looking to trade metals, get started on the right track with WinproFX and stride confidently to become a seasoned trader. </p>
                
            `,
        },
        {
            title: 'HOW DOES METAL TRADING WORK?',
            body: `
                <p>In order to optimize returns, the traders must have a clear understanding of all the factors that affect the price of gold and other metals. Interestingly, the price drivers of precious metals are quite different in comparison to other instruments. </p>
                
            `,
        },
    ]

    return (
        <>
            <SeoHead
                title="Best Metals Trading Platform in India | WinproFX"
                description="Explore the best metals trading app and platform in India with WinproFX. Trade gold, silver, and more with free funded accounts, low spreads, and advanced tools."
                keywords="Best Metals Trading App in India, WinProFX Metals Trading Platform, Free Funded Accounts, Metals Brokers in India, Metals Trading India, Low Spreads Metals Trading, Gold and Silver Trading India, User-Friendly Metals Trading App"
                canonicalPath="/trading/metals"
            />
            <CommonBanner
                bg={banner_bg}
                bgClass="bottom-0 md:left-1/2 md:-translate-x-1/2 w-full object-contain w-auto h-auto"
                meta="Metals trading"
                title="Metals Trading"
                des={
                    <>
                        Spot Metal Trading holds a special place in the heart of every trader. Metals have attracted traders all over the world since ancient times and continue to do so today.
                        <span className='block mt-3'>WinproFX Trader offers the lowest ever spreads in various metals based on your core interest and preference. Explore our Best Precious Metals Trading Platform for optimal trading experiences.</span>
                    </>
                }
            />
            <div className="common-padding">
                <Container>
                    <div className="flex flex-col gap-y-6 lg:gap-y-8 max-w-6xl">
                        <Card
                            meta="Forex trading"
                            title="Popular Indices Markets"
                            des={<>
                                <p>Track real-time performance of key metals and identify trading opportunities across global commodity markets.</p>
                            </>}
                            img={img}
                        />
                        <Cta />
                    </div>
                </Container>
            </div>
            <div className="common-padding pt-0">
                <div className='max-w-215 mx-auto px-3'>
                    <CommonTitle className='text-center' title="Learn About Metals Trading" />
                    <Accordion items={item} activeItem={0} />
                </div>
            </div>
        </>
    )
}
