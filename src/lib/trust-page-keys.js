/** Maps trust/legal page paths to trust.json page keys (pages.{key}). */
export const TRUST_PATH_TO_PAGE_KEY = {
  '/company-profile/': 'companyProfile',
  '/company-registration/': 'companyRegistration',
  '/legal-entity-information/': 'legalEntityInformation',
  '/dubai-professional-license/': 'dubaiProfessionalLicense',
  '/uae-representative-office/': 'uaeRepresentativeOffice',
  '/regulatory-information/': 'regulatoryInformation',
  '/official-domains/': 'officialDomains',
  '/verify-winprofx/': 'verifyWinprofx',
  '/legal-documents/': 'legalDocuments',
  '/withdrawal-transparency/': 'withdrawalTransparency',
  '/complaints-and-dispute-resolution/': 'complaintsAndDisputeResolution',
  '/client-fund-security/': 'clientFundSecurity',
  '/support-and-escalation/': 'supportAndEscalation',
  '/company-statistics/': 'companyStatistics',
  '/risk-warning/': 'riskWarning',
  '/contact/': 'contact',
  '/terms/': 'terms',
  '/policy/': 'policy',
  '/aml-policy/': 'amlPolicy',
  '/deposit-withdraw/': 'depositWithdraw',
  '/restricted-countries/': 'restrictedCountries',
  '/risk-disclosure/': 'riskDisclosure',
}

export function pathToTrustPageKey(path) {
  const normalized = path.endsWith('/') ? path : `${path}/`
  return TRUST_PATH_TO_PAGE_KEY[normalized] ?? null
}
