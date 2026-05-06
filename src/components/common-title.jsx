import React from 'react'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import MetaText from '@/components/meta-text'

export default function CommonTitle({ subTitle, subTitleClass = "mb-4 md:mb-5 lg:mb-6", title, des, desClass = "", className = 'text-center' }) {
  return (
    <div className={`${className.includes('mb-') ? '' : 'mb-8 md:mb-12 lg:mb-16'} ${className}`}>
      {subTitle &&
        <MetaText
          title={subTitle}
          animation={true}
          delay="0.2"
          className={`hidden! md:inline-block! ${subTitleClass}`}
        />
      }
      <motion.h2
        initial={{ opacity: 0, y: y }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: duration, delay: `0.2` }}
        viewport={{ once: once, amount: 0.2 }}
        className='h2' dangerouslySetInnerHTML={{ __html: title }} />
      {des &&
        <motion.p
          initial={{ opacity: 0, y: y }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration, delay: `0.3` }}
          viewport={{ once: once, amount: 0.2 }}
          className={`text-para text-xs md:text-sm lg:text-base leading-normal mt-3 md:mt-4 ${desClass}`}
        >{des}</motion.p>
      }
    </div>
  )
}
