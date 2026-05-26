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
import bg from '@/assets/img/trade/crypto-bg.png'

export default function Crypto() {
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
            title: 'WHAT IS CRYPTOCURRENCY?',
            body: `
                <p>Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It’s a peer-to-peer system that can enable anyone anywhere to send and receive payments. Instead of being physical money carried around and exchanged in the real world, cryptocurrency payments exist purely as digital entries to an online database describing specific transactions. When you transfer cryptocurrency funds, the transactions are recorded in a public ledger. Cryptocurrency is stored in digital wallets.</p>
            `,
        },
        {
            title: 'HOW DOES CRYPTOCURRENCY WORK?',
            body: `
                <p>Cryptocurrencies run on a distributed public ledger called blockchain, a record of all transactions updated and held by currency holders. Units of cryptocurrency are created through a process called mining, which involves using computer power to solve complicated mathematical problems that generate coins. Users can also buy the currencies from brokers, then store and spend them using cryptographic wallets.</p>
            `,
        },
    ]

    return (
        <>
            <SeoHead
                title="Best Crypto Trading Platform in India | WinproFX"
                description="Explore the best crypto trading app and platform in India with WinproFX. Enjoy free funded accounts, low spreads, and advanced tools to enhance your cryptocurrency trading experience."
                keywords="Best Crypto Trading App in India, WinProFX Crypto Trading Platform, Free Funded Accounts, Crypto Brokers in India, Cryptocurrency Trading India, Low Spreads Crypto Trading, User-Friendly Crypto Trading App"
                canonicalPath="/crypto"
            />
            <div className="h-screen xl:h-235 2xl:h-300 pt-25 md:pt-0 4xl:min-h-screen pb-13 md:pb-12 xl:pb-25 flex flex-col w-full relative">
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
                <div className="hidden md:block md:absolute top-0 left-0 size-full bg-linear-180 to-black from-black/0 -z-9 lg:hidden"></div>
                <div className="max-w-437 w-full mx-auto px-4 md:px-6 mt-auto flex items-start flex-wrap justify-center md:justify-between gap-y-4 text-center md:text-start">
                    <motion.div
                        initial={{ opacity: 0, x: -y }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: duration, delay: 0.2 }}
                        viewport={{ once: once, amount: 0.2 }}
                        className="flex flex-col items-start justify-start max-w-150 lg:max-w-110 xl:max-w-160">
                        <MetaText title="Crypto trading" className="mb-4 md:mb-5 lg:mb-6 hidden! md:inline-block!" />
                        <h1 className='h1 max-w-75 mx-auto md:max-w-full'>Capture opportunities in crypto markets</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: y }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: duration, delay: 0.2 }}
                        viewport={{ once: once, amount: 0.2 }}
                        className="flex flex-col gap-y-3 lg:max-w-120 xl:max-w-130 2xl:max-w-175 w-full">
                        <p className='text-para2'>Cryptocurrencies are digital assets built on blockchain technology, offering decentralized and transparent financial transactions. Over the past decade, crypto markets have evolved into one of the fastest-growing trading opportunities globally.</p>
                        <p className='text-para2'>With our platform, you can trade popular cryptocurrencies like Bitcoin, Ethereum, and more through CFDs—allowing you to speculate on price movements without owning the underlying asset.</p>
                        <p className='text-para2'>Benefit from high liquidity, 24/7 market access, and advanced trading tools designed for both beginners and experienced traders.</p>
                        <Button animation={false} className="mt-3 lg:mt-5" />
                    </motion.div>
                </div>
                <img src={bg} className='md:absolute top-0 md:left-1/2 md:-translate-x-1/2 w-auto mx-auto h-full lg:h-auto object-cover -z-10 pointer-events-none' alt="" />

            </div>
            <div className="common-padding">
                <Container>
                    <div className="flex flex-col gap-y-6 lg:gap-y-8 max-w-6xl">
                        <Card
                            meta="Crypto trading"
                            title="Trade Popular Cryptocurrency Pairs"
                            des={<>
                                <p>Track real-time price movements and explore opportunities across leading crypto assets.</p>
                            </>}
                            img={img}
                        />
                        <Cta />
                    </div>
                </Container>
            </div>
            <div className="common-padding pt-0">
                <div className='max-w-215 mx-auto px-3'>
                    <CommonTitle className='text-center' title="Learn About Cryptocurrency Trading" />
                    <Accordion items={item} activeItem={0} />
                </div>
            </div>
        </>
    )
}
