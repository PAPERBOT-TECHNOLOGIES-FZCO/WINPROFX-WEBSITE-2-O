import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import {
  buildArticleSchema,
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
  buildCanonicalUrl,
  buildFaqPageSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebPageSchema,
  buildWebsiteSchema,
  getPageSchemaConfig,
  getPageSchemaExtensions,
  normalizeRoutePath,
} from '@/lib/schema-org'
import { DEFAULT_LOCALE } from '@/lib/locale-config'
import { localizedCanonicalPath } from '@/lib/locale-routing'
import {
  getHreflangLocales,
  normalizeReadinessLocale,
  resolveRobotsForLocale,
} from '@/lib/locale-seo-readiness'

const OG_IMAGE = 'https://imagedelivery.net/bvUtc88WWoZg5mZsB7f2Zw/da80fbb4-439b-42f9-f7fa-31931de6e500/public'
const GA_ID = 'G-NL5S7T60GX'

export default function SeoHead({
  title,
  description,
  keywords,
  canonicalPath = '',
  canonicalUrl,
  pageName,
  ogImage = OG_IMAGE,
  ogTitle,
  ogDescription,
  robots = 'index, follow',
  dateModified,
  faqItems,
  blogPosting,
  article,
}) {
  const { i18n, t } = useTranslation(['company', 'seo'])
  const locale = normalizeReadinessLocale(i18n.language || DEFAULT_LOCALE)
  const canonical = canonicalUrl || buildCanonicalUrl(localizedCanonicalPath(canonicalPath, locale))
  const effectiveRobots = resolveRobotsForLocale(locale, canonicalPath, robots)
  const schemaPath = normalizeRoutePath(canonicalPath)
  const pageConfig = getPageSchemaConfig(schemaPath)
  const pageExtensions = getPageSchemaExtensions(schemaPath)

  const organizationSchema = buildOrganizationSchema(
    locale,
    t('company:schema.brandDescription', { defaultValue: 'WINPROFX is a forex and CFD trading brand.' }),
    t('company:schema.customerSupport', { defaultValue: 'customer support' }),
  )
  const websiteSchema = buildWebsiteSchema(locale)
  const webPageName = pageName ?? pageConfig?.pageName ?? title
  const webPageSchema = buildWebPageSchema({
    canonical,
    name: webPageName,
    description,
    dateModified,
    mainEntity: pageExtensions?.mainEntity,
    locale,
  })

  const faqPageSchema = faqItems?.length ? buildFaqPageSchema(faqItems) : null

  const localBusinessSchema = schemaPath === '/' ? buildLocalBusinessSchema() : null

  const breadcrumbSchema =
    pageConfig?.breadcrumb != null
      ? buildBreadcrumbSchema(pageConfig.breadcrumb, schemaPath)
      : null

  const blogPostingSchema = blogPosting
    ? buildBlogPostingSchema({
        headline: blogPosting.headline,
        description: blogPosting.description ?? description,
        url: canonical,
        datePublished: blogPosting.datePublished,
        dateModified: blogPosting.dateModified,
        image: blogPosting.image ?? ogImage,
      })
    : null

  const articleSchema = article
    ? buildArticleSchema({
        headline: article.headline,
        description: article.description ?? description,
        url: canonical,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        image: article.image ?? ogImage,
        author: article.author,
      })
    : null

  const hreflangLocales = getHreflangLocales(canonicalPath)
  const hreflangLinks = hreflangLocales.map((code) => ({
    hreflang: code,
    href: buildCanonicalUrl(localizedCanonicalPath(canonicalPath, code)),
  }))

  if (hreflangLocales.includes(DEFAULT_LOCALE)) {
    hreflangLinks.push({
      hreflang: 'x-default',
      href: buildCanonicalUrl(localizedCanonicalPath(canonicalPath, DEFAULT_LOCALE)),
    })
  }

  return (
    <Helmet>
      <html lang={locale} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" />
      <meta name="theme-color" content="#000000" />
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      <link rel="shortcut icon" href="/favicon.png" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />

      <link rel="canonical" href={canonical} />
      {hreflangLinks.map(({ hreflang, href }) => (
        <link key={hreflang} rel="alternate" hrefLang={hreflang} href={href} />
      ))}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="WINPROFX" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      {description && <meta property="og:description" content={ogDescription || description} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@WINPROFX" />
      <meta name="twitter:title" content={ogTitle || title} />
      {description && <meta name="twitter:description" content={ogDescription || description} />}
      <meta name="twitter:image" content={ogImage} />

      <meta name="robots" content={effectiveRobots} />

      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      {localBusinessSchema && (
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {faqPageSchema && (
        <script type="application/ld+json">{JSON.stringify(faqPageSchema)}</script>
      )}
      {blogPostingSchema && (
        <script type="application/ld+json">{JSON.stringify(blogPostingSchema)}</script>
      )}
      {articleSchema && (
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      )}

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
