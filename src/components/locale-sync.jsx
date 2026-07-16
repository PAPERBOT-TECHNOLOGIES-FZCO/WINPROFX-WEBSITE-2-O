import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import i18n from '@/i18n'
import {
  DEFAULT_LOCALE,
  LOCALE_CODES,
  getLocaleFromPathname,
  isValidLocale,
  normalizeLocale,
} from '@/lib/locale-config'
import { getDefaultLocaleForHostname } from '@/lib/domain-locale'

const STORAGE_EXPLICIT_KEY = 'i18nextLngExplicit'
const STORAGE_KEY = 'i18nextLng'

/**
 * Returns the language to use when the URL has no locale prefix.
 * Priority: explicit user preference → domain default → app default ('en').
 *
 * This mirrors resolveInitialLanguage() in src/i18n/index.js but runs on
 * every route change so the language stays correct after client-side navigation.
 */
function getNoPathLocale() {
  try {
    if (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_EXPLICIT_KEY) === '1') {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const base = stored.split('-')[0].toLowerCase()
        if (LOCALE_CODES.includes(base)) return base
      }
    }
  } catch {
    // ignore
  }
  return getDefaultLocaleForHostname() ?? DEFAULT_LOCALE
}

/** Keeps i18next language in sync with the URL locale segment. */
export default function LocaleSync() {
  const { locale: localeParam } = useParams()
  const location = useLocation()

  useEffect(() => {
    const fromParam = localeParam && isValidLocale(localeParam) ? localeParam : null

    // Prefer an explicit URL locale prefix (e.g. /es/forex → 'es').
    // Fall back to getNoPathLocale() so that winprofx.lat stays in Spanish
    // on unprefixed URLs ('/') without overriding to 'en'.
    const urlLocale = fromParam ?? (
      getLocaleFromPathname(location.pathname) !== DEFAULT_LOCALE
        ? getLocaleFromPathname(location.pathname)
        : null
    )

    const resolved = normalizeLocale(urlLocale ?? getNoPathLocale())

    if (normalizeLocale(i18n.language) !== resolved) {
      i18n.changeLanguage(resolved)
    }
  }, [localeParam, location.pathname])

  return null
}
