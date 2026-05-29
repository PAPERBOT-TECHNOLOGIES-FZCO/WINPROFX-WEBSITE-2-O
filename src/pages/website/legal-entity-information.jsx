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
  BRAND_NAME,
  INCORPORATION_CLARIFICATION,
  INCORPORATION_PDF_PATH,
  INCORPORATION_PDF_TITLE,
  legalEntitySummaryRows,
  LEGAL_ENTITY_NAME,
  officialDomainsWithLabels,
  REGISTERED_AGENT,
  REGISTERED_OFFICE,
  RISK_WARNING_SHORT,
} from '@/lib/company-registration'

export default function LegalEntityInformation() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Legal Entity Information | WINPROFX"
        description="Learn about the legal entity information for WINPROFX, including Winprofx Ltd. incorporation details, registered agent, registered office, and official domains."
        canonicalPath="/legal-entity-information"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Official Information" title="Legal Entity Information" />
      <Container>
        <Card>
          <IdentitySection title="Brand and Legal Entity">
            <p>
              {BRAND_NAME} is the trading brand associated with {LEGAL_ENTITY_NAME}, an International
              Business Company incorporated in Saint Lucia. The company registration information is
              provided for transparency and user verification.
            </p>
          </IdentitySection>

          <IdentitySection title="Incorporation Jurisdiction">
            <RegistrationTable rows={legalEntitySummaryRows} />
            <p className="mt-4">
              <Link to="/company-registration" className="text-white underline hover:text-primary">
                View full company registration details
              </Link>
            </p>
          </IdentitySection>

          <IdentitySection title="Registered Agent">
            <p>{REGISTERED_AGENT}</p>
          </IdentitySection>

          <IdentitySection title="Registered Office">
            <p>{REGISTERED_OFFICE}</p>
          </IdentitySection>

          <IdentitySection title="Official Domains and Portals">
            <ul className="flex flex-col gap-4">
              {officialDomainsWithLabels.map((entry) => (
                <li key={entry.url}>
                  <a
                    href={entry.url}
                    className="text-white underline hover:text-primary font-medium break-all"
                    {...(entry.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : { rel: 'noopener noreferrer' })}
                  >
                    {entry.url}
                  </a>
                  <span className="text-para"> — {entry.label}</span>
                </li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title="Legal Documents">
            <p className="mb-4">
              Certified incorporation documents and other legal documents are available through the{' '}
              <Link to="/legal-documents" className="text-white underline hover:text-primary">
                Legal Documents
              </Link>{' '}
              section.
            </p>
            <a
              href={INCORPORATION_PDF_PATH}
              className="text-white underline hover:text-primary font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {INCORPORATION_PDF_TITLE}
            </a>
          </IdentitySection>

          <IdentitySection title="Compliance Clarification">
            <p>{INCORPORATION_CLARIFICATION}</p>
            <p className="mt-4">
              For regulatory and license-related information, visit the{' '}
              <Link to="/regulatory-information" className="text-white underline hover:text-primary">
                Regulatory Information
              </Link>{' '}
              page.
            </p>
          </IdentitySection>

          <IdentitySection title="Risk Warning">
            <p>{RISK_WARNING_SHORT}</p>
          </IdentitySection>

          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
