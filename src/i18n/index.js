import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
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

/**
 * Custom i18next detector that returns the domain-specific default locale.
 * It runs after 'path' and 'localStorage' in the detection order, so an
 * explicit user preference or URL-prefix always wins.
 * Returning undefined/null tells i18next to continue to the next detector.
 */
const domainLocaleDetector = {
  type: 'languageDetector',
  name: 'domain',
  lookup() {
    return getDefaultLocaleForHostname() ?? undefined
  },
  cacheUserLanguage() {
    // Domain default is never cached — only explicit user choices are persisted.
  },
}

i18n
  .use(domainLocaleDetector)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: buildResources(),
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: LOCALE_CODES,
    defaultNS: 'common',
    ns: I18N_NAMESPACES,
    interpolation: { escapeValue: false },
    load: 'languageOnly',
    cleanCode: true,
    nonExplicitSupportedLngs: true,
    detection: {
      order: ['path', 'localStorage', 'domain'],
      lookupFromPathIndex: 0,
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    react: { useSuspense: false },
  })

export default i18n
