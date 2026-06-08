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
import { TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'
import LicenseClarification from '@/components/company-identity/license-clarification'
import { pathToTrustPageKey } from '@/lib/trust-page-keys'
import {
  BRAND_NAME,
  INCORPORATION_PDF_PATH,
  LEGAL_ENTITY_NAME,
  relatedPageLinks,
  registrationDetailsRows,
  shareCapitalRows,
  JURISDICTION,
} from '@/lib/company-registration'

const PAGE_KEY = 'companyRegistration'

export default function CompanyRegistration() {
  const { t } = useTranslation('trust')
  const { t: tCompany } = useTranslation('company')
  const seo = useSeo('companyRegistration')

  const i18nVars = {
    brandName: BRAND_NAME,
    legalEntityName: LEGAL_ENTITY_NAME,
    jurisdiction: JURISDICTION,
    documentTypes: tCompany('documentTypes'),
    incorporationSubscriber: tCompany('incorporationSubscriber'),
  }

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/company-registration"
        pageName={t(`pages.${PAGE_KEY}.h1`)}
        dateModified={TRUST_LAST_REVIEWED_ISO}
      />
      <TopShape />
      <PolicyTitle as="h1" meta={t(`pages.${PAGE_KEY}.meta`)} title={t(`pages.${PAGE_KEY}.h1`)} />
      <Container>
        <Card>
          <TrustPageBreadcrumb pageLabel={t(`pages.${PAGE_KEY}.h1`)} />
          <IdentitySection>
            <p>{t(`pages.${PAGE_KEY}.content.intro`, i18nVars)}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.companyRegistrationDetails`)}>
            <RegistrationTable rows={registrationDetailsRows} />
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.shareAndCapitalInformation`)}>
            <RegistrationTable rows={shareCapitalRows} />
            <p className="mt-4">{t(`pages.${PAGE_KEY}.content.shareCapitalBody`, i18nVars)}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.memorandumAndArticles`)}>
            <p>{t(`pages.${PAGE_KEY}.content.memorandumBody`, i18nVars)}</p>
            <p className="mt-4">{t(`pages.${PAGE_KEY}.content.subscriberLine`, i18nVars)}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.dubaiBranchRegistration`)}>
            <p>
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.dubaiBranchBody`}
                ns="trust"
                values={i18nVars}
                components={{
                  dubaiLicenseLink: (
                    <LocalizedLink to="/dubai-professional-license/" className="text-white underline hover:text-primary" />
                  ),
                  uaeOfficeLink: (
                    <LocalizedLink to="/uae-representative-office/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.importantClarification`)}>
            <p>{tCompany('incorporationClarification')}</p>
            <div className="mt-4">
              <LicenseClarification />
            </div>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.certifiedIncorporationDocuments`)}>
            <p className="mb-4">{t(`pages.${PAGE_KEY}.content.certifiedDocsIntro`, i18nVars)}</p>
            <a
              href={INCORPORATION_PDF_PATH}
              className="text-white underline hover:text-primary font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {tCompany('incorporationPdfTitle')}
            </a>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.riskWarning`)}>
            <p>{tCompany('riskWarningShort')}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.relatedInformation`)}>
            <ul className="flex flex-col gap-2">
              {relatedPageLinks.map((link) => {
                const pageKey = pathToTrustPageKey(link.path)
                return (
                  <li key={link.path}>
                    <LocalizedLink to={link.path} className="text-white underline hover:text-primary">
                      {pageKey ? t(`pages.${pageKey}.label`) : link.label}
                    </LocalizedLink>
                  </li>
                )
              })}
            </ul>
          </IdentitySection>

          <TrustPageFooter canonicalPath="/company-registration" />
          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
