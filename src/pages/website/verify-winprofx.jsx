import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import RegistrationTable from '@/components/company-identity/registration-table'
import SeoHead from '@/components/seo-head'
import { officialDomainsWithLabels, verifyLegalEntityRows } from '@/lib/company-registration'

const relatedLinks = [
  { path: '/company-profile', label: 'Company Profile' },
  { path: '/company-registration', label: 'Company Registration' },
  { path: '/official-domains', label: 'Official Domains' },
  { path: '/contact', label: 'Contact' },
  { path: '/risk-warning', label: 'Risk Warning' },
]

export default function VerifyWinprofx() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Verify WINPROFX | Official Websites and Portals"
        description="Verify official WINPROFX websites and portals before logging in, registering, depositing funds, or sharing personal information."
        canonicalPath="/verify-winprofx"
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

          <IdentitySection title="Verify Legal Entity">
            <RegistrationTable rows={verifyLegalEntityRows} />
          </IdentitySection>

          <IdentitySection title="Verify Official Domains">
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
                  {officialDomainsWithLabels.map((row) => (
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
                      <td className="py-3 align-top text-para">{row.label}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Always confirm that the browser address exactly matches one of the official domains listed
              above.
            </p>
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
