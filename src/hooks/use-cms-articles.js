import { useState, useEffect } from 'react'

const CMS_URL = import.meta.env.VITE_CMS_URL || 'https://cms.winprofx.com'
const CMS_TOKEN = import.meta.env.VITE_CMS_TOKEN || ''

/**
 * Fetches published WinproFX articles from Strapi CMS and maps them
 * to the shape expected by blog/index.jsx:
 *   { url, title, des, date, img, category[] }
 */
export default function useCmsArticles({ page = 1, category = 'all', pageSize = 9 } = {}) {
  const requestKey = `${page}:${category}:${pageSize}`
  const [result, setResult] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const params = new URLSearchParams({
      'filters[site][key][$eq]': 'winprofx',
      status: 'published',
      'populate[0]': 'coverImage',
      'populate[1]': 'seo',
      'sort[0]': 'publishedAt:desc',
      'sort[1]': 'slug:asc',
      'pagination[page]': String(page),
      'pagination[pageSize]': String(pageSize),
    })
    if (category !== 'all') params.set('filters[category][$eqi]', category)
    const headers = CMS_TOKEN ? { Authorization: `Bearer ${CMS_TOKEN}` } : {}
    fetch(`${CMS_URL}/api/articles?${params}`, { headers, signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error(`CMS ${r.status}`)
        return r.json()
      })
      .then(({ data, meta }) => {
        const mapped = (data || []).map((a) => {
          const coverUrl = a.coverImage?.url
            ? (a.coverImage.url.startsWith('http') ? a.coverImage.url : `${CMS_URL}${a.coverImage.url}`)
            : null
          const published = a.publishedAt || a.createdAt || ''
          const date = published
            ? new Date(published).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, ' - ')
            : ''
          return {
            url: `/${a.slug}`,
            title: a.title || '',
            des: a.excerpt || a.seo?.metaDescription || '',
            date,
            img: coverUrl,
            category: a.category ? [a.category] : ['forex'],
          }
        })
        if (!controller.signal.aborted) setResult({ requestKey, articles: mapped, pagination: meta?.pagination, error: null })
      })
      .catch((err) => {
        if (controller.signal.aborted) return
        console.error('[useCmsArticles]', err)
        setResult({ requestKey, articles: [], error: err.message })
      })
    return () => controller.abort()
  }, [page, category, pageSize, requestKey])

  const current = result?.requestKey === requestKey ? result : null
  return {
    articles: current?.articles || [],
    loading: !current,
    error: current?.error || null,
    pagination: current?.pagination || { page, pageCount: 0, total: 0 },
  }
}
