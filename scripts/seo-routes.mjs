/**
 * Central SEO route registry for sitemap generation and prerender.
 * Single source of truth for public indexable URLs.
 */

export const SITEMAP_LASTMOD = '2026-08-05'

export const SEO_ROUTES = {
  pages: [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/about-us/', priority: '0.8', changefreq: 'monthly' },
    { path: '/about/', priority: '0.7', changefreq: 'monthly' },
    { path: '/contact/', priority: '0.8', changefreq: 'monthly' },
    { path: '/blog/', priority: '0.7', changefreq: 'weekly' },
    // Individual blog post URLs are generated dynamically from Strapi CMS
    // in generate-sitemap.mjs → sitemap-blog.xml. Do not add slugs here.
    { path: '/introducing-broker/', priority: '0.7', changefreq: 'monthly' },
    { path: '/analytics/', priority: '0.6', changefreq: 'monthly' },
    { path: '/economic-calendar/', priority: '0.6', changefreq: 'monthly' },
    { path: '/currency-calculator/', priority: '0.6', changefreq: 'monthly' },
    { path: '/currency-converter/', priority: '0.6', changefreq: 'monthly' },
    { path: '/trading/win-promotion/', priority: '0.6', changefreq: 'monthly' },
    { path: '/trading/trade-to-win/', priority: '0.6', changefreq: 'monthly' },
  ],
  trust: [
    // { path: '/trust-center/', priority: '0.95', changefreq: 'monthly' },
    // { path: '/company-profile/', priority: '0.9', changefreq: 'monthly' },
    // { path: '/company-registration/', priority: '0.9', changefreq: 'monthly' },
    // { path: '/legal-entity-information/', priority: '0.9', changefreq: 'monthly' },
    // { path: '/regulatory-information/', priority: '0.9', changefreq: 'monthly' },
    // { path: '/dubai-professional-license/', priority: '0.9', changefreq: 'monthly' },
    // { path: '/uae-representative-office/', priority: '0.9', changefreq: 'monthly' },
    // { path: '/official-domains/', priority: '0.9', changefreq: 'monthly' },
    { path: '/verify-winprofx/', priority: '0.9', changefreq: 'monthly' },
    { path: '/withdrawal-transparency/', priority: '0.85', changefreq: 'monthly' },
    { path: '/complaints-and-dispute-resolution/', priority: '0.85', changefreq: 'monthly' },
    { path: '/client-fund-security/', priority: '0.85', changefreq: 'monthly' },
    { path: '/support-and-escalation/', priority: '0.85', changefreq: 'monthly' },
    // { path: '/company-statistics/', priority: '0.8', changefreq: 'monthly' },
    { path: '/is-winprofx-legit/', priority: '0.9', changefreq: 'monthly' },
    { path: '/winprofx-review/', priority: '0.85', changefreq: 'monthly' },
    { path: '/winprofx-withdrawal-process/', priority: '0.9', changefreq: 'monthly' },
    { path: '/winprofx-license-verification/', priority: '0.9', changefreq: 'monthly' },
    { path: '/winprofx-complaints/', priority: '0.85', changefreq: 'monthly' },
    { path: '/winprofx-fake-website-warning/', priority: '0.9', changefreq: 'monthly' },
    { path: '/winprofx-official-login/', priority: '0.9', changefreq: 'monthly' },
    { path: '/winprofx-deposit-and-withdrawal-methods/', priority: '0.85', changefreq: 'monthly' },
  ],
  legal: [
    // { path: '/legal-documents/', priority: '0.85', changefreq: 'monthly' },
    { path: '/risk-warning/', priority: '0.85', changefreq: 'monthly' },
    { path: '/policy/', priority: '0.6', changefreq: 'yearly' },
    { path: '/terms/', priority: '0.6', changefreq: 'yearly' },
    { path: '/aml-policy/', priority: '0.6', changefreq: 'yearly' },
    { path: '/deposit-withdraw/', priority: '0.7', changefreq: 'monthly' },
    { path: '/restricted-countries/', priority: '0.6', changefreq: 'monthly' },
    { path: '/risk-disclosure/', priority: '0.6', changefreq: 'yearly' },
  ],
  markets: [
    { path: '/forex/', priority: '0.8', changefreq: 'monthly' },
    { path: '/indices/', priority: '0.8', changefreq: 'monthly' },
    { path: '/crypto/', priority: '0.8', changefreq: 'monthly' },
    { path: '/trading/metals/', priority: '0.8', changefreq: 'monthly' },
    { path: '/trading/commodities/', priority: '0.8', changefreq: 'monthly' },
    { path: '/trading/oil/', priority: '0.8', changefreq: 'monthly' },
    { path: '/platform/', priority: '0.8', changefreq: 'monthly' },
    { path: '/accounts/', priority: '0.8', changefreq: 'monthly' },
  ],
  learn: [
    { path: '/learn/', priority: '0.75', changefreq: 'monthly' },
    { path: '/learn/what-is-forex-trading/', priority: '0.7', changefreq: 'monthly' },
    { path: '/learn/what-is-cfd-trading/', priority: '0.7', changefreq: 'monthly' },
    { path: '/learn/what-is-mt5/', priority: '0.7', changefreq: 'monthly' },
    { path: '/learn/what-is-leverage-in-forex/', priority: '0.7', changefreq: 'monthly' },
    { path: '/learn/what-is-margin-call/', priority: '0.7', changefreq: 'monthly' },
    { path: '/learn/what-is-spread-in-trading/', priority: '0.7', changefreq: 'monthly' },
    { path: '/learn/how-to-manage-risk-in-cfd-trading/', priority: '0.7', changefreq: 'monthly' },
    { path: '/learn/demo-vs-live-trading-account/', priority: '0.7', changefreq: 'monthly' },
    { path: '/learn/how-to-check-if-a-forex-broker-is-legit/', priority: '0.7', changefreq: 'monthly' },
    { path: '/learn/offshore-vs-regulated-forex-brokers/', priority: '0.7', changefreq: 'monthly' },
  ],
}

export function getAllSitemapRoutes() {
  return Object.values(SEO_ROUTES).flat()
}

/** Normalized indexable paths (no trailing slash) — sync with sitemap entries. */
export function getIndexablePagePaths() {
  return getAllSitemapRoutes().map((r) => {
    const path = r.path.replace(/\/+$/, '') || '/'
    return path || '/'
  })
}

export function getPrerenderRoutes() {
  return getAllSitemapRoutes().map((r) => ({
    path: r.path.replace(/\/$/, '') || '/',
    expectedTitle: null,
    expectedH1: null,
  }))
}
