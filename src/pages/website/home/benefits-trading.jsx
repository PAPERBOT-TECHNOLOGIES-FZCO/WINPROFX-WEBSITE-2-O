import React from 'react'
import CommonTitle from '@/components/common-title'
import { Container } from '@/components/grid'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import MetaText from '@/components/meta-text'
import Button from '@/components/button'
import { useTranslation } from 'react-i18next'

import img_1 from '@/assets/img/home/benefits/1.png'
import img_2 from '@/assets/img/home/benefits/2.png'
import img_3 from '@/assets/img/home/benefits/3.png'
import img_4 from '@/assets/img/home/benefits/4.png'

const benefitConfig = [
    { key: 'withdrawals', img: img_1 },
    { key: 'tradeDaily', img: img_2 },
    { key: 'clientSupport', img: img_3 },
    { key: 'negativeBalance', img: img_4 },
]

export default function BenefitsTrading() {
    const { t } = useTranslation('homepage')

    return (
        <div className='common-padding'>
            <Container>
                <CommonTitle
                    className="text-center max-w-150 mx-auto"
                    title={t('benefitsTrading.title')}
                    des={t('benefitsTrading.description')}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8 md:mb-10 lg:mb-13 xl:mb-16">
                    {benefitConfig.map((item, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.${idx * 2}` }}
                            viewport={{ once: once, amount: 0.2 }}
                            key={item.key}
                            className='h-full card-glow p-px rounded-2xl overflow-hidden'
                            style={{ animationDelay: `${idx * -1}s` }}
                        >
                            <div className="rounded-2xl h-full p-4 md:p-5 lg:p-6 border border-solid border-white/12 bg-[#0A0D10]">
                                <MetaText title={t(`benefitsTrading.items.${item.key}.meta`)} className="rounded-md!" />
                                <div className="my-5">
                                    <img src={item.img} className='max-w-58 mx-auto' alt={`WINPROFX ${t(`benefitsTrading.items.${item.key}.title`)}`} />
                                </div>
                                <h5 className='text-2xl leading-tight font-bold text-white mb-2'>{t(`benefitsTrading.items.${item.key}.title`)}</h5>
                                <p className='text-base leading-normal text-para'>{t(`benefitsTrading.items.${item.key}.description`)}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <Button delay="0.2" />
                </div>
            </Container>
        </div>
    )
}
