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
import DubaiLicenseTable from '@/components/company-identity/dubai-license-table'
import LicenseClarification from '@/components/company-identity/license-clarification'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import { TrustPageBreadcrumb, TrustPageFooter } from '@/components/trust/trust-page-extras'
import { getTrustPageFaqs, TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'
import {
  COMPANY_TYPE,
  financialLicensePlaceholderRows,
  INCORPORATION_DATE,
  INCORPORATION_NUMBER,
  INCORPORATION_PDF_PATH,
  JURISDICTION,
  LEGAL_ENTITY_NAME,
} from '@/lib/company-registration'

const PAGE_KEY = 'regulatoryInformation'

const incorporationSummaryRows = [
  { label: 'Legal Entity', value: LEGAL_ENTITY_NAME },
  { label: 'Jurisdiction', value: JURISDICTION },
  { label: 'Incorporation Number', value: INCORPORATION_NUMBER },
  { label: 'Incorporation Date', value: INCORPORATION_DATE },
  { label: 'Company Type', value: COMPANY_TYPE },
]

export default function RegulatoryInformation() {
  const { t } = useTranslation('trust')
  const { t: tCompany } = useTranslation('company')
  const seo = useSeo('regulatoryInformation')
  const faqItems = getTrustPageFaqs(t, '/regulatory-information')

  const i18nVars = {
    legalEntityName: LEGAL_ENTITY_NAME,
    jurisdiction: JURISDICTION,
    companyType: COMPANY_TYPE,
    documentTypes: tCompany('documentTypes'),
  }

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/regulatory-information"
        pageName={t(`pages.${PAGE_KEY}.h1`)}
        dateModified={TRUST_LAST_REVIEWED_ISO}
        faqItems={faqItems}
      />
      <TopShape />
      <PolicyTitle as="h1" meta={t(`pages.${PAGE_KEY}.meta`)} title={t(`pages.${PAGE_KEY}.h1`)} />
      <Container>
        <Card>
          <TrustPageBreadcrumb pageLabel={t(`pages.${PAGE_KEY}.h1`)} />
          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.companyIncorporation`)}>
            <p className="mb-4">{t(`pages.${PAGE_KEY}.content.incorporationIntro`, i18nVars)}</p>
            <RegistrationTable rows={incorporationSummaryRows} />
            <p className="mt-4">
              <LocalizedLink to="/company-registration/" className="text-white underline hover:text-primary">
                {t('shared.viewCompanyRegistration')}
              </LocalizedLink>
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.dubaiProfessionalLicense`)}>
            <p className="mb-4">{t(`pages.${PAGE_KEY}.content.dubaiIntro`, i18nVars)}</p>
            <DubaiLicenseTable />
            <p className="mt-4">
              <LocalizedLink to="/dubai-professional-license/" className="text-white underline hover:text-primary">
                {t('shared.viewDubaiLicensePage')}
              </LocalizedLink>
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.licenseScopeClarification`)}>
            <p>{tCompany('licenseScopeClarification')}</p>
            <div className="mt-4">
              <LicenseClarification showDubaiScope={false} />
            </div>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.financialServicesLicenseClarification`)}>
            <p>{tCompany('financialLicenseClarification')}</p>
            <p className="mt-4 text-para italic">{tCompany('financialLicensePending')}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.financialRegulatoryLicenseDetails`)}>
            <p className="mb-4">{t(`pages.${PAGE_KEY}.content.financialPlaceholderIntro`)}</p>
            <RegistrationTable rows={financialLicensePlaceholderRows} />
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.documentAvailability`)}>
            <p>
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.documentAvailability`}
                ns="trust"
                components={{
                  legalDocsLink: (
                    <LocalizedLink to="/legal-documents/" className="text-white underline hover:text-primary" />
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
            <p className="mt-4">
              <a
                href={INCORPORATION_PDF_PATH}
                className="text-white underline hover:text-primary font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {tCompany('incorporationPdfTitle')}
              </a>
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.riskWarning`)}>
            <p>{tCompany('riskWarningShort')}</p>
          </IdentitySection>

          <TrustPageFooter
            canonicalPath="/regulatory-information"
            faqItems={faqItems}
            showRiskWarning={false}
          />
          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
