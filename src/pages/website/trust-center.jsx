import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import SeoHead from '@/components/seo-head'
import Breadcrumb from '@/components/breadcrumb'
import LocalizedLink from '@/components/localized-link'
import TrustCenterCard from '@/components/trust/trust-center-card'
import TrustMetaFooter from '@/components/trust/trust-meta-footer'
import IdentitySection from '@/components/company-identity/identity-section'
import { useSeo } from '@/hooks/use-seo'
import {
  getTrustCenterPages,
  getBrandGuideLinks,
  TRUST_LAST_REVIEWED,
  TRUST_LAST_REVIEWED_ISO,
} from '@/lib/trust-pages'

export default function TrustCenter() {
  const { t: tCommon } = useTranslation('common')
  const { t } = useTranslation('trust')
  const { t: tBrand } = useTranslation('brand')
  const seo = useSeo('trustCenter')
  const trustPages = getTrustCenterPages(t)
  const brandGuides = getBrandGuideLinks(tBrand)

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/trust-center"
        pageName={t('trustCenter.h1')}
        dateModified={TRUST_LAST_REVIEWED_ISO}
      />
      <TopShape />
      <PolicyTitle
        as="h1"
        meta={`${tCommon('labels.lastReviewed')} ${TRUST_LAST_REVIEWED}`}
        title={t('trustCenter.h1')}
      />
      <Container>
        <Card>
          <Breadcrumb
            items={[
              { label: tCommon('labels.home'), path: '/' },
              { label: tCommon('labels.trustCenter') },
            ]}
          />

          <p className="mb-6 text-white/80 leading-relaxed">
            {t('trustCenter.intro')}
          </p>

          <div className="mb-8 rounded-lg border border-amber-500/40 bg-amber-500/10 p-5">
            <p className="text-white/90 font-medium mb-2">{t('trustCenter.verifyCalloutTitle')}</p>
            <p className="text-white/70 text-sm leading-relaxed mb-3">
              {t('trustCenter.verifyCalloutBody')}
            </p>
            <LocalizedLink to="/official-domains/" className="text-primary underline hover:text-white text-sm">
              {t('trustCenter.viewOfficialDomains')}
            </LocalizedLink>
            {' · '}
            <LocalizedLink to="/verify-winprofx/" className="text-primary underline hover:text-white text-sm">
              {t('trustCenter.howToVerify')}
            </LocalizedLink>
          </div>

          <IdentitySection title={t('trustCenter.sections.companyLegal')}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {trustPages
                .filter((p) => p.category === 'company' || p.category === 'legal')
                .map((page) => (
                  <TrustCenterCard key={page.path} {...page} />
                ))}
            </div>
          </IdentitySection>

          <IdentitySection title={t('trustCenter.sections.verification')}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {trustPages
                .filter((p) => p.category === 'verification')
                .map((page) => (
                  <TrustCenterCard key={page.path} {...page} />
                ))}
            </div>
          </IdentitySection>

          <IdentitySection title={t('trustCenter.sections.trustSupport')}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {trustPages
                .filter((p) => p.category === 'trust')
                .map((page) => (
                  <TrustCenterCard key={page.path} {...page} />
                ))}
            </div>
          </IdentitySection>

          <IdentitySection title={t('trustCenter.sections.brandGuides')}>
            <p className="mb-4 text-white/70 text-sm">
              {t('trustCenter.sections.brandGuidesIntro')}
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {brandGuides.map((link) => (
                <li key={link.path}>
                  <LocalizedLink
                    to={link.path}
                    className="block rounded-lg border border-white/10 px-4 py-3 text-white/80 hover:border-primary/50 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </IdentitySection>

          <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white/90">{tCommon('labels.riskWarning')}</strong> {tCommon('risk.short')}
            </p>
          </div>

          <TrustMetaFooter showRiskWarning={false} />
        </Card>
      </Container>
    </div>
  )
}
