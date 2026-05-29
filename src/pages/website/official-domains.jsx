import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import SeoHead from '@/components/seo-head'
import { officialDomainsWithLabels } from '@/lib/company-registration'

export default function OfficialDomains() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Official WINPROFX Domains | Verify WINPROFX Websites"
        description="Verify official WINPROFX domains, including winprofx.org, winprofx.com, winprofx.ae, the client portal, and the partner portal."
        canonicalPath="/official-domains"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Official Information" title="Official WINPROFX Domains" />
      <Container>
        <Card>
          <IdentitySection title="Primary Canonical Domain">
            <p>
              <strong className="text-white">https://winprofx.org/</strong> is the primary official WINPROFX
              website and the canonical domain for all public pages. Search engines, AI tools, and official
              communications should reference winprofx.org URLs.
            </p>
            <p className="mt-4">
              <strong className="text-white">winprofx.com</strong> and{' '}
              <strong className="text-white">winprofx.ae</strong> are official domain aliases that may serve
              the same website content. They are listed in WINPROFX structured data as related official
              properties, but <strong className="text-white">winprofx.org</strong> remains the canonical
              source for indexing and verification.
            </p>
          </IdentitySection>

          <IdentitySection title="Official Domains">
            <p className="mb-4">
              The following official domains are operated in connection with WINPROFX / Winprofx Ltd.:
            </p>
            <ul className="flex flex-col gap-4">
              {officialDomainsWithLabels.map((entry) => (
                <li key={entry.url}>
                  <a
                    href={entry.url}
                    className="text-white underline hover:text-primary font-medium"
                    {...(entry.external ? { target: '_blank', rel: 'noopener noreferrer' } : { rel: 'noopener noreferrer' })}
                  >
                    {entry.url}
                  </a>
                  <span className="text-para"> — {entry.label}</span>
                </li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title="Verification Warning">
            <p>
              If a website claims to represent WINPROFX but is not listed here, verify it with WINPROFX
              support before logging in, depositing funds, or sharing personal information.
            </p>
            <p className="mt-4">
              Contact{' '}
              <a href="mailto:support@winprofx.com" className="text-white underline hover:text-primary">
                support@winprofx.com
              </a>{' '}
              or visit our{' '}
              <Link to="/contact" className="text-white underline hover:text-primary">
                Contact page
              </Link>{' '}
              if you are unsure about a domain.
            </p>
          </IdentitySection>

          <IdentitySection title="Company Information">
            <p>
              For brand and company details, see the{' '}
              <Link to="/company-profile" className="text-white underline hover:text-primary">
                Company Profile
              </Link>{' '}
              and{' '}
              <Link to="/company-registration" className="text-white underline hover:text-primary">
                Company Registration
              </Link>{' '}
              pages.
            </p>
          </IdentitySection>

          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
