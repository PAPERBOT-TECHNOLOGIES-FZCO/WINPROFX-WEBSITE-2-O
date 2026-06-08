import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { localizedPath, switchLocalePath } from '@/lib/locale-routing'
import { useLocation } from 'react-router-dom'

export function useLocalizedPath() {
  const { i18n } = useTranslation()
  const location = useLocation()

  const toLocalizedPath = useCallback(
    (path) => localizedPath(path, i18n.language),
    [i18n.language],
  )

  const toLocaleSwitchPath = useCallback(
    (nextLocale) => switchLocalePath(location.pathname, nextLocale),
    [location.pathname],
  )

  return { toLocalizedPath, toLocaleSwitchPath, locale: i18n.language }
}
