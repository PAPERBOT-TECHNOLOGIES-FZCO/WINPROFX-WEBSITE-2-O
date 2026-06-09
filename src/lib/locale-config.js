/** Supported locale codes and display metadata. */

export const DEFAULT_LOCALE = 'en'

export const LOCALE_CODES = ['en', 'hi', 'id', 'vi', 'bn', 'ms', 'zh', 'ja']

/** Re-export SEO readiness flags — source of truth: scripts/locale-seo-readiness.mjs */
export { LOCALE_SEO_READY, PAGE_LOCALE_SEO_READY } from '@/lib/locale-seo-readiness'

export const NON_DEFAULT_LOCALES = LOCALE_CODES.filter((code) => code !== DEFAULT_LOCALE)

export const LOCALE_META = {
  en: { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧', dir: 'ltr' },
  hi: { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
  id: { code: 'id', label: 'Indonesian', nativeLabel: 'Bahasa Indonesia', flag: '🇮🇩', dir: 'ltr' },
  vi: { code: 'vi', label: 'Vietnamese', nativeLabel: 'Tiếng Việt', flag: '🇻🇳', dir: 'ltr' },
  bn: { code: 'bn', label: 'Bengali', nativeLabel: 'বাংলা', flag: '🇧🇩', dir: 'ltr' },
  ms: { code: 'ms', label: 'Malay', nativeLabel: 'Bahasa Melayu', flag: '🇲🇾', dir: 'ltr' },
  zh: { code: 'zh', label: 'Chinese', nativeLabel: '中文', flag: '🇨🇳', dir: 'ltr' },
  ja: { code: 'ja', label: 'Japanese', nativeLabel: '日本語', flag: '🇯🇵', dir: 'ltr' },
}

export function normalizeLocale(locale) {
  if (!locale || typeof locale !== 'string') return DEFAULT_LOCALE
  const base = locale.split('-')[0].toLowerCase()
  return isValidLocale(base) ? base : DEFAULT_LOCALE
}

export const I18N_NAMESPACES = [
  'common',
  'navigation',
  'footer',
  'seo',
  'homepage',
  'markets',
  'trading',
  'tools',
  'platform',
  'accounts',
  'about',
  'blog',
  'learn',
  'contact',
  'legal',
  'trust',
  'brand',
  'promotion',
  'ib',
  'forms',
  'errors',
  'company',
]

export function isValidLocale(locale) {
  return LOCALE_CODES.includes(locale)
}

export function getLocaleFromPathname(pathname = '') {
  const segments = pathname.split('/').filter(Boolean)
  const first = segments[0]
  return isValidLocale(first) && first !== DEFAULT_LOCALE ? first : DEFAULT_LOCALE
}

export function stripLocaleFromPathname(pathname = '') {
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length === 0) return '/'
  if (isValidLocale(segments[0]) && segments[0] !== DEFAULT_LOCALE) {
    const rest = segments.slice(1).join('/')
    return rest ? `/${rest}` : '/'
  }
  return pathname.startsWith('/') ? pathname : `/${pathname}`
}
