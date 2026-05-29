import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { companyLicenseLinks, trustSupportLinks } from '@/lib/company-registration'
import { normalizeRoutePath } from '@/lib/schema-org'

function pathsMatch(pathname, linkPath) {
  return normalizeRoutePath(pathname) === normalizeRoutePath(linkPath)
}

function NavGroup({ title, links, pathname }) {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="text-base font-semibold text-white mb-3">{title}</h3>
      <ul className="flex flex-wrap gap-2 md:gap-3">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`inline-block px-4 py-2 rounded-full text-sm border border-solid transition-colors ${
                pathsMatch(pathname, link.path)
                  ? 'bg-primary/20 border-primary text-white'
                  : 'bg-white/2 border-white/12 text-para hover:text-white hover:border-white/30'
              }`}
              aria-current={pathsMatch(pathname, link.path) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function IdentityNav() {
  const { pathname } = useLocation()

  return (
    <nav aria-label="Company information pages" className="mt-8 md:mt-10 pt-6 border-t border-solid border-white/10">
      <h2 className="text-lg font-semibold text-white mb-4">Related Pages</h2>
      <NavGroup title="Company & License" links={companyLicenseLinks} pathname={pathname} />
      <NavGroup title="Trust & Support" links={trustSupportLinks} pathname={pathname} />
    </nav>
  )
}
