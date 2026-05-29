import React from 'react'
import { Link } from 'react-router-dom';
import CommonTitle from '@/components/common-title'
import { Container } from '@/components/grid'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import Button from '@/components/button'

import img_1 from '@/assets/img/home/what/1.png'
import img_2 from '@/assets/img/home/what/2.png'
import img_3 from '@/assets/img/home/what/3.png'
import img_4 from '@/assets/img/home/what/4.png'
import img_5 from '@/assets/img/home/what/5.png'
import img_6 from '@/assets/img/home/what/6.png'
import bg from '@/assets/img/home/what/bg.png'


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function WhatTrade() {
    const items = [
        {
            img: img_1,
            title: 'Crypto',
            path: '/crypto',
            des: 'Cryptocurrencies also known as digital currencies are fast-growth investment instruments and'
        },
        {
            img: img_2,
            title: 'Metals',
            path: '/trading/metals',
            des: 'Spot metal trading holds a special place in the heart of every trader. metals have attracted traders all'
        },
        {
            img: img_3,
            title: 'Commodities',
            path: '/trading/commodities',
            des: 'Investing in commodities can provide investors with diversification, a hedge against'
        },
        {
            img: img_4,
            title: 'Forex',
            path: '/forex',
            des: `Forex or the foreign exchange is a global market where the world's currencies trade. It vastly`
        },
        {
            img: img_5,
            title: 'Indices',
            path: '/indices',
            des: 'Indices are a measurement of the price performance of a group of shares from an exchange.'
        },
        {
            img: img_6,
            title: 'Oil',
            path: '/trading/oil',
            des: 'Energy futures are contracts to buy or sell fossil fuels or related products at a set date and price.'
        },
    ]

    return (
        <div className='common-padding relative z-1'>
            <img src={bg} className='w-full h-auto object-cover absolute top-0 left-0 -z-10 pointer-events-none' alt="" />
            <Container>
                <CommonTitle
                    className="max-w-150"
                    title="What you can Trade?"
                    des="Discover seamless trading with us, where transparency and advanced technology meet for your financial success."
                />
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 md:mb-10 lg:mb-13 xl:mb-16">
                    {items.map((item, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.${idx * 1}` }}
                            viewport={{ once: once, amount: 0.2 }}
                            key={idx}
                            className='h-full card-glow p-px overflow-hidden rounded-2xl'
                        >
                            <Link to={item.path} className="block rounded-2xl h-full p-6 border border-solid border-white/12 bg-[#18171F] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 shadow-0 hover:shadow-2xl shadow-primary/20">
                                <h5 className='text-xl md:text-2xl leading-tight font-bold text-white mb-2'>{item.title}</h5>
                                <p className='text-xs md:text-sm leading-normal text-para'>{item.des}</p>
                                <div className="w-full aspect-[1/.7] relative overflow-hidden rounded-xl mt-5"><img src={item.img} className='absolute top-0 left-0 w-full h-full object-cover mx-auto' alt={`WINPROFX ${item.title} trading`} /></div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <div className="md:hidden pb-12 md:pb-14 lg:mb-16 xl:pb-18 what-mobile">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        navigation={false}
                        autoplay={false}
                        speed={800}
                        loop={true}
                        pagination={true}
                        breakpoints={{
                            480: { slidesPerView: 1.3 },
                            640: { slidesPerView: 1.5 },
                            900: { slidesPerView: 2.5 },
                            1100: { slidesPerView: 3.2 },
                        }}
                        style={{ overflow: "visible" }}
                    >
                        {items.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className='h-full card-glow p-px overflow-hidden rounded-2xl'>
                                    <Link to={item.path} className="block rounded-2xl h-full p-6 border border-solid border-white/12 bg-[#18171F] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 shadow-0 hover:shadow-2xl shadow-primary/20">
                                        <h5 className='text-xl md:text-2xl leading-tight font-bold text-white mb-2'>{item.title}</h5>
                                        <p className='text-xs md:text-sm leading-normal text-para'>{item.des}</p>
                                        <div className="w-full aspect-[1/.7] relative overflow-hidden rounded-xl mt-5"><img src={item.img} className='absolute top-0 left-0 w-full h-full object-cover mx-auto' alt={`WINPROFX ${item.title} trading`} /></div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex items-center justify-center">
                    <Button delay="0.2" />
                </div>
            </Container>
        </div>
    )
}
