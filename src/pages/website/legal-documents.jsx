import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import SeoHead from '@/components/seo-head'

const legalDocuments = [
  { name: 'Privacy Policy', path: '/policy', description: 'How WINPROFX collects and uses personal data.' },
  { name: 'Terms & Conditions', path: '/terms', description: 'Terms governing use of WINPROFX services and platforms.' },
  { name: 'AML Policy', path: '/aml-policy', description: 'Anti-money laundering and compliance policies.' },
  { name: 'Deposit & Withdrawal Policy', path: '/deposit-withdraw', description: 'Policies for funding and withdrawing from accounts.' },
  { name: 'Restricted Countries', path: '/restricted-countries', description: 'Countries and regions where services are not offered.' },
  { name: 'Risk Disclosure', path: '/risk-disclosure', description: 'Full risk disclosure statement for trading products.' },
  { name: 'Risk Warning', path: '/risk-warning', description: 'Summary of key trading risks for forex and CFD products.' },
]

export default function LegalDocuments() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Legal Documents | WINPROFX"
        description="Access WINPROFX legal, risk, policy, and document links."
        canonicalPath="/legal-documents"
        pageName="Legal Documents"
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
                <li key={doc.path}>
                  <Link to={doc.path} className="text-white underline hover:text-primary font-medium text-lg">
                    {doc.name}
                  </Link>
                  <p className="mt-1">{doc.description}</p>
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
