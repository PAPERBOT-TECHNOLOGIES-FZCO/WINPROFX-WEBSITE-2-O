export const BASE_URL = 'https://winprofx.org'
export const LOGO_URL = `${BASE_URL}/logo.png`
export const ORG_ID = `${BASE_URL}/#organization`
export const WEBSITE_ID = `${BASE_URL}/#website`

export const BRAND_DESCRIPTION =
  'WINPROFX is a forex and CFD trading brand offering access to trading platforms, client account services, partner program tools, and trading-related support services through its official websites and portals.'

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

/** Identity pages: breadcrumb label + WebPage name */
export const IDENTITY_PAGE_SCHEMA = {
  '/': { pageName: 'WINPROFX Official Website', breadcrumb: null },
  '/company-profile': { pageName: 'Company Profile', breadcrumb: 'Company Profile' },
  '/official-domains': { pageName: 'Official WINPROFX Domains', breadcrumb: 'Official Domains' },
  '/about': { pageName: 'About WINPROFX', breadcrumb: 'About' },
  '/contact': { pageName: 'Contact WINPROFX', breadcrumb: 'Contact' },
  '/risk-warning': { pageName: 'Risk Warning', breadcrumb: 'Risk Warning' },
  '/legal-documents': { pageName: 'Legal Documents', breadcrumb: 'Legal Documents' },
  '/verify-winprofx': { pageName: 'Verify WINPROFX Official Websites and Portals', breadcrumb: 'Verify WINPROFX' },
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'WINPROFX',
    alternateName: ['WinproFX', 'WinProFX'],
    url: `${BASE_URL}/`,
    logo: LOGO_URL,
    description: BRAND_DESCRIPTION,
    sameAs: [...OFFICIAL_SAME_AS, ...SOCIAL_SAME_AS],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: `${BASE_URL}/contact`,
        email: 'support@winprofx.com',
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
  }
}

export function buildWebPageSchema({ canonical, name, description }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
  }
  if (description) {
    schema.description = description
  }
  return schema
}

export function buildBreadcrumbSchema(breadcrumbLabel, canonicalPath) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
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

export function getPageSchemaConfig(canonicalPath) {
  return IDENTITY_PAGE_SCHEMA[canonicalPath] ?? null
}
