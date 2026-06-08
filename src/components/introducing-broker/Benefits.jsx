import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/grid'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import img1 from '@/assets/img/introducing-broker/benefites-img1.png'
import img2 from '@/assets/img/introducing-broker/benefites-img2.png'
import img3 from '@/assets/img/introducing-broker/benefites-img3.png'
import img4 from '@/assets/img/introducing-broker/benefites-img4.png'
import img5 from '@/assets/img/introducing-broker/benefites-img5.png'

export default function Benefits() {
    const { t } = useTranslation('trading')
    const images = [img1, img2, img3, img4, img5]
    const items = images.map((image) => ({
        image,
        title: t('introducingBroker.benefits.cardTitle'),
        description: t('introducingBroker.benefits.cardDescription'),
    }))

    return (
        <section className='common-padding'>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-2 text-center lg:text-start gap-1 md:gap-0 lg:gap-30 mb-8 lg:mb-16'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-155 mx-auto lg:mx-0 mb-4 lg:mb-6 leading-tight'>{t('introducingBroker.benefits.title')}</h2>
                    <div className='text-sm lg:text-base text-para2 space-y-3 font-inter leading-normal'>
                        <p>{t('introducingBroker.benefits.paragraph1')}</p>
                        <p>{t('introducingBroker.benefits.paragraph2')}</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mb-8 items-stretch'>
                    {items.map((item, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.${idx * 2}` }}
                            viewport={{ once: once, amount: 0.2 }}
                            key={idx}
                            className={`
                                md:col-span-1
                                ${idx === 3 || idx === 4
                                    ? 'col-span-12 sm:col-span-6 lg:col-span-6'
                                    : 'col-span-12  sm:col-span-6 lg:col-span-4'
                                }
                            `}
                        >
                            <div className='rounded-lg lg:rounded-[20px] px-6 py-8 pt-5 text-center bg-white/4 border border-solid border-white/10 overflow-hidden h-full'>
                                <div className='w-45 h-45 mx-auto mb-4'>
                                    <img src={item.image} alt="" className="w-full h-full object-contain object-center" />
                                </div>
                                <h3 className='text-lg md:text-xl font-medium mb-2 text-white'>{item.title}</h3>
                                <p className='text-sm md:text-base leading-normal text-para'>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
