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

const preDepositChecklist = [
  'Confirm the website URL matches an official WINPROFX domain listed on Official Domains',
  'Verify the legal entity and license information on Company Registration and Regulatory Information pages',
  'Read the Risk Warning and applicable legal documents before opening an account',
  'Use only the official client portal at https://my.winprofx.org/ for account access',
  'Never send funds to unverified addresses or third-party accounts',
  'Contact support@winprofx.com if you are unsure about any payment instruction',
]

export default function ClientFundSecurity() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Client Fund Security | WINPROFX"
        description="Learn about WINPROFX client fund handling, payment verification, account security, and risk-related information."
        canonicalPath="/client-fund-security"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Trust & Transparency" title="Client Fund Security" />
      <Container>
        <Card>
          <IdentitySection>
            <p>
              WINPROFX takes client account and payment security seriously. This page outlines practices
              that help protect client accounts, personal information, and payment transactions. It does
              not describe segregated client funds or deposit insurance unless separately disclosed in
              verified regulatory documentation.
            </p>
          </IdentitySection>

          <IdentitySection title="Account Access Security">
            <ul className="list-disc pl-5 flex flex-col gap-2 text-para">
              <li>Use strong, unique passwords for client and partner portal accounts</li>
              <li>Enable two-factor authentication where available</li>
              <li>Never share login credentials, OTPs, or passwords with third parties</li>
              <li>Log out from shared or public devices after each session</li>
              <li>Report suspicious login activity to support immediately</li>
            </ul>
          </IdentitySection>

          <IdentitySection title="KYC and AML Checks">
            <p>
              WINPROFX requires identity verification (KYC) and may conduct anti-money laundering (AML)
              checks during onboarding and ongoing compliance review. Clients may be asked to provide
              government-issued identification, proof of address, and payment method verification.
            </p>
            <p className="mt-4">
              Incomplete or outdated verification may delay deposits, withdrawals, or account access until
              required documents are submitted and approved.
            </p>
          </IdentitySection>

          <IdentitySection title="Payment Method Verification">
            <p>
              Payment methods used for deposits and withdrawals should belong to the registered account
              holder. Third-party payments may be rejected. Clients should verify payment instructions
              only through official portal channels and avoid sending funds to unverified addresses.
            </p>
          </IdentitySection>

          <IdentitySection title="Withdrawal Verification">
            <p>
              Withdrawals may require confirmation of account identity, payment method ownership, and
              compliance status before processing. See{' '}
              <Link to="/withdrawal-transparency" className="text-white underline hover:text-primary">
                Withdrawal Transparency
              </Link>{' '}
              for the withdrawal review process and escalation options.
            </p>
          </IdentitySection>

          <IdentitySection title="What Clients Should Verify Before Depositing">
            <ul className="list-disc pl-5 flex flex-col gap-2 text-para">
              {preDepositChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">
              Use the{' '}
              <Link to="/verify-winprofx" className="text-white underline hover:text-primary">
                Verify WINPROFX
              </Link>{' '}
              checklist and{' '}
              <Link to="/official-domains" className="text-white underline hover:text-primary">
                Official Domains
              </Link>{' '}
              page before registering or depositing.
            </p>
          </IdentitySection>

          <IdentitySection title="Portal and Website Safety">
            <p>
              Phishing websites may imitate legitimate brands. Before entering credentials or making
              payments, confirm the URL matches an official WINPROFX domain. Official client portal:{' '}
              <a href="https://my.winprofx.org/" className="text-white underline hover:text-primary" rel="noopener noreferrer" target="_blank">
                https://my.winprofx.org/
              </a>
            </p>
          </IdentitySection>

          <IdentitySection title="Important Note">
            <p className="italic text-para">
              This page describes security and verification practices only. It does not constitute a
              claim of segregated client funds, deposit insurance, or regulatory capital protection unless
              separately disclosed in verified regulatory documentation.
            </p>
          </IdentitySection>

          <IdentitySection title="Report Security Concerns">
            <p>
              Report suspected fraud, phishing, or unauthorized access to{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-white underline hover:text-primary">
                {SUPPORT_EMAIL}
              </a>{' '}
              or via{' '}
              <Link to="/support-and-escalation" className="text-white underline hover:text-primary">
                Support and Escalation
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
