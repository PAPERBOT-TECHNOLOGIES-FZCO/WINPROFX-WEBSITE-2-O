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
  RISK_WARNING_SHORT,
  SUPPORT_EMAIL,
  withdrawalMethodRows,
  withdrawalProcessRows,
} from '@/lib/company-registration'

export default function WithdrawalTransparency() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Withdrawal Transparency | WINPROFX"
        description="Learn about WINPROFX withdrawal processes, review steps, KYC and AML checks, possible delays, escalation routes, and required information for withdrawal requests."
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
              Withdrawal processing times may vary depending on the payment method, account
              verification status, compliance review requirements, and third-party payment service
              provider or banking processing times. Specific operational timelines are maintained by
              the operations and compliance teams.
            </p>
          </IdentitySection>

          <IdentitySection title="Withdrawal Process Overview">
            <p>
              When a client submits a withdrawal request, the request typically passes through account
              verification, compliance review, and payment processing stages before funds are released
              to the approved destination.
            </p>
            <ol className="list-decimal pl-5 mt-4 flex flex-col gap-2 text-para">
              <li>Client submits withdrawal request through the official client portal or approved channel</li>
              <li>Account identity and KYC status are verified</li>
              <li>AML and payment method verification checks are performed where applicable</li>
              <li>Account security review is conducted if required</li>
              <li>Approved withdrawal is sent to the payment service provider, bank, or blockchain network</li>
              <li>Client receives confirmation once processing is complete</li>
            </ol>
          </IdentitySection>

          <IdentitySection title="Withdrawal Methods">
            <TrustProcessTable rows={withdrawalMethodRows} caption="Withdrawal methods" />
          </IdentitySection>

          <IdentitySection title="Review and Processing Times">
            <TrustProcessTable rows={withdrawalProcessRows} caption="Withdrawal process steps" />
          </IdentitySection>

          <IdentitySection title="KYC, AML, and Security Checks">
            <p>
              Withdrawals may be delayed if account verification is incomplete, if additional
              documentation is required, or if an AML or security review is triggered. Clients should
              ensure their account profile, payment methods, and identity documents are up to date
              before submitting withdrawal requests.
            </p>
            <p className="mt-4">
              For full deposit and withdrawal policy terms, see the{' '}
              <Link to="/deposit-withdraw" className="text-white underline hover:text-primary">
                Deposit &amp; Withdrawal Policy
              </Link>
              .
            </p>
          </IdentitySection>

          <IdentitySection title="Escalation">
            <p>
              If a withdrawal request is delayed beyond the expected timeframe, clients may escalate
              through official support channels at{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-white underline hover:text-primary">
                {SUPPORT_EMAIL}
              </a>{' '}
              or via the{' '}
              <Link to="/support-and-escalation" className="text-white underline hover:text-primary">
                Support and Escalation
              </Link>{' '}
              page. Include account reference, withdrawal date, amount, and payment method in the
              escalation request.
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
