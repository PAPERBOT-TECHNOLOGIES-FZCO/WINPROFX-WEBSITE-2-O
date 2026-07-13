import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import LocalizedLink from '@/components/localized-link'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import RegistrationTable from '@/components/company-identity/registration-table'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import { TrustPageBreadcrumb, TrustPageFooter } from '@/components/trust/trust-page-extras'
import { getTrustPageFaqs, TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'
import { pathToTrustPageKey } from '@/lib/trust-page-keys'
import {
  officialDomainsWithLabels,
  verifySummaryRows,
  verifyTrustPageLinks,
  SUPPORT_EMAIL,
} from '@/lib/company-registration'

const PAGE_KEY = 'verifyWinprofx'

export default function VerifyWINPROFX() {
  const { t } = useTranslation('trust')
  const { t: tCompany } = useTranslation('company')
  const seo = useSeo('verifyWinprofx')
  const faqItems = getTrustPageFaqs(t, '/verify-winprofx')

  const checklist = Object.values(t(`pages.${PAGE_KEY}.content.checklist`, { returnObjects: true }))
  const domainLabels = tCompany('officialDomainLabels', { returnObjects: true })
  const labelKeys = ['mainWebsite', 'alternateMarketing', 'uaeRegional', 'clientPortal', 'partnerPortal']

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/verify-winprofx"
        pageName={t(`pages.${PAGE_KEY}.h1`)}
        dateModified={TRUST_LAST_REVIEWED_ISO}
        faqItems={faqItems}
      />
      <TopShape />
      <PolicyTitle as="h1" meta={t(`pages.${PAGE_KEY}.meta`)} title={t(`pages.${PAGE_KEY}.h1`)} />
      <Container>
        <Card>
          <TrustPageBreadcrumb pageLabel={t(`pages.${PAGE_KEY}.h1`)} />
          <IdentitySection>
            <p>{t(`pages.${PAGE_KEY}.content.intro`)}</p>
          </IdentitySection>

          {/* <IdentitySection title={t(`pages.${PAGE_KEY}.sections.userVerificationChecklist`)}>
            <ol className="list-decimal pl-5 flex flex-col gap-3 text-para">
              {checklist.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </IdentitySection> */}

          {/* <IdentitySection title={t(`pages.${PAGE_KEY}.sections.verificationSummary`)}>
            <RegistrationTable rows={verifySummaryRows} />
          </IdentitySection> */}

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.verifyOfficialDomains`)}>
            <div className="overflow-x-auto -mx-1 px-1">
              <table className="w-full min-w-[520px] text-sm md:text-base border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    <th scope="col" className="py-3 pr-4 font-semibold text-white">
                      {t('shared.tableDomain')}
                    </th>
                    <th scope="col" className="py-3 font-semibold text-white">
                      {t('shared.tablePurpose')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {officialDomainsWithLabels.map((row, index) => (
                    <tr key={row.url} className="border-b border-white/8 last:border-0">
                      <td className="py-3 pr-4 align-top">
                        <a
                          href={row.url}
                          className="text-white underline hover:text-primary break-all"
                          {...(row.external
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : { rel: 'noopener noreferrer' })}
                        >
                          {row.url}
                        </a>
                      </td>
                      <td className="py-3 align-top text-para">
                        {domainLabels[labelKeys[index]] ?? row.label}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.trustLegalTransparencyPages`)}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {verifyTrustPageLinks.map((link) => {
                const pageKey = pathToTrustPageKey(link.path)
                return (
                  <li key={link.path}>
                    <LocalizedLink to={link.path} className="text-white underline hover:text-primary">
                      {pageKey ? t(`pages.${pageKey}.label`) : link.label}
                    </LocalizedLink>
                  </li>
                )
              })}
              {/* <li>
                <LocalizedLink to="/legal-documents/" className="text-white underline hover:text-primary">
                  {t('pages.legalDocuments.label')}
                </LocalizedLink>
              </li> */}
            </ul>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.safetyNote`)}>
            <p>
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.safetyNote`}
                ns="trust"
                values={{ supportEmail: SUPPORT_EMAIL }}
                components={{
                  contactLink: (
                    <LocalizedLink to="/contact/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <TrustPageFooter canonicalPath="/verify-winprofx" faqItems={faqItems} />
          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
