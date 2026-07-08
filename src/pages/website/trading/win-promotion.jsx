import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/grid'
import banner_bg from '@/assets/img/trade/win-banner-bg.png'
import CommonBanner from '@/components/common-banner';
import CommonTitle from '@/components/common-title';
import RewardTiersSlider from '@/components/promotion/RewardTiersSlider'
import HowItWorks from '@/components/promotion/howItWorks'
import ProgramPeriod from '@/components/promotion/ProgramPeriod';
import Eligibility from '@/components/promotion/Eligibility'
import TopShape from '@/components/top-shape';
import PtConditions from '@/components/promotion/PtConditions';
import StartTrading from '@/components/promotion/StartTrading';
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'

export default function WinPromotion() {
    const { t } = useTranslation('trading')
    const seo = useSeo('winPromotion')
  return (
        <>
            <SeoHead
        {...seo}
        canonicalPath="/trading/win-promotion"
      />
            <TopShape />
            <CommonBanner
                className="3xl:min-h-300!"
                bg={banner_bg}
                meta={t('winPromotion.meta')}
                title={t('winPromotion.h1')}
                des={t('winPromotion.des')}
                desClass="max-w-135 mx-auto"
                secondButtonText={t('winPromotion.secondButton')}
                secondButtonLink="/trading/trade-to-win"
            />

            <div className="common-padding ">
                <Container>
                    <div className='max-w-135 px-3'>
                        <CommonTitle
                            className='text-start'
                            subTitle={t('winPromotion.rewardTiers.subTitle')}
                            subTitleClass="rounded-[100px] border border-white/20 bg-white/[0.06] px-4 py-1 mb-4 inline-block"
                            title={t('winPromotion.rewardTiers.title')}
                            des={t('winPromotion.rewardTiers.des')}
                        />
                    </div>
                </Container>
                <div className="reward_tiers_slider">
                    <RewardTiersSlider />
                </div>
            </div>
            <div className="common-padding">
                <HowItWorks />
            </div>

            <ProgramPeriod />
            <Eligibility />
            <PtConditions />
            <StartTrading />
        </>
    )
}
