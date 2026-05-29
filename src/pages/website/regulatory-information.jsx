import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import RegistrationTable from '@/components/company-identity/registration-table'
import DubaiLicenseTable from '@/components/company-identity/dubai-license-table'
import LicenseClarification from '@/components/company-identity/license-clarification'
import SeoHead from '@/components/seo-head'
import {
  COMPANY_TYPE,
  DOCUMENT_TYPES,
  FINANCIAL_LICENSE_CLARIFICATION,
  FINANCIAL_LICENSE_PENDING,
  INCORPORATION_DATE,
  INCORPORATION_NUMBER,
  INCORPORATION_PDF_PATH,
  INCORPORATION_PDF_TITLE,
  JURISDICTION,
  LEGAL_ENTITY_NAME,
  LICENSE_SCOPE_CLARIFICATION,
  RISK_WARNING_SHORT,
} from '@/lib/company-registration'

const incorporationSummaryRows = [
  { label: 'Legal Entity', value: LEGAL_ENTITY_NAME },
  { label: 'Jurisdiction', value: JURISDICTION },
  { label: 'Incorporation Number', value: INCORPORATION_NUMBER },
  { label: 'Incorporation Date', value: INCORPORATION_DATE },
  { label: 'Company Type', value: COMPANY_TYPE },
]

export default function RegulatoryInformation() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Regulatory Information | WINPROFX"
        description="View WINPROFX regulatory and legal information, including Saint Lucia incorporation, Dubai Professional License, license scope clarification, and risk warning."
        canonicalPath="/regulatory-information"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Legal & Compliance" title="Regulatory Information" />
      <Container>
        <Card>
          <IdentitySection title="Company Incorporation">
            <p className="mb-4">
              {LEGAL_ENTITY_NAME} is incorporated in {JURISDICTION} as an {COMPANY_TYPE}. The
              company&apos;s certified incorporation documents include a {DOCUMENT_TYPES}.
            </p>
            <RegistrationTable rows={incorporationSummaryRows} />
            <p className="mt-4">
              <Link to="/company-registration" className="text-white underline hover:text-primary">
                View full company registration details
              </Link>
            </p>
          </IdentitySection>

          <IdentitySection title="Dubai Professional License">
            <p className="mb-4">
              {LEGAL_ENTITY_NAME} holds a Dubai Professional License for its UAE representative
              office. The license activity is listed as Representative Office.
            </p>
            <DubaiLicenseTable />
            <p className="mt-4">
              <Link to="/dubai-professional-license" className="text-white underline hover:text-primary">
                View full Dubai Professional License page
              </Link>
            </p>
          </IdentitySection>

          <IdentitySection title="License Scope Clarification">
            <p>{LICENSE_SCOPE_CLARIFICATION}</p>
            <div className="mt-4">
              <LicenseClarification showDubaiScope={false} />
            </div>
          </IdentitySection>

          <IdentitySection title="Financial Services License Clarification">
            <p>{FINANCIAL_LICENSE_CLARIFICATION}</p>
            <p className="mt-4 text-para italic">{FINANCIAL_LICENSE_PENDING}</p>
          </IdentitySection>

          <IdentitySection title="Document Availability">
            <p>
              Certified incorporation documents are available under the{' '}
              <Link to="/legal-documents" className="text-white underline hover:text-primary">
                Legal Documents
              </Link>{' '}
              section and on the{' '}
              <Link to="/company-registration" className="text-white underline hover:text-primary">
                Company Registration
              </Link>{' '}
              page. Dubai license details are published on-page at{' '}
              <Link to="/dubai-professional-license" className="text-white underline hover:text-primary">
                Dubai Professional License
              </Link>
              .
            </p>
            <p className="mt-4">
              <a
                href={INCORPORATION_PDF_PATH}
                className="text-white underline hover:text-primary font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {INCORPORATION_PDF_TITLE}
              </a>
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
