import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import i18n from '@/i18n'
import { DEFAULT_LOCALE, getLocaleFromPathname, isValidLocale, normalizeLocale } from '@/lib/locale-config'

/** Keeps i18next language in sync with the URL locale segment. */
export default function LocaleSync() {
  const { locale: localeParam } = useParams()
  const location = useLocation()

  useEffect(() => {
    const fromParam =
      localeParam && isValidLocale(localeParam) ? localeParam : null
    const resolved = normalizeLocale(
      fromParam ?? getLocaleFromPathname(location.pathname) ?? DEFAULT_LOCALE,
    )

    if (normalizeLocale(i18n.language) !== resolved) {
      i18n.changeLanguage(resolved)
    }
  }, [localeParam, location.pathname])

  return null
}
