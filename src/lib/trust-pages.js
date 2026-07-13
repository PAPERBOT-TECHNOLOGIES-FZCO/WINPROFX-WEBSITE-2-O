/** Central metadata for trust, brand-intent, and verification pages. */

export const TRUST_LAST_REVIEWED = '2 June 2026'
export const TRUST_LAST_REVIEWED_ISO = '2026-06-02'
export const TRUST_REVIEWED_BY = 'WINPROFX Compliance & Operations Team'

export const TRUST_CENTER_PATH = '/trust-center/'

const TRUST_PAGE_DEFS = [
  { path: '/company-profile/', key: 'companyProfile', category: 'company' },
  { path: '/company-registration/', key: 'companyRegistration', category: 'company' },
  { path: '/legal-entity-information/', key: 'legalEntityInformation', category: 'company' },
  { path: '/dubai-professional-license/', key: 'dubaiProfessionalLicense', category: 'company' },
  { path: '/uae-representative-office/', key: 'uaeRepresentativeOffice', category: 'company' },
  // { path: '/regulatory-information/', key: 'regulatoryInformation', category: 'company' },
  // { path: '/official-domains/', key: 'officialDomains', category: 'verification' },
  { path: '/verify-winprofx/', key: 'verifyWinprofx', category: 'verification' },
  { path: '/legal-documents/', key: 'legalDocuments', category: 'legal' },
  { path: '/risk-warning/', key: 'riskWarning', category: 'legal' },
  { path: '/withdrawal-transparency/', key: 'withdrawalTransparency', category: 'trust' },
  { path: '/complaints-and-dispute-resolution/', key: 'complaintsAndDisputeResolution', category: 'trust' },
  { path: '/client-fund-security/', key: 'clientFundSecurity', category: 'trust' },
  { path: '/support-and-escalation/', key: 'supportAndEscalation', category: 'trust' },
  { path: '/company-statistics/', key: 'companyStatistics', category: 'trust' },
]

const BRAND_INTENT_PAGE_DEFS = [
  { path: '/is-winprofx-legit/', key: 'isWinprofxLegit', seoKey: 'isWinprofxLegit' },
  { path: '/winprofx-review/', key: 'winprofxReview', seoKey: 'winprofxReview' },
  { path: '/winprofx-withdrawal-process/', key: 'winprofxWithdrawalProcess', seoKey: 'winprofxWithdrawalProcess' },
  { path: '/winprofx-license-verification/', key: 'winprofxLicenseVerification', seoKey: 'winprofxLicenseVerification' },
  { path: '/winprofx-complaints/', key: 'winprofxComplaints', seoKey: 'winprofxComplaints' },
  { path: '/winprofx-fake-website-warning/', key: 'winprofxFakeWebsiteWarning', seoKey: 'winprofxFakeWebsiteWarning' },
  { path: '/winprofx-official-login/', key: 'winprofxOfficialLogin', seoKey: 'winprofxOfficialLogin' },
  { path: '/winprofx-deposit-and-withdrawal-methods/', key: 'winprofxDepositWithdrawalMethods', seoKey: 'winprofxDepositWithdrawalMethods' },
]

const BRAND_GUIDE_KEYS = [
  'isWinprofxLegit',
  'winprofxReview',
  'winprofxWithdrawalProcess',
  'winprofxLicenseVerification',
  'winprofxComplaints',
  'winprofxFakeWebsiteWarning',
  'winprofxOfficialLogin',
  'winprofxDepositWithdrawalMethods',
]

const CROSS_LINK_KEYS = [
  // { path: TRUST_CENTER_PATH, key: 'trustCenter' },
  // { path: '/official-domains/', key: 'officialDomains' },
  { path: '/verify-winprofx/', key: 'verifyWinprofx' },
  // { path: '/regulatory-information/', key: 'regulatoryInformation' },
  { path: '/risk-warning/', key: 'riskWarning' },
  { path: '/support-and-escalation/', key: 'supportAndEscalation' },
]

const RELATED_LINK_KEYS_BY_PAGE = {
  '/company-profile': ['verifyWinprofx', 'riskWarning'],
  '/company-registration': ['dubaiProfessionalLicense', 'verifyWinprofx'],
  '/legal-entity-information': ['dubaiProfessionalLicense', 'legalDocuments'],
  '/dubai-professional-license': ['uaeRepresentativeOffice', 'legalEntityInformation', 'verifyWinprofx'],
  '/uae-representative-office': ['dubaiProfessionalLicense', 'companyProfile'],
  '/regulatory-information': ['dubaiProfessionalLicense', 'legalDocuments', 'isWinprofxLegit'],
  '/official-domains': ['verifyWinprofx', 'winprofxFakeWebsiteWarning', 'winprofxOfficialLogin'],
  '/verify-winprofx': ['winprofxFakeWebsiteWarning', 'riskWarning'],
  '/legal-documents': ['riskWarning'],
  '/risk-warning': ['riskDisclosure', 'withdrawalTransparency', 'clientFundSecurity'],
  '/withdrawal-transparency': ['winprofxWithdrawalProcess', 'depositWithdraw', 'clientFundSecurity', 'supportAndEscalation'],
  '/complaints-and-dispute-resolution': ['winprofxComplaints', 'supportAndEscalation', 'withdrawalTransparency', 'contact'],
  '/client-fund-security': ['withdrawalTransparency', 'verifyWinprofx'],
  '/support-and-escalation': ['complaintsAndDisputeResolution', 'withdrawalTransparency', 'contact', 'verifyWinprofx'],
  '/company-statistics': ['withdrawalTransparency'],
}

const PAGE_PATH_BY_KEY = {
  companyProfile: '/company-profile/',
  companyRegistration: '/company-registration/',
  legalEntityInformation: '/legal-entity-information/',
  dubaiProfessionalLicense: '/dubai-professional-license/',
  uaeRepresentativeOffice: '/uae-representative-office/',
  regulatoryInformation: '/regulatory-information/',
  officialDomains: '/official-domains/',
  verifyWinprofx: '/verify-winprofx/',
  legalDocuments: '/legal-documents/',
  riskWarning: '/risk-warning/',
  withdrawalTransparency: '/withdrawal-transparency/',
  complaintsAndDisputeResolution: '/complaints-and-dispute-resolution/',
  clientFundSecurity: '/client-fund-security/',
  supportAndEscalation: '/support-and-escalation/',
  companyStatistics: '/company-statistics/',
  contact: '/contact/',
  depositWithdraw: '/deposit-withdraw/',
  riskDisclosure: '/risk-disclosure/',
  trustCenter: TRUST_CENTER_PATH,
  isWinprofxLegit: '/is-winprofx-legit/',
  winprofxReview: '/winprofx-review/',
  winprofxWithdrawalProcess: '/winprofx-withdrawal-process/',
  winprofxLicenseVerification: '/winprofx-license-verification/',
  winprofxComplaints: '/winprofx-complaints/',
  winprofxFakeWebsiteWarning: '/winprofx-fake-website-warning/',
  winprofxOfficialLogin: '/winprofx-official-login/',
  winprofxDepositWithdrawalMethods: '/winprofx-deposit-and-withdrawal-methods/',
}

const FAQ_PAGE_KEYS = {
  '/regulatory-information': 'regulatoryInformation',
  '/withdrawal-transparency': 'withdrawalTransparency',
  '/verify-winprofx': 'verifyWinprofx',
  '/official-domains': 'officialDomains',
  '/complaints-and-dispute-resolution': 'complaintsAndDisputeResolution',
}

function resolvePageLink(t, key) {
  const path = PAGE_PATH_BY_KEY[key]
  if (!path) return null
  const label = t(`pages.${key}.label`, { defaultValue: t(`crossLinks.${key}`, { defaultValue: key }) })
  return { path, label }
}

/** @param {(key: string, opts?: object) => string} t - trust namespace translator */
export function getTrustCenterPages(t) {
  return TRUST_PAGE_DEFS.map(({ path, key, category }) => ({
    path,
    label: t(`pages.${key}.label`),
    summary: t(`pages.${key}.summary`),
    category,
  }))
}

/** @param {(key: string, opts?: object) => string} t - brand namespace translator */
export function getBrandIntentPages(t) {
  return BRAND_INTENT_PAGE_DEFS.map(({ path, key, seoKey }) => ({
    path,
    key,
    seoKey,
    label: t(`pages.${key}.h1`),
    h1: t(`pages.${key}.h1`),
    breadcrumb: t(`pages.${key}.breadcrumb`),
    intro: t(`pages.${key}.intro`),
  }))
}

/** @param {(key: string, opts?: object) => string} tBrand - brand namespace translator */
export function getBrandGuideLinks(tBrand) {
  return BRAND_GUIDE_KEYS.map((key) => ({
    path: PAGE_PATH_BY_KEY[key],
    label: tBrand(`pages.${key}.h1`),
  }))
}

/** @param {(key: string, opts?: object) => string} t */
export function getBrandIntentCrossLinks(t) {
  return CROSS_LINK_KEYS.map(({ path, key }) => ({
    path,
    label: t(`crossLinks.${key}`),
  }))
}

/** @param {(key: string, opts?: object) => string} t */
export function getRelatedTrustLinks(t, currentPath) {
  const normalized = currentPath.replace(/\/+$/, '') || '/'
  const keys = RELATED_LINK_KEYS_BY_PAGE[normalized] ?? CROSS_LINK_KEYS.slice(0, 5).map((l) => l.key)
  return keys.map((key) => resolvePageLink(t, key)).filter(Boolean)
}

/** @param {(key: string, opts?: object) => string} t */
export function getTrustPageFaqs(t, currentPath) {
  const normalized = currentPath.replace(/\/+$/, '') || '/'
  const faqKey = FAQ_PAGE_KEYS[normalized]
  if (!faqKey) return []
  const items = t(`faqs.${faqKey}`, { returnObjects: true, defaultValue: [] })
  return Array.isArray(items) ? items : []
}

/** @param {(key: string, opts?: object) => string} t - brand namespace translator */
export function getBrandPageFaqs(t, pageKey, interpolation = {}) {
  const items = t(`pages.${pageKey}.faqs`, { returnObjects: true, defaultValue: {} })
  if (!items || typeof items !== 'object' || Array.isArray(items)) return []
  return Object.entries(items).map(([faqKey, item]) => ({
    question: item.question,
    answer: t(`pages.${pageKey}.faqs.${faqKey}.answer`, interpolation),
  }))
}

/** @deprecated Use getTrustCenterPages(t) instead */
export const trustCenterPages = TRUST_PAGE_DEFS.map(({ path, key, category }) => ({
  path,
  label: key,
  summary: key,
  category,
}))

/** @deprecated Use getBrandIntentPages(t) instead */
export const brandIntentPages = BRAND_INTENT_PAGE_DEFS.map(({ path, key }) => ({
  path,
  label: key,
  title: key,
  description: key,
  h1: key,
  breadcrumb: key,
}))

/** @deprecated Use getBrandIntentCrossLinks(t) instead */
export const brandIntentCrossLinks = CROSS_LINK_KEYS

/** @deprecated Use getRelatedTrustLinks(t, path) instead */
export const relatedTrustLinksByPage = RELATED_LINK_KEYS_BY_PAGE

/** @deprecated Use getTrustPageFaqs(t, path) instead */
export const trustPageFaqs = FAQ_PAGE_KEYS

export function getRelatedTrustLinksLegacy(currentPath) {
  const normalized = currentPath.replace(/\/+$/, '') || '/'
  const keys = RELATED_LINK_KEYS_BY_PAGE[normalized] ?? CROSS_LINK_KEYS.slice(0, 5).map((l) => l.key)
  return keys.map((key) => ({ path: PAGE_PATH_BY_KEY[key], label: key }))
}

export function getTrustPageFaqsLegacy(currentPath) {
  return []
}
