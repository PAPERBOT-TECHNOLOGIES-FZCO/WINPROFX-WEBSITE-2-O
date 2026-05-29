import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://winprofx.org'
const OG_IMAGE = 'https://imagedelivery.net/bvUtc88WWoZg5mZsB7f2Zw/da80fbb4-439b-42f9-f7fa-31931de6e500/public'
const GA_ID = 'G-NL5S7T60GX'
const LOGO_URL = `${BASE_URL}/favicon.svg`

const SOCIAL_PROFILES = [
  'https://www.facebook.com/profile.php?id=61551525764394',
  'https://www.linkedin.com/in/winpro-fx-8b5148294/',
  'https://www.instagram.com/winprofx/',
  'https://www.youtube.com/@winprofx',
]

const OFFICIAL_DOMAINS = [
  'https://winprofx.org',
  'https://winprofx.com',
  'https://winprofx.ae',
]

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'WinProFX',
  legalName: 'WinproFX Limited',
  alternateName: ['WinproFX', 'WinPro FX'],
  url: `${BASE_URL}/`,
  logo: LOGO_URL,
  image: OG_IMAGE,
  email: 'support@winprofx.com',
  telephone: '+971-4-447-1894',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AE',
    addressLocality: 'Dubai',
  },
  sameAs: [...SOCIAL_PROFILES, ...OFFICIAL_DOMAINS],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971-4-447-1894',
    email: 'support@winprofx.com',
    contactType: 'customer service',
    availableLanguage: ['English'],
    areaServed: ['AE', 'IN', 'GCC'],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: `${BASE_URL}/`,
  name: 'WinProFX',
  description:
    'WinProFX is an award-winning forex and CFD broker. Trade Forex, Indices, Crypto, Metals, Commodities and Oil on advanced platforms with 24/7 support.',
  publisher: { '@id': `${BASE_URL}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

const financialServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  '@id': `${BASE_URL}/#financialservice`,
  name: 'WinProFX',
  description:
    'Trade with the Global Leader in Precision & Speed. WinProFX offers advanced forex trading solutions with award-winning 24/7 customer support.',
  url: `${BASE_URL}/`,
  logo: LOGO_URL,
  image: OG_IMAGE,
  telephone: '+971-4-447-1894',
  email: 'support@winprofx.com',
  openingHours: 'Mo-Fr 09:00-18:00',
  areaServed: ['Dubai', 'India', 'GCC countries'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971-4-447-1894',
    email: 'support@winprofx.com',
    contactType: 'customer service',
    availableLanguage: ['English'],
  },
  sameAs: [...SOCIAL_PROFILES, ...OFFICIAL_DOMAINS],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '25.276987',
    longitude: '55.296249',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Forex', item: `${BASE_URL}/forex` },
    { '@type': 'ListItem', position: 3, name: 'Indices', item: `${BASE_URL}/indices` },
    { '@type': 'ListItem', position: 4, name: 'Crypto', item: `${BASE_URL}/crypto` },
    { '@type': 'ListItem', position: 5, name: 'Metals', item: `${BASE_URL}/trading/metals` },
    { '@type': 'ListItem', position: 6, name: 'Commodities', item: `${BASE_URL}/trading/commodities` },
    { '@type': 'ListItem', position: 7, name: 'Oil', item: `${BASE_URL}/trading/oil` },
    { '@type': 'ListItem', position: 8, name: 'Platform', item: `${BASE_URL}/platform` },
    { '@type': 'ListItem', position: 9, name: 'Accounts', item: `${BASE_URL}/accounts` },
    { '@type': 'ListItem', position: 10, name: 'About Us', item: `${BASE_URL}/about-us` },
    { '@type': 'ListItem', position: 11, name: 'Contact', item: `${BASE_URL}/contact` },
    { '@type': 'ListItem', position: 12, name: 'Company Profile', item: `${BASE_URL}/company-profile` },
    { '@type': 'ListItem', position: 13, name: 'Official Domains', item: `${BASE_URL}/official-domains` },
    { '@type': 'ListItem', position: 14, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 15, name: 'Introducing Broker', item: `${BASE_URL}/introducing-broker` },
    { '@type': 'ListItem', position: 16, name: 'Privacy Policy', item: `${BASE_URL}/policy` },
    { '@type': 'ListItem', position: 17, name: 'Terms & Conditions', item: `${BASE_URL}/terms` },
    { '@type': 'ListItem', position: 18, name: 'AML Policy', item: `${BASE_URL}/aml-policy` },
    { '@type': 'ListItem', position: 19, name: 'Deposit & Withdrawal Policy', item: `${BASE_URL}/deposit-withdraw` },
    { '@type': 'ListItem', position: 20, name: 'Restricted Countries', item: `${BASE_URL}/restricted-countries` },
    { '@type': 'ListItem', position: 21, name: 'Risk Disclosure', item: `${BASE_URL}/risk-disclosure` },
  ],
}

/**
 * @param {object} props
 * @param {string} props.title - Page title (required)
 * @param {string} [props.description] - Meta description
 * @param {string} [props.keywords] - Meta keywords
 * @param {string} [props.canonicalPath] - Path portion of canonical URL e.g. "/forex"
 * @param {string} [props.ogImage] - Override OG image URL
 */
export default function SeoHead({ title, description, keywords, canonicalPath = '', ogImage = OG_IMAGE }) {
  const canonical = `${BASE_URL}${canonicalPath}`

  return (
    <Helmet>
      {/* Basic */}
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" />
      <meta name="theme-color" content="#000000" />
      <title>{title}</title>
      <meta name="title" content={title} />
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Favicons */}
      <link rel="shortcut icon" href="/favicon.png" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="WinProFX" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      {description && <meta property="og:description" content={description} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@WinproFX" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(financialServiceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Google Analytics */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </script>
    </Helmet>
  )
}
