import React from 'react'
import { Container } from '@/components/grid'
import Accordion from '@/components/accordion'
import CommonTitle from '@/components/common-title';
import Card from '@/components/trade/card';
import Cta from '@/components/trade/cta';
import banner_bg from '@/assets/img/trade/metals-banner-bg.png'
import CommonBanner from '@/components/common-banner';
import img from '@/assets/img/trade/metals.png'
import SeoHead from '@/components/seo-head'
import MarketPageTrustLinks from '@/components/trust/market-page-trust-links'
import { useSeo } from '@/hooks/use-seo'
import { useTranslation } from 'react-i18next'

export default function Metals() {
    const seo = useSeo('metals')
    const { t } = useTranslation('markets')

    const item = [
        {
            title: t('metals.faq.whyTradeMetals.title'),
            body: t('metals.faq.whyTradeMetals.body'),
        },
        {
            title: t('metals.faq.stepUpTrading.title'),
            body: t('metals.faq.stepUpTrading.body'),
        },
        {
            title: t('metals.faq.howMetalTradingWorks.title'),
            body: t('metals.faq.howMetalTradingWorks.body'),
        },
    ]

    return (
        <>
            <SeoHead {...seo} canonicalPath="/trading/metals" />
            <CommonBanner
                bg={banner_bg}
                bgClass="bottom-0 md:left-1/2 md:-translate-x-1/2 w-full object-contain w-auto h-auto"
                meta={t('metals.banner.meta')}
                title={t('metals.banner.title')}
                des={
                    <>
                        {t('metals.banner.description1')}
                        <span className='block mt-3'>{t('metals.banner.description2')}</span>
                    </>
                }
            />
            <div className="common-padding">
                <Container>
                    <div className="flex flex-col gap-y-6 lg:gap-y-8 max-w-6xl">
                        <Card
                            meta={t('metals.card.meta')}
                            title={t('metals.card.title')}
                            des={<>
                                <p>{t('metals.card.description')}</p>
                            </>}
                            img={img}
                        />
                        <Cta />
                    </div>
                </Container>
            </div>
            <div className="common-padding pt-0">
                <div className='max-w-215 mx-auto px-3'>
                    <CommonTitle className='text-center' title={t('metals.learn.title')} />
                    <Accordion items={item} activeItem={0} />
                </div>
            </div>
            <MarketPageTrustLinks />
        </>
    )
}
