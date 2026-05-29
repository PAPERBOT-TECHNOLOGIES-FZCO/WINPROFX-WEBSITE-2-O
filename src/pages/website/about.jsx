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
  'Trading platform information and tools',
  'Client account management through the official client portal',
  'Partner and introducing broker program tools',
  'Trading-related customer support services',
]

export default function About() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="About WINPROFX | Official Company Information"
        description="Learn about WINPROFX, its trading-related services, official websites, client portal, partner portal, and risk warning."
        canonicalPath="/about"
        pageName="About WINPROFX"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Official Information" title="About WINPROFX" />
      <Container>
        <Card>
          <IdentitySection title="What is WINPROFX?">
            <p>
              WINPROFX is a forex and CFD trading brand offering access to trading platforms, client account
              services, partner program tools, and trading-related support services through its official
              domains and portals.
            </p>
            <p className="mt-4">
              The main official website is{' '}
              <a href="https://winprofx.org/" className="text-white underline hover:text-primary" rel="noopener noreferrer">
                https://winprofx.org/
              </a>
              .
            </p>
          </IdentitySection>

          <IdentitySection title="Services Provided">
            <ul className="flex flex-col gap-2 list-disc pl-5">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title="Official Domains">
            <p className="mb-4">
              WINPROFX operates through the following official domains:
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="https://winprofx.org/" className="text-white underline hover:text-primary" rel="noopener noreferrer">
                  winprofx.org
                </a>{' '}
                — Main official website
              </li>
              <li>
                <a href="https://winprofx.com/" className="text-white underline hover:text-primary" rel="noopener noreferrer">
                  winprofx.com
                </a>{' '}
                — Official alternate / marketing domain
              </li>
              <li>
                <a href="https://winprofx.ae/" className="text-white underline hover:text-primary" rel="noopener noreferrer">
                  winprofx.ae
                </a>{' '}
                — Official UAE/regional domain
              </li>
            </ul>
            <p className="mt-4">
              View the complete verified list on our{' '}
              <Link to="/official-domains" className="text-white underline hover:text-primary">
                Official Domains
              </Link>{' '}
              page.
            </p>
          </IdentitySection>

          <IdentitySection title="Client and Partner Login">
            <ul className="flex flex-col gap-3">
              <li>
                <strong className="text-white">Client login and registration:</strong>{' '}
                <a href="https://my.winprofx.org/" className="text-white underline hover:text-primary" target="_blank" rel="noopener noreferrer">
                  https://my.winprofx.org/
                </a>
              </li>
              <li>
                <strong className="text-white">Partner / IB login:</strong>{' '}
                <a href="https://partner.winprofx.org/" className="text-white underline hover:text-primary" target="_blank" rel="noopener noreferrer">
                  https://partner.winprofx.org/
                </a>
              </li>
            </ul>
            <p className="mt-4">
              Always verify the URL before entering your credentials. Only use domains listed on the{' '}
              <Link to="/official-domains" className="text-white underline hover:text-primary">
                Official Domains
              </Link>{' '}
              page.
            </p>
          </IdentitySection>

          <IdentitySection title="Risk Warning">
            <p>
              Trading forex and CFDs involves significant risk and may not be suitable for all investors.
              Clients should understand the risks before trading.
            </p>
            <p className="mt-4">
              Read our{' '}
              <Link to="/risk-warning" className="text-white underline hover:text-primary">
                Risk Warning
              </Link>{' '}
              for more information.
            </p>
          </IdentitySection>

          <IdentitySection title="Contact">
            <p>
              For support, visit our{' '}
              <Link to="/contact" className="text-white underline hover:text-primary">
                Contact page
              </Link>{' '}
              or email{' '}
              <a href="mailto:support@winprofx.com" className="text-white underline hover:text-primary">
                support@winprofx.com
              </a>
              .
            </p>
          </IdentitySection>

          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
