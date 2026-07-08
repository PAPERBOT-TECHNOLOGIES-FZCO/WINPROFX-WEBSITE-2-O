import { useTranslation } from 'react-i18next'
import { isLocalePageSeoReady, normalizeReadinessLocale } from '@/lib/locale-seo-readiness'

/**
 * Returns localized SEO metadata for a page key in the seo namespace.
 * @param {string} pageKey - e.g. "forex", "home", "trustCenter"
 * @param {string} [canonicalPath] - optional path for readiness checks
 */
export function useSeo(pageKey, canonicalPath) {
  const { t, i18n } = useTranslation('seo')
  const base = pageKey
  const locale = normalizeReadinessLocale(i18n.language)

  const meta = {
    title: t(`${base}.title`),
    description: t(`${base}.description`, { defaultValue: '' }),
    keywords: t(`${base}.keywords`, { defaultValue: '' }),
    pageName: t(`${base}.pageName`, { defaultValue: '' }),
  }

  if (canonicalPath) {
    meta.seoReady = isLocalePageSeoReady(locale, canonicalPath)
  }

  return meta
}
