import { Container } from '@/components/grid';
import CommonBanner from '@/components/common-banner';
import TopShape from '@/components/top-shape';
import Dropdown from '@/components/ui/dropdown';
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import Accordion from "@/components/accordion";
import CommonTitle from "@/components/common-title";
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import { useTranslation } from 'react-i18next'

import banner_bg from '@/assets/img/economic-calender/bg.png';
import amount_img_1 from '@/assets/img/economic-calender/amount-bag-1.png';
import amount_img_2 from '@/assets/img/economic-calender/amount-bag-2.png';
import WhyFx from '../../components/currency/why-fx';


export default function EconomicCalendar() {
    const seo = useSeo('economicCalendar')
    const { t } = useTranslation('tools')
    const ec = (key, opts) => t(`economicCalendar.${key}`, opts)

    const table_data = Array.from({ length: 8 }, () => ({
        time: '08:30',
        symbol: 'USD',
        event: ec('sampleEvent'),
        impact: ec('impactHigh'),
        actual: '150K',
        forecast: '200K',
        previous: '180K',
    }))

    const faqKeys = ['whatIs', 'howToUse', 'eventTypes', 'impact', 'whereFind', 'notifications', 'importance', 'updated']
    const faqItems = faqKeys.map((key) => ({
        title: ec(`faqs.${key}.title`),
        body: ec(`faqs.${key}.body`),
    }))

    return (
        <>
            <SeoHead
        {...seo}
        canonicalPath="/economic-calendar"
      />
            <div className="padding-top-245 overflow-hidden min-h-140 md:min-h-180 lg:min-h-190 xl:min-h-230 2xl:min-h-283 3xl:min-h-screen bg-black relative z-1">
                <TopShape />
                <img className="absolute bottom-0 left-0 w-full h-auto object-cover -z-10 pointer-events-none" src={banner_bg} alt="" />
                <Container>
                    <div className="max-w-160 mx-auto text-center flex flex-col gap-y-2.5 md:gap-y-4 lg:gap-y-6 lg:mb-6 xl:mb-21">
                        <motion.h1
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.1` }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="h1 w-max mx-auto">{ec('h1')}</motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.2` }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="text-para2 max-w-108 mx-auto">{ec('heroDescription')}</motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: y }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: duration, delay: 0.3 }}
                        viewport={{ once: once, amount: 0.2 }}
                        className="border border-solid border-[#CBCBE1]/12 p-4 md:p-6 lg:p-8 pb-0! translate-y-15 rounded-2xl bg-main-bg/9 backdrop-blur-[100px] bg-linear-180 to-[#1D1D1E]/0 from-[#133E5A]/0"                    >
                        <div className="pb-4 md:mb-5 lg:pb-6 flex flex-col gap-y-3">
                            <Dropdown
                                className="w-full max-w-75"
                                label={ec('symbolsLabel')}
                                labelClass="mb-1 text-sm"
                                items={[
                                    { value: 'USD', name: 'USD' },
                                    { value: 'EUR', name: 'EUR' },
                                    { value: 'GBP', name: 'GBP' }
                                ]}

                            />
                        </div>
                        <div className="overflow-x-auto ">
                            <table className="w-max min-w-full table">
                                <thead>
                                    <tr>
                                        <th>{ec('tableHeaders.time')}</th>
                                        <th>{ec('tableHeaders.symbol')}</th>
                                        <th>{ec('tableHeaders.event')}</th>
                                        <th>{ec('tableHeaders.impact')}</th>
                                        <th>{ec('tableHeaders.actual')}</th>
                                        <th>{ec('tableHeaders.forecast')}</th>
                                        <th>{ec('tableHeaders.previous')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table_data.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.time}</td>
                                            <td>
                                                <span className='inline-flex min-h-7.5 px-4 text-sm items-center justify-center rounded-full bg-white/6 border border-solid border-white/10'>{row.symbol}</span>
                                            </td>
                                            <td>{row.event}</td>
                                            <td>{row.impact}</td>
                                            <td>{row.actual}</td>
                                            <td>{row.forecast}</td>
                                            <td>{row.previous}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </Container>
            </div>

            <div className="common-padding">
                <Container>
                    <div className="max-w-285 mx-auto flex flex-wrap items-center gap-y-6 md:gap-y-8 xl:gap-12.5 w-full h-full">
                        <motion.div
                            initial={{ opacity: 0, x: -y - 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: duration, delay: `0.1` }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="w-full xl:w-146 flex flex-col gap-4 text-left">
                            <h3 className="h2 xl:max-w-105">{ec('sections.understanding.title')}</h3>
                            <p className="text-para2">{ec('sections.understanding.p1')}</p>
                            <p className="text-para2">{ec('sections.understanding.p2')}</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: y + 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: duration, delay: `0.1` }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="w-full xl:w-126.5 h-75 md:h-122.5">
                            <img className="w-full h-full rounded-3xl object-cover bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.12)]" src={amount_img_1} alt="" />
                        </motion.div>
                    </div>
                </Container>
            </div>

            <div className="">
                <Container>
                    <div className="max-w-285 mx-auto flex flex-wrap items-center flex-row-reverse gap-6 md:gap-12.5 w-full h-full">
                        <motion.div
                            initial={{ opacity: 0, x: y + 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: duration, delay: `0.1` }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="w-full xl:w-146  flex flex-col gap-4 text-left">
                            <h3 className="h2">{ec('sections.whyUse.title')}</h3>
                            <p className="text-para2">{ec('sections.whyUse.p1')}</p>
                            <p className="text-para2">{ec('sections.whyUse.p2')}</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -y - 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: duration, delay: `0.1` }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="w-full xl:w-126.5 h-75 md:h-122.5">
                            <img className="w-full h-full rounded-3xl object-cover bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.12)]" src={amount_img_2} alt="" />
                        </motion.div>
                    </div>
                </Container>
            </div>

            <div className="common-padding">
                <WhyFx />
            </div>

            <div className="common-padding pt-0">
                <div className="max-w-206 mx-auto px-3">
                    <CommonTitle
                        className="text-center"
                        title={ec('faqTitle')}
                        des={ec('faqSubtitle')}
                        desClass="max-w-160 mx-auto"
                    />
                    <Accordion
                        items={faqItems}
                        activeItem={0}
                    />
                </div>
            </div>
        </>
    )
}
