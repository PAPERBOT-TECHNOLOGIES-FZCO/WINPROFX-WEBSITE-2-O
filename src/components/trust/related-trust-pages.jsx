import React from 'react'
import { useTranslation } from 'react-i18next'
import LocalizedLink from '@/components/localized-link'
import IdentitySection from '@/components/company-identity/identity-section'

/**
 * @param {{ links: { path: string, label: string }[], title?: string }} props
 */
export default function RelatedTrustPages({ links, title }) {
  const { t } = useTranslation('common')

  if (!links?.length) return null

  return (
    <IdentitySection title={title ?? t('labels.relatedTrustPages')}>
      <ul className="grid gap-2 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.path}>
            <LocalizedLink
              to={link.path}
              className="block rounded-lg border border-white/10 px-4 py-3 text-white/80 hover:border-primary/50 hover:text-primary transition-colors"
            >
              {link.label}
            </LocalizedLink>
          </li>
        ))}
      </ul>
    </IdentitySection>
  )
}
