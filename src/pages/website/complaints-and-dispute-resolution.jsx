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
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import { TrustPageBreadcrumb, TrustPageFooter } from '@/components/trust/trust-page-extras'
import { getTrustPageFaqs, TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'
import {
  BRAND_NAME,
  complaintsTimelineRows,
  SUPPORT_EMAIL,
} from '@/lib/company-registration'

const PAGE_KEY = 'complaintsAndDisputeResolution'

export default function ComplaintsAndDisputeResolution() {
  const { t } = useTranslation('trust')
  const { t: tCompany } = useTranslation('company')
  const seo = useSeo('complaintsAndDisputeResolution')
  const faqItems = getTrustPageFaqs(t, '/complaints-and-dispute-resolution')

  const i18nVars = { brandName: BRAND_NAME, supportEmail: SUPPORT_EMAIL }
  const requiredInfo = Object.values(t(`pages.${PAGE_KEY}.content.requiredInfo`, { returnObjects: true }))
  const reviewSteps = Object.values(t(`pages.${PAGE_KEY}.content.reviewSteps`, { returnObjects: true }))

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/complaints-and-dispute-resolution"
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

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.howToSubmitComplaint`)}>
            <p className="mb-4">
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.submitIntro`}
                ns="trust"
                values={i18nVars}
                components={{
                  contactLink: (
                    <LocalizedLink to="/contact/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-para">
              {requiredInfo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.complaintReviewProcess`)}>
            <ol className="list-decimal pl-5 flex flex-col gap-3 text-para">
              {reviewSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.responseTimelines`)}>
            <p className="mb-4">{t(`pages.${PAGE_KEY}.content.timelineIntro`)}</p>
            <TrustProcessTable
              rows={complaintsTimelineRows}
              caption={t(`pages.${PAGE_KEY}.content.timelineCaption`)}
            />
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.accountSpecificPrivacy`)}>
            <p>{tCompany('accountSpecificPrivacyNote')}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.publicReviewResponsePolicy`)}>
            <p>{tCompany('publicReviewResponsePolicy')}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.escalation`)}>
            <p>
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.escalation`}
                ns="trust"
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

          <TrustPageFooter
            canonicalPath="/complaints-and-dispute-resolution"
            faqItems={faqItems}
          />
          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
