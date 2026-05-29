import React from 'react'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import { motion } from 'framer-motion'
import { y, duration, once } from '@/utilities/animation'
import SeoHead from '@/components/seo-head'

export default function Terms() {
    const info = [
        {
            title: 'Acceptance of Terms',
            des: [
                {
                    name: 'By accessing or using any services or products offered by WinproFX.com (hereinafter referred to as "WinproFX"), you agree to be bound by the terms and conditions outlined in this Trading Platform Agreement. If you do not agree with any part of these terms, please refrain from accessing or using WinproFX services and products.',
                },
                {
                    name: 'This Trading Platform Agreement applies to all users and customers of WinproFX, including both guests and registered users. By accessing or using our platform, you signify your acceptance of this agreement.',
                },
            ],
        },
        {
            title: 'Binding Agreement',
            des: [
                {
                    name: 'By agreeing to this Trading Platform Agreement, you are entering into a legally binding contract with WinproFX.',
                },
                {
                    name: 'You acknowledge and agree that your use of WinproFX services and products constitutes acceptance of this Trading Platform Agreement and any other applicable WinproFX contractual documentation, including but not limited to the General Terms and Conditions.',
                },
            ],
        },
        {
            title: 'Age Requirement',
            des: [
                {
                    name: 'You must be at least eighteen (18) years old or the legal age for entering into legally binding contracts under applicable laws to use WinproFX services and products. By continuing to access or use our platform, you affirm that you meet this age requirement.',
                },
                {
                    name: 'Misrepresentation of your age to gain access to WinproFX services and products is strictly prohibited and constitutes a breach of this Trading Platform Agreement.',
                },
            ],
        },
        {
            title: 'Termination of Agreement',
            des: [
                {
                    name: 'WinproFX reserves the right to terminate this Trading Platform Agreement and deny access to its services and products to any user who violates the terms outlined herein.',
                },
                {
                    name: 'In the event of termination, you must cease all use of WinproFX services and products immediately.',
                },
            ],
        },
        {
            title: 'Modifications to Agreement',
            des: [
                {
                    name: 'WinproFX reserves the right to modify or update this Trading Platform Agreement at any time without prior notice. It is your responsibility to review this agreement periodically for changes.',
                },
                {
                    name: 'Your continued use of WinproFX services and products after any modifications to this Agreement constitutes acceptance of those changes.',
                },
            ],
        },
        {
            title: 'Contact Information',
            des: [
                {
                    name: 'If you have any questions or concerns about this Trading Platform Agreement or WinproFX services and products, please contact <br> us at:  <strong>support@winprofx.com</strong>',
                },
            ],
        },
    ]
    return (
        <div className='padding-top-245'>
            <SeoHead
                title="Terms and Conditions | WINPROFX"
                description="Read the WINPROFX Terms and Conditions for information about website usage, client responsibilities, trading-related services, and important legal terms."
                canonicalPath="/terms"
            />
            <TopShape />
            <PolicyTitle
                as="h1"
                title="Terms & Conditions"
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
                            <h4 className='text-2xl mb-3 md:mb-4 lg:mb-5 font-medium'>{idx + 1}. {item.title}</h4>
                            {item.des.map((des, i) => (
                                <p key={i} className='mb-4 md:mb-5 lg:mb-6 last:mb-0'>{idx + 1}.{i + 1} <span className='[&>strong]:font-semibold [&>strong]:text-white [&>strong]:underline' dangerouslySetInnerHTML={{ __html: des.name }} /></p>

                            ))}
                        </motion.div>
                    ))}
                </Card>
            </Container>
        </div>
    )
}
