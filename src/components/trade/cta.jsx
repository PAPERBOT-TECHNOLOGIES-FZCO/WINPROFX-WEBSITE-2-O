import React from 'react'
import bg from '@/assets/img/trade/cta-bg.png'
import { motion } from 'framer-motion';
import { duration, once } from '@/utilities/animation'
import MetaText from '../meta-text';

export default function Cta() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: duration, delay: `0.4` }}
            viewport={{ once: once, amount: 0.2 }}
            className='relative z-1 rounded-2xl overflow-hidden border border-solid border-white/8 text-center py-8 md:py-14 lg:py-18 xl:py-22 px-4 backdrop-blur-2xl'
            style={{ backgroundImage: 'linear-gradient(112deg, rgba(0, 217, 255, 0.10) 0%, rgba(0, 217, 255, 0.00) 35.49%)', backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
        >
            <img src={bg} className='absolute top-0 left-0 size-full object-cover pointer-events-none -z-10' alt="" />
            <div className="max-w-167 mx-auto flex flex-col justify-center items-center">
                <MetaText title="critical insights" className='mb-4 hidden! md:inline-block!' />
                <h2 className='text-[22px] md:text-4xl lg:text-5xl leading-tight font-normal mb-2.5 md:mb-4'>Unveiling the Pinnacle Learnings for Strategic Success.</h2>
                <p className='text-[#ABACB3]'>Beginners and experienced forex traders a like must keep in mind that practice, knowledge, and discipline are key to getting and staying ahead. The Best Forex Brokers Platform can help achieve success.</p>
            </div>
        </motion.div>
    )
}
