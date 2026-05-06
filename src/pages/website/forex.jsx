import React from 'react'
import { Container } from '@/components/grid'
import Accordion from '@/components/accordion'
import CommonTitle from '@/components/common-title';
import Card from '@/components/trade/card';
import Cta from '@/components/trade/cta';
import banner_bg from '@/assets/img/trade/forex-banner-bg.png'
import CommonBanner from '@/components/common-banner';
import img from '@/assets/img/trade/forex.png'

export default function Forex() {
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
            title: 'WHAT IS FOREX?',
            body: `
               <p>Forex stands for FOREIGN EXCHANGE. In simple terms, by sitting in one place in the world, one can trade in any Country’s Currency, Metals, World Indices and Crypto by studying world economy and technical charts.</p>
            `,
        },
        {
            title: 'HOW TO TRADE FOREX?',
            body: `
                <p>First, find a reputed Forex broker, such as WinproFX, open an account, deposit funds, analyse the market trend, choose your preferred trading instrument, and finally take your position to earn a profit.</p>
            `,
        },
    ]

    return (
        <>
            <CommonBanner
                bg={banner_bg}
                bgClass="bottom-0 md:left-1/2 md:-translate-x-1/2 object-contain w-auto h-auto"
                meta="Forex trading"
                title="Move your money with global currency markets"
                des="Trade 24/5 on assets in the foreign exchange market. We offer over 50 major, minor, and exotic currency pairs, with competitive spreads, sharp prices, fast execution, and 0% commission."
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
                    <CommonTitle className='text-center' title="Learn About Forex Trading" />
                    <Accordion items={item} activeItem={0} />
                </div>
            </div>
        </>
    )
}
