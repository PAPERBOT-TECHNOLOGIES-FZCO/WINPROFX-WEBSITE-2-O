import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import LocalizedLink from '@/components/localized-link'
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
import { useSeo } from '@/hooks/use-seo'
import { TrustPageBreadcrumb, TrustPageFooter } from '@/components/trust/trust-page-extras'
import { TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'
import { pathToTrustPageKey } from '@/lib/trust-page-keys'
import {
  BRAND_NAME,
  DUBAI_BUSINESS_NAME,
  DUBAI_LICENSE_ACTIVITY,
  DUBAI_LICENSE_NUMBER,
  legalEntitySummaryRows,
  LEGAL_ENTITY_NAME,
  JURISDICTION,
  SUPPORT_EMAIL,
} from '@/lib/company-registration'

const PAGE_KEY = 'companyProfile'

const brandInfoRowKeys = [
  'brandName',
  'mainWebsite',
  'alternateDomain',
  'uaeDomain',
  'clientPortal',
  'partnerPortal',
  'supportEmail',
  'lastUpdated',
]

const brandInfoValues = {
  brandName: 'WINPROFX',
  mainWebsite: { value: 'https://winprofx.org/', href: 'https://winprofx.org/', external: false },
  alternateDomain: { value: 'https://winprofx.com/', href: 'https://winprofx.com/', external: true },
  uaeDomain: { value: 'https://winprofx.ae/', href: 'https://winprofx.ae/', external: true },
  clientPortal: { value: 'https://my.winprofx.org/', href: 'https://my.winprofx.org/', external: true },
  partnerPortal: { value: 'https://partner.winprofx.org/', href: 'https://partner.winprofx.org/', external: true },
  supportEmail: { value: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}`, external: true },
  lastUpdated: { value: '2 June 2026' },
}

const domainGuidance = [
  { key: 'org', domain: 'winprofx.org', url: 'https://winprofx.org/', external: false },
  { key: 'com', domain: 'winprofx.com', url: 'https://winprofx.com/', external: true },
  { key: 'ae', domain: 'winprofx.ae', url: 'https://winprofx.ae/', external: true },
  { key: 'my', domain: 'my.winprofx.org', url: 'https://my.winprofx.org/', external: true },
  { key: 'partner', domain: 'partner.winprofx.org', url: 'https://partner.winprofx.org/', external: true },
]

const serviceKeys = ['forexCfd', 'platform', 'clientAccount', 'partnerPortal', 'tools', 'support']

const trustPagePaths = [
  '/withdrawal-transparency/',
  '/complaints-and-dispute-resolution/',
  '/client-fund-security/',
  '/support-and-escalation/',
  '/company-statistics/',
]

const legalLinkPaths = [
  { key: 'terms', path: '/terms' },
  { key: 'privacy', path: '/policy' },
  { key: 'riskWarning', path: '/risk-warning' },
  { key: 'aml', path: '/aml-policy' },
  { key: 'legalDocuments', path: '/legal-documents' },
  { key: 'restrictedCountries', path: '/restricted-countries' },
]

const faqKeys = [
  'whatIsWinprofx',
  'officialWebsite',
  'clientPortal',
  'partnerPortal',
  'contactSupport',
  'tradingRisk',
  'verifyDomain',
]

export default function CompanyProfile() {
  const { t } = useTranslation('trust')
  const { t: tCompany } = useTranslation('company')
  const seo = useSeo('companyProfile')

  const i18nVars = {
    brandName: BRAND_NAME,
    legalEntityName: LEGAL_ENTITY_NAME,
    jurisdiction: JURISDICTION,
    documentTypes: tCompany('documentTypes'),
    dubaiBusinessName: DUBAI_BUSINESS_NAME,
    dubaiLicenseNumber: DUBAI_LICENSE_NUMBER,
    dubaiLicenseActivity: DUBAI_LICENSE_ACTIVITY,
    supportEmail: SUPPORT_EMAIL,
  }

  const tableLabels = t(`pages.${PAGE_KEY}.content.brandTableLabels`, { returnObjects: true })
  const safetyTips = Object.values(t(`pages.${PAGE_KEY}.content.safetyTips`, { returnObjects: true }))
  const faqAccordionItems = faqKeys.map((key) => ({
    title: t(`pages.${PAGE_KEY}.faqs.${key}.question`),
    body: `<p>${t(`pages.${PAGE_KEY}.faqs.${key}.answer`)}</p>`,
  }))

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/company-profile"
        pageName={t(`pages.${PAGE_KEY}.h1`)}
        dateModified={TRUST_LAST_REVIEWED_ISO}
      />
      <TopShape />
      <PolicyTitle as="h1" meta={t(`pages.${PAGE_KEY}.meta`)} title={t(`pages.${PAGE_KEY}.h1`)} animation={false} />
      <Container>
        <div className="max-w-280 mx-auto text-center mb-6 md:mb-8 -mt-4 md:-mt-6 px-2">
          <p className="text-sm text-para2 mb-2">
            {t('shared.lastUpdated')} {TRUST_LAST_REVIEWED_ISO}
          </p>
          <p className="text-sm md:text-base leading-relaxed text-para max-w-3xl mx-auto mb-5 md:mb-6">
            {t(`pages.${PAGE_KEY}.intro`)}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <LocalizedLink
              to="/verify-winprofx/"
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary text-black border border-primary hover:opacity-90 transition-opacity"
            >
              {t('shared.verifyOfficialDomains')}
            </LocalizedLink>
            <LocalizedLink
              to="/contact/"
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/2 border border-solid border-white/12 text-white hover:border-white/30 hover:text-primary transition-colors"
            >
              {t('shared.contactSupport')}
            </LocalizedLink>
          </div>
        </div>

        <Card>
          <TrustPageBreadcrumb pageLabel={t(`pages.${PAGE_KEY}.h1`)} />
          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.brandOverview`)}>
            <p>{t(`pages.${PAGE_KEY}.content.brandOverview1`, i18nVars)}</p>
            <p className="mt-4">{t(`pages.${PAGE_KEY}.content.brandOverview2`)}</p>
            <p className="mt-4">{t(`pages.${PAGE_KEY}.content.brandOverview3`)}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.legalEntityAndRegistration`)}>
            <p>{t(`pages.${PAGE_KEY}.content.legalEntityIntro`, i18nVars)}</p>
            <div className="mt-4">
              <RegistrationTable rows={legalEntitySummaryRows} />
            </div>
            <p className="mt-4">
              <LocalizedLink to="/company-registration/" className="text-white underline hover:text-primary">
                {t('shared.viewCompanyRegistration')}
              </LocalizedLink>
            </p>
            <p className="mt-4">{tCompany('incorporationClarification')}</p>
            <p className="mt-4">
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.legalEntityRegulatory`}
                ns="trust"
                components={{
                  regulatoryLink: (
                    <LocalizedLink to="/regulatory-information/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.uaeRepresentativeOffice`)}>
            <p>{t(`pages.${PAGE_KEY}.content.uaeOfficeIntro`, i18nVars)}</p>
            <p className="mt-4">
              <LocalizedLink to="/dubai-professional-license/" className="text-white underline hover:text-primary">
                {t('pages.dubaiProfessionalLicense.label')}
              </LocalizedLink>
              {' · '}
              <LocalizedLink to="/uae-representative-office/" className="text-white underline hover:text-primary">
                {t('pages.uaeRepresentativeOffice.label')}
              </LocalizedLink>
            </p>
            <div className="mt-4">
              <LicenseClarification />
            </div>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.trustAndTransparency`)}>
            <p>{t(`pages.${PAGE_KEY}.content.trustIntro`, i18nVars)}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
              {trustPagePaths.map((path) => {
                const pageKey = pathToTrustPageKey(path)
                return (
                  <li key={path}>
                    <LocalizedLink to={path} className="text-white underline hover:text-primary">
                      {pageKey ? t(`pages.${pageKey}.label`) : path}
                    </LocalizedLink>
                  </li>
                )
              })}
            </ul>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.officialBrandInformation`)}>
            <div className="overflow-x-auto -mx-1 px-1">
              <table className="w-full min-w-[480px] text-sm md:text-base border-collapse">
                <tbody>
                  {brandInfoRowKeys.map((rowKey) => {
                    const row = brandInfoValues[rowKey]
                    const label = tableLabels[rowKey]
                    const isLink = row && typeof row === 'object' && row.href
                    const value = typeof row === 'string' ? row : row.value
                    return (
                      <tr key={rowKey} className="border-b border-white/8 last:border-0">
                        <th scope="row" className="py-3 pr-4 align-top font-semibold text-white text-left w-[40%]">
                          {label}
                        </th>
                        <td className="py-3 align-top text-para">
                          {isLink ? (
                            <a
                              href={row.href}
                              className="text-white underline hover:text-primary break-all"
                              {...(row.external
                                ? { target: '_blank', rel: 'noopener noreferrer' }
                                : { rel: 'noopener noreferrer' })}
                            >
                              {value}
                            </a>
                          ) : (
                            value
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.officialDomainsAndPortalGuidance`)}>
            <p>{t(`pages.${PAGE_KEY}.content.domainsGuidanceIntro`, i18nVars)}</p>
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
                  <span className="text-para">
                    {t('shared.domainPurposeSeparator')}
                    {t(`pages.${PAGE_KEY}.content.domainPurposes.${item.key}`)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 p-4 rounded-xl border border-white/10 bg-white/2 text-sm md:text-base">
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.unlistedDomainWarning`}
                ns="trust"
                components={{
                  officialDomainsLink: (
                    <LocalizedLink to="/official-domains/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.winprofxServices`)}>
            <p>{t(`pages.${PAGE_KEY}.content.servicesIntro`, i18nVars)}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 md:mt-6">
              {serviceKeys.map((key) => (
                <div key={key} className="rounded-xl border border-white/8 bg-white/2 p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                    {t(`pages.${PAGE_KEY}.content.services.${key}.title`)}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-para">
                    {t(`pages.${PAGE_KEY}.content.services.${key}.description`, i18nVars)}
                  </p>
                </div>
              ))}
            </div>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.userSafetyAndBrandVerification`)}>
            <p>{t(`pages.${PAGE_KEY}.content.safetyIntro`)}</p>
            <ul className="flex flex-col gap-2 mt-4 list-disc pl-5">
              {safetyTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
            <p className="mt-4">
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.safetyLinks`}
                ns="trust"
                components={{
                  officialDomainsLink: (
                    <LocalizedLink to="/official-domains/" className="text-white underline hover:text-primary" />
                  ),
                  verifyLink: (
                    <LocalizedLink to="/verify-winprofx/" className="text-white underline hover:text-primary" />
                  ),
                  contactLink: (
                    <LocalizedLink to="/contact/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <IdentitySection
            title={t(`pages.${PAGE_KEY}.sections.riskWarning`)}
            className="[&>div]:border-primary/20 [&>div]:bg-primary/5"
          >
            <p>{t(`pages.${PAGE_KEY}.content.riskBody1`)}</p>
            <p className="mt-4">{t(`pages.${PAGE_KEY}.content.riskBody2`, i18nVars)}</p>
            <p className="mt-4">
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.riskLinks`}
                ns="trust"
                components={{
                  riskWarningLink: (
                    <LocalizedLink to="/risk-warning/" className="text-white underline hover:text-primary" />
                  ),
                  legalDocsLink: (
                    <LocalizedLink to="/legal-documents/" className="text-white underline hover:text-primary" />
                  ),
                  termsLink: (
                    <LocalizedLink to="/terms/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.restrictedCountries`)}>
            <p>{t(`pages.${PAGE_KEY}.content.restrictedIntro`, i18nVars)}</p>
            <p className="mt-4">
              <LocalizedLink
                to="/restricted-countries/"
                className="text-white underline hover:text-primary font-medium"
              >
                {t(`pages.${PAGE_KEY}.content.viewRestrictedCountries`)}
              </LocalizedLink>
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.legalAndPolicyDocuments`)}>
            <p>{t(`pages.${PAGE_KEY}.content.legalDocsIntro`)}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
              {legalLinkPaths.map((link) => (
                <li key={link.path}>
                  <LocalizedLink to={link.path} className="text-white underline hover:text-primary">
                    {t(`pages.${PAGE_KEY}.content.legalLinks.${link.key}`)}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.contactWinprofx`)}>
            <p>{t(`pages.${PAGE_KEY}.content.contactIntro`)}</p>
            <p className="mt-4">
              <strong className="text-white">{t('shared.supportEmailLabel')}</strong>{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-white underline hover:text-primary">
                {SUPPORT_EMAIL}
              </a>
            </p>
            <p className="mt-4">
              <LocalizedLink
                to="/contact/"
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/2 border border-solid border-white/12 text-white hover:border-white/30 hover:text-primary transition-colors"
              >
                {t('shared.contactSupport')}
              </LocalizedLink>
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.frequentlyAskedQuestions`)}>
            <Accordion items={faqAccordionItems} activeItem={null} />
          </IdentitySection>

          <TrustPageFooter canonicalPath="/company-profile" />
          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
