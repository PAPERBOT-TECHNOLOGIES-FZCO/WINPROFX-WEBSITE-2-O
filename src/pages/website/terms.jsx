import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import LegalPageSections from '@/components/policy/legal-page-sections'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import { getLegalContent } from '@/lib/get-legal-content'

export default function Terms() {
  const { t } = useTranslation('legal')
  const seo = useSeo('terms')
  const info = getLegalContent(t, 'terms')

  return (
    <div className="padding-top-245">
      <SeoHead {...seo} canonicalPath="/terms" pageName={t('terms.h1')} />
      <TopShape />
      <PolicyTitle as="h1" title={t('terms.h1')} />
      <Container>
        <Card>
          <LegalPageSections sections={info} variant="numbered" />
        </Card>
      </Container>
    </div>
  )
}
