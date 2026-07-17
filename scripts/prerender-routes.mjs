/**
 * Routes to prerender after Vite build for crawler-visible SEO metadata.
 * Built from locale-seo-readiness.mjs — only SEO-ready locale/page pairs are included.
 */
import {
    DEFAULT_LOCALE,
    getSeoReadyPrerenderRoutes,
} from './locale-seo-readiness.mjs'

const NON_DEFAULT_LOCALE_CODES = ['hi', 'id', 'vi', 'bn', 'ms', 'es', 'pt', 'zh', 'ja']

/** English path hints for prerender wait conditions (keyed by unprefixed path). */
const TITLE_HINTS = {
  '/': {
    expectedTitle: 'WINPROFX Official Website',
    expectedH1: 'Your Path to Profitable Trading Start Here',
  },
  // '/trust-center': { expectedTitle: 'Trust Center', expectedH1: 'WINPROFX Trust Center' },
  // '/company-profile': { expectedTitle: 'Company Profile', expectedH1: 'Company Profile' },
  // '/company-registration': { expectedTitle: 'Company Registration', expectedH1: 'Company Registration' },
  // '/legal-entity-information': { expectedTitle: 'Legal Entity Information', expectedH1: 'Legal Entity Information' },
  // '/regulatory-information': { expectedTitle: 'Information', expectedH1: 'Information' },
  // '/dubai-professional-license': { expectedTitle: 'Dubai Professional License', expectedH1: 'Dubai Professional License' },
  // '/uae-representative-office': { expectedTitle: 'UAE Representative Office', expectedH1: 'UAE Representative Office' },
  // '/official-domains': { expectedTitle: 'Official WINPROFX Domains', expectedH1: 'Official WINPROFX Domains' },
  '/verify-winprofx': { expectedTitle: 'Verify WINPROFX', expectedH1: 'Verify WINPROFX' },
  // '/legal-documents': { expectedTitle: 'Legal Documents', expectedH1: 'Legal Documents' },
  '/risk-warning': { expectedTitle: 'Risk Warning', expectedH1: 'Risk Warning' },
  '/withdrawal-transparency': { expectedTitle: 'Withdrawal Transparency', expectedH1: 'Withdrawal Transparency' },
  '/complaints-and-dispute-resolution': { expectedTitle: 'Complaints', expectedH1: 'Complaints and Dispute Resolution' },
  '/client-fund-security': { expectedTitle: 'Client Fund Security', expectedH1: 'Client Fund Security' },
  '/support-and-escalation': { expectedTitle: 'Support and Escalation', expectedH1: 'Support and Escalation' },
  // '/company-statistics': { expectedTitle: 'Company Statistics', expectedH1: 'Company Statistics' },
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

export function buildPrerenderRoutes() {
  return getSeoReadyPrerenderRoutes()
    .map(({ path, locale }) => {
      const basePath = locale === DEFAULT_LOCALE ? path : stripLocalePrefixFromPath(path)
      const hints =
        locale === DEFAULT_LOCALE
          ? (TITLE_HINTS[basePath] ?? { expectedTitle: null, expectedH1: null })
          : { expectedTitle: null, expectedH1: null }

      return {
        path,
        locale,
        basePath,
        ...hints,
      }
    })
    .sort((a, b) => {
      if (a.path === '/') return 1
      if (b.path === '/') return -1
      return a.path.localeCompare(b.path)
    })
}

/** @type {ReturnType<typeof buildPrerenderRoutes>} */
export const PRERENDER_ROUTES = buildPrerenderRoutes()
