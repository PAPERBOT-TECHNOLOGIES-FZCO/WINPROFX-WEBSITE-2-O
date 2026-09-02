import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'

export default function Contact() {
  const { t } = useTranslation('trading')
  const seo = useSeo('contact')

  const contactMethods = [
    { labelKey: 'supportEmail', value: 'support@winprofx.com', href: 'mailto:support@winprofx.com', external: true },
    { labelKey: 'phone', value: '+971 4 447 1894', href: 'tel:+97144471894', external: true },
    { labelKey: 'officialWebsite', value: 'winprofx.org', href: 'https://winprofx.org/', external: true },
    { labelKey: 'clientPortal', value: 'my.winprofx.org', href: 'https://my.winprofx.org/', external: true },
    { labelKey: 'partnerPortal', value: 'partner.winprofx.org', href: 'https://partner.winprofx.org/', external: true },
  ]

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/contact"
        pageName={t('contact.h1')}
      />
      <TopShape />
      <PolicyTitle as="h1" meta={t('contact.meta')} title={t('contact.h1')} />
      <Container>
        <Card>
          <IdentitySection title={t('contact.sections.getInTouch')}>
            <p className="mb-4">
              {t('contact.introP1')}{' '}
              <a href="https://winprofx.org/" className="text-white underline hover:text-primary" rel="noopener noreferrer">
                https://winprofx.org/
              </a>
              .
            </p>
            <p>
              {t('contact.introP2Start')}{' '}
              <a href="https://my.winprofx.org/" className="text-white underline hover:text-primary" target="_blank" rel="noopener noreferrer">
                {t('contact.introP2ClientPortal')}
              </a>
              . {t('contact.introP2Middle')}{' '}
              <a href="https://partner.winprofx.org/" className="text-white underline hover:text-primary" target="_blank" rel="noopener noreferrer">
                {t('contact.introP2PartnerPortal')}
              </a>
              .
            </p>
          </IdentitySection>

          <IdentitySection title={t('contact.sections.contactChannels')}>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactMethods.map((item) => (
                <li
                  key={item.labelKey}
                  className="bg-white/2 border border-solid border-white/8 p-4 md:p-5 rounded-xl"
                >
                  <p className="text-primary font-semibold mb-2">{t(`contact.labels.${item.labelKey}`)}</p>
                  <a
                    href={item.href}
                    className="text-white text-lg hover:text-primary transition-colors"
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title={t('contact.sections.businessHours')}>
            <p>
              <strong className="text-white">{t('contact.customerSupport')}</strong> {t('contact.customerSupportHours')}
            </p>
            <p className="mt-2">
              <strong className="text-white">{t('contact.officeHours')}</strong> {t('contact.officeHoursValue')}
            </p>
          </IdentitySection>

          <IdentitySection title={t('contact.sections.contactRiskLegal')}>
            <p>
              {t('contact.riskLegalP1Start')}{' '}
              <Link to="/risk-warning/" className="text-white underline hover:text-primary">
                {t('contact.riskWarningLink')}
              </Link>{' '}
              {t('contact.riskLegalP1Middle')}{' '}
              <Link to="/legal-documents/" className="text-white underline hover:text-primary">
                {t('contact.legalDocumentsLink')}
              </Link>
              . {t('contact.riskLegalP1End')}
            </p>
            <p className="mt-4">
              {t('contact.officialDomainsNote')}{' '}
              <Link to="/official-domains/" className="text-white underline hover:text-primary">
                {t('contact.officialDomainsLink')}
              </Link>{' '}
              {t('contact.officialDomainsEnd')}
            </p>
          </IdentitySection>

          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
