import React from 'react'
import { useTranslation } from 'react-i18next'
import bg from '@/assets/img/accounts/cta-bg.png'
import left from '@/assets/img/accounts/cta-1.png'
import right from '@/assets/img/accounts/cta-2.png'
import { motion } from 'framer-motion'
import { duration, once } from '@/utilities/animation'
import Button from './button'

export default function CtaTwo() {
  const { t } = useTranslation('common')

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay: '0.4' }}
      viewport={{ once, amount: 0.2 }}
      className="relative z-1 rounded-2xl overflow-hidden border border-solid border-[#CBCBE1]/12 px-4 lg:px-8 xl:px-16 py-8 lg:py-10 xl:py-16"
      style={{ backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.04) 100%)' }}
    >
      <img src={bg} className="absolute top-0 bottom-0 left-0 right-0 size-full object-cover pointer-events-none -z-10" alt="" />
      <img src={left} className="absolute top-0 left-0 pointer-events-none -z-10" alt="" />
      <img src={right} className="absolute top-0 right-0 pointer-events-none -z-10" alt="" />
      <div className="max-w-167 flex flex-col justify-center items-center text-center mx-auto">
        <div className="absolute top-0 left-0 size-full -z-10 bg-linear-180 to-black/50 from-black/50 lg:hidden" />
        <h3 className="text-xl lg:text-2xl xl:text-[38px] mb-2.5 md:mb-3">{t('cta.accountsTitle')}</h3>
        <p className="mb-4 md:mb-6">{t('cta.accountsDes')}</p>
        <Button text={t('cta.openLiveAccount')} />
      </div>
    </motion.div>
  )
}
