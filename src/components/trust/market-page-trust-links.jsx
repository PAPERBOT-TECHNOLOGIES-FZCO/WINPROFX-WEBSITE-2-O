import React from 'react'
import LocalizedLink from '@/components/localized-link'
import IdentitySection from '@/components/company-identity/identity-section'
import { useTranslation } from 'react-i18next'

const trustLinkPaths = [
  { key: 'accountTypes', path: '/accounts/' },
  { key: 'mt5Platform', path: '/platform/' },
  { key: 'riskWarning', path: '/risk-warning/' },
  { key: 'clientFundSecurity', path: '/client-fund-security/' },
  { key: 'learningCenter', path: '/learn/' },
]

/** Trust and education links for market/product pages */
export default function MarketPageTrustLinks() {
  const { t } = useTranslation(['markets', 'common'])

  return (
    <IdentitySection title={t('markets:shared.trustLinks.title')}>
      <p className="mb-4 text-white/80 text-sm leading-relaxed">{t('common:risk.short')}</p>
      <ul className="grid gap-2 sm:grid-cols-2 text-sm">
        {trustLinkPaths.map(({ key, path }) => (
          <li key={key}>
            <LocalizedLink to={path} className="text-primary underline">
              {t(`markets:shared.trustLinks.${key}`)}
            </LocalizedLink>
          </li>
        ))}
      </ul>
    </IdentitySection>
  )
}
