import React from 'react'
import { Container } from '@/components/grid'
import Accordion from '@/components/accordion'
import CommonTitle from '@/components/common-title';
import Card from '@/components/trade/card';
import Cta from '@/components/trade/cta';
import CommonBanner from '@/components/common-banner';
import TopShape from '../../components/top-shape';
import PlatformCard from '../../components/mt5/platform-card';
import PaymentFlow from '../../components/payment-flow';
import DemoCta from '@/components/demo-cta';
import Converter from '@/components/currency/converter';
import WhyFx from '../../components/currency/why-fx';
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import SeoHead from '@/components/seo-head'

import video from "@/assets/img/currency-converter/currency-converter-video.webm";
import about_video from '@/assets/img/currency-converter/video.webm'

export default function CurrencyConverter() {
    const card_info = {
        title: 'Using the WinproFX Currency Converter',
        des: 'Our currency converter assists you in swiftly and accurately converting one currency to another with real-time rates. This tool is essential when making deposits and withdrawals on your trading account.',
        list: [
            {
                name: 'From the available six dropdown lists, select your base currency.'
            },
            {
                name: 'Choose up to five other currencies to convert to.'
            },
            {
                name: 'Enter the amount you want to convert from the base currency.'
            },
            {
                name: 'The currency converter will automatically calculate and display the exchange rates for your chosen currencies.'
            },
        ]
    }


    // faq item
    const item = [
        {
            title: 'How do I select the base currency?',
            body: `
                <p>You can select your base currency from the six available dropdown lists. This will be the currency you are converting from</p>
            `,
        },
        {
            title: 'How How do I enter the amount to convert?',
            body: `
                <p>Simply enter the amount you wish to convert from your base currency in the designated field. The converter will automatically calculate the equivalent values in the selected currencies.</p>
                `,
        },
        {
            title: 'Are the exchange rates updated in real-time?',
            body: `
                <p>Yes, the exchange rates used by the WinProFX Currency Converter are updated in real-time to ensure accuracy.</p>
            `,
        },
        {
            title: 'Can I use the currency converter without a WinProFX account?',
            body: `
                <p>No, you need to have a registered WinProFX account to access and use the currency converter tool.</p>
            `,
        },
        {
            title: 'How often are the exchange rates updated?',
            body: `
                <p>The exchange rates are updated continuously in real-time to reflect the most current market conditions</p>
                `,
        },
    ]

    return (
        <>
            <SeoHead
                title="Currency Converter | WinproFX"
                description="Convert currencies quickly with WinproFX's accurate, real-time currency converter. Effortlessly calculate exchange rates for all currencies. Click to use now!"
                keywords="Currency Converter, Forex Converter, Exchange Rate Calculator, Real-time Currency, WinproFX Converter"
                canonicalPath="/currency-converter"
            />
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
                meta="Converter"
                title="Currency Converter"
                des="Calculate live exchange rates and convert all major and exotic currency pairs effortlessly with our user-friendly currency converter."
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
                        <h3 className='h2 mb-3 md:mb-4'>{card_info.title}</h3>
                        <div className="flex flex-col gap-y-5 mb-6 md:mb-8">
                            <p>{card_info.des}</p>
                            <div className="flex flex-col gap-y-4">
                                {card_info.list.map((item, i) => (
                                    <div className="text-para flex items-start gap-x-2.5" key={i}>
                                        <svg className='flex-none translate-y-0.75' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.16594 1.63338C7.62594 1.24005 8.37927 1.24005 8.84594 1.63338L9.89927 2.54005C10.0993 2.71338 10.4726 2.85338 10.7393 2.85338H11.8726C12.5793 2.85338 13.1593 3.43338 13.1593 4.14005V5.27338C13.1593 5.53338 13.2993 5.91338 13.4726 6.11338L14.3793 7.16671C14.7726 7.62671 14.7726 8.38004 14.3793 8.84671L13.4726 9.90004C13.2993 10.1 13.1593 10.4734 13.1593 10.74V11.8734C13.1593 12.58 12.5793 13.16 11.8726 13.16H10.7393C10.4793 13.16 10.0993 13.3 9.89927 13.4734L8.84594 14.38C8.38594 14.7734 7.6326 14.7734 7.16594 14.38L6.1126 13.4734C5.9126 13.3 5.53927 13.16 5.2726 13.16H4.11927C3.4126 13.16 2.8326 12.58 2.8326 11.8734V10.7334C2.8326 10.4734 2.6926 10.1 2.52594 9.90004L1.62594 8.84004C1.23927 8.38004 1.23927 7.63338 1.62594 7.17338L2.52594 6.11338C2.6926 5.91338 2.8326 5.54004 2.8326 5.28005V4.13338C2.8326 3.42671 3.4126 2.84671 4.11927 2.84671H5.2726C5.5326 2.84671 5.9126 2.70671 6.1126 2.53338L7.16594 1.63338Z" fill="#00D9FF" />
                                            <path d="M7.1937 10.1134C7.06036 10.1134 6.9337 10.06 6.84036 9.96669L5.22703 8.35335C5.0337 8.16002 5.0337 7.84002 5.22703 7.64669C5.42036 7.45335 5.74036 7.45335 5.9337 7.64669L7.1937 8.90669L10.0604 6.04002C10.2537 5.84669 10.5737 5.84669 10.767 6.04002C10.9604 6.23335 10.9604 6.55335 10.767 6.74669L7.54703 9.96669C7.4537 10.06 7.32703 10.1134 7.1937 10.1134Z" fill="#0D0F12" />
                                        </svg>
                                        <span>{item.name}</span>
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
                    <CommonTitle
                        className="text-center"
                        title="Frequently Asked Questions"
                    />
                    <Accordion
                        items={item}
                        activeItem={0}
                        desClass={
                            "[&>ul>li]:items-start [&>ul>li>svg]:translate-y-1 [&>ul>li>span]:text-para [&>ul>li>span>span]:text-white"
                        }
                    />
                </div>
            </div>
        </>
    );
}
