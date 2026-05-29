import { Helmet } from 'react-helmet-async'
import {
  BASE_URL,
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  buildWebPageSchema,
  buildWebsiteSchema,
  getPageSchemaConfig,
} from '@/lib/schema-org'

const OG_IMAGE = 'https://imagedelivery.net/bvUtc88WWoZg5mZsB7f2Zw/da80fbb4-439b-42f9-f7fa-31931de6e500/public'
const GA_ID = 'G-NL5S7T60GX'

/**
 * @param {object} props
 * @param {string} props.title - Page title (required)
 * @param {string} [props.description] - Meta description
 * @param {string} [props.keywords] - Meta keywords
 * @param {string} [props.canonicalPath] - Path portion of canonical URL e.g. "/forex"
 * @param {string} [props.pageName] - Short name for WebPage schema (defaults to title)
 * @param {string} [props.ogImage] - Override OG image URL
 * @param {string} [props.robots] - Robots meta override (default: "index, follow")
 */
export default function SeoHead({
  title,
  description,
  keywords,
  canonicalPath = '',
  pageName,
  ogImage = OG_IMAGE,
  robots = 'index, follow',
}) {
  const canonical = `${BASE_URL}${canonicalPath}`
  const webPageName = pageName ?? title
  const pageConfig = getPageSchemaConfig(canonicalPath)

  const organizationSchema = buildOrganizationSchema()
  const websiteSchema = buildWebsiteSchema()
  const webPageSchema = buildWebPageSchema({
    canonical,
    name: webPageName,
    description,
  })

  const breadcrumbSchema =
    pageConfig?.breadcrumb != null
      ? buildBreadcrumbSchema(pageConfig.breadcrumb, canonicalPath)
      : null

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

      {/* Canonical & hreflang — always winprofx.org regardless of alias domain */}
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hreflang="en" href={canonical} />
      <link rel="alternate" hreflang="x-default" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="WINPROFX" />
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
      <meta name="robots" content={robots} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}

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
