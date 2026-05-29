import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import SeoHead from '@/components/seo-head'

const contactMethods = [
  {
    label: 'Support Email',
    value: 'support@winprofx.com',
    href: 'mailto:support@winprofx.com',
    external: true,
  },
  {
    label: 'Phone',
    value: '+971 4 447 1894',
    href: 'tel:+97144471894',
    external: true,
  },
  {
    label: 'WhatsApp',
    value: '+971 4 447 1894',
    href: 'https://wa.me/97144471894',
    external: true,
  },
  {
    label: 'Official Website',
    value: 'winprofx.org',
    href: 'https://winprofx.org/',
    external: true,
  },
  {
    label: 'Client Portal',
    value: 'my.winprofx.org',
    href: 'https://my.winprofx.org/',
    external: true,
  },
  {
    label: 'Partner Portal',
    value: 'partner.winprofx.org',
    href: 'https://partner.winprofx.org/',
    external: true,
  },
]

export default function Contact() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Contact WINPROFX | Official Support and Portal Links"
        description="Contact WINPROFX through official support channels and verify the official website, client portal, partner portal, and regional domains."
        canonicalPath="/contact"
        pageName="Contact WINPROFX"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Customer Support" title="Contact WINPROFX" />
      <Container>
        <Card>
          <IdentitySection title="Get in Touch">
            <p className="mb-4">
              WINPROFX provides customer support for account inquiries, trading platform assistance,
              deposits, withdrawals, and general questions. Our main official website is{' '}
              <a href="https://winprofx.org/" className="text-white underline hover:text-primary" rel="noopener noreferrer">
                https://winprofx.org/
              </a>
              .
            </p>
            <p>
              For account login and trading, use the{' '}
              <a href="https://my.winprofx.org/" className="text-white underline hover:text-primary" target="_blank" rel="noopener noreferrer">
                client portal at my.winprofx.org
              </a>
              . Partners should use{' '}
              <a href="https://partner.winprofx.org/" className="text-white underline hover:text-primary" target="_blank" rel="noopener noreferrer">
                partner.winprofx.org
              </a>
              .
            </p>
          </IdentitySection>

          <IdentitySection title="Contact Channels">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactMethods.map((item) => (
                <li
                  key={item.label}
                  className="bg-white/2 border border-solid border-white/8 p-4 md:p-5 rounded-xl"
                >
                  <p className="text-primary font-semibold mb-2">{item.label}</p>
                  <a
                    href={item.href}
                    className="text-white text-lg hover:text-primary transition-colors"
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title="Business Hours">
            <p>
              <strong className="text-white">Customer Support:</strong> Available 24 hours a day, 7 days a week
            </p>
            <p className="mt-2">
              <strong className="text-white">Office Hours (UAE):</strong> Monday – Friday, 09:00 – 18:00 (GST)
            </p>
          </IdentitySection>

          <IdentitySection title="Contact, Risk & Legal Note">
            <p>
              Before trading, please read our{' '}
              <Link to="/risk-warning" className="text-white underline hover:text-primary">
                Risk Warning
              </Link>{' '}
              and review our{' '}
              <Link to="/legal-documents" className="text-white underline hover:text-primary">
                Legal Documents
              </Link>
              . Trading forex and CFDs involves significant risk and may not be suitable for all investors.
            </p>
            <p className="mt-4">
              Verify official domains on our{' '}
              <Link to="/official-domains" className="text-white underline hover:text-primary">
                Official Domains
              </Link>{' '}
              page before logging in or sharing personal information.
            </p>
          </IdentitySection>

          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
