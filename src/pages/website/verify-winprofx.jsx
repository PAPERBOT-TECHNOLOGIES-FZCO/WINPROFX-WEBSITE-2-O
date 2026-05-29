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
import { officialDomainsWithLabels, verifySummaryRows } from '@/lib/company-registration'

const verifyChecklistSteps = [
  'Confirm the website URL matches an official WINPROFX domain (winprofx.org, winprofx.com, winprofx.ae, my.winprofx.org, or partner.winprofx.org).',
  'Verify the brand name displayed is WINPROFX.',
  'Confirm the legal entity is Winprofx Ltd. (Saint Lucia incorporation).',
  'Check Saint Lucia incorporation number 2023-00197 on the Company Registration page.',
  'Verify Dubai Professional License No. 1423678 and business name WINPROFX LTD - DUBAI BRANCH - REP. OFFICE.',
  'Confirm Dubai license activity is Representative Office and status is Active.',
  'Use official support email support@winprofx.com or the Contact page for verification questions.',
  'Do not share passwords, OTPs, or payment card details with unofficial contacts.',
  'If in doubt, contact support before registering, logging in, or depositing funds.',
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
              step-by-step verification checklist. Users should verify domain names and company identity
              before logging in, registering, depositing funds, or sharing personal information.
            </p>
          </IdentitySection>

          <IdentitySection title="9-Step Verification Checklist">
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
              <li><Link to="/company-profile" className="text-white underline hover:text-primary">Company Profile</Link></li>
              <li><Link to="/company-registration" className="text-white underline hover:text-primary">Company Registration</Link></li>
              <li><Link to="/dubai-professional-license" className="text-white underline hover:text-primary">Dubai Professional License</Link></li>
              <li><Link to="/official-domains" className="text-white underline hover:text-primary">Official Domains</Link></li>
              <li><Link to="/regulatory-information" className="text-white underline hover:text-primary">Regulatory Information</Link></li>
              <li><Link to="/contact" className="text-white underline hover:text-primary">Contact</Link></li>
              <li><Link to="/risk-warning" className="text-white underline hover:text-primary">Risk Warning</Link></li>
            </ul>
          </IdentitySection>

          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
