import { useState, useEffect, useRef, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { LOCALE_META, LOCALE_CODES, getLocaleFromPathname, normalizeLocale } from '@/lib/locale-config'
import { useLocalizedPath } from '@/hooks/use-localized-path'

const STORAGE_KEY = 'i18nextLng'

function buildItems() {
  return LOCALE_CODES.map((code) => ({
    code,
    name: LOCALE_META[code].nativeLabel,
    flag: LOCALE_META[code].flag,
  }))
}

function resolveActiveItem(items, localeCode) {
  const normalized = normalizeLocale(localeCode)
  return items.find((item) => item.code === normalized) ?? items[0]
}

export default function LanguageSelect({ className = 'flex' }) {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { toLocaleSwitchPath } = useLocalizedPath()
  const items = useMemo(() => buildItems(), [])

  const urlLocale = getLocaleFromPathname(location.pathname)
  const activeLocale = normalizeLocale(i18n.resolvedLanguage || i18n.language || urlLocale)

  const [selectedItem, setSelectedItem] = useState(() => resolveActiveItem(items, activeLocale))
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    setSelectedItem(resolveActiveItem(items, activeLocale))
  }, [activeLocale, items])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectItem = async (item) => {
    setSelectedItem(item)
    setIsOpen(false)
    const nextPath = toLocaleSwitchPath(item.code)
    localStorage.setItem(STORAGE_KEY, item.code)
    await i18n.changeLanguage(item.code)
    navigate(nextPath)
  }

  return (
    <div ref={dropdownRef} className={`flex-col gap-y-2 ${className}`}>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full px-0 min-h-6 flex items-center gap-1 justify-between"
          aria-label="Select language"
          aria-expanded={isOpen}
        >
          <span className="flex items-center gap-2">
            <span className="text-base leading-none" aria-hidden="true">
              {selectedItem.flag}
            </span>
            <span className="uppercase text-sm md:text-base text-white font-medium">
              {selectedItem.code}
            </span>
          </span>
          <span className={`flex-none ${isOpen ? '-scale-y-100' : 'scale-y-100'}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.4417 13.5667C10.3245 13.6837 10.1656 13.7494 10 13.7494C9.83438 13.7494 9.67553 13.6837 9.55834 13.5667L3.30834 7.31667C3.19794 7.19819 3.13784 7.04148 3.14069 6.87956C3.14355 6.71765 3.20914 6.56316 3.32365 6.44865C3.43816 6.33414 3.59265 6.26854 3.75457 6.26569C3.91649 6.26283 4.07319 6.32293 4.19167 6.43333L10 12.2417L15.8083 6.43333C15.8656 6.37193 15.9346 6.32268 16.0112 6.28852C16.0879 6.25436 16.1706 6.23599 16.2546 6.23451C16.3385 6.23303 16.4218 6.24846 16.4997 6.2799C16.5775 6.31133 16.6482 6.35812 16.7075 6.41747C16.7669 6.47682 16.8137 6.54751 16.8451 6.62533C16.8765 6.70316 16.892 6.78652 16.8905 6.87043C16.889 6.95435 16.8706 7.03712 16.8365 7.11378C16.8023 7.19045 16.7531 7.25945 16.6917 7.31667L10.4417 13.5667Z" fill="white" />
            </svg>
          </span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0 }}
              className="absolute top-full right-0 mt-6 min-w-full w-max bg-white/2 backdrop-blur-lg border border-t-0 border-white/12 rounded-b-xl max-h-50 overflow-y-auto z-1"
            >
              {items.map((item) => (
                <button
                  type="button"
                  key={item.code}
                  onClick={() => selectItem(item)}
                  className={`flex items-center w-full gap-2.5 py-2 px-3 hover:bg-icon-bg font-medium ${
                    item.code === selectedItem.code
                      ? 'bg-stroke text-white'
                      : 'bg-transparent text-para'
                  }`}
                >
                  <span className="text-base leading-none shrink-0" aria-hidden="true">
                    {item.flag}
                  </span>
                  <span className="line-clamp-1 text-white text-sm text-left">{item.name}</span>
                  <span className="ml-auto text-xs uppercase text-white/50">{item.code}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
