import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentityNav from '@/components/company-identity/identity-nav'
import Accordion from '@/components/accordion'
import { TrustBreadcrumb } from '@/components/breadcrumb'
import RelatedTrustPages from '@/components/trust/related-trust-pages'
import TrustMetaFooter from '@/components/trust/trust-meta-footer'
import IdentitySection from '@/components/company-identity/identity-section'
import { getRelatedTrustLinks, TRUST_LAST_REVIEWED } from '@/lib/trust-pages'

/**
 * Shared layout wrapper for trust and brand-intent pages.
 */
export default function TrustPageLayout({
  h1,
  meta,
  intro,
  canonicalPath,
  children,
  faqItems,
  relatedLinks,
  showIdentityNav = true,
  showRiskWarning = true,
  warningCallout,
}) {
  const { t: tCommon } = useTranslation('common')
  const { t: tTrust } = useTranslation('trust')
  const related = relatedLinks ?? getRelatedTrustLinks(tTrust, canonicalPath)

  return (
    <div className="padding-top-245">
      <TopShape />
      <PolicyTitle
        as="h1"
        meta={meta ?? `${tCommon('labels.lastReviewed')} ${TRUST_LAST_REVIEWED}`}
        title={h1}
      />
      <Container>
        <Card>
          <TrustBreadcrumb pageLabel={h1} />
          {warningCallout}
          {intro && <p className="mb-6 text-white/80 leading-relaxed">{intro}</p>}
          {children}
          {faqItems?.length > 0 && (
            <IdentitySection title={tCommon('labels.faqTitle')}>
              <Accordion items={faqItems.map((f) => ({ title: f.question, content: f.answer }))} />
            </IdentitySection>
          )}
          <RelatedTrustPages links={related} />
          <TrustMetaFooter showRiskWarning={showRiskWarning} />
          {showIdentityNav && <IdentityNav />}
        </Card>
      </Container>
    </div>
  )
}
