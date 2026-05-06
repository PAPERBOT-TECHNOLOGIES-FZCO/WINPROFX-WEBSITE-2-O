import React from 'react'
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

export default function WinPromotion() {
    return (
        <>
            <TopShape />
            <CommonBanner
                className="3xl:min-h-300!"
                bg={banner_bg}
                meta="WinproFX Exclusive · March - May 2026"
                title="Trade to Win Program"
                des={
                    <>
                        Achieve specific trading volumes within 30 days and unlock exclusive Apple rewards. The more you trade, the greater the prize.
                    </>
                }
                desClass="max-w-135 mx-auto"
                secondButtonText="View T&C"
                secondButtonLink="/viewtc"

            />

            <div className="common-padding ">
                <Container>
                    <div className='max-w-135 px-3'>
                        <CommonTitle className='text-start' subTitle="Reward Tiers" subTitleClass="rounded-[100px] border border-white/20 bg-white/[0.06] px-4 py-1 mb-4 inline-block" title="Trade More, Win More" des="Hit your target lot volume within 30 days to claim your prize. Six tiers, six chances to win — every lot gets you closer." />
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
