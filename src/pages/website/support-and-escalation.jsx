import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import LocalizedLink from '@/components/localized-link'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import IdentitySection from '@/components/company-identity/identity-section'
import IdentityNav from '@/components/company-identity/identity-nav'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'
import { TrustPageBreadcrumb, TrustPageFooter } from '@/components/trust/trust-page-extras'
import { TRUST_LAST_REVIEWED_ISO } from '@/lib/trust-pages'
import { BRAND_NAME, SUPPORT_EMAIL } from '@/lib/company-registration'

const PAGE_KEY = 'supportAndEscalation'

export default function SupportAndEscalation() {
  const { t } = useTranslation('trust')
  const { t: tCompany } = useTranslation('company')
  const seo = useSeo('supportAndEscalation')

  const i18nVars = { brandName: BRAND_NAME, supportEmail: SUPPORT_EMAIL }
  const ticketSteps = Object.values(t(`pages.${PAGE_KEY}.content.ticketSteps`, { returnObjects: true }))
  const clientInfo = Object.values(t(`pages.${PAGE_KEY}.content.clientInfo`, { returnObjects: true }))

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/support-and-escalation"
        pageName={t(`pages.${PAGE_KEY}.h1`)}
        dateModified={TRUST_LAST_REVIEWED_ISO}
      />
      <TopShape />
      <PolicyTitle as="h1" meta={t(`pages.${PAGE_KEY}.meta`)} title={t(`pages.${PAGE_KEY}.h1`)} />
      <Container>
        <Card>
          <TrustPageBreadcrumb pageLabel={t(`pages.${PAGE_KEY}.h1`)} />
          <IdentitySection>
            <p>{t(`pages.${PAGE_KEY}.content.intro`, i18nVars)}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.officialSupportChannels`)}>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-para">
              <li>{t(`pages.${PAGE_KEY}.content.supportChannels.email`, i18nVars)}</li>
              <li>
                <LocalizedLink to="/contact/" className="text-white underline hover:text-primary">
                  {t('shared.contactPage')}
                </LocalizedLink>{' '}
                on winprofx.com
              </li>
              <li>{t(`pages.${PAGE_KEY}.content.supportChannels.clientPortal`)}</li>
            </ul>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.supportTicketProcess`)}>
            <ol className="list-decimal pl-5 flex flex-col gap-2 text-para">
              {ticketSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.informationRequiredFromClients`)}>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-para">
              {clientInfo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.warningAgainstUnofficialChannels`)}>
            <p>
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.unofficialWarning`}
                ns="trust"
                values={i18nVars}
                components={{
                  verifyLink: (
                    <LocalizedLink to="/verify-winprofx/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.escalationProcess`)}>
            <h3 className="text-base font-semibold text-white mb-2">
              {t(`pages.${PAGE_KEY}.content.escalationWithdrawalTitle`)}
            </h3>
            <p className="mb-4">
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.escalationWithdrawal`}
                ns="trust"
                components={{
                  withdrawalLink: (
                    <LocalizedLink to="/withdrawal-transparency/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>

            <h3 className="text-base font-semibold text-white mb-2">
              {t(`pages.${PAGE_KEY}.content.escalationKycTitle`)}
            </h3>
            <p className="mb-4">{t(`pages.${PAGE_KEY}.content.escalationKyc`)}</p>

            <h3 className="text-base font-semibold text-white mb-2">
              {t(`pages.${PAGE_KEY}.content.escalationDepositTitle`)}
            </h3>
            <p className="mb-4">
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.escalationDeposit`}
                ns="trust"
                components={{
                  depositWithdrawLink: (
                    <LocalizedLink to="/deposit-withdraw/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>

            <h3 className="text-base font-semibold text-white mb-2">
              {t(`pages.${PAGE_KEY}.content.escalationIbTitle`)}
            </h3>
            <p>
              {t(`pages.${PAGE_KEY}.content.escalationIb`)}{' '}
              <a
                href="https://partner.winprofx.com/"
                className="text-white underline hover:text-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://partner.winprofx.com/
              </a>
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.securityReminder`)}>
            <p>
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.securityReminder`}
                ns="trust"
                values={i18nVars}
                components={{
                  clientFundLink: (
                    <LocalizedLink to="/client-fund-security/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.complaints`)}>
            <p>
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.complaints`}
                ns="trust"
                components={{
                  complaintsLink: (
                    <LocalizedLink
                      to="/complaints-and-dispute-resolution/"
                      className="text-white underline hover:text-primary"
                    />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.riskWarning`)}>
            <p>{tCompany('riskWarningShort')}</p>
          </IdentitySection>

          <TrustPageFooter canonicalPath="/support-and-escalation" />
          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
