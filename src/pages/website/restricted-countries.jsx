import React from 'react'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import SeoHead from '@/components/seo-head'

export default function RestrictedCountries() {
    const info = [
        {
            title: 'WinproFX Limited does not provide any services to the following Country :',
            des: [
                {
                    name: 'EU Member countries',
                    ulr: null
                }
            ]
        },
        {
            title: 'Credit/ Debit Cards',
            des: [
                {
                    name: `As per ongoing and substantial money laundering and financing of terrorism (ML/FT) risks - We do not offer accounts to residents of the following sanctioned countries which has deficiencies that pose a risk to the international financial system.`,
                    ul: [
                        `Afghanistan`,
                        `Albania`,
                        `Angola`,
                        `Bahamas`,
                        `Barbados`,
                        `Botswana`,
                        `Cambodia`,
                        `Cote d'Ivoire (Ivory Coast)`,
                        `Crimea and Sevastopol`,
                        `Cuba`,
                        `Democratic People's Republic of Korea (DPRK)`,
                        `Democratic Republic of Congo`,
                        `Ghana`,
                        `Iceland`,
                        `Iran`,
                        `India`,
                        `Iraq`,
                        `Jamaica`,
                        `Liberia`,
                        `Mauritius`,
                        `Mongolia`,
                        `Myanmar`,
                        `Nicaragua`,
                        `Panama`,
                        `Somalia`,
                        `Sudan`,
                        `Syria`,
                        `Trinidad and Tobago`,
                        `Uganda`,
                        `UAE`,
                        `USA`,
                        `Yemen`,
                        `Zimbabwe`,
                    ]
                }
            ]
        },
    ]

    return (
        <div className='padding-top-245'>
            <SeoHead
                title="Restricted Countries | WinproFX"
                description="View the list of countries restricted from trading on WinproFX due to regulatory and legal constraints. Click for full details!"
                canonicalPath="/restricted-countries"
            />
            <TopShape />
            <PolicyTitle
                meta="Last Updated: Jun 7, 2024"
                title="Restricted Countries"
            />
            <Container>
                <Card>
                    {info.map((item, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: y + 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.1` }}
                            viewport={{ once: once, amount: 0.2 }}
                            className='flex flex-col mb-6 md:mb-8 lg:mb-10 last:mb-0' key={idx}
                        >
                            <h4 className='text-2xl mb-3 md:mb-4 lg:mb-5 font-medium max-w-max w-full'>{item.title}</h4>
                            <div className="bg-white/2 border border-solid border-white/8 p-4 md:p-5 lg:p-6 rounded-2xl lg:rounded-[20px]">
                                {item.des?.map((des, i) => (
                                    <React.Fragment key={i}>
                                        <p key={i} className='mb-4 md:mb-5 lg:mb-6 last:mb-0 [&>strong]:font-semibold [&>strong]:text-white xl:pr-20' dangerouslySetInnerHTML={{ __html: des.name }}></p>
                                        {des.ul &&
                                            <div className="flex flex-col gap-y-0.5 pl-2 -mt-2 mb-4 md:mb-5 lg:mb-6 last:mb-0">
                                                {des.ul?.map((uli, ulk) =>
                                                    <p key={ulk} className='flex gap-x-2.5 items-start'>
                                                        <span className='block size-1 rounded-full bg-para translate-y-2.5'></span>
                                                        {uli}
                                                    </p>
                                                )}
                                            </div>
                                        }
                                    </React.Fragment>
                                ))}
                                {/* {item.list &&
                                    <div className=" bg-white/2 border border-solid border-white/8 p-4 md:p-6 lg:p-8 rounded-2xl lg:rounded-[20px]">
                                        {item.list?.map((l, k) => (
                                            <div className='flex flex-col mb-6 md:mb-8 lg:mb-10 last:mb-0' key={k}>
                                                <h4 className='text-lg leading-tight font-semibold uppercase mb-3 md:mb-4 lg:mb-5 max-w-max w-full'>{k + 1}. {l.title}</h4>
                                                {l.des.map((ldes, li) => (
                                                    <React.Fragment key={li}>
                                                        <p key={li} className='mb-4 md:mb-5 lg:mb-6 last:mb-0'>{ldes.name}</p>
                                                        {ldes.ul &&
                                                            <div className="flex flex-col gap-y-0.5 pl-2 -mt-2">
                                                                {ldes.ul?.map((uli, ulk) =>
                                                                    <p key={ulk} className='flex gap-x-2.5 items-start'>
                                                                        <span className='block size-1 rounded-full bg-para translate-y-2.5'></span>
                                                                        {uli}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        }
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                } */}
                            </div>
                        </motion.div>
                    ))}
                </Card>
            </Container>
        </div>
    )
}
