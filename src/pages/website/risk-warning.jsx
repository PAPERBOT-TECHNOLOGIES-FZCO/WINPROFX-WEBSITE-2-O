import React from 'react'
import { useTranslation } from 'react-i18next'
import LocalizedLink from '@/components/localized-link'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import SeoHead from '@/components/seo-head'
import { TrustPageBreadcrumb, TrustPageFooter } from '@/components/trust/trust-page-extras'
import { TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'
import { useSeo } from '@/hooks/use-seo'
import { RISK_WARNING_FULL } from '@/lib/company-registration'

export default function RiskWarning() {
  const { t } = useTranslation('legal')
  const { t: tTrust } = useTranslation('trust')
  const seo = useSeo('riskWarning')

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/risk-warning"
        pageName={t('riskWarning.h1')}
        dateModified={TRUST_LAST_REVIEWED_ISO}
      />
      <TopShape />
      <PolicyTitle as="h1" meta={t('riskWarning.meta')} title={t('riskWarning.h1')} />
      <Container>
        <Card>
          <TrustPageBreadcrumb pageLabel={t('riskWarning.h1')} />
          <IdentitySection>
            <p>{RISK_WARNING_FULL}</p>
          </IdentitySection>

          <IdentitySection title={t('riskWarning.sections.generalRisk')}>
            <p>{t('riskWarning.generalRiskBody')}</p>
          </IdentitySection>

          <IdentitySection title={t('riskWarning.sections.leverageRisk')}>
            <p>{t('riskWarning.leverageRiskBody')}</p>
          </IdentitySection>

          <IdentitySection title={t('riskWarning.sections.marketVolatility')}>
            <p>{t('riskWarning.marketVolatilityBody')}</p>
          </IdentitySection>

          <IdentitySection title={t('riskWarning.sections.suitability')}>
            <p>{t('riskWarning.suitabilityBody')}</p>
          </IdentitySection>

          <IdentitySection title={t('riskWarning.sections.noProfitGuarantees')}>
            <p>{t('riskWarning.noProfitGuaranteesBody')}</p>
          </IdentitySection>

          <IdentitySection title={t('riskWarning.sections.furtherInformation')}>
            <p>
              For the full risk disclosure statement, please read our{' '}
              <LocalizedLink to="/risk-disclosure/" className="text-white underline hover:text-primary">
                {tTrust('pages.riskDisclosure.label')}
              </LocalizedLink>{' '}
              page.               For legal policies, visit{' '}
              <LocalizedLink to="/policy/" className="text-white underline hover:text-primary">
                Privacy Policy
              </LocalizedLink>
              .
            </p>
            <p className="mt-4">
              For regulatory and license information, see{' '}
              <LocalizedLink to="/verify-winprofx/" className="text-white underline hover:text-primary">
                {tTrust('pages.verifyWinprofx.label')}
              </LocalizedLink>
              .
            </p>
            <p className="mt-4">
              For trust and support information, see{' '}
              <LocalizedLink to="/withdrawal-transparency/" className="text-white underline hover:text-primary">
                {tTrust('pages.withdrawalTransparency.label')}
              </LocalizedLink>
              ,{' '}
              <LocalizedLink to="/complaints-and-dispute-resolution/" className="text-white underline hover:text-primary">
                {tTrust('pages.complaintsAndDisputeResolution.label')}
              </LocalizedLink>
              , and{' '}
              <LocalizedLink to="/client-fund-security/" className="text-white underline hover:text-primary">
                {tTrust('pages.clientFundSecurity.label')}
              </LocalizedLink>
              .
            </p>
            <p className="mt-4">
              If you have questions, contact{' '}
              <a href="mailto:support@winprofx.com" className="text-white underline hover:text-primary">
                support@winprofx.com
              </a>{' '}
              or visit our{' '}
              <LocalizedLink to="/contact/" className="text-white underline hover:text-primary">
                Contact page
              </LocalizedLink>
              .
            </p>
          </IdentitySection>

          <TrustPageFooter
            canonicalPath="/risk-warning"
            showRiskWarning={false}
          />
          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
