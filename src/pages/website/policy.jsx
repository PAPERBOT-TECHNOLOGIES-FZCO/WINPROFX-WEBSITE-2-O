import React from 'react'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import SeoHead from '@/components/seo-head'

export default function Policy() {
    const info = [
        {
            title: 'Privacy Policy Of WINPROFX',
            des: [
                {
                    name: `It is the stated policy of WINPROFX (hereafter referred to as “WINPROFX”, ‘us’, ‘we’ and ‘our’) that WINPROFX will act in accordance with current best practice with regard to the processing of personal data.`,
                },
                {
                    name: `Your privacy is very important to us and we make it our priority to safeguard and secure any and all confidential information relating to individuals. WINPROFX understands the importance of maintaining the privacy of your personal information. WINPROFX as a company would like to assure you of our commitment to keeping it private`
                }
            ],
        },
        {
            title: 'Privacy Protection',
            des: [
                {
                    name: `WINPROFX has appointed a Data Protection Officer to ensure that our Company manages/processes your personal information in compliance with the applicable data protection laws and regulations and in accordance with this Privacy Policy.`,

                },
                {
                    name: `In relation to your personal data, you agree that we use and rely on the data you provided us, and we and our group companies can store and process them both in physically and/or electronically.`,

                },
                {
                    name: `It is your responsibility to make sure that your password is only known to you and not disclosed to anyone else. Your registered information is securely stored with us, and only authorized staff have access to this information. Please also note that transfer of information via the internet is not always entirely secure, but we have taken significant precautions to assure that your personal data is being protected.`,

                },
            ],
        },
        {
            title: 'Personal Information We Collect',
            des: [
                {
                    name: `If you decide to apply to open an account with WINPROFX Limited, there is certain information that we will require from you in order to do so. WINPROFX obtains most of the information directly from you through application or other forms, and from maintaining records of information provided in the course of ongoing customer service. WINPROFX may also collect information about your use of the website, such as pages visited, frequency and duration and visit and trading activities.`,

                },
            ],
        },
        {
            title: 'Processing of Your Personal Information',
            des: [
                {
                    name: `We may process your personal data on the following bases and for the following purposes:`,

                },
            ],
            list: [
                {
                    title: 'PERORMANCE OF CONTRACT',
                    des: [
                        {
                            name: `We process personal data in order to provide our services and products, as well as information regarding our products and services based on the contractual relationship with our clients (i.e. so as to perform our contractual obligations). In addition, processing of personal data takes place to be able to complete our client on-boarding/acceptance procedures. In view of the above, we need to verify your identity in order to accept you as our client and we will need to use those details in order to effectively manage your trading account with us. `,
                        },
                        {
                            name: `This may include third parties carrying out credit or identity checks on our behalf. The use of your personal information is necessary for us to know who you are as we have a legal obligation to comply with ‘Know Your Customer’ and customer due diligence’ regulatory obligations.`,
                        },
                    ]
                },
                {
                    title: 'COMPLIANCE WITH A LEGAL OBLIGATION',
                    des: [
                        {
                            name: `In view of the above, we need to verify your identity in order to accept you as our client and we will need to use those details in order to effectively manage your trading account with us. This may include third parties carrying out credit or identity checks on our behalf. The use of your personal information is necessary for us to know who you are as we have a legal obligation to comply with ‘Know Your Customer’ and customer due diligence’ regulatory obligations`,
                        },
                    ]
                },
                {
                    title: 'FOR THE PURPOSES OF SAFEGUARDING LEGITIMATE INTERESTS',
                    des: [
                        {
                            name: `We process personal data so as to safeguard the legitimate interests pursued by us or by a third party. A legitimate interest is when we have a business or commercial reason to use your information. Examples of such processing activities include the following:`,
                            ul: [
                                `Nitiating legal claim and preparing our defense in litigation procedures`,
                                `Risk management`,
                                `Measures to manage business and for further developing and services`,
                                `Measures to ensure IT and system security, preventing potential crime, asset security, admittance controls and anti-trespassing measures`,
                                `Sharing your personal data within WINPROFX for the purpose of updating/verifying your personal data in accordance with the relevant anti-money laundering compliance framework.`,
                            ]
                        },
                    ],
                },
                {
                    title: 'YOU HAVE PROVIDED YOUR CONSENT',
                    des: [
                        {
                            name: `Our storage and use of your personal data is based on your consent (other than for the reasons described or implied in this policy when your consent is not required). You may revoke consent at any time; however, any processing of personal data prior to the receipt of your revocation will not be affected.`,
                        },
                    ]
                },
                {
                    title: 'TO PROVIDE YOU WITH PRODUCTS AND SERVICES, INFORMATION',
                    des: [
                        {
                            name: `Once you successfully open a trading account with us, or subscribe to an update, we will need to use your personal information to perform our services and comply with our obligations to you. It is also in our legitimate interests to try to ensure that we are providing the best products and services so we may periodically review your needs based on our assessment of your personal information to try to ensure that you are getting the benefit of the best possible products and services from us.`,
                        },
                    ]
                },
                {
                    title: 'TO INVESTIGATE OR SETTLE ENQUIRIES OR DISPUTES',
                    des: [
                        {
                            name: `We may need to use personal information collected from you to investigate issues or to settle disputes with you because it is in our legitimate interests to ensure that issues and disputes get investigated and resolved in a timely and efficient manner.`,
                        },
                    ]
                },
                {
                    title: 'TO COMPLY WITH APPLICABLE LAWS, COURT ORDERS, OTHER JUDICIAL PROCESS, OR THE REQUIREMENTS OF ANY APPLICABLE REGULATORY AUTHORITIES',
                    des: [
                        {
                            name: `We may need to use your personal information to comply with any applicable laws and regulations, court orders or other judicial process, or the requirements of any applicable regulatory authority. We do this not only to comply with our legal obligations but because it may also be in our legitimate interest to do so.`,
                        },
                    ]
                },
                {
                    title: 'DATA ANALYSIS',
                    des: [
                        {
                            name: `Our web pages and emails may contain web beacons or pixel tags or any other similar type of data analysis tools that allow us to track receipt of correspondence and count the number of users that have visited our webpage or opened our correspondence. We may aggregate your personal information (such as trading history) with the personal information of our other clients on an anonymous basis. `,
                        },
                        {
                            name: `If your personal information is not in an anonymized form, it is in our legitimate interest to continually evaluate that personal information to ensure that the products and services we provide are relevant to the market.`,
                        },
                    ]
                },
                {
                    title: 'MARKETING PURPOSES',
                    des: [
                        {
                            name: `We may use your personal information to send you marketing communications by email, phone, SMS or other methods (such as social media channels) to ensure that you are kept up to date with our latest products and services. We will not disclose your information to any outside parties that may allow them to directly market to you.`,
                        },
                    ]
                },
                {
                    title: 'INTERNAL BUSINESS PURPOSES AND RECORD KEEPING',
                    des: [
                        {
                            name: `We may use your personal information for internal business and research or record keeping purposes. Such processing is in our own legitimate interests and is required in order to comply with our legal obligations. This may include any communications that we have with you in relation to the services and products we provide to you. We will also keep records to ensure that you comply with your contractual obligations pursuant to the agreement governing our relationship with you.`,
                        },
                    ]
                },
                {
                    title: 'LEGAL NOTIFICATIONS',
                    des: [
                        {
                            name: `Often the law requires us to advise you of certain changes to products or services or laws. We may need to inform you of changes to the terms or the features of our products or services. We need to process your personal information to send you these legal notifications. You will continue to receive this information from us even if you choose not to receive direct marketing information from us.`,
                        },
                    ]
                },
                {
                    title: 'PHYSICAL SECURITY',
                    des: [
                        {
                            name: `If you enter any of our premises we may record your image on our CCTV for security reasons. We may also take your details to keep a record of who has entered our premises on any given day. It is in our legitimate interest to do this to maintain a safe and secure working environment.`,
                        },
                    ]
                },
            ]
        },
        {
            title: 'Disclosure of Your Personal Information',
            des: [
                {
                    name: `The Company will not disclose any of its clients’ confidential information to a third party, except:`,
                    ul: [
                        `to the extent that it is required to do so pursuant to any applicable laws, rules or regulations;`,
                        `if there is a duty to disclose;`,
                        `if our legitimate business interests require disclosure; or`,
                        `at your request or with your consent or to Persons described in this policy. The Company will endeavor to make such disclosures on a ‘needto-know’ basis, unless otherwise instructed by a regulatory authority. Under such circumstances, the Company will notify the third party regarding the confidential nature of any such information.`,
                    ]
                },
                {
                    name: `As part of using your personal data for the purposes set out above, the Company may disclose your personal information to the following:`,
                    ul: [
                        `Any companies under WINPROFX, meaning any of our ultimate holding companies and their respective subsidiaries may receive such information;`,
                        `Our associates and service providers, for business purposes, including third parties such as business service providers and specialist advisers who have been contracted to provide us with administrative, financial, legal, tax, compliance, insurance, research or other services;`,
                        `Business introducers with whom we have a mutual business relationship;`,
                        `Business parties, credit providers, courts, tribunals and regulatory authorities as agreed or authorized by law;`,
                        `Anyone authorized by you.`,
                    ]
                },
                {
                    name: 'If the Company discloses your personal information to business parties, such as card or other payment processing companies or banks, in order to perform the services requested by clients, such third parties may store your information in order to comply with their legal and other obligations. Clients accept and consent that the Company may, from time to time, analyze the data collected while visiting our website(s) or by other means, such as questionnaires, for statistical purposes in order to improve the Company’s business activities.'
                }
            ],
        },
        {
            title: 'Transfers Outside of the European Economic Area',
            des: [
                {
                    name: `We may transfer your personal information outside the European Economic Area (EEA) to other WINPROFX companies as well as service providers (i.e. processors) who are engaged on our behalf. To the extent we transfer your information outside the EEA, we will ensure that the transfer is lawful and that processors in third countries are obliged to comply with the European data protection laws or other countries’ laws which are comparable and to provide appropriate safeguards in relation to the transfer of your data in accordance with GDPR Article 46.`,
                },
                {
                    name: `By submitting your personal data, you consent to your personal information being processed by staff of WINPROFX operating outside the EEA who work for us. Such staff may be, among others, engaged in the fulfilment of your requests, the processing of your payment details and the provision of support services. The Company will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy`
                },
            ],
        },
        {
            title: 'Your Collected Information',
            des: [
                {
                    name: `Tracking systems used on the Company’s website(s) may collect your personal data in order to optimize the services provided to clients/potential clients. The website collects information in the following ways:`,
                },
            ],
        },
        {
            title: 'Device Information',
            des: [
                {
                    name: `By recognizing your device used to access and use the Company’s website(s), we can provide you with the most appropriate version of our website(s).`,
                },
            ],
        },
        {
            title: 'Log Information',
            des: [
                {
                    name: `Logging certain behaviors on the site enables the company to track user action and therefore troubleshoot any issues that may occur.`,
                },
            ],
        },
        {
            title: 'Location Information',
            des: [
                {
                    name: `Using your IP address helps us localize our website content, which we provide to you based on your country, and improve your user experience on our site(s). For further details about our cookie policy and how our cookies work, read our Privacy Policy.`,
                },
            ],
        },
        {
            title: 'How we Obtain Your Consent',
            des: [
                {
                    name: `If our use of your personal information requires your consent, such consent will be provided in accordance with the express written terms which govern our business relationship (which are available on our website(s), as amended from time time), or any other contract we may have entered into with you or as set out in our communication with you from time to time`,
                },
                {
                    name: `If we rely on your consent as our legal basis for holding and processing your personal information, you have the right to withdraw that consent at any time by contacting us using the contact details set out in this Privacy Policy.`
                },
            ],
        },
        {
            title: 'Storage of Your Personal Information and Retention Period',
            des: [
                {
                    name: `In relation to your personal information, we will hold this for as long as we have a business relationship with you, in a combination of secure computer storage facilities and paper-based files and other records and we take the necessary measures to protect the personal information we hold from misuse, loss, unauthorized access, modification or disclosure.`,
                },
                {
                    name: `When we consider that personal information is no longer necessary for the purpose for which it was collected, we will remove any details that will identify you or we will securely destroy the records. However, we may need to maintain records for a significant period of time (after you cease being our client). For example, we are subject to certain antimoney laundering laws which require us to retain the following, for a period of 5 years after our business relationship with you has ended:`,
                },
                {
                    name: `A copy of the documents we used in order to comply with our customer due diligence obligations;`,
                },
                {
                    name: `Supporting evidence and records of transactions with you and your relationship with us Also, the personal information we hold in the form of a recorded communication, by telephone, electronically, in person or otherwise, will be held in line with local regulatory requirements (i.e., 5 years after our business relationship with you has ended or longer if you have legitimate interests (such as handling a dispute with you). If you have opted out of receiving marketing communications we will hold your details on our suppression list so that we know you do not want to receive these communications.`,
                },
            ],
        },
        {
            title: 'Your Right Regarding Your Personal Information and Access',
            des: [
                {
                    name: `You have the right to request what information we process, along with a copy of that personal information within thirty (30) days from the date of your request. If you require additional copies, we may need to charge an administration fee.`,
                },
            ],
        },
        {
            title: 'Rectification',
            des: [
                {
                    name: `We will take all reasonable steps to make sure that your personal information remains accurate, complete and up-to-date. If the personal information we hold about you is inaccurate or incomplete, you are entitled to have it rectified. If we have disclosed your personal information to others, we will let them know about the rectification where possible. You may inform us at any time that your personal details have changed by emailing us at support@winprofx.com The Company will change your personal information in accordance with your instructions. To proceed with such requests, in some cases we may need supporting documents from you as proof, i.e. personal information that we are required to keep for regulatory or other legal purposes.`,
                },
            ],
        },
        {
            title: 'Erasure',
            des: [
                {
                    name: `You can ask us to delete or remove your personal information in certain circumstances such as if we no longer need it or you withdraw your consent (if applicable) provided that we have no legal obligation to retain that data. Such requests will be subject to any retention limits we are required to comply with in accordance with applicable laws and regulations. If we have disclosed your personal information to others, we will let them know about the erasure where possible.`,
                },
            ],
        },
        {
            title: 'Processing Restrictions',
            des: [
                {
                    name: `You can ask us to ‘block’ or suppress the processing of your personal data in certain circumstances such as if you contest the accuracy of that personal information or object to us processing it. It will not stop us from storing your personal information. We will inform you before we decide not to agree with any requested restriction. If we have disclosed your personal information to others, we will inform you about the restriction if possible.`,
                },
            ],
        },
        {
            title: 'Data Portability',
            des: [
                {
                    name: `Under the General Data Protection Regulation (679/2016), you have the right, in certain circumstances, to obtain personal information you have provided us with (in a structured, commonly used and machine readable format) and to re-use it elsewhere or ask us to transfer this to a third party of your choice.`,
                },
            ],
        },
        {
            title: 'Objection',
            des: [
                {
                    name: `You can ask us to stop processing your personal information, and we will do so, if we are:`,
                },
                {
                    name: `Relying on our own or someone else’s legitimate interests to process your personal information except if we can demonstrate compelling legal grounds for the processing;`,
                },
                {
                    name: `Processing your personal information for direct marketing;`,
                },
                {
                    name: `Processing your personal information for research unless we reasonably believe such processing is necessary or prudent for the performance of a task carried out in the public interest (such as by a regulatory or enforcement agency).`,
                },
            ],
        },
        {
            title: 'Opt-Out of Submitting Your Personal Information',
            des: [
                {
                    name: `If you do not want us to use your personal information, you must inform the Company by sending an email to support@winprofx.com . If you decide to do so, we may not be able to continue to provide information, services and/or products requested by you and we will have no liability to you in this respect.`,
                },
            ],
        },
        {
            title: 'Legal Disclaimer',
            des: [
                {
                    name: `The Company may disclose your personally identifiable information as required by rules and regulations and if the Company believes that disclosure is necessary to protect our rights or to comply with other proceedings, court order, legal process served or pursuant to governmental, intergovernmental or other regulatory bodies. `,
                },
                {
                    name: `The Company is not liable for misuse or loss of personal information or otherwise on the Company’s website(s) that the Company does not have access to or control over. The Company will not be liable for unlawful or unauthorized use of your personal information due to misuse or misplacement of your passwords, negligent or malicious intervention or otherwise by you or due to your acts or omissions or a person authorized by you (whether or to that authorization is permitted by the terms of our legal relationship with you).`
                },
            ],
        },
        {
            title: 'WINPROFX Card Acceptance',
            des: [
                {
                    name: `All credit/debit cards details and personally identifiable information will NOT be stored sold, shared, rented or leased to any third parties`
                },
            ],
        },
        {
            title: 'How to Contact  Us',
            des: [
                {
                    name: `If you have any questions or concerns regarding this Privacy Policy, please email us at <strong>support@winprofx.com</strong> View the <strong>Privacy Policy</strong> for more details.`
                },
            ],
        },
    ]

    return (
        <div className='padding-top-245'>
            <SeoHead
                title="Privacy Policy | WINPROFX"
                description="Read the WINPROFX Privacy Policy to understand how information is collected, used, protected, and managed across WINPROFX websites and portals."
                canonicalPath="/policy"
            />
            <TopShape />
            <PolicyTitle
                as="h1"
                meta="Last Updated: Jun 7, 2024"
                title="Privacy Policy"
            />
            <Container>
                <Card>
                    {info.map((item, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: y + 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.1` }}
                            viewport={{ once: once, amount: 0.2 }}
                            className='flex flex-col mb-6 md:mb-8 lg:mb-10 last:mb-0' key={idx}>
                            <h4 className='text-2xl mb-3 md:mb-4 lg:mb-5 font-medium max-w-max w-full'>{item.title}</h4>
                            {item.des.map((des, i) => (
                                <React.Fragment key={i}>
                                    <p key={i} className='mb-4 md:mb-5 lg:mb-6 last:mb-0 [&>strong]:font-semibold [&>strong]:text-white' dangerouslySetInnerHTML={{ __html: des.name }}></p>
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
                            {item.list &&
                                <div className=" bg-white/2 border border-solid border-white/8 p-4 md:p-6 lg:p-8 rounded-2xl lg:rounded-[20px]">
                                    {item.list.map((l, k) => (
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
                            }
                        </motion.div>
                    ))}
                </Card>
            </Container>
        </div>
    )
}
