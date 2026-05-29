import React from 'react'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import StatsPlaceholderGrid from '@/components/company-identity/stats-placeholder-grid'
import SeoHead from '@/components/seo-head'
import {
  companyStatisticsItems,
  RISK_WARNING_SHORT,
  STATS_PLACEHOLDER,
} from '@/lib/company-registration'

export default function CompanyStatistics() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Company Statistics | WINPROFX"
        description="WINPROFX company statistics and operational metrics. Figures will be updated after operations verification."
        canonicalPath="/company-statistics"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Trust & Transparency" title="Company Statistics" />
      <Container>
        <Card>
          <IdentitySection>
            <p>
              This page provides a structured overview of company statistics and operational metrics
              for WINPROFX. Published figures will be updated after internal operations verification
              and compliance review.
            </p>
            <p className="mt-4 italic text-para">{STATS_PLACEHOLDER}</p>
          </IdentitySection>

          <IdentitySection title="Operational Metrics">
            <StatsPlaceholderGrid items={companyStatisticsItems} />
          </IdentitySection>

          <IdentitySection title="Last Updated">
            <p className="text-para">
              Statistics on this page have not yet been published. Check back for verified operational
              data after the next update cycle.
            </p>
          </IdentitySection>

          <IdentitySection title="Important Note">
            <p className="italic text-para">
              WINPROFX does not publish unverified statistics, awards, ratings, or performance claims
              on this page. Any future published metrics will be based on verified internal records
              only.
            </p>
          </IdentitySection>

          <IdentitySection title="Risk Warning">
            <p>{RISK_WARNING_SHORT}</p>
          </IdentitySection>

          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
