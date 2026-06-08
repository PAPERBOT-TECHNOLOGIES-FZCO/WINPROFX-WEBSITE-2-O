import React from 'react'
import LocalizedLink from '@/components/localized-link'
import CommonTitle from '@/components/common-title'
import { Container } from '@/components/grid'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import Button from '@/components/button'
import { useTranslation } from 'react-i18next'

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

const marketItems = [
    { key: 'crypto', img: img_1, path: '/crypto' },
    { key: 'metals', img: img_2, path: '/trading/metals' },
    { key: 'commodities', img: img_3, path: '/trading/commodities' },
    { key: 'forex', img: img_4, path: '/forex' },
    { key: 'indices', img: img_5, path: '/indices' },
    { key: 'oil', img: img_6, path: '/trading/oil' },
]

function MarketCard({ item, t }) {
    const title = t(`whatTrade.items.${item.key}.title`)
    return (
        <LocalizedLink to={item.path} className="block rounded-2xl h-full p-6 border border-solid border-white/12 bg-[#18171F] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 shadow-0 hover:shadow-2xl shadow-primary/20">
            <h5 className='text-xl md:text-2xl leading-tight font-bold text-white mb-2'>{title}</h5>
            <p className='text-xs md:text-sm leading-normal text-para'>{t(`whatTrade.items.${item.key}.description`)}</p>
            <div className="w-full aspect-[1/.7] relative overflow-hidden rounded-xl mt-5">
                <img src={item.img} className='absolute top-0 left-0 w-full h-full object-cover mx-auto' alt={t('whatTrade.imageAlt', { market: title })} />
            </div>
        </LocalizedLink>
    )
}

export default function WhatTrade() {
    const { t } = useTranslation('homepage')

    return (
        <div className='common-padding relative z-1'>
            <img src={bg} className='w-full h-auto object-cover absolute top-0 left-0 -z-10 pointer-events-none' alt="" />
            <Container>
                <CommonTitle
                    className="max-w-150"
                    title={t('whatTrade.title')}
                    des={t('whatTrade.description')}
                />
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 md:mb-10 lg:mb-13 xl:mb-16">
                    {marketItems.map((item, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.${idx * 1}` }}
                            viewport={{ once: once, amount: 0.2 }}
                            key={item.key}
                            className='h-full card-glow p-px overflow-hidden rounded-2xl'
                        >
                            <MarketCard item={item} t={t} />
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
                        {marketItems.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className='h-full card-glow p-px overflow-hidden rounded-2xl'>
                                    <MarketCard item={item} t={t} />
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
