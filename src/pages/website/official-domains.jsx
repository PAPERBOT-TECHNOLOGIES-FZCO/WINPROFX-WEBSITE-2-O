import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion'
import SeoHead from '@/components/seo-head'

const officialDomains = [
  {
    domain: 'winprofx.org',
    url: 'https://winprofx.org',
    role: 'Primary Official Website',
    description:
      'The main official website of WinProFX. All canonical URLs, SEO authority, and official company information are published on this domain.',
  },
  {
    domain: 'winprofx.com',
    url: 'https://winprofx.com',
    role: 'Official Alternate / Marketing Domain',
    description:
      'An official alternate and marketing domain operated by WinProFX. Content on this domain redirects to winprofx.org for canonical consistency.',
  },
  {
    domain: 'winprofx.ae',
    url: 'https://winprofx.ae',
    role: 'Official UAE / Regional Domain',
    description:
      'The official UAE and regional domain for WinProFX. Content on this domain redirects to winprofx.org for canonical consistency.',
  },
]

const officialPortals = [
  {
    domain: 'my.winprofx.org',
    url: 'https://my.winprofx.org',
    role: 'Client Portal',
    description:
      'The secure client portal for account login, registration, deposits, withdrawals, and account management. This is not a marketing website.',
  },
  {
    domain: 'partner.winprofx.org',
    url: 'https://partner.winprofx.org',
    role: 'Partner Portal',
    description:
      'The official partner and Introducing Broker (IB) portal for WinProFX partners to manage referrals, commissions, and partner accounts.',
  },
]

export default function OfficialDomains() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Official Domains & Portals | WinProFX"
        description="Official list of WinProFX domains and portals. winprofx.org is the primary official website. winprofx.com and winprofx.ae are official alternate domains."
        canonicalPath="/official-domains"
      />
      <TopShape />
      <PolicyTitle
        meta="Official Information"
        title="Official Domains & Portals"
      />
      <Container>
        <Card>
          <motion.div
            initial={{ opacity: 0, y: y + 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: duration, delay: 0.1 }}
            viewport={{ once: once, amount: 0.2 }}
            className="flex flex-col mb-8 md:mb-10"
          >
            <h4 className="text-2xl mb-4 font-medium text-white">About This Page</h4>
            <div className="bg-white/2 border border-solid border-white/8 p-4 md:p-6 rounded-2xl lg:rounded-[20px]">
              <p className="text-para mb-4">
                This page lists all official WinProFX website domains and portals. Use this page to verify
                whether a domain or URL is genuinely operated by WinProFX. Any website or domain not listed
                below is <strong className="text-white">not affiliated</strong> with WinProFX.
              </p>
              <p className="text-para">
                For company details, see our{' '}
                <Link to="/company-profile" className="text-white underline hover:text-primary">
                  Company Profile
                </Link>{' '}
                or{' '}
                <Link to="/contact" className="text-white underline hover:text-primary">
                  Contact
                </Link>{' '}
                page.
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
            <h4 className="text-2xl mb-4 font-medium text-white">Official Website Domains</h4>
            <div className="flex flex-col gap-4">
              {officialDomains.map((item) => (
                <div
                  key={item.domain}
                  className="bg-white/2 border border-solid border-white/8 p-4 md:p-6 rounded-2xl lg:rounded-[20px]"
                >
                  <p className="text-primary font-semibold text-lg mb-1">{item.role}</p>
                  <a
                    href={item.url}
                    className="text-white text-xl font-bold hover:text-primary transition-colors"
                    rel="noopener noreferrer"
                  >
                    {item.domain}
                  </a>
                  <p className="text-para mt-3">{item.description}</p>
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
            <h4 className="text-2xl mb-4 font-medium text-white">Official Portals</h4>
            <div className="flex flex-col gap-4">
              {officialPortals.map((item) => (
                <div
                  key={item.domain}
                  className="bg-white/2 border border-solid border-white/8 p-4 md:p-6 rounded-2xl lg:rounded-[20px]"
                >
                  <p className="text-primary font-semibold text-lg mb-1">{item.role}</p>
                  <a
                    href={item.url}
                    className="text-white text-xl font-bold hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.domain}
                  </a>
                  <p className="text-para mt-3">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: y + 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: duration, delay: 0.25 }}
            viewport={{ once: once, amount: 0.2 }}
            className="flex flex-col"
          >
            <h4 className="text-2xl mb-4 font-medium text-white">Security Notice</h4>
            <div className="bg-white/2 border border-solid border-white/8 p-4 md:p-6 rounded-2xl lg:rounded-[20px]">
              <p className="text-para">
                WinProFX will never ask you to log in through unofficial domains. Always verify the URL
                before entering your credentials. The client portal is exclusively at{' '}
                <a
                  href="https://my.winprofx.org"
                  className="text-white underline hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  my.winprofx.org
                </a>
                . If you encounter a suspicious website claiming to represent WinProFX, please{' '}
                <Link to="/contact" className="text-white underline hover:text-primary">
                  contact us
                </Link>{' '}
                immediately.
              </p>
            </div>
          </motion.div>
        </Card>
      </Container>
    </div>
  )
}
