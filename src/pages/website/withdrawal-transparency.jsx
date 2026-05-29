import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import TrustProcessTable from '@/components/company-identity/trust-process-table'
import StatsPlaceholderGrid from '@/components/company-identity/stats-placeholder-grid'
import SeoHead from '@/components/seo-head'
import {
  RISK_WARNING_SHORT,
  SUPPORT_EMAIL,
  withdrawalDelayReasons,
  withdrawalTimelineRows,
  withdrawalTransparencyStats,
} from '@/lib/company-registration'

export default function WithdrawalTransparency() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Withdrawal Transparency | WINPROFX"
        description="Learn about WINPROFX withdrawal processing, review requirements, expected timelines, escalation process, and important account verification information."
        canonicalPath="/withdrawal-transparency"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Trust & Transparency" title="Withdrawal Transparency" />
      <Container>
        <Card>
          <IdentitySection>
            <p>
              WINPROFX is committed to providing clear information about how withdrawal requests are
              submitted, reviewed, and processed. This page explains the general withdrawal workflow,
              verification requirements, and escalation options available to clients.
            </p>
            <p className="mt-4">
              Withdrawal requests may require account verification, payment method verification,
              AML and KYC checks, and review of trading or account activity where required by internal
              compliance procedures. Processing times may also depend on third-party payment service
              providers, banks, or blockchain networks.
            </p>
          </IdentitySection>

          <IdentitySection title="Withdrawal Process Overview">
            <p>
              When a client submits a withdrawal request, the request typically passes through the
              following stages before funds are released to the approved destination:
            </p>
            <ol className="list-decimal pl-5 mt-4 flex flex-col gap-2 text-para">
              <li>Client submits a withdrawal request through the official client portal or approved channel</li>
              <li>Account identity and KYC status are verified</li>
              <li>Payment method verification and AML checks are performed where applicable</li>
              <li>Trading or account activity may be reviewed where required by compliance</li>
              <li>Account security review is conducted if triggered</li>
              <li>Approved withdrawal is sent to the payment service provider, bank, or blockchain network</li>
              <li>Client receives confirmation once processing is complete</li>
            </ol>
          </IdentitySection>

          <IdentitySection title="Processing Timeline">
            <p className="mb-4">
              The table below outlines standard review and processing expectations by withdrawal method.
              Exact timelines are maintained by the operations and compliance teams.
            </p>
            <TrustProcessTable rows={withdrawalTimelineRows} caption="Withdrawal processing timeline by method" />
          </IdentitySection>

          <IdentitySection title="Common Reasons for Delay">
            <p className="mb-4">
              Withdrawals may take longer than expected for reasons including, but not limited to:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-para">
              {withdrawalDelayReasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title="Escalation Process">
            <p>
              If a withdrawal is delayed beyond the standard timeline, contact WINPROFX support with the
              following information:
            </p>
            <ul className="list-disc pl-5 mt-4 flex flex-col gap-2 text-para">
              <li>Registered email address</li>
              <li>MT5 or account ID</li>
              <li>Withdrawal request ID or reference (if available)</li>
              <li>Date and amount of the withdrawal request</li>
              <li>Payment method used for the withdrawal</li>
            </ul>
            <p className="mt-4">
              Email{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-white underline hover:text-primary">
                {SUPPORT_EMAIL}
              </a>{' '}
              or visit{' '}
              <Link to="/support-and-escalation" className="text-white underline hover:text-primary">
                Support and Escalation
              </Link>
              .
            </p>
          </IdentitySection>

          <IdentitySection title="Transparency Statistics">
            <p className="mb-4">
              Operational withdrawal metrics will be published here after internal verification. Figures
              below are placeholders until approved data is available.
            </p>
            <StatsPlaceholderGrid items={withdrawalTransparencyStats} />
          </IdentitySection>

          <IdentitySection title="Risk and Compliance Note">
            <p>
              Withdrawals may be reviewed for KYC completeness, AML compliance, account security,
              payment method verification, and adherence to applicable terms and promotions. Clients
              should ensure account profiles and payment methods are up to date before submitting
              requests.
            </p>
            <p className="mt-4">
              For full deposit and withdrawal policy terms, see the{' '}
              <Link to="/deposit-withdraw" className="text-white underline hover:text-primary">
                Deposit &amp; Withdrawal Policy
              </Link>
              .
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
