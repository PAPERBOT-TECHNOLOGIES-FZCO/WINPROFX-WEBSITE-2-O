import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import DubaiLicenseTable from '@/components/company-identity/dubai-license-table'
import LicenseClarification from '@/components/company-identity/license-clarification'
import RegistrationTable from '@/components/company-identity/registration-table'
import SeoHead from '@/components/seo-head'
import {
  DUBAI_BUSINESS_NAME,
  DUBAI_LICENSE_CATEGORY,
  DUBAI_SCOPE_CLARIFICATION,
  DUBAI_VERIFICATION_NOTE,
  dubaiOfficeRows,
  RISK_WARNING_SHORT,
} from '@/lib/company-registration'

export default function DubaiProfessionalLicense() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Dubai Professional License | WINPROFX"
        description="View the Dubai Professional License information for WINPROFX LTD - DUBAI BRANCH - REP. OFFICE, including license number, activity, status, issue date, expiry date, and verification note."
        canonicalPath="/dubai-professional-license"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Legal & Compliance" title="Dubai Professional License" />
      <Container>
        <Card>
          <IdentitySection>
            <p>
              {DUBAI_BUSINESS_NAME} holds a Dubai Professional License issued by the{' '}
              {DUBAI_LICENSE_CATEGORY}. This page provides license information based on the certified
              Dubai Professional License document. The license activity is listed as Representative
              Office and the activity status is Active.
            </p>
            <p className="mt-4">
              A Dubai Professional License for a Representative Office confirms local business
              registration and permitted representative office activity. It should be understood
              separately from any financial services, forex broker, or CFD broker regulatory
              authorization.
            </p>
          </IdentitySection>

          <IdentitySection title="License Details">
            <DubaiLicenseTable />
          </IdentitySection>

          <IdentitySection title="Dubai Office Information">
            <RegistrationTable rows={dubaiOfficeRows} />
          </IdentitySection>

          <IdentitySection title="Document Verification">
            <p>{DUBAI_VERIFICATION_NOTE}</p>
            <p className="mt-4">
              Users who hold or receive a copy of the original license document should verify it using
              the QR code provided on the document through official Department of Economy and Tourism
              verification channels.
            </p>
          </IdentitySection>

          <IdentitySection title="Scope Clarification">
            <p>{DUBAI_SCOPE_CLARIFICATION}</p>
            <LicenseClarification showDubaiScope={false} />
          </IdentitySection>

          <IdentitySection title="Related Information">
            <ul className="flex flex-col gap-2">
              <li><Link to="/uae-representative-office/" className="text-white underline hover:text-primary">UAE Representative Office</Link></li>
              <li><Link to="/legal-entity-information/" className="text-white underline hover:text-primary">Legal Entity Information</Link></li>
              <li><Link to="/regulatory-information/" className="text-white underline hover:text-primary">Regulatory Information</Link></li>
              <li><Link to="/official-domains/" className="text-white underline hover:text-primary">Official Domains</Link></li>
              <li><Link to="/verify-winprofx/" className="text-white underline hover:text-primary">Verify WINPROFX</Link></li>
              <li><Link to="/risk-warning/" className="text-white underline hover:text-primary">Risk Warning</Link></li>
            </ul>
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
