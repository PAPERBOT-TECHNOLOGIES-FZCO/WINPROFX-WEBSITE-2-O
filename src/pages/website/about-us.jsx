import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/grid'
import Accordion from '@/components/accordion'
import CommonTitle from '@/components/common-title'
import CommonBanner from '@/components/common-banner'
import TopShape from '../../components/top-shape'
import DemoCta from '@/components/demo-cta'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'

import img_1 from '@/assets/img/home/news/2.png'
import img_2 from '@/assets/img/home/news/4.png'
import img_3 from '@/assets/img/home/news/3.png'
import img_4 from '@/assets/img/home/news/5.png'
import img_5 from '@/assets/img/home/news/6.png'
import img_6 from '@/assets/img/home/news/7.png'
import video from '@/assets/img/about/about.webm'
import user_icon from '@/assets/img/user_icon.svg'

const NEWS_IMAGES = [img_1, img_2, img_3, img_4, img_5, img_6]

export default function AboutUs() {
  const { t } = useTranslation('trading')
  const seo = useSeo('aboutUs')

  const valueKeys = t('aboutUs.valueKeys', { returnObjects: true, defaultValue: [] })
  const about_info = (Array.isArray(valueKeys) ? valueKeys : []).map((key) => ({
    icon: null,
    title: t(`aboutUs.values.${key}.title`),
    des: t(`aboutUs.values.${key}.des`),
  }))

  const faqKeys = t('aboutUs.faqKeys', { returnObjects: true, defaultValue: [] })
  const item = (Array.isArray(faqKeys) ? faqKeys : []).map((key) => ({
    title: t(`aboutUs.faqs.${key}.title`),
    body: t(`aboutUs.faqs.${key}.body`),
  }))

  return (
    <>
      <SeoHead {...seo} canonicalPath="/about-us" />
      <TopShape />
      <CommonBanner
        videoBg={video}
        bgClass="top-auto lg:top-1/4 3xl:-mt-25 h-auto w-full bottom-0 left-0"
        meta={t('aboutUs.meta')}
        title={t('aboutUs.bannerTitle')}
        des={t('aboutUs.bannerDes')}
        desClass="max-w-135 mx-auto"
      />

      <div className="common-padding pb-0">
        <Container>
          <div className="max-w-285 mx-auto bg-white/2 border border-solid border-white/8 rounded-2xl lg:rounded-[20px] p-4 md:p-6 lg:p-8">
            <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">{t('aboutUs.companyInfoTitle')}</h4>
            <ul className="flex flex-col gap-y-2 text-para text-sm md:text-base">
              <li><strong className="text-white">{t('aboutUs.legalName')}</strong> {t('aboutUs.legalNameValue')}</li>
              <li><strong className="text-white">{t('aboutUs.tradingName')}</strong> {t('aboutUs.tradingNameValue')}</li>
              <li>
                <strong className="text-white">{t('aboutUs.primaryWebsite')}</strong>{' '}
                <a href="https://winprofx.org" className="text-white underline hover:text-primary" target="_blank" rel="noopener noreferrer">winprofx.org</a>
              </li>
              <li><strong className="text-white">{t('aboutUs.regulation')}</strong> {t('aboutUs.regulationValue')}</li>
              <li>
                <strong className="text-white">{t('aboutUs.support')}</strong>{' '}
                <a href="mailto:support@winprofx.com" className="text-white underline hover:text-primary">support@winprofx.com</a>
                {' '}|{' '}
                <a href="tel:+97144471894" className="text-white underline hover:text-primary">+971 4 447 1894</a>
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <div className="common-padding">
        <Container>
          <div className="max-w-285 mx-auto flex flex-wrap justify-between">
            <CommonTitle
              className="max-w-full xl:max-w-135 mx-auto xl:mx-0 text-center xl:text-start"
              title={t('aboutUs.standardTitle')}
              des={t('aboutUs.standardDes')}
              desClass="max-w-100"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-3 xl:max-w-md w-full">
              {about_info.map((entry, idx) => (
                <motion.div
                  initial={{ opacity: 0, y }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration, delay: idx * 0.1 }}
                  viewport={{ once, amount: 0.2 }}
                  key={entry.title}
                  className="xl:max-w-150 p-px bg-linear-0 to-white/20 from-white/0 rounded-2xl"
                >
                  <div className="flex items-start gap-4 p-4 md:p-5 lg:p-6 bg-linear-0 to-[#0E0E14] from-white/0 rounded-2xl">
                    <div className="icon-shadow rounded-lg overflow-hidden flex-none">
                      <img src={user_icon} alt="" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <h5 className="text-xl font-bold mb-0 text-white">{entry.title}</h5>
                      <p className="text-sm text-para xl:max-w-81">{entry.des}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <h4 className="text-2xl md:text-[28px] leading-tight text-center mb-6 md:mb-8 lg:mb-10 w-max mx-auto">{t('aboutUs.featuredIn')}</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {NEWS_IMAGES.map((img, idx) => (
              <motion.div
                initial={{ opacity: 0, y }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration, delay: idx * 0.1 }}
                viewport={{ once, amount: 0.2 }}
                key={idx}
                className="h-full"
              >
                <div className="group h-25 md:h-31 relative z-1 rounded-2xl lg:rounded-3xl max-h-44 border-2 overflow-hidden border-solid border-white/8 bg-white hover:border-primary shadow-none main-shadow block">
                  <img src={img} className="size-full object-contain" alt="" />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      <div className="common-padding">
        <div className="max-w-206 mx-auto px-3">
          <CommonTitle
            className="text-center"
            title={t('aboutUs.faqTitle')}
            des={t('aboutUs.faqDes')}
            desClass="max-w-154 mx-auto"
          />
          <Accordion
            items={item}
            activeItem={0}
            desClass="[&>ul>li]:items-start [&>ul>li>svg]:translate-y-1 [&>ul>li>span]:text-para [&>ul>li>span>span]:text-white"
          />
        </div>
      </div>
      <Container>
        <div className="max-w-290 mx-auto common-padding">
          <DemoCta />
        </div>
      </Container>
    </>
  )
}
