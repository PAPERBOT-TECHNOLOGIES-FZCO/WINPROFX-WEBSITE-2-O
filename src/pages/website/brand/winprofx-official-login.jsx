import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import TrustPageLayout from '@/components/trust/trust-page-layout'
import IdentitySection from '@/components/company-identity/identity-section'
import { getBrandPageFaqs, TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'
import { getPortalLoginUrl, getPortalRegisterUrl, getPortalBaseUrl } from '@/lib/domain-locale'


export default function WinprofxOfficialLogin() {
  const { t } = useTranslation('brand')
  const seo = useSeo('winprofxOfficialLogin')
  const loginUrl = getPortalLoginUrl()
  const registerUrl = getPortalRegisterUrl()
  const portalHost = getPortalBaseUrl().replace('https://', '')
  return (
    <>
      <SeoHead
        {...seo}
        canonicalPath="/winprofx-official-login"
        pageName={t('pages.winprofxOfficialLogin.h1')}
        dateModified={TRUST_LAST_REVIEWED_ISO}
      />
      <TrustPageLayout
        h1={t('pages.winprofxOfficialLogin.h1')}
        canonicalPath="/winprofx-official-login"
        intro={t('pages.winprofxOfficialLogin.intro')}
        showIdentityNav={false}
        warningCallout={
          <div className="mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-5">
            <p className="text-white/90 font-medium mb-2">Verify the URL before logging in</p>
            <p className="text-white/70 text-sm">
              Only enter credentials on official WINPROFX portals. Fake login pages are a common phishing tactic.
            </p>
          </div>
        }
      >
        <IdentitySection title={t('pages.winprofxOfficialLogin.sections.clientPortal')}>
          <p className="mb-4">
            The official WINPROFX client portal for account login, deposits, withdrawals, and KYC is:
          </p>
          <a
            href={loginUrl}
            className="inline-block rounded-lg bg-primary px-6 py-3 text-black font-medium hover:opacity-90 transition-opacity"
            rel="noopener noreferrer"
          >
            Client Portal Login — {portalHost}
          </a>
          <p className="mt-4 text-sm text-white/60">
            New clients can register at{' '}
            <a href={registerUrl} className="text-primary underline" rel="noopener noreferrer">
              {portalHost}/register
            </a>
          </p>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxOfficialLogin.sections.partnerPortal')}>
          <p className="mb-4">
            Introducing brokers and partners access the official partner portal at:
          </p>
          <a
            href="https://partner.winprofx.com/"
            className="inline-block rounded-lg border border-white/20 px-6 py-3 text-white hover:border-primary transition-colors"
            rel="noopener noreferrer"
          >
            Partner Portal — partner.winprofx.com
          </a>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxOfficialLogin.sections.passwordSecurity')}>
          <ul className="list-disc pl-5 space-y-2 text-white/80">
            <li>Use a unique, strong password for your WINPROFX account</li>
            <li>Never share your password or 2FA codes with anyone</li>
            <li>Enable two-factor authentication if available in your portal</li>
            <li>Log out when using shared or public devices</li>
            <li>Report suspicious login attempts to support immediately</li>
          </ul>
        </IdentitySection>

        <IdentitySection title={t('pages.winprofxOfficialLogin.sections.verifyBeforeLogin')}>
          <p className="mb-4">
            Confirm the domain matches an official WINPROFX portal before entering credentials.
          </p>
          <Link to="/verify-winprofx/" className="text-primary underline">Verify WINPROFX</Link>
          {' · '}
          <Link to="/verify-winprofx/" className="text-primary underline">Verify WINPROFX</Link>
          {' · '}
          <Link to="/winprofx-fake-website-warning/" className="text-primary underline">Fake Website Warning</Link>
        </IdentitySection>
      </TrustPageLayout>
    </>
  )
}
