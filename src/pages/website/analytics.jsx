import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/grid'
import Accordion from '@/components/accordion'
import CommonTitle from '@/components/common-title'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion'
import CommonBanner from '@/components/common-banner'
import TopShape from '../../components/top-shape'
import DemoCta from '@/components/demo-cta'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import MetaText from '../../components/meta-text'

import banner_bg from '@/assets/img/analytics/banner-bg.png'
import b_img_1 from '@/assets/img/home/news/b-4.png'
import b_img_2 from '@/assets/img/home/news/b-5.png'
import b_img_3 from '@/assets/img/home/news/b-6.png'

const NEWS_BLOG_KEYS = ['eventTracker', 'marketNews']

export default function Analytics() {
  const { t } = useTranslation('tools')
  const seo = useSeo('analytics')

  const news_blog = NEWS_BLOG_KEYS.map((key, idx) => ({
    meta: t(`analytics.newsBlog.${key}.meta`),
    title: t(`analytics.newsBlog.${key}.title`),
    des: t(`analytics.newsBlog.${key}.des`),
    img: idx === 0 ? b_img_1 : b_img_2,
  }))

  const faqKeys = t('analytics.faqKeys', { returnObjects: true, defaultValue: [] })
  const item = (Array.isArray(faqKeys) ? faqKeys : []).map((key) => ({
    title: t(`analytics.faqs.${key}.title`),
    body: t(`analytics.faqs.${key}.body`),
  }))

  return (
    <>
      <SeoHead {...seo} canonicalPath="/analytics" />
      <TopShape />
      <CommonBanner
        center={false}
        bg={banner_bg}
        bgClass="bottom-0 md:left-1/2 md:-translate-x-1/2 object-contain w-auto h-auto 3xl:max-w-275"
        meta={t('analytics.bannerMeta')}
        title={t('analytics.bannerTitle')}
        des={t('analytics.bannerDes')}
        containerClass="max-w-215! text-center"
        desClass="max-w-163 mx-0 md:mx-auto"
        className="3xl:min-h-300!"
      />

      <div className="common-padding">
        <Container>
          <div className="grid gird-cols-1 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-6 mb-4 md:mb-5 lg:mb-6">
            {news_blog.map((entry, idx) => (
              <motion.div
                initial={{ opacity: 0, y }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration, delay: idx * 0.2 }}
                viewport={{ once, amount: 0.2 }}
                key={entry.title}
                className="h-full"
              >
                <div className="rounded-2xl h-full relative z-1 border border-solid border-[#CBCBE1]/12 p-4 md:p-6 lg:p-8 pb-0! bg-white/4 bg-linear-0 to-[#007DFF]/0 to-50% from-primary bg-no-repeat bg-bottom-right">
                  <MetaText title={entry.meta} className="mb-2.5 md:mb-4 lg:mb-5 hidden! md:inline-block!" />
                  <h4 className="text-2xl md:text-3xl lg:text-[38px] leading-tight mb-3 line-clamp-2 max-w-115">{entry.title}</h4>
                  <p className="text-para leading-normal mb-4 md:mb-6 lg:mb-8 max-w-125 line-clamp-2">{entry.des}</p>
                  <div className="max-h-100 overflow-hidden">
                    <img src={entry.img} className="max-h-full w-max mx-auto" alt="" />
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration, delay: 0.3 }}
              viewport={{ once, amount: 0.2 }}
              className="lg:col-span-2 flex gap-y-6 flex-wrap items-center justify-between p-4 md:p-6 lg:p-9 rounded-2xl border border-solid border-white/8 backdrop-blur-2xl"
              style={{
                background: 'linear-gradient(112deg, rgba(0, 217, 255, 0.10) 0%, rgba(0, 217, 255, 0.00) 35.49%), rgba(255, 255, 255, 0.03)',
              }}
            >
              <div className="xl:max-w-140 w-full">
                <div className="rounded-2xl h-full relative z-1 border border-solid border-[#CBCBE1]/12 p-4 md:p-5 lg:p-6 pb-0! bg-white/4">
                  <div className="max-h-100 text-center overflow-hidden">
                    <img src={b_img_3} className="max-h-full w-max mx-auto" alt="" />
                  </div>
                </div>
              </div>
              <div className="xl:max-w-145 w-full">
                <MetaText title={t('analytics.smartSignals.meta')} className="mb-2.5 md:mb-4 lg:mb-5 hidden! md:inline-block!" />
                <h4 className="xl:max-w-80 text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 line-clamp-2">{t('analytics.smartSignalsTitle')}</h4>
                <p className="text-para leading-normal">{t('analytics.smartSignalsDes')}</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      <div className="common-padding">
        <div className="max-w-206 mx-auto px-3">
          <CommonTitle
            className="text-center"
            title={t('analytics.faqTitle')}
            des={t('analytics.faqSubtitle')}
            desClass="max-w-160 mx-auto"
          />
          <Accordion items={item} activeItem={0} />
        </div>
      </div>
    </>
  )
}
