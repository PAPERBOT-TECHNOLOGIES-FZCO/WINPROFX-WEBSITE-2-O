export const BASE_URL = 'https://winprofx.org'
export const LOGO_URL = `${BASE_URL}/logo.png`
export const ORG_ID = `${BASE_URL}/#organization`
export const WEBSITE_ID = `${BASE_URL}/#website`

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
  '/company-profile': { pageName: 'Company Profile', breadcrumb: 'Company Profile' },
  '/official-domains': { pageName: 'Official WINPROFX Domains', breadcrumb: 'Official Domains' },
  '/about': { pageName: 'About WINPROFX', breadcrumb: 'About' },
  '/contact': { pageName: 'Contact WINPROFX', breadcrumb: 'Contact' },
  '/risk-warning': { pageName: 'Risk Warning', breadcrumb: 'Risk Warning' },
  '/legal-documents': { pageName: 'Legal Documents', breadcrumb: 'Legal Documents' },
  '/verify-winprofx': { pageName: 'Verify WINPROFX', breadcrumb: 'Verify WINPROFX' },
  '/policy': { pageName: 'Privacy Policy', breadcrumb: 'Privacy Policy' },
  '/terms': { pageName: 'Terms and Conditions', breadcrumb: 'Terms and Conditions' },
  '/aml-policy': { pageName: 'AML Policy', breadcrumb: 'AML Policy' },
  '/company-registration': { pageName: 'Company Registration', breadcrumb: 'Company Registration' },
  '/legal-entity-information': { pageName: 'Legal Entity Information', breadcrumb: 'Legal Entity Information' },
  '/regulatory-information': { pageName: 'Regulatory Information', breadcrumb: 'Regulatory Information' },
  '/dubai-professional-license': { pageName: 'Dubai Professional License', breadcrumb: 'Dubai Professional License' },
  '/uae-representative-office': { pageName: 'UAE Representative Office', breadcrumb: 'UAE Representative Office' },
  '/withdrawal-transparency': { pageName: 'Withdrawal Transparency', breadcrumb: 'Withdrawal Transparency' },
  '/complaints-and-dispute-resolution': { pageName: 'Complaints and Dispute Resolution', breadcrumb: 'Complaints and Dispute Resolution' },
  '/client-fund-security': { pageName: 'Client Fund Security', breadcrumb: 'Client Fund Security' },
  '/support-and-escalation': { pageName: 'Support and Escalation', breadcrumb: 'Support and Escalation' },
  '/company-statistics': { pageName: 'Company Statistics', breadcrumb: 'Company Statistics' },
  '/deposit-withdraw': { pageName: 'Deposit and Withdrawal Policy', breadcrumb: 'Deposit and Withdrawal Policy' },
  '/restricted-countries': { pageName: 'Restricted Countries', breadcrumb: 'Restricted Countries' },
  '/risk-disclosure': { pageName: 'Risk Disclosure', breadcrumb: 'Risk Disclosure' },
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

export function buildOrganizationSchema() {
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
        url: `${BASE_URL}/contact`,
        email: 'support@winprofx.com',
        availableLanguage: ['English'],
      },
    ],
  }
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${BASE_URL}/`,
    name: 'WINPROFX',
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
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

export function buildWebPageSchema({ canonical, name, description, dateModified, mainEntity }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
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

export function buildBreadcrumbSchema(breadcrumbLabel, canonicalPath) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${BASE_URL}${canonicalPath}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${BASE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: breadcrumbLabel,
        item: `${BASE_URL}${canonicalPath}`,
      },
    ],
  }
}

/**
 * @param {{ headline: string, description?: string, url: string, datePublished?: string, dateModified?: string, image?: string }} params
 */
export function buildBlogPostingSchema({ headline, description, url, datePublished, dateModified, image }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    url,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@id': `${url}#webpage` },
    inLanguage: 'en',
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
  return IDENTITY_PAGE_SCHEMA[canonicalPath] ?? null
}

export function getPageSchemaExtensions(canonicalPath) {
  const extensions = PAGE_SCHEMA_EXTENSIONS[canonicalPath]
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
