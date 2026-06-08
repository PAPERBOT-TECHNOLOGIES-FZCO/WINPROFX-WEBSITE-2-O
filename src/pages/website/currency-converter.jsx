import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/grid'
import Accordion from '@/components/accordion'
import CommonTitle from '@/components/common-title';
import CommonBanner from '@/components/common-banner';
import TopShape from '../../components/top-shape';
import DemoCta from '@/components/demo-cta';
import Converter from '@/components/currency/converter';
import WhyFx from '../../components/currency/why-fx';
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'

import video from "@/assets/img/currency-converter/currency-converter-video.webm";
import about_video from '@/assets/img/currency-converter/video.webm'

const faqKeys = ['selectBase', 'enterAmount', 'ratesUpdated', 'accountRequired', 'updateFrequency']
const stepKeys = ['selectBase', 'selectTargets', 'enterAmount', 'autoCalculate']

export default function CurrencyConverter() {
    const { t } = useTranslation('tools')
    const seo = useSeo('currencyConverter')
    const cv = (key) => t(`currencyConverter.${key}`)

    const item = faqKeys.map((key) => ({
        title: cv(`faqs.${key}.title`),
        body: `<p>${cv(`faqs.${key}.body`)}</p>`,
    }))

    const cardList = stepKeys.map((key) => ({ name: cv(`steps.${key}`) }))

    return (
        <>
            <SeoHead {...seo} canonicalPath="/currency-converter" />
            <style jsx global>
                {`
                  .banner  p + div{
                    display:none !important;
                }
                `}
            </style>
            <TopShape />
            <CommonBanner
                className="bg-[#050713]!"
                videoBg={video}
                bgClass="top-1/4 h-auto w-full bottom-0 left-0"
                meta={cv('bannerMeta')}
                title={cv('h1')}
                des={cv('bannerDes')}
                desClass="max-w-150 mx-auto"
                containerClass="max-w-215! mx-auto text-center banner"
            >
                <div className="mt-16 px-4">
                    <Converter />
                </div>
            </CommonBanner>
            <div className="common-padding pb-0">
                <div className='px-3 max-w-291 mx-auto mb-4 md:mb-6 relative z-1 flex flex-wrap flex-col-reverse lg:flex-row lg:items-center justify-between gap-y-6 xl:gap-x-0 rounded-2xl overflow-hidden border border-solid border-white/8 p-4 backdrop-blur-2xl' style={{ backgroundImage: 'linear-gradient(112deg, rgba(0, 217, 255, 0.10) 0%, rgba(0, 217, 255, 0.00) 35.49%)', backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                    <svg className='max-w-full absolute top-0 right-0 -z-10 pointer-events-none' width="575" height="430" viewBox="0 0 575 430" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_6100_280)">
                            <g filter="url(#filter1_f_6100_280)">
                                <path d="M234.21 15.6161C277.756 -75.6689 384.953 -115.375 473.64 -73.0679C562.327 -30.7608 598.921 77.5371 555.375 168.823C511.828 260.109 467.08 160.28 378.393 117.974C289.706 75.6676 190.663 106.902 234.21 15.6161Z" fill="url(#paint0_radial_6100_280)" />
                            </g>
                        </g>
                        <g filter="url(#filter2_f_6100_280)">
                            <path d="M619.148 -26.6688C669.889 -7.70831 707.07 21.3023 702.193 38.1282C697.316 54.9541 652.228 53.2236 601.486 34.2631C550.745 15.3026 513.564 -13.7081 518.441 -30.534C523.318 -47.3599 568.406 -45.6294 619.148 -26.6688Z" fill="#00D9FF" />
                        </g>
                        <defs>
                            <filter id="filter0_f_6100_280" x="0.000350952" y="-313.61" width="797.338" height="743.319" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="111.805" result="effect1_foregroundBlur_6100_280" />
                            </filter>
                            <filter id="filter1_f_6100_280" x="129.61" y="-184" width="538.118" height="484.099" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="47" result="effect1_foregroundBlur_6100_280" />
                            </filter>
                            <filter id="filter2_f_6100_280" x="418.012" y="-142.103" width="384.611" height="291.801" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_6100_280" />
                            </filter>
                            <radialGradient id="paint0_radial_6100_280" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(422.502 34.1352) rotate(121.07) scale(194.943 292.012)">
                                <stop stopColor="#00D9FF" />
                                <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <motion.div
                        initial={{ opacity: 0, y: y }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: duration, delay: 0.4 }}
                        viewport={{ once: once, amount: 0.2 }}
                        className="max-w-full lg:max-w-140 xl:max-w-150 w-full lg:p-4 xl:p-6">
                        <h3 className='h2 mb-3 md:mb-4'>{cv('cardTitle')}</h3>
                        <div className="flex flex-col gap-y-5 mb-6 md:mb-8">
                            <p>{cv('cardDes')}</p>
                            <div className="flex flex-col gap-y-4">
                                {cardList.map((step, i) => (
                                    <div className="text-para flex items-start gap-x-2.5" key={i}>
                                        <svg className='flex-none translate-y-0.75' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.16594 1.63338C7.62594 1.24005 8.37927 1.24005 8.84594 1.63338L9.89927 2.54005C10.0993 2.71338 10.4726 2.85338 10.7393 2.85338H11.8726C12.5793 2.85338 13.1593 3.43338 13.1593 4.14005V5.27338C13.1593 5.53338 13.2993 5.91338 13.4726 6.11338L14.3793 7.16671C14.7726 7.62671 14.7726 8.38004 14.3793 8.84671L13.4726 9.90004C13.2993 10.1 13.1593 10.4734 13.1593 10.74V11.8734C13.1593 12.58 12.5793 13.16 11.8726 13.16H10.7393C10.4793 13.16 10.0993 13.3 9.89927 13.4734L8.84594 14.38C8.38594 14.7734 7.6326 14.7734 7.16594 14.38L6.1126 13.4734C5.9126 13.3 5.53927 13.16 5.2726 13.16H4.11927C3.4126 13.16 2.8326 12.58 2.8326 11.8734V10.7334C2.8326 10.4734 2.6926 10.1 2.52594 9.90004L1.62594 8.84004C1.23927 8.38004 1.23927 7.63338 1.62594 7.17338L2.52594 6.11338C2.6926 5.91338 2.8326 5.54004 2.8326 5.28005V4.13338C2.8326 3.42671 3.4126 2.84671 4.11927 2.84671H5.2726C5.5326 2.84671 5.9126 2.70671 6.1126 2.53338L7.16594 1.63338Z" fill="#00D9FF" />
                                            <path d="M7.1937 10.1134C7.06036 10.1134 6.9337 10.06 6.84036 9.96669L5.22703 8.35335C5.0337 8.16002 5.0337 7.84002 5.22703 7.64669C5.42036 7.45335 5.74036 7.45335 5.9337 7.64669L7.1937 8.90669L10.0604 6.04002C10.2537 5.84669 10.5737 5.84669 10.767 6.04002C10.9604 6.23335 10.9604 6.55335 10.767 6.74669L7.54703 9.96669C7.4537 10.06 7.32703 10.1134 7.1937 10.1134Z" fill="#0D0F12" />
                                        </svg>
                                        <span>{step.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: y }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: duration, delay: 0.4 }}
                        viewport={{ once: once, amount: 0.2 }}
                        className="p-0 max-w-full lg:max-w-85 xl:max-w-118 lg:h-101 w-full rounded-2xl bg-white/5 flex items-center justify-center">
                        <video src={about_video} autoPlay loop muted className='w-full h-full object-cover rounded-2xl' />
                    </motion.div>
                </div>
                <WhyFx />
            </div>

            <div className="common-padding">
                <div className="max-w-206 mx-auto px-3">
                    <CommonTitle className="text-center" title={cv('faqTitle')} />
                    <Accordion
                        items={item}
                        activeItem={0}
                        desClass="[&>ul>li]:items-start [&>ul>li>svg]:translate-y-1 [&>ul>li>span]:text-para [&>ul>li>span>span]:text-white"
                    />
                </div>
            </div>
        </>
    );
}
