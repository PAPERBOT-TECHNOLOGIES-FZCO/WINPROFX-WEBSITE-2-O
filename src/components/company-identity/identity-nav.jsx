import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import LocalizedLink from '@/components/localized-link'
import { companyLicenseLinks, trustSupportLinks } from '@/lib/company-registration'
import { pathToTrustPageKey } from '@/lib/trust-page-keys'
import { normalizeRoutePath } from '@/lib/schema-org'

function pathsMatch(pathname, linkPath) {
  return normalizeRoutePath(pathname) === normalizeRoutePath(linkPath)
}

function NavGroup({ title, links, pathname, t }) {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="text-base font-semibold text-white mb-3">{title}</h3>
      <ul className="flex flex-wrap gap-2 md:gap-3">
        {links.map((link) => {
          const pageKey = pathToTrustPageKey(link.path)
          const label = pageKey ? t(`pages.${pageKey}.label`) : link.label
          return (
            <li key={link.path}>
              <LocalizedLink
                to={link.path}
                className={`inline-block px-4 py-2 rounded-full text-sm border border-solid transition-colors ${
                  pathsMatch(pathname, link.path)
                    ? 'bg-primary/20 border-primary text-white'
                    : 'bg-white/2 border-white/12 text-para hover:text-white hover:border-white/30'
                }`}
                aria-current={pathsMatch(pathname, link.path) ? 'page' : undefined}
              >
                {label}
              </LocalizedLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function IdentityNav() {
  const { pathname } = useLocation()
  const { t } = useTranslation('trust')

  return (
    <nav aria-label={t('identityNav.ariaLabel')} className="mt-8 md:mt-10 pt-6 border-t border-solid border-white/10">
      <h2 className="text-lg font-semibold text-white mb-4">{t('identityNav.relatedPages')}</h2>
      <NavGroup title={t('identityNav.companyLicense')} links={companyLicenseLinks} pathname={pathname} t={t} />
      <NavGroup title={t('identityNav.trustSupport')} links={trustSupportLinks} pathname={pathname} t={t} />
    </nav>
  )
}
