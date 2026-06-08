import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion'

export default function ButtonTwo({ to = '/', text, className = "", animation = true, delay = "0.4" }) {
    const { t } = useTranslation('common')
    const resolvedText = text ?? t('buttons.openAccount')
    const isExternal = to.startsWith("http");
    const Tag = isExternal ? "a" : Link;
    const linkProps = isExternal
        ? { href: to, target: "_blank", rel: "noopener noreferrer" }
        : { to };

    return (
        <motion.div
            initial={animation ? { opacity: 0, y: y } : ''}
            whileInView={animation ? { opacity: 1, y: 0 } : ''}
            transition={{ duration: duration, delay: delay }}
            viewport={{ once: once, amount: 0.4 }}>
            <Tag
                {...linkProps}
                className={`group hover:-translate-y-1 heading-btn active btn min-h-10.5 flex items-center justify-center rounded-full! px-5 md:px-6 font-medium leading-tight text-white ${className}`}>
                <span className='translate-x-0 group-hover:translate-x-0 transition-transform duration-300 ease-in-out'>
                    {resolvedText}
                </span>
            </Tag>
        </motion.div >
    )
}