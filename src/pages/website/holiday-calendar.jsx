import { Container } from '@/components/grid';
import TopShape from '@/components/top-shape';
import Accordion from "@/components/accordion";
import CommonTitle from "@/components/common-title";
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import { useTranslation } from 'react-i18next'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import WhyFx from '../../components/currency/why-fx';

import banner_bg from '@/assets/img/economic-calender/bg.png';

// WINPROFX Trading Schedule — Holiday Notice (all times GMT+3)
// Source: WINPRO Prime Holiday Notice Sep 2026
const HOLIDAYS = [
    // 07 Sep 2026 — Monday
    { date: '07 Sep 2026',  day: 'Monday',    market: 'Metals',                       event: 'Market Holiday',  impact: 'Early Close @ 21:30' },
    { date: '07 Sep 2026',  day: 'Monday',    market: 'OIL / Energies (BRNUSD)',      event: 'Market Holiday',  impact: 'Early Close @ 20:30' },
    { date: '07 Sep 2026',  day: 'Monday',    market: 'OIL / Energies (WTIUSD)',      event: 'Market Holiday',  impact: 'Early Close @ 21:30' },
    { date: '07 Sep 2026',  day: 'Monday',    market: 'OIL / Energies (XNGUSD)',      event: 'Market Holiday',  impact: 'Early Close @ 21:30' },
    { date: '07 Sep 2026',  day: 'Monday',    market: 'Indices – GERMAN',             event: 'Market Holiday',  impact: 'Early Close @ 23:00' },
    { date: '07 Sep 2026',  day: 'Monday',    market: 'Indices – JP225Roll',          event: 'Market Holiday',  impact: 'Early Close @ 20:00' },
    { date: '07 Sep 2026',  day: 'Monday',    market: 'Indices – UK100c',             event: 'Market Holiday',  impact: 'Early Close @ 23:00' },
    { date: '07 Sep 2026',  day: 'Monday',    market: 'Indices – US30c',              event: 'Market Holiday',  impact: 'Early Close @ 20:00' },
    { date: '07 Sep 2026',  day: 'Monday',    market: 'Indices – US500c',             event: 'Market Holiday',  impact: 'Early Close @ 20:00' },
    { date: '07 Sep 2026',  day: 'Monday',    market: 'Indices – USNDX',              event: 'Market Holiday',  impact: 'Early Close @ 20:00' },
    { date: '07 Sep 2026',  day: 'Monday',    market: 'US Shares – NYSE',             event: 'Market Holiday',  impact: 'Closed' },
    { date: '07 Sep 2026',  day: 'Monday',    market: 'US Shares – NDAQ',             event: 'Market Holiday',  impact: 'Closed' },
    { date: '07 Sep 2026',  day: 'Monday',    market: 'Futures GOLDN2026',            event: 'Market Holiday',  impact: 'Early Close @ 21:30' },
    // 30 Sep 2026 — Wednesday (normal schedule — no changes)
    { date: '30 Sep 2026',  day: 'Wednesday', market: 'All Instruments',              event: 'No Changes',      impact: 'Normal Schedule' },
]

const impactColor = (impact) => {
    if (impact === 'Closed') return 'bg-red-500/15 text-red-400 border-red-500/20'
    if (impact === 'Normal Schedule') return 'bg-green-500/15 text-green-400 border-green-500/20'
    if (impact.startsWith('Early Close')) return 'bg-amber-500/15 text-amber-400 border-amber-500/20'
    return 'bg-white/8 text-white/50 border-white/10'
}

const faqKeys = ['whatIs', 'howAffects', 'allClosed', 'earlyClose', 'updated', 'timezones']

export default function HolidayCalendar() {
    const seo = useSeo('holidayCalendar')
    const { t } = useTranslation('tools')
    const hc = (key, opts) => t(`holidayCalendar.${key}`, opts)

    const [filterMarket, setFilterMarket] = useState('all')

    const marketOptions = useMemo(() => {
        const cats = ['All Markets', 'Metals', 'OIL / Energies', 'Indices', 'US Shares', 'Futures']
        return [{ value: 'all', name: 'All Markets' }, ...cats.slice(1).map(c => ({ value: c, name: c }))]
    }, [])

    const filtered = useMemo(() => HOLIDAYS.filter(row => {
        if (filterMarket !== 'all' && !row.market.includes(filterMarket)) return false
        return true
    }), [filterMarket])

    const faqItems = faqKeys.map((key) => ({
        title: hc(`faqs.${key}.title`),
        body: hc(`faqs.${key}.body`),
    }))

    return (
        <>
            <SeoHead
                {...seo}
                canonicalPath="/holiday-calendar"
                pageName={hc('h1')}
            />

            {/* Hero */}
            <div className="padding-top-245 overflow-visible min-h-fit pb-32 bg-black relative z-1">
                <TopShape />
                <img className="absolute bottom-0 left-0 w-full h-auto object-cover -z-10 pointer-events-none" src={banner_bg} alt="" />
                <Container>
                    <div className="max-w-160 mx-auto text-center flex flex-col gap-y-2.5 md:gap-y-4 lg:gap-y-6 lg:mb-6 xl:mb-21">
                        <motion.h1
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: 0.1 }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="h1 w-max mx-auto"
                        >{hc('h1')}</motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: 0.2 }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="text-para2 max-w-108 mx-auto"
                        >{hc('heroDescription')}</motion.p>
                    </div>

                    {/* Calendar table */}
                    <motion.div
                        initial={{ opacity: 0, y: y }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: duration, delay: 0.3 }}
                        viewport={{ once: once, amount: 0.2 }}
                        className="border border-solid border-[#CBCBE1]/12 p-4 md:p-6 lg:p-8 pb-8! md:pb-10! translate-y-15 rounded-2xl bg-main-bg/9 backdrop-blur-[100px] bg-linear-180 to-[#1D1D1E]/0 from-[#133E5A]/0"
                    >
                        {/* Filters */}
                        <div className="pb-4 md:pb-5 lg:pb-6 flex flex-col gap-y-3">
                            <div className="flex flex-wrap items-end gap-3">
                                <div className="flex flex-col gap-y-2 w-full max-w-75">
                                    <label className="block font-normal uppercase text-white leading-normal text-sm">Market</label>
                                    <div className="relative">
                                        <select
                                            value={filterMarket}
                                            onChange={e => setFilterMarket(e.target.value)}
                                            className="w-full px-4 pr-10 border border-solid border-white/24 rounded-full font-medium text-sm bg-[#05060A] text-white min-h-13 appearance-none cursor-pointer outline-none"
                                        >
                                            {marketOptions.map(opt => (
                                                <option key={opt.value} value={opt.value}>{opt.name}</option>
                                            ))}
                                        </select>
                                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/50">
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                                        </span>
                                    </div>
                                </div>
                                {filterMarket !== 'all' && (
                                    <button
                                        onClick={() => setFilterMarket('all')}
                                        className="text-xs text-white/40 hover:text-white/80 underline underline-offset-2 transition-colors cursor-pointer pb-2"
                                    >
                                        Clear filter
                                    </button>
                                )}
                            </div>
                            <span className="ml-auto text-xs text-white/40 italic">All times GMT+3</span>
                        </div>

                        {/* Table — desktop */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-max min-w-full table">
                                <thead>
                                    <tr>
                                        <th>{hc('tableHeaders.date')}</th>
                                        <th>Day</th>
                                        <th>{hc('tableHeaders.market')}</th>
                                        <th>{hc('tableHeaders.event')}</th>
                                        <th>{hc('tableHeaders.impact')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filtered.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="text-center text-white/30 py-10">No results match the selected filters.</td>
                                        </tr>
                                    ) : filtered.map((row, idx) => (
                                        <tr key={idx}>
                                            <td className="font-medium text-white/90 whitespace-nowrap">{row.date}</td>
                                            <td className="text-white/50 whitespace-nowrap">{row.day}</td>
                                            <td>
                                                <span className="inline-flex min-h-7.5 px-4 text-sm items-center justify-center rounded-full bg-white/6 border border-solid border-white/10 whitespace-nowrap">
                                                    {row.market}
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap">{row.event}</td>
                                            <td>
                                                <span className={`inline-flex px-3 py-1 rounded-full border text-xs font-medium whitespace-nowrap ${impactColor(row.impact)}`}>
                                                    {row.impact}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Cards — mobile */}
                        <div className="flex md:hidden flex-col gap-3">
                            {filtered.length === 0 ? (
                                <p className="text-center text-white/30 py-10">No results match the selected filters.</p>
                            ) : filtered.map((row, idx) => (
                                <div key={idx} className="rounded-xl border border-white/8 bg-white/3 p-4 flex flex-col gap-2">
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="text-white font-semibold text-sm">{row.date}</span>
                                        <span className={`inline-flex px-2.5 py-1 rounded-full border text-xs font-medium ${impactColor(row.impact)}`}>
                                            {row.impact}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="inline-flex px-3 py-1 text-xs rounded-full bg-white/6 border border-white/10 text-white/80">
                                            {row.market}
                                        </span>
                                        <span className="text-white/40 text-xs">{row.day}</span>
                                    </div>
                                    <p className="text-white/50 text-xs">{row.event}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-white/30 italic pt-4 pb-4">Trading hours are subject to liquidity provider availability and may change without prior notice.</p>
                    </motion.div>
                </Container>
            </div>

            {/* Info section */}
            <div className="common-padding">
                <Container>
                    <div className="max-w-285 mx-auto flex flex-wrap items-center gap-y-6 md:gap-y-8 xl:gap-12.5 w-full h-full">
                        <motion.div
                            initial={{ opacity: 0, x: -y - 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: duration, delay: 0.1 }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="w-full xl:w-146 flex flex-col gap-4 text-left"
                        >
                            <h3 className="h2 xl:max-w-105">{hc('sections.understanding.title')}</h3>
                            <p className="text-para2">{hc('sections.understanding.p1')}</p>
                            <p className="text-para2">{hc('sections.understanding.p2')}</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: y + 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: duration, delay: 0.1 }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="w-full xl:w-126.5 h-75 md:h-122.5"
                        >
                            <img
                                className="w-full h-full rounded-3xl object-cover bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.12)]"
                                src="https://images.pexels.com/photos/3760093/pexels-photo-3760093.jpeg?auto=compress&w=800&h=600&dpr=1"
                                alt="Trading calendar"
                            />
                        </motion.div>
                    </div>
                </Container>
            </div>

            <div>
                <Container>
                    <div className="max-w-285 mx-auto flex flex-wrap items-center flex-row-reverse gap-6 md:gap-12.5 w-full h-full">
                        <motion.div
                            initial={{ opacity: 0, x: y + 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: duration, delay: 0.1 }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="w-full xl:w-146 flex flex-col gap-4 text-left"
                        >
                            <h3 className="h2">{hc('sections.whyUse.title')}</h3>
                            <p className="text-para2">{hc('sections.whyUse.p1')}</p>
                            <p className="text-para2">{hc('sections.whyUse.p2')}</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -y - 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: duration, delay: 0.1 }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="w-full xl:w-126.5 h-75 md:h-122.5"
                        >
                            <img
                                className="w-full h-full rounded-3xl object-cover bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.12)]"
                                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&w=800&h=600&dpr=1"
                                alt="Market holidays"
                            />
                        </motion.div>
                    </div>
                </Container>
            </div>

            <div className="common-padding">
                <WhyFx />
            </div>

            {/* FAQ */}
            <div className="common-padding pt-0">
                <div className="max-w-206 mx-auto px-3">
                    <CommonTitle
                        className="text-center"
                        title={hc('faqTitle')}
                        des={hc('faqSubtitle')}
                        desClass="max-w-160 mx-auto"
                    />
                    <Accordion items={faqItems} activeItem={0} />
                </div>
            </div>
        </>
    )
}
