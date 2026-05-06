import React from 'react'
import CommonTitle from '@/components/common-title'
import { Container } from '@/components/grid'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import icon_1 from '@/assets/img/trade/programe-period-icon1.svg'
import icon_2 from '@/assets/img/trade/programe-period-icon1.svg'
import icon_3 from '@/assets/img/trade/programe-period-icon1.svg'

export default function ProgramPeriod() {
   const items = [
        {
            icon: icon_1,
            title: 'Active Dates',
            des: 'The program runs from March 1, 2025 through May 31, 2026. Join at any point during this window.'
        },
        {
            icon: icon_2,
            title: 'Trading Timeline',
            des: 'Once you opt in, you have 30 days from your start date to reach your chosen target volume and claim your reward.'
        },
        {
            icon: icon_3,
            title: 'Opt-In Deadline',
            des: 'New clients can opt in starting from their very first deposit. Don\'t wait every day counts toward your 30-day window.'
        },
    ]

    return (
        <div className='common-padding max-w-6xl mx-auto'>
            <Container>
                <CommonTitle
                    className="max-w-170 text-center mx-auto mb-10 md:mb-12 lg:mb-16"
                    subTitle="Program Period" subTitleClass="rounded-[100px] border border-white/20 bg-white/[0.06] px-4 py-1 mb-4 inline-block uppercase"
                    title={`When Does the Program Run?`}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 md:mb-12 lg:mb-16">
                    {items.map((item, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.${idx * 2}` }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="rounded-2xl p-px bg-linear-0 to-white/20 from-white/0 overflow-hidden shadow-0 hover:shadow-2xl shadow-primary/20" key={idx}>
                            <div className="rounded-2xl p-4 md:p-5 lg:p-6 bg-linear-0 to-[#121418] from-[#030509]">
                                <div className="w-12.5 mb-6 h-12.5 p-3 rounded-lg border border-[rgba(156,156,156,0.5)] bg-[linear-gradient(180deg,rgba(255,255,255,0.01)_0%,rgba(217,217,217,0.01)_100%)] shadow-[inset_0_4px_4px_0_rgba(0,217,255,0.25),-42px_103px_31px_0_rgba(0,217,255,0.00),-27px_66px_29px_0_rgba(0,217,255,0.01),-15px_37px_24px_0_rgba(0,217,255,0.03),-7px_17px_18px_0_rgba(0,217,255,0.04),-2px_4px_10px_0_rgba(0,217,255,0.05)] flex items-center justify-center">
                                    <img src={item.icon} alt="" className="w-full h-full object-contain" />
                                </div>
                                <h5 className='text-xl leading-tight font-bold text-white mb-2 md:mb-3'>{item.title}</h5>
                                <p className='text-sm md:text-base leading-normal text-para'>{item.des}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    )
}