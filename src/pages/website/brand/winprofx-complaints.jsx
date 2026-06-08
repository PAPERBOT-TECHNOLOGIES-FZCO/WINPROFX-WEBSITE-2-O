import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import TrustPageLayout from '@/components/trust/trust-page-layout'
import IdentitySection from '@/components/company-identity/identity-section'
import TrustProcessTable from '@/components/company-identity/trust-process-table'
import {
  complaintsProcessRows,
  complaintsReviewSteps,
  complaintsRequiredInfo,
  SUPPORT_EMAIL,
  PUBLIC_REVIEW_RESPONSE_POLICY,
} from '@/lib/company-registration'
import { getBrandPageFaqs, TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'


export default function WinprofxComplaints() {
  const { t } = useTranslation('brand')
  const seo = useSeo('winprofxComplaints')
  const faqItems = getBrandPageFaqs(t, 'winprofxComplaints')
  return (
    <>
      <SeoHead
        {...seo}
        canonicalPath="/winprofx-complaints"
        pageName={t('pages.winprofxComplaints.h1')}
        dateModified={TRUST_LAST_REVIEWED_ISO}
        faqItems={faqItems}
      />
      <TrustPageLayout
        h1={t('pages.winprofxComplaints.h1')}
        canonicalPath="/winprofx-complaints"
        intro={t('pages.winprofxComplaints.intro')}
        faqItems={faqItems}
                showIdentityNav={false}
      >
        <IdentitySection title={t('pages.winprofxComplaints.sections.howToSubmit')}>
          <p className="mb-4">
            Submit complaints through official channels only. Email{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary underline">{SUPPORT_EMAIL}</a>{' '}
            with subject line &quot;Complaint&quot; or use the{' '}
            <Link to="/contact/" className="text-primary underline">Contact page</Link>.
          </p>
          <TrustProcessTable rows={complaintsProcessRows} />
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxComplaints.sections.requiredInformation')}>
          <ul className="list-disc pl-5 space-y-1 text-white/80">
            {complaintsRequiredInfo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxComplaints.sections.reviewStages')}>
          <ol className="list-decimal pl-5 space-y-2 text-white/80">
            {complaintsReviewSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-white/60">
            Acknowledgement and response timeframes are published on the Complaints and Dispute Resolution page when verified.
          </p>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxComplaints.sections.publicReviewPolicy')}>
          <p>{PUBLIC_REVIEW_RESPONSE_POLICY}</p>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxComplaints.sections.escalation')}>
          <Link to="/support-and-escalation/" className="text-primary underline">Support and Escalation</Link>
          {' · '}
          <Link to="/complaints-and-dispute-resolution/" className="text-primary underline">Complaints and Dispute Resolution</Link>
        </IdentitySection>
      </TrustPageLayout>
    </>
  )
}
