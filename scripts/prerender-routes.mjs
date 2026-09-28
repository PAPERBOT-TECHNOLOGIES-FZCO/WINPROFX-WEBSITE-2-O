/**
 * Routes to prerender after Vite build for crawler-visible SEO metadata.
 * Built from locale-seo-readiness.mjs — only SEO-ready locale/page pairs are included.
 *
 * CMS blog routes are fetched dynamically from Strapi at build time so that
 * adding a new article to the CMS is all that's needed — no code changes required.
 */
import {
    DEFAULT_LOCALE,
    getSeoReadyPrerenderRoutes,
} from './locale-seo-readiness.mjs'
import { fetchCmsSlugs } from './cms-slugs.mjs'

const NON_DEFAULT_LOCALE_CODES = ['hi', 'id', 'vi', 'bn', 'ms', 'es', 'pt', 'zh', 'ja']

/** English path hints for prerender wait conditions (keyed by unprefixed path). */
const TITLE_HINTS = {
  '/': {
    expectedTitle: 'Trusted Forex Trading Platform',
    expectedH1: 'Your Path to Profitable Trading Start Here',
  },
  '/verify-winprofx': { expectedTitle: 'Verify WINPROFX', expectedH1: 'Verify WINPROFX' },
  '/risk-warning': { expectedTitle: 'Risk Warning', expectedH1: 'Risk Warning' },
  '/withdrawal-transparency': { expectedTitle: 'Withdrawal Transparency', expectedH1: 'Withdrawal Transparency' },
  '/complaints-and-dispute-resolution': { expectedTitle: 'Complaints', expectedH1: 'Complaints and Dispute Resolution' },
  '/client-fund-security': { expectedTitle: 'Client Fund Security', expectedH1: 'Client Fund Security' },
  '/support-and-escalation': { expectedTitle: 'Support and Escalation', expectedH1: 'Support and Escalation' },
  '/is-winprofx-legit': { expectedTitle: 'Is WINPROFX Legit', expectedH1: 'Is WINPROFX Legit' },
  '/winprofx-review': { expectedTitle: 'WINPROFX Review', expectedH1: 'WINPROFX Review' },
  '/winprofx-withdrawal-process': { expectedTitle: 'Withdrawal Process', expectedH1: 'WINPROFX Withdrawal Process' },
  '/winprofx-fake-website-warning': { expectedTitle: 'Fake Website Warning', expectedH1: 'WINPROFX Fake Website Warning' },
  '/learn': { expectedTitle: 'Learning Center', expectedH1: 'WINPROFX Learning Center' },
}

export function stripLocalePrefixFromPath(routePath) {
  const segments = (routePath || '/').split('/').filter(Boolean)
  if (segments.length > 0 && NON_DEFAULT_LOCALE_CODES.includes(segments[0])) {
    const rest = segments.slice(1).join('/')
    return rest ? `/${rest}` : '/'
  }
  return routePath === '' ? '/' : routePath
}

// ── Fetch CMS slugs at build time (top-level await) ──────────────────────────
// Falls back to [] if the CMS is unreachable — build continues without blog routes.
const cmsSlugs = await fetchCmsSlugs()

/** All paths served by CmsBlogDetails — uses data-prerender-ready sentinel. */
export const CMS_BLOG_PATHS = new Set(cmsSlugs.map((s) => `/${s}`))

export function buildPrerenderRoutes() {
  // 1. Standard (non-CMS) routes from seo-routes registry
  const standardRoutes = getSeoReadyPrerenderRoutes()
    .map(({ path, locale }) => {
      const basePath = locale === DEFAULT_LOCALE ? path : stripLocalePrefixFromPath(path)
      // CMS blog paths that also appear in seo-routes get the cmsPage flag
      const isCmsPage = CMS_BLOG_PATHS.has(basePath)
      const hints = isCmsPage
        ? { expectedTitle: null, expectedH1: null, cmsPage: true }
        : locale === DEFAULT_LOCALE
          ? (TITLE_HINTS[basePath] ?? { expectedTitle: null, expectedH1: null })
          : { expectedTitle: null, expectedH1: null }

      return { path, locale, basePath, ...hints }
    })

  // 2. CMS-only blog routes — not in seo-routes.mjs, generated purely from Strapi
  //    Only include locales that are SEO-ready (en always; es currently).
  const SEO_READY_LOCALES = ['en', 'es']
  const standardPaths = new Set(standardRoutes.map((r) => r.path))

  const cmsRoutes = []
  for (const slug of cmsSlugs) {
    for (const locale of SEO_READY_LOCALES) {
      const routePath = locale === DEFAULT_LOCALE ? `/${slug}` : `/${locale}/${slug}`
      if (standardPaths.has(routePath)) continue // already included above
      cmsRoutes.push({
        path: routePath,
        locale,
        basePath: `/${slug}`,
        cmsPage: true,
        expectedTitle: null,
        expectedH1: null,
      })
    }
  }

  return [...standardRoutes, ...cmsRoutes]
    .sort((a, b) => {
      if (a.path === '/') return 1
      if (b.path === '/') return -1
      return a.path.localeCompare(b.path)
    })
}

/** @type {ReturnType<typeof buildPrerenderRoutes>} */
export const PRERENDER_ROUTES = buildPrerenderRoutes()
