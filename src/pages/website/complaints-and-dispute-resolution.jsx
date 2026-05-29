import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import TrustProcessTable from '@/components/company-identity/trust-process-table'
import SeoHead from '@/components/seo-head'
import {
  ACCOUNT_SPECIFIC_PRIVACY_NOTE,
  complaintsRequiredInfo,
  complaintsReviewSteps,
  complaintsTimelineRows,
  PUBLIC_REVIEW_RESPONSE_POLICY,
  RISK_WARNING_SHORT,
  SUPPORT_EMAIL,
} from '@/lib/company-registration'

export default function ComplaintsAndDisputeResolution() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Complaints and Dispute Resolution | WINPROFX"
        description="Learn how WINPROFX handles client complaints, support escalations, dispute reviews, and account-related concerns."
        canonicalPath="/complaints-and-dispute-resolution"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Trust & Transparency" title="Complaints and Dispute Resolution" />
      <Container>
        <Card>
          <IdentitySection>
            <p>
              WINPROFX provides a structured complaints process so clients and partners can raise
              concerns about account services, support interactions, withdrawals, verification, or
              other trading-related matters through official channels only.
            </p>
            <p className="mt-4">
              Do not share account passwords, payment card details, or identity documents through
              unofficial websites, social media messages, or third parties claiming to represent WINPROFX.
            </p>
          </IdentitySection>

          <IdentitySection title="How to Submit a Complaint">
            <p className="mb-4">
              Complaints may be submitted by email to{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-white underline hover:text-primary">
                {SUPPORT_EMAIL}
              </a>{' '}
              with the subject line &quot;Complaint&quot; or through the official{' '}
              <Link to="/contact" className="text-white underline hover:text-primary">
                Contact
              </Link>{' '}
              page. Please include:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-para">
              {complaintsRequiredInfo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title="Complaint Review Process">
            <ol className="list-decimal pl-5 flex flex-col gap-3 text-para">
              {complaintsReviewSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </IdentitySection>

          <IdentitySection title="Response Timelines">
            <p className="mb-4">
              Target response times are set by internal operations and compliance procedures. Approved
              SLAs will be published when verified.
            </p>
            <TrustProcessTable rows={complaintsTimelineRows} caption="Complaints response timelines" />
          </IdentitySection>

          <IdentitySection title="Account-Specific Privacy">
            <p>{ACCOUNT_SPECIFIC_PRIVACY_NOTE}</p>
          </IdentitySection>

          <IdentitySection title="Public Review Response Policy">
            <p>{PUBLIC_REVIEW_RESPONSE_POLICY}</p>
          </IdentitySection>

          <IdentitySection title="Escalation">
            <p>
              If a complaint is not resolved satisfactorily through initial support review, it may be
              escalated to compliance or operations management. See{' '}
              <Link to="/support-and-escalation" className="text-white underline hover:text-primary">
                Support and Escalation
              </Link>{' '}
              for escalation routes.
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
