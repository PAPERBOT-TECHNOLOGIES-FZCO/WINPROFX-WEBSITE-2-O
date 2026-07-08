import React from 'react'
import { Container } from '@/components/grid'
import Accordion from '@/components/accordion'
import CommonTitle from '@/components/common-title';
import Card from '@/components/trade/card';
import Cta from '@/components/trade/cta';
import MetaText from '@/components/meta-text';
import Button from '@/components/button';
import { motion } from 'framer-motion';
import { y, duration, once } from '@/utilities/animation'
import SeoHead from '@/components/seo-head'
import MarketPageTrustLinks from '@/components/trust/market-page-trust-links'
import { useSeo } from '@/hooks/use-seo'
import { useTranslation } from 'react-i18next'

import banner_bg from '@/assets/img/trade/oil-bg.png'
import banner_img from '@/assets/img/trade/oil-banner.png'
import img from '@/assets/img/trade/oil.png'

export default function Oil() {
    const seo = useSeo('oil')
    const { t } = useTranslation('markets')

    const item = [
        {
            title: t('oil.faq.howToStart.title'),
            body: t('oil.faq.howToStart.body'),
        },
        {
            title: t('oil.faq.bestStrategy.title'),
            body: t('oil.faq.bestStrategy.body'),
        },
        {
            title: t('oil.faq.bestIndicator.title'),
            body: t('oil.faq.bestIndicator.body'),
        },
    ]

    return (
        <>
            <SeoHead {...seo} canonicalPath="/trading/oil" />
            <div className="relative z-1 min-h-screen overflow-hidden flex items-center pt-0 md:pt-40 lg:pt-40 xl:pt-50">
                <img src={banner_bg} className={`absolute top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none`} alt="" />
                <Container className="max-w-375!">
                    <div className="flex items-center flex-wrap justify-between text-center md:text-start">
                        <motion.div
                            initial={{ opacity: 1, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: duration, delay: `0.2` }}
                            viewport={{ once: once, amount: 0.4 }}
                            className="max-w-154 w-full">
                            <MetaText className="mb-4 md:mb-5 lg:mb-6 hidden! md:inline-block!" title={t('oil.banner.meta')} />
                            <h1 className='max-w-65 mx-auto md:max-w-full text-2xl md:text-5xl lg:text-6xl xl:text-[64px] leading-[110%] font-medium capitalize mb-4 md:mb-5 lg:mb-7'>{t('oil.banner.title')}</h1>
                            <p className='text-para2 max-w-150 lg:max-w-xl mb-4 md:mb-6 lg:mb-8'>{t('oil.banner.description')}</p>
                            <Button animation={false} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: y }}
                            whileInView={{ opacity: 1, x: 1 }}
                            transition={{ duration: duration, delay: `0.2` }}
                            viewport={{ once: once, amount: 0.4 }} className="max-w-206 w-full mt-8 md:mt-0">
                            <img src={banner_img} alt="" />
                        </motion.div>
                    </div>
                </Container>
            </div>

            <div className="common-padding">
                <Container>
                    <div className="flex flex-col gap-y-6 lg:gap-y-8 max-w-6xl">
                        <Card
                            meta={t('oil.card.meta')}
                            title={t('oil.card.title')}
                            des={<>
                                <p>{t('oil.card.description')}</p>
                            </>}
                            img={img}
                        />
                        <Cta />
                    </div>
                </Container>
            </div>
            <div className="common-padding pt-0">
                <div className='max-w-215 mx-auto px-3'>
                    <CommonTitle className='text-center' title={t('oil.learn.title')} />
                    <Accordion items={item} activeItem={0} />
                </div>
            </div>
            <MarketPageTrustLinks />
        </>
    )
}
