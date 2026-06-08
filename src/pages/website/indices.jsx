import React from 'react'
import { Container } from '@/components/grid'
import Accordion from '@/components/accordion'
import CommonTitle from '@/components/common-title';
import Card from '@/components/trade/card';
import Cta from '@/components/trade/cta';
import banner_bg from '@/assets/img/trade/indices-banner-bg.png'
import CommonBanner from '@/components/common-banner';
import img from '@/assets/img/trade/indices.png'
import SeoHead from '@/components/seo-head'
import MarketPageTrustLinks from '@/components/trust/market-page-trust-links'
import { useSeo } from '@/hooks/use-seo'
import { useTranslation } from 'react-i18next'

export default function Indices() {
    const seo = useSeo('indices')
    const { t } = useTranslation('markets')

    const item = [
        {
            title: t('shared.faq.discoverHowToTrade.title'),
            body: t('shared.faq.discoverHowToTrade.body'),
        },
        {
            title: t('indices.faq.howCalculated.title'),
            body: t('indices.faq.howCalculated.body'),
        },
        {
            title: t('indices.faq.tradeWithLeverage.title'),
            body: t('indices.faq.tradeWithLeverage.body'),
        },
    ]

    return (
        <>
            <SeoHead {...seo} canonicalPath="/indices" />
            <CommonBanner
                containerClass="text-center lg:text-start max-w-180 lg:max-w-210"
                bg={banner_bg}
                meta={t('indices.banner.meta')}
                title={t('indices.banner.title')}
                des={t('indices.banner.description')}
                desClass="max-w-140 lg:max-w-156 mx-auto lg:mx-0"
            />
            <div className="common-padding">
                <Container>
                    <div className="flex flex-col gap-y-6 lg:gap-y-8 max-w-6xl">
                        <Card
                            meta={t('indices.card.meta')}
                            title={t('indices.card.title')}
                            des={<>
                                <p>{t('indices.card.description1')}</p>
                                <p>{t('indices.card.description2')}</p>
                            </>}
                            img={img}
                        />
                        <Cta />
                    </div>
                </Container>
            </div>
            <div className="common-padding pt-0">
                <div className='max-w-215 mx-auto px-3'>
                    <CommonTitle className='text-center' title={t('indices.learn.title')} />
                    <Accordion items={item} activeItem={0} />
                </div>
            </div>
            <MarketPageTrustLinks />
        </>
    )
}
