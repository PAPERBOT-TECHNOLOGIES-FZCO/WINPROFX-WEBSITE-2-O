import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const identityLinks = [
  { path: '/company-profile', label: 'Company Profile' },
  { path: '/company-registration', label: 'Company Registration' },
  { path: '/legal-entity-information', label: 'Legal Entity Information' },
  { path: '/regulatory-information', label: 'Regulatory Information' },
  { path: '/official-domains', label: 'Official Domains' },
  { path: '/verify-winprofx', label: 'Verify WINPROFX' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/risk-warning', label: 'Risk Warning' },
  { path: '/legal-documents', label: 'Legal Documents' },
  { path: '/terms', label: 'Terms and Conditions' },
  { path: '/policy', label: 'Privacy Policy' },
  { path: '/aml-policy', label: 'AML Policy' },
  { path: '/restricted-countries', label: 'Restricted Countries' },
]

export default function IdentityNav() {
  const { pathname } = useLocation()

  return (
    <nav aria-label="Company information pages" className="mt-8 md:mt-10 pt-6 border-t border-solid border-white/10">
      <h2 className="text-lg font-semibold text-white mb-4">Related Pages</h2>
      <ul className="flex flex-wrap gap-2 md:gap-3">
        {identityLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`inline-block px-4 py-2 rounded-full text-sm border border-solid transition-colors ${
                pathname === link.path
                  ? 'bg-primary/20 border-primary text-white'
                  : 'bg-white/2 border-white/12 text-para hover:text-white hover:border-white/30'
              }`}
              aria-current={pathname === link.path ? 'page' : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
