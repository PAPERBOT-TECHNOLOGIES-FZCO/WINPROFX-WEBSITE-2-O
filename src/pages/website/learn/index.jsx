import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/grid'
import TopShape from '@/components/top-shape'
import PolicyTitle from '@/components/policy/policy-title'
import Card from '@/components/policy/card'
import SeoHead from '@/components/seo-head'
import Breadcrumb from '@/components/breadcrumb'
import LocalizedLink from '@/components/localized-link'
import { LEARN_LAST_UPDATED, getLearnArticles } from '@/lib/learn-articles'
import { useSeo } from '@/hooks/use-seo'

export default function LearnIndex() {
  const { t: tCommon } = useTranslation('common')
  const { t } = useTranslation('learn')
  const seo = useSeo('learnIndex')
  const articles = getLearnArticles(t)

  return (
    <div className="padding-top-245">
      <SeoHead
        {...seo}
        canonicalPath="/learn"
        pageName={t('index.h1')}
        dateModified={LEARN_LAST_UPDATED}
      />
      <TopShape />
      <PolicyTitle
        as="h1"
        meta={tCommon('labels.lastUpdated', { date: LEARN_LAST_UPDATED })}
        title={t('index.h1')}
      />
      <Container>
        <Card>
          <Breadcrumb items={[{ label: tCommon('labels.home'), path: '/' }, { label: t('index.h1') }]} />
          <p className="mb-8 text-white/80 leading-relaxed">
            {t('index.intro')}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <LocalizedLink
                key={article.slug}
                to={article.path}
                className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 hover:border-primary/40 transition-all"
              >
                <h2 className="mb-2 text-base font-semibold text-white group-hover:text-primary">{article.h1}</h2>
                <p className="text-sm text-white/60 flex-1">{article.description.split('.')[0]}.</p>
                <span className="mt-3 text-xs text-primary/80">{t('index.readArticle')}</span>
              </LocalizedLink>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/60">
            {t('index.trustCenterLink')}{' '}
            <LocalizedLink to="/trust-center/" className="text-primary underline">{t('index.trustCenter')}</LocalizedLink>.
          </p>
        </Card>
      </Container>
    </div>
  )
}
