import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import SeoHead from '@/components/seo-head'

export default function RiskWarning() {
  return (
    <div className="padding-top-245">
      <SeoHead
        title="Risk Warning | WINPROFX"
        description="Important risk warning for users trading forex, CFDs, and related financial products through WINPROFX."
        canonicalPath="/risk-warning"
        pageName="Risk Warning"
      />
      <TopShape />
      <PolicyTitle as="h1" meta="Important Notice" title="Risk Warning" />
      <Container>
        <Card>
          <IdentitySection title="General Risk">
            <p>
              Trading forex and CFDs involves significant risk and may not be suitable for all investors.
              Clients should understand the risks before trading. You may lose some or all of your invested
              capital. You should not trade with money you cannot afford to lose.
            </p>
          </IdentitySection>

          <IdentitySection title="Leverage Risk">
            <p>
              Forex and CFD products are typically traded on margin using leverage. Leverage can amplify
              both gains and losses. A small market movement can result in proportionally larger losses
              relative to your deposited funds.
            </p>
          </IdentitySection>

          <IdentitySection title="Market Volatility">
            <p>
              Financial markets can be volatile. Prices may move rapidly and unpredictably due to economic
              events, news, liquidity conditions, or other factors. During volatile conditions, it may be
              difficult to execute trades at expected prices or to close positions at desired levels.
            </p>
          </IdentitySection>

          <IdentitySection title="Suitability">
            <p>
              Before trading, you should carefully consider your financial situation, experience, and
              objectives. If you are unsure whether forex or CFD trading is appropriate for you, seek
              independent financial advice from a qualified professional.
            </p>
          </IdentitySection>

          <IdentitySection title="No Profit Guarantees">
            <p>
              Past performance is not indicative of future results. WINPROFX does not guarantee profits
              or protection against losses. All trading decisions are made at your own risk.
            </p>
          </IdentitySection>

          <IdentitySection title="Further Information">
            <p>
              For the full risk disclosure statement, please read our{' '}
              <Link to="/risk-disclosure" className="text-white underline hover:text-primary">
                Risk Disclosure
              </Link>{' '}
              page. For legal policies, visit{' '}
              <Link to="/legal-documents" className="text-white underline hover:text-primary">
                Legal Documents
              </Link>
              .
            </p>
            <p className="mt-4">
              If you have questions, contact{' '}
              <a href="mailto:support@winprofx.com" className="text-white underline hover:text-primary">
                support@winprofx.com
              </a>{' '}
              or visit our{' '}
              <Link to="/contact" className="text-white underline hover:text-primary">
                Contact page
              </Link>
              .
            </p>
          </IdentitySection>

          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
