import IdentitySection from '@/components/company-identity/identity-section'
import LocalizedLink from '@/components/localized-link'
import SeoHead from '@/components/seo-head'
import TrustPageLayout from '@/components/trust/trust-page-layout'
import { useSeo } from '@/hooks/use-seo'
import {
    DUBAI_BUSINESS_NAME,
    DUBAI_LICENSE_ACTIVITY,
    INCORPORATION_CLARIFICATION,
    INCORPORATION_NUMBER,
    JURISDICTION,
    LEGAL_ENTITY_NAME,
    LICENSE_SCOPE_CLARIFICATION,
} from '@/lib/company-registration'
import { getBrandPageFaqs, TRUST_CENTER_PATH, TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'
import React from 'react'
import { useTranslation } from 'react-i18next'

const PAGE_KEY = 'isWinprofxLegit'

export default function IsWinprofxLegit() {
  const { t } = useTranslation('brand')
  const { t: tCommon } = useTranslation('common')
  const seo = useSeo('isWinprofxLegit')
  const faqItems = getBrandPageFaqs(t, PAGE_KEY, {
    legalEntityName: LEGAL_ENTITY_NAME,
    jurisdiction: JURISDICTION,
    incorporationNumber: INCORPORATION_NUMBER,
    dubaiBusinessName: DUBAI_BUSINESS_NAME,
    dubaiLicenseActivity: DUBAI_LICENSE_ACTIVITY,
  })

  return (
    <>
      <SeoHead
        {...seo}
        canonicalPath="/is-winprofx-legit"
        pageName={t(`pages.${PAGE_KEY}.h1`)}
        dateModified={TRUST_LAST_REVIEWED_ISO}
        faqItems={faqItems}
      />
      <TrustPageLayout
        h1={t(`pages.${PAGE_KEY}.h1`)}
        canonicalPath="/is-winprofx-legit"
        intro={t(`pages.${PAGE_KEY}.intro`)}
        faqItems={faqItems}
        showIdentityNav={false}
      >
        <IdentitySection title={t(`pages.${PAGE_KEY}.sections.legalEntitySummary`)}>
          <p className="mb-4">{INCORPORATION_CLARIFICATION}</p>
          <p>
            <LocalizedLink to="/legal-entity-information/" className="text-primary underline">Legal Entity Information</LocalizedLink>
            {' · '}
            <LocalizedLink to="/company-registration/" className="text-primary underline">Company Registration</LocalizedLink>
          </p>
        </IdentitySection>

        <IdentitySection title={t(`pages.${PAGE_KEY}.sections.companyRegistration`)}>
          <p className="mb-4">
            {LEGAL_ENTITY_NAME} is incorporated in {JURISDICTION}. Certified incorporation documents
            are available on the Company Registration page where published.
          </p>
          <LocalizedLink to="/company-registration/" className="text-primary underline">View company registration →</LocalizedLink>
        </IdentitySection>

        {/* <IdentitySection title={t(`pages.${PAGE_KEY}.sections.dubaiRepresentativeOffice`)}>
          <p className="mb-4">
            WINPROFX operates a UAE representative office under a Dubai Professional License. The licensed
            activity is {DUBAI_LICENSE_ACTIVITY} for {DUBAI_BUSINESS_NAME}.
          </p>
          <LocalizedLink to="/uae-representative-office/" className="text-primary underline">UAE Representative Office</LocalizedLink>
          {' · '}
          <LocalizedLink to="/dubai-professional-license/" className="text-primary underline">Dubai Professional License</LocalizedLink>
        </IdentitySection> */}

        <IdentitySection title={t(`pages.${PAGE_KEY}.sections.regulatoryClarification`)}>
          <p className="mb-4">{LICENSE_SCOPE_CLARIFICATION}</p>
          <LocalizedLink to="/verify-winprofx/" className="text-primary underline">WINPROFX Verify →</LocalizedLink>
        </IdentitySection>

        <IdentitySection title={t(`pages.${PAGE_KEY}.sections.officialDomainsVerification`)}>
          <p className="mb-4">
            Always verify you are on an official WINPROFX domain before logging in, depositing, or
            sharing documents. The main website is winprofx.org; client login is at my.winprofx.org.
          </p>
          {/* <LocalizedLink to="/official-domains/" className="text-primary underline">Official domains</LocalizedLink>
          {' · '} */}
          <LocalizedLink to="/verify-winprofx/" className="text-primary underline">Verify WINPROFX</LocalizedLink>
          {' · '}
          <LocalizedLink to="/winprofx-fake-website-warning/" className="text-primary underline">Fake website warning</LocalizedLink>
        </IdentitySection>

        <IdentitySection title={t(`pages.${PAGE_KEY}.sections.whatToVerifyBeforeDepositing`)}>
          <ul className="list-disc pl-5 space-y-2 text-white/80">
            <li>Confirm the URL matches an official WINPROFX domain</li>
            <li>Review company registration and legal entity information</li>
            <li>Understand regulatory scope — incorporation and Dubai rep office are not financial broker licenses</li>
            <li>Read the Risk Warning and withdrawal transparency information</li>
            <li>Use official support channels only (support@winprofx.com)</li>
          </ul>
        </IdentitySection>

        <IdentitySection title={t(`pages.${PAGE_KEY}.sections.riskWarning`)}>
          <p>{tCommon('risk.short')}</p>
          <p className="mt-3">
            <LocalizedLink to="/risk-warning/" className="text-primary underline">{tCommon('buttons.readFullRiskWarning')}</LocalizedLink>
            {' · '}
            <LocalizedLink to={TRUST_CENTER_PATH} className="text-primary underline">{tCommon('labels.trustCenter')}</LocalizedLink>
          </p>
        </IdentitySection>
      </TrustPageLayout>
    </>
  )
}
