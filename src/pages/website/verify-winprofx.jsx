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
import {
  officialDomainsWithLabels,
  verifySummaryRows,
  verifyTrustPageLinks,
} from '@/lib/company-registration'

const verifyChecklistSteps = [
  'Verify the brand name is WINPROFX',
  'Verify the legal entity is Winprofx Ltd. (Saint Lucia incorporation)',
  'Check Saint Lucia incorporation number 2023-00197 on Company Registration',
  'Verify Dubai Professional License No. 1423678 and business name WINPROFX LTD - DUBAI BRANCH - REP. OFFICE (Representative Office activity)',
  'Confirm the website URL matches an official WINPROFX domain (winprofx.org, winprofx.com, winprofx.ae, my.winprofx.org, or partner.winprofx.org)',
  'Verify the client portal at https://my.winprofx.org/',
  'Verify the partner portal at https://partner.winprofx.org/',
  'Use official support email support@winprofx.com or the Contact page',
  'Read the Risk Warning and Legal Documents before trading or depositing',
]

export default function VerifyWINPROFX() {
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
              This page lists the official websites and portals operated by WINPROFX and provides a
              verification checklist. Users should confirm brand identity, legal entity, licenses,
              domains, and support channels before logging in, registering, depositing funds, or sharing
              personal information.
            </p>
          </IdentitySection>

          <IdentitySection title="User Verification Checklist">
            <ol className="list-decimal pl-5 flex flex-col gap-3 text-para">
              {verifyChecklistSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </IdentitySection>

          <IdentitySection title="Verification Summary">
            <RegistrationTable rows={verifySummaryRows} />
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
          </IdentitySection>

          <IdentitySection title="Trust, Legal, and Transparency Pages">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {verifyTrustPageLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white underline hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/legal-documents" className="text-white underline hover:text-primary">
                  Legal Documents
                </Link>
              </li>
            </ul>
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

          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
