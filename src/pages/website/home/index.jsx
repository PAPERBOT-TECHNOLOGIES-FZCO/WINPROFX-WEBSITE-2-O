import About from "./about";
import Award from "./award";
import Banner from "./banner";
import BenefitsTrading from "./benefits-trading";
import News from "./news";
import TradingStarts from "./trading-starts";
import WhatTrade from "./what-trade";
import SeoHead from '@/components/seo-head';
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
      <WhatTrade />
      <About />
      <Award />
      <News />
    </>
  )
}
