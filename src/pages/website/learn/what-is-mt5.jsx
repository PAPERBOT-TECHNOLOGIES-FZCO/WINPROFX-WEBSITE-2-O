import React from 'react'
import { useTranslation } from 'react-i18next'
import LearnArticleLayout from '@/components/learn/learn-article-layout'
import { getLearnArticle, getLearnArticleContent, resolveLearnArticleKey } from '@/lib/learn-articles'

const SLUG = 'what-is-mt5'

export default function LearnWhatIsMt5() {
  const { t } = useTranslation('learn')
  const articleKey = resolveLearnArticleKey(SLUG)
  const article = getLearnArticle(t, SLUG)
  const content = getLearnArticleContent(t, articleKey)
  return <LearnArticleLayout article={article} content={content} />
}
