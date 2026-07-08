import React from 'react'
import LocalizedLink from '@/components/localized-link'
import { publicPath } from '@/lib/schema-org'
import { TRUST_CENTER_PATH } from '@/lib/trust-pages'
import { useTranslation } from 'react-i18next'

/**
 * Visible breadcrumb navigation matching JSON-LD BreadcrumbList structure.
 * @param {{ items: { label: string, path?: string }[] }} props
 */
export default function Breadcrumb({ items }) {
  if (!items?.length) return null

  return (
    <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-white/60">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-1">
              {index > 0 && <span aria-hidden="true" className="text-white/30">/</span>}
              {isLast || !item.path ? (
                <span className={isLast ? 'text-white/80' : ''} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              ) : (
                <LocalizedLink to={publicPath(item.path)} className="hover:text-primary transition-colors">
                  {item.label}
                </LocalizedLink>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

/** Standard trust page breadcrumb: Home → Trust Center → Page */
export function TrustBreadcrumb({ pageLabel }) {
  const { t } = useTranslation(['common', 'navigation'])

  return (
    <Breadcrumb
      items={[
        { label: t('common:labels.home'), path: '/' },
        { label: t('navigation:trustCenter'), path: TRUST_CENTER_PATH },
        { label: pageLabel },
      ]}
    />
  )
}
