import React from 'react'
import CommonTitle from '@/components/common-title'
import { Container } from '@/components/grid'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import Button from '@/components/button'
import { useTranslation } from 'react-i18next'

import icon_1 from '@/assets/img/home/starts-trading/1.svg'
import icon_2 from '@/assets/img/home/starts-trading/2.svg'
import icon_3 from '@/assets/img/home/starts-trading/3.svg'

const stepIcons = [icon_1, icon_2, icon_3]
const stepKeys = ['openAccount', 'makeDeposit', 'startTrading']

const countSvgs = [
    <svg key="1" width="66" height="52" viewBox="0 0 66 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.8652 0.5C26.9999 0.500073 32.1014 2.4276 35.6709 5.95703C39.2412 9.48732 41.2295 14.5724 41.2295 20.792V31.2773C41.2295 37.4972 39.241 42.566 35.6699 46.0791C32.1 49.591 26.9985 51.4999 20.8652 51.5C14.7317 51.5 9.62956 49.5911 6.05957 46.0791C2.48845 42.566 0.5 37.4972 0.5 31.2773V20.792C0.5 14.5724 2.48842 9.48731 6.05859 5.95703C9.62812 2.42754 14.7304 0.5 20.8652 0.5ZM65.5 1.19434V50.8057H51.2568V19.417H45.2627V8.13965L45.6875 8.0752L49.7998 7.4502L49.8027 7.44922C51.6638 7.17952 52.9497 6.66706 53.9297 5.77734C54.9164 4.88148 55.6492 3.55391 56.2998 1.54102L56.4111 1.19434H65.5ZM20.8652 13.8613C18.7399 13.8613 17.2421 14.5018 16.2637 15.6621C15.272 16.8383 14.7432 18.6303 14.7432 21.0693V30.9307C14.7432 33.3697 15.272 35.1617 16.2637 36.3379C17.2421 37.4982 18.7399 38.1387 20.8652 38.1387C22.9903 38.1386 24.4874 37.4981 25.4658 36.3379C26.4575 35.1617 26.9863 33.3697 26.9863 30.9307V21.0693C26.9863 18.6303 26.4575 16.8383 25.4658 15.6621C24.4874 14.5019 22.9903 13.8614 20.8652 13.8613Z" stroke="url(#paint0_linear_1_65106)" />
        <defs>
            <linearGradient id="paint0_linear_1_65106" x1="33" y1="1" x2="33" y2="47.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00D9FF" stopOpacity="0.16" />
                <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>,
    <svg key="2" width="84" height="52" viewBox="0 0 84 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.7686 0.5C26.8745 0.500079 31.9524 2.42818 35.5049 5.95801C39.0578 9.48843 41.0361 14.5732 41.0361 20.792V31.2773C41.0361 37.4965 39.0578 42.5648 35.5039 46.0781C31.951 49.5905 26.8732 51.4999 20.7686 51.5C14.6637 51.5 9.58525 49.5906 6.03223 46.0781C2.47839 42.5648 0.5 37.4964 0.5 31.2773V20.792C0.5 14.573 2.47913 9.48845 6.03223 5.95801C9.58478 2.42818 14.6625 0.5 20.7686 0.5ZM64.6885 0.5C70.0508 0.500009 74.6991 2.01876 78.0156 4.80078C81.3407 7.59002 83.292 11.6214 83.292 16.5557C83.292 22.8745 79.9804 28.2866 73.5146 33.001L67.127 37.6523H83.5V50.8057H46.3623V42.248L46.5127 42.1006L65.7959 23.2812L65.7969 23.2803C67.9564 21.1857 68.8359 19.2926 68.8359 17.3887C68.8359 15.9529 68.3305 14.8958 67.5459 14.1934C66.7536 13.484 65.6319 13.0977 64.3418 13.0977C62.4602 13.0977 61.0362 13.8994 60.1699 15.3838C59.2873 16.8964 58.9493 19.1794 59.4248 22.1719L59.5107 22.708L58.9688 22.749L46.8994 23.6514L46.4404 23.6855L46.3682 23.2314C45.277 16.3594 46.5883 10.6652 49.8486 6.68164C53.1112 2.69549 58.2619 0.5 64.6885 0.5ZM20.7686 13.8613C18.6547 13.8613 17.1648 14.502 16.1914 15.6621C15.2048 16.8384 14.6787 18.6302 14.6787 21.0693V30.9307C14.6787 33.3698 15.2048 35.1616 16.1914 36.3379C17.1648 37.498 18.6547 38.1387 20.7686 38.1387C22.8822 38.1386 24.3714 37.498 25.3447 36.3379C26.3314 35.1616 26.8574 33.3699 26.8574 30.9307V21.0693C26.8574 18.6301 26.3314 16.8384 25.3447 15.6621C24.3714 14.502 22.8822 13.8614 20.7686 13.8613Z" stroke="url(#paint0_linear_1_65114)" />
        <defs>
            <linearGradient id="paint0_linear_1_65114" x1="42" y1="1" x2="42" y2="47.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00D9FF" stopOpacity="0.16" />
                <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>,
    <svg key="3" width="85" height="52" viewBox="0 0 85 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.9414 0.5C27.0989 0.5 32.2197 2.42701 35.8027 5.95605C39.3868 9.48623 41.3838 14.5717 41.3838 20.792V31.2773C41.3838 37.4978 39.3866 42.5661 35.8018 46.0791C32.2183 49.5908 27.0977 51.5 20.9414 51.5C14.7853 51.4999 9.66543 49.5907 6.08203 46.0791C2.49722 42.5661 0.5 37.4978 0.5 31.2773V20.792C0.5 14.5717 2.49703 9.48623 6.08105 5.95605C9.66398 2.42715 14.7842 0.500078 20.9414 0.5ZM65.5273 0.5C71.0565 0.5 75.582 1.80122 78.7383 4.18652C81.9094 6.58313 83.6601 10.0476 83.6602 14.2637C83.6602 19.3238 81.2804 23.4317 76.876 25.1582C81.6541 26.9239 84.5 31.1291 84.5 36.6943C84.5 41.1588 82.5702 44.8802 79.1963 47.4727C75.8337 50.0563 71.0647 51.5 65.3877 51.5C59.2093 51.5 54.062 49.7375 50.5391 46.6445C47.0066 43.5432 45.1465 39.1361 45.5068 33.9512L45.5391 33.4863H58.4707V33.9863C58.4708 36.8402 60.9769 39.1807 64.6182 39.1807C66.1422 39.1806 67.4264 38.7693 68.3174 38.0791C69.1982 37.3966 69.7158 36.4284 69.7158 35.2363C69.7158 34.1032 69.2604 33.1931 68.418 32.5527C67.5605 31.901 66.2613 31.5 64.5479 31.5H60.6895V19.5977H64.8281C66.3225 19.5976 67.4239 19.2177 68.1416 18.6328C68.8495 18.0559 69.2256 17.2466 69.2256 16.2773C69.2255 15.2222 68.7765 14.3771 68.0039 13.7832C67.2197 13.1805 66.0754 12.8193 64.6875 12.8193C63.0085 12.8194 61.6302 13.3413 60.6514 14.2344C59.6742 15.1262 59.058 16.4223 58.96 18.0439L58.9316 18.5137H46.2188L46.2051 18.0273C46.0619 12.6267 47.8378 8.22412 51.2158 5.17773C54.5858 2.13884 59.4937 0.500048 65.5273 0.5ZM20.9414 13.8613C18.8068 13.8614 17.3028 14.5023 16.3203 15.6631C15.3248 16.8393 14.7949 18.6307 14.7949 21.0693V30.9307C14.7949 33.3693 15.3248 35.1607 16.3203 36.3369C17.3028 37.4977 18.8068 38.1386 20.9414 38.1387C23.0762 38.1387 24.581 37.4978 25.5635 36.3369C26.5589 35.1607 27.0889 33.3692 27.0889 30.9307V21.0693C27.0889 18.6308 26.5589 16.8393 25.5635 15.6631C24.581 14.5022 23.0762 13.8613 20.9414 13.8613Z" stroke="url(#paint0_linear_1_65123)" />
        <defs>
            <linearGradient id="paint0_linear_1_65123" x1="42.5" y1="1" x2="42.5" y2="47.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00D9FF" stopOpacity="0.16" />
                <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>,
]

export default function TradingStarts() {
    const { t } = useTranslation('homepage')

    return (
        <div className='common-padding'>
            <Container>
                <CommonTitle
                    className="max-w-150 text-start"
                    title={t('tradingStarts.title')}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 md:mb-12 lg:mb-16">
                    {stepKeys.map((key, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.${idx * 2}` }}
                            viewport={{ once: once, amount: 0.2 }}
                            style={{ animationDelay: `${idx * -1}s` }}
                            className="card-glow rounded-2xl p-px bg-linear-0 to-white/20 from-white/0 overflow-hidden shadow-0 hover:shadow-2xl shadow-primary/20" key={key}>
                            <div className="rounded-2xl p-4 md:p-5 lg:p-6 bg-linear-0 to-[#121418] from-[#030509]">
                                <div className="flex items-center justify-between mb-16">
                                    <img src={stepIcons[idx]} className='shadow-[0_4px_4px_0_rgba(0,217,255,0.25)_inset,-42px_103px_31px_0_rgba(0,217,255,0.00), -27px 66px 29px 0 rgba(0, 217, 255, 0.01), -15px 37px 24px 0 rgba(0, 217, 255, 0.03), -7px 17px 18px 0 rgba(0, 217, 255, 0.04), -2px 4px 10px 0 rgba(0, 217, 255, 0.05)]' alt="" />
                                    {countSvgs[idx]}
                                </div>
                                <h5 className='text-xl leading-tight font-bold text-white mb-2 md:mb-3'>{t(`tradingStarts.steps.${key}.title`)}</h5>
                                <p className='text-base leading-normal text-para'>{t(`tradingStarts.steps.${key}.description`)}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <Button delay="0.4" />
                </div>
            </Container>
        </div>
    )
}
