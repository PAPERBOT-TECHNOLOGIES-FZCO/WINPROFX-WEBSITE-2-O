import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { DEFAULT_LOCALE, I18N_NAMESPACES, LOCALE_CODES } from '@/lib/locale-config'
import { getDefaultLocaleForHostname } from '@/lib/domain-locale'

const localeModules = import.meta.glob('../locales/*/*.json', { eager: true })

function buildResources() {
  const resources = {}

  for (const [path, module] of Object.entries(localeModules)) {
    const match = path.match(/\/locales\/([^/]+)\/([^/]+)\.json$/)
    if (!match) continue
    const [, locale, namespace] = match
    if (!resources[locale]) resources[locale] = {}
    resources[locale][namespace] = module.default ?? module
  }

  return resources
}

const STORAGE_KEY = 'i18nextLng'
/** Set only when the user explicitly picks a language via the switcher. */
const STORAGE_EXPLICIT_KEY = 'i18nextLngExplicit'

/**
 * Determine the correct initial language before i18next initialises.
 *
 * Priority:
 *   1. URL path locale prefix      (e.g. /es/forex → 'es')
 *   2. Explicit user preference    (localStorage 'i18nextLng' + 'i18nextLngExplicit' flag)
 *   3. Domain default              (winprofx.lat → 'es')
 *   4. Application default         ('en')
 *
 * Step 2 requires the explicit flag so that auto-cached fallback values
 * written by old i18next-browser-languagedetector setups (e.g. 'en' cached
 * silently on .com/.org visits) do not override the domain default on .lat.
 *
 * Safe when window / localStorage are absent (build, test).
 */
function resolveInitialLanguage() {
  try {
    if (typeof window !== 'undefined') {
      const segments = window.location.pathname.split('/').filter(Boolean)
      const first = segments[0]
      if (first && LOCALE_CODES.includes(first) && first !== DEFAULT_LOCALE) {
        return first
      }
    }
  } catch {
    // ignore
  }

  try {
    if (typeof localStorage !== 'undefined') {
      const isExplicit = localStorage.getItem(STORAGE_EXPLICIT_KEY) === '1'
      if (isExplicit) {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
          const base = stored.split('-')[0].toLowerCase()
          if (LOCALE_CODES.includes(base)) return base
        }
      }
    }
  } catch {
    // ignore
  }

  const domainDefault = getDefaultLocaleForHostname()
  if (domainDefault) return domainDefault

  return DEFAULT_LOCALE
}

const initialLanguage = resolveInitialLanguage()

i18n
  .use(initReactI18next)
  .init({
    lng: initialLanguage,
    resources: buildResources(),
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: LOCALE_CODES,
    defaultNS: 'common',
    ns: I18N_NAMESPACES,
    interpolation: { escapeValue: false },
    load: 'languageOnly',
    cleanCode: true,
    nonExplicitSupportedLngs: true,
    react: { useSuspense: false },
  })

export default i18n
