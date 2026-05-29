import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from '@/components/grid'
import PolicyTitle from '@/components/policy/policy-title'
import SeoHead from '@/components/seo-head'
import { parseBlogDateToIso } from '@/lib/schema-org'

import img_1 from '@/assets/img/blog/1.png'
import shape from '@/assets/img/blog/shape.png'

export default function BlogDetails() {
    const single_blog = {
        id: '1',
        date: '06 - 21 - 2026',
        title: 'Best Forex, Indices, Crypto, Metals, commodities & Oil Trading Platform in India : WinproFX',
        img: img_1,
        des: 'Forex trading can be a highly rewarding venture, but it often requires a significant amount of capital to get started. However, with WinproFX, you can begin trading with a free funded Forex account without deposit, giving you the chance to trade in real markets without risking your own money. This opportunity allows traders to build confidence, develop strategies, and test their skills in a live trading environment.',
        info: [
            {
                title: 'What is a Free Funded Forex Account?',
                des: 'A free funded Forex account without deposit is an account that provides you with pre-funded trading capital. Essentially, this means you can start trading in the Forex market without having to deposit any of your own money. It’s an excellent way for both new and experienced traders to practice trading, explore market trends, and hone their strategies without financial risk.',
            },
            {
                title: 'Best Forex Trading Platform for Your Success',
                des: 'At WinProFX, traders have access to the best Forex trading platform, equipped with powerful tools and advanced features. The platform offers real-time data, sophisticated charting tools, and quick trade execution, ensuring that you can react to market movements effectively. Whether you are trading major currency pairs or exploring exotic pairs, WinProFX provides the features needed to succeed in Forex trading.',
            },
            {
                title: 'Trade Indices on the Best Indices Trading Platform in India',
                des: 'In addition to Forex trading, WinProFX offers the best indices trading platform in India, allowing traders to diversify their portfolios. Indices trading enables you to speculate on the performance of a group of stocks rather than individual assets, making it a less volatile and more balanced option for traders. WinProFX’s platform provides seamless access to top global indices like the S&P 500, FTSE 100, and Nifty 50.',
            },
            {
                title: 'Get Started with a Forex Funded Account Today',
                des: `WinProFX gives you the tools and resources to start trading with a forex funded account. Whether you're interested in Forex or indices trading, their state-of-the-art platform ensures you have everything you need to succeed. Sign up today and take advantage of a Best Forex, Indices, Crypto Trading Platform in India to begin your trading journey with zero financial risk.`,
            },
        ]
    }
    return (
        <div className='padding-top-245 -mt-4 md:mt-0 common-padding'>
            <SeoHead
                title={single_blog.title + ' | WinproFX'}
                description={single_blog.des}
                canonicalPath={`/blog/${single_blog.id}`}
                blogPosting={{
                    headline: single_blog.title,
                    description: single_blog.des,
                    datePublished: parseBlogDateToIso(single_blog.date),
                }}
            />
            <img src={shape} className='absolute top-0 right-0 max-w-full -z-10 pointer-events-none blur-[140px]' alt="" />
            <Container>
                <PolicyTitle
                    animation={false}
                    className="max-w-260 mx-auto mb-8! md:mb-12! lg:mb-16!"
                    meta="Overview"
                    title={single_blog.title}
                />
                <div className="rounded-3xl md:rounded-4xl lg:rounded-[40px] bg-white/4 border border-solid border-white/16 p-4 md:p-5 lg:p-6 flex flex-col gap-y-5 md:gap-y-6.5 lg:gap-y-8">
                    <div className="bg-white/4 rounded-2xl md:rounded-3xl lg:rounded-[30px] relative overflow-hidden z-1 aspect-100/50 xl:aspect-[1/.395]">
                        <img src={single_blog.img} className='w-full min-h-full h-auto absolute inset-0 -z-10' alt="" />
                    </div>
                    <div className="flex flex-col gap-y-6 md:gap-y-8 lg:gap-y-10 mb-2 p-2 pt-0">
                        <p>{single_blog.des}</p>
                        {single_blog.info.map((item, idx) => (
                            <div className="flex flex-col gap-y-3" key={idx}>
                                <h5 className='font-medium text-white text-xl leading-tight'>{item.title}</h5>
                                <p>{item.des}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </Container>
        </div>
    )
}
