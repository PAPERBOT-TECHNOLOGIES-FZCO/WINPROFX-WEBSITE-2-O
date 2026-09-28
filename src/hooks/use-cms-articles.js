import { useState, useEffect } from 'react'

const CMS_URL = import.meta.env.VITE_CMS_URL || 'https://cms.winprofx.com'
const CMS_TOKEN = import.meta.env.VITE_CMS_TOKEN || ''

/**
 * Fetches all published articles from Strapi CMS and maps them
 * to the shape expected by blog/index.jsx:
 *   { url, title, des, date, img, category[] }
 */
export default function useCmsArticles() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(null)

  useEffect(() => {
    const headers = CMS_TOKEN ? { Authorization: `Bearer ${CMS_TOKEN}` } : {}
    fetch(`${CMS_URL}/api/articles?populate=coverImage,seo&sort=publishedAt:desc&pagination[limit]=50`, { headers })
      .then((r) => {
        if (!r.ok) throw new Error(`CMS ${r.status}`)
        return r.json()
      })
      .then(({ data }) => {
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
        setArticles(mapped)
        setLoading(false)
      })
      .catch((err) => {
        console.error('[useCmsArticles]', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { articles, loading, error }
}
