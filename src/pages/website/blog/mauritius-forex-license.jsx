import React from 'react'
import { Container } from '@/components/grid'
import SeoHead from '@/components/seo-head'
import Button from '@/components/button'
import DemoCta from '@/components/demo-cta'

import bannerImg from '@/assets/img/blog/highhh.jpeg'
import shape from '@/assets/img/blog/shape.png'

const META_TITLE = 'Mauritius Forex License: Guide for Traders & Brokers 2026'
const META_DESCRIPTION =
  'Learn what a Mauritius Forex License means, how FSC regulation works, key licence categories, and how traders can verify a regulated forex broker in 2026.'
const CANONICAL_PATH = '/mauritius-forex-license'
const DATE_PUBLISHED = '2026-09-08'

const faqs = [
  {
    q: 'What is the Mauritius Forex License?',
    a: 'A Mauritius Forex License is an authorization issued by the Financial Services Commission (FSC) of Mauritius that allows a company to legally offer forex and CFD trading services. It is one of the most recognized regulatory frameworks for online brokers operating internationally.',
  },
  {
    q: 'Who regulates forex brokers in Mauritius?',
    a: 'The Financial Services Commission (FSC) Mauritius is the integrated regulator for the non-bank financial services sector, including forex and CFD brokers. It supervises licence holders and enforces compliance with Mauritius financial services laws.',
  },
  {
    q: 'What licence categories does the FSC Mauritius issue?',
    a: 'The FSC issues several investment-dealer categories relevant to forex and CFD brokers, including Investment Dealer (Full Service Dealer), Investment Dealer (Broker), and Investment Dealer (Discount Broker). Each category carries different permissions and capital requirements.',
  },
  {
    q: 'Is a Mauritius-licensed broker safe to trade with?',
    a: 'FSC-regulated brokers are required to meet capital adequacy requirements, maintain client fund segregation, and comply with anti-money laundering (AML) and Know Your Customer (KYC) rules. However, traders should always verify the broker\'s licence directly on the FSC register before depositing funds.',
  },
  {
    q: 'How can I verify if a forex broker is licensed in Mauritius?',
    a: 'You can verify a broker\'s licence by searching the FSC Mauritius official register at fscmauritius.org. Enter the broker\'s company name or licence number to confirm their regulated status, licence category, and current standing.',
  },
  {
    q: 'Why do many international forex brokers choose Mauritius?',
    a: 'Mauritius offers a well-structured regulatory framework, a favourable tax environment, and a strong international reputation as a financial centre. It provides brokers with the legal framework to serve international clients while maintaining credible oversight.',
  },
  {
    q: 'What protections do traders get under the FSC Mauritius?',
    a: 'FSC-regulated brokers must segregate client funds from company funds, maintain adequate capital buffers, and comply with AML and KYC obligations. While Mauritius does not operate a formal investor compensation scheme like some EU jurisdictions, the regulatory framework requires brokers to handle client assets responsibly.',
  },
  {
    q: 'What is the difference between an offshore and a regulated forex broker?',
    a: 'A regulated broker operates under the supervision of a recognized financial authority such as the FSC Mauritius and must meet specific capital, conduct, and reporting standards. An offshore broker may be incorporated in a jurisdiction with minimal or no regulatory oversight, offering fewer protections to traders.',
  },
]

const licenceCategories = [
  {
    title: 'Investment Dealer (Full Service Dealer)',
    desc: 'The broadest licence category. Allows firms to deal in securities, manage portfolios, and act as an underwriter. Most applicable to full-service forex and CFD brokers serving retail and institutional clients.',
  },
  {
    title: 'Investment Dealer (Broker)',
    desc: 'Permits firms to execute client orders and provide investment advice but with a narrower scope than a Full Service Dealer. Suitable for execution-focused forex brokers.',
  },
  {
    title: 'Investment Dealer (Discount Broker)',
    desc: 'The most restricted category — execution only, no advice. Lowest capital requirement. Often used by platforms offering self-directed access to markets without advisory services.',
  },
]

const verificationSteps = [
  { step: '1', title: 'Visit the FSC Mauritius website', desc: 'Go to fscmauritius.org and navigate to the Licensees section.' },
  { step: '2', title: 'Search by company name or licence number', desc: 'Enter the broker\'s registered company name or their FSC licence number in the search field.' },
  { step: '3', title: 'Confirm licence category and status', desc: 'Check that the licence is active, note the category (Full Service, Broker, Discount), and verify the company name matches what the broker advertises.' },
  { step: '4', title: 'Cross-reference with the broker\'s disclosures', desc: 'A legitimate regulated broker will display their FSC licence number on their website, in their legal documents, and in their terms and conditions.' },
]

const keyRequirements = [
  'Minimum capital requirements depending on licence category',
  'Segregation of client funds from company operating funds',
  'Anti-Money Laundering (AML) and Know Your Customer (KYC) compliance',
  'Annual audited financial statements submitted to the FSC',
  'Appointment of a compliance officer and a money laundering reporting officer',
  'Regular reporting obligations to the FSC Mauritius',
]

export default function MauritiusForexLicense() {
  const schemaFaqItems = faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  }))

  const schemaJson = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: META_TITLE,
        description: META_DESCRIPTION,
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_PUBLISHED,
        author: { '@type': 'Organization', name: 'WINPROFX' },
        publisher: { '@type': 'Organization', name: 'WINPROFX', url: 'https://winprofx.org' },
        image: `https://winprofx.org${CANONICAL_PATH}/banner.png`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: schemaFaqItems,
      },
    ],
  })

  return (
    <>
      <SeoHead
        title={META_TITLE}
        description={META_DESCRIPTION}
        canonicalPath={CANONICAL_PATH}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />

      <div className="padding-top-245 -mt-4 md:mt-0 common-padding">
        <img
          src={shape}
          className="absolute top-0 right-0 max-w-full -z-10 pointer-events-none blur-[140px]"
          alt=""
        />

        <Container>
          {/* Header */}
          <div className="max-w-260 mx-auto mb-8 md:mb-12 lg:mb-16 text-center">
            <span className="inline-block text-xs md:text-sm font-medium text-primary uppercase tracking-widest mb-3 md:mb-4">
              Regulation &amp; Licensing · {DATE_PUBLISHED}
            </span>
            <h1 className="h2 mb-4 md:mb-5 lg:mb-6">{META_TITLE}</h1>
            <p className="text-para text-sm md:text-base lg:text-lg leading-relaxed max-w-200 mx-auto">
              {META_DESCRIPTION}
            </p>
          </div>

          {/* Main card */}
          <div className="rounded-3xl md:rounded-4xl lg:rounded-[40px] bg-white/4 border border-solid border-white/16 p-4 md:p-5 lg:p-6 flex flex-col gap-y-8 md:gap-y-10 lg:gap-y-13">

            {/* Banner image */}
            <div className="bg-white/4 rounded-2xl md:rounded-3xl lg:rounded-[30px] overflow-hidden z-1">
              <img
                src={bannerImg}
                className="w-full h-auto block"
                alt="Mauritius Forex License — What Traders and Brokers Need to Know in 2026"
              />
            </div>

            <div className="flex flex-col gap-y-10 md:gap-y-12 lg:gap-y-16 p-2 pt-0">

              {/* Intro */}
              <section className="flex flex-col gap-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  Why Regulation Matters More Than Ever in 2026
                </h2>
                <p className="text-para leading-relaxed">
                  A strong regulatory framework can make the difference between simply offering financial services and building lasting trust. As the global forex and CFD industry continues to expand, traders and brokers are paying closer attention to where financial companies are licensed, how they are supervised, and what protections exist for market participants.
                </p>
                <p className="text-para leading-relaxed">
                  One jurisdiction attracting increasing attention is <strong className="text-white">Mauritius</strong>.
                </p>
                <p className="text-para leading-relaxed">
                  The country has developed itself as an international financial centre, with the <strong className="text-white">Financial Services Commission (FSC) Mauritius</strong> serving as the integrated regulator for the non-bank financial services sector. Its licensing framework covers several investment-dealer categories relevant to businesses operating across financial markets.
                </p>
                <p className="text-para leading-relaxed">
                  But what does a Mauritius forex licence actually mean, and why does it matter to traders and financial businesses?
                </p>
              </section>

              {/* What is FSC */}
              <section className="flex flex-col gap-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  What Is the Financial Services Commission (FSC) Mauritius?
                </h2>
                <p className="text-para leading-relaxed">
                  The FSC Mauritius is the statutory body responsible for regulating and supervising the non-bank financial services sector in Mauritius. Established under the Financial Services Act 2007, it oversees a broad range of financial activities including securities, investment management, insurance, and global business.
                </p>
                <p className="text-para leading-relaxed">
                  For forex and CFD brokers, the FSC issues investment dealer licences that authorize firms to operate legally and serve international clients. The FSC's mandate includes protecting consumers, ensuring market integrity, and maintaining Mauritius's reputation as a credible financial jurisdiction.
                </p>
                <p className="text-para leading-relaxed">
                  Unlike some offshore jurisdictions that offer minimal oversight, the FSC Mauritius operates a structured compliance framework with ongoing supervision, reporting obligations, and enforcement powers.
                </p>
              </section>

              {/* Licence categories */}
              <section className="flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-3">
                  <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                    FSC Mauritius Licence Categories for Forex Brokers
                  </h2>
                  <p className="text-para leading-relaxed">
                    The FSC issues several investment-dealer licence categories. Each carries different permissions, capital requirements, and operational scope. For forex and CFD brokers, the three most relevant are:
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {licenceCategories.map((cat) => (
                    <div
                      key={cat.title}
                      className="flex flex-col gap-y-3 p-5 md:p-6 rounded-2xl bg-white/4 border border-solid border-white/10"
                    >
                      <h3 className="text-base md:text-lg font-semibold text-white leading-snug">{cat.title}</h3>
                      <p className="text-para text-sm leading-relaxed">{cat.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-para leading-relaxed">
                  The specific licence category determines what services a broker can legally offer. Traders should check not just whether a broker is FSC-regulated, but which category of licence they hold.
                </p>
              </section>

              {/* Key requirements */}
              <section className="flex flex-col gap-y-5">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  What FSC-Licensed Brokers Are Required to Maintain
                </h2>
                <p className="text-para leading-relaxed">
                  Holding an FSC Mauritius licence is not a one-time event. Licence holders are subject to ongoing compliance obligations, which include:
                </p>
                <ul className="flex flex-col gap-y-3">
                  {keyRequirements.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <span className="mt-1.5 size-2 rounded-full bg-primary shrink-0" />
                      <p className="text-para leading-relaxed">{r}</p>
                    </li>
                  ))}
                </ul>
                <p className="text-para leading-relaxed">
                  These requirements ensure that regulated brokers maintain financial stability and handle client funds responsibly throughout their operations.
                </p>
              </section>

              {/* Why Mauritius */}
              <section className="flex flex-col gap-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  Why International Forex Brokers Choose Mauritius
                </h2>
                <p className="text-para leading-relaxed">
                  Mauritius has built a strong reputation as an international business hub for several reasons. Its legal system is based on a hybrid of English common law and French civil law, offering familiarity to both international and regional businesses. The country has signed double taxation agreements with numerous jurisdictions, making it tax-efficient for international financial operations.
                </p>
                <p className="text-para leading-relaxed">
                  From a regulatory standpoint, the FSC framework provides genuine oversight without being as restrictive as Tier-1 jurisdictions like the FCA (UK) or ASIC (Australia). This makes Mauritius an attractive middle ground — credible enough for traders and institutions to take seriously, practical enough for brokers to operate efficiently.
                </p>
                <p className="text-para leading-relaxed">
                  For brokers serving clients across Africa, the Middle East, and Asia, a Mauritius licence often represents the optimal balance between regulatory credibility and operational flexibility.
                </p>
              </section>

              {/* How to verify */}
              <section className="flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-3">
                  <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                    How to Verify a Forex Broker's Mauritius Licence
                  </h2>
                  <p className="text-para leading-relaxed">
                    Before opening an account with any broker claiming FSC Mauritius regulation, traders should take four minutes to verify the licence directly. Here is how:
                  </p>
                </div>
                <div className="flex flex-col gap-y-3">
                  {verificationSteps.map((s) => (
                    <div
                      key={s.step}
                      className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-white/4 border border-solid border-white/10"
                    >
                      <span className="shrink-0 size-8 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">
                        {s.step}
                      </span>
                      <div className="flex flex-col gap-y-1">
                        <h3 className="text-white font-semibold text-sm md:text-base">{s.title}</h3>
                        <p className="text-para text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-para leading-relaxed">
                  Any broker that cannot be found on the FSC register, or whose company name does not match what is displayed on the register, should be treated with caution.
                </p>
              </section>

              {/* Mauritius vs other jurisdictions */}
              <section className="flex flex-col gap-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  Mauritius Regulation vs Other Jurisdictions: What Traders Should Know
                </h2>
                <p className="text-para leading-relaxed">
                  Not all regulatory frameworks offer the same level of protection. Tier-1 regulators such as the FCA (UK), CySEC (EU), and ASIC (Australia) impose stricter leverage limits, negative balance protection requirements, and formal investor compensation schemes.
                </p>
                <p className="text-para leading-relaxed">
                  The FSC Mauritius operates at a different tier. It provides genuine regulatory oversight — brokers must meet capital requirements, segregate funds, and comply with AML rules — but it does not operate a formal investor compensation fund equivalent to what EU regulation provides under MiFID II.
                </p>
                <p className="text-para leading-relaxed">
                  For traders, this means an FSC-regulated broker is meaningfully different from a completely unregulated offshore broker, but the protections are not identical to what a Tier-1 regulated entity would provide. Understanding this distinction helps traders make informed decisions about their broker of choice.
                </p>
              </section>

              {/* WINPROFX note */}
              <section className="p-5 md:p-6 rounded-2xl bg-white/4 border border-solid border-white/10 flex flex-col gap-y-3">
                <h3 className="text-base md:text-lg font-semibold text-white">WINPROFX and Regulatory Compliance</h3>
                <p className="text-para text-sm leading-relaxed">
                  WINPROFX operates within a regulated framework and is committed to transparency, client fund security, and responsible business conduct. Traders are encouraged to review WINPROFX's licensing information, legal documentation, and client fund security disclosures available on the website before opening an account.
                </p>
              </section>

              {/* Risk note */}
              <section className="p-5 md:p-6 rounded-2xl bg-white/4 border border-solid border-white/10">
                <h3 className="text-base font-semibold text-white mb-2">A Note on Risk</h3>
                <p className="text-para text-sm leading-relaxed">
                  Forex and CFD trading involves significant risk of capital loss and is not suitable for every investor. Regulatory oversight does not eliminate trading risk. Traders should carefully consider their objectives, experience level, and risk tolerance before opening a live account. Always trade with capital you can afford to lose.
                </p>
              </section>

              {/* FAQ */}
              <section className="flex flex-col gap-y-5">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  Frequently Asked Questions About the Mauritius Forex License
                </h2>
                <div className="flex flex-col gap-y-4">
                  {faqs.map((faq) => (
                    <div
                      key={faq.q}
                      className="flex flex-col gap-y-2 p-5 md:p-6 rounded-2xl bg-white/4 border border-solid border-white/10"
                    >
                      <h3 className="text-base md:text-lg font-semibold text-white leading-snug">{faq.q}</h3>
                      <p className="text-para text-sm md:text-base leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="flex flex-col items-center text-center gap-y-4 py-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight max-w-150 mx-auto">
                  Trade With a Broker You Can Verify
                </h2>
                <p className="text-para leading-relaxed max-w-150 mx-auto">
                  Regulation is the foundation of a trustworthy trading relationship. If you're looking for a broker with a clear regulatory standing, transparent operations, and a proven track record in execution and withdrawals, WINPROFX is a strong starting point.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                  <Button text="Open Account" animation={false} />
                </div>
              </section>

            </div>
          </div>

          {/* Demo CTA */}
          <div className="mt-8 md:mt-10 lg:mt-13">
            <DemoCta />
          </div>
        </Container>
      </div>
    </>
  )
}
