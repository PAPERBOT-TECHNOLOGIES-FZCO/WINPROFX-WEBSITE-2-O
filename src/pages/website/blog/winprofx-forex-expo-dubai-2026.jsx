import React from 'react'
import { Container } from '@/components/grid'
import SeoHead from '@/components/seo-head'
import Button from '@/components/button'
import DemoCta from '@/components/demo-cta'

import bannerImg from '@/assets/img/blog/forex-expo-dubai-2026-banner.jpg'
import shape from '@/assets/img/blog/shape.png'

const META_TITLE = 'WINPROFX To Take Center Stage as an Elite Sponsor at The Largest Forex Expo in The World'
const META_DESCRIPTION =
  'Meet WINPROFX at Forex Expo Dubai 2026 on 22–23 September. Discover its multi-asset trading solutions and connect with the team at Booth 155.'
const CANONICAL_PATH = '/winprofx-forex-expo-dubai-2026'
const DATE_PUBLISHED = '2026-09-09'

const expoHighlights = [
  { label: 'Event', value: 'Forex Expo Dubai 2026' },
  { label: 'Date', value: '22–23 September 2026' },
  { label: 'Venue', value: 'Dubai World Trade Centre' },
  { label: 'Exhibitors', value: '250+' },
  { label: 'Speakers', value: '150+' },
  { label: 'Global Reach', value: 'Participants from 50+ countries' },
  { label: 'WINPROFX', value: 'Elite Sponsor – Booth 155' },
]

const markets = [
  { label: 'Forex',           sub: 'Currency Pairs',  accent: 'from-blue-500/20 border-blue-400/30',    grad: 'bg-linear-to-b' },
  { label: 'Indices',         sub: 'Global Markets',  accent: 'from-violet-500/20 border-violet-400/30', grad: 'bg-linear-to-b' },
  { label: 'Crypto',          sub: 'Digital Assets',  accent: 'from-orange-500/20 border-orange-400/30', grad: 'bg-linear-to-b' },
  { label: 'Precious Metals', sub: 'Gold & Silver',   accent: 'from-yellow-500/20 border-yellow-400/30', grad: 'bg-linear-to-b' },
  { label: 'Commodities',     sub: 'Soft & Hard',     accent: 'from-green-500/20 border-green-400/30',   grad: 'bg-linear-to-b' },
  { label: 'Oil',             sub: 'Energy Markets',  accent: 'from-rose-500/20 border-rose-400/30',     grad: 'bg-linear-to-b' },
]

const expoBenefits = [
  'Discover emerging trading technologies',
  'Compare platforms and market solutions',
  'Meet brokers and liquidity providers',
  'Build professional partnerships',
  'Learn from industry speakers',
  'Understand changing market trends',
]

const faqs = [
  {
    q: 'Where is WINPROFX at Forex Expo Dubai 2026?',
    a: 'WINPROFX will be at Booth 155 at Forex Expo Dubai 2026, held at Dubai World Trade Centre on 22–23 September 2026.',
  },
  {
    q: 'What is WINPROFX\'s role at Forex Expo Dubai 2026?',
    a: 'WINPROFX is participating as an Elite Sponsor at Forex Expo Dubai 2026, reflecting its commitment to the global trading community and its continued international expansion.',
  },
  {
    q: 'What markets does WINPROFX offer?',
    a: 'WINPROFX provides access to forex, indices, cryptocurrencies, precious metals, commodities and oil — all from a single multi-asset trading environment.',
  },
  {
    q: 'What is Forex Expo Dubai 2026?',
    a: 'Forex Expo Dubai 2026 is one of the region\'s largest financial industry events, bringing together traders, brokers, fintech companies, liquidity providers, and financial professionals from 50+ countries at Dubai World Trade Centre.',
  },
  {
    q: 'How big is the global FX market in 2026?',
    a: 'According to CLS Group\'s July 2026 data, average daily FX trading volume reached approximately $2.66 trillion, representing a 14.7% increase compared with July 2025, supported by higher activity across FX forwards, swaps and spot markets.',
  },
]

export default function WinprofxForexExpoDubai2026() {
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
      },
      { '@type': 'FAQPage', mainEntity: schemaFaqItems },
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
              Events &amp; News · {DATE_PUBLISHED}
            </span>
            <h1 className="h2 mb-4 md:mb-5 lg:mb-6">
              WINPROFX To Take Center Stage as an Elite Sponsor at The Largest Forex Expo in The World.
            </h1>
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
                alt="WINPROFX at Forex Expo Dubai 2026 — Booth 155"
              />
            </div>

            <div className="flex flex-col gap-y-10 md:gap-y-12 lg:gap-y-16 p-2 pt-0">

              {/* Intro */}
              <section className="flex flex-col gap-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  Dubai, Get Ready: WINPROFX Is at Forex Expo Taking Booth 155
                </h2>
                <p className="text-para leading-relaxed">
                  The global Forex market is bigger than ever, and Dubai is once again becoming a meeting point for the people shaping its future.
                </p>
                <p className="text-para leading-relaxed">
                  The global FX market continues to see strong trading activity. According to <a href="https://www.cls-group.com/news/cls-fx-trading-activity-july-2026/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">CLS Group's July 2026 data</a>, average daily FX trading volume reached approximately <strong className="text-white">$2.66 trillion</strong>, representing a <strong className="text-white">14.7% increase</strong> compared with July 2025. The rise was supported by higher activity across FX forwards, swaps and spot markets.
                </p>
                <p className="text-para leading-relaxed">
                  Against this rapidly evolving backdrop, <strong className="text-white">WINPROFX is heading to Forex Expo Dubai 2026 as an Elite Sponsor</strong>, bringing its brand, trading solutions and industry vision to one of the region's biggest financial events.
                </p>

                {/* Event quick-facts */}
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  {[
                    { icon: '📍', text: 'Booth 155' },
                    { icon: '📅', text: '22–23 September 2026' },
                    { icon: '🏛️', text: 'Dubai World Trade Centre' },
                  ].map(item => (
                    <span
                      key={item.text}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/6 border border-white/10 text-white text-sm font-medium"
                    >
                      <span>{item.icon}</span> {item.text}
                    </span>
                  ))}
                </div>
              </section>

              {/* About the expo */}
              <section className="flex flex-col gap-y-5">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  Forex Expo Dubai 2026: Where the Trading Industry Meets
                </h2>
                <p className="text-para leading-relaxed">
                  Forex Expo Dubai 2026 is set to bring together traders, brokers, fintech companies, liquidity providers, investors, technology providers and other financial-market professionals under one roof.
                </p>
                <p className="text-para leading-relaxed">
                  The event's 2026 edition is scheduled across five halls at Dubai World Trade Centre, set to bring together <strong className="text-white">250+ exhibitors</strong> and <strong className="text-white">150+ speakers</strong>, following a previous edition that welcomed more than 20,000 attendees.
                </p>
                <p className="text-para leading-relaxed">
                  The expo's scale reflects the changing nature of financial markets. Trading is no longer limited to traditional forex alone. Digital assets, commodities, CFDs, trading technology and fintech infrastructure are increasingly becoming part of the wider conversation.
                </p>

                {/* Highlights table */}
                <div className="rounded-2xl border border-white/10 overflow-hidden">
                  <div className="grid grid-cols-2 divide-y divide-white/8">
                    {expoHighlights.map((row, idx) => (
                      <React.Fragment key={idx}>
                        <div className={`px-5 py-3.5 text-sm text-white/50 font-medium ${idx % 2 === 0 ? 'bg-white/3' : 'bg-white/2'}`}>{row.label}</div>
                        <div className={`px-5 py-3.5 text-sm text-white font-semibold ${idx % 2 === 0 ? 'bg-white/3' : 'bg-white/2'}`}>{row.value}</div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <p className="text-para leading-relaxed text-sm italic">
                  The official event website also describes Forex Expo Dubai as a global gathering connecting participants from 100+ countries, highlighting the event's international reach.
                </p>
              </section>

              {/* WINPROFX at booth 155 */}
              <section className="flex flex-col gap-y-5">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  WINPROFX Takes the Spotlight at Booth 155
                </h2>
                <p className="text-para leading-relaxed">
                  For WINPROFX, participating as an Elite Sponsor is more than simply having a presence on the exhibition floor.
                </p>
                <p className="text-para leading-relaxed">
                  It is an opportunity to connect with industry professionals, exchange ideas and showcase what the brand is building within today's multi-asset trading environment.
                </p>
                <p className="text-para leading-relaxed">
                  Visitors can find WINPROFX at <strong className="text-white">Booth 155</strong>, where conversations can focus on the evolving expectations of modern traders, technology-driven trading experiences and the growing demand for access to multiple financial markets from a single environment.
                </p>
                <div>
                  <p className="text-para leading-relaxed mb-5">WINPROFX provides access across markets including:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {markets.map((m) => (
                      <div
                        key={m.label}
                        className={`flex flex-col items-center gap-1 py-4 px-3 rounded-2xl border ${m.grad} ${m.accent} to-transparent text-center`}
                      >
                        <span className="text-white text-sm font-semibold leading-snug">{m.label}</span>
                        <span className="text-white/40 text-xs leading-snug">{m.sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-para leading-relaxed">
                  As financial markets continue to evolve, traders are increasingly looking beyond traditional currency pairs. The growth of digital assets has also created greater interest in finding a reliable <a href="https://winprofx.com/crypto/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">crypto trading platform</a> alongside access to established markets.
                </p>
              </section>

              {/* Why events matter */}
              <section className="flex flex-col gap-y-5">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  Why Events Like Forex Expo Dubai Matter
                </h2>
                <p className="text-para leading-relaxed">
                  A large industry event offers something that online platforms cannot completely replicate: direct conversations.
                </p>
                <p className="text-para leading-relaxed">For traders, partners, affiliates and financial professionals, expos create opportunities to:</p>
                <ul className="flex flex-col gap-y-3">
                  {expoBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-1.5 size-2 rounded-full bg-primary shrink-0" />
                      <p className="text-para leading-relaxed">{b}</p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Multi-asset conversation */}
              <section className="flex flex-col gap-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  From Forex to Commodities: A Multi-Asset Conversation
                </h2>
                <p className="text-para leading-relaxed">
                  Modern market participants are not necessarily focused on a single asset class.
                </p>
                <p className="text-para leading-relaxed">
                  Someone researching <a href="https://winprofx.com/trading/commodities" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">commodity trading for beginners</a>, for example, may also want to understand forex, indices or precious metals. Meanwhile, experienced participants may be exploring diversified strategies across currencies, commodities and digital assets.
                </p>
                <p className="text-para leading-relaxed">
                  This is where multi-asset platforms are becoming increasingly relevant. WINPROFX's market offering is designed around this broader approach, giving users access to several financial instruments through its trading environment.
                </p>
                <p className="text-para leading-relaxed">
                  For those exploring commodity trading online, the ability to access different markets from one platform can make the overall trading experience more streamlined.
                </p>
              </section>

              {/* CTA box */}
              <section className="p-6 md:p-8 rounded-2xl bg-white/4 border border-white/10 flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                  <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                    Got Dubai on Your Calendar? Add Booth 155
                  </h2>
                  <p className="text-para leading-relaxed">
                    Dubai has established itself as an important destination for financial services, fintech and international business, and Forex Expo Dubai reflects that momentum.
                  </p>
                  <p className="text-para leading-relaxed">
                    With thousands of industry participants expected to attend, the event offers an ideal environment for meaningful conversations around the future of online trading.
                  </p>
                  <p className="text-para leading-relaxed">
                    For WINPROFX, becoming an Elite Sponsor represents another step in strengthening its international brand presence and connecting with the wider trading community.
                  </p>
                  <p className="text-white font-semibold text-lg mt-2">
                    If you're attending Forex Expo Dubai 2026, don't just walk past Booth 155. Come meet WINPROFX.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 items-center text-sm text-white/60">
                  {['WINPROFX – Booth 155', 'Elite Sponsor', '22–23 September 2026', 'Dubai World Trade Centre'].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/6 border border-white/10">{tag}</span>
                  ))}
                </div>
                <p className="text-para leading-relaxed text-sm">
                  Whether you're exploring trading technology, looking for a <a href="https://winprofx.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">CFD broker in Dubai</a>, interested in market trends or simply want to connect with professionals from across the financial industry, Forex Expo Dubai 2026 promises two days of conversations, ideas and opportunities.
                </p>
                <p className="text-white font-bold text-xl">See you at Booth 155.</p>
              </section>

              {/* FAQ */}
              <section className="flex flex-col gap-y-5">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  Frequently Asked Questions
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

              {/* Bottom CTA */}
              <section className="flex flex-col items-center text-center gap-y-4 py-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight max-w-150 mx-auto">
                  Ready to Start Trading With WINPROFX?
                </h2>
                <p className="text-para leading-relaxed max-w-150 mx-auto">
                  Can't make it to Dubai? You can still experience WINPROFX's multi-asset trading environment from anywhere in the world.
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
