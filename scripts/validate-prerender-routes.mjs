/**
 * Safety checks for prerender route list and sitemap parity (Priority 2).
 * Fails the build when disallowed or non-ready routes would be prerendered.
 */
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
    DEFAULT_LOCALE,
    LOCALE_CODES,
    LOCALE_SEO_READY,
    getHreflangLocales,
    isLocalePageSeoReady,
    normalizeSeoPagePath,
} from './locale-seo-readiness.mjs'
import { PRERENDER_ROUTES, stripLocalePrefixFromPath } from './prerender-routes.mjs'
import { getAllSitemapRoutes } from './seo-routes.mjs'

/** Locked for Priority 2 — fail build if English sitemap grows/shrinks unexpectedly. */
export const EXPECTED_SITEMAP_COUNT = 51

const AUTH_ROUTE_PREFIXES = [
  '/login',
  '/register',
  '/forget',
  '/verify',
  '/verify-email',
  '/reset-password',
  '/forgot-password',
  '/dashboard',
  '/admin',
  '/portal',
  '/client',
  '/ib',
  '/partner/dashboard',
  '/my',
  '/account',
  '/profile',
  '/settings',
  '/payment',
  '/deposit',
  '/withdraw',
  '/kyc',
  '/download-statement',
]

/** SEO alias redirects from netlify.toml — must not be prerender targets. */
const REDIRECT_ALIAS_PREFIXES = [
  '/forex-trading',
  '/gold-trading',
  '/oil-trading',
  '/indices-trading',
  '/crypto-cfd-trading',
  '/commodities-trading',
  '/mt5-trading-platform',
  '/account-types',
  '/privacy-policy',
  '/terms-and-conditions',
  '/en',
]

function matchesAnyPrefix(routePath, prefixes) {
  return prefixes.some(
    (prefix) => routePath === prefix || routePath.startsWith(`${prefix}/`),
  )
}

function getEnglishSitemapPaths() {
  return getAllSitemapRoutes().map((r) => normalizeSeoPagePath(r.path))
}

export function validatePrerenderRoutes() {
  const errors = []
  const sitemapCount = getAllSitemapRoutes().length

  if (sitemapCount !== EXPECTED_SITEMAP_COUNT) {
    errors.push(
      `Sitemap count is ${sitemapCount}, expected ${EXPECTED_SITEMAP_COUNT} for Priority 2`,
    )
  }

  const englishSitemapPaths = new Set(getEnglishSitemapPaths())
  const englishPrerenderPaths = new Set()

  for (const route of PRERENDER_ROUTES) {
    const { path, locale } = route
    const basePath = route.basePath ?? stripLocalePrefixFromPath(path)

    if (path === '/en' || path.startsWith('/en/')) {
      errors.push(`Disallowed /en prerender route: ${path}`)
    }

    if (matchesAnyPrefix(path, AUTH_ROUTE_PREFIXES)) {
      errors.push(`Auth/noindex route included in prerender: ${path}`)
    }

    if (matchesAnyPrefix(path, REDIRECT_ALIAS_PREFIXES)) {
      errors.push(`Redirect alias included in prerender: ${path}`)
    }

    if (path.includes('/blog/') && path !== '/blog') {
      errors.push(`Blog detail route included in prerender: ${path}`)
    }

    if (locale === DEFAULT_LOCALE) {
      if (!englishSitemapPaths.has(basePath)) {
        errors.push(`English prerender path not in sitemap registry: ${path}`)
      }
      englishPrerenderPaths.add(basePath)
    } else if (!isLocalePageSeoReady(locale, basePath)) {
      errors.push(`Non-ready localized route included in prerender: ${path} (${locale})`)
    }

    if (locale !== DEFAULT_LOCALE && resolveRobotsWouldNoindex(locale, basePath)) {
      errors.push(`Localized noindex route included in prerender: ${path}`)
    }
  }

  for (const sitemapPath of englishSitemapPaths) {
    if (!englishPrerenderPaths.has(sitemapPath)) {
      errors.push(`Missing English prerender route for sitemap path: ${sitemapPath}`)
    }
  }

  if (englishPrerenderPaths.size !== sitemapCount) {
    errors.push(
      `English prerender count (${englishPrerenderPaths.size}) does not match sitemap count (${sitemapCount})`,
    )
  }

  return errors
}

function resolveRobotsWouldNoindex(locale, basePath) {
  return locale !== DEFAULT_LOCALE && !isLocalePageSeoReady(locale, basePath)
}

export function getPrerenderReport() {
  const sitemapCount = getAllSitemapRoutes().length
  const perLocale = Object.fromEntries(LOCALE_CODES.map((code) => [code, 0]))

  for (const route of PRERENDER_ROUTES) {
    perLocale[route.locale] = (perLocale[route.locale] ?? 0) + 1
  }

  const skippedLocales = LOCALE_CODES.filter(
    (code) => code !== DEFAULT_LOCALE && LOCALE_SEO_READY[code] !== true,
  )

  const localizedIncluded = PRERENDER_ROUTES.filter((r) => r.locale !== DEFAULT_LOCALE).length
  const localizedSkipped = sitemapCount * skippedLocales.length

  return {
    sitemapCount,
    perLocale,
    englishRoutes: perLocale[DEFAULT_LOCALE] ?? 0,
    localizedRoutesTotal: localizedIncluded,
    totalPrerenderRoutes: PRERENDER_ROUTES.length,
    skippedLocales,
    skippedReason:
      skippedLocales.length > 0
        ? 'Locale not marked SEO-ready in LOCALE_SEO_READY'
        : 'None',
    localizedRoutesSkippedEstimate: localizedSkipped,
    sitemapParity:
      (perLocale[DEFAULT_LOCALE] ?? 0) === sitemapCount ? 'OK' : 'MISMATCH',
  }
}

export function printPrerenderReport() {
  const report = getPrerenderReport()

  console.log('\n=== Prerender route report ===')
  console.log(`English routes included: ${report.englishRoutes}`)
  console.log(`hi routes included: ${report.perLocale.hi ?? 0}`)
  console.log(`id routes included: ${report.perLocale.id ?? 0}`)
  console.log(`vi routes included: ${report.perLocale.vi ?? 0}`)
  console.log(`bn routes included: ${report.perLocale.bn ?? 0}`)
  console.log(`ms routes included: ${report.perLocale.ms ?? 0}`)
  console.log(`Total prerender routes: ${report.totalPrerenderRoutes}`)
  console.log(`Sitemap count: ${report.sitemapCount}`)
  console.log(`Sitemap/prerender parity: ${report.sitemapParity}`)

  if (report.skippedLocales.length > 0) {
    console.log(`Locales skipped: ${report.skippedLocales.join(', ')}`)
    console.log(`Skip reason: ${report.skippedReason}`)
    console.log(
      `Estimated localized routes skipped (not ready): ${report.localizedRoutesSkippedEstimate}`,
    )
  } else {
    console.log('Locales skipped: none')
  }

  console.log('=============================\n')
}

/** Validate prerendered HTML samples for English SEO tags. */
export function validatePrerenderedHtmlSamples(distDir) {
  const samples = [
    {
      path: '/',
      canonical: 'https://winprofx.org/',
      allowedHreflang: ['en', 'es', 'x-default'],
      robotsMustInclude: 'index',
    },
    {
      path: '/forex',
      canonical: 'https://winprofx.org/forex/',
      allowedHreflang: ['en', 'es', 'x-default'],
      robotsMustInclude: 'index',
    },
    // {
    //   path: '/trust-center',
    //   canonical: 'https://winprofx.org/trust-center/',
    //   allowedHreflang: ['en', 'x-default'],
    //   robotsMustInclude: 'index',
    // },
    {
      path: '/learn/what-is-forex-trading',
      canonical: 'https://winprofx.org/learn/what-is-forex-trading/',
      allowedHreflang: ['en', 'es', 'x-default'],
      robotsMustInclude: 'index',
    },
  ]

  const errors = []

  for (const sample of samples) {
    const filePath =
      sample.path === '/'
        ? join(distDir, 'index.html')
        : join(distDir, sample.path.replace(/^\//, ''), 'index.html')

    let html
    try {
      html = readFileSync(filePath, 'utf8')
    } catch {
      errors.push(`Missing prerender output: ${filePath}`)
      continue
    }

    const label = sample.path

    if (!/<title>[^<]+<\/title>/i.test(html)) {
      errors.push(`${label}: missing <title>`)
    }

    if (!/name="description"\s+content="[^"]+"/i.test(html)) {
      errors.push(`${label}: missing meta description`)
    }

    const canonicalMatch = html.match(/rel="canonical"\s+href="([^"]+)"/i)
    if (!canonicalMatch) {
      errors.push(`${label}: missing canonical link`)
    } else if (canonicalMatch[1] !== sample.canonical) {
      errors.push(`${label}: canonical mismatch (${canonicalMatch[1]})`)
    }

    if (/rel="canonical"\s+href="https:\/\/winprofx\.org\/en\//i.test(html)) {
      errors.push(`${label}: unwanted /en/ canonical`)
    }

    const hreflangMatches = [...html.matchAll(/hreflang="([^"]+)"/gi)].map((m) => m[1])
    for (const hreflang of hreflangMatches) {
      if (!sample.allowedHreflang.includes(hreflang)) {
        errors.push(`${label}: unexpected hreflang "${hreflang}"`)
      }
    }

    for (const required of sample.allowedHreflang) {
      if (!hreflangMatches.includes(required)) {
        errors.push(`${label}: missing hreflang "${required}"`)
      }
    }

    const readyHreflang = getHreflangLocales(sample.path)
    for (const hreflang of hreflangMatches) {
      if (hreflang === 'x-default') continue
      if (!readyHreflang.includes(hreflang)) {
        errors.push(`${label}: hreflang includes non-ready locale "${hreflang}"`)
      }
    }

    const robotsMatch = html.match(/name="robots"\s+content="([^"]+)"/i)
    if (!robotsMatch) {
      errors.push(`${label}: missing robots meta`)
    } else if (!robotsMatch[1].includes(sample.robotsMustInclude)) {
      errors.push(`${label}: robots mismatch (${robotsMatch[1]})`)
    }

    if (!/property="og:title"/i.test(html)) errors.push(`${label}: missing og:title`)
    if (!/name="twitter:title"/i.test(html)) errors.push(`${label}: missing twitter:title`)
    if (!/application\/ld\+json/i.test(html)) errors.push(`${label}: missing JSON-LD`)
    if (!/<h1[^>]*>[\s\S]*?<\/h1>/i.test(html)) errors.push(`${label}: missing h1 body content`)
  }

  return errors
}

function main() {
  const routeErrors = validatePrerenderRoutes()

  if (routeErrors.length > 0) {
    console.error('\nPrerender route validation failed:\n')
    for (const error of routeErrors) {
      console.error(`  - ${error}`)
    }
    process.exit(1)
  }

  printPrerenderReport()
  console.log('Prerender route validation passed.')
}

const isDirectRun = process.argv[1]?.endsWith('validate-prerender-routes.mjs')
if (isDirectRun) {
  main()
}
