import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { localizedPath } from '@/lib/locale-routing'

/**
 * Router Link that prefixes paths with the active locale when not English.
 */
export default function LocalizedLink({ to, children, ...props }) {
  const { i18n } = useTranslation()
  const resolvedTo = typeof to === 'string' ? localizedPath(to, i18n.language) : to

  return (
    <Link to={resolvedTo} {...props}>
      {children}
    </Link>
  )
}
