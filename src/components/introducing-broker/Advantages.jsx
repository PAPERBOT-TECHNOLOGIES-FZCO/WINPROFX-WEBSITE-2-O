import React from 'react'
import CommonTitle from '@/components/common-title'
import { Container } from '@/components/grid'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import icon_1 from '@/assets/img/introducing-broker/advantages-img1.png'
import icon_2 from '@/assets/img/introducing-broker/advantages-img2.png'
import icon_3 from '@/assets/img/introducing-broker/advantages-img3.png'
import icon_4 from '@/assets/img/introducing-broker/advantages-img4.png'
import bg from '@/assets/img/introducing-broker/reasons-bg.png'

export default function Advantages() {
    const items = [
        {
            icon: icon_1,
            des: 'Up to <b>90%</b> profit share from spreads'
        },
        {
            icon: icon_2,
            des: 'Reputable Broker With <b>40+</b> Industry awards'
        },
        {
            icon: icon_3,
            des: 'Evolving everyday in the market'
        },
        {
            icon: icon_4,
            des: 'Trade and Win <b>Rewards</b> Everyday'
        },
    ]
    const steps = [
        {
            text: "Fastest Withdrawal"
        },
        {
            text: "No Swap"
        },
        {
            text: "No Commission"
        },
        {
            text: "Low Spread"
        }
    ];
    return (
        <div className='common-padding max-w-6xl mx-auto'>
            <Container>
                <CommonTitle
                    className="max-w-170 text-center mx-auto mb-10 md:mb-12 lg:mb-16"
                    title={`Exclusive Partner Advantages`}
                    des={`Partnering Perks: Commission Riches, Award-Winning Trust, Market Evolution and Daily Win Rewards!`} desClass="max-w-114 mx-auto"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 items-stretch">
                    {items.map((item, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.${idx * 2}` }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="rounded-lg lg:rounded-[20px] px-6 py-8 pt-5 text-center bg-white/4 border border-solid border-white/10 overflow-hidden h-full" key={idx}>
                            <div>
                                <div className='w-45 h-45 mx-auto'>
                                    <img src={item.icon} alt="" className="w-full h-full object-contain object-center" />
                                </div>
                                <p dangerouslySetInnerHTML={{ __html: item.des }} className='text-sm md:text-base leading-normal text-white' />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className='p-6 lg:p-10 relative z-1 rounded-2xl overflow-hidden'>
                    <img className='absolute top-0 left-0 w-full h-full -z-1 object-top-right pointer-events-none' src={bg} alt="" />
                    <motion.h2
                        initial={{ opacity: 0, y: y }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: duration, delay: `0.2` }}
                        viewport={{ once: once, amount: 0.2 }}
                        className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-150 lg:max-w-200 mb-4 lg:mb-6 leading-tight'>
                        What Sets Us Apart: <br className="hidden md:block" /> Reasons for Client Preference
                    </motion.h2>
                    <div className="space-y-4 w-max md:ms-auto">
                        {steps.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: `0.${index * 2}` }}
                                viewport={{ once: true }}
                            >
                                <div key={index} className="flex items-center gap-3">
                                    <span className="flex items-center justify-center rounded-full min-w-11 max-w-11 h-11 border border-white/10 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0)_54.72%,rgba(255,255,255,0.06)_100%)] text-white">
                                        {index + 1}
                                    </span>
                                    <p className="rounded-[100px] border border-white/10 bg-white/5 px-5 h-11 flex items-center text-white w-full max-w-50">
                                        {item.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}
