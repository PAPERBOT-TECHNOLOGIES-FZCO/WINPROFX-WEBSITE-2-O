import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import RegistrationTable from '@/components/company-identity/registration-table'
import LicenseClarification from '@/components/company-identity/license-clarification'
import SeoHead from '@/components/seo-head'
import {
  DUBAI_ACTIVITY_STATUS,
  DUBAI_BUSINESS_NAME,
  DUBAI_EXPIRY_DATE,
  DUBAI_ISSUE_DATE,
  DUBAI_LEGAL_TYPE,
  DUBAI_LICENSE_ACTIVITY,
  DUBAI_LICENSE_NUMBER,
  DUBAI_SCOPE_CLARIFICATION,
  RISK_WARNING_SHORT,
} from '@/lib/company-registration'

const uaeLicenseSummaryRows = [
  { label: 'Business Name', value: DUBAI_BUSINESS_NAME },
  { label: 'License Number', value: DUBAI_LICENSE_NUMBER },
  { label: 'License Activity', value: DUBAI_LICENSE_ACTIVITY },
  { label: 'Activity Status', value: DUBAI_ACTIVITY_STATUS },
  { label: 'Issue Date', value: DUBAI_ISSUE_DATE },
  { label: 'Expiry Date', value: DUBAI_EXPIRY_DATE },
  { label: 'Legal Type', value: DUBAI_LEGAL_TYPE },
  {
    label: 'Official UAE Domain',
    value: 'https://winprofx.ae/',
    href: 'https://winprofx.ae/',
    external: true,
  },
]

export default function UaeRepresentativeOffice() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="UAE Representative Office | WINPROFX"
        description="Learn about the WINPROFX UAE representative office, Dubai Professional License, official UAE domain, and verification information."
        canonicalPath="/uae-representative-office"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Official Information" title="UAE Representative Office" />
      <Container>
        <Card>
          <IdentitySection>
            <p>
              WINPROFX operates a UAE representative office under the business name{' '}
              {DUBAI_BUSINESS_NAME}. The office is registered under Dubai Professional License No.{' '}
              {DUBAI_LICENSE_NUMBER} with license activity listed as Representative Office.
            </p>
            <p className="mt-4">
              The UAE representative office provides a local business presence for WINPROFX in the
              United Arab Emirates. It supports information sharing, support coordination, brand
              representation, and client or partner communication where permitted under the
              representative office license scope.
            </p>
          </IdentitySection>

          <IdentitySection title="Role of a Representative Office">
            <p>
              A representative office is a type of business registration that allows a foreign
              company to establish a local presence for limited activities such as marketing,
              liaison, and coordination. It is not the same as a full trading license or a financial
              services broker license.
            </p>
            <ul className="list-disc pl-5 mt-4 flex flex-col gap-2 text-para">
              <li>Local business presence and brand representation in the UAE</li>
              <li>Information and support coordination for clients and partners</li>
              <li>Communication through official WINPROFX channels where permitted</li>
              <li>Connection to the official UAE regional domain at winprofx.ae</li>
            </ul>
          </IdentitySection>

          <IdentitySection title="Dubai License Summary">
            <RegistrationTable rows={uaeLicenseSummaryRows} />
            <p className="mt-4">
              <Link to="/dubai-professional-license" className="text-white underline hover:text-primary">
                View full Dubai Professional License details
              </Link>
            </p>
          </IdentitySection>

          <IdentitySection title="Important Clarification">
            <p>{DUBAI_SCOPE_CLARIFICATION}</p>
            <LicenseClarification showDubaiScope={false} />
          </IdentitySection>

          <IdentitySection title="User Verification Guidance">
            <p>Before registering, logging in, depositing funds, or sharing personal information, users should verify:</p>
            <ul className="list-disc pl-5 mt-4 flex flex-col gap-2 text-para">
              <li>The exact website domain (winprofx.org, winprofx.com, or winprofx.ae)</li>
              <li>The license business name matches {DUBAI_BUSINESS_NAME}</li>
              <li>Official support channels (support@winprofx.com and the Contact page)</li>
              <li>Client portal URL: https://my.winprofx.org/</li>
              <li>Partner portal URL: https://partner.winprofx.org/</li>
            </ul>
            <p className="mt-4">
              <Link to="/verify-winprofx" className="text-white underline hover:text-primary">
                Use the full WINPROFX verification checklist
              </Link>
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
