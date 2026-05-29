# Portal subdomain robots.txt

The client and partner portals are **separate deployments** from this marketing website repo:

- Client Portal: `https://my.winprofx.org/`
- Partner Portal: `https://partner.winprofx.org/`

A `robots.txt` on `winprofx.org` does **not** control those subdomains. Each portal project must serve its own `robots.txt` at the site root.

## Recommended content

Use the files in this folder:

- `client-portal-robots.txt` → deploy as `https://my.winprofx.org/robots.txt`
- `partner-portal-robots.txt` → deploy as `https://partner.winprofx.org/robots.txt`

Both should block all crawlers:

```txt
User-agent: *
Disallow: /
```

## Portal frontend meta tags

Also add to portal app HTML/layout:

```html
<meta name="robots" content="noindex, nofollow" />
```

## Verification

After deploying to each portal:

```bash
curl -I https://my.winprofx.org/robots.txt
curl -I https://partner.winprofx.org/robots.txt
```

Both should return HTTP 200 with `Disallow: /`.
