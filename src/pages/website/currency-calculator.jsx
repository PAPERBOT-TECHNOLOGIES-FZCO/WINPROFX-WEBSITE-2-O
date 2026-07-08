import React from "react";
import { Container } from "@/components/grid";
import Accordion from "@/components/accordion";
import CommonTitle from "@/components/common-title";
import CommonBanner from "@/components/common-banner";
import TopShape from "../../components/top-shape";
import OrderCalculator from "@/components/currency/order-calculator";
import video from "@/assets/img/currency-calculator/currency-calculator-video.webm";
import CalculatorDisclaimer from "@/components/currency/calculator-disclaimer";
import TradingStarts from "./home/trading-starts";
import SeoHead from "@/components/seo-head";
import { useSeo } from '@/hooks/use-seo';
import { useTranslation } from 'react-i18next';

const faqKeys = ['whatIs', 'howToUse', 'metrics', 'free', 'whyUse', 'allPairs', 'accountTypes', 'accuracy', 'whereFind', 'riskManagement']

export default function CurrencyCalculator() {
  const { t } = useTranslation('tools');
  const seo = useSeo('currencyCalculator')
  const cc = (key) => t(`currencyCalculator.${key}`)

  const item = faqKeys.map((key) => ({
    title: cc(`faqs.${key}.title`),
    body: `<p>${cc(`faqs.${key}.body`)}</p>`,
  }))

  return (
    <>
      <SeoHead {...seo} canonicalPath="/currency-calculator" />
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
        meta={cc('bannerMeta')}
        title={cc('bannerTitle')}
        titleClass="text-center md:text-start"
        des={cc('bannerDes')}
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
            title={cc('sectionTitle')}
            des={cc('sectionDes')}
            desClass="max-w-145 mx-auto"
          />
          <Accordion items={item} activeItem={0} />
        </div>
      </div>
    </>
  );
}
