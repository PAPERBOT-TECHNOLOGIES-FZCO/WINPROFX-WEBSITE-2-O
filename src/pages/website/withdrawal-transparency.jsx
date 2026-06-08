import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import LocalizedLink from '@/components/localized-link'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import TrustProcessTable from '@/components/company-identity/trust-process-table'
import StatsPlaceholderGrid from '@/components/company-identity/stats-placeholder-grid'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import { TrustPageBreadcrumb, TrustPageFooter } from '@/components/trust/trust-page-extras'
import { getTrustPageFaqs, TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'
import {
  BRAND_NAME,
  SUPPORT_EMAIL,
  withdrawalTimelineRows,
  withdrawalTransparencyStats,
} from '@/lib/company-registration'

const PAGE_KEY = 'withdrawalTransparency'

export default function WithdrawalTransparency() {
  const { t } = useTranslation('trust')
  const { t: tCompany } = useTranslation('company')
  const seo = useSeo('withdrawalTransparency')
  const faqItems = getTrustPageFaqs(t, '/withdrawal-transparency')

  const i18nVars = { brandName: BRAND_NAME, supportEmail: SUPPORT_EMAIL }
  const processSteps = Object.values(t(`pages.${PAGE_KEY}.content.processSteps`, { returnObjects: true }))
  const delayReasons = Object.values(t(`pages.${PAGE_KEY}.content.delayReasons`, { returnObjects: true }))
  const escalationItems = Object.values(t(`pages.${PAGE_KEY}.content.escalationItems`, { returnObjects: true }))

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/withdrawal-transparency"
        pageName={t(`pages.${PAGE_KEY}.h1`)}
        dateModified={TRUST_LAST_REVIEWED_ISO}
        faqItems={faqItems}
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

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.withdrawalProcessOverview`)}>
            <p>{t(`pages.${PAGE_KEY}.content.processIntro`)}</p>
            <ol className="list-decimal pl-5 mt-4 flex flex-col gap-2 text-para">
              {processSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.processingTimeline`)}>
            <p className="mb-4">{t(`pages.${PAGE_KEY}.content.timelineIntro`)}</p>
            <TrustProcessTable
              rows={withdrawalTimelineRows}
              caption={t(`pages.${PAGE_KEY}.content.timelineCaption`)}
            />
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.commonReasonsForDelay`)}>
            <p className="mb-4">{t(`pages.${PAGE_KEY}.content.delayIntro`)}</p>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-para">
              {delayReasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.escalationProcess`)}>
            <p>{t(`pages.${PAGE_KEY}.content.escalationIntro`)}</p>
            <ul className="list-disc pl-5 mt-4 flex flex-col gap-2 text-para">
              {escalationItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.escalationContact`}
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

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.transparencyStatistics`)}>
            <p className="mb-4">{t(`pages.${PAGE_KEY}.content.statsIntro`)}</p>
            <StatsPlaceholderGrid items={withdrawalTransparencyStats} />
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.riskAndComplianceNote`)}>
            <p>{t(`pages.${PAGE_KEY}.content.complianceNote`)}</p>
            <p className="mt-4">
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.depositPolicyLink`}
                ns="trust"
                components={{
                  depositWithdrawLink: (
                    <LocalizedLink to="/deposit-withdraw/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.riskWarning`)}>
            <p>{tCompany('riskWarningShort')}</p>
          </IdentitySection>

          <TrustPageFooter
            canonicalPath="/withdrawal-transparency"
            faqItems={faqItems}
            showRiskWarning={false}
          />
          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
