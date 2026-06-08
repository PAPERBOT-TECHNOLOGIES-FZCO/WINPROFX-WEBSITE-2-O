import React from 'react'
import Button from '@/components/button';
import { Container } from '@/components/grid';
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import MetaText from '@/components/meta-text'
import { useTranslation } from 'react-i18next'

import video from '@/assets/img/home/about-video.webm'

export default function About() {
    const { t } = useTranslation('homepage')

    const featureKeys = ['platform', 'orderManagement', 'indicators', 'customize']

    return (
        <div className='common-padding pt-0'>
            <Container>
                <div style={{
                    background: "linear-gradient(112deg, rgba(0, 217, 255, 0.10) 0%, rgba(0, 217, 255, 0.00) 35.49%), rgba(255, 255, 255, 0.03)"
                }}
                    className="p-4 bg-white/5 border border-white/8 gap-y-7 md:gap-y-10 border-solid rounded-2xl flex justify-between flex-wrap relative z-1 overflow-hidden">
                    <svg className='absolute top-0 right-0' width="574" height="420" viewBox="0 0 574 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_6143_115592)">
                            <g filter="url(#filter1_f_6143_115592)">
                                <path d="M234.209 5.61615C277.755 -85.6689 384.953 -125.375 473.64 -83.0679C562.327 -40.7608 598.921 67.5371 555.374 158.823C511.827 250.109 467.08 150.28 378.393 107.974C289.706 65.6676 190.663 96.9022 234.209 5.61615Z" fill="url(#paint0_radial_6143_115592)" />
                            </g>
                        </g>
                        <g filter="url(#filter2_f_6143_115592)">
                            <path d="M490.147 -26.6687C540.889 -7.70818 578.07 21.3025 573.193 38.1283C568.315 54.9542 523.228 53.2238 472.486 34.2632C421.744 15.3027 384.564 -13.708 389.441 -30.5338C394.318 -47.3597 439.406 -45.6293 490.147 -26.6687Z" fill="#00D9FF" />
                        </g>
                        <defs>
                            <filter id="filter0_f_6143_115592" x="-1.52588e-05" y="-323.61" width="797.338" height="743.319" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="111.805" result="effect1_foregroundBlur_6143_115592" />
                            </filter>
                            <filter id="filter1_f_6143_115592" x="129.61" y="-194" width="538.118" height="484.099" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="47" result="effect1_foregroundBlur_6143_115592" />
                            </filter>
                            <filter id="filter2_f_6143_115592" x="289.011" y="-142.103" width="384.612" height="291.801" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_6143_115592" />
                            </filter>
                            <radialGradient id="paint0_radial_6143_115592" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(422.501 24.1352) rotate(121.07) scale(194.943 292.012)">
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
                        className="p-1 lg:p-4 xl:p-6 flex flex-col max-w-full lg:max-w-125 xl:max-w-175 lg:min-h-118">
                        <div className="mb-auto">
                            <MetaText title={t('about.meta')} className="mb-4 md:mb-5 lg:mb-6" />
                            <h5
                                className='text-xl md:text-2xl lg:text-[28px] leading-tight font-normal text-para/60'
                                dangerouslySetInnerHTML={{ __html: t('about.heading') }}
                            />
                        </div>
                        <div className="flex flex-col gap-y-5 lg:gap-y-6 mt-6">
                            <div className="flex flex-col gap-y-4">
                                {featureKeys.map((key) => (
                                    <p className="flex items-start gap-x-2.5" key={key}>
                                        <svg className='flex-none translate-y-0.75' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.16667 1.63338C7.62667 1.24005 8.38 1.24005 8.84667 1.63338L9.9 2.54005C10.1 2.71338 10.4733 2.85338 10.74 2.85338H11.8733C12.58 2.85338 13.16 3.43338 13.16 4.14005V5.27338C13.16 5.53338 13.3 5.91338 13.4733 6.11338L14.38 7.16671C14.7733 7.62671 14.7733 8.38005 14.38 8.84671L13.4733 9.90004C13.3 10.1 13.16 10.4734 13.16 10.74V11.8734C13.16 12.58 12.58 13.16 11.8733 13.16H10.74C10.48 13.16 10.1 13.3 9.9 13.4734L8.84667 14.38C8.38667 14.7734 7.63334 14.7734 7.16667 14.38L6.11334 13.4734C5.91334 13.3 5.54 13.16 5.27334 13.16H4.12C3.41334 13.16 2.83334 12.58 2.83334 11.8734V10.7334C2.83334 10.4734 2.69334 10.1 2.52667 9.90004L1.62667 8.84004C1.24 8.38004 1.24 7.63338 1.62667 7.17338L2.52667 6.11338C2.69334 5.91338 2.83334 5.54004 2.83334 5.28004V4.13338C2.83334 3.42671 3.41334 2.84671 4.12 2.84671H5.27334C5.53334 2.84671 5.91334 2.70671 6.11334 2.53338L7.16667 1.63338Z" fill="#00D9FF" />
                                            <path d="M7.19333 10.1134C7.06 10.1134 6.93333 10.06 6.84 9.96669L5.22667 8.35335C5.03333 8.16002 5.03333 7.84002 5.22667 7.64669C5.42 7.45335 5.74 7.45335 5.93333 7.64669L7.19333 8.90669L10.06 6.04002C10.2533 5.84669 10.5733 5.84669 10.7667 6.04002C10.96 6.23335 10.96 6.55335 10.7667 6.74669L7.54666 9.96669C7.45333 10.06 7.32666 10.1134 7.19333 10.1134Z" fill="#0D0F12" />
                                        </svg> {t(`about.features.${key}`)}
                                    </p>
                                ))}
                            </div>
                            <Button animation={false} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: y }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: duration, delay: 0.4 }}
                        viewport={{ once: once, amount: 0.2 }}
                        className="w-full md:w-max lg:max-w-100 xl:max-w-118 rounded-2xl bg-white/5 overflow-hidden aspect-square md:h-100 my-auto xl:my-0 xl:h-auto">
                        <video src={video} muted playsInline autoPlay loop controls={false} className='object-cover size-full'></video>
                    </motion.div>
                </div>
            </Container>
        </div>
    )
}
