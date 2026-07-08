import React from 'react'
import { useTranslation } from 'react-i18next'
import LearnArticleLayout from '@/components/learn/learn-article-layout'
import { getLearnArticle, getLearnArticleContent, resolveLearnArticleKey } from '@/lib/learn-articles'

const SLUG = 'what-is-leverage-in-forex'

export default function LearnWhatIsLeverageInForex() {
  const { t } = useTranslation('learn')
  const articleKey = resolveLearnArticleKey(SLUG)
  const article = getLearnArticle(t, SLUG)
  const content = getLearnArticleContent(t, articleKey)
  return <LearnArticleLayout article={article} content={content} />
}
