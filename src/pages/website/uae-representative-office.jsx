import React from 'react'
import { useTranslation } from 'react-i18next'
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
  DUBAI_ACTIVITY_STATUS,
  DUBAI_BUSINESS_NAME,
  DUBAI_EXPIRY_DATE,
  DUBAI_ISSUE_DATE,
  DUBAI_LEGAL_TYPE,
  DUBAI_LICENSE_ACTIVITY,
  DUBAI_LICENSE_NUMBER,
  SUPPORT_EMAIL,
} from '@/lib/company-registration'

const PAGE_KEY = 'uaeRepresentativeOffice'

const uaeLicenseSummaryRows = [
  { label: 'Business Name', value: DUBAI_BUSINESS_NAME },
  { label: 'License Number', value: DUBAI_LICENSE_NUMBER },
  { label: 'License Activity', value: DUBAI_LICENSE_ACTIVITY },
  { label: 'Activity Status', value: DUBAI_ACTIVITY_STATUS },
  { label: 'Issue Date', value: DUBAI_ISSUE_DATE },
  { label: 'Expiry Date', value: DUBAI_EXPIRY_DATE },
  { label: 'Legal Type', value: DUBAI_LEGAL_TYPE },
  {
    label: 'Official UAE Domain',
    value: 'https://winprofx.ae/',
    href: 'https://winprofx.ae/',
    external: true,
  },
]

export default function UaeRepresentativeOffice() {
  const { t } = useTranslation('trust')
  const { t: tCompany } = useTranslation('company')
  const seo = useSeo('uaeRepresentativeOffice')

  const i18nVars = {
    brandName: BRAND_NAME,
    dubaiBusinessName: DUBAI_BUSINESS_NAME,
    dubaiLicenseNumber: DUBAI_LICENSE_NUMBER,
    supportEmail: SUPPORT_EMAIL,
  }

  const roleItems = Object.values(t(`pages.${PAGE_KEY}.content.roleItems`, { returnObjects: true }))
  const verifyItems = Object.values(t(`pages.${PAGE_KEY}.content.verifyItems`, { returnObjects: true, ...i18nVars }))

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/uae-representative-office"
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

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.roleOfRepresentativeOffice`)}>
            <p>{t(`pages.${PAGE_KEY}.content.roleBody`)}</p>
            <ul className="list-disc pl-5 mt-4 flex flex-col gap-2 text-para">
              {roleItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.dubaiLicenseSummary`)}>
            <RegistrationTable rows={uaeLicenseSummaryRows} />
            <p className="mt-4">
              <LocalizedLink to="/dubai-professional-license/" className="text-white underline hover:text-primary">
                {t('shared.viewDubaiLicense')}
              </LocalizedLink>
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.importantClarification`)}>
            <p>{tCompany('dubaiScopeClarification')}</p>
            <LicenseClarification showDubaiScope={false} />
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.userVerificationGuidance`)}>
            <p>{t(`pages.${PAGE_KEY}.content.verifyIntro`)}</p>
            <ul className="list-disc pl-5 mt-4 flex flex-col gap-2 text-para">
              {verifyItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">
              <LocalizedLink to="/verify-winprofx/" className="text-white underline hover:text-primary">
                {t('shared.verifyChecklist')}
              </LocalizedLink>
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.riskWarning`)}>
            <p>{tCompany('riskWarningShort')}</p>
          </IdentitySection>

          <TrustPageFooter canonicalPath="/uae-representative-office" />
          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
