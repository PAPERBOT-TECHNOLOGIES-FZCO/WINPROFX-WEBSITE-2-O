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
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion'
import SeoHead from '@/components/seo-head'


import img_1 from '@/assets/img/home/news/2.png'
import img_2 from '@/assets/img/home/news/4.png'
import img_3 from '@/assets/img/home/news/3.png'
import img_4 from '@/assets/img/home/news/5.png'
import img_5 from '@/assets/img/home/news/6.png'
import img_6 from '@/assets/img/home/news/7.png'
import video from "@/assets/img/about/about.webm"
import user_icon from '@/assets/img/user_icon.svg'


export default function AboutUs() {
    const about_info = [
        {
            icon: null,
            title: 'Advanced Technology',
            des: 'We relentlessly pursue technological innovation to deliver lightning-fast execution and a seamless trading experience.',
        },
        {
            icon: null,
            title: 'Client-Centric Edge',
            des: 'Your success is our priority. We equip traders with the resources, liquidity, and support needed to thrive.',
        },
        {
            icon: null,
            title: 'Unwavering Integrity',
            des: 'Trust is paramount. We operate with radical transparency and strict ethical standards across every transaction.',
        },
        {
            icon: null,
            title: 'Global Network',
            des: 'Join a thriving ecosystem of professionals where collective insights and individual performance drive mutual success.',
        },
    ]

    const news_items = [
        {
            img: img_1,
            path: '',
        },
        {
            img: img_2,
            path: '',
        },
        {
            img: img_3,
            path: '',
        },
        {
            img: img_4,
            path: '',
        },
        {
            img: img_5,
            path: '',
        },
        {
            img: img_6,
            path: '',
        },
    ]
    // faq item
    const item = [
        {
            title: 'What is WINPROFX?',
            body: `
                <p>WINPROFX maintains high standards in its services, recognizing the pivotal role of quality for both the company and its clients. The belief in the necessity of versatile thinking and a unified set of business principles underpins our commitment to providing diverse forex services.We aim to adapt to evolving market conditions and consistently meet the diverse needs of our clientele.WINPROFX stands out for several reasons:</p>
               <ul>
                    <li>
                        <span>
                            <span>Global Regulation: </span> WINPROFX is reputed globally, ensuring compliance with industry standards and providing a secure trading environment.
                        </span>
                    </li>
                    <li>
                        <span>
                            <span>Nanosecond Execution:</span>The platform boasts nanosecond execution, allowing for quick and efficient trade processing, which is crucial in fast-paced financial markets.
                        </span>
                    </li>                    
                    <li>
                        <span>
                            <span>Lightning-Fast Withdrawals:</span>WINPROFX offers swift withdrawal processes, ensuring that you have timely access to your funds when needed.
                        </span>
                    </li>                    
                    <li>
                        <span>
                            <span>Wide Range of Tradable Instruments: </span> With over 300 tradable instruments, WINPROFX provides a diverse portfolio, allowing traders to explore various markets and investment opportunities.
                        </span>
                    </li>                    
                    <li>
                        <span>
                            <span>Tightest Spreads:</span> WINPROFX offers tight spreads, minimizing the difference between buying and selling prices, which can enhance profitability for traders.
                        </span>
                    </li>
                </ul>
            `,
        },
        {
            title: 'How do I start trading with WINPROFX?',
            body: `
                <div class="flex flex-col mb-4">
                    <strong class="text-white font-semibold mb-2 text-lg">Create an Account:</strong>
                    <p>Visit the official WINPROFX website at <a href="https://winprofx.org" class="text-white underline" target="_blank" rel="noopener noreferrer">winprofx.org</a> or <a href="https://my.winprofx.org/register" class="text-white underline" target="_blank" rel="noopener noreferrer">register here</a>.</p>
                    <p>Look for a "Register" or "Open an Account" option.</p>
                    <p>Provide the required information, including personal details and contact information.</p>
                    <p>Agree to the terms and conditions.</p>
                </div>
                <div class="flex flex-col mb-4">
                    <strong class="text-white font-semibold mb-2 text-lg">Verification (KYC):</strong>
                    <p>Complete the required identity verification process by submitting identification documents to comply with regulatory requirements.</p>
                </div>
                <div class="flex flex-col mb-4">
                    <strong class="text-white font-semibold mb-2 text-lg">Deposit Funds:</strong>
                    <p>Log in to your newly created account.</p>
                    <p>Go to the deposit or funding section.</p>
                    <p>Choose your preferred payment method and deposit funds into your trading account.</p>
                </div>
                <div class="flex flex-col mb-4">
                    <strong class="text-white font-semibold mb-2 text-lg">Select a Trading Platform:</strong>
                    <p>Choose from the available trading platform - MetaTrader 5 (MT5).</p>
                    <p>Download and Install the Trading Platform.</p>
                </div>
                <div class="flex flex-col mb-4">
                    <strong class="text-white font-semibold mb-2 text-lg">Login to the Trading Platform:</strong>
                    <p>Open the trading platform.</p>
                    <p>Enter your account credentials to log in.</p>
                    <p>If you encounter any difficulties, WINPROFX's customer support should be able to assist you. <a href="/contact" class="text-white underline">Contact us</a></p>
                </div>
            `,
        },
        {
            title: 'Which Financial instruments can I trade with WINPROFX?',
            body: `
                <p>Common categories of financial instruments that traders can potentially access on WINPROFX: </p>
                <ul>
                    <li>
                        <span>
                         <span>Forex (Foreign Exchange): </span>
                        Currency pairs, such as EUR/USD, GBP/JPY, USD/JPY, etc.
                        </span>                        
                    </li>
                    <li>
                        <span>
                         <span>Indices:</span>
                         Benchmarks representing the performance of a group of stocks on a specific exchange such as S&P500, US30, etc.
                        </span>                        
                    </li>
                    <li>
                        <span>
                         <span>Commodities:</span>
                        Such as oil, agricultural products, etc.
                        </span>                        
                    </li>
                    <li>
                        <span>
                         <span>Precious Metals:</span>
                         Assets like gold, silver, platinum, palladium, etc.
                        </span>                        
                    </li>
                    <li>
                        <span>
                         <span>Cryptocurrencies:</span>
                         Digital currencies like Bitcoin, Ethereum, Litecoin, etc.


                        </span>                        
                    </li>
                </ul>
            `,
        },
        {
            title: 'How can I deposit and withdraw funds on WINPROFX?',
            body: `
                <p>For clients convenience WINPROFX provides deposit and withdrawal options via our Banking and Crypto network partners. Feel free to connect with our Client Servicing team for further assistance.</p>
            `,
        },
        {
            title: 'What trading platforms does WINPROFX support?',
            body: `
                <p>WINPROFX supports the following trading platforms:</p>
                <ul>
                    <li>
                        <span>
                         <span>MetaTrader 5 (MT5):</span>
                        The industry-standard desktop and mobile platform for forex, indices, crypto, metals, commodities, and oil trading.
                        </span>
                    </li>
                    <li>
                        <span>
                         <span>Web Trading:</span>
                        Browser-based trading available at trade.winprofx.org for quick access without installation.
                        </span>
                    </li>
                    <li>
                        <span>
                         <span>Demo Accounts:</span>
                        Practice trading in a risk-free environment before going live.
                        </span>
                    </li>
                </ul>
                <p>Learn more on our <a href="/platform" class="text-white underline">Platform page</a> or <a href="/contact" class="text-white underline">contact support</a> for assistance.</p>
            `,
        },
        {
            title: 'How can I contact WINPROFX customer support?',
            body: `
                <p>WINPROFX customer support is available 24/7 through the following channels:</p>
                <ul>
                    <li><span><span>Phone:</span> <a href="tel:+97144471894" class="text-white underline">+971 4 447 1894</a></span></li>
                    <li><span><span>Email:</span> <a href="mailto:support@winprofx.com" class="text-white underline">support@winprofx.com</a></span></li>
                    <li><span><span>WhatsApp:</span> <a href="https://wa.me/97144471894" class="text-white underline" target="_blank" rel="noopener noreferrer">+971 4 447 1894</a></span></li>
                    <li><span><span>Live Chat:</span> Available on this website via the chat widget</span></li>
                </ul>
                <p>Visit our <a href="/contact" class="text-white underline">Contact page</a> for full details. Official website: <a href="https://winprofx.org" class="text-white underline" target="_blank" rel="noopener noreferrer">winprofx.org</a>.</p>
            `,
        },
    ]

    return (
        <>
            <SeoHead
                title="About Us | WINPROFX"
                description="Learn about WINPROFX, a leader in forex trading, offering advanced platforms and comprehensive support to empower traders globally. Click to know more!"
                keywords="Forex Trading Experts, Forex Trading Team, Forex Platform, Forex Trading Company, WINPROFX Services Overview, Best Forex Trading Broker Platform, Best Forex Market Trading Platform"
                canonicalPath="/about-us"
            />
            <TopShape />
            <CommonBanner
                videoBg={video}
                bgClass="top-auto lg:top-1/4 3xl:-mt-25 h-auto w-full bottom-0 left-0"
                meta="ABOUT US"
                title="Pioneering Excellence: Redefining Trading Standards at WINPROFX"
                des={
                    <>
                        Welcome to WINPROFX — an award-winning forex and CFD broker offering advanced
                        trading technology, competitive spreads, and 24/7 support for traders of all levels.
                        Our primary official website is winprofx.org.
                    </>
                }
                desClass="max-w-135 mx-auto"
            />

            {/* Company entity info */}
            <div className="common-padding pb-0">
                <Container>
                    <div className="max-w-285 mx-auto bg-white/2 border border-solid border-white/8 rounded-2xl lg:rounded-[20px] p-4 md:p-6 lg:p-8">
                        <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">Company Information</h4>
                        <ul className="flex flex-col gap-y-2 text-para text-sm md:text-base">
                            <li><strong className="text-white">Legal Name:</strong> WINPROFX Limited</li>
                            <li><strong className="text-white">Trading Name:</strong> WINPROFX</li>
                            <li><strong className="text-white">Primary Website:</strong>{' '}
                                <a href="https://winprofx.org" className="text-white underline hover:text-primary" target="_blank" rel="noopener noreferrer">winprofx.org</a>
                            </li>
                            <li><strong className="text-white">Regulation:</strong> Financial Services Commission of the Republic of Mauritius (Investment Dealer license)</li>
                            <li><strong className="text-white">Support:</strong>{' '}
                                <a href="mailto:support@winprofx.com" className="text-white underline hover:text-primary">support@winprofx.com</a>
                                {' '}|{' '}
                                <a href="tel:+97144471894" className="text-white underline hover:text-primary">+971 4 447 1894</a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>

            {/* info area */}
            <div className="common-padding">
                <Container>
                    <div className="max-w-285 mx-auto flex flex-wrap justify-between">
                        <CommonTitle
                            className="max-w-full xl:max-w-135 mx-auto xl:mx-0 text-center xl:text-start"
                            title="The WINPROFX Standard"
                            des="A foundation built on transparency, innovation, and uncompromising execution."
                            desClass="max-w-100"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-3 xl:max-w-md w-full">
                            {about_info.map((item, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, y: y }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: duration, delay: idx * 0.1 }}
                                    viewport={{ once: once, amount: 0.2 }}
                                    key={idx}
                                    className="xl:max-w-150 p-px bg-linear-0 to-white/20 from-white/0 rounded-2xl"
                                >
                                    <div className="flex items-start gap-4 p-4 md:p-5 lg:p-6 bg-linear-0 to-[#0E0E14] from-white/0 rounded-2xl">
                                        {item.icon ?
                                            <div className="icon-shadow flex-none size-10 md:size-12 lg:size-13 rounded-lg flex items-center justify-center">
                                                <img src={item.icon} alt="" />
                                            </div> :
                                            <div className="icon-shadow rounded-lg overflow-hidden flex-none">
                                                <img src={user_icon} alt="" />
                                            </div>
                                        }
                                        <div className="flex flex-col gap-y-1">
                                            <h5 className="text-xl font-bold mb-0 text-white">{item.title}</h5>
                                            <p className="text-sm text-para xl:max-w-81">{item.des}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>

            {/* news area */}
            <div className="">
                <Container>
                    <h4 className="text-2xl md:text-[28px] leading-tight text-center mb-6 md:mb-8 lg:mb-10 w-max mx-auto">As Featured In</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {news_items.map((item, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: y }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: duration, delay: idx * 0.1 }}
                                viewport={{ once: once, amount: 0.2 }}
                                key={idx}
                                className='h-full'
                            >
                                <div key={idx} className="group h-25 md:h-31 relative z-1 rounded-2xl lg:rounded-3xl max-h-44 border-2 overflow-hidden border-solid border-white/8 bg-white hover:border-primary shadow-none main-shadow block">
                                    <img src={item.img} className='size-full object-contain' alt="" />
                                    <div className="absolute size-full top-0 left-0 flex items-center justify-center bg-main-bg/37 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="size-10 md:size-12 lg:size-16 rounded-full bg-white/7 border border-solid border-white/32 backdrop-blur-md p-2">
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
                </Container>
            </div>

            <div className="common-padding">
                <div className="max-w-206 mx-auto px-3">
                    <CommonTitle
                        className="text-center"
                        title="Your Guide to Seamless Trading"
                        des="Unlock the answers you need with our FAQs. From account setup to trading strategies, find quick solutions to common queries, ensuring your trading journey with WINPROFX is smooth and successful."
                        desClass="max-w-154 mx-auto"
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
            <Container>
                <div className="max-w-290 mx-auto common-padding">
                    <DemoCta />
                </div>
            </Container>
        </>
    );
}
