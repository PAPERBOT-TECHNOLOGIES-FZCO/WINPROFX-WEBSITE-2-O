import { describe, expect, it } from 'vitest'
import { blocksText, buildCmsStructuredData, serializeStructuredData } from './cms-structured-data'
const answer = [{ type: 'paragraph', children: [{ type: 'text', text: 'Read ' }, { type: 'link', children: [{ type: 'text', text: 'more' }] }] }]
const article = { title: 'Example', slug: 'example', publishedAt: '2026-09-29T00:00:00Z', faqs: [{ question: 'How?', answer }] }
describe('CMS structured data', () => {
  it('generates article and FAQ schema from CMS content', () => {
    const schemas = buildCmsStructuredData(article, { canonicalUrl: 'https://winprofx.com/example', imageUrl: 'https://cms.winprofx.com/image.png' })
    expect(schemas.map(s => s['@type'])).toEqual(['BlogPosting', 'FAQPage'])
    expect(schemas[0].datePublished).toBe(article.publishedAt)
    expect(schemas[0].image).toBe('https://cms.winprofx.com/image.png')
    expect(schemas[1].mainEntity[0].acceptedAnswer.text).toBe('Read more')
  })
  it('keeps legacy manual graphs without duplicate schemas', () => {
    const manual = { '@graph': [{ '@type': ['Article', 'BlogPosting'] }, { '@type': 'FAQPage' }] }
    expect(buildCmsStructuredData({ ...article, seo: { structuredData: manual } })).toEqual([manual])
  })
  it('omits FAQ schema for empty answers and handles old articles', () => {
    expect(buildCmsStructuredData({ ...article, faqs: [{ question: 'Empty?', answer: [] }] })).toHaveLength(1)
    expect(buildCmsStructuredData({ title: 'Old', slug: 'old' })).toHaveLength(1)
    expect(buildCmsStructuredData(null)).toEqual([])
  })
  it('extracts paragraphs and escapes script-closing content', () => {
    expect(blocksText([...answer, ...answer])).toBe('Read more\nRead more')
    const value = { text: '</script><script>alert(1)</script>' }
    expect(serializeStructuredData(value)).not.toContain('<')
    expect(JSON.parse(serializeStructuredData(value))).toEqual(value)
  })
})
