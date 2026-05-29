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
  complaintsProcessRows,
  RISK_WARNING_SHORT,
  SUPPORT_EMAIL,
} from '@/lib/company-registration'

export default function ComplaintsAndDisputeResolution() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Complaints and Dispute Resolution | WINPROFX"
        description="Learn how to submit complaints to WINPROFX, what information is required, how complaints are reviewed, and the escalation and response process."
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
              other trading-related matters through official channels.
            </p>
            <p className="mt-4">
              Clients should only submit complaints through official WINPROFX support channels. Do not
              share account passwords, payment card details, or identity documents through unofficial
              websites, social media messages, or third-party contacts claiming to represent WINPROFX.
            </p>
          </IdentitySection>

          <IdentitySection title="How to Submit a Complaint">
            <p>
              Complaints may be submitted by email to{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-white underline hover:text-primary">
                {SUPPORT_EMAIL}
              </a>{' '}
              with the subject line &quot;Complaint&quot; or through the official{' '}
              <Link to="/contact" className="text-white underline hover:text-primary">
                Contact
              </Link>{' '}
              page. Include as much detail as possible to help the support and compliance teams
              investigate the issue efficiently.
            </p>
          </IdentitySection>

          <IdentitySection title="Complaints Process">
            <TrustProcessTable rows={complaintsProcessRows} caption="Complaints handling process" />
          </IdentitySection>

          <IdentitySection title="Information Required">
            <ul className="list-disc pl-5 flex flex-col gap-2 text-para">
              <li>Full registered name and email address</li>
              <li>Account reference or client ID (if applicable)</li>
              <li>Date and time of the issue</li>
              <li>Detailed description of the complaint</li>
              <li>Supporting documents or screenshots (if available)</li>
              <li>Preferred contact method for follow-up</li>
            </ul>
          </IdentitySection>

          <IdentitySection title="Privacy Note for Public Reviews">
            <p>
              Clients who post public reviews or comments on third-party websites should avoid sharing
              sensitive account information, personal identity documents, or payment details. WINPROFX
              official support will never request passwords or full payment card numbers by email or
              unofficial channels.
            </p>
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
