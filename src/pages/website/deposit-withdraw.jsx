import React from 'react'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import SeoHead from '@/components/seo-head'

export default function DepositWithdraw() {
    const info = [
        {
            title: null,
            des: [
                {
                    name: `Winpro fx limited (hereafter referred to as “winpro fx ltd”, “winpro”, ‘us’, ‘we’ and ‘our’), is Incorporated under the laws of saint lucia with registered address 1st floor, the sotheby Building,rodney bay, gros-islet,saint lucia p.O box 838,castries, saint lucia.. The company is a Licensed money brokerage reputed by labuan financial services authority.`,
                },
            ],
        },
        {
            title: 'Processing of Your Personal Information',
            des: null,
            list: [
                {
                    title: 'Deposit',
                    des: [
                        {
                            name: `When depositing by a Bank Transfer, you are required to use only a bank account, which is in your name which should exactly match the name of the trading account. An authentic SWIFT confirmation or a Wire Transfer Confirmation, showing the origin of the funds, must be sent to our team once requested. Failure to submit the confirmation may result in the return of the deposited amount, hence preventing such pending amounts from being deposited to your Winpro FX Limited.`,
                        }
                    ]
                },
                {
                    title: 'Withdrawals',
                    des: [
                        {
                            name: `Any withdrawal of funds, from your WinproFX account to a bank account, can only be refunded to the same bank account that the funds were originally received from or any other bank account under client’s individual name. Please note, that the processing time of withdrawals to reach your bank account substantially depends on the currency of the bank account, as well as the location and the internal policies and procedures of the recipient’s financial institution and country. Therefore, please expect the amounts withdrawn to be credited to your bank account within 2 to 7 business days.`,
                        }
                    ]
                },
            ]
        },
        {
            title: 'Credit/ Debit Cards',
            des: null,
            list: [
                {
                    title: 'Deposit',
                    des: [
                        {
                            name: `Credit/ Debit card deposits may be performed, according to the card companies' regulations. Credit or Debit card deposits are processed instantly in case there is no need for additional verification`,
                        }
                    ]
                },
                {
                    title: 'Withdrawals',
                    des: [
                        {
                            name: `When a withdrawal is performed the amounts withdrawn will be returned to the same card used earlier for depositing. Winpro FX cannot process the withdrawals made to any different Card number or Card holder.`,
                        },
                        {
                            name: `We are not liable for any transfer delays you may experience due to a disruption of service in the system of the payment processor. Winpro FX reserves the right to ask you to upload a scanned color copy or photos of both the front and back pages of your card. It is advised that you only leave the first 4 and last 4 digits of your card number visible in the image, and also cover the CVV number from the back of your credit card. Please note that for cards that don’t show cardholder name, we may require from the Client a documental proof of card ownership, such as a confirmation letter or a Statement by the card issuer.`,
                        },
                        {
                            name: `The company takes extreme precautions when dealing with security alerts for credit card payments in order to protect our and our clients' financial integrity. For this reason, although we strive to credit our clients' Credit/Debit card deposits as soon as possible, we do not undertake nor promise or ensure immediate crediting after depositing, as in some cases additional verification of payments is likely to be performed.`,
                        },
                        {
                            name: `In some rare cases if your card does not belong to CFT/OCT programs, by which your card issuer allows withdrawals above the deposited amount, we will not be able to process the transaction. In this case you may withdraw your funds via bank transfer instead. Winpro FX cannot determine if your card belongs to this program and accepts such transactions until we receive your withdrawal request. You should consult with your card issuer for any further information.`,
                        },
                    ]
                },
                {
                    title: 'Electronic Payment Methods',
                    des: [
                        {
                            name: `When depositing funds using these facilities, you agree to, and acknowledge being bound by, the regulations and rules of such service, including, but not limited to, fees and other restrictions. When a withdrawal is requested, this may be performed only via the same payment method clients use when initially depositing to your trading account.`,
                        },
                        {
                            name: `Using electronic payment facilities as a means of transferring funds is at the discretion of each client and we recommends that all policies and procedures regarding transfer, transaction limits, fees, etc. are clearly understood by the client prior to the opening of an account or using their services.`,
                        },
                    ]
                },
                {
                    title: 'General Conditions',
                    des: [
                        {
                            name: `All withdrawal requests are processed from Monday to Friday between 9am to 6pm Labuan timing. All requests received outside of these hours will be processed on the next business day.`,
                        },
                        {
                            name: `Funds deposit and withdrawal is only available for clients who have been identified and assessed by Winpro FX, and their contact details are confirmed. Clients would be required to upload their supporting documents, such as a Photo ID and a Proof of an Address, and have their trading account verified in order to have their funds deposited for trading.`,
                        },
                        {
                            name: `Please note that Winpro FX is legally required to return any Client’s deposits made into an unverified trading accounts in case the verification procedures are not completed within 15 days from the first deposit date.`,
                        },
                        {
                            name: `Please note that Winpro FX is legally required to return any Client’s deposits made into an unverified trading accounts in case the verification procedures are not completed within 15 days from the first deposit date.`,
                        },
                        {
                            name: `Winpro FX reserves the right to impose withdrawal limits and withdrawal fees in its system.`,
                        },
                        {
                            name: `Winpro FX cannot accommodate withdrawal requests for floating trading profits. A trading position will need to be closed before any profits attributed to it may be withdrawn.`,
                        },
                    ]
                },
                {
                    title: 'No Third-Party Payments are allowed under any circumstances.',
                    des: [
                        {
                            name: `This policy protects both us, and our clients against fraud and money laundering as Winpro FXonly transfers funds back to the source of the original deposit. Winpro FX, at its sole discretion, may execute withdrawals to a facility other than the facility used for the original deposit.`,
                        },
                        {
                            name: `Winpro FX reserves the right to require the client withdrawal method on the Winpro FX’s discretion.`,
                        },
                        {
                            name: `Clients shall request, under all circumstances, to withdraw funds from their trading accounts inthe currency in which the deposit was originally made. Should the deposit currency differ from the transfer currency, the transfer amount will be converted by Winpro FX into the transfer currency.`,
                        },
                    ]
                },
                {
                    title: 'REFUND Conditions:',
                    des: [
                        {
                            name: `Winpro FX provide clients with a clear and transparent refund policy. In cases, where clients are not satisfied with the Company’s service level and did not make trading, investing, conversiontransactions, the Client can request a refund. The Company offers a 100% refund within 1 working day of the original service deposit. The request will be reviewed within 5 business days. After one day, deposit will no longer be refundable and will be treated as normal withdrawal based on the existing withdrawal terms and conditions.`,
                        },
                        {
                            name: `The Client agree not to request for a refund or chargeback from its payment method provider at any time while or after using the Company’s services.`,
                        },
                        {
                            name: `Profits or losses received as a result of the Client’s trading activity cannot be subject to refund request.`,
                        },
                        {
                            name: `Refunds should be made only to the payment system bank account / card client used to deposit.`,
                        },
                        {
                            name: `If the origins of the Client’s funds and/or the whole activities are contrary to the Company’s Anti – Money Laundering Policy (AML Policy), the Company reserves unilateral rights to cancel transferring of funds (deposit or withdraw) and freeze the assets to refund them back.`,
                        },
                    ]
                },
                {
                    title: 'REFUND Conditions:',
                    des: [
                        {
                            name: `Winpro FX provide clients with a clear and transparent refund policy. In cases, where clients are not satisfied with the Company’s service level and did not make trading, investing, conversiontransactions, the Client can request a refund. The Company offers a 100% refund within 1 working day of the original service deposit. The request will be reviewed within 5 business days. After one day, deposit will no longer be refundable and will be treated as normal withdrawal based on the existing withdrawal terms and conditions.`,
                        },
                        {
                            name: `The Client agree not to request for a refund or chargeback from its payment method provider at any time while or after using the Company’s services.`,
                        },
                        {
                            name: `Profits or losses received as a result of the Client’s trading activity cannot be subject to refund request.`,
                        },
                        {
                            name: `Refunds should be made only to the payment system bank account / card client used to deposit.`,
                        },
                        {
                            name: `If the origins of the Client’s funds and/or the whole activities are contrary to the Company’s Anti – Money Laundering Policy (AML Policy), the Company reserves unilateral rights to cancel transferring of funds (deposit or withdraw) and freeze the assets to refund them back.`,
                        },
                    ]
                },
                {
                    title: 'Dispute',
                    des: [
                        {
                            name: `Any dispute arising with or in connection to any of the terms and conditions of the WithdrawalPolicy shall be dealt by the Company as per the Company’s Complaint handling policy, which is available on the Company’s website.`,
                        },
                        {
                            name: `All complaints must be in writing and addressed to the Customer Support team of the Company via email <br /> at <strong>support@winprofx.com</strong>`,
                        },
                        {
                            name: `Please note that this policy cannot be exhaustive, and additional conditions or requirements may apply at any time due to regulations and policies, including those set-in order to prevent money laundering. Any and all usage of the site and services is subject to the Terms and Conditions, as may be amended from time to time by Winpro FX, at its sole discretion.`,
                        },
                        {
                            name: `View the <strong>Deposit & Withdrawal Policy</strong> for more details.`,
                        },
                    ]
                },
            ]
        },
    ]
    return (
        <div className='padding-top-245'>
            <SeoHead
                title="Deposit & Withdrawal Policy | WinproFX"
                description="Understand WinproFX's Deposit & Withdrawal Policy for secure transactions. Learn our procedures and terms for managing your funds efficiently. Click to view details!"
                canonicalPath="/deposit-withdraw"
            />
            <TopShape />
            <PolicyTitle
                as="h1"
                title="Deposit & Withdrawal Policy"
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
                            {item.title &&
                                <h4 className='text-2xl mb-3 md:mb-4 lg:mb-5 font-medium max-w-max w-full'>{item.title}</h4>
                            }
                            {item.des?.map((des, i) => (
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
                                <div className=" bg-white/2 border border-solid border-white/8 p-4 md:p-5 lg:p-6 rounded-2xl lg:rounded-[20px]">
                                    {item.list.map((l, k) => (
                                        <div className='flex flex-col mb-6 md:mb-8 lg:mb-10 last:mb-0' key={k}>
                                            <h4 className='text-lg leading-tight font-semibold mb-3 md:mb-4 lg:mb-5 max-w-max w-full'>{l.title}</h4>
                                            {l.des.map((ldes, li) => (
                                                <React.Fragment key={li}>
                                                    <p key={li} className='mb-4 md:mb-5 lg:mb-6 last:mb-0 [&>strong]:font-semibold [&>strong]:text-white [&>strong]:underline' dangerouslySetInnerHTML={{ __html: ldes.name }} />
                                                    {ldes.ul &&
                                                        <div className="flex flex-col gap-y-0.5 pl-2 -mt-2">
                                                            {ldes.ul?.map((uli, ulk) =>
                                                                <p key={ulk} className='flex gap-x-2.5 items-start'>
                                                                    <span className='block size-1 rounded-full bg-para translate-y-2.5'></span>
                                                                    <span dangerouslySetInnerHTML={{ __html: uli.name }}></span>
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
