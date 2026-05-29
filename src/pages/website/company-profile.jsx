import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion'
import SeoHead from '@/components/seo-head'

const companyDetails = [
  {
    title: 'Company Name',
    content: 'WinproFX Limited (trading as WinProFX)',
  },
  {
    title: 'Primary Official Website',
    content: 'https://winprofx.org',
  },
  {
    title: 'Official Alternate Domains',
    content: 'winprofx.com (marketing), winprofx.ae (UAE/regional)',
  },
  {
    title: 'Regulatory Status',
    content:
      'WinproFX is regulated by the Financial Services Commission of the Republic of Mauritius and holds an Investment Dealer license to provide financial services.',
  },
  {
    title: 'Services Offered',
    content:
      'Forex, Indices, Cryptocurrencies, Metals, Commodities, and Oil trading via MetaTrader 5 (MT5) and web trading platforms.',
  },
  {
    title: 'Client Portal',
    content: 'https://my.winprofx.org — Secure login, registration, and account management',
  },
  {
    title: 'Partner Portal',
    content: 'https://partner.winprofx.org — Introducing Broker and partner program management',
  },
]

const legalDocuments = [
  { name: 'Privacy Policy', path: '/policy' },
  { name: 'Terms & Conditions', path: '/terms' },
  { name: 'AML Policy', path: '/aml-policy' },
  { name: 'Deposit & Withdrawal Policy', path: '/deposit-withdraw' },
  { name: 'Risk Disclosure', path: '/risk-disclosure' },
  { name: 'Restricted Countries', path: '/restricted-countries' },
]

export default function CompanyProfile() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Company Profile | WinProFX"
        description="Official WinProFX company profile. WinproFX Limited is a regulated forex and CFD broker. Primary website: winprofx.org."
        canonicalPath="/company-profile"
      />
      <TopShape />
      <PolicyTitle meta="Official Entity Information" title="WinProFX Company Profile" />
      <Container>
        <Card>
          <motion.div
            initial={{ opacity: 0, y: y + 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: duration, delay: 0.1 }}
            viewport={{ once: once, amount: 0.2 }}
            className="flex flex-col mb-8 md:mb-10"
          >
            <h4 className="text-2xl mb-4 font-medium text-white">About WinProFX</h4>
            <div className="bg-white/2 border border-solid border-white/8 p-4 md:p-6 rounded-2xl lg:rounded-[20px]">
              <p className="text-para mb-4">
                WinProFX (WinproFX Limited) is an award-winning forex and CFD broker providing advanced
                trading platforms, competitive spreads, and 24/7 customer support to traders worldwide.
                Our primary official website is{' '}
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
                WinProFX operates with a commitment to transparency, client-centric service, and regulatory
                compliance. We offer access to over 300 tradable instruments across global markets.
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
            <h4 className="text-2xl mb-4 font-medium text-white">Company Details</h4>
            <div className="flex flex-col gap-4">
              {companyDetails.map((item) => (
                <div
                  key={item.title}
                  className="bg-white/2 border border-solid border-white/8 p-4 md:p-6 rounded-2xl lg:rounded-[20px]"
                >
                  <p className="text-primary font-semibold mb-2">{item.title}</p>
                  <p className="text-para">{item.content}</p>
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
            <h4 className="text-2xl mb-4 font-medium text-white">Contact Information</h4>
            <div className="bg-white/2 border border-solid border-white/8 p-4 md:p-6 rounded-2xl lg:rounded-[20px]">
              <ul className="flex flex-col gap-2 text-para">
                <li>
                  <strong className="text-white">Phone:</strong>{' '}
                  <a href="tel:+97144471894" className="text-white underline hover:text-primary">
                    +971 4 447 1894
                  </a>
                </li>
                <li>
                  <strong className="text-white">Email:</strong>{' '}
                  <a
                    href="mailto:support@winprofx.com"
                    className="text-white underline hover:text-primary"
                  >
                    support@winprofx.com
                  </a>
                </li>
                <li>
                  <strong className="text-white">Region:</strong> Dubai, UAE (serving global markets including
                  India and GCC countries)
                </li>
              </ul>
              <p className="text-para mt-4">
                <Link to="/contact" className="text-white underline hover:text-primary">
                  View full contact page →
                </Link>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: y + 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: duration, delay: 0.25 }}
            viewport={{ once: once, amount: 0.2 }}
            className="flex flex-col mb-8 md:mb-10"
          >
            <h4 className="text-2xl mb-4 font-medium text-white">Legal Documents</h4>
            <div className="bg-white/2 border border-solid border-white/8 p-4 md:p-6 rounded-2xl lg:rounded-[20px]">
              <ul className="flex flex-col gap-2">
                {legalDocuments.map((doc) => (
                  <li key={doc.path}>
                    <Link to={doc.path} className="text-white underline hover:text-primary">
                      {doc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: y + 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: duration, delay: 0.3 }}
            viewport={{ once: once, amount: 0.2 }}
            className="flex flex-col"
          >
            <h4 className="text-2xl mb-4 font-medium text-white">Official Domains</h4>
            <div className="bg-white/2 border border-solid border-white/8 p-4 md:p-6 rounded-2xl lg:rounded-[20px]">
              <p className="text-para mb-4">
                For a complete list of verified WinProFX domains and portals, visit our{' '}
                <Link to="/official-domains" className="text-white underline hover:text-primary">
                  Official Domains
                </Link>{' '}
                page.
              </p>
            </div>
          </motion.div>
        </Card>
      </Container>
    </div>
  )
}
