import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'

export default function AmlPolicy() {
    const { t } = useTranslation('legal')
  const seo = useSeo('amlPolicy')
  const info = [
        {
            title: null,
            des: [
                {
                    name: 'WINPROFX is committed to the highest standards of compliance against money laundering (AML) and anti-terrorist financing (ATF). The objective of the Companies Policy against Money Laundering and Terrorism Financing is to actively prevent the risks of these matters. To help the government combat the financing of terrorism and money laundering activities, the law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account. We have an obligation to report suspicious client activity relevant to Money laundering.'
                },
            ],
        },
        {
            title: 'Money Laundering:',
            des: [
                {
                    name: 'The process of converting funds received from illegal activities (such as fraud, corruption, terrorism, etc.) into other funds or investments that appear legitimate to hide or distort the actual source of funds'
                },
                {
                    name: 'The Money laundering process can be divided into three sequential stages.'
                },
            ],
        },
        {
            title: 'Placement',
            des: [
                {
                    name: 'Any withdrawal of funds, from your WINPROFX account to a bank account, can only be refunded to the same bank account that the funds were originally received from or any other bank account under client’s individual name. Please note, that the processing time of withdrawals to reach your bank account substantially depends on the currency of the bank account, as well as the location and the internal policies and procedures of the recipient’s financial institution and country. Therefore, please expect the amounts withdrawn to be credited to your bank account within 2 to 7 business days.'
                },
            ],
        },
        {
            title: 'Layers',
            des: [
                {
                    name: 'The funds are transferred or moved to other accounts and other financial instruments. It is done to disguise the origin and interrupt the indication of the entity that carried out the multiple financial transactions. Moving funds and changing their form makes it difficult to track the money that is being laundered.'
                },
            ],
        },
        {
            title: 'Integration',
            des: [
                {
                    name: `The funds are re-circulated as legitimate to purchase goods and services.WINPROFX adheres to the principles of Anti-Money Laundering and actively prevents any action that targets or facilitates the legalization process of illegally obtained funds. The AML policy means preventing the use of the company's services by criminals, with the objective of money laundering, terrorist financing or other criminal activity.`,
                },
                {
                    name: 'To prevent money laundering, WINPROFX does not accept or pay in cash under any circumstances. The company reserves the right to suspend the operation of any client, which may be considered illegal or, in the opinion of the staff, related to money laundering.',
                },
                {
                    name: 'Company procedures WINPROFX will ensure that it is a real or legal person. WINPROFX alsoperforms all the necessary measures in accordance with the applicable laws and regulations, issued by the monetary authorities.',
                },
            ],
        },
        {
            title: 'The AML policy is being met within FX of WINPROFX by the following means',
            des: [
                {
                    ul: [
                        `know your client's policy and due diligence`,
                        `monitor customer activity`,
                        `Registry maintenance`,
                    ],
                    name: `Know Your Customer - Due to the company's commitment to AML and KYC policies, each company customer must complete a verification procedure. Before WINPROFX initiates any cooperation with the client, the company ensures that satisfactory evidence is presented or other measures are taken that produce satisfactory proof of the identity of any client or counterparty. The company also applies increased scrutiny to clients, who are residents of other countries, identified by credible sources as countries, who have inadequate AML standards or who may pose a high risk of crime and corruption and beneficial owners who reside in and whose funds are sourced from named countries. Individual clients During the registration process, each client provides personal information, specifically:<strong>Full name; Birthdate; Country of origin; and Full Residential Address.</strong>`,
                }
            ]
        },
        {
            title: 'The following documents are required to verify personal information',
            des: [
                {
                    name: 'A client submits the following documents (in case the documents are written in non-Latin characters: to avoid delays in the verification process, it is necessary to provide a notarized translation of the document in English ) due to KYC requirements and to confirm the indicated information:'
                },
                {
                    name: `Valid passport (showing the first page of the local or international passport, where the photo and signature are clearly visible); or • Driving license with photograph; or • National identity card (showing the front and back); • Documents proving current permanent address (such as utility bills, bank statements, etc.) containing the customer's Full Name and Place of residence. These documents should not be older than 3 months from the filing date.`
                },
                {
                    name: 'Corporate clients In the event that the applicant company is listed on a recognized or approved stock exchange or when there is independent evidence to show that the applicant is a wholly owned subsidiary or a subsidiary under the control of said company, no further steps will normally be taken to verify the identity. necessary. In the event that the company is not listed and none of the main directors or shareholders already has an account with WINPROFX, the following documentation must be provided:'
                },
                {
                    name: `Certificate of incorporation or any national equivalent; • Memorandum and Articles of Association and statutory declaration or any national equivalent; • Certificate of good standing or other proof of the company's registered address; • Resolution of the board of directors to open an account and grant authority to those who will operate it; • Copies of powers of attorney or other authorities granted by the directors in relation to the company; • Proof of the identity of the directors in case they deal with WINPROFX on behalf of the Client (in accordance with the individual identity verification rules described above); • Proof of identity of the final beneficiary (s) and / or the person (s) under whose instructions the signers of the account are empowered to act (in accordance with the rules of individual identity verification described above).`
                },
                {
                    name: `Tracking customer activity In addition to collecting customer information, WINPROFX continues to monitor the activity of each customer to identify and prevent any suspicious transactions. A suspicious transaction is known as a transaction that is not consistent with the legitimate business of the customer or with the transaction history of the regular customer known by tracking customer activity. WINPROFX has implemented the named transactions monitoring system (both automatic and, if necessary, manual) to prevent criminals from using the company's services.`
                },
                {
                    name: 'Registry maintenance Records must be kept of all transaction data and data obtained for identification purposes, as well as all documents related to money laundering issues (e.g. suspicious activity reporting files, AML account monitoring documentation , etc.). Those records are kept for a minimum of 7 years after the account is closed.'
                },
                {
                    name: 'Measures taken In cases of an attempt to execute transactions that WINPROFX suspects are related to money laundering or other criminal activity, it will proceed in accordance with applicable law and report the suspicious activity to the regulatory authority.'
                },
                {
                    name: `WINPROFX reserves the right to suspend the operation of any client, which may be considered illegal or may be related to money laundering in the opinion of the staff. WINPROFX has full discretion to temporarily block the suspicious customer's account or terminate a relationship with an existing customer.`
                },
                {
                    name: 'For more information you can contact us at support <strong>support@winprofx.com</strong>'
                },
            ],
        },
    ]
    return (
        <div className='padding-top-245'>
            <SeoHead
        {...seo}
        canonicalPath="/aml-policy"
        pageName={t('amlPolicy.h1')}
      />
            <TopShape />
            <PolicyTitle
                as="h1"
                title={t('amlPolicy.h1')}
            />
            <Container>
                <Card>
                    {info.map((item, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.${idx * 2}` }}
                            viewport={{ once: once, amount: 0.2 }}
                            className='flex flex-col mb-6 md:mb-8 lg:mb-10 last:mb-0' key={idx}>
                            {item.title && <h4 className='text-2xl mb-3 md:mb-4 lg:mb-5 font-medium w-full max-w-max'>{item.title}</h4>}
                            {item.des?.map((des, i) => (
                                <React.Fragment key={i}>
                                    {des.ul &&
                                        <div className="flex flex-col gap-y-0.5 mb-4 md:mb-5 lg:mb-6 bg-white/2 border border-solid border-white/8 p-4 md:p-6 lg:p-8 rounded-2xl lg:rounded-[20px]">
                                            {des.ul?.map((uli, ulk) =>
                                                <p key={ulk} className='flex gap-x-2.5 items-start'>
                                                    <span className='block size-1 rounded-full bg-para translate-y-2.5'></span>
                                                    {uli}
                                                </p>
                                            )}
                                        </div>
                                    }
                                    {des.name &&
                                        <p key={i} className='mb-4 md:mb-5 lg:mb-6 last:mb-0 [&>strong]:font-semibold [&>strong]:text-white lg:pr-14' dangerouslySetInnerHTML={{ __html: des.name }}></p>
                                    }
                                </React.Fragment>
                            ))}
                        </motion.div>
                    ))}
                </Card>
            </Container>
        </div>
    )
}
