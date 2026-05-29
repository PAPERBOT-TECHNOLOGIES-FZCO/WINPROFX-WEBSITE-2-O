import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import SeoHead from '@/components/seo-head'

const officialDomains = [
  {
    url: 'https://winprofx.org/',
    purpose: 'Main official WINPROFX website',
    external: false,
  },
  {
    url: 'https://winprofx.com/',
    purpose: 'Official alternate / marketing domain',
    external: true,
  },
  {
    url: 'https://winprofx.ae/',
    purpose: 'Official UAE/regional domain',
    external: true,
  },
  {
    url: 'https://my.winprofx.org/',
    purpose: 'Official client portal',
    external: true,
  },
  {
    url: 'https://partner.winprofx.org/',
    purpose: 'Official partner / IB portal',
    external: true,
  },
]

const relatedLinks = [
  { path: '/company-profile', label: 'Company Profile' },
  { path: '/official-domains', label: 'Official Domains' },
  { path: '/contact', label: 'Contact' },
  { path: '/risk-warning', label: 'Risk Warning' },
]

export default function VerifyWinprofx() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Verify WINPROFX Official Websites and Portals"
        description="Verify official WINPROFX domains, including winprofx.org, winprofx.com, winprofx.ae, client portal, and partner portal."
        canonicalPath="/verify-winprofx"
        pageName="Verify WINPROFX Official Websites and Portals"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Official Verification" title="Verify WINPROFX" />
      <Container>
        <Card>
          <IdentitySection>
            <p>
              This page lists the official websites and portals operated by WINPROFX. Users should verify
              domain names before logging in, registering, depositing funds, or sharing personal information.
            </p>
          </IdentitySection>

          <IdentitySection title="Official Domains">
            <div className="overflow-x-auto -mx-1 px-1">
              <table className="w-full min-w-[520px] text-sm md:text-base border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    <th scope="col" className="py-3 pr-4 font-semibold text-white">
                      Domain
                    </th>
                    <th scope="col" className="py-3 font-semibold text-white">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {officialDomains.map((row) => (
                    <tr key={row.url} className="border-b border-white/8 last:border-0">
                      <td className="py-3 pr-4 align-top">
                        <a
                          href={row.url}
                          className="text-white underline hover:text-primary break-all"
                          {...(row.external
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : { rel: 'noopener noreferrer' })}
                        >
                          {row.url}
                        </a>
                      </td>
                      <td className="py-3 align-top text-para">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </IdentitySection>

          <IdentitySection title="Safety Note">
            <p>
              If a website claims to represent WINPROFX but is not listed here, contact WINPROFX support
              before using it. Visit our{' '}
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

          <IdentitySection title="Related Information">
            <ul className="flex flex-col gap-2">
              {relatedLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white underline hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </IdentitySection>

          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
