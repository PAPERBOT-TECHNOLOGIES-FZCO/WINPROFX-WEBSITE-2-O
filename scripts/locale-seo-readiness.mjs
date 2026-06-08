/**
 * Locale/page SEO readiness registry.
 *
 * Controls hreflang output, localized noindex, prerender eligibility, and future
 * localized sitemap inclusion. English sitemap URLs stay unchanged until a locale
 * is explicitly marked ready here.
 *
 * A locale/page is SEO-ready when:
 * 1. Visible content translated
 * 2. SEO title translated
 * 3. Meta description translated
 * 4. Canonical URL correct
 * 5. Page can be prerendered
 * 6. No major untranslated English body strings remain
 * 7. Page should be indexable
 *
 * Flip LOCALE_SEO_READY[locale] to true only after full-locale QA passes.
 * Use PAGE_LOCALE_SEO_READY for staged per-page rollout within a locale.
 */

import { getIndexablePagePaths } from './seo-routes.mjs'

export const DEFAULT_LOCALE = 'en'

export const LOCALE_CODES = ['en', 'hi', 'id', 'vi', 'bn', 'ms']

/** Global locale gate — set true only after locale passes translation + SEO QA. */
export const LOCALE_SEO_READY = {
  en: true,
  hi: false,
  id: false,
  vi: false,
  bn: false,
  ms: false,
}

/**
 * Per-page overrides keyed by normalized path (e.g. "/forex").
 * @type {Record<string, Partial<Record<string, boolean>>>}
 *
 * Example staged rollout:
 * PAGE_LOCALE_SEO_READY['/forex'] = { hi: true }
 */
export const PAGE_LOCALE_SEO_READY = {}

const INDEXABLE_PATHS = new Set(getIndexablePagePaths())

export function normalizeSeoPagePath(canonicalPath = '/') {
  if (!canonicalPath || canonicalPath === '/') return '/'
  return canonicalPath.replace(/\/+$/, '') || '/'
}

export function isIndexablePublicPath(canonicalPath) {
  return INDEXABLE_PATHS.has(normalizeSeoPagePath(canonicalPath))
}

export function normalizeReadinessLocale(locale) {
  if (!locale || typeof locale !== 'string') return DEFAULT_LOCALE
  const code = locale.split('-')[0].toLowerCase()
  return LOCALE_CODES.includes(code) ? code : DEFAULT_LOCALE
}

/**
 * Whether a locale variant of a page may be indexed and included in hreflang.
 * English is always ready. Non-English requires explicit readiness.
 */
export function isLocalePageSeoReady(locale, canonicalPath) {
  const code = normalizeReadinessLocale(locale)

  if (code === DEFAULT_LOCALE) return true

  const path = normalizeSeoPagePath(canonicalPath)
  const pageOverride = PAGE_LOCALE_SEO_READY[path]?.[code]

  if (pageOverride === true) return true
  if (pageOverride === false) return false

  if (!LOCALE_SEO_READY[code]) return false
  if (!isIndexablePublicPath(path)) return false

  return true
}

/** Locales that should appear in hreflang for this page. */
export function getHreflangLocales(canonicalPath) {
  return LOCALE_CODES.filter((code) => isLocalePageSeoReady(code, canonicalPath))
}

/**
 * Apply noindex to non-ready localized pages while preserving explicit noindex routes (auth).
 */
export function resolveRobotsForLocale(locale, canonicalPath, robots = 'index, follow') {
  if (typeof robots === 'string' && robots.includes('noindex')) return robots

  const code = normalizeReadinessLocale(locale)
  if (code !== DEFAULT_LOCALE && !isLocalePageSeoReady(code, canonicalPath)) {
    return 'noindex, nofollow'
  }

  return robots
}

/** Locales eligible for localized sitemap segments (future use). */
export function getSitemapReadyLocales() {
  return LOCALE_CODES.filter(
    (code) => code !== DEFAULT_LOCALE && LOCALE_SEO_READY[code] === true,
  )
}

/** Prerender targets: English always; localized only when SEO-ready. */
export function getSeoReadyPrerenderRoutes() {
  const paths = getIndexablePagePaths()
  const routes = []

  for (const pagePath of paths) {
    routes.push({ path: pagePath, locale: DEFAULT_LOCALE })

    for (const locale of LOCALE_CODES) {
      if (locale === DEFAULT_LOCALE) continue
      if (!isLocalePageSeoReady(locale, pagePath)) continue

      const localizedPath =
        pagePath === '/' ? `/${locale}` : `/${locale}${pagePath}`
      routes.push({ path: localizedPath, locale })
    }
  }

  return routes
}
