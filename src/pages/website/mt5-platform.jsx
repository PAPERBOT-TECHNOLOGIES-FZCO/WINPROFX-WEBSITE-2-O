import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/grid'
import banner_bg from '@/assets/img/mt5/mt5-banner-bg.png'
import CommonBanner from '@/components/common-banner';
import imgApp from '@/assets/img/mt5/mt5-app.png'
import imgWeb from '@/assets/img/mt5/mt5-web.png'
import TopShape from '../../components/top-shape';
import PlatformCard from '../../components/mt5/platform-card';
import PaymentFlow from '../../components/payment-flow';
import DemoCta from '@/components/demo-cta';
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import MarketPageTrustLinks from '@/components/trust/market-page-trust-links'

export default function Mt5Platform() {
  const { t } = useTranslation('trading')
  const seo = useSeo('platform')
  const pf = (key) => t(`platform.${key}`)

  const platformCardsData = [
    {
      id: 1,
      meta: pf('cards.mobile.meta'),
      title: pf('cards.mobile.title'),
      description: pf('cards.mobile.description'),
      img: imgApp,
    },
    {
      id: 2,
      meta: pf('cards.desktop.meta'),
      title: pf('cards.desktop.title'),
      description: pf('cards.desktop.description'),
      img: imgWeb,
    },
  ]

  return (
    <>
      <SeoHead {...seo} canonicalPath="/platform" />
      <TopShape />
      <CommonBanner
        className="3xl:min-h-350!"
        bg={banner_bg}
        bgClass="bottom-0 w-full"
        meta={pf('bannerMeta')}
        title={pf('h1')}
        des={pf('bannerDes')}
      />
      <div className="common-padding">
        <Container>
          <div className="flex flex-col gap-y-6 lg:gap-y-8 max-w-6xl">
            {platformCardsData.map((card) => (
              <PlatformCard
                key={card.id}
                id={card.id}
                meta={card.meta}
                title={card.title}
                des={<p>{card.description}</p>}
                img={card.img}
              />
            ))}
          </div>
        </Container>
      </div>

      <PaymentFlow />

      <div className="common-padding">
        <Container>
          <DemoCta />
        </Container>
      </div>
    </>
  );
}
