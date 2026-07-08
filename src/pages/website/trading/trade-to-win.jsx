import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/grid'
import CommonBanner from '@/components/common-banner'
import CommonTitle from '@/components/common-title'
import TopShape from '@/components/top-shape'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import { motion } from 'framer-motion'
import { y, duration, once } from '@/utilities/animation'
import banner_bg from '@/assets/img/trade/win-banner-bg.png'

const tierVolumes = ['50', '300', '500', '1,000', '1500', '2000']
const tierKeys = ['tier1', 'tier2', 'tier3', 'tier4', 'tier5', 'tier6']
const tierAccents = ['#38bdf8', '#22d3ee', '#0ea5e9', '#38bdf8', '#7dd3fc', '#bae6fd']
const tierEmojis = ['🔋', '🎧', '⌚', '📱', '💻', '📲']
const howStepKeys = ['registerOptIn', 'chooseTier', 'trade30Days', 'claimPrize']
const howStepNumbers = ['01', '02', '03', '04']
const howIcons = ['✍️', '🎯', '📊', '🏆']
const programItemKeys = ['programPeriod', 'tradingTimeline', 'eligibleClients', 'minimumHold', 'excludedInstruments', 'withdrawals']
const programIcons = ['📅', '⏱️', '👤', '🔒', '🚫', '✅']
const termKeys = ['fairPlay', 'eligibility', 'liability', 'dispute']

function RewardTiers({ t, pu, rt }) {
  const rewards = tierKeys.map((key, index) => ({
    tier: String(index + 1).padStart(2, '0'),
    prize: rt(`items.${key}.prize`),
    lots: tierVolumes[index],
    emoji: tierEmojis[index],
    accent: tierAccents[index],
  }))

  return (
    <div className="common-padding">
      <Container>
        <CommonTitle
          className="text-start max-w-135 px-3 mb-10 md:mb-12 lg:mb-16"
          subTitle={t('winPromotion.rewardTiers.subTitle')}
          subTitleClass="rounded-[100px] border border-white/20 bg-white/[0.06] px-4 py-1 mb-4 inline-block"
          title={pu('rewardTiersTitleHtml')}
          des={t('winPromotion.rewardTiers.des')}
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
                <span className="absolute bottom-2 right-3 font-black text-[80px] leading-none select-none pointer-events-none text-white/[0.03]">{r.tier}</span>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold tracking-[4px] uppercase" style={{ color: r.accent }}>{pu('labels.tier')} {r.tier}</span>
                  <span className="text-4xl" style={{ filter: `drop-shadow(0 0 10px ${r.accent}66)` }}>{r.emoji}</span>
                </div>
                <div className="w-11 h-0.5 rounded mb-3" style={{ background: `linear-gradient(90deg,${r.accent},transparent)` }} />
                <h3 className="text-white font-bold text-xl uppercase tracking-wide mb-3">{r.prize}</h3>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-black text-3xl" style={{ color: r.accent }}>{r.lots}</span>
                  <span className="text-xs uppercase tracking-widest text-[#64a8cc]">{pu('labels.lots')}</span>
                </div>
                <p className="text-xs text-white/40 mt-1">{pu('labels.withinDays')}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-xs lg:text-sm text-[#ABACB3] mt-8 px-1 leading-normal">
          <strong className="text-para2 font-normal">{rt('noteLabel')}</strong>{' '}
          {rt('note')}
        </p>
      </Container>
    </div>
  )
}

function HowItWorksSection({ pu }) {
  const section = (key) => pu(`howItWorksSection.${key}`)
  const steps = howStepKeys.map((key, index) => ({
    step: howStepNumbers[index],
    title: section(`steps.${key}.title`),
    body: section(`steps.${key}.body`),
    icon: howIcons[index],
  }))

  return (
    <div className="common-padding">
      <Container>
        <CommonTitle
          className="text-start max-w-135 mb-10 md:mb-12 lg:mb-16"
          subTitle={section('subTitle')}
          subTitleClass="rounded-[100px] border border-white/20 bg-white/[0.06] px-4 py-1 mb-4 inline-block"
          title={section('titleHtml')}
          des={section('des')}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((h, i) => (
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

function ProgramConditions({ pu }) {
  const section = (key) => pu(`programConditionsSection.${key}`)
  const details = programItemKeys.map((key, index) => ({
    label: section(`items.${key}.label`),
    value: section(`items.${key}.value`),
    icon: programIcons[index],
  }))

  return (
    <div className="common-padding">
      <Container>
        <CommonTitle
          className="max-w-170 text-center mx-auto mb-10 md:mb-12 lg:mb-16"
          subTitle={section('subTitle')}
          subTitleClass="rounded-[100px] border border-white/20 bg-white/[0.06] px-4 py-1 mb-4 inline-block uppercase"
          title={section('titleHtml')}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {details.map((d, i) => (
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

function ImportantTerms({ pu, pt }) {
  const section = (key) => pu(`importantTermsSection.${key}`)
  const terms = termKeys.map((key) => ({
    title: section(`items.${key}.title`),
    body: section(`items.${key}.body`),
  }))

  return (
    <div className="common-padding pt-0 max-w-6xl mx-auto">
      <Container>
        <CommonTitle
          className="max-w-160 mb-12"
          subTitle={section('subTitle')}
          subTitleClass="rounded-full border border-white/20 bg-white/5 px-4 py-1 mb-4 inline-block uppercase text-xs"
          title={section('titleHtml')}
          des={section('des')}
          desClass="max-w-102"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
          {terms.map((term, i) => (
            <motion.div
              key={term.title}
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: duration, delay: i * 0.09 }}
              viewport={{ once: once, amount: 0.2 }}
              className="border-l-2 border-primary/40 pl-6 py-1"
            >
              <h4 className="text-white font-bold text-base uppercase tracking-wide mb-2">{term.title}</h4>
              <p className="text-para text-sm leading-relaxed">{term.body}</p>
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
            <p className="text-para text-sm lg:text-base leading-normal mb-4">{pt('riskWarning')}</p>
            <a href="/risk-disclosure" className="text-[#EA4745] text-sm lg:text-base leading-normal">{pt('readFullRiskDisclosure')}</a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function TradeToWin() {
  const { t } = useTranslation('trading')
  const seo = useSeo('tradeToWin')
  const pu = (key) => t(`tradeToWin.${key}`)
  const rt = (key) => t(`promotionUi.rewardTiers.${key}`)
  const pt = (key) => t(`promotionUi.ptConditions.${key}`)

  return (
    <>
      <SeoHead {...seo} canonicalPath="/trading/trade-to-win" />
      <TopShape />
      <CommonBanner
        className="3xl:min-h-300!"
        bg={banner_bg}
        meta={t('winPromotion.meta')}
        title={t('winPromotion.h1')}
        des={t('winPromotion.des')}
        desClass="max-w-135 mx-auto"
        secondButtonLink="/trading/win-promotion"
      />
      <RewardTiers t={t} pu={pu} rt={rt} />
      <HowItWorksSection pu={pu} />
      <ProgramConditions pu={pu} />
      <ImportantTerms pu={pu} pt={pt} />
    </>
  )
}
