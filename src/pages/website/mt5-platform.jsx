import React from 'react'
import { Container } from '@/components/grid'
import Accordion from '@/components/accordion'
import CommonTitle from '@/components/common-title';
import Card from '@/components/trade/card';
import Cta from '@/components/trade/cta';
import banner_bg from '@/assets/img/mt5/mt5-banner-bg.png'
import CommonBanner from '@/components/common-banner';
import imgApp from '@/assets/img/mt5/mt5-app.png'
import imgWeb from '@/assets/img/mt5/mt5-web.png'
import TopShape from '../../components/top-shape';
import PlatformCard from '../../components/mt5/platform-card';
import PaymentFlow from '../../components/payment-flow';
import DemoCta from '../../components/demo-cta';
import SeoHead from '@/components/seo-head'

// Demo data for platform cards
const platformCardsData = [
  {
    id: 1,
    meta: "TRADING PLATFORM",
    title: "Download MT 5 For Mobile",
    description: "WinproFX has remained highly successful to expand their business all over the world, and now we are MT 5 is now available on Android and iPhone, and you are one step closer to success. Download MT 5 now and dive into the world of limitless trading opportunities.",
    img: imgApp,
  },
  {
    id: 2,
    meta: "TRADING PLATFORM",
    title: "Download MT 5 For Web",
    description: "Experience the power of MT5 on your desktop. Access advanced charting tools, automated trading capabilities, and real-time market data. WinproFX provides a seamless web-based trading platform for professional traders looking for advanced features and flexibility.",
    img: imgWeb,
  },
];

export default function Mt5Platform() {

  return (
    <>
      <SeoHead
        title="Best Forex Trading Platform | MT5 | Top Forex Brokers | WinproFX"
        description="Experience advanced trading with WinproFX's MT5 platform, available on both mobile and web. Click to explore more!"
        keywords="Forex Trading Platform, WinProFX Trading Platform, Best Forex Platform, MT5 Trading Platform, Forex Trading Tools, CFD Trading Platform, Commodities Trading Platform, Online Trading Solutions, Advanced Trading Platform, Forex Market Tools"
        canonicalPath="/platform"
      />
      <TopShape />
      <CommonBanner
        className="3xl:min-h-350!"
        bg={banner_bg}
        bgClass="bottom-0 w-full"
        meta="Platform"
        title="MT5 Unleashed: Dive into Limitless Trading Success with WinproFX"
        des={
          <>
            WinproFX has achieved significant success in global business
            expansion. We offer the Best Forex Trading Platform on MT5,
            accessible on both Android and iPhone, bringing you one step
            closer to success. Take the plunge into a realm of endless trading
            opportunities by downloading MT5 now.
          </>
        }
      />
      <div className="common-padding">
        <Container>
          <div className="flex flex-col gap-y-6 lg:gap-y-8 max-w-6xl">
            {platformCardsData.map((card) => (
              <PlatformCard
                key={card.id}
                meta={card.meta}
                title={card.title}
                des={
                  <>
                    <p>{card.description}</p>
                  </>
                }
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

