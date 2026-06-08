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
import LicenseClarification from '@/components/company-identity/license-clarification'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import { TrustPageBreadcrumb, TrustPageFooter } from '@/components/trust/trust-page-extras'
import { TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'
import {
  BRAND_NAME,
  entityStructureRows,
  INCORPORATION_PDF_PATH,
  legalEntitySummaryRows,
  LEGAL_ENTITY_NAME,
  officialDomainsWithLabels,
  dubaiOfficeRows,
  JURISDICTION,
} from '@/lib/company-registration'

const PAGE_KEY = 'legalEntityInformation'

export default function LegalEntityInformation() {
  const { t } = useTranslation('trust')
  const { t: tCompany } = useTranslation('company')
  const seo = useSeo('legalEntityInformation')

  const i18nVars = {
    brandName: BRAND_NAME,
    legalEntityName: LEGAL_ENTITY_NAME,
    jurisdiction: JURISDICTION,
  }

  const domainLabels = tCompany('officialDomainLabels', { returnObjects: true })

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/legal-entity-information"
        pageName={t(`pages.${PAGE_KEY}.h1`)}
        dateModified={TRUST_LAST_REVIEWED_ISO}
      />
      <TopShape />
      <PolicyTitle as="h1" meta={t(`pages.${PAGE_KEY}.meta`)} title={t(`pages.${PAGE_KEY}.h1`)} />
      <Container>
        <Card>
          <TrustPageBreadcrumb pageLabel={t(`pages.${PAGE_KEY}.h1`)} />
          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.brandAndLegalEntity`)}>
            <p>{t(`pages.${PAGE_KEY}.content.brandIntro`, i18nVars)}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.incorporationJurisdiction`)}>
            <RegistrationTable rows={legalEntitySummaryRows} />
            <p className="mt-4">
              <LocalizedLink to="/company-registration/" className="text-white underline hover:text-primary">
                {t('shared.viewCompanyRegistration')}
              </LocalizedLink>
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.registeredAgent`)}>
            <p>{tCompany('registeredAgent')}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.registeredOffice`)}>
            <p>{tCompany('registeredOffice')}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.entityStructure`)}>
            <p>{t(`pages.${PAGE_KEY}.content.entityStructureIntro`, i18nVars)}</p>
            <div className="mt-4">
              <RegistrationTable rows={entityStructureRows} />
            </div>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.dubaiBranchAndOffice`)}>
            <RegistrationTable rows={dubaiOfficeRows} />
            <p className="mt-4">
              <LocalizedLink to="/dubai-professional-license/" className="text-white underline hover:text-primary">
                {t('shared.viewDubaiLicense')}
              </LocalizedLink>
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.documentVerification`)}>
            <p>{tCompany('dubaiVerificationNote')}</p>
            <p className="mt-4">
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.verifyBeforeAct`}
                ns="trust"
                components={{
                  verifyLink: (
                    <LocalizedLink to="/verify-winprofx/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.officialDomainsAndPortals`)}>
            <ul className="flex flex-col gap-4">
              {officialDomainsWithLabels.map((entry, index) => {
                const labelKeys = ['mainWebsite', 'alternateMarketing', 'uaeRegional', 'clientPortal', 'partnerPortal']
                return (
                  <li key={entry.url}>
                    <a
                      href={entry.url}
                      className="text-white underline hover:text-primary font-medium break-all"
                      {...(entry.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : { rel: 'noopener noreferrer' })}
                    >
                      {entry.url}
                    </a>
                    <span className="text-para">
                      {t('shared.domainPurposeSeparator')}
                      {domainLabels[labelKeys[index]] ?? entry.label}
                    </span>
                  </li>
                )
              })}
            </ul>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.legalDocuments`)}>
            <p className="mb-4">
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.legalDocsIntro`}
                ns="trust"
                components={{
                  legalDocsLink: (
                    <LocalizedLink to="/legal-documents/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
            <a
              href={INCORPORATION_PDF_PATH}
              className="text-white underline hover:text-primary font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {tCompany('incorporationPdfTitle')}
            </a>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.complianceClarification`)}>
            <p>{tCompany('incorporationClarification')}</p>
            <div className="mt-4">
              <LicenseClarification />
            </div>
            <p className="mt-4">
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.regulatoryVisit`}
                ns="trust"
                components={{
                  regulatoryLink: (
                    <LocalizedLink to="/regulatory-information/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.riskWarning`)}>
            <p>{tCompany('riskWarningShort')}</p>
          </IdentitySection>

          <TrustPageFooter canonicalPath="/legal-entity-information" />
          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
