import React from 'react'
import { Container } from '@/components/grid'
import Accordion from '@/components/accordion'
import CommonTitle from '@/components/common-title';
import Card from '@/components/trade/card';
import Cta from '@/components/trade/cta';
import CommonBanner from '@/components/common-banner';
import img from '@/assets/img/trade/forex.png'
import SeoHead from '@/components/seo-head'
import MarketPageTrustLinks from '@/components/trust/market-page-trust-links'
import { useSeo } from '@/hooks/use-seo'
import { useTranslation } from 'react-i18next'

export default function Forex() {
    const seo = useSeo('forex')
    const { t } = useTranslation('markets')

    const item = [
        {
            title: t('shared.faq.discoverHowToTrade.title'),
            body: t('shared.faq.discoverHowToTrade.body'),
        },
        {
            title: t('forex.faq.whatIsForex.title'),
            body: t('forex.faq.whatIsForex.body'),
        },
        {
            title: t('forex.faq.howToTradeForex.title'),
            body: t('forex.faq.howToTradeForex.body'),
        },
    ]

    return (
        <>
            <SeoHead {...seo} canonicalPath="/forex" />
            <CommonBanner
                title={t('forex.banner.title')}
                des={t('forex.banner.description')}
            />
            <div className="common-padding">
                <Container>
                    <div className="flex flex-col gap-y-6 lg:gap-y-8 max-w-6xl">
                        <Card
                            meta={t('forex.card.meta')}
                            title={t('forex.card.title')}
                            des={<>
                                <p>{t('forex.card.description1')}</p>
                                <p>{t('forex.card.description2')}</p>
                            </>}
                            img={img}
                        />
                        <Cta />
                    </div>
                </Container>
            </div>
            <div className="common-padding pt-0">
                <div className='max-w-215 mx-auto px-3'>
                    <CommonTitle className='text-center' title={t('forex.learn.title')} />
                    <Accordion items={item} activeItem={0} />
                </div>
            </div>
            <MarketPageTrustLinks />
        </>
    )
}
