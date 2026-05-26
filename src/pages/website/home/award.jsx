import React from 'react'
import Button from '@/components/button';
import { Container } from '@/components/grid';
import CommonTitle from '@/components/common-title'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';

import img_1 from '@/assets/img/home/award/1.png'
import img_2 from '@/assets/img/home/award/2.png'
import img_3 from '@/assets/img/home/award/3.png'
import img_4 from '@/assets/img/home/award/4.png'
import bg from '@/assets/img/home/award-bg.png'

export default function Award() {
    const items = [
        {
            img: img_1,
            title: 'Best Forex Broker 2025',
        },
        {
            img: img_2,
            title: 'Global Forex Broker of the Year 2025',
        },
        {
            img: img_3,
            title: 'Top STP Broker 2025',
        },
        {
            img: img_4,
            title: 'Best Deposit And Withdrawal Broker 2024',
        },
    ]
    return (
        <div className='common-padding relative z-1'>
            <img src={bg} className='absolute top-0 left-0 -z-10 pointer-events-none object-cover h-full xl:h-auto' alt="" />
            <Container>
                <CommonTitle
                    className="max-w-150 lg:max-w-165 text-center mx-auto"
                    title="WinproFX Broker with Award-Winning Excellence"
                    des="The global forex industry has acknowledged WinproFX's achievements, honoring us with top accolades for our exceptional products and services."
                />
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {items.map((item, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.${idx * 2}` }}
                            viewport={{ once: once, amount: 0.2 }}
                            key={idx}
                            className='h-full p-px rounded-2xl card-glow'
                        >
                            <div className="relative z-1 max-w-77 mx-auto h-full shadow-0 hover:shadow-2xl shadow-primary/20 cursor-pointer hover:-translate-y-1 flex flex-col p-4 md:p-5 lg:p-6 rounded-2xl overflow-hidden bg-[#202F3D] border border-solid border-white/8 backdrop-blur-2xl transition-all duration-300" key={idx}>
                                <svg className='max-w-50 mx-auto absolute top-0 left-1/2 -translate-x-1/2 -z-10 pointer-events-none' width="198" height="177" viewBox="0 0 198 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H198L168 177H30L0 0Z" fill="url(#paint0_linear_6137_102882)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_6137_102882" x1="99" y1="0" x2="99" y2="177" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="white" stopOpacity="0.08" />
                                            <stop offset="1" stopColor="white" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="max-w-37 mx-auto flex items-center justify-center mb-2">
                                    <img src={item.img} className='max-w-full' alt="" />
                                </div>
                                <h6 className='font-medium text-white text-base text-center mt-auto'>{item.title}</h6>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
