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
        description="View WINPROFX operational statistics, platform information, support metrics, and transparency updates."
        canonicalPath="/company-statistics"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Trust & Transparency" title="Company Statistics" />
      <Container>
        <Card>
          <IdentitySection>
            <p>
              This page provides a structured overview of WINPROFX operational statistics and transparency
              metrics. It exists so clients, partners, and the public can access verified company data in
              one place as it becomes available after internal operations and compliance review.
            </p>
            <p className="mt-4">
              WINPROFX does not publish unverified figures, awards, ratings, or performance claims. All
              values below are placeholders until operations verification is complete.
            </p>
            <p className="mt-4 italic text-para">{STATS_PLACEHOLDER}</p>
          </IdentitySection>

          <IdentitySection title="Operational Metrics">
            <StatsPlaceholderGrid items={companyStatisticsItems} />
          </IdentitySection>

          <IdentitySection title="How Statistics Are Updated">
            <p className="text-para">
              Metrics on this page are reviewed internally before publication. When verified data is
              approved, this page will be updated with a current last-updated date. Check back after the
              next transparency update cycle.
            </p>
          </IdentitySection>

          <IdentitySection title="Important Note">
            <p className="italic text-para">
              Statistics are provided for transparency purposes only. They do not guarantee future
              performance, service levels, or processing times for individual accounts.
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
