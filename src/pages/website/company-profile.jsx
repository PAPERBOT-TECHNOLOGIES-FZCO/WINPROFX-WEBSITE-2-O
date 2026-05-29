import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import SeoHead from '@/components/seo-head'

const services = [
  'Forex and CFD trading access',
  'Trading platform information',
  'Client account management',
  'Partner / introducing broker portal',
  'Trading tools and market-related services',
]

export default function CompanyProfile() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Company Profile | WINPROFX Official Website"
        description="Read the official company profile of WINPROFX, including official domains, client portal, partner portal, services, and risk warning information."
        canonicalPath="/company-profile"
        pageName="Company Profile"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Last updated: 29 May 2026" title="WinProFX Company Profile" />
      <Container>
        <Card>
          <IdentitySection title="Brand Name">
            <p>WINPROFX</p>
          </IdentitySection>

          <IdentitySection title="Official Domains & Portals">
            <ul className="flex flex-col gap-3">
              <li>
                <strong className="text-white">Main Official Website:</strong>{' '}
                <a href="https://winprofx.org/" className="text-white underline hover:text-primary" rel="noopener noreferrer">
                  https://winprofx.org/
                </a>
              </li>
              <li>
                <strong className="text-white">Official Alternate Domain:</strong>{' '}
                <a href="https://winprofx.com/" className="text-white underline hover:text-primary" rel="noopener noreferrer">
                  https://winprofx.com/
                </a>
              </li>
              <li>
                <strong className="text-white">Official UAE/Regional Domain:</strong>{' '}
                <a href="https://winprofx.ae/" className="text-white underline hover:text-primary" rel="noopener noreferrer">
                  https://winprofx.ae/
                </a>
              </li>
              <li>
                <strong className="text-white">Client Portal:</strong>{' '}
                <a href="https://my.winprofx.org/" className="text-white underline hover:text-primary" target="_blank" rel="noopener noreferrer">
                  https://my.winprofx.org/
                </a>
              </li>
              <li>
                <strong className="text-white">Partner Portal:</strong>{' '}
                <a href="https://partner.winprofx.org/" className="text-white underline hover:text-primary" target="_blank" rel="noopener noreferrer">
                  https://partner.winprofx.org/
                </a>
              </li>
            </ul>
            <p className="mt-4">
              See the full list on our{' '}
              <Link to="/official-domains" className="text-white underline hover:text-primary">
                Official Domains
              </Link>{' '}
              page.
            </p>
          </IdentitySection>

          <IdentitySection title="Support Email">
            <p>
              <a href="mailto:support@winprofx.com" className="text-white underline hover:text-primary">
                support@winprofx.com
              </a>
            </p>
          </IdentitySection>

          <IdentitySection title="Company Description">
            <p>
              WINPROFX is a forex and CFD trading brand offering access to trading platforms, client account
              services, partner program tools, and trading-related support services through its official
              domains and portals.
            </p>
          </IdentitySection>

          <IdentitySection title="Services">
            <ul className="flex flex-col gap-2 list-disc pl-5">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title="Risk Warning">
            <p>
              Trading forex and CFDs involves significant risk and may not be suitable for all investors.
              Clients should understand the risks before trading.
            </p>
            <p className="mt-4">
              Read our full{' '}
              <Link to="/risk-warning" className="text-white underline hover:text-primary">
                Risk Warning
              </Link>{' '}
              and{' '}
              <Link to="/legal-documents" className="text-white underline hover:text-primary">
                Legal Documents
              </Link>
              .
            </p>
          </IdentitySection>

          <IdentitySection title="Contact">
            <p>
              For support inquiries, visit our{' '}
              <Link to="/contact" className="text-white underline hover:text-primary">
                Contact page
              </Link>
              .
            </p>
          </IdentitySection>

          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
