import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import StatsPlaceholderGrid from '@/components/company-identity/stats-placeholder-grid'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import { TrustPageBreadcrumb, TrustPageFooter } from '@/components/trust/trust-page-extras'
import { TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'
import { BRAND_NAME, companyStatisticsItems } from '@/lib/company-registration'

const PAGE_KEY = 'companyStatistics'

export default function CompanyStatistics() {
  const { t } = useTranslation('trust')
  const { t: tCompany } = useTranslation('company')
  const seo = useSeo('companyStatistics')

  const i18nVars = { brandName: BRAND_NAME }

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/company-statistics"
        pageName={t(`pages.${PAGE_KEY}.h1`)}
        dateModified={TRUST_LAST_REVIEWED_ISO}
      />
      <TopShape />
      <PolicyTitle as="h1" meta={t(`pages.${PAGE_KEY}.meta`)} title={t(`pages.${PAGE_KEY}.h1`)} />
      <Container>
        <Card>
          <TrustPageBreadcrumb pageLabel={t(`pages.${PAGE_KEY}.h1`)} />
          <IdentitySection>
            <p>{t(`pages.${PAGE_KEY}.content.intro1`)}</p>
            <p className="mt-4">{t(`pages.${PAGE_KEY}.content.intro2`, i18nVars)}</p>
            <p className="mt-4 italic text-para">{tCompany('statsPlaceholder')}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.operationalMetrics`)}>
            <StatsPlaceholderGrid items={companyStatisticsItems} />
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.howStatisticsAreUpdated`)}>
            <p className="text-para">{t(`pages.${PAGE_KEY}.content.statsUpdate`)}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.importantNote`)}>
            <p className="italic text-para">{t(`pages.${PAGE_KEY}.content.importantNote`)}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.riskWarning`)}>
            <p>{tCompany('riskWarningShort')}</p>
          </IdentitySection>

          <TrustPageFooter canonicalPath="/company-statistics" />
          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
