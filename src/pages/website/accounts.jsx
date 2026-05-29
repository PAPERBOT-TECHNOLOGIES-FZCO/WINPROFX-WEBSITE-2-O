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

export default function Accounts() {
  return (
    <>
      <SeoHead
        title="Trading Accounts | WINPROFX"
        description="Explore WINPROFX trading account information, account access options, platform-related services, and important risk details."
        keywords="Forex Trading Accounts, Standard Account, Pro Account, ECN Account, WINPROFX Account Types, Online Trading Account"
        canonicalPath="/accounts"
      />
      <TopShape />
      <CommonBanner
        className="3xl:min-h-275! bg-[#010101]!"
        containerClass="max-w-180! text-center"
        videoBg={video}
        bgClass="mt-25 md:mt-0 md:top-1/2 h-auto 3xl:h-full! w-full bottom-0 left-0 scale-180 md:scale-100"
        meta="ACCOUNTS"
        title="Trading Accounts"
        des={
          <>
            Unlock feature-packed, commission-free trading accounts designed for
            today’s traders. Sign up now and enjoy the benefits of our most
            popular account.
          </>
        }
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
