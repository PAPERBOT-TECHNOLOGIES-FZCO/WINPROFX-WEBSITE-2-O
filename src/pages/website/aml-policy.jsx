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

export default function AmlPolicy() {
  const { t } = useTranslation('legal')
  const seo = useSeo('amlPolicy')
  const info = getLegalContent(t, 'amlPolicy')

  return (
    <div className="padding-top-245">
      <SeoHead {...seo} canonicalPath="/aml-policy" pageName={t('amlPolicy.h1')} />
      <TopShape />
      <PolicyTitle as="h1" title={t('amlPolicy.h1')} />
      <Container>
        <Card>
          <LegalPageSections sections={info} />
        </Card>
      </Container>
    </div>
  )
}
