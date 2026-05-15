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
export default function Home() {
  return (
    <>
      <SeoHead
        title="Trade Forex & CFDs Online | Award Winning Forex Broker | WinproFX"
        description="Explore WinproFX for advanced online Forex trading. Our platform offers extensive tools, resources, and support to enhance your trading success. Click to learn more!"
        keywords="Best Forex Trading Platform in India, Best Indices Trading Platform in India, Best Crypto Trading Platform in India, Best Metals Trading Platform in India, Best Commodities Trading Platform in India, Best Oil Trading Platform in India, Best Forex and Crypto Trading Platform in India, Best Trading Platform for Commodities in India, Best Platform for Trading Indices in India, Best Trading Platform for Metals and Oil in India, Best Online Trading Platform in India, Best Forex and Commodities Trading Platform in India, Best Crypto and Forex Trading Platform in India, Best Trading Platform with Tight Spreads in India, Best Trading Platform for Beginners in India"
        canonicalPath="/"
      />
      <Banner />
      <TradingStarts />
      <BenefitsTrading />
        <Container>
          <PlatformCard
            id={1}
            meta="TRADING PLATFORM"
            title="Download MT 5 For Mobile"
            des={
              <>
                <p>
                  WinproFX has remained highly successful to expand their business
                  all over the world, and now we are MT 5 is now available on
                  Android and iPhone, and you are one step closer to success.
                  Download MT 5 now and dive into the world of limitless trading
                  opportunities.
                </p>
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
