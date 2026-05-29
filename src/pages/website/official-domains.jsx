import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import SeoHead from '@/components/seo-head'

const officialEntries = [
  {
    url: 'https://winprofx.org/',
    label: 'Main official WINPROFX website',
  },
  {
    url: 'https://winprofx.com/',
    label: 'Official alternate / marketing domain',
  },
  {
    url: 'https://winprofx.ae/',
    label: 'Official UAE/regional domain',
  },
  {
    url: 'https://my.winprofx.org/',
    label: 'Official client portal',
    external: true,
  },
  {
    url: 'https://partner.winprofx.org/',
    label: 'Official partner / IB portal',
    external: true,
  },
]

export default function OfficialDomains() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Official WINPROFX Domains | Verify WINPROFX Websites"
        description="Verify the official WINPROFX domains, including winprofx.org, winprofx.com, winprofx.ae, client portal, and partner portal links."
        canonicalPath="/official-domains"
        pageName="Official WINPROFX Domains"
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

          <IdentitySection>
            <p className="mb-4">
              The following domains and subdomains are officially operated by WINPROFX:
            </p>
            <ul className="flex flex-col gap-4">
              {officialEntries.map((entry) => (
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

          <IdentitySection title="Security Warning">
            <p>
              If a website claims to represent WINPROFX but is not listed here, please verify it with
              WINPROFX support before logging in, depositing funds, or sharing personal information.
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
              page.
            </p>
          </IdentitySection>

          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
