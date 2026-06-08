import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import LocalizedLink from '@/components/localized-link'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import RegistrationTable from '@/components/company-identity/registration-table'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import { TrustPageBreadcrumb, TrustPageFooter } from '@/components/trust/trust-page-extras'
import { getTrustPageFaqs, TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'
import {
  BRAND_NAME,
  DUBAI_BUSINESS_NAME,
  DUBAI_LICENSE_NUMBER,
  LEGAL_ENTITY_NAME,
  officialDomainsWithLabels,
  verifySummaryRows,
  JURISDICTION,
  SUPPORT_EMAIL,
} from '@/lib/company-registration'

const PAGE_KEY = 'officialDomains'

export default function OfficialDomains() {
  const { t } = useTranslation('trust')
  const { t: tCompany } = useTranslation('company')
  const seo = useSeo('officialDomains')
  const faqItems = getTrustPageFaqs(t, '/official-domains')

  const i18nVars = {
    brandName: BRAND_NAME,
    legalEntityName: LEGAL_ENTITY_NAME,
    jurisdiction: JURISDICTION,
    dubaiBusinessName: DUBAI_BUSINESS_NAME,
    dubaiLicenseNumber: DUBAI_LICENSE_NUMBER,
    supportEmail: SUPPORT_EMAIL,
  }

  const domainLabels = tCompany('officialDomainLabels', { returnObjects: true })
  const labelKeys = ['mainWebsite', 'alternateMarketing', 'uaeRegional', 'clientPortal', 'partnerPortal']

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/official-domains"
        pageName={t(`pages.${PAGE_KEY}.h1`)}
        dateModified={TRUST_LAST_REVIEWED_ISO}
        faqItems={faqItems}
      />
      <TopShape />
      <PolicyTitle as="h1" meta={t(`pages.${PAGE_KEY}.meta`)} title={t(`pages.${PAGE_KEY}.h1`)} />
      <Container>
        <Card>
          <TrustPageBreadcrumb pageLabel={t(`pages.${PAGE_KEY}.h1`)} />
          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.primaryCanonicalDomain`)}>
            <p>{t(`pages.${PAGE_KEY}.content.canonicalPrimary`)}</p>
            <p className="mt-4">{t(`pages.${PAGE_KEY}.content.canonicalAliases`)}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.entityAndLicenseContext`)}>
            <p>{t(`pages.${PAGE_KEY}.content.entityContext`, i18nVars)}</p>
            <div className="mt-4">
              <RegistrationTable rows={verifySummaryRows} />
            </div>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.officialDomains`)}>
            <p className="mb-4">{t(`pages.${PAGE_KEY}.content.domainsIntro`)}</p>
            <ul className="flex flex-col gap-4">
              {officialDomainsWithLabels.map((entry, index) => (
                <li key={entry.url}>
                  <a
                    href={entry.url}
                    className="text-white underline hover:text-primary font-medium break-all"
                    {...(entry.external ? { target: '_blank', rel: 'noopener noreferrer' } : { rel: 'noopener noreferrer' })}
                  >
                    {entry.url}
                  </a>
                  <span className="text-para">
                    {t('shared.domainPurposeSeparator')}
                    {domainLabels[labelKeys[index]] ?? entry.label}
                  </span>
                </li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.preLoginVerificationWarning`)}>
            <p>{t(`pages.${PAGE_KEY}.content.preLoginWarning`)}</p>
            <p className="mt-4">
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.preLoginChecklist`}
                ns="trust"
                components={{
                  verifyLink: (
                    <LocalizedLink to="/verify-winprofx/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.verificationWarning`)}>
            <p>{t(`pages.${PAGE_KEY}.content.verificationWarning`)}</p>
            <p className="mt-4">
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.contactUnsure`}
                ns="trust"
                values={i18nVars}
                components={{
                  contactLink: (
                    <LocalizedLink to="/contact/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.companyInformation`)}>
            <p>
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.companyInfoLinks`}
                ns="trust"
                components={{
                  companyProfileLink: (
                    <LocalizedLink to="/company-profile/" className="text-white underline hover:text-primary" />
                  ),
                  companyRegistrationLink: (
                    <LocalizedLink to="/company-registration/" className="text-white underline hover:text-primary" />
                  ),
                  dubaiLicenseLink: (
                    <LocalizedLink to="/dubai-professional-license/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <TrustPageFooter canonicalPath="/official-domains" faqItems={faqItems} />
          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
