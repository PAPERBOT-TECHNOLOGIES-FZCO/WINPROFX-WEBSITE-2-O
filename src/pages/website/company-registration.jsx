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
import LicenseClarification from '@/components/company-identity/license-clarification'
import {
  DOCUMENT_TYPES,
  INCORPORATION_CLARIFICATION,
  INCORPORATION_PDF_PATH,
  INCORPORATION_PDF_TITLE,
  INCORPORATION_SUBSCRIBER,
  LEGAL_ENTITY_NAME,
  relatedPageLinks,
  registrationDetailsRows,
  RISK_WARNING_SHORT,
  shareCapitalRows,
} from '@/lib/company-registration'

export default function CompanyRegistration() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Company Registration | WINPROFX"
        description="View WINPROFX company registration information, including Winprofx Ltd. incorporation details, official domains, legal documents, and risk warning."
        canonicalPath="/company-registration"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Official Information" title="Company Registration" />
      <Container>
        <Card>
          <IdentitySection>
            <p>
              WINPROFX is associated with {LEGAL_ENTITY_NAME}, an International Business Company
              incorporated in Saint Lucia. The company&apos;s certified incorporation documents include a{' '}
              {DOCUMENT_TYPES}.
            </p>
          </IdentitySection>

          <IdentitySection title="Company Registration Details">
            <RegistrationTable rows={registrationDetailsRows} />
          </IdentitySection>

          <IdentitySection title="Share and Capital Information">
            <RegistrationTable rows={shareCapitalRows} />
            <p className="mt-4">
              The company&apos;s share capital structure is defined in the Memorandum of Association
              and Articles of Association. {LEGAL_ENTITY_NAME} has authorized shares denominated in USD
              with ordinary shares carrying one vote per share. Shares issued by the company are not
              redeemable on demand.
            </p>
          </IdentitySection>

          <IdentitySection title="Memorandum and Articles of Association">
            <p>
              The certified incorporation document set includes the Certificate of Incorporation,
              Memorandum of Association, and Articles of Association for {LEGAL_ENTITY_NAME}. The
              Memorandum of Association defines the company&apos;s constitution, share structure, and
              objects. The Articles of Association govern internal management and shareholder rights.
            </p>
            <p className="mt-4">
              The subscriber for incorporation was {INCORPORATION_SUBSCRIBER}.
            </p>
          </IdentitySection>

          <IdentitySection title="Dubai Branch Registration">
            <p>
              {LEGAL_ENTITY_NAME} also holds a Dubai Professional License for its UAE representative
              office. See{' '}
              <Link to="/dubai-professional-license" className="text-white underline hover:text-primary">
                Dubai Professional License
              </Link>{' '}
              and{' '}
              <Link to="/uae-representative-office" className="text-white underline hover:text-primary">
                UAE Representative Office
              </Link>{' '}
              for details.
            </p>
          </IdentitySection>

          <IdentitySection title="Important Clarification">
            <p>{INCORPORATION_CLARIFICATION}</p>
            <div className="mt-4">
              <LicenseClarification />
            </div>
          </IdentitySection>

          <IdentitySection title="Certified Incorporation Documents">
            <p className="mb-4">
              Certified incorporation documents for {LEGAL_ENTITY_NAME} are available for download:
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

          <IdentitySection title="Risk Warning">
            <p>{RISK_WARNING_SHORT}</p>
          </IdentitySection>

          <IdentitySection title="Related Information">
            <ul className="flex flex-col gap-2">
              {relatedPageLinks.map((link) => (
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
