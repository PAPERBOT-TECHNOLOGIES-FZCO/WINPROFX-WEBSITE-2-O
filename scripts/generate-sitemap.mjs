import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SEO_ROUTES, SITEMAP_LASTMOD } from './seo-routes.mjs'
import { fetchCmsArticleMeta } from './cms-slugs.mjs'
// Localized sitemap segments: use getSitemapReadyLocales() from ./locale-seo-readiness.mjs
// when a locale passes QA. English segments below must remain unchanged until then.

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, '..', 'public')
const BASE = 'https://winprofx.org'

function buildUrlset(routes) {
  const urls = routes
    .map(
      (r) => `  <url>
    <loc>${BASE}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${SITEMAP_LASTMOD}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

function buildSitemapIndex(files) {
  const entries = files
    .map(
      (f) => `  <sitemap>
    <loc>${BASE}/${f}</loc>
    <lastmod>${SITEMAP_LASTMOD}</lastmod>
  </sitemap>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>\n`
}

const segments = [
  { file: 'sitemap-pages.xml', key: 'pages' },
  { file: 'sitemap-trust.xml', key: 'trust' },
  { file: 'sitemap-legal.xml', key: 'legal' },
  { file: 'sitemap-markets.xml', key: 'markets' },
  { file: 'sitemap-learn.xml', key: 'learn' },
]

for (const { file, key } of segments) {
  const out = path.join(publicDir, file)
  fs.writeFileSync(out, buildUrlset(SEO_ROUTES[key]))
  console.log('Wrote', file, `(${SEO_ROUTES[key].length} URLs)`)
}

// Dynamic blog sitemap — fetched from Strapi CMS at build time
const cmsArticles = await fetchCmsArticleMeta()
const blogRoutes = cmsArticles.map((a) => ({
  path: `/${a.slug}/`,
  priority: '0.8',
  changefreq: 'monthly',
}))
const blogSitemapFile = 'sitemap-blog.xml'
fs.writeFileSync(path.join(publicDir, blogSitemapFile), buildUrlset(blogRoutes))
console.log('Wrote', blogSitemapFile, `(${blogRoutes.length} URLs)`)

const indexFiles = [...segments.map((s) => s.file), blogSitemapFile]
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), buildSitemapIndex(indexFiles))
console.log('Wrote sitemap.xml index')
