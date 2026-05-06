import React from 'react'
import CommonTitle from '@/components/common-title'
import { Container } from '@/components/grid'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import MetaText from '@/components/meta-text'
import Button from '@/components/button'

import img_1 from '@/assets/img/home/benefits/1.png'
import img_2 from '@/assets/img/home/benefits/2.png'
import img_3 from '@/assets/img/home/benefits/3.png'
import img_4 from '@/assets/img/home/benefits/4.png'

export default function BenefitsTrading() {
    const items = [
        {
            meta: 'Crypto withdraw in',
            img: img_1,
            title: '30 Minutes',
            des: 'Unlock swift financial flexibility with our 30-minute withdrawal guarantee.'
        },
        {
            meta: 'Trade daily',
            img: img_2,
            title: 'Win Rewards',
            des: 'Daily trades, daily wins - fuel your success in every market move.'
        },
        {
            meta: 'Award Winning',
            img: img_3,
            title: 'Customer Support',
            des: 'Delivering unparalleled service excellence!'
        },
        {
            meta: 'Negative balance',
            img: img_4,
            title: 'Protection',
            des: 'Trade confidently with built-in negative balance protection for financial security.'
        },
    ]
    return (
        <div className='common-padding'>
            <Container>
                <CommonTitle
                    className="text-center max-w-150 mx-auto"
                    title="Benefits of Trading With Us"
                    des="Discover seamless trading with us, where transparency and advanced technology meet for your financial success."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8 md:mb-10 lg:mb-13 xl:mb-16">
                    {items.map((item, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.${idx * 2}` }}
                            viewport={{ once: once, amount: 0.2 }}
                            key={idx}
                            className='h-full card-glow p-px rounded-2xl overflow-hidden'
                            style={{ animationDelay: `${idx * -1}s` }}
                        >
                            <div className="rounded-2xl h-full p-4 md:p-5 lg:p-6 border border-solid border-white/12 bg-[#0A0D10] transition-all duration-300 shadow-0 hover:shadow-2xl shadow-primary/20 cursor-pointer hover:-translate-y-1">
                                <MetaText title={item.meta} className="rounded-md!" />
                                <div className="my-5">
                                    <img src={item.img} className='max-w-58 mx-auto' alt="" />
                                </div>
                                <h5 className='text-2xl leading-tight font-bold text-white mb-2'>{item.title}</h5>
                                <p className='text-base leading-normal text-para'>{item.des}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <Button delay="0.2" />
                </div>
            </Container>
        </div>
    )
}
