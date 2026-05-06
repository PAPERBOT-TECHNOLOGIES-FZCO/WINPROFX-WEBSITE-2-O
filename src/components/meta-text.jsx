import React from 'react'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';

export default function MetaText({ className = "mb-2.5 md:mb-4", title = "", animation = false, delay = '0.2' }) {
    return (
        <motion.span
            initial={animation ? { opacity: 0, y: y } : ''}
            whileInView={animation ? { opacity: 1, y: 0 } : ''}
            transition={{ duration: duration, delay: delay }}
            viewport={{ once: once, amount: 0.2 }}
            className={`inline-block rounded-full bg-white/6 border border-solid border-white/20 px-4 py-1.5 uppercase text-white text-sm md:text-base leading-none ${className}`}>{title}</motion.span>
    )
}
