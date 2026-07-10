import IdentitySection from '@/components/company-identity/identity-section'
import LicenseClarification from '@/components/company-identity/license-clarification'
import SeoHead from '@/components/seo-head'
import TrustPageLayout from '@/components/trust/trust-page-layout'
import { useSeo } from '@/hooks/use-seo'
import {
    DUBAI_LICENSE_ACTIVITY,
    DUBAI_LICENSE_NUMBER,
    FINANCIAL_LICENSE_PENDING,
    INCORPORATION_NUMBER,
    INCORPORATION_PDF_PATH,
    INCORPORATION_PDF_TITLE,
    JURISDICTION,
    LEGAL_ENTITY_NAME,
    LICENSE_SCOPE_CLARIFICATION,
} from '@/lib/company-registration'
import { TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


export default function WinprofxLicenseVerification() {
  const { t } = useTranslation('brand')
  const seo = useSeo('winprofxLicenseVerification')
  return (
    <>
      <SeoHead
        {...seo}
        canonicalPath="/winprofx-license-verification"
        pageName={t('pages.winprofxLicenseVerification.h1')}
        dateModified={TRUST_LAST_REVIEWED_ISO}
      />
      <TrustPageLayout
        h1={t('pages.winprofxLicenseVerification.h1')}
        canonicalPath="/winprofx-license-verification"
        intro={t('pages.winprofxLicenseVerification.intro')}
        showIdentityNav={false}
      >
        <IdentitySection title={t('pages.winprofxLicenseVerification.sections.companyRegistration')}>
          <p className="mb-4">
            {LEGAL_ENTITY_NAME} is incorporated in {JURISDICTION} (incorporation number {INCORPORATION_NUMBER}).
            Saint Lucia incorporation confirms legal entity formation as an International Business Company.
          </p>
          <Link to="/company-registration/" className="text-primary underline">Company Registration</Link>
          {' · '}
          <a href={INCORPORATION_PDF_PATH} className="text-primary underline" target="_blank" rel="noopener noreferrer">
            {INCORPORATION_PDF_TITLE}
          </a>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxLicenseVerification.sections.dubaiProfessionalLicense')}>
          <p className="mb-4">
            WINPROFX holds Dubai Professional License number {DUBAI_LICENSE_NUMBER} with activity listed as{' '}
            {DUBAI_LICENSE_ACTIVITY}. This relates to the UAE representative office registration.
          </p>
          <Link to="/dubai-professional-license/" className="text-primary underline">Dubai Professional License</Link>
          {' · '}
          <Link to="/uae-representative-office/" className="text-primary underline">UAE Representative Office</Link>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxLicenseVerification.sections.regulatoryScope')}>
          <p className="mb-4">{LICENSE_SCOPE_CLARIFICATION}</p>
          <LicenseClarification />
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxLicenseVerification.sections.notFinancialServicesLicense')}>
          <ul className="list-disc pl-5 space-y-2 text-white/80">
            <li>Saint Lucia IBC incorporation — confirms company formation, not broker authorization</li>
            <li>Dubai Professional License (Representative Office) — confirms corporate presence, not SCA/DFSA/ADGM financial services license</li>
            <li>Marketing website content — not a substitute for regulator verification</li>
          </ul>
          <p className="mt-4 text-sm text-white/60">{FINANCIAL_LICENSE_PENDING}</p>
          <Link to="/regulatory-information/" className="text-primary underline mt-3 inline-block">Information →</Link>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxLicenseVerification.sections.verifyDocuments')}>
          <ol className="list-decimal pl-5 space-y-2 text-white/80">
            <li>Confirm you are on winprofx.org or an official alternate domain</li>
            <li>Download incorporation documents from the Company Registration page</li>
            <li>Review Dubai license details on the Dubai Professional License page</li>
            <li>Cross-check financial regulator information on the Information page when published</li>
            <li>Use the Verify WINPROFX checklist for domain and channel verification</li>
          </ol>
          <Link to="/verify-winprofx/" className="text-primary underline mt-3 inline-block">Verify WINPROFX →</Link>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxLicenseVerification.sections.legalEntityInformation')}>
          <Link to="/legal-entity-information/" className="text-primary underline">Legal Entity Information</Link>
        </IdentitySection>
      </TrustPageLayout>
    </>
  )
}
