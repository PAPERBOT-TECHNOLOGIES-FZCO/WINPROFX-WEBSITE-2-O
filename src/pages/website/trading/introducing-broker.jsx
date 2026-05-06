import React from 'react'
import banner_bg from '@/assets/img/promotion/banner-bg2.png'
import CommonBanner from '@/components/common-banner';
import TopShape from '@/components/top-shape';
import Advantages from '@/components/introducing-broker/Advantages';
import Benefits from '@/components/introducing-broker/Benefits';
import Calculate from '@/components/introducing-broker/Calculate';
import PayoutForm from '@/components/introducing-broker/PayoutForm';
export default function WinPromotion2() {
    return (
        <div>
            <TopShape />
            <CommonBanner
                className="3xl:min-h-300!"
                bg={banner_bg}
                bgClass="bottom-0 left-0 w-full h-auto object-cover"
                meta="WinproFX Exclusive · March - May 2026"
                title="Team Up With WinproFX As A Partner (IB)"
                des={
                    <>
                        Join an industry-leading Introducing Broker (IB) program engineered for maximum yield, absolute transparency, and daily automated payouts.
                    </>
                }
                desClass="max-w-135 mx-auto"
                buttonText="Become a Partner"
                buttonLink="/register"
            />
            <Advantages />
            <Benefits />
            <Calculate />
            <PayoutForm />
        </div>
    )
}
