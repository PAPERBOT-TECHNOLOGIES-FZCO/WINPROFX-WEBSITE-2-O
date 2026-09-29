const SITE_URL = 'https://winprofx.com'

export function blocksText(nodes) {
  if (!Array.isArray(nodes)) return ''
  return nodes.map((node) => {
    if (typeof node?.text === 'string') return node.text
    const text = blocksText(node?.children)
    return ['paragraph', 'heading', 'list-item', 'quote'].includes(node?.type) ? `${text}\n` : text
  }).join('').trim()
}

function hasType(value, types) {
  if (Array.isArray(value)) return value.some((item) => hasType(item, types))
  if (!value || typeof value !== 'object') return false
  const ownTypes = Array.isArray(value['@type']) ? value['@type'] : [value['@type']]
  return ownTypes.some((type) => types.includes(type)) || hasType(value['@graph'], types)
}

export function buildCmsStructuredData(article, { canonicalUrl, imageUrl } = {}) {
  if (!article) return []
  const manual = article.seo?.structuredData
  const schemas = manual && typeof manual === 'object' ? [manual] : []
  const url = canonicalUrl || `${SITE_URL}/${article.slug}`
  if (!hasType(manual, ['Article', 'BlogPosting', 'NewsArticle'])) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: article.title,
      description: article.seo?.metaDescription || article.excerpt || undefined,
      url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      image: imageUrl || undefined,
      datePublished: article.publishedAt || undefined,
      dateModified: article.updatedAt || article.publishedAt || undefined,
      publisher: { '@type': 'Organization', name: 'WINPROFX', url: SITE_URL },
    })
  }
  const faqs = (Array.isArray(article.faqs) ? article.faqs : []).flatMap((faq) => {
    const question = typeof faq?.question === 'string' ? faq.question.trim() : ''
    const answer = blocksText(faq?.answer)
    return question && answer ? [{
      '@type': 'Question', name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    }] : []
  })
  if (faqs.length && !hasType(manual, ['FAQPage'])) {
    schemas.push({
      '@context': 'https://schema.org', '@type': 'FAQPage',
      '@id': `${url}#faq`, mainEntity: faqs,
    })
  }
  return schemas
}

export function serializeStructuredData(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}
