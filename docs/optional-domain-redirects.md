# Optional Domain Redirects (winprofx.com / winprofx.ae → winprofx.com)

**Status:** Not active. Canonical tags on all pages currently point to `https://winprofx.com/` URLs.

**Primary domain:** `winprofx.com` — unchanged. Enabling these redirects does not change Netlify primary domain settings; it only sends visitors and crawlers from alias hosts to the same paths on `.org`.

**Do not enable** until explicitly approved. These rules only affect the marketing site domains listed below — they do **not** affect `my.winprofx.com` or `partner.winprofx.com` (separate Netlify sites / DNS).

Ready-to-copy examples (inactive):

- [`_redirects.domain-aliases.example`](./_redirects.domain-aliases.example) — `_redirects` format
- [`netlify-domain-redirects.example.toml`](./netlify-domain-redirects.example.toml) — `netlify.toml` format

---

## What happens if these redirects are activated

| Before (current) | After (if approved) |
|------------------|---------------------|
| `https://winprofx.com/forex` serves the SPA (200) | Browser/crawler gets **301** → `https://winprofx.com/forex` |
| `https://winprofx.ae/contact` serves the SPA (200) | **301** → `https://winprofx.com/contact` |
| `www.winprofx.com` / `www.winprofx.ae` same as apex aliases | **301** → matching path on `winprofx.com` |
| `https://winprofx.com/*` | **Unchanged** — no redirect loop (rules are host-scoped) |
| `https://my.winprofx.com/*` | **Unchanged** — different site; not in rule scope |
| `https://partner.winprofx.com/*` | **Unchanged** — different site; not in rule scope |

**SEO effect:** Stronger consolidation signal than canonical tags alone; search engines should index `.org` URLs and transfer alias signals via 301.

**User effect:** Bookmarks and links on `.com`/`.ae` still work but land on `.org` after one redirect.

**Requirements:** All four hosts (`winprofx.com`, `www.winprofx.com`, `winprofx.ae`, `www.winprofx.ae`) must be attached to this Netlify site (or DNS must point `www` to Netlify) or redirects will not run for missing hosts.

---

## Recommendation

301 redirects from alias domains to `winprofx.com` are the strongest signal for search engines and reduce duplicate crawl budget. Canonical tags alone work but crawlers may still fetch `.com` and `.ae` if those domains remain publicly accessible.

**Before enabling:** Confirm DNS for `www.winprofx.com` and `www.winprofx.ae` points to Netlify (see Netlify/DNS checklist below).

---

## How to enable (after approval)

1. Choose **Option A** (recommended) or **Option B** below — do not enable both unless you understand rule precedence.
2. Deploy to Netlify.
3. Test: `curl -I https://winprofx.com/` should show `301` and `Location: https://winprofx.com/`.
4. Confirm `https://winprofx.com/` still returns `200`.
5. Confirm portals still load: `https://my.winprofx.com/`, `https://partner.winprofx.com/`.

---

## Option A — `netlify.toml` (recommended)

Add or uncomment these blocks in [`netlify.toml`](../netlify.toml) **after** slug aliases (`/privacy-policy`, `/terms-and-conditions`) and **before** the SPA catch-all:

```toml
[[redirects]]
  from = "/*"
  to = "https://winprofx.com/:splat"
  status = 301
  force = true
  conditions = { Host = ["winprofx.com", "www.winprofx.com"] }

[[redirects]]
  from = "/*"
  to = "https://winprofx.com/:splat"
  status = 301
  force = true
  conditions = { Host = ["winprofx.ae", "www.winprofx.ae"] }
```

---

## Option B — Netlify `_redirects` file

Create or append to `public/_redirects` (copied to `dist/` on build). Full example: [`_redirects.domain-aliases.example`](./_redirects.domain-aliases.example).

```
# winprofx.com → winprofx.com
https://winprofx.com/* https://winprofx.com/:splat 301!
https://www.winprofx.com/* https://winprofx.com/:splat 301!

# winprofx.ae → winprofx.com
https://winprofx.ae/* https://winprofx.com/:splat 301!
https://www.winprofx.ae/* https://winprofx.com/:splat 301!
```

Note: Host-conditional redirects in `netlify.toml` (Option A) are preferred when the same deploy serves multiple domain aliases, because `_redirects` rules apply to all hosts unless scoped differently.

---

## Netlify / DNS checklist (manual)

Verify in Netlify **Domain management** and your DNS provider:

| Host | Expected |
|------|----------|
| `winprofx.com` | Primary domain (do not change) |
| `winprofx.com` | Domain alias on this site |
| `winprofx.ae` | Domain alias on this site |
| `www.winprofx.com` | CNAME/ALIAS to Netlify **or** redirect to apex — confirm if configured |
| `www.winprofx.ae` | CNAME/ALIAS to Netlify **or** redirect to apex — confirm if configured |
| `my.winprofx.com` | Separate site — **unaffected** |
| `partner.winprofx.com` | Separate site — **unaffected** |

If `www.winprofx.com` or `www.winprofx.ae` are not in Netlify domain settings, add them as aliases or set DNS `www` → apex redirect before enabling 301 rules.
