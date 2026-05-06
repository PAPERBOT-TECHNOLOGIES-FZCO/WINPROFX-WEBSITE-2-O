import React from 'react'
import { duration, once } from '@/utilities/animation'
import { Container } from '@/components/grid';
import { motion } from 'framer-motion';
import why_bg from '@/assets/img/economic-calender/why-bg.png';

export default function WhyFx() {
    return (
        <Container>
            <motion.div
                initial={{ opacity: 0, scale: .8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: duration, delay: `0.1` }}
                viewport={{ once: once, amount: 0.2 }}
                className="max-w-285 mx-auto relative z-1 border border-solid border-white/8 rounded-2xl backdrop-blur-2xl overflow-hidden p-6 md:p-8 lg:p-10 min-h-60 md:min-h-85 lg:min-h-100 xl:min-h-118">
                <svg className="absolute left-0 top-1/2 -translate-y-1/2 -z-10" width="384" height="472" viewBox="0 0 384 472" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_6137_91770)">
                        <g filter="url(#filter1_f_6137_91770)">
                            <path d="M-217.223 177.902C-168.839 84.6413 -49.73 44.0757 48.8112 87.2986C147.352 130.521 188.012 241.163 139.627 334.425C91.2416 427.687 41.522 325.697 -57.0191 282.475C-155.56 239.254 -265.608 271.164 -217.223 177.902Z" fill="url(#paint0_radial_6137_91770)" />
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_f_6137_91770" x="-452.61" y="-153.61" width="836.24" height="749.728" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="111.805" result="effect1_foregroundBlur_6137_91770" />
                        </filter>
                        <filter id="filter1_f_6137_91770" x="-323" y="-24" width="577.02" height="490.508" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="47" result="effect1_foregroundBlur_6137_91770" />
                        </filter>
                        <radialGradient id="paint0_radial_6137_91770" cx="0" cy="0" r="1" gradientTransform="matrix(-111.786 170.59 -277.91 -153.965 -8.00966 196.822)" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00D9FF" />
                            <stop offset="1" stop-color="#00D9FF" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                </svg>

                <svg className="absolute top-0 right-0 -z-10" width="574" height="425" viewBox="0 0 574 425" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_6137_91768)">
                        <g filter="url(#filter1_f_6137_91768)">
                            <path d="M235.387 5.95422C283.771 -87.3067 402.879 -127.872 501.421 -84.6494C599.962 -41.4266 640.622 69.2155 592.236 162.477C543.851 255.739 494.131 153.749 395.59 110.527C297.049 67.3055 187.001 99.2161 235.387 5.95422Z" fill="url(#paint0_radial_6137_91768)" />
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_f_6137_91768" x="-0.00062561" y="-325.558" width="836.24" height="749.728" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="111.805" result="effect1_foregroundBlur_6137_91768" />
                        </filter>
                        <filter id="filter1_f_6137_91768" x="129.609" y="-195.948" width="577.02" height="490.508" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="47" result="effect1_foregroundBlur_6137_91768" />
                        </filter>
                        <radialGradient id="paint0_radial_6137_91768" cx="0" cy="0" r="1" gradientTransform="matrix(-111.786 170.59 -277.91 -153.965 444.6 24.8742)" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00D9FF" />
                            <stop offset="1" stop-color="#00D9FF" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <img src={why_bg} className="absolute bottom-0 left-0 -z-20 w-full h-auto" />
                <div className="mx-auto max-w-130 text-center">
                    <h3 className="h2 mb-3">Why WinproFX?</h3>
                    <p className="text-para2 text-xs md:text-sm lg:text-base">WinproFX offers advanced trading tools, real-time market updates, and a user-friendly platform to help traders make informed decisions and optimize their trading strategies.</p>
                </div>

            </motion.div>
        </Container>
    )
}
