import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion'
import SeoHead from '@/components/seo-head'

const contactMethods = [
  {
    label: 'Phone',
    value: '+971 4 447 1894',
    href: 'tel:+97144471894',
    external: true,
  },
  {
    label: 'Email',
    value: 'support@winprofx.com',
    href: 'mailto:support@winprofx.com',
    external: true,
  },
  {
    label: 'WhatsApp',
    value: '+971 4 447 1894',
    href: 'https://wa.me/97144471894',
    external: true,
  },
  {
    label: 'Official Website',
    value: 'winprofx.org',
    href: 'https://winprofx.org',
    external: true,
  },
  {
    label: 'Client Portal',
    value: 'my.winprofx.org',
    href: 'https://my.winprofx.org',
    external: true,
  },
  {
    label: 'Partner Portal',
    value: 'partner.winprofx.org',
    href: 'https://partner.winprofx.org',
    external: true,
  },
]

export default function Contact() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Contact Us | WinProFX"
        description="Contact WinProFX customer support by phone, email, WhatsApp, or live chat. Official support channels for forex and CFD trading inquiries."
        canonicalPath="/contact"
      />
      <TopShape />
      <PolicyTitle meta="Customer Support" title="Contact WinProFX" />
      <Container>
        <Card>
          <motion.div
            initial={{ opacity: 0, y: y + 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: duration, delay: 0.1 }}
            viewport={{ once: once, amount: 0.2 }}
            className="flex flex-col mb-8 md:mb-10"
          >
            <h4 className="text-2xl mb-4 font-medium text-white">Get in Touch</h4>
            <div className="bg-white/2 border border-solid border-white/8 p-4 md:p-6 rounded-2xl lg:rounded-[20px]">
              <p className="text-para mb-4">
                WinProFX provides 24/7 customer support for account inquiries, trading platform assistance,
                deposits, withdrawals, and general questions. Our official website is{' '}
                <a
                  href="https://winprofx.org"
                  className="text-white underline hover:text-primary"
                  rel="noopener noreferrer"
                >
                  winprofx.org
                </a>
                .
              </p>
              <p className="text-para">
                For account login and trading, visit the{' '}
                <a
                  href="https://my.winprofx.org"
                  className="text-white underline hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  client portal at my.winprofx.org
                </a>
                .
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: y + 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: duration, delay: 0.15 }}
            viewport={{ once: once, amount: 0.2 }}
            className="flex flex-col mb-8 md:mb-10"
          >
            <h4 className="text-2xl mb-4 font-medium text-white">Contact Channels</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactMethods.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/2 border border-solid border-white/8 p-4 md:p-6 rounded-2xl lg:rounded-[20px]"
                >
                  <p className="text-primary font-semibold mb-2">{item.label}</p>
                  <a
                    href={item.href}
                    className="text-white text-lg hover:text-primary transition-colors"
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: y + 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: duration, delay: 0.2 }}
            viewport={{ once: once, amount: 0.2 }}
            className="flex flex-col mb-8 md:mb-10"
          >
            <h4 className="text-2xl mb-4 font-medium text-white">Business Hours</h4>
            <div className="bg-white/2 border border-solid border-white/8 p-4 md:p-6 rounded-2xl lg:rounded-[20px]">
              <p className="text-para mb-2">
                <strong className="text-white">Customer Support:</strong> Available 24 hours a day, 7 days a week
              </p>
              <p className="text-para">
                <strong className="text-white">Office Hours (UAE):</strong> Monday – Friday, 09:00 – 18:00 (GST)
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: y + 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: duration, delay: 0.25 }}
            viewport={{ once: once, amount: 0.2 }}
            className="flex flex-col"
          >
            <h4 className="text-2xl mb-4 font-medium text-white">Related Pages</h4>
            <div className="bg-white/2 border border-solid border-white/8 p-4 md:p-6 rounded-2xl lg:rounded-[20px]">
              <ul className="flex flex-col gap-2 text-para">
                <li>
                  <Link to="/company-profile" className="text-white underline hover:text-primary">
                    Company Profile
                  </Link>{' '}
                  — Legal entity and regulatory information
                </li>
                <li>
                  <Link to="/official-domains" className="text-white underline hover:text-primary">
                    Official Domains
                  </Link>{' '}
                  — Verified WinProFX domains and portals
                </li>
                <li>
                  <Link to="/risk-disclosure" className="text-white underline hover:text-primary">
                    Risk Disclosure
                  </Link>{' '}
                  — Trading risks and disclaimers
                </li>
              </ul>
            </div>
          </motion.div>
        </Card>
      </Container>
    </div>
  )
}
