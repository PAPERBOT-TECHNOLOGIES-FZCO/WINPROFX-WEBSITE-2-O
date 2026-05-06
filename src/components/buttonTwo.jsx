import React from 'react'
import { Link } from 'react-router-dom'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion'

export default function ButtonTwo({ to = '/', text = 'Open Account', className = "", animation = true, delay = "0.4" }) {
    return (
        <motion.div
            initial={animation ? { opacity: 0, y: y } : ''}
            whileInView={animation ? { opacity: 1, y: 0 } : ''}
            transition={{ duration: duration, delay: delay }}
            viewport={{ once: once, amount: 0.4 }}>
            <Link
                to={to}
                className={`group hover:-translate-y-1 heading-btn active btn min-h-10.5 flex items-center justify-center rounded-full! px-5 md:px-6 font-medium leading-tight text-white ${className}`}>
                <span className='translate-x-0 group-hover:translate-x-0 transition-transform duration-300 ease-in-out'>
                    {text}
                </span>
            </Link>
        </motion.div >
    )
}