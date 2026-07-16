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
