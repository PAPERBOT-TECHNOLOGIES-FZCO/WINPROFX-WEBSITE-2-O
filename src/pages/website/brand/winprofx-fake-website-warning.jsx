import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import TrustPageLayout from '@/components/trust/trust-page-layout'
import IdentitySection from '@/components/company-identity/identity-section'
import { officialDomainsWithLabels, SUPPORT_EMAIL } from '@/lib/company-registration'
import { getBrandPageFaqs, TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'


export default function WinprofxFakeWebsiteWarning() {
  const { t } = useTranslation('brand')
  const seo = useSeo('winprofxFakeWebsiteWarning')
  const faqItems = getBrandPageFaqs(t, 'winprofxFakeWebsiteWarning')
  return (
    <>
      <SeoHead
        {...seo}
        canonicalPath="/winprofx-fake-website-warning"
        pageName={t('pages.winprofxFakeWebsiteWarning.h1')}
        dateModified={TRUST_LAST_REVIEWED_ISO}
        faqItems={faqItems}
      />
      <TrustPageLayout
        h1={t('pages.winprofxFakeWebsiteWarning.h1')}
        canonicalPath="/winprofx-fake-website-warning"
        intro={t('pages.winprofxFakeWebsiteWarning.intro')}
        faqItems={faqItems}
                showIdentityNav={false}
        warningCallout={
          <div className="mb-6 rounded-lg border border-red-500/40 bg-red-500/10 p-5">
            <p className="text-white/90 font-medium mb-2">Warning: Verify before you act</p>
            <p className="text-white/70 text-sm">
              Fraudulent websites may copy WINPROFX branding. Never deposit funds or share KYC documents
              unless you have confirmed the official domain.
            </p>
          </div>
        }
      >
        <IdentitySection title={t('pages.winprofxFakeWebsiteWarning.sections.officialDomains')}>
          <ul className="space-y-3">
            {officialDomainsWithLabels.map(({ domain, label, url }) => (
              <li key={domain} className="rounded-lg border border-white/10 p-4">
                <p className="font-medium text-white">{domain}</p>
                <p className="text-sm text-white/60 mb-1">{label}</p>
                <a href={url} className="text-primary underline text-sm" rel="noopener noreferrer">{url}</a>
              </li>
            ))}
          </ul>
          <Link to="/verify-winprofx/" className="text-primary underline mt-4 inline-block">Verify WINPROFX →</Link>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxFakeWebsiteWarning.sections.warningSigns')}>
          <ul className="list-disc pl-5 space-y-2 text-white/80">
            <li>URL does not match official domains listed above</li>
            <li>Requests for unusual payment methods or direct transfers to personal accounts</li>
            <li>Pressure to deposit quickly or share credentials via chat</li>
            <li>Fake social media accounts claiming to be WINPROFX support</li>
            <li>Offers of guaranteed profits or risk-free trading</li>
          </ul>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxFakeWebsiteWarning.sections.howToVerify')}>
          <ol className="list-decimal pl-5 space-y-2 text-white/80">
            <li>Check the URL bar carefully — look for typos or extra characters</li>
            <li>Compare against the Official Domains page on winprofx.org</li>
            <li>Use the Verify WINPROFX checklist</li>
            <li>Access login only through links on official pages</li>
          </ol>
          <Link to="/verify-winprofx/" className="text-primary underline mt-3 inline-block">Verify WINPROFX →</Link>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxFakeWebsiteWarning.sections.safeLogin')}>
          <p className="mb-4">
            Client login: <a href="https://my.winprofx.com/" className="text-primary underline" rel="noopener noreferrer">https://my.winprofx.com/</a>
            <br />
            Partner portal: <a href="https://partner.winprofx.org/" className="text-primary underline" rel="noopener noreferrer">https://partner.winprofx.org/</a>
          </p>
          <Link to="/winprofx-official-login/" className="text-primary underline">Official login guidance →</Link>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxFakeWebsiteWarning.sections.whatNotToShare')}>
          <ul className="list-disc pl-5 space-y-1 text-white/80">
            <li>Login passwords or 2FA codes</li>
            <li>Full identity documents via unofficial channels</li>
            <li>Payment card details outside the official portal</li>
            <li>Remote access to your device</li>
          </ul>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxFakeWebsiteWarning.sections.ifSuspectImpersonation')}>
          <p className="mb-4">
            Contact{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary underline">{SUPPORT_EMAIL}</a>{' '}
            through official channels. Do not engage further with the suspicious site or account.
          </p>
          <Link to="/support-and-escalation/" className="text-primary underline">Support and Escalation</Link>
        </IdentitySection>
      </TrustPageLayout>
    </>
  )
}
