import React from 'react'
import { Container } from '@/components/grid'
import Accordion from '@/components/accordion'
import CommonTitle from '@/components/common-title';
import Button from '@/components/button';
import MetaText from '@/components/meta-text';
import Card from '@/components/trade/card';
import Cta from '@/components/trade/cta';
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import SeoHead from '@/components/seo-head'

import img from '@/assets/img/trade/crypto.png'
import bg from '@/assets/img/trade/commodities-banner-bg.png'

export default function Commodities() {
    const item = [
        {
            title: 'What are commodities?',
            body: `
                <p>Commodities are raw materials or primary agricultural products that can be bought and sold in the financial markets. They are typically used in the production of other goods and services and are traded on commodity exchanges around the world. Some examples include metals (gold, silver, and platinum), energy sources (coal, crude oil, and natural gas), agricultural products (soybeans, corn, and wheat), and livestock and animal products (cattle, eggs, and milk).</p>
                
                
            `,
        },
        {
            title: 'How does commodity trading work?',
            body: `
                <p>Commodities are raw materials or primary agricultural products that can be bought and sold in the financial markets. They are typically used in the production of other goods and services and are traded on commodity exchanges around the world. Some examples include metals (gold, silver, and platinum), energy sources (coal, crude oil, and natural gas), agricultural products (soybeans, corn, and wheat), and livestock and animal products (cattle, eggs, and milk). </p>
                
            `,
        },
        {
            title: 'How much money do I need to start commodity trading?',
            body: `
                <p>Commodities are raw materials or primary agricultural products that can be bought and sold in the financial markets. They are typically used in the production of other goods and services and are traded on commodity exchanges around the world. Some examples include metals (gold, silver, and platinum), energy sources (coal, crude oil, and natural gas), agricultural products (soybeans, corn, and wheat), and livestock and animal products (cattle, eggs, and milk).</p>
                
            `,
        },
    ]

    return (
        <>
            <SeoHead
                title="Best Commodities Trading Platform in India | WinproFX"
                description="Explore the best commodities trading app and platform in India with WinproFX. Get free funded accounts, low spreads, and advanced tools for successful commodities trading."
                keywords="Best Commodities Trading App in India, WinProFX Commodities Trading Platform, Free Funded Accounts, Commodities Brokers in India, Commodities Trading India, Low Spreads Commodities Trading, User-Friendly Commodities Trading App"
                canonicalPath="/trading/commodities"
            />
            <div className="h-screen pt-30 md:pt-0 xl:h-235 2xl:h-280 3xl:h-300 4xl:min-h-screen pb-13 md:pb-12 xl:pb-25 flex flex-col w-full relative">
                <svg className='absolute top-0 right-0 -z-10 pointer-events-none' width="1920" height="971" viewBox="0 0 1920 971" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6" filter="url(#filter0_f_1_9152)">
                        <g filter="url(#filter1_f_1_9152)">
                            <path d="M190.319 -361.462C380.612 -760.374 849.062 -933.888 1236.62 -749.008C1624.18 -564.127 1784.09 -90.8702 1593.8 308.046C1403.5 706.961 1207.95 270.712 820.394 85.8359C432.835 -99.0399 0.0215149 37.4537 190.319 -361.462Z" fill="url(#paint0_radial_1_9152)" />
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_f_1_9152" x="-356" y="-1323" width="2530" height="2293.94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_1_9152" />
                        </filter>
                        <filter id="filter1_f_1_9152" x="50" y="-917" width="1718" height="1481.94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="47" result="effect1_foregroundBlur_1_9152" />
                        </filter>
                        <radialGradient id="paint0_radial_1_9152" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1013.15 -280.535) rotate(121.07) scale(851.893 1276.08)">
                            <stop stopColor="#00D9FF" />
                            <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="hidden md:block absolute top-0 left-0 size-full bg-linear-180 to-black from-black/0 -z-9 lg:hidden"></div>
                <div className="max-w-437 w-full mx-auto px-4 md:px-6 mt-auto text-center md:text-start flex items-start flex-wrap justify-center md:justify-between gap-y-4">
                    <motion.div
                        initial={{ opacity: 0, x: -y }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: duration, delay: 0.2 }}
                        viewport={{ once: once, amount: 0.2 }}
                        className="flex flex-col items-start justify-start max-w-150 lg:max-w-110 xl:max-w-160">
                        <MetaText title="Commodities trading" className="mb-4 md:mb-5 lg:mb-6 hidden! md:inline-block!" />
                        <h1 className='max-w-75 mx-auto md:max-w-full text-3xl md:text-5xl lg:text-6xl xl:text-[64px] leading-[110%] font-medium'>Trade Global Commodity Markets</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: y }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: duration, delay: 0.2 }}
                        viewport={{ once: once, amount: 0.2 }}
                        className="flex flex-col gap-y-3 lg:max-w-120 xl:max-w-130 2xl:max-w-175 w-full">
                        <p className='text-para2'>Take advantage of market volatility and choose from CFDs on spot commodities and futures. At WINPROFX, we offer some of the most popular instruments in the commodity market including gold, oil, and coffee, for speculation and hedging. </p>
                        <p className='text-para2'>Trade per whole tick movement with zero commissions and no hidden fees. Explore our Best Commodity Trading Platform for seamless trading experiences.</p>
                        <Button animation={false} className="mt-3 lg:mt-5" />
                    </motion.div>
                </div>
                <img src={bg} className='md:absolute top-0 left-0 3xl:left-1/2 3xl:-translate-x-1/2 3xl:w-auto pt-16 lg:pt-22 w-full h-full lg:h-auto object-cover -z-10 pointer-events-none' alt="" />
            </div>
            <div className="common-padding">
                <Container>
                    <div className="flex flex-col gap-y-6 lg:gap-y-8 max-w-6xl">
                        <Card
                            meta="Commodities trading"
                            title="Live Commodity Markets"
                            des={<>
                                <p>Monitor real-time price action and track daily volatility across top-tier metals, energy, and agricultural assets.</p>
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
