import React from 'react'
import { useTranslation } from 'react-i18next'
import banner_bg from '@/assets/img/promotion/banner-bg2.png'
import CommonBanner from '@/components/common-banner';
import TopShape from '@/components/top-shape';
import Advantages from '@/components/introducing-broker/Advantages';
import Benefits from '@/components/introducing-broker/Benefits';
import Calculate from '@/components/introducing-broker/Calculate';
import PayoutForm from '@/components/introducing-broker/PayoutForm';
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'

export default function IntroducingBroker() {
    const { t } = useTranslation('trading')
    const seo = useSeo('introducingBroker')

    return (
        <div>
            <SeoHead
                {...seo}
                canonicalPath="/introducing-broker"
            />
            <TopShape />
            <CommonBanner
                className="3xl:min-h-300!"
                bg={banner_bg}
                bgClass="bottom-0 left-0 w-full h-auto object-cover"
                meta={t('introducingBroker.meta')}
                title={t('introducingBroker.h1')}
                des={t('introducingBroker.des')}
                desClass="max-w-135 mx-auto"
                buttonText={t('introducingBroker.buttonText')}
                buttonLink="https://my.winprofx.org/register"
            />
            <Advantages />
            <Benefits />
            <Calculate />
            <PayoutForm />
        </div>
    )
}
