# WINPROFX SEO Deployment Checklist

## Pre-deployment

- [ ] Run `npm run build` successfully (sitemap generation + Vite build + prerender)
- [ ] Verify new routes return 200 locally (`npm run preview`)
- [ ] Confirm canonical tags point to `https://winprofx.org/`
- [ ] Confirm auth routes use `noindex, nofollow`

## Priority indexing URLs

Submit these in Google Search Console after deployment:

1. https://winprofx.org/
2. https://winprofx.org/trust-center/
3. https://winprofx.org/is-winprofx-legit/
4. https://winprofx.org/winprofx-review/
5. https://winprofx.org/winprofx-withdrawal-process/
6. https://winprofx.org/winprofx-license-verification/
7. https://winprofx.org/official-domains/
8. https://winprofx.org/verify-winprofx/
9. https://winprofx.org/regulatory-information/
10. https://winprofx.org/company-registration/

## Search Console and Bing

1. Submit `https://winprofx.org/sitemap.xml` in Google Search Console
2. Submit the same sitemap in Bing Webmaster Tools
3. Monitor indexing status weekly for the first month
4. Monitor brand query CTR (WINPROFX, WINPROFX broker, is WINPROFX legit, etc.)
5. Check if Google rewrites titles or descriptions

## Sitemap structure

- `/sitemap.xml` — index
- `/sitemap-pages.xml` — general pages
- `/sitemap-trust.xml` — trust and brand-intent pages
- `/sitemap-legal.xml` — legal and policy pages
- `/sitemap-markets.xml` — market and product pages
- `/sitemap-learn.xml` — education articles

Regenerate sitemaps: `node scripts/generate-sitemap.mjs`

## Pages awaiting verified business data

Do not publish invented figures. Update only after ops/compliance verification:

| Page | Data needed |
|------|-------------|
| Regulatory Information | Financial regulator name, license number, verify URL |
| Withdrawal Transparency | SLA timelines, processing statistics |
| Complaints | Acknowledgement/response timeframes |
| Company Statistics | Client count, countries, uptime, ticket volumes |
| Dubai Professional License | PDF publication approval |

## Monthly maintenance

- Update `TRUST_LAST_REVIEWED` in `src/lib/trust-pages.js` when trust content is reviewed
- Re-run sitemap generation after adding public routes
- Add new brand-intent pages for emerging search queries
- Review homepage and market copy for compliance

## Technical QA checklist

- [ ] Unique title and meta description on every public page
- [ ] One H1 per page
- [ ] FAQ schema only where FAQ content is visible
- [ ] No AggregateRating or fake Review schema
- [ ] Breadcrumb JSON-LD matches visible breadcrumbs on trust/learn pages
- [ ] Internal links: Trust Center, Official Domains, Risk Warning on brand pages
- [ ] Portal pages (`my.winprofx.org`, `partner.winprofx.org`) not in sitemap
