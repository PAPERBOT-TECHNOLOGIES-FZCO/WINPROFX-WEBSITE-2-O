import React from 'react'
import Button from '@/components/button';
import { Container } from '@/components/grid';
import CommonTitle from '@/components/common-title'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion'
import DemoCta from "@/components/demo-cta"
import PaymentFlow from '@/components/payment-flow';
import { useTranslation } from 'react-i18next'

import img_1 from '@/assets/img/home/news/1.png'
import img_2 from '@/assets/img/home/news/2.png'
import img_3 from '@/assets/img/home/news/3.png'
import img_4 from '@/assets/img/home/news/4.png'
import b_img_1 from '@/assets/img/home/news/b-1.png'
import b_img_2 from '@/assets/img/home/news/b-2.png'

const poweredByLogo = (
    <svg width="170" height="36" viewBox="0 0 170 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M43.3652 26.9814C45.9465 26.9814 47.6883 27.3787 47.6241 29.8916V35.5128H46.2692V34.6533C45.9465 35.447 45.4946 35.6452 43.3652 35.6452H40.0743C37.9448 35.6452 37.4287 34.7199 37.4287 33.1324V32.6035C37.4287 30.6861 38.7836 30.4213 41.1715 30.4213H43.3659C45.1727 30.4213 45.8181 30.6195 46.2699 31.4132V29.8258C46.2699 28.3049 45.3662 28.1066 43.2367 28.1066H39.3005V26.9822H43.3659L43.3652 26.9814ZM46.2684 33.2648L46.2042 32.9341C46.2042 31.7439 45.2362 31.6115 43.1067 31.6115H40.9773C39.2347 31.6115 38.7186 31.8763 38.7186 32.9341V33.199C38.7186 34.1251 39.0413 34.5216 40.9131 34.5216H42.7848C45.3019 34.5216 46.2699 34.3226 46.2699 33.2648H46.2684Z" fill="white" />
        <path d="M60.6607 27.1143V35.5132H59.37V34.0581C58.8539 35.3808 57.7567 35.6456 56.0791 35.6456H54.0139C51.4325 35.6456 50.5938 34.323 50.5938 32.8021V27.1151H51.9486V32.4714C51.9486 33.7283 52.2713 34.5212 54.9819 34.5212H55.3045C58.5312 34.5212 59.3058 33.9257 59.3058 31.9417V27.1801L60.6607 27.1143Z" fill="white" />
        <path d="M65.7591 28.3047V32.4708C65.7591 34.0583 66.2752 34.5206 67.8243 34.5206H71.1802V35.645H67.5667C64.9853 35.645 64.34 34.3224 64.34 32.9997V28.3047H62.5332V27.1803H64.34V25.1963H65.6949V27.1803H71.1802V28.3047C71.2444 28.3047 65.7591 28.3047 65.7591 28.3047Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M73.3096 30.4205C73.3096 27.6428 75.1814 26.9814 77.8269 26.9814H79.8271C82.4727 26.9814 84.3445 27.6428 84.3445 30.4205V32.2062C84.3445 34.9839 82.4727 35.6452 79.8271 35.6452H77.8269C75.1814 35.6452 73.3096 34.9839 73.3096 32.2062V30.4205ZM82.9246 30.4863C82.9246 28.5681 81.8274 28.1717 80.214 28.1717H77.3743C75.7609 28.1717 74.6637 28.5681 74.6637 30.4863V32.1396C74.6637 34.0577 75.7609 34.4542 77.3743 34.4542H80.214C81.8274 34.4542 82.9246 34.0577 82.9246 32.1396V30.4863Z" fill="white" />
        <path d="M96.7996 35.6444H90.0886C88.8621 35.6444 86.6685 35.3138 86.6685 32.272V30.3539C86.6685 27.3121 88.7979 26.9814 90.7989 26.9814H96.8654V28.1059H90.6055C89.3148 28.1059 88.0883 28.3041 88.0883 30.4205V32.2062C88.0883 34.1244 89.1856 34.5208 90.8631 34.5208H96.8646V35.6452H96.8004L96.7996 35.6444Z" fill="#10B981" />
        <path d="M99.3799 23.6084H100.735V28.5683C101.251 27.2457 102.348 26.9808 104.026 26.9808H106.026C108.607 26.9808 109.446 28.3035 109.446 29.8243V35.5114H108.091V30.155C108.091 28.8982 107.769 28.1052 105.058 28.1052H104.671C101.444 28.1052 100.67 28.7007 100.67 30.6847V35.4464H99.3149L99.3792 23.6092L99.3799 23.6084Z" fill="#10B981" />
        <path fillRule="evenodd" clipRule="evenodd" d="M113.965 26.9814H118.031C120.612 26.9814 122.355 27.3779 122.355 29.8916V35.5128H121V34.7191C120.613 35.5128 120.225 35.711 118.096 35.711H114.805C112.675 35.711 112.159 34.7849 112.159 33.1982V32.6693C112.159 30.7511 113.514 30.4871 115.902 30.4871H118.096C119.903 30.4871 120.549 30.6853 121 31.4791V29.8916C121 28.3707 120.097 28.1725 117.967 28.1725H114.031L113.967 26.9822L113.965 26.9814ZM120.935 32.8675C120.935 31.7431 119.902 31.5449 117.837 31.5449H115.708C113.901 31.5449 113.449 31.8097 113.449 32.8675V33.1324C113.449 34.0585 113.772 34.455 115.644 34.455H117.515C120.032 34.455 121 34.2568 121 33.1982L120.936 32.8675H120.935Z" fill="#10B981" />
        <path d="M132.292 28.1061H128.807C127.323 28.1061 126.678 29.0322 126.678 30.1558V35.5122H125.323V27.1133H126.613V28.3035C127.129 27.1791 128.162 26.915 129.13 26.915H132.357L132.293 28.1053L132.292 28.1061Z" fill="#10B981" />
        <path d="M142.424 35.645H138.81C136.229 35.645 135.584 34.3224 135.584 32.9997V28.3047H133.777V27.1803H135.584V25.1963H136.939V27.1803H142.424V28.3047H136.939V32.4708C136.939 34.0583 137.455 34.5206 139.004 34.5206H142.36L142.424 35.645Z" fill="#10B981" />
        <path d="M145.069 27.1142H146.424V35.5132H145.069V27.1142ZM145.069 23.6094H146.424V25.1303H145.069V23.6094Z" fill="#10B981" />
        <path d="M149.458 34.5202H155.524C157.589 34.5202 158.235 34.4544 158.235 33.1976V33.1318C158.235 32.338 157.976 31.875 156.363 31.875H152.104C150.168 31.875 149.458 31.2136 149.458 29.6261V29.0972C149.458 27.7088 150.233 27.1133 153.653 27.1133H157.784V28.2377H153.266C151.266 28.2377 150.878 28.3035 150.878 29.2955V29.6261C150.878 30.2875 151.137 30.7505 152.556 30.7505H156.234C158.3 30.7505 159.72 30.9488 159.72 33.1976C159.72 35.578 157.59 35.6446 155.912 35.6446H149.523L149.459 34.5202H149.458Z" fill="#10B981" />
        <path d="M169.979 35.645H166.365C163.784 35.645 163.139 34.3224 163.139 32.9997V28.3047H161.332V27.1803H163.139V25.1963H164.494V27.1803H169.979V28.3047H164.494V32.4708C164.494 34.0583 165.01 34.5206 166.559 34.5206H169.915L169.979 35.645Z" fill="#10B981" />
        <path d="M0 34.5865C0 35.3802 0.645335 35.9749 1.35489 35.9749H2.77478C3.54934 35.9749 4.19467 35.3136 4.19467 34.5865V31.743C4.19467 30.9492 3.54934 30.3545 2.77478 30.3545H1.41989C0.645335 30.3545 0.0649977 31.0158 0.0649977 31.743L0.000773782 34.5865H0Z" fill="#10B981" />
        <path d="M6.64685 34.5872C6.64685 35.3809 7.29219 35.9756 8.06674 35.9756H9.48663C10.2612 35.9756 10.8415 35.3143 10.8415 34.5872V23.1465C10.8415 22.3527 10.1962 21.6914 9.48663 21.6914H8.06674C7.29219 21.6914 6.64685 22.3527 6.64685 23.1465V34.5872Z" fill="#10B981" />
        <path d="M13.3585 24.7327C13.3585 25.5265 14.0039 26.1212 14.7134 26.1212H16.1333C16.9079 26.1212 17.4882 25.4599 17.4882 24.7327V18.0537C17.4882 17.26 16.8429 16.5986 16.1333 16.5986H14.7134C13.9389 16.5986 13.3585 17.26 13.3585 18.0537V24.7327Z" fill="#10B981" />
        <path d="M20.0054 22.551C20.0054 23.3448 20.6507 23.9395 21.3603 23.9395H22.7802C23.5547 23.9395 24.135 23.2782 24.135 22.551V11.1103C24.135 10.3166 23.4897 9.65527 22.7802 9.65527H21.3603C20.5857 9.65527 20.0054 10.3166 20.0054 11.1103V22.551Z" fill="#10B981" />
        <path d="M26.6523 17.7886C26.6523 18.5824 27.2977 19.1771 28.0072 19.1771H29.4271C30.2017 19.1771 30.782 18.5158 30.782 17.7886V14.9451C30.782 14.1514 30.1367 13.5566 29.4271 13.5566H28.0072C27.2327 13.5566 26.6523 14.218 26.6523 14.9451V17.7886Z" fill="#10B981" />
        <path d="M33.299 14.6148C33.299 15.4085 33.9443 16.0032 34.6538 16.0032H36.0737C36.8483 16.0032 37.4286 15.3419 37.4286 14.6148V7.86913C37.4286 7.07538 36.7833 6.41406 36.0737 6.41406H34.6538C33.8793 6.41406 33.299 7.07538 33.299 7.86913V14.6148Z" fill="#10B981" />
        <path d="M39.9458 17.3267C39.9458 18.1204 40.5911 18.7151 41.3657 18.7151H42.7856C43.5601 18.7151 44.2055 18.0538 44.2055 17.3267V10.581C44.2055 9.7873 43.5601 9.12598 42.7856 9.12598H41.3657C40.5911 9.12598 39.9458 9.7873 39.9458 10.581V17.3267Z" fill="#10B981" />
        <path d="M46.5925 14.2185C46.5925 15.0122 47.2379 15.607 48.0124 15.607H49.4323C50.2069 15.607 50.8522 14.9456 50.8522 14.2185V9.91991C50.8522 9.12617 50.2069 8.46484 49.4323 8.46484H48.0124C47.2379 8.46484 46.5925 9.12617 46.5925 9.91991V14.2185Z" fill="#10B981" />
        <path d="M53.2394 8.1341C53.2394 8.92784 53.8847 9.52256 54.6593 9.52256H56.0792C56.8537 9.52256 57.4991 8.86123 57.4991 8.06749V1.45507C57.4991 0.661322 56.8537 0 56.0792 0H54.6593C53.8847 0 53.2394 0.661322 53.2394 1.45507V8.1341Z" fill="#10B981" />
    </svg>
)

export default function News() {
    const { t } = useTranslation(['homepage', 'common'])

    const news_items = [
        { img: img_1, path: '' },
        { img: img_2, path: '' },
        { img: img_3, path: '' },
        { img: img_4, path: '' },
    ]

    const news_blog = [
        {
            key: 'tradeToWin',
            img: b_img_1,
            infoText: t('homepage:news.blog.tradeToWin.promotionDates'),
            infoLogo: null,
        },
        {
            key: 'technicalAnalysis',
            img: b_img_2,
            infoText: t('homepage:news.blog.technicalAnalysis.poweredBy'),
            infoLogo: poweredByLogo,
        },
    ]

    return (
        <div className='common-padding'>
            <Container>
                <CommonTitle
                    className="max-w-150"
                    title={t('homepage:news.title')}
                    des={t('homepage:news.description')}
                />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {news_items.map((item, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.${idx * 2}` }}
                            viewport={{ once: once, amount: 0.2 }}
                            key={idx}
                            className='h-full'
                        >
                            <div key={idx} className="group h-full relative z-1 rounded-2xl lg:rounded-3xl max-h-44 border-2 overflow-hidden border-solid border-white/8 bg-main-bg hover:border-primary shadow-none main-shadow block">
                                <img src={item.img} className='size-full object-cover' alt="" />
                                <div className="absolute size-full top-0 left-0 flex items-center justify-center bg-main-bg/37 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="size-14 md:size-16 lg:size-20 rounded-full bg-white/7 border border-solid border-white/32 backdrop-blur-md p-2">
                                        <a href={item.path} target='blank' className="size-full rounded-full bg-main-bg/15 backdrop-blur-md flex items-center justify-center">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 10.9998L21.2 2.7998" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M22 6.8V2H17.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="my-7 md:my-10 lg:my-13 xl:my-16">
                    <PaymentFlow />
                </div>

                <div className="grid gird-cols-1 md:grid-cols-2 gap-4 mb-4 md:mb-5 lg:mb-6">
                    {news_blog.map((item, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.${idx * 2}` }}
                            viewport={{ once: once, amount: 0.2 }}
                            key={item.key}
                            className='h-full p-px card-glow rounded-2xl'
                        >
                            <div className="rounded-2xl h-full relative z-1 border border-solid border-[#CBCBE1]/12 p-4 md:p-6 lg:p-8 pb-0! bg-main-bg bg-linear-0 to-[#007DFF]/0 to-50% from-primary bg-no-repeat bg-bottom-right">
                                <h4 className='text-2xl md:text-3xl lg:text-[38px] leading-tight mb-3 line-clamp-1'>{t(`homepage:news.blog.${item.key}.title`)}</h4>
                                <p className={`text-para leading-relaxed mb-4 md:mb-5 lg:mb-6 max-w-125 line-clamp-2`}>{t(`homepage:news.blog.${item.key}.description`)}</p>
                                <Button text={t('homepage:news.blog.learnMore')} href="/" className="mb-6 md:mb-8 lg:mb-10" animation={false} />
                                <div className="max-h-100 overflow-hidden">
                                    <img src={item.img} className='max-h-full' alt={t(`homepage:news.blog.${item.key}.title`)} />
                                </div>
                                <div
                                    style={{ mask: 'linear-gradient(#02020200, #020202, #020202)' }}
                                    className="absolute z-1 rounded-b-xl flex flex-col items-center justify-end bottom-0 left-0 w-full h-50 bg-linear-0 to-[#020202]/0 from-[#020202] text-center p-4 md:p-5 lg:p-6 backdrop-blur-[10px]">
                                    <p className="leading-relaxed max-w-66 mx-auto">{item.infoText}</p>
                                    {item.infoLogo &&
                                        <span className="mt-4 block">
                                            {item.infoLogo}
                                        </span>
                                    }
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <DemoCta />
            </Container>
        </div>
    )
}
