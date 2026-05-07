import { Container } from '@/components/grid';
import CommonBanner from '@/components/common-banner';
import TopShape from '@/components/top-shape';
import Dropdown from '@/components/ui/dropdown';
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import Accordion from "@/components/accordion";
import CommonTitle from "@/components/common-title";
import SeoHead from '@/components/seo-head'


import banner_bg from '@/assets/img/economic-calender/bg.png';
import amount_img_1 from '@/assets/img/economic-calender/amount-bag-1.png';
import amount_img_2 from '@/assets/img/economic-calender/amount-bag-2.png';
import WhyFx from '../../components/currency/why-fx';


export default function EconomicCalendar() {
    const table_data = [
        {
            time: '08:30',
            symbol: 'USD',
            event: 'Non-Farm Payrolls (NFP)',
            impact: 'High',
            actual: '150K',
            forecast: '200K',
            previous: '180K'
        },
        {
            time: '08:30',
            symbol: 'USD',
            event: 'Non-Farm Payrolls (NFP)',
            impact: 'High',
            actual: '150K',
            forecast: '200K',
            previous: '180K'
        },
        {
            time: '08:30',
            symbol: 'USD',
            event: 'Non-Farm Payrolls (NFP)',
            impact: 'High',
            actual: '150K',
            forecast: '200K',
            previous: '180K'
        },
        {
            time: '08:30',
            symbol: 'USD',
            event: 'Non-Farm Payrolls (NFP)',
            impact: 'High',
            actual: '150K',
            forecast: '200K',
            previous: '180K'
        },
        {
            time: '08:30',
            symbol: 'USD',
            event: 'Non-Farm Payrolls (NFP)',
            impact: 'High',
            actual: '150K',
            forecast: '200K',
            previous: '180K'
        },
        {
            time: '08:30',
            symbol: 'USD',
            event: 'Non-Farm Payrolls (NFP)',
            impact: 'High',
            actual: '150K',
            forecast: '200K',
            previous: '180K'
        },
        {
            time: '08:30',
            symbol: 'USD',
            event: 'Non-Farm Payrolls (NFP)',
            impact: 'High',
            actual: '150K',
            forecast: '200K',
            previous: '180K'
        },
        {
            time: '08:30',
            symbol: 'USD',
            event: 'Non-Farm Payrolls (NFP)',
            impact: 'High',
            actual: '150K',
            forecast: '200K',
            previous: '180K'
        },
    ]

    // faq item
    const item = [
        {
            title: "What is a Forex Economic Calendar?",
            body: `
                <p>The Economic Calendar is a tool that lists significant economic events and data releases in chronological order, which can impact financial markets.</p>
            `,
        },
        {
            title: "How can I use the Forex Economic Calendar for trading?",
            body: `
                <p>Traders use the Economic Calendar to stay informed about upcoming events that might influence market movements, helping them plan their trades more effectively.</p>
            `,
        },
        {
            title: "What types of events are listed on the Forex Economic Calendar?",
            body: `
                <p>The Economic Calendar includes events such as monetary policy decisions, economic indicators, GDP announcements, Non-Farm Payrolls (NFP) figures, and interest rate changes.</p>
            `,
        },
        {
            title: "How do Forex economic events impact trading?",
            body: `
                <p>Economic events can cause significant volatility in financial markets, influencing the prices of forex pairs, stocks, and other instruments.</p>
            `,
        },
        {
            title: "Where can I find the Forex Economic Calendar on the WinProFX platform?",
            body: `
                <p>The Economic Calendar is accessible in your Personal Area on the WinProFX website or through the WinProFX Trade app.</p>
            `,
        },
        {
            title: "Can I get notifications for upcoming Forex economic events?",
            body: `
                <p>Yes, you can receive notifications for upcoming economic events under the "Mailbox" tab on your trading platform.</p>
            `,
        },
        {
            title: "Are all Forex economic events equally important for trading?",
            body: `
                <p>No, the impact of economic events varies. Major events like interest rate decisions and NFP figures typically have a higher impact than others.</p>
            `,
        },
        {
            title: "How often is the Forex Economic Calendar updated?",
            body: `
                <p>The Economic Calendar is updated in real-time to ensure you have the most current information about upcoming events.</p>
            `,
        },
    ];

    return (
        <>
            <SeoHead
                title="Economic Calendar | WinproFX"
                description="Stay updated with WinproFX's Economic Calendar. Track major market events like GDP announcements & interest rate changes to enhance your trading strategy."
                keywords="Economic Calendar, Forex Events, Market Events, Interest Rate Decisions, GDP Announcements, Trading Calendar, WinproFX Calendar"
                canonicalPath="/economic-calendar"
            />
            <div className="padding-top-245 overflow-hidden min-h-140 md:min-h-180 lg:min-h-190 xl:min-h-230 2xl:min-h-283 3xl:min-h-screen bg-black relative z-1">
                <TopShape />
                <img className="absolute bottom-0 left-0 w-full h-auto object-cover -z-10 pointer-events-none" src={banner_bg} alt="Banner Background" />
                <Container>
                    <div className="max-w-160 mx-auto text-center flex flex-col gap-y-2.5 md:gap-y-4 lg:gap-y-6 lg:mb-6 xl:mb-21">
                        <motion.h1
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.1` }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="h1 w-max mx-auto">Economic Calendar</motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.2` }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="text-para2 max-w-108 mx-auto">Track global macroeconomic events, volatility indicators, and market-moving data in real-time.</motion.p>
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
                                label="Symbols"
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
                                        <th>Time</th>
                                        <th>Symbol</th>
                                        <th>Event</th>
                                        <th>Impact</th>
                                        <th>Actual</th>
                                        <th>Forecast</th>
                                        <th>Previous</th>
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
                            <h3 className="h2 xl:max-w-105">Understanding and Utilizing the Forex Economic Calendar</h3>
                            <p className="text-para2">A Forex Economic Calendar is an invaluable tool for traders, enabling them to monitor and analyze events that drive market movements and forecast price changes. It lists significant national and international news events in chronological order.</p>
                            <p className="text-para2">Key events such as monetary policy decisions, economic indicators, GDP announcements, Non-Farm Payrolls (NFP) figures, and interest rate changes are included, as they can heavily influence financial markets.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: y + 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: duration, delay: `0.1` }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="w-full xl:w-126.5 h-75 md:h-122.5">
                            <img className="w-full h-full rounded-3xl object-cover bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.12)]" src={amount_img_1} alt="just bag symbol" />
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
                            <h3 className="h2">Why You Should Use the Forex Economic Calendar</h3>
                            <p className="text-para2">A Forex Economic Calendar is essential for keeping abreast of upcoming news, reports, and announcements. These events can significantly affect the volatility of forex currency pairs, stocks, and other markets. </p>
                            <p className="text-para2">By using the calendar, traders can plan their trades more effectively and stay informed about chart patterns and indicators that may be impacted. Referring to the calendar before the trading day is a prudent practice, as these events can trigger significant price movements when released.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -y - 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: duration, delay: `0.1` }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="w-full xl:w-126.5 h-75 md:h-122.5">
                            <img className="w-full h-full rounded-3xl object-cover bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.12)]" src={amount_img_2} alt="just bag symbol" />
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
                        title="Frequently asked questions"
                        des="Find clear and concise answers to the most common questions about trading, account setup, deposits, withdrawals, and platform features."
                        desClass="max-w-160 mx-auto"
                    />
                    <Accordion
                        items={item}
                        activeItem={0}
                    />
                </div>
            </div>
        </>
    )
}
