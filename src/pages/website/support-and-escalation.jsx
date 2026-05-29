import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import SeoHead from '@/components/seo-head'
import { RISK_WARNING_SHORT, SUPPORT_EMAIL } from '@/lib/company-registration'

export default function SupportAndEscalation() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Support and Escalation | WINPROFX"
        description="Contact WINPROFX support, learn about ticket submission, and find escalation paths for withdrawals, KYC, and IB partner issues."
        canonicalPath="/support-and-escalation"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Trust & Transparency" title="Support and Escalation" />
      <Container>
        <Card>
          <IdentitySection>
            <p>
              WINPROFX provides official support channels for clients, partners, and prospective
              users. This page explains how to contact support, what to include in support requests,
              and how to escalate unresolved issues.
            </p>
          </IdentitySection>

          <IdentitySection title="Official Support Channels">
            <ul className="list-disc pl-5 flex flex-col gap-2 text-para">
              <li>
                Email:{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-white underline hover:text-primary">
                  {SUPPORT_EMAIL}
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-white underline hover:text-primary">
                  Contact page
                </Link>{' '}
                on winprofx.org
              </li>
              <li>
                Client portal support (for registered clients):{' '}
                <a href="https://my.winprofx.org/" className="text-white underline hover:text-primary" rel="noopener noreferrer" target="_blank">
                  https://my.winprofx.org/
                </a>
              </li>
            </ul>
          </IdentitySection>

          <IdentitySection title="Support Ticket Flow">
            <ol className="list-decimal pl-5 flex flex-col gap-2 text-para">
              <li>Contact support through email or the Contact page with a clear subject line</li>
              <li>Include account reference, registered email, and issue description</li>
              <li>Attach relevant screenshots or documents if applicable</li>
              <li>Support team acknowledges receipt and assigns a reference where applicable</li>
              <li>Issue is investigated by the appropriate team (support, compliance, or operations)</li>
              <li>Client receives a response with outcome or next steps</li>
            </ol>
          </IdentitySection>

          <IdentitySection title="Escalation Paths">
            <h3 className="text-base font-semibold text-white mb-2">Withdrawal Delays</h3>
            <p className="mb-4">
              If a withdrawal exceeds expected processing time, escalate with withdrawal date, amount,
              payment method, and any reference numbers. See{' '}
              <Link to="/withdrawal-transparency" className="text-white underline hover:text-primary">
                Withdrawal Transparency
              </Link>{' '}
              for process details.
            </p>

            <h3 className="text-base font-semibold text-white mb-2">KYC and Verification</h3>
            <p className="mb-4">
              For document review delays or verification status questions, contact support with your
              registered email and account reference. Ensure submitted documents meet the stated
              requirements.
            </p>

            <h3 className="text-base font-semibold text-white mb-2">Introducing Broker (IB) Partners</h3>
            <p>
              IB partners should use partner portal channels or email support with partner ID and
              business reference. Partner portal:{' '}
              <a href="https://partner.winprofx.org/" className="text-white underline hover:text-primary" rel="noopener noreferrer" target="_blank">
                https://partner.winprofx.org/
              </a>
            </p>
          </IdentitySection>

          <IdentitySection title="Complaints">
            <p>
              For formal complaints, see{' '}
              <Link to="/complaints-and-dispute-resolution" className="text-white underline hover:text-primary">
                Complaints and Dispute Resolution
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
