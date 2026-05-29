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

export default function ClientFundSecurity() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Client Fund Security | WINPROFX"
        description="Learn about WINPROFX client account security, KYC and AML verification, payment verification, and portal safety practices."
        canonicalPath="/client-fund-security"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Trust & Transparency" title="Client Fund Security" />
      <Container>
        <Card>
          <IdentitySection>
            <p>
              WINPROFX takes client account security seriously. This page outlines the security
              practices, verification requirements, and safety measures that help protect client
              accounts, personal information, and payment transactions.
            </p>
            <p className="mt-4">
              Clients should always access WINPROFX services through official domains and portals
              listed on the{' '}
              <Link to="/official-domains" className="text-white underline hover:text-primary">
                Official Domains
              </Link>{' '}
              page before logging in or making deposits.
            </p>
          </IdentitySection>

          <IdentitySection title="Account Security">
            <ul className="list-disc pl-5 flex flex-col gap-2 text-para">
              <li>Use strong, unique passwords for client and partner portal accounts</li>
              <li>Enable two-factor authentication where available</li>
              <li>Never share login credentials with third parties</li>
              <li>Log out from shared or public devices after each session</li>
              <li>Report suspicious login activity to support immediately</li>
            </ul>
          </IdentitySection>

          <IdentitySection title="KYC and AML Verification">
            <p>
              WINPROFX requires identity verification (KYC) and may conduct anti-money laundering
              (AML) checks as part of account onboarding and ongoing compliance review. Clients may
              be asked to provide government-issued identification, proof of address, and payment
              method verification documents.
            </p>
            <p className="mt-4">
              Incomplete or outdated verification may delay deposits, withdrawals, or account access
              until required documents are submitted and approved.
            </p>
          </IdentitySection>

          <IdentitySection title="Payment Verification">
            <p>
              Payment methods used for deposits and withdrawals must belong to the registered account
              holder. Third-party payments may be rejected. Clients should verify payment instructions
              through official portal channels only and avoid sending funds to unverified addresses or
              accounts.
            </p>
          </IdentitySection>

          <IdentitySection title="Portal and Website Safety">
            <p>
              Before entering credentials or making payments, verify the website URL matches an
              official WINPROFX domain. Phishing websites may imitate legitimate brands. Use the{' '}
              <Link to="/verify-winprofx" className="text-white underline hover:text-primary">
                Verify WINPROFX
              </Link>{' '}
              checklist to confirm you are on an authentic WINPROFX property.
            </p>
            <p className="mt-4">
              Official client portal:{' '}
              <a href="https://my.winprofx.org/" className="text-white underline hover:text-primary" rel="noopener noreferrer" target="_blank">
                https://my.winprofx.org/
              </a>
            </p>
          </IdentitySection>

          <IdentitySection title="Important Note">
            <p className="italic text-para">
              This page describes security practices and verification requirements. It does not
              constitute a claim of segregated client funds, deposit insurance, or regulatory
              capital protection unless separately disclosed in verified regulatory documentation.
            </p>
          </IdentitySection>

          <IdentitySection title="Report Security Concerns">
            <p>
              Report suspected fraud, phishing, or unauthorized account access to{' '}
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
