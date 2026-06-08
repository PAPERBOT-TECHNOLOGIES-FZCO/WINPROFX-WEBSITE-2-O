import React from "react";
import { Container } from "@/components/grid";
import Accordion from "@/components/accordion";
import CommonTitle from "@/components/common-title";
import CommonBanner from "@/components/common-banner";
import TopShape from "../../components/top-shape";
import ChooseAccount from "@/components/accounts/choose-account";
import FeatureComparison from "@/components/accounts/feature-comparison";
import video from "@/assets/img/accounts/accounts.webm";
import CtaTwo from "../../components/cta-two";
import SeoHead from "@/components/seo-head";
import { useSeo } from '@/hooks/use-seo';
import { useTranslation } from 'react-i18next';

export default function Accounts() {
  const { t } = useTranslation('trading');
  const seo = useSeo('accounts')
  return (
    <>
      <SeoHead
        {...seo}
        canonicalPath="/accounts"
      />
      <TopShape />
      <CommonBanner
        className="3xl:min-h-275! bg-[#010101]!"
        containerClass="max-w-180! text-center"
        videoBg={video}
        bgClass="mt-25 md:mt-0 md:top-1/2 h-auto 3xl:h-full! w-full bottom-0 left-0 scale-180 md:scale-100"
        meta={t('accounts.meta')}
        title={t('accounts.h1')}
        des={t('accounts.des')}
      />

      <div className="common-padding">
        <Container>
          <ChooseAccount />
        </Container>
      </div>

      <div className="common-padding pt-0">
        <Container>
          <FeatureComparison />
        </Container>
      </div>

      <div className="common-padding pt-0">
        <Container>
          <CtaTwo />
        </Container>
      </div>
    </>
  );
}
