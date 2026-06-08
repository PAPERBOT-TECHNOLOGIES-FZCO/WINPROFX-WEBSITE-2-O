import React from 'react'
import { useTranslation } from 'react-i18next'
import LocalizedLink from '@/components/localized-link'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'

const SERVICE_KEYS = ['forexCfd', 'platformTools', 'clientPortal', 'partnerProgram', 'support']

export default function About() {
  const { t } = useTranslation('trading')
  const { t: tCommon } = useTranslation('common')
  const seo = useSeo('about')

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/about"
        pageName={t('about.h1')}
      />
      <TopShape />
      <PolicyTitle as="h1" meta={t('about.meta')} title={t('about.h1')} />
      <Container>
        <Card>
          <IdentitySection title={t('about.sections.whatIsWinprofx')}>
            <p>{t('about.whatIsBody')}</p>
            <p className="mt-4">
              The main official website is{' '}
              <a href="https://winprofx.org/" className="text-white underline hover:text-primary" rel="noopener noreferrer">
                https://winprofx.org/
              </a>
              .
            </p>
          </IdentitySection>

          <IdentitySection title={t('about.sections.servicesProvided')}>
            <ul className="flex flex-col gap-2 list-disc pl-5">
              {SERVICE_KEYS.map((key) => (
                <li key={key}>{t(`about.services.${key}`)}</li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title={t('about.sections.officialDomains')}>
            <p className="mb-4">
              WINPROFX operates through the following official domains:
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="https://winprofx.org/" className="text-white underline hover:text-primary" rel="noopener noreferrer">
                  winprofx.org
                </a>{' '}
                — Main official website
              </li>
              <li>
                <a href="https://winprofx.com/" className="text-white underline hover:text-primary" rel="noopener noreferrer">
                  winprofx.com
                </a>{' '}
                — Official alternate / marketing domain
              </li>
              <li>
                <a href="https://winprofx.ae/" className="text-white underline hover:text-primary" rel="noopener noreferrer">
                  winprofx.ae
                </a>{' '}
                — Official UAE/regional domain
              </li>
            </ul>
            <p className="mt-4">
              View the complete verified list on our{' '}
              <LocalizedLink to="/official-domains/" className="text-white underline hover:text-primary">
                Official Domains
              </LocalizedLink>{' '}
              page.
            </p>
          </IdentitySection>

          <IdentitySection title={t('about.sections.clientPartnerLogin')}>
            <ul className="flex flex-col gap-3">
              <li>
                <strong className="text-white">Client login and registration:</strong>{' '}
                <a href="https://my.winprofx.org/" className="text-white underline hover:text-primary" target="_blank" rel="noopener noreferrer">
                  https://my.winprofx.org/
                </a>
              </li>
              <li>
                <strong className="text-white">Partner / IB login:</strong>{' '}
                <a href="https://partner.winprofx.org/" className="text-white underline hover:text-primary" target="_blank" rel="noopener noreferrer">
                  https://partner.winprofx.org/
                </a>
              </li>
            </ul>
            <p className="mt-4">
              Always verify the URL before entering your credentials. Only use domains listed on the{' '}
              <LocalizedLink to="/official-domains/" className="text-white underline hover:text-primary">
                Official Domains
              </LocalizedLink>{' '}
              page.
            </p>
          </IdentitySection>

          <IdentitySection title={t('about.sections.riskWarning')}>
            <p>{tCommon('risk.short')}</p>
            <p className="mt-4">
              Read our{' '}
              <LocalizedLink to="/risk-warning/" className="text-white underline hover:text-primary">
                Risk Warning
              </LocalizedLink>{' '}
              for more information.
            </p>
          </IdentitySection>

          <IdentitySection title={t('about.sections.contact')}>
            <p>
              For support, visit our{' '}
              <LocalizedLink to="/contact/" className="text-white underline hover:text-primary">
                Contact page
              </LocalizedLink>{' '}
              or email{' '}
              <a href="mailto:support@winprofx.com" className="text-white underline hover:text-primary">
                support@winprofx.com
              </a>
              .
            </p>
          </IdentitySection>

          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
