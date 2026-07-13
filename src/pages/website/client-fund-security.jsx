import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import LocalizedLink from '@/components/localized-link'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import { TrustPageBreadcrumb, TrustPageFooter } from '@/components/trust/trust-page-extras'
import { TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'
import { BRAND_NAME, SUPPORT_EMAIL } from '@/lib/company-registration'

const PAGE_KEY = 'clientFundSecurity'

export default function ClientFundSecurity() {
  const { t } = useTranslation('trust')
  const { t: tCompany } = useTranslation('company')
  const seo = useSeo('clientFundSecurity')

  const i18nVars = { brandName: BRAND_NAME, supportEmail: SUPPORT_EMAIL }
  const accountSecurity = Object.values(t(`pages.${PAGE_KEY}.content.accountSecurity`, { returnObjects: true }))
  const preDepositChecklist = Object.values(t(`pages.${PAGE_KEY}.content.preDepositChecklist`, { returnObjects: true }))

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/client-fund-security"
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

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.accountAccessSecurity`)}>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-para">
              {accountSecurity.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.kycAndAmlChecks`)}>
            <p>{t(`pages.${PAGE_KEY}.content.kycBody1`, i18nVars)}</p>
            <p className="mt-4">{t(`pages.${PAGE_KEY}.content.kycBody2`)}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.paymentMethodVerification`)}>
            <p>{t(`pages.${PAGE_KEY}.content.paymentVerification`)}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.withdrawalVerification`)}>
            <p>
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.withdrawalVerification`}
                ns="trust"
                components={{
                  withdrawalLink: (
                    <LocalizedLink to="/withdrawal-transparency/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.verifyBeforeDepositing`)}>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-para">
              {preDepositChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.preDepositLinks`}
                ns="trust"
                components={{
                  verifyLink: (
                    <LocalizedLink to="/verify-winprofx/" className="text-white underline hover:text-primary" />
                  ),
                  officialDomainsLink: (
                    <LocalizedLink to="/verify-winprofx/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.portalAndWebsiteSafety`)}>
            <p>{t(`pages.${PAGE_KEY}.content.portalSafety`)}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.importantNote`)}>
            <p className="italic text-para">{t(`pages.${PAGE_KEY}.content.importantNote`)}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.reportSecurityConcerns`)}>
            <p>
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.reportConcerns`}
                ns="trust"
                values={i18nVars}
                components={{
                  supportLink: (
                    <LocalizedLink to="/support-and-escalation/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.riskWarning`)}>
            <p>{tCompany('riskWarningShort')}</p>
          </IdentitySection>

          <TrustPageFooter canonicalPath="/client-fund-security" />
          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
