import React from 'react'
import { Container } from '@/components/grid'
import CommonBanner from '@/components/common-banner'
import CommonTitle from '@/components/common-title'
import TopShape from '@/components/top-shape'
import Button from '@/components/button'
import ButtonTwo from '@/components/buttonTwo'
import SeoHead from '@/components/seo-head'
import { motion } from 'framer-motion'
import { y, duration, once } from '@/utilities/animation'
import banner_bg from '@/assets/img/trade/win-banner-bg.png'
import rewardImg1 from '@/assets/img/trade/reward-img1.png'
import rewardImg2 from '@/assets/img/trade/reward-img2.png'
import rewardImg3 from '@/assets/img/trade/reward-img3.png'
import rewardImg4 from '@/assets/img/trade/reward-img4.png'
import appleAirpods from '@/assets/img/trade/apple_airpods.jpg'
import appleWatch from '@/assets/img/trade/apple_watch.jpg'
import ipad from '@/assets/img/trade/ipad.png'

/* ── DATA ── */
const rewards = [
  { tier: '01', prize: 'Power Bank', lots: '50', emoji: '🔋', accent: '#38bdf8' },
  { tier: '02', prize: 'Apple AirPods', lots: '300', emoji: '🎧', accent: '#22d3ee' },
  { tier: '03', prize: 'Apple Watch', lots: '500', emoji: '⌚', accent: '#0ea5e9' },
  { tier: '04', prize: 'iPad', lots: '1,000', emoji: '📱', accent: '#38bdf8' },
  { tier: '05', prize: 'iPad Pro', lots: '1,500', emoji: '💻', accent: '#7dd3fc' },
  { tier: '06', prize: 'Latest iPhone', lots: '2,000', emoji: '📲', accent: '#bae6fd' },
]

const howItWorks = [
  { step: '01', title: 'Register & Opt In', body: 'Sign up with WinproFX and opt into the Trade to Win program from your first deposit.', icon: '✍️' },
  { step: '02', title: 'Choose Your Tier', body: "Select the reward tier you're aiming for — from a Power Bank all the way to the latest iPhone.", icon: '🎯' },
  { step: '03', title: 'Trade Within 30 Days', body: 'Hit your target trading volume within 30 days. Eligible trades must be held for at least 3 minutes.', icon: '📊' },
  { step: '04', title: 'Claim Your Prize', body: 'Once you reach your volume goal, your reward is confirmed and dispatched to you.', icon: '🏆' },
]

const programDetails = [
  { label: 'Program Period', value: 'March 1, 2025 – May 31, 2026', icon: '📅' },
  { label: 'Trading Timeline', value: '30 days from your start date', icon: '⏱️' },
  { label: 'Eligible Clients', value: 'Retail clients only (IBs excluded)', icon: '👤' },
  { label: 'Minimum Hold Time', value: '3 minutes per qualifying trade', icon: '🔒' },
  { label: 'Excluded Instruments', value: 'Stocks & crypto pairs', icon: '🚫' },
  { label: 'Withdrawals', value: 'Permitted throughout campaign', icon: '✅' },
]

const terms = [
  { title: 'Fair Play', body: 'Any signs of market abuse — including latency arbitrage or manipulative techniques — will result in immediate disqualification.' },
  { title: 'Eligibility Limitations', body: 'Only self-directed individual accounts can participate. Managed accounts or IB-referred accounts are not eligible.' },
  { title: 'Liability Disclaimer', body: "WinproFX is not responsible for any trading losses. This program does not alter participants' risk profiles or investment strategies." },
  { title: 'Dispute Resolution', body: 'Any issues not directly addressed in these terms will be resolved by management in a fair and binding manner.' },
]

/* ── PRODUCT SHOWCASE ── */
function ProductShowcase() {
  const products = [
    { img: rewardImg4, label: 'Power Bank', lots: '50 Lots', accent: '#38bdf8' },
    { img: appleWatch, label: 'Apple Watch', lots: '500 Lots', accent: '#22d3ee' },
    { img: appleAirpods, label: 'Apple AirPods', lots: '300 Lots', accent: '#0ea5e9' },
    { img: ipad, label: 'iPad', lots: '1,000 Lots', accent: '#38bdf8' },
    { img: rewardImg3, label: 'iPad Pro', lots: '1,500 Lots', accent: '#7dd3fc' },
    { img: rewardImg2, label: 'Latest iPhone', lots: '2,000 Lots', accent: '#bae6fd' },
  ]
  return (
    <div className="common-padding pb-0">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: y }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration, delay: 0.1 }}
          viewport={{ once: once, amount: 0.1 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/3 backdrop-blur-2xl p-6 md:p-10"
        >
          {/* top glow line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.4),transparent)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(56,189,248,0.07),transparent)] pointer-events-none" />

          <div className="text-center mb-8 relative">
            <span className="inline-block text-[11px] font-bold tracking-[5px] uppercase text-primary bg-primary/10 border border-primary/25 rounded-full px-4 py-1 mb-4">
              Exclusive Prizes
            </span>
            <h2 className="h2">Win <span className="text-primary">Premium Apple</span> Products</h2>
            <p className="text-para text-sm lg:text-base mt-3 max-w-lg mx-auto leading-normal">
              Trade your way to the top and claim one of six exclusive prizes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative">
            {products.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: duration, delay: i * 0.08 }}
                viewport={{ once: once, amount: 0.2 }}
                className="group flex flex-col items-center rounded-2xl border border-white/8 bg-white/4 p-3 hover:border-primary/30 hover:bg-white/6 transition-all duration-300"
              >
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-[#1A1C20] mb-3 flex items-center justify-center">
                  <img src={p.img} alt={p.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-white font-bold text-xs text-center leading-tight mb-1">{p.label}</p>
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: p.accent }}>{p.lots}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

/* ── REWARD TIERS ── */
function RewardTiers() {
  return (
    <div className="common-padding">
      <Container>
        <CommonTitle
          className="text-start max-w-135 px-3 mb-10 md:mb-12 lg:mb-16"
          subTitle="Reward Tiers"
          subTitleClass="rounded-[100px] border border-white/20 bg-white/[0.06] px-4 py-1 mb-4 inline-block"
          title='Trade More, <span class="text-primary">Win More</span>'
          des="Hit your target lot volume within 30 days to claim your prize. Six tiers, six chances to win — every lot gets you closer."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {rewards.map((r, i) => (
            <motion.div
              key={r.tier}
              initial={{ opacity: 0, y: y }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: duration, delay: i * 0.1 }}
              viewport={{ once: once, amount: 0.2 }}
              className="relative rounded-2xl p-px overflow-hidden bg-linear-0 to-white/20 from-white/0 hover:shadow-2xl hover:shadow-primary/20 transition-shadow duration-300"
            >
              <div className="rounded-2xl p-6 bg-linear-0 to-[#121418] from-[#030509] h-full relative overflow-hidden">
                {/* ghost tier number */}
                <span className="absolute bottom-2 right-3 font-black text-[80px] leading-none select-none pointer-events-none text-white/[0.03]">{r.tier}</span>

                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold tracking-[4px] uppercase" style={{ color: r.accent }}>TIER {r.tier}</span>
                  <span className="text-4xl" style={{ filter: `drop-shadow(0 0 10px ${r.accent}66)` }}>{r.emoji}</span>
                </div>

                <div className="w-11 h-0.5 rounded mb-3" style={{ background: `linear-gradient(90deg,${r.accent},transparent)` }} />

                <h3 className="text-white font-bold text-xl uppercase tracking-wide mb-3">{r.prize}</h3>

                <div className="flex items-baseline gap-1.5">
                  <span className="font-black text-3xl" style={{ color: r.accent }}>{r.lots}</span>
                  <span className="text-xs uppercase tracking-widest text-[#64a8cc]">Lots</span>
                </div>
                <p className="text-xs text-white/40 mt-1">within 30 days</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-xs lg:text-sm text-[#ABACB3] mt-8 px-1 leading-normal">
          <strong className="text-para2 font-normal">Note:</strong> Achieve your target volume within 30 days from opt-in date. Stocks & crypto pairs excluded.
        </p>
      </Container>
    </div>
  )
}

/* ── HOW IT WORKS ── */
function HowItWorksSection() {
  return (
    <div className="common-padding">
      <Container>
        <CommonTitle
          className="text-start max-w-135 mb-10 md:mb-12 lg:mb-16"
          subTitle="Process"
          subTitleClass="rounded-[100px] border border-white/20 bg-white/[0.06] px-4 py-1 mb-4 inline-block"
          title='How It <span class="text-primary">Works</span>'
          des="Getting started is simple. Complete these four steps and you're on your way to winning exclusive Apple rewards."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {howItWorks.map((h, i) => (
            <motion.div
              key={h.step}
              initial={{ opacity: 0, y: y }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: duration, delay: i * 0.1 }}
              viewport={{ once: once, amount: 0.2 }}
              className="rounded-2xl p-px bg-linear-0 to-white/20 from-white/0 hover:shadow-2xl hover:shadow-primary/20 transition-shadow duration-300"
            >
              <div className="rounded-2xl p-6 bg-linear-0 to-[#121418] from-[#030509] h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/20 text-primary font-black text-sm shrink-0">{h.step}</span>
                  <span className="text-2xl" style={{ filter: 'drop-shadow(0 0 6px rgba(56,189,248,0.3))' }}>{h.icon}</span>
                </div>
                <h4 className="text-white font-bold text-base uppercase tracking-wide mb-2">{h.title}</h4>
                <p className="text-para text-sm leading-normal">{h.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* ── PROGRAM CONDITIONS ── */
function ProgramConditions() {
  return (
    <div className="common-padding">
      <Container>
        <CommonTitle
          className="max-w-170 text-center mx-auto mb-10 md:mb-12 lg:mb-16"
          subTitle="Rules & Details"
          subTitleClass="rounded-[100px] border border-white/20 bg-white/[0.06] px-4 py-1 mb-4 inline-block uppercase"
          title='Program <span class="text-primary">Conditions</span>'
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programDetails.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: y }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: duration, delay: i * 0.07 }}
              viewport={{ once: once, amount: 0.2 }}
              className="rounded-2xl p-px bg-linear-0 to-white/20 from-white/0 hover:shadow-2xl hover:shadow-primary/20 transition-shadow duration-300"
            >
              <div className="rounded-2xl p-5 bg-linear-0 to-[#121418] from-[#030509] h-full flex gap-4 items-start">
                <span className="text-2xl shrink-0 mt-0.5" style={{ filter: 'drop-shadow(0 0 5px rgba(56,189,248,0.3))' }}>{d.icon}</span>
                <div>
                  <p className="text-primary font-bold text-[11px] tracking-[3px] uppercase mb-1.5">{d.label}</p>
                  <p className="text-para text-sm leading-normal">{d.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* ── IMPORTANT TERMS ── */
function ImportantTerms() {
  return (
    <div className="common-padding pt-0 max-w-6xl mx-auto">
      <Container>
        <CommonTitle
          className="max-w-160 mb-12"
          subTitle="Legal"
          subTitleClass="rounded-full border border-white/20 bg-white/5 px-4 py-1 mb-4 inline-block uppercase text-xs"
          title='Important <span class="text-primary">Terms</span>'
          des="Please read these terms carefully before participating in the Trade to Win program."
          desClass="max-w-102"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
          {terms.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: duration, delay: i * 0.09 }}
              viewport={{ once: once, amount: 0.2 }}
              className="border-l-2 border-primary/40 pl-6 py-1"
            >
              <h4 className="text-white font-bold text-base uppercase tracking-wide mb-2">{t.title}</h4>
              <p className="text-para text-sm leading-relaxed">{t.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-start gap-4 p-4 lg:p-6 border-l-6 border-[#EA4745] mt-10 bg-[rgba(234,71,69,0.08)] rounded-lg">
          <div className="mt-1 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8.95742 2.0416C9.54075 1.54993 10.4824 1.54993 11.0491 2.0416L12.3658 3.1666C12.6158 3.37493 13.0908 3.54993 13.4241 3.54993H14.8408C15.7241 3.54993 16.4491 4.27493 16.4491 5.15827V6.57493C16.4491 6.90827 16.6241 7.37493 16.8324 7.62493L17.9574 8.9416C18.4491 9.52493 18.4491 10.4666 17.9574 11.0333L16.8324 12.3499C16.6241 12.5999 16.4491 13.0666 16.4491 13.3999V14.8166C16.4491 15.6999 15.7241 16.4249 14.8408 16.4249H13.4241C13.0908 16.4249 12.6241 16.5999 12.3741 16.8083L11.0574 17.9333C10.4741 18.4249 9.53242 18.4249 8.96575 17.9333L7.64909 16.8083C7.39909 16.5999 6.92409 16.4249 6.59909 16.4249H5.14075C4.25742 16.4249 3.53242 15.6999 3.53242 14.8166V13.3916C3.53242 13.0666 3.36575 12.5916 3.15742 12.3499L2.03242 11.0249C1.54909 10.4499 1.54909 9.5166 2.03242 8.9416L3.15742 7.6166C3.36575 7.3666 3.53242 6.89993 3.53242 6.57493V5.1666C3.53242 4.28327 4.25742 3.55827 5.14075 3.55827H6.58242C6.91575 3.55827 7.38242 3.38327 7.63242 3.17493L8.95742 2.0416Z" stroke="#EA4745" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 6.7749V10.7999" stroke="#EA4745" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.99609 13.3335H10.0036" stroke="#EA4745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="max-w-220">
            <p className="text-para text-sm lg:text-base leading-normal mb-4">Trading forex and leveraged products involves significant risk and is not suitable for all investors. Trading may result in losses exceeding your initial investment. Ensure you fully understand the risks involved.</p>
            <a href="/risk-disclosure" className="text-[#EA4745] text-sm lg:text-base leading-normal">Read Full Risk Disclosure →</a>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* ── CTA ── */
function CtaSection() {
  return (
    <div className="common-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: y }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration, delay: 0.2 }}
          viewport={{ once: once, amount: 0.2 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/4 backdrop-blur-2xl p-8 md:p-12 lg:p-16 text-center max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(56,189,248,0.1),transparent)] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.5),transparent)] pointer-events-none" />

          <span className="inline-block text-[11px] font-bold tracking-[5px] uppercase text-primary bg-primary/10 border border-primary/25 rounded-full px-4 py-1 mb-5">
            Ready to compete?
          </span>
          <h2 className="h2 mb-4">
            Every trade brings you closer to <span className="text-primary">exclusive prizes</span>
          </h2>
          <p className="text-para text-sm lg:text-base leading-normal mb-8 max-w-md mx-auto">
            Claim your rewards by trading with WinproFX.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button delay="0.3" to="https://my.winprofx.org/register" text="Start Trading Now" />
            <ButtonTwo delay="0.4" text="View T&C" to="/trading/win-promotion" />
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

/* ── PAGE ── */
export default function TradeToWin() {
  return (
    <>
      <SeoHead
        title="Trade to Win | Exclusive Apple Rewards | WinproFX"
        description="Achieve specific trading volumes within 30 days and unlock exclusive Apple rewards. Power Bank, AirPods, Apple Watch, iPad, and iPhone up for grabs."
        keywords="Trade to Win, WinproFX Rewards, Apple Prizes, Forex Trading Rewards, Trading Promotion"
        canonicalPath="/trading/trade-to-win"
      />
      <TopShape />
      <CommonBanner
        className="3xl:min-h-300!"
        bg={banner_bg}
        meta="WinproFX Exclusive · March – May 2026"
        title="Trade to Win Program"
        des="Achieve specific trading volumes within 30 days and unlock exclusive Apple rewards. The more you trade, the greater the prize."
        desClass="max-w-135 mx-auto"
        // secondButtonText="View T&C"
        secondButtonLink="/trading/win-promotion"
      />

      {/* <ProductShowcase /> */}
      <RewardTiers />
      <HowItWorksSection />
      <ProgramConditions />
      <ImportantTerms />
      {/* <CtaSection /> */}
    </>
  )
}
