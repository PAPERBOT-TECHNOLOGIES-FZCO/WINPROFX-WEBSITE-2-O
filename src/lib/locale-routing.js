import i18n from '@/i18n'
import { DEFAULT_LOCALE, isValidLocale, normalizeLocale } from '@/lib/locale-config'

/**
 * Build an internal router path with optional locale prefix.
 * English stays unprefixed: /forex
 * Other locales: /hi/forex
 */
export function localizedPath(path = '/', locale = i18n.language) {
  const resolvedLocale = normalizeLocale(locale)
  const normalized = !path || path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`
  const clean = normalized.replace(/\/+$/, '') || '/'

  if (!resolvedLocale || resolvedLocale === DEFAULT_LOCALE) {
    return clean === '/' ? '/' : clean
  }

  if (clean === '/') return `/${resolvedLocale}`
  return `/${resolvedLocale}${clean}`
}

/** Absolute canonical path segment (no domain) for SEO — English URLs stay unprefixed. */
export function localizedCanonicalPath(canonicalPath = '/', locale = DEFAULT_LOCALE) {
  const normalized = !canonicalPath || canonicalPath === '/'
    ? '/'
    : canonicalPath.startsWith('/')
      ? canonicalPath
      : `/${canonicalPath}`

  const clean = normalized.replace(/\/+$/, '') || '/'

  if (!locale || locale === DEFAULT_LOCALE) {
    return clean
  }

  if (clean === '/') return `/${locale}/`
  return `/${locale}${clean}/`
}

export function switchLocalePath(currentPathname, nextLocale) {
  const segments = (currentPathname || '/').split('/').filter(Boolean)
  let basePath = currentPathname || '/'

  if (segments.length > 0 && isValidLocale(segments[0]) && segments[0] !== DEFAULT_LOCALE) {
    const rest = segments.slice(1).join('/')
    basePath = rest ? `/${rest}` : '/'
  }

  return localizedPath(basePath, nextLocale)
}
