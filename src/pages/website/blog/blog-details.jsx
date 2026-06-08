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
        title: 'WINPROFX Forex and CFD Trading Overview',
        img: img_1,
        des: 'WINPROFX provides access to forex and CFD markets through MetaTrader 5. This overview explains platform access, account services, and where to find official company and risk information before trading.',
        info: [
            {
                title: 'What markets does WINPROFX offer?',
                des: 'WINPROFX offers access to forex, indices, crypto CFDs, metals, commodities, and oil through the MT5 platform. Instrument availability may vary by account type and region.',
            },
            {
                title: 'MT5 Platform Access',
                des: 'Clients can access MetaTrader 5 on desktop and mobile. The platform includes charting tools, order types, and account management features. Demo accounts may be available for practice.',
            },
            {
                title: 'Verify WINPROFX Before Trading',
                des: 'Always confirm you are on an official WINPROFX domain before logging in or depositing. Review company registration, regulatory scope, and risk warnings on the WINPROFX Trust Center at winprofx.org.',
            },
            {
                title: 'Risk Warning',
                des: 'Trading forex and CFDs involves significant risk and may not be suitable for all investors. Losses can exceed deposits when using leverage. Read the full risk warning on the official WINPROFX website before trading.',
            },
        ]
    }
    return (
        <div className='padding-top-245 -mt-4 md:mt-0 common-padding'>
            <SeoHead
                title={single_blog.title + ' | WINPROFX'}
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
                    as="h1"
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
