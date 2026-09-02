import { Container } from '@/components/grid';
import LocalizedLink from '@/components/localized-link';
import Logo from '@/components/logo';
import Social from '@/components/social';
import { duration, once, y } from '@/utilities/animation';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import bg from '@/assets/img/footer-bg.png';
import { footerTrustLegalLinks } from '@/lib/company-registration';
import footer_bg_mobile from '../../assets/img/footer-mobile-bg.png';

export default function Footer() {
  const { t } = useTranslation(['footer', 'common', 'company'])

  // Load WikiLicense badge widget after the anchor is in the DOM
  useEffect(() => {
    const roots = Array.from(document.querySelectorAll('a[data-wl-code][data-wl-style]'))
    if (!roots.length) return

    const tasks = roots.map((root) => ({ style: root.getAttribute('data-wl-style') || '', root }))
    const mountTasks = () => tasks.forEach((task) => window.WikiLicenseShare?.mount(task.style, task.root))

    if (window.WikiLicenseShare && typeof window.WikiLicenseShare.mount === 'function') {
      mountTasks()
      return
    }

    window.__WikiLicenseShareQueue = Array.isArray(window.__WikiLicenseShareQueue)
      ? window.__WikiLicenseShareQueue
      : []
    tasks.forEach((task) => {
      if (!window.__WikiLicenseShareQueue.some((item) => item.root === task.root)) {
        window.__WikiLicenseShareQueue.push(task)
      }
    })

    if (window.__WikiLicenseShareLoading) return
    window.__WikiLicenseShareLoading = true

    const hosts = [
      'bit-web-config.oss-accelerate.aliyuncs.com',
      'fx-web-config.oss-accelerate.aliyuncs.com',
      'resources1.interface003.com/openlicense/js',
    ]
    const load = (index) => {
      if (index >= hosts.length) { window.__WikiLicenseShareLoading = false; return }
      const script = document.createElement('script')
      script.async = true
      script.src = `https://${hosts[index]}/wikilicense.js`
      script.onload = () => { window.__WikiLicenseShareLoading = false; mountTasks() }
      script.onerror = () => { script.remove(); load(index + 1) }
      document.head.appendChild(script)
    }
    load(0)
  }, [])

  const official_domains = [
    { labelKey: 'domains.officialWebsite', url: 'https://winprofx.org/', internal: true },
    { labelKey: 'domains.officialAlternate', url: 'https://winprofx.com/' },
    { labelKey: 'domains.officialUae', url: 'https://winprofx.ae/' },
    { labelKey: 'domains.clientPortal', url: 'https://my.winprofx.org/' },
    { labelKey: 'domains.partnerPortal', url: 'https://partner.winprofx.org/' },
  ]

  const important_links = [
    // { nameKey: 'links.companyProfile', path: '/company-profile/' },
    // { nameKey: 'links.officialDomains', path: '/official-domains/' },
    { nameKey: 'links.riskWarning', path: '/risk-warning/' },
    { nameKey: 'links.contact', path: '/contact/' },
  ]

  const trust_legal_links = footerTrustLegalLinks.map((link) => ({
    name: t(`company:footerTrustLegal.${link.path.replace(/\//g, '')}`, { defaultValue: link.label }),
    path: link.path,
  }))

  const footer_items = [
    {
      titleKey: 'sections.explore',
      links: [
        { nameKey: 'links.home', path: '/' },
        { nameKey: 'links.platform', path: '/platform/' },
        { nameKey: 'links.aboutUs', path: '/about-us/' },
        { nameKey: 'links.about', path: '/about/' },
        // { nameKey: 'links.companyProfile', path: '/company-profile/' },
        { nameKey: 'links.contact', path: '/contact/' },
        // { nameKey: 'links.officialDomains', path: '/official-domains/' },
      ],
    },
    {
      titleKey: 'sections.markets',
      links: [
        { nameKey: 'links.forex', path: '/forex/' },
        { nameKey: 'links.indices', path: '/indices/' },
        { nameKey: 'links.crypto', path: '/crypto/' },
        { nameKey: 'links.metals', path: '/trading/metals/' },
        { nameKey: 'links.commodities', path: '/trading/commodities/' },
        { nameKey: 'links.oil', path: '/trading/oil/' },
      ],
    },
  ]

  const copyright_links = [
    { nameKey: 'links.privacyPolicy', path: '/policy/' },
    { nameKey: 'links.termsConditions', path: '/terms/' },
    { nameKey: 'links.amlPolicy', path: '/aml-policy/' },
    { nameKey: 'links.depositWithdrawPolicy', path: '/deposit-withdraw/' },
    { nameKey: 'links.restrictedCountries', path: '/restricted-countries/' },
    { nameKey: 'links.riskWarning', path: '/risk-warning/' },
    // { nameKey: 'links.legalDocuments', path: '/legal-documents/' },
    { nameKey: 'links.riskDisclosure', path: '/risk-disclosure/' },
  ]

  return (
    <div className='footer relative z-1 overflow-hidden xl:px-9 pt-6 md:pt-0'>
      <img src={bg} className='hidden md:block absolute top-0 left-0 size-full object-cover pointer-events-none -z-10' alt="" />
      <img src={footer_bg_mobile} className='md:hidden absolute top-0 left-0 size-full object-cover pointer-events-none -z-10' alt="" />
      <div className='block w-full h-68 rounded-full bg-primary -z-10 absolute bottom-0 left-0 blur-[400px]' />
      <motion.h4
        initial={{ opacity: 0, scale: 2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: duration, delay: 0.2 }}
        viewport={{ once: once, amount: 0.2 }}
        className='text-center select-none text-[18.5vw] leading-none bg-[linear-gradient(90deg,rgba(2,4,8,1)_0%,rgba(255,255,255,1)_50%,rgba(2,4,8,1)_100%)]'>WINPROFX</motion.h4>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: y }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration, delay: 0.4 }}
          viewport={{ once: once, amount: 0.2 }}
          className="grid grid-cols-2 md:flex flex-wrap justify-between gap-x-6 lg:gap-x-8 xl:gap-x-0 2xl:gap-x-10 gap-y-6 mt-6 md:mt-9 lg:mt-12">
          <div className="flex flex-col gap-y-4 text-center xl:text-start xl:max-w-60 w-full mb-2 md:mb-8 xl:mb-0 col-span-2">
            <Logo className='h-14 mx-auto xl:mx-0' />
            <p>{t('footer:tagline')}</p>
          </div>

          {footer_items.map((item, idx) => (
            <div className="flex flex-col gap-y-4" key={idx}>
              <strong className='block text-base text-white'>{t(`footer:${item.titleKey}`)}</strong>
              <div className="flex flex-col gap-y-4">
                {item.links.map((link, lidx) => (
                  <LocalizedLink to={link.path} className='block text-para text-sm md:text-base leading-tight hover:text-white hover:translate-x-1' key={lidx}>{t(`footer:${link.nameKey}`)}</LocalizedLink>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-y-4 col-span-2">
            <strong className='block text-base text-white'>{t('footer:sections.contactInfo')}</strong>
            <div className="flex flex-col gap-y-4">
              <a target='_blank' href="mailto:support@winprofx.com" className='flex items-center gap-2 text-sm md:text-base leading-normal hover:text-white hover:translate-x-1'>
                support@winprofx.com
              </a>
              <a target='_blank' href="tel:+971 4 447 1894" className='flex items-center gap-2 text-sm md:text-base leading-normal hover:text-white hover:translate-x-1'>
                +971 4 447 1894
              </a>
              <Social />
            </div>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: y }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration, delay: 0.2 }}
          viewport={{ once: once, amount: 0.2 }}
          className="rounded-2xl md:rounded-3xl lg:rounded-[30px] border border-solid border-white/12 bg-white/6 backdrop-blur-lg p-4 md:p-6 lg:p-8 mt-8 lg:mt-10 flex flex-col gap-y-6 md:gap-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col gap-y-3">
              <h2 className="text-xl font-semibold leading-tight text-white">{t('footer:officialWebsite.title')}</h2>
              <p className="text-sm md:text-base leading-normal text-para">
                {t('footer:officialWebsite.description')}
              </p>
              {/* <ul className="text-sm md:text-base leading-normal text-para flex flex-col gap-y-2">
                {official_domains.map((item) => (
                  <li key={item.url}>
                    <span className="text-white">{t(`footer:${item.labelKey}`)}: </span>
                    {item.internal ? (
                      <a href={item.url} className="text-white underline hover:text-primary break-all">
                        {item.url}
                      </a>
                    ) : (
                      <a
                        href={item.url}
                        className="text-white underline hover:text-primary break-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.url}
                      </a>
                    )}
                  </li>
                ))}
              </ul> */}
            </div>

            <div className="flex flex-col gap-y-3">
              <strong className="text-xl font-semibold leading-tight text-white">{t('footer:sections.importantLinks')}</strong>
              <ul className="text-sm md:text-base leading-normal text-para flex flex-col gap-y-2">
                {important_links.map((link) => (
                  <li key={link.path}>
                    <LocalizedLink to={link.path} className="text-white underline hover:text-primary">
                      {t(`footer:${link.nameKey}`)}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-y-3 md:col-span-2 lg:col-span-1">
              <strong className="text-xl font-semibold leading-tight text-white">{t('footer:sections.trustLegal')}</strong>
              <ul className="text-sm md:text-base leading-normal text-para grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {trust_legal_links.map((link) => (
                  <li key={link.path}>
                    <LocalizedLink to={link.path} className="text-white underline hover:text-primary">
                      {link.name}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 border-t border-white/10 pt-6">
            <strong className="text-base md:text-lg font-semibold leading-tight text-white">{t('footer:sections.riskWarning')}</strong>
            <p className="text-sm md:text-base leading-normal text-para">
              {t('common:risk.full')}
            </p>
          </div>

          <div className="flex flex-col gap-y-3 border-t border-white/10 pt-6">
            <strong className='text-xl font-semibold leading-tight text-white'>{t('footer:sections.restrictedRegions')}</strong>
            <p className='text-sm md:text-base leading-normal text-para'>{t('footer:restrictedRegionsText')}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: y }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration, delay: 0.2 }}
          viewport={{ once: once, amount: 0.2 }}
          className="mt-6 md:mt-8 lg:mt-10 flex flex-col md:flex-row flex-wrap items-center justify-center lg:justify-between gap-x-4 lg:gap-x-0 xl:gap-x-6 2xl:gap-x-8 gap-y-1 md:gap-y-2">
          {copyright_links.map((item, idx) => (
            <LocalizedLink to={item.path} className='bg-white/1 backdrop-blur-[100px] border border-white/12 border-solid md:bg-transparent md:border-transparent w-full md:w-max text-center rounded-full min-h-13 md:min-h-auto flex items-center justify-center text-base lg:text-xs xl:text-base leading-tight text-white hover:text-primary hover:-translate-y-0.5' key={idx}>{t(`footer:${item.nameKey}`)}</LocalizedLink>
          ))}
        </motion.div>

        <div className="py-4 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-solid border-white/10 mt-4 md:mt-6">
          {/* WikiLicense / WikiFX verified badge */}
          <div className="flex items-center gap-3">
            <a
              id="4e5847bf-2666-4140-af2e-3e0d46dc8db8"
              href="https://www.wikilicence.com/en/brand/4624849802?wid=4e5847bf-2666-4140-af2e-3e0d46dc8db8"
              target="_blank"
              rel="noopener noreferrer"
              data-wl-code="4624849802"
              data-wl-style="style1"
              aria-label="WINPROFX WikiFX License verification"
            />
          </div>
          <p className="text-center">{t('footer:copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </Container>
    </div>
  )
}
