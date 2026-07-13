import { Container } from '@/components/grid';
import LocalizedLink from '@/components/localized-link';
import Logo from '@/components/logo';
import Social from '@/components/social';
import { duration, once, y } from '@/utilities/animation';
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';

import bg from '@/assets/img/footer-bg.png';
import { footerTrustLegalLinks } from '@/lib/company-registration';
import footer_bg_mobile from '../../assets/img/footer-mobile-bg.png';

export default function Footer() {
  const { t } = useTranslation(['footer', 'common', 'company'])

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
              <a target='_blank' rel='noopener noreferrer' href="https://wa.me/97144471894" className='flex items-center gap-2 text-sm md:text-base leading-normal hover:text-white hover:translate-x-1'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_75463)">
                    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#E3E4E9" />
                    <path d="M17.2909 6.70865C16.0424 5.4477 14.3844 4.67439 12.616 4.52823C10.8475 4.38206 9.08506 4.87266 7.64647 5.91153C6.20789 6.95039 5.1879 8.46914 4.77048 10.1938C4.35305 11.9185 4.56568 13.7356 5.37001 15.3173L4.58046 19.1505C4.57227 19.1886 4.57204 19.2281 4.57978 19.2663C4.58752 19.3045 4.60307 19.3408 4.62546 19.3727C4.65826 19.4212 4.70507 19.4586 4.75965 19.4798C4.81423 19.501 4.87398 19.505 4.93091 19.4914L8.68773 18.6009C10.265 19.3849 12.0692 19.5838 13.7794 19.1624C15.4896 18.7409 16.9948 17.7264 18.0272 16.2993C19.0596 14.8723 19.5522 13.1252 19.4174 11.369C19.2826 9.61281 18.529 7.96142 17.2909 6.70865ZM16.1195 16.0577C15.2557 16.9191 14.1434 17.4878 12.9392 17.6835C11.7351 17.8792 10.4999 17.6921 9.40773 17.1487L8.8841 16.8896L6.58091 17.435L6.58773 17.4064L7.06501 15.0882L6.80864 14.5823C6.25059 13.4863 6.05373 12.2418 6.24626 11.0271C6.43879 9.81235 7.01084 8.68972 7.88046 7.82002C8.97315 6.72767 10.4549 6.11402 12 6.11402C13.5451 6.11402 15.0269 6.72767 16.1195 7.82002C16.1289 7.83069 16.1389 7.84071 16.1496 7.85002C17.2287 8.94518 17.8311 10.4226 17.8255 11.9601C17.8199 13.4976 17.2067 14.9705 16.1195 16.0577Z" fill="#020408" />
                    <path d="M15.9153 14.3567C15.633 14.8013 15.1871 15.3454 14.6266 15.4804C13.6448 15.7176 12.138 15.4885 10.263 13.7404L10.2398 13.7199C8.59118 12.1913 8.163 10.919 8.26664 9.90991C8.32391 9.33718 8.80118 8.819 9.20346 8.48082C9.26706 8.42654 9.34247 8.38789 9.42368 8.36797C9.50488 8.34805 9.58962 8.34741 9.67112 8.36609C9.75262 8.38478 9.82861 8.42227 9.89303 8.47558C9.95744 8.52889 10.0085 8.59653 10.0421 8.67309L10.6489 10.0367C10.6883 10.1251 10.703 10.2226 10.6912 10.3187C10.6794 10.4148 10.6417 10.5059 10.5821 10.5822L10.2753 10.9804C10.2094 11.0626 10.1697 11.1626 10.1612 11.2676C10.1527 11.3726 10.1758 11.4777 10.2275 11.5695C10.3994 11.8708 10.8112 12.314 11.268 12.7245C11.7807 13.1881 12.3494 13.6122 12.7094 13.7567C12.8057 13.7961 12.9116 13.8057 13.0134 13.7843C13.1153 13.7629 13.2084 13.7115 13.2807 13.6367L13.6366 13.2781C13.7053 13.2104 13.7907 13.1621 13.8841 13.1381C13.9776 13.1142 14.0757 13.1154 14.1685 13.1417L15.6098 13.5508C15.6893 13.5752 15.7622 13.6175 15.8229 13.6743C15.8836 13.7312 15.9304 13.8012 15.9599 13.879C15.9894 13.9567 16.0007 14.0402 15.9929 14.123C15.9852 14.2058 15.9586 14.2858 15.9153 14.3567Z" fill="#020408" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_75463">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg> {t('common:labels.whatsapp')}
              </a>
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

        <div className="py-4 md:py-6 flex items-center justify-center text-center border-t border-solid border-white/10 mt-4 md:mt-6">
          <p>{t('footer:copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </Container>
    </div>
  )
}
