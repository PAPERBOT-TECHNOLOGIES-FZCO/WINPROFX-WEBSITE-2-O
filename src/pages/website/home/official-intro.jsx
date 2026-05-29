import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'

const quickLinks = [
  { to: '/company-profile', label: 'Company Profile' },
  { to: '/official-domains', label: 'Official Domains' },
  { to: '/risk-warning', label: 'Risk Warning' },
  { to: '/contact', label: 'Contact' },
]

export default function OfficialIntro() {
  return (
    <section aria-labelledby="official-intro-heading" className="relative z-1 -mt-6 md:-mt-10 pb-4 md:pb-6">
      <Container>
        <div className="bg-white/2 border border-solid border-white/8 backdrop-blur-sm rounded-2xl lg:rounded-[20px] p-4 md:p-6 lg:p-8 max-w-4xl">
          <h1
            id="official-intro-heading"
            className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4"
          >
            WINPROFX Official Website
          </h1>

          <p className="text-sm md:text-base leading-relaxed text-para mb-3 md:mb-4">
            WINPROFX is a forex and CFD trading brand offering access to trading platforms, client
            account services, partner program tools, and trading-related support services through its
            official websites and portals.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-para mb-3 md:mb-4">
            The main official WINPROFX website is{' '}
            <a href="https://winprofx.org/" className="text-white underline hover:text-primary">
              https://winprofx.org/
            </a>
            . WINPROFX also operates official related domains including{' '}
            <a href="https://winprofx.com/" className="text-white underline hover:text-primary" rel="noopener noreferrer">
              https://winprofx.com/
            </a>{' '}
            and{' '}
            <a href="https://winprofx.ae/" className="text-white underline hover:text-primary" rel="noopener noreferrer">
              https://winprofx.ae/
            </a>
            . Client portal access is available through{' '}
            <a href="https://my.winprofx.org/" className="text-white underline hover:text-primary" rel="noopener noreferrer">
              https://my.winprofx.org/
            </a>{' '}
            and partner portal access is available through{' '}
            <a href="https://partner.winprofx.org/" className="text-white underline hover:text-primary" rel="noopener noreferrer">
              https://partner.winprofx.org/
            </a>
            .
          </p>

          <p className="text-xs md:text-sm leading-relaxed text-para2 border-t border-white/8 pt-3 md:pt-4 mb-4 md:mb-5">
            Trading forex and CFDs involves significant risk and may not be suitable for all investors.
            Clients should understand the risks before trading.
          </p>

          <nav aria-label="Official information" className="flex flex-wrap gap-2 md:gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="inline-flex items-center text-xs md:text-sm font-medium text-white bg-white/8 hover:bg-primary hover:text-black border border-white/8 rounded-full px-3 md:px-4 py-1.5 md:py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </section>
  )
}
