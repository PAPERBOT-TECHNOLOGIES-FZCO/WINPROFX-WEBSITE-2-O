import React from 'react'
import { Container } from '@/components/grid'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import img1 from '@/assets/img/introducing-broker/benefites-img1.png'
import img2 from '@/assets/img/introducing-broker/benefites-img2.png'
import img3 from '@/assets/img/introducing-broker/benefites-img3.png'
import img4 from '@/assets/img/introducing-broker/benefites-img4.png'
import img5 from '@/assets/img/introducing-broker/benefites-img5.png'
export default function Benefits() {
    const items = [
        {
            image: img1,
            title: 'Multi-tier up to 5 Levels',
            description: 'As an IB you could have up to 5 sub levels of referral traders.'
        },
        {
            image: img2,
            title: 'Multi-tier up to 5 Levels',
            description: 'As an IB you could have up to 5 sub levels of referral traders.'
        },
        {
            image: img3,
            title: 'Multi-tier up to 5 Levels',
            description: 'As an IB you could have up to 5 sub levels of referral traders.'
        },
        {
            image: img4,
            title: 'Multi-tier up to 5 Levels',
            description: 'As an IB you could have up to 5 sub levels of referral traders.'
        },
        {
            image: img5,
            title: 'Multi-tier up to 5 Levels',
            description: 'As an IB you could have up to 5 sub levels of referral traders.'
        },
    ]
    return (
        <section className='common-padding'>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-2 text-center lg:text-start gap-1 md:gap-0 lg:gap-30 mb-8 lg:mb-16'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-155 mx-auto lg:mx-0 mb-4 lg:mb-6 leading-tight'>Benefits Of Becoming Introducing Broker With WinproFX:</h2>
                    <div className='text-sm lg:text-base text-para2 space-y-3 font-inter leading-normal'>
                        <p>Unlock a world of advantages by becoming an Introducing Broker with WinproFX. Enjoy generous commission structures, industry recognition, continuous market evolution, and the opportunity to empower traders with everyday rewards.</p>
                        <p>Join us in reshaping the future of trading partnerships with the Best Broker Trading Platform.</p>
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
                            <div className={`relative z-1 rounded-lg lg:rounded-[20px] min-h-100  p-4 lg:p-6 pt-5 bg-white/4 border border-solid border-white/10 overflow-hidden h-full`}>
                                <div className='absolute top-0 left-0 w-full h-full -z-1 pointer-events-none'>
                                    <img src={item.image} alt="" className="w-full h-full object-cover object-center" />
                                </div>
                                <h3 className='text-xl font-bold text-white leading-tight mb-3'>{item.title}</h3>
                                <p className='text-para text-sm leading-normal max-w-75'>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </Container>
        </section>
    )
}
