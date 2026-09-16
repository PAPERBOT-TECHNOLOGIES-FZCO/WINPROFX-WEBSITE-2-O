import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import TrustPageLayout from '@/components/trust/trust-page-layout'
import IdentitySection from '@/components/company-identity/identity-section'
import TrustProcessTable from '@/components/company-identity/trust-process-table'
import {
  withdrawalProcessRows,
  withdrawalDelayReasons,
  SUPPORT_EMAIL,
  RISK_WARNING_SHORT,
} from '@/lib/company-registration'
import { getBrandPageFaqs, TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'


export default function WinprofxWithdrawalProcess() {
  const { t } = useTranslation('brand')
  const seo = useSeo('winprofxWithdrawalProcess')
  const faqItems = getBrandPageFaqs(t, 'winprofxWithdrawalProcess')
  return (
    <>
      <SeoHead
        {...seo}
        canonicalPath="/winprofx-withdrawal-process"
        pageName={t('pages.winprofxWithdrawalProcess.h1')}
        dateModified={TRUST_LAST_REVIEWED_ISO}
        faqItems={faqItems}
      />
      <TrustPageLayout
        h1={t('pages.winprofxWithdrawalProcess.h1')}
        canonicalPath="/winprofx-withdrawal-process"
        intro={t('pages.winprofxWithdrawalProcess.intro')}
        faqItems={faqItems}
                showIdentityNav={false}
      >
        <IdentitySection title={t('pages.winprofxWithdrawalProcess.sections.overview')}>
          <TrustProcessTable rows={withdrawalProcessRows} />
          <p className="mt-4 text-sm text-white/60">
            Standard review and processing timelines are published on the{' '}
            <Link to="/withdrawal-transparency/" className="text-primary underline">Withdrawal Transparency</Link>{' '}
            page when verified by operations.
          </p>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxWithdrawalProcess.sections.stepByStep')}>
          <ol className="list-decimal pl-5 space-y-2 text-white/80">
            <li>Log in to the official client portal at my.winprofx.com (verify the URL first)</li>
            <li>Navigate to the withdrawal section and select your payment method</li>
            <li>Enter withdrawal amount and destination details</li>
            <li>Submit the request — it enters internal review</li>
            <li>KYC/AML and payment method verification may be required</li>
            <li>After approval, funds are sent via the selected method</li>
            <li>Bank, card issuer, or blockchain processing may add additional time</li>
          </ol>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxWithdrawalProcess.sections.kycAml')}>
          <p>
            Withdrawals may require identity verification, source of funds review, and payment method
            matching. Incomplete or outdated KYC documents are a common reason for delays.
          </p>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxWithdrawalProcess.sections.commonDelays')}>
          <ul className="list-disc pl-5 space-y-1 text-white/80">
            {withdrawalDelayReasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxWithdrawalProcess.sections.howToAvoid')}>
          <ul className="list-disc pl-5 space-y-2 text-white/80">
            <li>Keep KYC documents current and accurate</li>
            <li>Use the same payment method for deposits and withdrawals where required</li>
            <li>Verify bank account or wallet details before submitting</li>
            <li>Respond promptly to compliance or support requests</li>
            <li>Only use official WINPROFX domains and support channels</li>
          </ul>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxWithdrawalProcess.sections.escalation')}>
          <p className="mb-4">
            If a withdrawal issue remains unresolved, contact{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary underline">{SUPPORT_EMAIL}</a>{' '}
            or visit the Support and Escalation page.
          </p>
          <Link to="/support-and-escalation/" className="text-primary underline">Support and Escalation</Link>
          {' · '}
          <Link to="/complaints-and-dispute-resolution/" className="text-primary underline">Complaints Process</Link>
          {' · '}
          <Link to="/client-fund-security/" className="text-primary underline">Client Fund Security</Link>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxWithdrawalProcess.sections.riskWarning')}>
          <p>{RISK_WARNING_SHORT}</p>
        </IdentitySection>
      </TrustPageLayout>
    </>
  )
}
