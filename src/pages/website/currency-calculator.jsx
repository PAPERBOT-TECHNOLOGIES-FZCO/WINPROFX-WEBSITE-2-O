import React from "react";
import { Container } from "@/components/grid";
import Accordion from "@/components/accordion";
import CommonTitle from "@/components/common-title";
import Card from "@/components/trade/card";
import Cta from "@/components/trade/cta";
import CommonBanner from "@/components/common-banner";
import TopShape from "../../components/top-shape";
import PlatformCard from "../../components/mt5/platform-card";
import PaymentFlow from "../../components/payment-flow";
import DemoCta from "@/components/demo-cta";
import OrderCalculator from "@/components/currency/order-calculator";
import video from "@/assets/img/currency-calculator/currency-calculator-video.webm";
import CalculatorDisclaimer from "@/components/currency/calculator-disclaimer";
import TradingStarts from "./home/trading-starts";
import SeoHead from "@/components/seo-head";

export default function CurrencyCalculator() {
  // faq item
  const item = [
    {
      title: "What is a Forex Currency Calculator?",
      body: `
                <p>A Forex Currency Calculator is a tool that helps traders calculate pips, margin, spread, commission, and other important metrics for their trading positions.</p>
            `,
    },
    {
      title: "How do I use a Forex Currency Calculator?",
      body: `
                <p>Input your trade details, such as currency pair, position size, and leverage, to calculate various metrics like pips, margin, and spread.</p>
            `,
    },
    {
      title: "What metrics can the Forex Currency Calculator help me calculate?",
      body: `
                <p>The calculator helps you determine pips, margin, spread, commission, and other essential trading metrics.</p>
            `,
    },
    {
      title: "Is a Forex Currency Calculator free to use?",
      body: `
                <p>Yes, a Forex Currency Calculator on WinProFX is free for all users.</p>
            `,
    },
    {
      title: "Why should I use a Forex Currency Calculator?",
      body: `
                <p>It simplifies complex calculations, helping you make more informed trading decisions and manage your positions effectively.</p>
            `,
    },
    {
      title: "Can I use the Forex Currency Calculator for all currency pairs?",
      body: `
                <p>Yes, the calculator supports all major and minor currency pairs.</p>
            `,
    },
    {
      title: "Does the Forex Currency Calculator account for different account types?",
      body: `
                <p>Yes, you can customize the calculator settings to match your specific account type and trading conditions.</p>
            `,
    },
    {
      title: "How accurate is the Forex Currency Calculator?",
      body: `
                <p>The calculator provides highly accurate results based on the input data and current market conditions.</p>
            `,
    },
    {
      title: "Where can I find the Forex Currency Calculator on WinProFX?",
      body: `
                <p>You can access the Forex Currency Calculator in the tools section of your Personal Area on the WinProFX website.</p>
            `,
    },
    {
      title: "Can the Forex Currency Calculator help with risk management?",
      body: `
                <p>Yes, by calculating key metrics, it helps you better understand and manage the risks associated with your trades.</p>
            `,
    },
  ];

  return (
    <>
      <SeoHead
        title="Currency Calculator | WinproFX"
        description="Streamline your trading calculations with WinproFX's currency calculator. Efficiently manage trades and understand costs like margin and pip values. Calculate now!"
        keywords="Currency Calculator, Forex Calculator, Pip Calculator, Margin Calculator, Trading Calculator, WinproFX Tools"
        canonicalPath="/currency-calculator"
      />
      <style jsx global>{`
        p + div{
        display:none !important;
      }
      `}</style >
      <TopShape />
      <CommonBanner
        videoBg={video}
        bgClass="-mt-50 md:mt-0 md:top-1/4 h-auto w-full bottom-0 left-0"
        className="2xl:h-350 md:h-auto lg:h-auto xl:h-auto h-auto bg-black!"
        meta="Calculator"
        title="Precision Trade Planning"
        titleClass="text-center md:text-start"
        des="Calculate margin, pip values, and overnight swaps in real-time across global markets."
        desClass="mx-0 text-center md:text-start"
        containerClass="max-w-290!"
      >
        <div className="flex flex-col gap-8 mt-16 mb-21 px-4">
          <OrderCalculator />
          <CalculatorDisclaimer />
        </div>
      </CommonBanner>
      <TradingStarts />

      <div className="common-padding">
        <div className="max-w-206 mx-auto px-3">
          <CommonTitle
            className="text-center"
            title="Forex Currency Calculator"
            des="Forex Currency Calculator is a useful tool that helps traders quickly convert one currency into another using real-time exchange rates."
            desClass="max-w-145 mx-auto"
          />
          <Accordion
            items={item}
            activeItem={0}
          />
        </div>
      </div>
    </>
  );
}
