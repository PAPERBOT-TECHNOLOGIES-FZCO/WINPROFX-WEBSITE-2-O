import About from "./about";
import Award from "./award";
import Banner from "./banner";
import BenefitsTrading from "./benefits-trading";
import News from "./news";
import TradingStarts from "./trading-starts";
import WhatTrade from "./what-trade";
import SeoHead from '@/components/seo-head';
import PlatformCard from '@/components/mt5/platform-card';
import imgApp from '@/assets/img/mt5/mt5-app.png'
import { Container } from '@/components/grid'
import { useSeo } from '@/hooks/use-seo'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const seo = useSeo('home')
  const { t } = useTranslation('homepage')

  return (
    <>
      <SeoHead {...seo} canonicalPath="/" />
      <Banner />
      <TradingStarts />
      <BenefitsTrading />
        <Container>
          <PlatformCard
            id={1}
            meta={t('platform.meta')}
            title={t('platform.title')}
            des={
              <>
                <p>{t('platform.description')}</p>
              </>
            }
            img={imgApp}
          />
        </Container>
      <WhatTrade />
      <About />
      <Award />
      <News />
    </>
  )
}
