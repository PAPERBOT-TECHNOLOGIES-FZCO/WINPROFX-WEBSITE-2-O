import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import SeoHead from '@/components/seo-head'
import {
  INCORPORATION_PDF_PATH,
  INCORPORATION_PDF_TITLE,
} from '@/lib/company-registration'

const legalDocuments = [
  {
    name: 'Company Incorporation Documents',
    description:
      'Certificate of Incorporation, Memorandum of Association, and Articles of Association for Winprofx Ltd.',
    pdf: true,
  },
  {
    name: 'Company Registration Information',
    path: '/company-registration',
    description: 'Full company registration details for Winprofx Ltd.',
  },
  {
    name: 'Legal Entity Information',
    path: '/legal-entity-information',
    description: 'Legal entity, registered agent, registered office, and official domains.',
  },
  {
    name: 'Regulatory Information',
    path: '/regulatory-information',
    description: 'Company incorporation and financial services license clarification.',
  },
  {
    name: 'Risk Warning',
    path: '/risk-warning',
    description: 'Summary of key trading risks for forex and CFD products.',
  },
  {
    name: 'Terms and Conditions',
    path: '/terms',
    description: 'Terms governing use of WINPROFX services and platforms.',
  },
  {
    name: 'Privacy Policy',
    path: '/policy',
    description: 'How WINPROFX collects and uses personal data.',
  },
  {
    name: 'AML Policy',
    path: '/aml-policy',
    description: 'Anti-money laundering and compliance policies.',
  },
  {
    name: 'Deposit and Withdrawal Policy',
    path: '/deposit-withdraw',
    description: 'Policies for funding and withdrawing from accounts.',
  },
]

export default function LegalDocuments() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Legal Documents | WINPROFX"
        description="Access WINPROFX legal documents, including company incorporation information, risk warning, terms, privacy policy, and other important documents."
        canonicalPath="/legal-documents"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Legal & Compliance" title="Legal Documents" />
      <Container>
        <Card>
          <IdentitySection>
            <p>
              The following legal and policy documents apply to WINPROFX services. Please read them
              carefully before opening an account or using our platforms.
            </p>
          </IdentitySection>

          <IdentitySection title="Available Documents">
            <ul className="flex flex-col gap-4">
              {legalDocuments.map((doc) => (
                <li key={doc.name}>
                  {doc.pdf ? (
                    <>
                      <span className="text-white font-medium text-lg">{doc.name}</span>
                      <p className="mt-1">{doc.description}</p>
                      <p className="mt-2">
                        <a
                          href={INCORPORATION_PDF_PATH}
                          className="text-white underline hover:text-primary font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {INCORPORATION_PDF_TITLE}
                        </a>
                      </p>
                    </>
                  ) : (
                    <>
                      <Link
                        to={doc.path}
                        className="text-white underline hover:text-primary font-medium text-lg"
                      >
                        {doc.name}
                      </Link>
                      <p className="mt-1">{doc.description}</p>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title="Questions">
            <p>
              For questions about these documents, contact{' '}
              <a href="mailto:support@winprofx.com" className="text-white underline hover:text-primary">
                support@winprofx.com
              </a>{' '}
              or visit our{' '}
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
