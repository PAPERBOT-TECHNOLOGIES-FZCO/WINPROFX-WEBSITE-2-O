import About from "./about";
import Award from "./award";
import Banner from "./banner";
import BenefitsTrading from "./benefits-trading";
import News from "./news";
import TradingStarts from "./trading-starts";
import WhatTrade from "./what-trade";
export default function Home() {
  return (
    <>
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
