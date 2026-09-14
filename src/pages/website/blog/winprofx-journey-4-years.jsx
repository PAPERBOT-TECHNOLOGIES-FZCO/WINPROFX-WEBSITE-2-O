import { Container } from '@/components/grid'
import SeoHead from '@/components/seo-head'
import Button from '@/components/button'
import DemoCta from '@/components/demo-cta'

import bannerImg from '@/assets/img/blog/winprofx-journey-4-years-banner.jpg'
import shape from '@/assets/img/blog/shape.png'

const META_TITLE = 'From Vision to Global Markets: The WINPROFX Journey of 4+ Years'
const META_DESCRIPTION =
  'Discover the WINPROFX journey of 4+ years — from early vision to a multi-asset trading environment offering forex, indices, crypto, metals, commodities and oil.'
const CANONICAL_PATH = '/winprofx-journey-4-years'
const DATE_PUBLISHED = '2026-09-14'

const markets = [
  { label: 'Forex',           sub: 'Currency Pairs',  accent: 'from-blue-500/20 border-blue-400/30',     grad: 'bg-linear-to-b' },
  { label: 'Indices',         sub: 'Global Markets',  accent: 'from-violet-500/20 border-violet-400/30', grad: 'bg-linear-to-b' },
  { label: 'Crypto',          sub: 'Digital Assets',  accent: 'from-orange-500/20 border-orange-400/30', grad: 'bg-linear-to-b' },
  { label: 'Metals',          sub: 'Gold & Silver',   accent: 'from-yellow-500/20 border-yellow-400/30', grad: 'bg-linear-to-b' },
  { label: 'Commodities',     sub: 'Soft & Hard',     accent: 'from-green-500/20 border-green-400/30',   grad: 'bg-linear-to-b' },
  { label: 'Oil',             sub: 'Energy Markets',  accent: 'from-rose-500/20 border-rose-400/30',     grad: 'bg-linear-to-b' },
]

const coreValues = [
  { label: 'Advanced Technology',      detail: 'MT5 access across desktop and mobile environments.' },
  { label: 'Client-Focused Service',   detail: 'Support structures and account options built around trader needs.' },
  { label: 'Transparency & Integrity', detail: 'Clear published terms, policies and operational standards.' },
  { label: 'Global Professional Network', detail: 'Partner and IB programmes connecting professionals worldwide.' },
]

const ecosystemItems = [
  'Multi-asset market access',
  'MetaTrader 5 trading technology',
  'Flexible account structures (Standard, Pro, ECN)',
  'Technical analysis resources',
  '21-day MT5 demo experience',
  'Customer support channels',
  'Partner and IB programme',
]

const faqs = [
  {
    q: 'What is WINPROFX?',
    a: 'WINPROFX is a forex and CFD trading brand providing access to multiple financial markets, including forex, indices, crypto, metals, commodities and oil.',
  },
  {
    q: "What is WINPROFX's core vision?",
    a: 'Its current positioning centres on technology, client-focused service, transparency, integrity and access to a broader trading environment.',
  },
  {
    q: 'Which trading platform does WINPROFX provide?',
    a: 'WINPROFX provides access to MetaTrader 5 (MT5) across supported desktop and mobile environments.',
  },
  {
    q: 'What markets can be accessed through WINPROFX?',
    a: 'The website currently lists forex, indices, cryptocurrencies, metals, commodities and oil among its supported market categories.',
  },
  {
    q: 'What is stock index CFD trading?',
    a: 'Stock index CFD trading involves speculating on the price movements of a stock-market index through a CFD rather than owning the underlying shares. As with other leveraged CFD products, it carries significant risk and traders should understand the applicable terms before trading.',
  },
]

export default function WinprofxJourney4Years() {
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
              Company Story · {DATE_PUBLISHED}
            </span>
            <h1 className="h2 mb-4 md:mb-5 lg:mb-6">
              From Vision to Global Markets: The WINPROFX Journey of 4+ Years
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
                alt="From Vision to Global Markets: The WINPROFX Journey of 4+ Years"
              />
            </div>

            <div className="flex flex-col gap-y-10 md:gap-y-12 lg:gap-y-16 p-2 pt-0">

              {/* Intro */}
              <section className="flex flex-col gap-y-4">
                <p className="text-para leading-relaxed">
                  Financial markets never stand still. Currencies move with economic decisions, oil reacts to events thousands of miles away, gold responds to uncertainty, and digital assets can reshape market conversations overnight. Over its <strong className="text-white">4+ year journey</strong>, WINPROFX has evolved alongside these changing markets, building its approach around technology, market access, flexibility and client-focused support.
                </p>
                <p className="text-para leading-relaxed">
                  That philosophy sits at the heart of WINPROFX. From its early vision to its expanding multi-asset trading environment, the WINPROFX story is one of adapting to what modern market participants expect.
                </p>

                {/* Milestone strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
                  {[
                    { stat: '4+',    label: 'Years in Markets' },
                    { stat: '300+',  label: 'Tradable Instruments' },
                    { stat: '6',     label: 'Asset Classes' },
                    { stat: 'MT5',   label: 'Trading Platform' },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-1 p-5 rounded-2xl bg-white/4 border border-white/10 text-center">
                      <span className="text-3xl md:text-4xl font-bold text-white">{item.stat}</span>
                      <span className="text-white/50 text-xs">{item.label}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Where it started */}
              <section className="flex flex-col gap-y-5">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  Where the WINPROFX Idea Started
                </h2>
                <p className="text-para leading-relaxed">
                  The idea behind WINPROFX is rooted in a straightforward question: <em className="text-white/80">What should a modern trading experience look like?</em>
                </p>
                <p className="text-para leading-relaxed">
                  Rather than limiting traders to a single market, WINPROFX has developed around a broader approach to online trading. Today, its platform provides access to multiple categories, including forex, indices, cryptocurrencies, metals, commodities and oil.
                </p>
                <p className="text-para leading-relaxed">
                  This multi-market philosophy reflects how interconnected financial markets have become. Oil is a particularly strong example. A disruption in one major energy-producing region can affect shipping, fuel costs, airlines, manufacturing and consumer prices far beyond that region. The International Energy Agency's 2026 analysis continues to highlight how disruptions to global oil flows can transmit pressure across international markets and economies.
                </p>
                <p className="text-para leading-relaxed">
                  For traders, understanding these connections is becoming just as important as watching an individual chart.
                </p>
                <p className="text-para leading-relaxed text-sm italic">
                  Also Read: <a href="https://winprofx.com/winprofx-best-forex-broker-2026" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">Why Traders Are Choosing WINPROFX as a Top Forex Broker</a>
                </p>
              </section>

              {/* The market is changing */}
              <section className="flex flex-col gap-y-5">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  The Market Is Changing. So Is WINPROFX.
                </h2>
                <p className="text-para leading-relaxed">
                  WINPROFX's vision can be seen through its emphasis on technology, transparency, execution and a client-centric trading environment. Its <a href="https://winprofx.com/about-us" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">About Us</a> page highlights advanced technology, client-focused service, integrity and a global professional network as core elements of its approach. Its core approach is built on four pillars:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {coreValues.map((v) => (
                    <div key={v.label} className="flex flex-col gap-2 p-5 rounded-2xl bg-white/4 border border-white/10">
                      <span className="text-white font-semibold text-sm">{v.label}</span>
                      <span className="text-para text-sm leading-relaxed">{v.detail}</span>
                    </div>
                  ))}
                </div>
                <p className="text-para leading-relaxed">
                  The goal is not to remain static while the financial world changes. It is to keep developing alongside the expectations of traders.
                </p>
              </section>

              {/* Mission */}
              <section className="flex flex-col gap-y-5">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  The Mission: Make Market Access More Practical
                </h2>
                <p className="text-para leading-relaxed">
                  The mission behind WINPROFX is reflected in the way its ecosystem has developed. The brand combines market access, trading technology, account services, educational and analytical resources, customer support and partner opportunities within its wider offering.
                </p>
                <div className="flex flex-col gap-y-2">
                  {ecosystemItems.map((item) => (
                    <div key={item} className="flex items-start gap-3 px-4 py-3 rounded-xl bg-white/4 border border-white/8">
                      <span className="mt-1.5 size-2 rounded-full bg-primary shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-para leading-relaxed">
                  This creates a more complete trading journey — from exploring markets and analysing opportunities to selecting an account and accessing a trading platform.
                </p>
                <p className="text-para leading-relaxed">
                  For someone comparing a <a href="https://winprofx.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">forex broker with responsive customer support</a>, however, it is important to look beyond marketing claims and review the broker's published support channels, policies and applicable terms.
                </p>
              </section>

              {/* Multi-asset */}
              <section className="flex flex-col gap-y-5">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  From One Market to a Multi-Asset Trading Environment
                </h2>
                <p className="text-para leading-relaxed">
                  Today's traders often follow more than one asset class. A currency trader may watch gold. An oil trader may monitor currencies and indices. A crypto participant may also follow broader market sentiment.
                </p>
                <p className="text-para leading-relaxed">WINPROFX reflects this interconnected environment by offering access to:</p>

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

                <p className="text-para leading-relaxed">
                  Its trading environment is also built around MT5, giving users access to charting and trading functionality across supported markets. This evolution is important because the modern trading landscape is increasingly defined by choice.
                </p>
                <p className="text-para leading-relaxed">
                  A trader researching a <a href="https://winprofx.com/crypto" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">BTC trading platform</a>, for example, may also want exposure to traditional markets rather than treating cryptocurrency as an isolated asset class.
                </p>
              </section>

              {/* Global connection */}
              <section className="flex flex-col gap-y-5">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  The Global Market Connection
                </h2>
                <p className="text-para leading-relaxed">
                  Financial markets may look different from one region to another, but the underlying connections are global.
                </p>
                <p className="text-para leading-relaxed">
                  Oil demonstrates this particularly well. Energy supply disruptions can influence transportation and manufacturing costs, while changes in fuel prices can affect businesses and households. The IEA has documented how recent disruptions to oil flows affected product availability, prices and demand across multiple regions.
                </p>
                <p className="text-para leading-relaxed">
                  This interconnectedness is one reason a modern trading environment needs to look beyond a single instrument. WINPROFX's multi-asset structure is designed around that broader market perspective.
                </p>
              </section>

              {/* What comes next — Expo CTA */}
              <section className="flex flex-col gap-y-5">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  What Comes Next for WINPROFX?
                </h2>
                <p className="text-para leading-relaxed">
                  The next chapter is not simply about looking back — it is about continuing to build.
                </p>

                <div className="p-6 md:p-8 rounded-2xl bg-white/4 border border-white/10 flex flex-col gap-y-4">
                  <p className="text-para leading-relaxed">
                    WINPROFX is preparing to meet traders and financial-market professionals at <strong className="text-white">Forex Expo Dubai 2026</strong> on 22–23 September at Dubai World Trade Centre, where the brand will participate as an <strong className="text-white">Elite Sponsor at Booth 155</strong>.
                  </p>
                  <p className="text-para leading-relaxed">
                    If you're attending, don't just read about the next chapter — come and be part of the conversation. The event creates an opportunity for traders, partners and financial professionals to move beyond online interactions and have real conversations about where the industry is heading.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['WINPROFX – Booth 155', 'Elite Sponsor', '22–23 Sep 2026', 'Dubai World Trade Centre'].map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/6 border border-white/10 text-white/70 text-sm">{tag}</span>
                    ))}
                  </div>
                  <a
                    href="https://winprofx.com/winprofx-forex-expo-dubai-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity w-fit"
                  >
                    Discover WINPROFX at Forex Expo Dubai 2026 →
                  </a>                </div>

                <p className="text-para leading-relaxed text-sm">
                  For those researching a <a href="https://winprofx.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">forex trading platform in Dubai</a>, it is also worth remembering that WINPROFX's current website lists the UAE among its restricted regions. Always verify eligibility and applicable jurisdictional restrictions before considering any trading service.
                </p>
              </section>

              {/* Why it matters */}
              <section className="flex flex-col gap-y-5">
                <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  Why the WINPROFX Story Matters
                </h2>
                <p className="text-para leading-relaxed">
                  A trading brand's journey is ultimately measured not only by where it started, but by how it responds to change.
                </p>
                <p className="text-para leading-relaxed">
                  Markets have become increasingly connected. Technology has transformed how traders access information and execute trades. And expectations around transparency, flexibility and support continue to evolve.
                </p>
                <p className="text-para leading-relaxed">
                  WINPROFX's journey reflects this changing environment through its focus on multi-asset access, MT5 technology, account choice and client-oriented services.
                </p>
                <p className="text-para leading-relaxed">
                  The story is still being written, and the next chapter is already moving from the screen to the trading floor at Forex Expo Dubai.
                </p>
              </section>

              {/* Risk warning */}
              <section className="p-5 rounded-2xl bg-white/3 border border-white/8">
                <p className="text-white/50 text-xs leading-relaxed">
                  <strong className="text-white/70">Risk Warning:</strong> Trading forex, CFDs and other leveraged financial products involves significant risk and may not be suitable for all investors. You may lose some or all of your invested capital. Always understand the risks involved and verify that the services are available in your jurisdiction before trading.
                </p>
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
                  Ready to Explore WINPROFX?
                </h2>
                <p className="text-para leading-relaxed max-w-150 mx-auto">
                  Access forex, indices, crypto, metals, commodities and oil through WINPROFX's multi-asset MT5 trading environment.
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
