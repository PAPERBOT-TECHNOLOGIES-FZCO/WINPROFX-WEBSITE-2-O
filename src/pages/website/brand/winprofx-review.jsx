import IdentitySection from '@/components/company-identity/identity-section'
import SeoHead from '@/components/seo-head'
import TrustPageLayout from '@/components/trust/trust-page-layout'
import { useSeo } from '@/hooks/use-seo'
import { RISK_WARNING_SHORT } from '@/lib/company-registration'
import { BRAND_DESCRIPTION } from '@/lib/schema-org'
import { TRUST_CENTER_PATH, TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function WinprofxReview() {
  const { t } = useTranslation('brand')
  const seo = useSeo('winprofxReview')
  return (
    <>
      <SeoHead
        {...seo}
        canonicalPath="/winprofx-review"
        pageName={t('pages.winprofxReview.h1')}
        dateModified={TRUST_LAST_REVIEWED_ISO}
      />
      <TrustPageLayout
        h1={t('pages.winprofxReview.h1')}
        canonicalPath="/winprofx-review"
        intro={t('pages.winprofxReview.intro')}
        showIdentityNav={false}
      >
        <IdentitySection title={t('pages.winprofxReview.sections.whatWinprofxIs')}>
          <p>{BRAND_DESCRIPTION} WINPROFX provides client access to forex and CFD markets through the MetaTrader 5 platform.</p>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxReview.sections.tradingPlatform')}>
          <p className="mb-4">
            WINPROFX offers MetaTrader 5 (MT5) for desktop and mobile trading. Clients can access
            charting tools, order types, and account management through the official client portal.
          </p>
          <Link to="/platform/" className="text-primary underline">MT5 Trading Platform</Link>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxReview.sections.marketsOffered')}>
          <p className="mb-4">WINPROFX provides access to multiple market categories including:</p>
          <ul className="list-disc pl-5 space-y-1 text-white/80 mb-4">
            <li><Link to="/forex/" className="text-primary underline">Forex</Link></li>
            <li><Link to="/indices/" className="text-primary underline">Indices</Link></li>
            <li><Link to="/crypto/" className="text-primary underline">Crypto CFDs</Link></li>
            <li><Link to="/trading/metals/" className="text-primary underline">Metals</Link></li>
            <li><Link to="/trading/commodities/" className="text-primary underline">Commodities</Link></li>
            <li><Link to="/trading/oil/" className="text-primary underline">Oil</Link></li>
          </ul>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxReview.sections.accountServices')}>
          <p className="mb-4">
            WINPROFX offers multiple account types with different conditions. Account details, minimum
            deposits, and leverage information are published on the Accounts page.
          </p>
          <Link to="/accounts/" className="text-primary underline">Trading Accounts</Link>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxReview.sections.trustAndLegal')}>
          <p className="mb-4">
            Official company, legal, and verification information is published on the WINPROFX Trust Center
            and related pages. Always verify official domains before trading or depositing.
          </p>
          <Link to={TRUST_CENTER_PATH} className="text-primary underline">WINPROFX Trust Center</Link>
          {' · '}
          <Link to="/company-profile/" className="text-primary underline">Company Profile</Link>
          {' · '}
          <Link to="/regulatory-information/" className="text-primary underline">Information</Link>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxReview.sections.withdrawalsAndComplaints')}>
          <p className="mb-4">
            Withdrawal process and complaint handling information is published transparently on dedicated pages.
          </p>
          <Link to="/withdrawal-transparency/" className="text-primary underline">Withdrawal Transparency</Link>
          {' · '}
          <Link to="/winprofx-withdrawal-process/" className="text-primary underline">Withdrawal Process</Link>
          {' · '}
          <Link to="/complaints-and-dispute-resolution/" className="text-primary underline">Complaints Process</Link>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxReview.sections.whatToVerifyBeforeTrading')}>
          <ul className="list-disc pl-5 space-y-2 text-white/80">
            <li>Confirm you are on an official WINPROFX domain</li>
            <li>Review company registration and regulatory scope</li>
            <li>Understand forex and CFD risks</li>
            <li>Read withdrawal and deposit policies</li>
            <li>Check restricted countries list if applicable</li>
          </ul>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxReview.sections.riskWarning')}>
          <p>{RISK_WARNING_SHORT}</p>
          <Link to="/risk-warning/" className="text-primary underline mt-3 inline-block">Read full risk warning</Link>
        </IdentitySection>
      </TrustPageLayout>
    </>
  )
}
