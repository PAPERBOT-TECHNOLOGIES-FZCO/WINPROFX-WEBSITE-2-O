/**
 * Re-exports SEO readiness registry from scripts/locale-seo-readiness.mjs.
 * Single source of truth — update readiness flags in that file only.
 */
export {
  DEFAULT_LOCALE as SEO_DEFAULT_LOCALE,
  LOCALE_CODES as SEO_LOCALE_CODES,
  LOCALE_SEO_READY,
  PAGE_LOCALE_SEO_READY,
  normalizeSeoPagePath,
  isIndexablePublicPath,
  normalizeReadinessLocale,
  isLocalePageSeoReady,
  getHreflangLocales,
  resolveRobotsForLocale,
  getSitemapReadyLocales,
  getSeoReadyPrerenderRoutes,
} from '../../scripts/locale-seo-readiness.mjs'
