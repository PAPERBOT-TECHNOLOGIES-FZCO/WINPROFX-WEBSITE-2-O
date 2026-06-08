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
import {
  DUBAI_BUSINESS_NAME,
  DUBAI_LICENSE_NUMBER,
  INCORPORATION_PDF_PATH,
  SUPPORT_EMAIL,
} from '@/lib/company-registration'

const PAGE_KEY = 'legalDocuments'

const legalDocumentConfig = [
  { key: 'incorporation', pdf: true },
  { key: 'dubaiLicense', path: '/dubai-professional-license/', htmlOnly: true },
  { key: 'companyRegistration', path: '/company-registration/' },
  { key: 'legalEntity', path: '/legal-entity-information/' },
  { key: 'regulatory', path: '/regulatory-information/' },
  { key: 'uaeOffice', path: '/uae-representative-office/' },
  { key: 'withdrawal', path: '/withdrawal-transparency/' },
  { key: 'complaints', path: '/complaints-and-dispute-resolution/' },
  { key: 'clientFund', path: '/client-fund-security/' },
  { key: 'riskWarning', path: '/risk-warning/' },
  { key: 'terms', path: '/terms/' },
  { key: 'privacy', path: '/policy/' },
  { key: 'aml', path: '/aml-policy/' },
  { key: 'depositWithdraw', path: '/deposit-withdraw/' },
]

export default function LegalDocuments() {
  const { t } = useTranslation('trust')
  const { t: tCompany } = useTranslation('company')
  const seo = useSeo('legalDocuments')

  const docVars = {
    dubaiBusinessName: DUBAI_BUSINESS_NAME,
    dubaiLicenseNumber: DUBAI_LICENSE_NUMBER,
    supportEmail: SUPPORT_EMAIL,
  }

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/legal-documents"
        pageName={t(`pages.${PAGE_KEY}.h1`)}
        dateModified={TRUST_LAST_REVIEWED_ISO}
      />
      <TopShape />
      <PolicyTitle as="h1" meta={t(`pages.${PAGE_KEY}.meta`)} title={t(`pages.${PAGE_KEY}.h1`)} />
      <Container>
        <Card>
          <TrustPageBreadcrumb pageLabel={t(`pages.${PAGE_KEY}.h1`)} />
          <IdentitySection>
            <p>{t(`pages.${PAGE_KEY}.content.intro`)}</p>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.availableDocuments`)}>
            <ul className="flex flex-col gap-4">
              {legalDocumentConfig.map((doc) => {
                const name = t(`pages.${PAGE_KEY}.content.docs.${doc.key}.name`)
                const description = t(`pages.${PAGE_KEY}.content.docs.${doc.key}.description`, docVars)
                return (
                  <li key={doc.key}>
                    {doc.pdf ? (
                      <>
                        <span className="text-white font-medium text-lg">{name}</span>
                        <p className="mt-1">{description}</p>
                        <p className="mt-2">
                          <a
                            href={INCORPORATION_PDF_PATH}
                            className="text-white underline hover:text-primary font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {tCompany('incorporationPdfTitle')}
                          </a>
                        </p>
                      </>
                    ) : (
                      <>
                        <LocalizedLink
                          to={doc.path}
                          className="text-white underline hover:text-primary font-medium text-lg"
                        >
                          {name}
                        </LocalizedLink>
                        <p className="mt-1">{description}</p>
                        {doc.htmlOnly && (
                          <p className="mt-1 text-sm text-para italic">{t('shared.htmlOnlyNote')}</p>
                        )}
                      </>
                    )}
                  </li>
                )
              })}
            </ul>
          </IdentitySection>

          <IdentitySection title={t(`pages.${PAGE_KEY}.sections.questions`)}>
            <p>
              <Trans
                i18nKey={`pages.${PAGE_KEY}.content.questions`}
                ns="trust"
                values={docVars}
                components={{
                  contactLink: (
                    <LocalizedLink to="/contact/" className="text-white underline hover:text-primary" />
                  ),
                }}
              />
            </p>
          </IdentitySection>

          <TrustPageFooter canonicalPath="/legal-documents" />
          <IdentityNav />
        </Card>
      </Container>
    </div>
  )
}
