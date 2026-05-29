import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import Accordion from '@/components/accordion'
import RegistrationTable from '@/components/company-identity/registration-table'
import LicenseClarification from '@/components/company-identity/license-clarification'
import SeoHead from '@/components/seo-head'
import {
  DOCUMENT_TYPES,
  DUBAI_BUSINESS_NAME,
  DUBAI_LICENSE_ACTIVITY,
  DUBAI_LICENSE_NUMBER,
  INCORPORATION_CLARIFICATION,
  legalEntitySummaryRows,
  LEGAL_ENTITY_NAME,
} from '@/lib/company-registration'

const LAST_UPDATED = '29 May 2026'

const brandInfoRows = [
  { label: 'Brand Name', value: 'WINPROFX' },
  {
    label: 'Main Official Website',
    value: 'https://winprofx.org/',
    href: 'https://winprofx.org/',
    external: false,
  },
  {
    label: 'Official Alternate Domain',
    value: 'https://winprofx.com/',
    href: 'https://winprofx.com/',
    external: true,
  },
  {
    label: 'Official UAE / Regional Domain',
    value: 'https://winprofx.ae/',
    href: 'https://winprofx.ae/',
    external: true,
  },
  {
    label: 'Client Portal',
    value: 'https://my.winprofx.org/',
    href: 'https://my.winprofx.org/',
    external: true,
  },
  {
    label: 'Partner Portal',
    value: 'https://partner.winprofx.org/',
    href: 'https://partner.winprofx.org/',
    external: true,
  },
  {
    label: 'Support Email',
    value: 'support@winprofx.com',
    href: 'mailto:support@winprofx.com',
    external: true,
  },
  { label: 'Last Updated', value: LAST_UPDATED },
]

const domainGuidance = [
  {
    domain: 'winprofx.org',
    url: 'https://winprofx.org/',
    purpose: 'Main official website and primary brand information source.',
    external: false,
  },
  {
    domain: 'winprofx.com',
    url: 'https://winprofx.com/',
    purpose: 'Official alternate domain for the WINPROFX brand.',
    external: true,
  },
  {
    domain: 'winprofx.ae',
    url: 'https://winprofx.ae/',
    purpose: 'UAE / regional domain for WINPROFX information.',
    external: true,
  },
  {
    domain: 'my.winprofx.org',
    url: 'https://my.winprofx.org/',
    purpose: 'Client portal for account access and client services.',
    external: true,
  },
  {
    domain: 'partner.winprofx.org',
    url: 'https://partner.winprofx.org/',
    purpose: 'Partner portal for Introducing Broker / partner-related access.',
    external: true,
  },
]

const services = [
  {
    title: 'Forex and CFD Trading Access',
    description:
      'Access to forex and CFD trading-related services through supported platforms and official account channels.',
  },
  {
    title: 'Trading Platform Information',
    description: 'Information and access guidance for trading platforms used by WINPROFX clients.',
  },
  {
    title: 'Client Account Management',
    description:
      'Client portal access for managing account-related activities through official WINPROFX systems.',
  },
  {
    title: 'Partner / Introducing Broker Portal',
    description:
      'Partner portal tools and resources for approved partners and Introducing Brokers, where applicable.',
  },
  {
    title: 'Trading Tools and Market Information',
    description:
      'Market-related tools, trading information, and platform resources provided for users through official channels.',
  },
  {
    title: 'Customer Support',
    description:
      'Support assistance through official WINPROFX contact channels, including support@winprofx.com.',
  },
]

const safetyTips = [
  'Always check the domain before logging in.',
  'Do not share OTPs, passwords, or sensitive account details with unofficial contacts.',
  'Avoid unofficial payment instructions from unknown representatives.',
  'Verify any suspicious website or communication through the official contact page.',
  'Use the official domains page to confirm valid WINPROFX websites and portals.',
]

const legalLinks = [
  { path: '/terms', label: 'Terms and Conditions' },
  { path: '/policy', label: 'Privacy Policy' },
  { path: '/risk-warning', label: 'Risk Warning' },
  { path: '/aml-policy', label: 'AML Policy' },
  { path: '/legal-documents', label: 'Legal Documents' },
  { path: '/restricted-countries', label: 'Restricted Countries' },
]

export const companyProfileFaqs = [
  {
    question: 'What is WINPROFX?',
    answer:
      'WINPROFX is a forex and CFD trading brand offering access to trading platforms, client account services, partner program tools, and trading-related support services through its official domains and portals.',
  },
  {
    question: 'What is the official WINPROFX website?',
    answer:
      'The main official WINPROFX website is https://winprofx.org/. WINPROFX also uses official alternate and regional domains listed on its Official Domains page.',
  },
  {
    question: 'What is the WINPROFX client portal?',
    answer:
      'The official WINPROFX client portal is https://my.winprofx.org/. Users should verify the portal URL before logging in or entering account information.',
  },
  {
    question: 'What is the WINPROFX partner portal?',
    answer:
      'The official WINPROFX partner portal is https://partner.winprofx.org/. It is used for partner and Introducing Broker-related access, where applicable.',
  },
  {
    question: 'How can I contact WINPROFX support?',
    answer:
      'Users can contact WINPROFX support at support@winprofx.com or through the official Contact page.',
  },
  {
    question: 'Does trading forex and CFDs involve risk?',
    answer:
      'Yes. Trading forex and CFDs involves significant risk and may not be suitable for all investors. Users should understand the risks before trading.',
  },
  {
    question: 'How can users verify an official WINPROFX domain?',
    answer:
      'Users should refer to the Official Domains or Verify WINPROFX page and confirm that the website or portal is listed as an official WINPROFX domain.',
  },
]

const faqAccordionItems = companyProfileFaqs.map((faq) => ({
  title: faq.question,
  body: `<p>${faq.answer}</p>`,
}))


export default function CompanyProfile() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Company Profile | WINPROFX Official Website"
        description="Read the official WINPROFX company profile, including official domains, client portal, partner portal, trading-related services, contact information, and risk warning."
        canonicalPath="/company-profile"
        pageName="Company Profile"
        dateModified="2026-05-29"
        faqItems={companyProfileFaqs}
      />
      <TopShape />
      <PolicyTitle as="h1" meta="" title="Company Profile" animation={false} />
      <Container>
        <div className="max-w-280 mx-auto text-center mb-6 md:mb-8 -mt-4 md:-mt-6 px-2">
          <p className="text-sm text-para2 mb-2">Last updated: {LAST_UPDATED}</p>
          <p className="text-sm md:text-base leading-relaxed text-para max-w-3xl mx-auto mb-5 md:mb-6">
            Official information about the WINPROFX brand, websites, portals, services, support
            channels, and trading risk notice.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/verify-winprofx"
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary text-black border border-primary hover:opacity-90 transition-opacity"
            >
              Verify Official Domains
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/2 border border-solid border-white/12 text-white hover:border-white/30 hover:text-primary transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>

        <Card>
          <IdentitySection title="Brand Overview">
            <p>
              WINPROFX is a forex and CFD trading brand that provides access to trading platforms,
              client account services, partner program tools, trading-related information, and support
              services through its official websites and portals.
            </p>
            <p className="mt-4">
              The purpose of this page is to provide users, partners, and search engines with clear
              official information about the WINPROFX brand, its official domains, support channels,
              services, and risk-related notices.
            </p>
            <p className="mt-4">
              Users should rely on the official domains and portals listed on this website when
              accessing WINPROFX services, verifying identity, or contacting support.
            </p>
          </IdentitySection>

          <IdentitySection title="Legal Entity and Registration">
            <p>
              WINPROFX is associated with {LEGAL_ENTITY_NAME}, an International Business Company
              incorporated in Saint Lucia. The company&apos;s incorporation documents include a{' '}
              {DOCUMENT_TYPES}.
            </p>
            <div className="mt-4">
              <RegistrationTable rows={legalEntitySummaryRows} />
            </div>
            <p className="mt-4">
              <Link to="/company-registration" className="text-white underline hover:text-primary">
                View full company registration details
              </Link>
            </p>
            <p className="mt-4">{INCORPORATION_CLARIFICATION}</p>
            <p className="mt-4">
              For regulatory and license-related information, visit the{' '}
              <Link to="/regulatory-information" className="text-white underline hover:text-primary">
                Regulatory Information
              </Link>{' '}
              page.
            </p>
          </IdentitySection>

          <IdentitySection title="UAE Representative Office">
            <p>
              WINPROFX operates a UAE representative office under the business name{' '}
              {DUBAI_BUSINESS_NAME}, registered under Dubai Professional License No.{' '}
              {DUBAI_LICENSE_NUMBER} with license activity listed as {DUBAI_LICENSE_ACTIVITY}.
            </p>
            <p className="mt-4">
              <Link to="/dubai-professional-license" className="text-white underline hover:text-primary">
                Dubai Professional License
              </Link>
              {' · '}
              <Link to="/uae-representative-office" className="text-white underline hover:text-primary">
                UAE Representative Office
              </Link>
            </p>
            <div className="mt-4">
              <LicenseClarification />
            </div>
          </IdentitySection>

          <IdentitySection title="Trust and Transparency">
            <p>
              WINPROFX publishes trust and transparency information to help clients verify official
              domains, understand withdrawal processes, submit complaints, and access support
              escalation routes.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
              <li><Link to="/withdrawal-transparency" className="text-white underline hover:text-primary">Withdrawal Transparency</Link></li>
              <li><Link to="/complaints-and-dispute-resolution" className="text-white underline hover:text-primary">Complaints and Dispute Resolution</Link></li>
              <li><Link to="/client-fund-security" className="text-white underline hover:text-primary">Client Fund Security</Link></li>
              <li><Link to="/support-and-escalation" className="text-white underline hover:text-primary">Support and Escalation</Link></li>
              <li><Link to="/company-statistics" className="text-white underline hover:text-primary">Company Statistics</Link></li>
            </ul>
          </IdentitySection>

          <IdentitySection title="Official Brand Information">
            <div className="overflow-x-auto -mx-1 px-1">
              <table className="w-full min-w-[480px] text-sm md:text-base border-collapse">
                <tbody>
                  {brandInfoRows.map((row) => (
                    <tr key={row.label} className="border-b border-white/8 last:border-0">
                      <th
                        scope="row"
                        className="py-3 pr-4 align-top font-semibold text-white text-left w-[40%]"
                      >
                        {row.label}
                      </th>
                      <td className="py-3 align-top text-para">
                        {row.href ? (
                          <a
                            href={row.href}
                            className="text-white underline hover:text-primary break-all"
                            {...(row.external
                              ? { target: '_blank', rel: 'noopener noreferrer' }
                              : { rel: 'noopener noreferrer' })}
                          >
                            {row.value}
                          </a>
                        ) : (
                          row.value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </IdentitySection>

          <IdentitySection title="Official Domains and Portal Guidance">
            <p>
              WINPROFX uses official domains and portals to provide website information, client account
              access, partner services, and support communication. Users should verify that they are
              visiting an official WINPROFX domain before registering, logging in, making payments, or
              sharing account-related information.
            </p>
            <ul className="flex flex-col gap-4 mt-4">
              {domainGuidance.map((item) => (
                <li key={item.domain}>
                  <a
                    href={item.url}
                    className="text-white underline hover:text-primary font-medium"
                    {...(item.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : { rel: 'noopener noreferrer' })}
                  >
                    {item.domain}
                  </a>
                  <span className="text-para"> — {item.purpose}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 p-4 rounded-xl border border-white/10 bg-white/2 text-sm md:text-base">
              If a website, social media page, mobile app, email, or representative claims to represent
              WINPROFX but is not listed on the{' '}
              <Link to="/official-domains" className="text-white underline hover:text-primary">
                Official Domains
              </Link>{' '}
              page, users should verify it before proceeding.
            </p>
          </IdentitySection>

          <IdentitySection title="WINPROFX Services">
            <p>
              WINPROFX provides trading-related access and support services through its official websites
              and portals. The available services may include platform access, client account management,
              partner tools, and market-related information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 md:mt-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl border border-white/8 bg-white/2 p-4 md:p-5"
                >
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed text-para">{service.description}</p>
                </div>
              ))}
            </div>
          </IdentitySection>

          <IdentitySection title="User Safety and Brand Verification">
            <p>
              Users should always confirm that they are accessing WINPROFX through an official domain or
              portal. Before entering login details, making deposits, communicating with support, or
              sharing documents, users should verify the website address and use only official WINPROFX
              channels.
            </p>
            <ul className="flex flex-col gap-2 mt-4 list-disc pl-5">
              {safetyTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
            <p className="mt-4">
              Learn more on the{' '}
              <Link to="/official-domains" className="text-white underline hover:text-primary">
                Official Domains
              </Link>
              ,{' '}
              <Link to="/verify-winprofx" className="text-white underline hover:text-primary">
                Verify WINPROFX
              </Link>
              , and{' '}
              <Link to="/contact" className="text-white underline hover:text-primary">
                Contact
              </Link>{' '}
              pages.
            </p>
          </IdentitySection>

          <IdentitySection
            title="Risk Warning"
            className="[&>div]:border-primary/20 [&>div]:bg-primary/5"
          >
            <p>
              Trading forex and CFDs involves significant risk and may not be suitable for all investors.
              Prices can move quickly, and clients may lose part or all of their invested capital. Users
              should understand the risks involved before trading and should only trade with funds they
              can afford to risk.
            </p>
            <p className="mt-4">
              WINPROFX does not guarantee trading profits, returns, or investment outcomes. Trading
              decisions are the responsibility of the individual user.
            </p>
            <p className="mt-4">
              Read the full{' '}
              <Link to="/risk-warning" className="text-white underline hover:text-primary">
                Risk Warning
              </Link>
              ,{' '}
              <Link to="/legal-documents" className="text-white underline hover:text-primary">
                Legal Documents
              </Link>
              , and{' '}
              <Link to="/terms" className="text-white underline hover:text-primary">
                Terms and Conditions
              </Link>{' '}
              before using any service.
            </p>
          </IdentitySection>

          <IdentitySection title="Restricted Countries and Service Availability">
            <p>
              WINPROFX may not provide services in certain countries or jurisdictions due to legal,
              regulatory, or business restrictions. Users should review the Restricted Countries page
              before registering or using any service.
            </p>
            <p className="mt-4">
              <Link
                to="/restricted-countries"
                className="text-white underline hover:text-primary font-medium"
              >
                View Restricted Countries
              </Link>
            </p>
          </IdentitySection>

          <IdentitySection title="Legal and Policy Documents">
            <p>
              Users should read the applicable legal, risk, privacy, and policy documents before using any
              WINPROFX service.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white underline hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title="Contact WINPROFX">
            <p>
              For official support inquiries, users can contact WINPROFX through the official support
              email or the Contact page.
            </p>
            <p className="mt-4">
              <strong className="text-white">Support Email:</strong>{' '}
              <a
                href="mailto:support@winprofx.com"
                className="text-white underline hover:text-primary"
              >
                support@winprofx.com
              </a>
            </p>
            <p className="mt-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/2 border border-solid border-white/12 text-white hover:border-white/30 hover:text-primary transition-colors"
              >
                Contact Support
              </Link>
            </p>
          </IdentitySection>

          <IdentitySection title="Frequently Asked Questions">
            <Accordion items={faqAccordionItems} activeItem={null} />
          </IdentitySection>

          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
