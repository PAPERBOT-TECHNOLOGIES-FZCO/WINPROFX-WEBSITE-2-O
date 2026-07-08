import React from 'react'
import { useTranslation } from 'react-i18next'
import LocalizedLink from '@/components/localized-link'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import DubaiLicenseTable from '@/components/company-identity/dubai-license-table'
import LicenseClarification from '@/components/company-identity/license-clarification'
import RegistrationTable from '@/components/company-identity/registration-table'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import { TrustPageBreadcrumb, TrustPageFooter } from '@/components/trust/trust-page-extras'
import { TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'
import { pathToTrustPageKey } from '@/lib/trust-page-keys'
import {
  DUBAI_BUSINESS_NAME,
  DUBAI_LICENSE_CATEGORY,
  dubaiOfficeRows,
} from '@/lib/company-registration'

const PAGE_KEY = 'dubaiProfessionalLicense'

const relatedPaths = [
  '/uae-representative-office/',
  '/legal-entity-information/',
  '/regulatory-information/',
  '/official-domains/',
  '/verify-winprofx/',
  '/risk-warning/',
]

export default function DubaiProfessionalLicense() {
  const { t } = useTranslation('trust')
  const { t: tCompany } = useTranslation('company')
  const seo = useSeo('dubaiProfessionalLicense')

  const i18nVars = {
    dubaiBusinessName: DUBAI_BUSINESS_NAME,
    dubaiLicenseCategory: DUBAI_LICENSE_CATEGORY,
  }

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/dubai-professional-license"
        pageName={t(`pages.${PAGE_KEY}.h1`)}
        dateModified={TRUST_LAST_REVIEWED_ISO}
      />
      <TopShape />
      <PolicyTitle as="h1" meta={t(`pages.${PAGE_KEY}.meta`)} title={t(`pages.${PAGE_KEY}.h1`)} />
      <Container>
        <Card>
          <TrustPageBreadcrumb pageLabel={t(`pages.${PAGE_KEY}.h1`)} />
          <IdentitySection>
            <p>{t(`pages.${PAGE_KEY}.content.intro1`, i18nVars)}</p>
            <p className="mt-4">{t(`pages.${PAGE_KEY}.content.intro2`)}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.licenseDetails`)}>
            <DubaiLicenseTable />
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.dubaiOfficeInformation`)}>
            <RegistrationTable rows={dubaiOfficeRows} />
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.documentVerification`)}>
            <p>{tCompany('dubaiVerificationNote')}</p>
            <p className="mt-4">{t(`pages.${PAGE_KEY}.content.qrVerification`)}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.scopeClarification`)}>
            <p>{tCompany('dubaiScopeClarification')}</p>
            <LicenseClarification showDubaiScope={false} />
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.relatedInformation`)}>
            <ul className="flex flex-col gap-2">
              {relatedPaths.map((path) => {
                const pageKey = pathToTrustPageKey(path)
                return (
                  <li key={path}>
                    <LocalizedLink to={path} className="text-white underline hover:text-primary">
                      {pageKey ? t(`pages.${pageKey}.label`) : path}
                    </LocalizedLink>
                  </li>
                )
              })}
            </ul>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.riskWarning`)}>
            <p>{tCompany('riskWarningShort')}</p>
          </IdentitySection>

          <TrustPageFooter canonicalPath="/dubai-professional-license" />
          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
