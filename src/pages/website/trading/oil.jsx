import React from 'react'
import { Container } from '@/components/grid'
import Accordion from '@/components/accordion'
import CommonTitle from '@/components/common-title';
import Card from '@/components/trade/card';
import Cta from '@/components/trade/cta';
import MetaText from '@/components/meta-text';
import Button from '@/components/button';
import { motion } from 'framer-motion';
import { y, duration, once } from '@/utilities/animation'
import SeoHead from '@/components/seo-head'

import banner_bg from '@/assets/img/trade/oil-bg.png'
import banner_img from '@/assets/img/trade/oil-banner.png'
import img from '@/assets/img/trade/oil.png'

export default function Oil() {
    const item = [
        {
            title: 'How to start oil trading?',
            body: `
                <p>Before you start trading oil, it is essential to do your research and understand the market. You need to know what factors affect oil prices and how those factors may change in the future. Also, understand the different types of oil you can trade on the market and the products that use each.</p>
                `,
        },
        {
            title: 'What is the best strategy for crude oil trading?',
            body: `
                <p>Before you start trading oil, it is essential to do your research and understand the market. You need to know what factors affect oil prices and how those factors may change in the future. Also, understand the different types of oil you can trade on the market and the products that use each. </p>
                
            `,
        },
        {
            title: 'What is the best indicator for crude oil?',
            body: `
                <p>Before you start trading oil, it is essential to do your research and understand the market. You need to know what factors affect oil prices and how those factors may change in the future. Also, understand the different types of oil you can trade on the market and the products that use each.</p>
                
            `,
        },
    ]

    return (
        <>
            <SeoHead
                title="Best Oil Trading Platform in India | WinproFX"
                description="Discover the best oil trading app and platform in India with WinproFX. Trade crude oil with free funded accounts, low spreads, and advanced tools to enhance your trading success."
                keywords="Best Oil Trading App in India, WinProFX Oil Trading Platform, Free Funded Accounts, Oil Brokers in India, Oil Trading India, Low Spreads Oil Trading, Crude Oil Trading India, User-Friendly Oil Trading App"
                canonicalPath="/trading/oil"
            />
            <div className="relative z-1 min-h-screen overflow-hidden flex items-center pt-0 md:pt-40 lg:pt-40 xl:pt-50">
                <img src={banner_bg} className={`absolute top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none`} alt="" />
                <Container className="max-w-375!">
                    <div className="flex items-center flex-wrap justify-between text-center md:text-start">
                        <motion.div
                            initial={{ opacity: 0, x: -y }}
                            whileInView={{ opacity: 1, x: 1 }}
                            transition={{ duration: duration, delay: `0.2` }}
                            viewport={{ once: once, amount: 0.4 }}
                            className="max-w-154 w-full">
                            <MetaText className="mb-4 md:mb-5 lg:mb-6 hidden! md:inline-block!" title="Oil trading" />
                            <h1 className='max-w-65 mx-auto md:max-w-full text-2xl md:text-5xl lg:text-6xl xl:text-[64px] leading-[110%] font-medium capitalize mb-4 md:mb-5 lg:mb-7'>Trade Energy Futures with Precision</h1>
                            <p className='text-para2 max-w-150 lg:max-w-xl mb-4 md:mb-6 lg:mb-8'>Hedge against price volatility and capitalize on global market trends. Access real-time data, advanced charting, and deep liquidity on our premier trading platform to navigate the energy sector with confidence.</p>
                            <Button animation={false} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: y }}
                            whileInView={{ opacity: 1, x: 1 }}
                            transition={{ duration: duration, delay: `0.2` }}
                            viewport={{ once: once, amount: 0.4 }} className="max-w-206 w-full mt-8 md:mt-0">
                            <img src={banner_img} alt="" />
                        </motion.div>
                    </div>
                </Container>
            </div>

            <div className="common-padding">
                <Container>
                    <div className="flex flex-col gap-y-6 lg:gap-y-8 max-w-6xl">
                        <Card
                            meta="Oil trading"
                            title="Trade Live Market Data"
                            des={<>
                                <p>Track real-time price movements, daily fluctuations, and technical trends across premium energy assets.</p>
                            </>}
                            img={img}
                        />
                        <Cta />
                    </div>
                </Container>
            </div>
            <div className="common-padding pt-0">
                <div className='max-w-215 mx-auto px-3'>
                    <CommonTitle className='text-center' title="Learn About Commodities Trading" />
                    <Accordion items={item} activeItem={0} />
                </div>
            </div>
        </>
    )
}
