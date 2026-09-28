/**
 * Fetch all published article slugs from Strapi CMS at build time.
 *
 * Called by:
 *   - scripts/generate-sitemap.mjs  → builds sitemap-blog.xml dynamically
 *   - scripts/prerender-routes.mjs  → marks blog paths as cmsPage: true
 *
 * Falls back to an empty array if the CMS is unreachable or returns an error
 * (e.g. missing VITE_CMS_TOKEN in CI) — build continues without blog routes
 * in the sitemap/prerender rather than failing entirely.
 */

const CMS_URL = process.env.VITE_CMS_URL || 'https://cms.winprofx.com'
const CMS_TOKEN = process.env.VITE_CMS_TOKEN || ''

/**
 * Returns an array of published article objects: { slug, priority?, changefreq? }
 * Priority and changefreq default to sensible values when not present in CMS.
 */
export async function fetchCmsArticleMeta() {
  try {
    const headers = CMS_TOKEN ? { Authorization: `Bearer ${CMS_TOKEN}` } : {}
    // Fetch slug + publishedAt only — no need for full content here
    const url =
      `${CMS_URL}/api/articles` +
      `?fields[0]=slug&fields[1]=publishedAt` +
      `&pagination[pageSize]=200` +
      `&sort=publishedAt:desc`

    const res = await fetch(url, {
      headers,
      signal: AbortSignal.timeout(12000),
    })

    if (!res.ok) {
      console.warn(
        `[cms-slugs] CMS returned HTTP ${res.status} — skipping dynamic blog routes`,
      )
      return []
    }

    const json = await res.json()
    const articles = json.data ?? []

    return articles
      .map((a) => ({
        slug: a.slug ?? a.attributes?.slug,
        publishedAt: a.publishedAt ?? a.attributes?.publishedAt,
      }))
      .filter((a) => Boolean(a.slug))
  } catch (err) {
    console.warn(
      `[cms-slugs] Failed to fetch CMS slugs: ${err.message} — skipping dynamic blog routes`,
    )
    return []
  }
}

/** Convenience: just the slug strings */
export async function fetchCmsSlugs() {
  const articles = await fetchCmsArticleMeta()
  return articles.map((a) => a.slug)
}
