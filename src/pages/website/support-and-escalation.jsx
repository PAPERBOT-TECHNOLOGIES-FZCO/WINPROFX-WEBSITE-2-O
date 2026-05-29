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

const clientInfoRequired = [
  'Registered email address',
  'Account or MT5 ID',
  'Clear description of the issue',
  'Relevant dates, amounts, or transaction references',
  'Screenshots or documents where applicable',
  'Withdrawal request ID for withdrawal-related escalations',
]

export default function SupportAndEscalation() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Support and Escalation | WINPROFX"
        description="Find official WINPROFX support and escalation information for account, withdrawal, KYC, deposit, and partner-related queries."
        canonicalPath="/support-and-escalation"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Trust & Transparency" title="Support and Escalation" />
      <Container>
        <Card>
          <IdentitySection>
            <p>
              WINPROFX provides official support channels for clients, partners, and prospective users.
              This page explains how to contact support, what information to include, and how to escalate
              unresolved issues through verified channels only.
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
                <Link to="/contact/" className="text-white underline hover:text-primary">
                  Contact page
                </Link>{' '}
                on winprofx.org
              </li>
              <li>
                Client portal (registered clients):{' '}
                <a href="https://my.winprofx.org/" className="text-white underline hover:text-primary" rel="noopener noreferrer" target="_blank">
                  https://my.winprofx.org/
                </a>
              </li>
            </ul>
          </IdentitySection>

          <IdentitySection title="Support Ticket Process">
            <ol className="list-decimal pl-5 flex flex-col gap-2 text-para">
              <li>Contact support through email or the Contact page with a clear subject line</li>
              <li>Include account reference, registered email, and issue description</li>
              <li>Attach relevant screenshots or documents if applicable</li>
              <li>Support acknowledges receipt and assigns a reference where applicable</li>
              <li>The appropriate team investigates (support, compliance, or operations)</li>
              <li>Client receives a response with outcome or next steps</li>
            </ol>
          </IdentitySection>

          <IdentitySection title="Information Required from Clients">
            <ul className="list-disc pl-5 flex flex-col gap-2 text-para">
              {clientInfoRequired.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title="Warning Against Unofficial Channels">
            <p>
              WINPROFX will not request passwords, full payment card numbers, or sensitive credentials
              through unofficial email, social media, messaging apps, or websites. Do not follow payment
              instructions from unknown representatives. Always verify domains on the{' '}
              <Link to="/verify-winprofx/" className="text-white underline hover:text-primary">
                Verify WINPROFX
              </Link>{' '}
              page before logging in, depositing, or sharing personal information.
            </p>
          </IdentitySection>

          <IdentitySection title="Escalation Process">
            <h3 className="text-base font-semibold text-white mb-2">Withdrawal Delays</h3>
            <p className="mb-4">
              Include withdrawal date, amount, payment method, MT5/account ID, and request reference. See{' '}
              <Link to="/withdrawal-transparency/" className="text-white underline hover:text-primary">
                Withdrawal Transparency
              </Link>
              .
            </p>

            <h3 className="text-base font-semibold text-white mb-2">KYC and Verification</h3>
            <p className="mb-4">
              Contact support with registered email and account reference. Ensure submitted documents meet
              stated requirements.
            </p>

            <h3 className="text-base font-semibold text-white mb-2">Deposit Issues</h3>
            <p className="mb-4">
              For deposit confirmation delays or payment disputes, contact support with transaction date,
              amount, payment method, and any reference from your bank or payment provider. See the{' '}
              <Link to="/deposit-withdraw/" className="text-white underline hover:text-primary">
                Deposit &amp; Withdrawal Policy
              </Link>
              .
            </p>

            <h3 className="text-base font-semibold text-white mb-2">Introducing Broker (IB) Partners</h3>
            <p>
              IB partners should use partner portal channels or email with partner ID and business
              reference. Partner portal:{' '}
              <a href="https://partner.winprofx.org/" className="text-white underline hover:text-primary" rel="noopener noreferrer" target="_blank">
                https://partner.winprofx.org/
              </a>
            </p>
          </IdentitySection>

          <IdentitySection title="Security Reminder">
            <p>
              Protect your account credentials and verify official WINPROFX properties before any
              financial transaction. Report phishing or impersonation to{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-white underline hover:text-primary">
                {SUPPORT_EMAIL}
              </a>
              . Read{' '}
              <Link to="/client-fund-security/" className="text-white underline hover:text-primary">
                Client Fund Security
              </Link>{' '}
              for additional guidance.
            </p>
          </IdentitySection>

          <IdentitySection title="Complaints">
            <p>
              For formal complaints, see{' '}
              <Link to="/complaints-and-dispute-resolution/" className="text-white underline hover:text-primary">
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
