import React from 'react'
import { Container } from '@/components/grid'
import LocalizedLink from '@/components/localized-link'
import MetaText from '@/components/meta-text'
import SeoHead from '@/components/seo-head'
import TopShape from '@/components/top-shape'
import { useSeo } from '@/hooks/use-seo'

const DXY_URL = 'https://www.tradingview.com/symbols/TVC-DXY/'

export default function TradingViewPartner() {
  const seo = useSeo('tradingview')

  return (
    <>
      <SeoHead {...seo} canonicalPath="/tradingview" pageName="WINPROFX and TradingView" />
      <div lang="en" className="relative overflow-hidden padding-top-245 pb-16 md:pb-20 lg:pb-28">
        <TopShape />
        <Container className="max-w-215! mx-auto text-center">
          <MetaText className="mb-4 md:mb-5 lg:mb-6" title="Charting Partner" />
          <h1 className="h1 mb-4 md:mb-5 lg:mb-7">WINPROFX and TradingView</h1>
          {/* TradingView's required wording: keep verbatim, keep the DXY backlink, and don't move it to the footer. */}
          <p className="text-para2 text-base md:text-lg lg:text-xl leading-relaxed">
            WinProfX has partnered with TradingView for its charting technology, offering clients advanced multi-asset
            charts and real-time market data, including the{' '}
            <a href={DXY_URL} target="_blank" rel="noopener" className="text-primary underline hover:text-white">
              dollar index (DXY)
            </a>{' '}
            to track broader USD momentum across major currency pairs.
          </p>
          <p className="mt-8 md:mt-10 text-sm text-para">
            Trading leveraged products involves significant risk of loss. Read our{' '}
            <LocalizedLink to="/risk-warning/" className="text-white underline hover:text-primary">
              Risk Warning
            </LocalizedLink>
            .
          </p>
        </Container>
      </div>
    </>
  )
}
