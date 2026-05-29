import React from 'react'
import { Container } from '@/components/grid'
import Accordion from '@/components/accordion'
import CommonTitle from '@/components/common-title';
import Card from '@/components/trade/card';
import Cta from '@/components/trade/cta';
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion'
import CommonBanner from '@/components/common-banner';
import TopShape from '../../components/top-shape';
import PlatformCard from '../../components/mt5/platform-card';
import PaymentFlow from '../../components/payment-flow';
import DemoCta from '../../components/demo-cta';
import SeoHead from '@/components/seo-head'

import banner_bg from '@/assets/img/analytics/banner-bg.png'
import b_img_1 from '@/assets/img/home/news/b-4.png'
import b_img_2 from '@/assets/img/home/news/b-5.png'
import b_img_3 from '@/assets/img/home/news/b-6.png'
import MetaText from '../../components/meta-text';

export default function Analytics() {

    const news_blog = [
        {
            meta: 'Event Tracker',
            title: 'Track Key Economic Events with Economic Calendar',
            des: 'Stay updated on crucial economic events and data releases to enhance your trading strategy on WINPROFX.',
            img: b_img_1,
        },
        {
            meta: 'Market News',
            title: 'Real-Time Market News from WINPROFX',
            des: 'Stay up to date with market news and the most recent updates from the FXStreet News team in real time. Use the WINPROFX Trade app or your WINPROFX Personal Area to gain access to this useful data.',
            img: b_img_2,
        },
    ]

    // faq item
    const item = [
        {
            title: 'Which tools on our platform offer the best market predictions?',
            body: `
                <p>Utilize the Economic Calendar to track important economic events and data releases. Stay updated with real-time news through FXStreet News and gain insights from Trading Central WebTV.</p>
            `,
        },
        {
            title: 'What tools on our website are best for analyzing trading patterns?',
            body: `
                <p>WINPROFX provides a combination of fundamental and technical analysis tools to help you predict price movements and analyze trading patterns. Tools are free to use and easily accessible, allowing you to plan your trades confidently and effectively.</p>
            `,
        },
        {
            title: 'Where can I access free trading signals on the WINPROFX website?',
            body: `
                <p>You can access free trading signals from Trading Central in your Personal Area and the WINPROFX Trade app. These signals incorporate various analytical approaches, providing insights on expected trends, and are valuable for both beginners and experienced traders to plan their strategies and trades.</p>
            `,
        },
    ]
    return (
        <>
            <SeoHead
                title="Analytical Tools | WINPROFX"
                description="Optimize your trading with WINPROFX's analytical tools. Use real-time news, economic calendars, & essential signals from Trading Central. Enhance your strategy now!"
                keywords="Analytical Tools, Trading Tools, Forex Analysis, Economic Calendar, Trading Signals, WINPROFX Tools, Market Analysis"
                canonicalPath="/analytics"
            />
            <TopShape />
            <CommonBanner
                center={false}
                bg={banner_bg}
                bgClass="bottom-0 md:left-1/2 md:-translate-x-1/2 object-contain w-auto h-auto 3xl:max-w-275"
                meta="Analytics Tools"
                title="Powerful Analytics Tools for Smarter Trading Decisions"
                des="To help you confidently plan your trades, we give you access to the best fundamental and technical analytics trading tools."
                containerClass="max-w-215! text-center"
                desClass="max-w-163 mx-0 md:mx-auto"
                className="3xl:min-h-300!"
            />

            <div className="common-padding">
                <Container>
                    <div className="grid gird-cols-1 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-6 mb-4 md:mb-5 lg:mb-6">
                        {news_blog.map((item, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: y }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: duration, delay: `0.${idx * 2}` }}
                                viewport={{ once: once, amount: 0.2 }}
                                key={idx}
                                className='h-full'
                            >
                                <div className="rounded-2xl h-full relative z-1 border border-solid border-[#CBCBE1]/12 p-4 md:p-6 lg:p-8 pb-0! bg-white/4 bg-linear-0 to-[#007DFF]/0 to-50% from-primary bg-no-repeat bg-bottom-right">
                                    <MetaText title={item.meta} className="mb-2.5 md:mb-4 lg:mb-5 hidden! md:inline-block!" />
                                    <h4 className='text-2xl md:text-3xl lg:text-[38px] leading-tight mb-3 line-clamp-2 max-w-115'>{item.title}</h4>
                                    <p className={`text-para leading-normal mb-4 md:mb-6 lg:mb-8 max-w-125 line-clamp-2`}>{item.des}</p>
                                    <div className="max-h-100 overflow-hidden">
                                        <img src={item.img} className='max-h-full w-max mx-auto' alt="" />
                                    </div>
                                    <div style={{ mask: 'linear-gradient(#02020200, #020202, #020202)' }} className="absolute z-1 rounded-b-xl flex flex-col items-center justify-end bottom-0 left-0 w-full h-40 md:h-50 bg-linear-0 to-[#020202]/0 from-[#020202] text-center p-4 md:p-5 lg:p-6 backdrop-blur-[10px]"></div>
                                </div>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, scale: 1.2 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: duration, delay: 0.3 }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="lg:col-span-2 flex gap-y-6 flex-wrap items-center justify-between p-4 md:p-6 lg:p-9 rounded-2xl border border-solid border-white/8 backdrop-blur-2xl"
                            style={{
                                background: 'linear-gradient(112deg, rgba(0, 217, 255, 0.10) 0%, rgba(0, 217, 255, 0.00) 35.49%), rgba(255, 255, 255, 0.03)'
                            }}>
                            <div className="xl:max-w-140 w-full">
                                <div className="rounded-2xl h-full relative z-1 border border-solid border-[#CBCBE1]/12 p-4 md:p-5 lg:p-6 pb-0! bg-white/4 bg-linear-0 to-[#007DFF]/0 to-50% from-primary bg-no-repeat bg-bottom-right">
                                    <div className="max-h-100 text-center overflow-hidden">
                                        <img src={b_img_3} className='max-h-full w-max mx-auto' alt="" />
                                    </div>
                                    <div style={{ mask: 'linear-gradient(#02020200, #020202, #020202)' }} className="absolute z-1 rounded-b-xl flex flex-col items-center justify-end bottom-0 left-0 w-full h-40 md:h-50 bg-linear-0 to-[#020202]/0 from-[#020202] text-center p-4 md:p-5 lg:p-6 backdrop-blur-[10px]"></div>
                                </div>
                            </div>
                            <div className="xl:max-w-145 w-full">
                                <MetaText title="Smart Signals" className="mb-2.5 md:mb-4 lg:mb-5 hidden! md:inline-block!" />
                                <h4 className='xl:max-w-80 text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 line-clamp-2'>Strategic Trading Signals</h4>
                                <p className={`text-para leading-normal`}>Make optimal use of Trading Central's signals to formulate your trade plans and techniques. These signals combine a number of analytical techniques, providing traders with a useful tool across all periods and market conditions. You may easily access them through the WINPROFX Trade app or your WINPROFX Personal Area.</p>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </div>


            <div className="common-padding">
                <div className='max-w-206 mx-auto px-3'>
                    <CommonTitle
                        className='text-center'
                        title="Frequently asked questions"
                        des="Find clear and concise answers to the most common questions about trading, account setup, deposits, withdrawals, and platform features."
                        desClass="max-w-160 mx-auto"
                    />
                    <Accordion items={item} activeItem={0} />
                </div>
            </div>
        </>
    )
}
