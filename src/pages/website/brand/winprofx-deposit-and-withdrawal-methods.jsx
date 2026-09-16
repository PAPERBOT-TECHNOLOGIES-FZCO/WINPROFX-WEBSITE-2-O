import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import TrustPageLayout from '@/components/trust/trust-page-layout'
import IdentitySection from '@/components/company-identity/identity-section'
import TrustProcessTable from '@/components/company-identity/trust-process-table'
import {
  withdrawalMethodRows,
  withdrawalDelayReasons,
  RISK_WARNING_SHORT,
} from '@/lib/company-registration'
import { getBrandPageFaqs, TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'


export default function WinprofxDepositWithdrawalMethods() {
  const { t } = useTranslation('brand')
  const seo = useSeo('winprofxDepositWithdrawalMethods')
  const faqItems = getBrandPageFaqs(t, 'winprofxDepositWithdrawalMethods')
  return (
    <>
      <SeoHead
        {...seo}
        canonicalPath="/winprofx-deposit-and-withdrawal-methods"
        pageName={t('pages.winprofxDepositWithdrawalMethods.h1')}
        dateModified={TRUST_LAST_REVIEWED_ISO}
        faqItems={faqItems}
      />
      <TrustPageLayout
        h1={t('pages.winprofxDepositWithdrawalMethods.h1')}
        canonicalPath="/winprofx-deposit-and-withdrawal-methods"
        intro={t('pages.winprofxDepositWithdrawalMethods.intro')}
        faqItems={faqItems}
                showIdentityNav={false}
      >
        <IdentitySection title={t('pages.winprofxDepositWithdrawalMethods.sections.depositOverview')}>
          <p className="mb-4">
            Deposits are processed through the official client portal at my.winprofx.com. Available methods
            may include bank transfer, card payment, and digital asset options where supported.
          </p>
          <Link to="/deposit-withdraw/" className="text-primary underline">Deposit and Withdrawal Policy</Link>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxDepositWithdrawalMethods.sections.withdrawalOverview')}>
          <TrustProcessTable rows={withdrawalMethodRows} />
          <p className="mt-4 text-sm text-white/60">
            Method-specific processing details are published on the Withdrawal Transparency page when verified.
          </p>
          <Link to="/withdrawal-transparency/" className="text-primary underline mt-3 inline-block">Withdrawal Transparency →</Link>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxDepositWithdrawalMethods.sections.kycAml')}>
          <p>
            Deposits and withdrawals may require identity verification, source of funds review, and
            payment method matching. Clients should keep KYC documents current to avoid delays.
          </p>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxDepositWithdrawalMethods.sections.processingDisclaimer')}>
          <p>
            Processing times depend on internal review, payment service providers, banks, and blockchain
            networks. WINPROFX does not guarantee specific processing times unless explicitly stated in
            verified operational disclosures.
          </p>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxDepositWithdrawalMethods.sections.securityNote')}>
          <p className="mb-4">
            Only use official WINPROFX domains and the client portal for financial transactions.
            Never send funds to third-party accounts claiming to represent WINPROFX.
          </p>
          <Link to="/client-fund-security/" className="text-primary underline">Client Fund Security</Link>
          {' · '}
          <Link to="/verify-winprofx/" className="text-primary underline">Verify WINPROFX</Link>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxDepositWithdrawalMethods.sections.commonIssues')}>
          <ul className="list-disc pl-5 space-y-1 text-white/80">
            {withdrawalDelayReasons.slice(0, 5).map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxDepositWithdrawalMethods.sections.riskWarning')}>
          <p>{RISK_WARNING_SHORT}</p>
        </IdentitySection>
      </TrustPageLayout>
    </>
  )
}
