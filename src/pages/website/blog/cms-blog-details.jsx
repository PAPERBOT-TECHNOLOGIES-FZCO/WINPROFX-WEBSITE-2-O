import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { Container } from '@/components/grid'
import SeoHead from '@/components/seo-head'
import { buildCmsStructuredData, serializeStructuredData } from '@/lib/cms-structured-data'
import { buildCanonicalUrl } from '@/lib/schema-org'
import Button from '@/components/button'
import DemoCta from '@/components/demo-cta'
import shape from '@/assets/img/blog/shape.png'

const CMS_URL = import.meta.env.VITE_CMS_URL || 'https://cms.winprofx.com'
const CMS_TOKEN = import.meta.env.VITE_CMS_TOKEN || ''

// ─── Rich-text node renderer ──────────────────────────────────────────────────
function RenderChildren({ nodes }) {
  if (!Array.isArray(nodes)) return null
  return nodes.map((node, i) => <RenderNode key={i} node={node} />)
}

function RenderNode({ node }) {
  if (!node) return null

  if (node.type === 'text') {
    let el = <>{node.text}</>
    if (node.bold)          el = <strong className="text-white font-semibold">{el}</strong>
    if (node.italic)        el = <em>{el}</em>
    if (node.underline)     el = <u>{el}</u>
    if (node.strikethrough) el = <s>{el}</s>
    if (node.code)          el = <code className="bg-white/10 px-1 rounded text-xs font-mono">{el}</code>
    return el
  }

  if (node.type === 'link') {
    return (
      <a
        href={node.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
      >
        <RenderChildren nodes={node.children} />
      </a>
    )
  }

  if (node.type === 'paragraph') {
    return (
      <p className="text-para leading-relaxed">
        <RenderChildren nodes={node.children} />
      </p>
    )
  }

  if (node.type === 'heading') {
    const level = node.level || 2
    const headingClass = {
      1: 'text-3xl md:text-4xl font-bold text-white leading-tight',
      2: 'text-2xl md:text-3xl font-semibold text-white leading-tight',
      3: 'text-xl md:text-2xl font-semibold text-white leading-snug',
      4: 'text-lg md:text-xl font-semibold text-white',
      5: 'text-base md:text-lg font-semibold text-white',
      6: 'text-base font-semibold text-white',
    }[level] || 'text-xl font-semibold text-white'
    const Tag = `h${level}`
    return (
      <Tag className={headingClass}>
        <RenderChildren nodes={node.children} />
      </Tag>
    )
  }

  if (node.type === 'list') {
    const isOrdered = node.format === 'ordered'
    const Tag = isOrdered ? 'ol' : 'ul'
    return (
      <Tag className={`${isOrdered ? 'list-decimal' : 'list-disc'} list-inside text-para space-y-1 pl-2`}>
        <RenderChildren nodes={node.children} />
      </Tag>
    )
  }

  if (node.type === 'list-item') {
    return (
      <li className="leading-relaxed">
        <RenderChildren nodes={node.children} />
      </li>
    )
  }

  if (node.type === 'quote') {
    return (
      <blockquote className="border-l-4 border-primary pl-4 italic text-para">
        <RenderChildren nodes={node.children} />
      </blockquote>
    )
  }

  if (node.type === 'code') {
    return (
      <pre className="bg-white/6 rounded-xl p-4 overflow-x-auto text-sm font-mono text-white/80">
        <RenderChildren nodes={node.children} />
      </pre>
    )
  }

  if (node.type === 'image') {
    const src = node.image?.url
      ? (node.image.url.startsWith('http') ? node.image.url : `${CMS_URL}${node.image.url}`)
      : null
    if (!src) return null
    return (
      <figure className="my-2">
        <img src={src} alt={node.image?.alternativeText || ''} className="w-full h-auto rounded-xl" />
        {node.image?.caption && (
          <figcaption className="text-center text-xs text-white/40 mt-2">{node.image.caption}</figcaption>
        )}
      </figure>
    )
  }

  // Fallback: render children if any
  if (node.children) return <RenderChildren nodes={node.children} />
  return null
}

function RichText({ nodes }) {
  if (!Array.isArray(nodes)) return null
  return (
    <div className="flex flex-col gap-y-4">
      {nodes.map((node, i) => <RenderNode key={i} node={node} />)}
    </div>
  )
}

// ─── API helper ───────────────────────────────────────────────────────────────
async function fetchArticleBySlug(slug) {
  const headers = CMS_TOKEN ? { Authorization: `Bearer ${CMS_TOKEN}` } : {}
  const url = `${CMS_URL}/api/articles?filters[site][key][$eq]=winprofx&status=published&filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
  const res = await fetch(url, { headers })
  if (!res.ok) throw new Error(`CMS request failed: ${res.status}`)
  const json = await res.json()
  return json.data?.[0] ?? null
}

/** Locale codes that may prefix a path segment (e.g. /es/winprofx-best-forex-broker-2026). */
const LOCALE_PREFIXES = new Set(['en', 'hi', 'id', 'vi', 'bn', 'ms', 'zh', 'ja', 'es', 'pt'])

// Derive slug from current pathname (strip leading slash and optional locale prefix)
function useArticleSlug() {
  const params = useParams()
  const location = useLocation()
  // /blog/:id  → params.id
  if (params.id) return params.id
  // /:slug wildcard route → params.slug
  if (params.slug) return params.slug
  // /es/winprofx-best-forex-broker-2026 or bare /winprofx-best-forex-broker-2026
  // Strip leading slash, then strip a locale prefix segment if present
  const stripped = location.pathname.replace(/^\//, '').replace(/\/$/, '')
  const segments = stripped.split('/')
  if (segments.length >= 2 && LOCALE_PREFIXES.has(segments[0])) {
    return segments.slice(1).join('/')
  }
  return stripped
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function CmsBlogDetails() {
  const slug = useArticleSlug()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]   = useState(null)

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    setError(null)
    fetchArticleBySlug(slug)
      .then((data) => {
        setArticle(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('[CmsBlogDetails]', err)
        setError(err.message)
        setLoading(false)
      })
  }, [slug])

  const coverUrl = article?.coverImage?.url
    ? (article.coverImage.url.startsWith('http')
        ? article.coverImage.url
        : `${CMS_URL}${article.coverImage.url}`)
    : null

  const seo = article?.seo ?? {}
  const title       = seo.metaTitle || article?.title || 'WINPROFX Blog'
  const description = seo.metaDescription || article?.excerpt || ''
  const canonical = `/${slug}`
  const canonicalUrl = seo.canonicalUrl || buildCanonicalUrl(canonical)
  const datePublished = article?.seo?.structuredData?.datePublished || article?.publishedAt?.slice(0, 10) || ''
  const category = article?.category || 'Forex'
  const faqs = Array.isArray(article?.faqs)
    ? article.faqs.filter((faq) => (
        typeof faq?.question === 'string' && faq.question.trim() &&
        Array.isArray(faq.answer) && faq.answer.length > 0
      ))
    : []

  const structuredData = !loading && !error
    ? buildCmsStructuredData(article, { canonicalUrl, imageUrl: coverUrl })
    : []

  // Always render SeoHead so the canonical link is present even in error/not-found states.
  // This is also required for the prerender script to confirm the page is ready.
  return (
    <>
      <SeoHead
        title={title}
        description={description}
        canonicalPath={canonical}
        canonicalUrl={canonicalUrl}
      />
      {structuredData.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeStructuredData(structuredData) }}
        />
      )}

      <div className="padding-top-245 -mt-4 md:mt-0 common-padding">
        <img
          src={shape}
          className="absolute top-0 right-0 max-w-full -z-10 pointer-events-none blur-[140px]"
          alt=""
        />

        <Container>
          {loading && (
            <div className="flex items-center justify-center min-h-80">
              <div className="w-10 h-10 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            </div>
          )}

          {error && (
            <div className="text-center py-20" data-prerender-ready="true">
              <h1 className="sr-only">Article unavailable</h1>
              <p className="text-white/50 text-sm">Unable to load article. Please try again later.</p>
            </div>
          )}

          {!loading && !error && !article && (
            <div className="text-center py-20" data-prerender-ready="true">
              <h1 className="sr-only">Article not found</h1>
              <p className="text-white/50 text-sm">Article not found.</p>
            </div>
          )}

          {!loading && article && (
            <>
              {/* Page header */}
              <div className="max-w-260 mx-auto mb-8 md:mb-12 lg:mb-16 text-center" data-prerender-ready="true">
                <span className="inline-block text-xs md:text-sm font-medium text-primary uppercase tracking-widest mb-3 md:mb-4">
                  {category} {datePublished && `· ${datePublished}`}
                </span>
                <h1 className="h2 mb-4 md:mb-5 lg:mb-6">{article.title}</h1>
                {article.excerpt && (
                  <p className="text-para text-sm md:text-base lg:text-lg leading-relaxed max-w-200 mx-auto">
                    {article.excerpt}
                  </p>
                )}
              </div>

              {/* Main card */}
              <div className="rounded-3xl md:rounded-4xl lg:rounded-[40px] bg-white/4 border border-solid border-white/16 p-4 md:p-5 lg:p-6 flex flex-col gap-y-8 md:gap-y-10 lg:gap-y-13">

                {/* Banner */}
                {coverUrl && (
                  <div className="bg-white/4 rounded-2xl md:rounded-3xl lg:rounded-[30px] overflow-hidden z-1">
                    <img
                      src={coverUrl}
                      className="w-full h-auto block"
                      alt={article.coverImage?.alternativeText || article.title}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col gap-y-10 md:gap-y-12 lg:gap-y-16 p-2 pt-0">
                  <RichText nodes={article.content} />

                  {faqs.length > 0 && (
                    <section aria-labelledby="article-faq-heading" className="flex flex-col gap-y-5">
                      <h2 id="article-faq-heading" className="text-2xl md:text-3xl font-semibold text-white">
                        Frequently asked questions
                      </h2>
                      <div className="flex flex-col gap-y-3">
                        {faqs.map((faq, index) => (
                          <details key={faq.id ?? index} className="rounded-2xl border border-white/16 bg-white/4 p-4 md:p-6">
                            <summary className="cursor-pointer text-lg font-semibold text-white focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4">
                              {faq.question}
                            </summary>
                            <div className="mt-4">
                              <RichText nodes={faq.answer} />
                            </div>
                          </details>
                        ))}
                      </div>
                    </section>
                  )}

                  <DemoCta />
                  <div className="flex justify-center">
                    <Button />
                  </div>
                </div>
              </div>
            </>
          )}
        </Container>
      </div>
    </>
  )
}
