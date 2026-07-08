import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import SeoHead from '@/components/seo-head'
import Breadcrumb from '@/components/breadcrumb'
import LocalizedLink from '@/components/localized-link'
import IdentitySection from '@/components/company-identity/identity-section'
import TrustMetaFooter from '@/components/trust/trust-meta-footer'
import {
  LEARN_LAST_UPDATED,
  getLearnArticles,
} from '@/lib/learn-articles'

/**
 * @param {{ article: { slug: string, path: string, title: string, description: string, h1: string, breadcrumb: string }, content: { sections: { title: string, body: string }[], links?: { path: string, label: string }[] }, faqItems?: { question: string, answer: string }[] }} props
 */
export default function LearnArticleLayout({ article, content, faqItems }) {
  const { t } = useTranslation(['learn', 'common'])
  const allArticles = getLearnArticles((key, opts) => t(key, { ns: 'learn', ...opts }))

  return (
    <div className="padding-top-245">
      <SeoHead
        title={article.title}
        description={article.description}
        canonicalPath={article.path.replace(/\/$/, '')}
        pageName={article.h1}
        dateModified={LEARN_LAST_UPDATED}
        faqItems={faqItems}
        article={{
          headline: article.h1,
          description: article.description,
          datePublished: LEARN_LAST_UPDATED,
          dateModified: LEARN_LAST_UPDATED,
          author: t('meta.author', { ns: 'learn' }),
        }}
      />
      <TopShape />
      <PolicyTitle
        as="h1"
        meta={t('labels.lastUpdated', { ns: 'common', date: LEARN_LAST_UPDATED })}
        title={article.h1}
      />
      <Container>
        <Card>
          <Breadcrumb
            items={[
              { label: t('labels.home', { ns: 'common' }), path: '/' },
              { label: t('index.h1', { ns: 'learn' }), path: '/learn/' },
              { label: article.breadcrumb },
            ]}
          />

          <p className="mb-6 text-sm text-white/60">
            {t('labels.authorReviewedBy', {
              ns: 'common',
              author: t('meta.author', { ns: 'learn' }),
              reviewer: t('meta.reviewer', { ns: 'learn' }),
            })}
          </p>

          <p className="mb-6 text-white/80 leading-relaxed italic text-sm border-l-2 border-primary/50 pl-4">
            {t('disclaimer.learnEducational', { ns: 'common' })}
          </p>

          {content.sections.map((section) => (
            <IdentitySection key={section.title} title={section.title}>
              <p>{section.body}</p>
            </IdentitySection>
          ))}

          {content.links?.length > 0 && (
            <IdentitySection title={t('labels.relatedPages', { ns: 'common' })}>
              <ul className="space-y-2">
                {content.links.map((link) => (
                  <li key={link.path}>
                    <LocalizedLink to={link.path} className="text-primary underline">{link.label}</LocalizedLink>
                  </li>
                ))}
              </ul>
            </IdentitySection>
          )}

          <IdentitySection title={t('labels.riskWarning', { ns: 'common' })}>
            <p>{t('risk.short', { ns: 'common' })}</p>
            <LocalizedLink to="/risk-warning/" className="text-primary underline mt-2 inline-block">
              {t('buttons.readFullRiskWarning', { ns: 'common' })}
            </LocalizedLink>
          </IdentitySection>

          <TrustMetaFooter showRiskWarning={false} />

          <IdentitySection title={t('labels.moreArticles', { ns: 'common' })}>
            <ul className="grid gap-2 sm:grid-cols-2">
              {allArticles
                .filter((a) => a.slug !== article.slug)
                .slice(0, 6)
                .map((a) => (
                  <li key={a.slug}>
                    <LocalizedLink to={a.path} className="text-primary underline text-sm">{a.h1}</LocalizedLink>
                  </li>
                ))}
            </ul>
            <LocalizedLink to="/learn/" className="text-primary underline mt-4 inline-block text-sm">
              {t('buttons.viewAllArticles', { ns: 'common' })}
            </LocalizedLink>
          </IdentitySection>
        </Card>
      </Container>
    </div>
  )
}
