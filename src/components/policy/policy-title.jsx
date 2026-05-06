import React from 'react'
import MetaText from '@/components/meta-text'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';

export default function PolicyTitle({ className="", title = "", meta = "Last Updated: Jun 7, 2024", animation = true }) {
    return (
        <motion.div
            initial={animation ? { opacity: 0, y: y } : ''}
            whileInView={animation ? { opacity: 1, y: 0 } : ''}
            transition={{ duration: duration, delay: `0.2` }}
            viewport={{ once: once, amount: 0.2 }}
            className={`${className} policy-card text-center mb-8 md:mb-12 lg:mb-17 xl:mb-22`}>
            <MetaText className="mb-4 md:mb-5 lg:mb-6 hidden! md:inline-block!" title={meta} />
            <h2 className='mb-0 h1 heading-gradient-2 leading-tight max-w-75 mx-auto md:max-w-full'>{title}</h2>
        </motion.div>
    )
}
