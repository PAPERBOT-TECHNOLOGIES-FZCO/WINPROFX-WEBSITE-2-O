/**
 * Domain-to-default-language mapping.
 *
 * Priority when selecting the initial language:
 *   1. Saved user preference in localStorage ('i18nextLng') — handled by i18next-browser-languagedetector
 *   2. URL path locale prefix (e.g. /es/forex) — handled by i18next-browser-languagedetector
 *   3. Domain default from DOMAIN_DEFAULT_LOCALES (this module)
 *   4. Application default ('en')
 *
 * Add a domain key here to change what language new visitors see on that domain.
 * The value must match a code in LOCALE_CODES (locale-config.js).
 */
export const DOMAIN_DEFAULT_LOCALES = {
  'winprofx.lat': 'es',
  'www.winprofx.lat': 'es',
}

/**
 * Return the domain-specific default locale for the given hostname, or null if
 * the hostname has no special mapping and should fall through to the application
 * default ('en').
 *
 * Safe to call in SSR / build / test environments where window may not exist —
 * always pass the hostname explicitly in those cases.
 *
 * @param {string} [hostname] - Defaults to window.location.hostname when available.
 * @returns {string | null}
 */
export function getDefaultLocaleForHostname(hostname) {
  const host =
    hostname !== undefined
      ? hostname
      : typeof window !== 'undefined'
        ? window.location.hostname
        : null

  if (!host) return null

  return DOMAIN_DEFAULT_LOCALES[host.toLowerCase()] ?? null
}

/**
 * Whether the current hostname is a .lat domain that should default to Spanish.
 * Convenience helper used in the language-switcher and SEO head.
 *
 * @param {string} [hostname]
 * @returns {boolean}
 */
export function isLatinAmericaDomain(hostname) {
  return getDefaultLocaleForHostname(hostname) !== null
}

/**
 * Domain-to-client-portal mapping.
 * When the site is served from a .lat domain, login/register links point to
 * my.winprofx.lat instead of the default my.winprofx.com portal.
 */
const DOMAIN_PORTAL_HOSTS = {
  'winprofx.lat': 'my.winprofx.lat',
  'www.winprofx.lat': 'my.winprofx.lat',
}

const DEFAULT_PORTAL_HOST = 'my.winprofx.com'

/**
 * Domain-specific register URL overrides.
 * When set, getPortalRegisterUrl() returns this exact URL instead of
 * building one from the portal base host.
 */
const DOMAIN_REGISTER_OVERRIDES = {
  'winprofx.lat': 'https://lat.winprofxpartner.com',
  'www.winprofx.lat': 'https://lat.winprofxpartner.com',
}

/**
 * Returns the correct client-portal base URL for the current (or given) hostname.
 *
 * @param {string} [hostname] - Defaults to window.location.hostname when available.
 * @returns {string} e.g. "https://my.winprofx.lat"
 */
export function getPortalBaseUrl(hostname) {
  const host =
    hostname !== undefined
      ? hostname
      : typeof window !== 'undefined'
        ? window.location.hostname
        : null

  const portalHost = (host && DOMAIN_PORTAL_HOSTS[host.toLowerCase()]) || DEFAULT_PORTAL_HOST
  return `https://${portalHost}`
}

/**
 * Returns the full login URL for the current domain.
 * @param {string} [hostname]
 * @returns {string}
 */
export function getPortalLoginUrl(hostname) {
  return `${getPortalBaseUrl(hostname)}/login`
}

/**
 * Returns the full register URL for the current domain.
 * On winprofx.lat this points to the partner registration portal.
 * @param {string} [hostname]
 * @returns {string}
 */
export function getPortalRegisterUrl(hostname) {
  const host =
    hostname !== undefined
      ? hostname
      : typeof window !== 'undefined'
        ? window.location.hostname
        : null

  const override = host && DOMAIN_REGISTER_OVERRIDES[host.toLowerCase()]
  if (override) return override

  return `${getPortalBaseUrl(hostname)}/register`
}
