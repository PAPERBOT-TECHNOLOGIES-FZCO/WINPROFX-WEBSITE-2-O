import React from 'react'
import { useTranslation } from 'react-i18next'
import { TrustBreadcrumb } from '@/components/breadcrumb'
import RelatedTrustPages from '@/components/trust/related-trust-pages'
import TrustMetaFooter from '@/components/trust/trust-meta-footer'
import IdentitySection from '@/components/company-identity/identity-section'
import Accordion from '@/components/accordion'
import { getRelatedTrustLinks } from '@/lib/trust-pages'

/** Breadcrumb for trust sub-pages — place at top of Card content. */
export function TrustPageBreadcrumb({ pageLabel }) {
  return <TrustBreadcrumb pageLabel={pageLabel} />
}

/** FAQ + related links + meta footer — place before IdentityNav. */
export function TrustPageFooter({ canonicalPath, faqItems, showRiskWarning = true }) {
  const { t } = useTranslation(['trust', 'common'])
  const related = getRelatedTrustLinks(t, canonicalPath)

  return (
    <>
      {faqItems?.length > 0 && (
        <IdentitySection title={t('labels.faqTitle', { ns: 'common' })}>
          <Accordion items={faqItems.map((f) => ({ title: f.question, content: f.answer }))} />
        </IdentitySection>
      )}
      <RelatedTrustPages links={related} />
      <TrustMetaFooter showRiskWarning={showRiskWarning} />
    </>
  )
}
