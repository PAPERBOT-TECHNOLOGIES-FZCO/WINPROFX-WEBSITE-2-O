export const BASE_URL = 'https://winprofx.org'
export const LOGO_URL = `${BASE_URL}/logo.png`
export const ORG_ID = `${BASE_URL}/#organization`
export const WEBSITE_ID = `${BASE_URL}/#website`

/** Strip trailing slashes; homepage stays "/". */
export function normalizeRoutePath(path) {
  if (!path || path === '/') return '/'
  return path.replace(/\/+$/, '') || '/'
}

/** Internal router/link path with trailing slash (homepage "/"). */
export function publicPath(path) {
  const normalized = normalizeRoutePath(path)
  if (normalized === '/') return '/'
  return `${normalized}/`
}

/** Absolute canonical URL on winprofx.org with trailing slash for inner pages. */
export function buildCanonicalUrl(canonicalPath) {
  const normalized = normalizeRoutePath(canonicalPath)
  if (normalized === '/') return `${BASE_URL}/`
  return `${BASE_URL}${normalized}/`
}

export const BRAND_DESCRIPTION =
  'WINPROFX is a forex and CFD trading brand associated with Winprofx Ltd., an International Business Company incorporated in Saint Lucia.'

export const OFFICIAL_SAME_AS = [
  'https://winprofx.com/',
  'https://winprofx.ae/',
  'https://my.winprofx.org/',
  'https://partner.winprofx.org/',
]

export const SOCIAL_SAME_AS = [
  'https://www.facebook.com/profile.php?id=61551525764394',
  'https://www.linkedin.com/company/winprofx',
  'https://www.instagram.com/winprofx/',
  'https://www.youtube.com/@winprofx',
]

export const OFFICIAL_DOMAIN_ITEMS = [
  { position: 1, name: 'Main official WINPROFX website', url: 'https://winprofx.org/' },
  { position: 2, name: 'Official alternate / marketing domain', url: 'https://winprofx.com/' },
  { position: 3, name: 'Official UAE / regional domain', url: 'https://winprofx.ae/' },
  { position: 4, name: 'Official client portal', url: 'https://my.winprofx.org/' },
  { position: 5, name: 'Official partner / IB portal', url: 'https://partner.winprofx.org/' },
]

export const VERIFY_WINPROFX_DOMAIN_ITEMS = [
  { position: 1, name: 'WINPROFX main official website', url: 'https://winprofx.org/' },
  { position: 2, name: 'WINPROFX official alternate / marketing domain', url: 'https://winprofx.com/' },
  { position: 3, name: 'WINPROFX official UAE / regional domain', url: 'https://winprofx.ae/' },
  { position: 4, name: 'WINPROFX official client portal', url: 'https://my.winprofx.org/' },
  { position: 5, name: 'WINPROFX official partner / IB portal', url: 'https://partner.winprofx.org/' },
]

/** Identity pages: breadcrumb label + WebPage name */
export const IDENTITY_PAGE_SCHEMA = {
  '/': { pageName: 'WINPROFX Official Website', breadcrumb: null },
  '/company-profile': { pageName: 'Company Profile', breadcrumb: 'Company Profile', trustParent: true },
  '/official-domains': { pageName: 'Official WINPROFX Domains', breadcrumb: 'Official Domains', trustParent: true },
  '/about': { pageName: 'About WINPROFX', breadcrumb: 'About' },
  '/contact': { pageName: 'Contact WINPROFX', breadcrumb: 'Contact' },
  '/risk-warning': { pageName: 'Risk Warning', breadcrumb: 'Risk Warning', trustParent: true },
  '/legal-documents': { pageName: 'Legal Documents', breadcrumb: 'Legal Documents', trustParent: true },
  '/verify-winprofx': { pageName: 'Verify WINPROFX', breadcrumb: 'Verify WINPROFX', trustParent: true },
  '/policy': { pageName: 'Privacy Policy', breadcrumb: 'Privacy Policy' },
  '/terms': { pageName: 'Terms and Conditions', breadcrumb: 'Terms and Conditions' },
  '/aml-policy': { pageName: 'AML Policy', breadcrumb: 'AML Policy' },
  '/company-registration': { pageName: 'Company Registration', breadcrumb: 'Company Registration', trustParent: true },
  '/legal-entity-information': { pageName: 'Legal Entity Information', breadcrumb: 'Legal Entity Information', trustParent: true },
  '/regulatory-information': { pageName: 'Regulatory Information', breadcrumb: 'Regulatory Information', trustParent: true },
  '/dubai-professional-license': { pageName: 'Dubai Professional License', breadcrumb: 'Dubai Professional License', trustParent: true },
  '/uae-representative-office': { pageName: 'UAE Representative Office', breadcrumb: 'UAE Representative Office', trustParent: true },
  '/withdrawal-transparency': { pageName: 'Withdrawal Transparency', breadcrumb: 'Withdrawal Transparency', trustParent: true },
  '/complaints-and-dispute-resolution': { pageName: 'Complaints and Dispute Resolution', breadcrumb: 'Complaints and Dispute Resolution', trustParent: true },
  '/client-fund-security': { pageName: 'Client Fund Security', breadcrumb: 'Client Fund Security', trustParent: true },
  '/support-and-escalation': { pageName: 'Support and Escalation', breadcrumb: 'Support and Escalation', trustParent: true },
  '/company-statistics': { pageName: 'Company Statistics', breadcrumb: 'Company Statistics', trustParent: true },
  '/deposit-withdraw': { pageName: 'Deposit and Withdrawal Policy', breadcrumb: 'Deposit and Withdrawal Policy' },
  '/restricted-countries': { pageName: 'Restricted Countries', breadcrumb: 'Restricted Countries' },
  '/risk-disclosure': { pageName: 'Risk Disclosure', breadcrumb: 'Risk Disclosure' },
  '/trust-center': { pageName: 'WINPROFX Trust Center', breadcrumb: 'Trust Center', trustParent: true },
  '/is-winprofx-legit': { pageName: 'Is WINPROFX Legit?', breadcrumb: 'Is WINPROFX Legit?', trustParent: true },
  '/winprofx-review': { pageName: 'WINPROFX Review', breadcrumb: 'WINPROFX Review', trustParent: true },
  '/winprofx-withdrawal-process': { pageName: 'WINPROFX Withdrawal Process', breadcrumb: 'Withdrawal Process', trustParent: true },
  '/winprofx-license-verification': { pageName: 'WINPROFX License Verification', breadcrumb: 'License Verification', trustParent: true },
  '/winprofx-complaints': { pageName: 'WINPROFX Complaints', breadcrumb: 'Complaints', trustParent: true },
  '/winprofx-fake-website-warning': { pageName: 'WINPROFX Fake Website Warning', breadcrumb: 'Fake Website Warning', trustParent: true },
  '/winprofx-official-login': { pageName: 'WINPROFX Official Login', breadcrumb: 'Official Login', trustParent: true },
  '/winprofx-deposit-and-withdrawal-methods': { pageName: 'Deposit and Withdrawal Methods', breadcrumb: 'Deposit & Withdrawal Methods', trustParent: true },
  '/learn': { pageName: 'WINPROFX Learning Center', breadcrumb: 'Learn' },
  '/forex': { pageName: 'Forex Trading', breadcrumb: 'Forex Trading' },
  '/indices': { pageName: 'Indices Trading', breadcrumb: 'Indices Trading' },
  '/crypto': { pageName: 'Crypto CFD Trading', breadcrumb: 'Crypto CFD Trading' },
  '/platform': { pageName: 'MT5 Trading Platform', breadcrumb: 'MT5 Platform' },
  '/accounts': { pageName: 'Trading Accounts', breadcrumb: 'Account Types' },
  '/learn/what-is-forex-trading': { pageName: 'What Is Forex Trading', breadcrumb: 'What Is Forex Trading', learnParent: true },
  '/learn/what-is-cfd-trading': { pageName: 'What Is CFD Trading', breadcrumb: 'What Is CFD Trading', learnParent: true },
  '/learn/what-is-mt5': { pageName: 'What Is MT5', breadcrumb: 'What Is MT5', learnParent: true },
  '/learn/what-is-leverage-in-forex': { pageName: 'Leverage in Forex', breadcrumb: 'Leverage in Forex', learnParent: true },
  '/learn/what-is-margin-call': { pageName: 'Margin Call', breadcrumb: 'Margin Call', learnParent: true },
  '/learn/what-is-spread-in-trading': { pageName: 'Spread in Trading', breadcrumb: 'Spread in Trading', learnParent: true },
  '/learn/how-to-manage-risk-in-cfd-trading': { pageName: 'Risk Management in CFDs', breadcrumb: 'Risk Management', learnParent: true },
  '/learn/demo-vs-live-trading-account': { pageName: 'Demo vs Live Account', breadcrumb: 'Demo vs Live', learnParent: true },
  '/learn/how-to-check-if-a-forex-broker-is-legit': { pageName: 'Check If a Broker Is Legit', breadcrumb: 'Broker Verification', learnParent: true },
  '/learn/offshore-vs-regulated-forex-brokers': { pageName: 'Offshore vs Regulated Brokers', breadcrumb: 'Offshore vs Regulated', learnParent: true },
}

/** Page-specific schema extensions keyed by canonicalPath */
const PAGE_SCHEMA_EXTENSIONS = {
  '/official-domains': {
    mainEntityListName: 'Official WINPROFX Domains',
    mainEntityItems: OFFICIAL_DOMAIN_ITEMS,
  },
  '/verify-winprofx': {
    mainEntityListName: 'Verified WINPROFX Websites and Portals',
    mainEntityItems: VERIFY_WINPROFX_DOMAIN_ITEMS,
  },
}

export function buildOrganizationSchema(locale = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'WINPROFX',
    legalName: 'Winprofx Ltd.',
    url: `${BASE_URL}/`,
    logo: LOGO_URL,
    description: BRAND_DESCRIPTION,
    email: 'support@winprofx.com',
    sameAs: [...OFFICIAL_SAME_AS, ...SOCIAL_SAME_AS],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay',
      addressLocality: 'Gros-Islet',
      addressCountry: 'LC',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: `${BASE_URL}/contact/`,
        email: 'support@winprofx.com',
        availableLanguage: [locale],
      },
    ],
  }
}

export function buildWebsiteSchema(locale = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${BASE_URL}/`,
    name: 'WINPROFX',
    publisher: { '@id': ORG_ID },
    inLanguage: locale,
  }
}

export function buildOfficialDomainsMainEntity(listName, items) {
  return {
    '@type': 'ItemList',
    name: listName,
    itemListElement: items.map(({ position, name, url }) => ({
      '@type': 'ListItem',
      position,
      name,
      url,
    })),
  }
}

export function buildWebPageSchema({ canonical, name, description, dateModified, mainEntity, locale = 'en' }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: locale,
  }
  if (description) {
    schema.description = description
  }
  if (dateModified) {
    schema.dateModified = dateModified
  }
  if (mainEntity) {
    schema.mainEntity = mainEntity
  }
  return schema
}

export function buildFaqPageSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }
}

const TRUST_CENTER_URL = `${BASE_URL}/trust-center/`
const LEARN_URL = `${BASE_URL}/learn/`

export function buildBreadcrumbSchema(breadcrumbLabel, canonicalPath, options = {}) {
  const pageUrl = buildCanonicalUrl(canonicalPath)
  const normalized = normalizeRoutePath(canonicalPath)
  const pageConfig = getPageSchemaConfig(normalized)
  const useTrustParent = options.trustParent ?? pageConfig?.trustParent
  const useLearnParent = options.learnParent ?? pageConfig?.learnParent
  const isTrustCenter = normalized === '/trust-center'
  const isLearnIndex = normalized === '/learn'

  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${BASE_URL}/`,
    },
  ]

  if (useLearnParent && !isLearnIndex) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Learn',
      item: LEARN_URL,
    })
    items.push({
      '@type': 'ListItem',
      position: 3,
      name: breadcrumbLabel,
      item: pageUrl,
    })
  } else if (useTrustParent && !isTrustCenter) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Trust Center',
      item: TRUST_CENTER_URL,
    })
    items.push({
      '@type': 'ListItem',
      position: 3,
      name: breadcrumbLabel,
      item: pageUrl,
    })
  } else {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: breadcrumbLabel,
      item: pageUrl,
    })
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: items,
  }
}

/**
 * @param {{ headline: string, description?: string, url: string, datePublished?: string, dateModified?: string, image?: string }} params
 */
/**
 * @param {{ headline: string, description?: string, url: string, datePublished?: string, dateModified?: string, image?: string, author?: string }} params
 */
export function buildArticleSchema({ headline, description, url, datePublished, dateModified, image, author, locale = 'en' }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    url,
    author: {
      '@type': 'Organization',
      name: author ?? 'WINPROFX Education Team',
    },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@id': `${url}#webpage` },
    inLanguage: locale,
  }
  if (description) {
    schema.description = description
  }
  if (datePublished) {
    schema.datePublished = datePublished
  }
  if (dateModified) {
    schema.dateModified = dateModified
  }
  if (image) {
    schema.image = image
  }
  return schema
}

export function buildBlogPostingSchema({ headline, description, url, datePublished, dateModified, image, locale = 'en' }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    url,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@id': `${url}#webpage` },
    inLanguage: locale,
  }
  if (description) {
    schema.description = description
  }
  if (datePublished) {
    schema.datePublished = datePublished
  }
  if (dateModified) {
    schema.dateModified = dateModified
  }
  if (image) {
    schema.image = image
  }
  return schema
}

export function getPageSchemaConfig(canonicalPath) {
  return IDENTITY_PAGE_SCHEMA[normalizeRoutePath(canonicalPath)] ?? null
}

export function getPageSchemaExtensions(canonicalPath) {
  const extensions = PAGE_SCHEMA_EXTENSIONS[normalizeRoutePath(canonicalPath)]
  if (!extensions) {
    return null
  }
  return {
    mainEntity: buildOfficialDomainsMainEntity(
      extensions.mainEntityListName,
      extensions.mainEntityItems,
    ),
  }
}

/**
 * Parse blog date string "MM - DD - YYYY" to ISO date "YYYY-MM-DD"
 * @param {string} dateStr
 * @returns {string | undefined}
 */
export function parseBlogDateToIso(dateStr) {
  if (!dateStr) return undefined
  const parts = dateStr.split('-').map((p) => p.trim())
  if (parts.length !== 3) return undefined
  const [month, day, year] = parts
  if (!month || !day || !year) return undefined
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
}
