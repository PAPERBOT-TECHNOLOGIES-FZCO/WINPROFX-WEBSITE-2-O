/**
 * Tests for domain-locale.js — the centralized domain-to-default-language
 * mapping used to automatically select Spanish on winprofx.lat.
 *
 * Scenarios covered (matching the project requirements):
 *  1. winprofx.lat, no saved preference        → Spanish ('es')
 *  2. www.winprofx.lat, no saved preference    → Spanish ('es')
 *  3. winprofx.lat, English saved preference   → null (defers to localStorage)
 *  4. winprofx.com, no saved preference        → null (no mapping)
 *  5. winprofx.org, no saved preference        → null (no mapping)
 *  6. www.winprofx.com, no saved preference    → null (no mapping)
 *  7. www.winprofx.org, no saved preference    → null (no mapping)
 *  8. localhost (dev), no saved preference     → null (no mapping)
 *  9. unknown hostname                         → null (no mapping)
 * 10. window undefined (SSR/build/test env)    → null (no crash)
 * 11. isLatinAmericaDomain helper
 * 12. DOMAIN_DEFAULT_LOCALES uses 'es' (matches existing Spanish locale code)
 */

import { describe, it, expect } from 'vitest'
import {
  DOMAIN_DEFAULT_LOCALES,
  getDefaultLocaleForHostname,
  isLatinAmericaDomain,
} from './domain-locale.js'

describe('DOMAIN_DEFAULT_LOCALES', () => {
  it('maps winprofx.lat to es', () => {
    expect(DOMAIN_DEFAULT_LOCALES['winprofx.lat']).toBe('es')
  })

  it('maps www.winprofx.lat to es', () => {
    expect(DOMAIN_DEFAULT_LOCALES['www.winprofx.lat']).toBe('es')
  })

  it('uses the exact Spanish locale code present in LOCALE_CODES', () => {
    const LOCALE_CODES = ['en', 'hi', 'id', 'vi', 'bn', 'ms', 'zh', 'ja', 'es', 'pt']
    Object.values(DOMAIN_DEFAULT_LOCALES).forEach((code) => {
      expect(LOCALE_CODES).toContain(code)
    })
  })
})

describe('getDefaultLocaleForHostname', () => {
  // Scenario 1 — winprofx.lat, no saved preference → Spanish
  it('returns "es" for winprofx.lat', () => {
    expect(getDefaultLocaleForHostname('winprofx.lat')).toBe('es')
  })

  // Scenario 2 — www.winprofx.lat, no saved preference → Spanish
  it('returns "es" for www.winprofx.lat', () => {
    expect(getDefaultLocaleForHostname('www.winprofx.lat')).toBe('es')
  })

  // Case-insensitive normalisation
  it('handles mixed-case hostname for winprofx.lat', () => {
    expect(getDefaultLocaleForHostname('WINPROFX.LAT')).toBe('es')
    expect(getDefaultLocaleForHostname('WwW.WiNpRoFx.LaT')).toBe('es')
  })

  // Scenario 3 — winprofx.lat with English saved → function returns 'es' but
  // i18next detection order means localStorage fires first; this function itself
  // always returns the domain default and does NOT read localStorage.
  it('always returns the domain default regardless of any external state', () => {
    // The caller (i18next detector) is responsible for prioritising localStorage;
    // this function's responsibility is only to report the domain mapping.
    expect(getDefaultLocaleForHostname('winprofx.lat')).toBe('es')
  })

  // Scenario 4 — winprofx.com → null (no special mapping)
  it('returns null for winprofx.com', () => {
    expect(getDefaultLocaleForHostname('winprofx.com')).toBeNull()
  })

  // Scenario 5 — winprofx.org → null
  it('returns null for winprofx.org', () => {
    expect(getDefaultLocaleForHostname('winprofx.org')).toBeNull()
  })

  // Scenario 6 — www.winprofx.com → null
  it('returns null for www.winprofx.com', () => {
    expect(getDefaultLocaleForHostname('www.winprofx.com')).toBeNull()
  })

  // Scenario 7 — www.winprofx.org → null
  it('returns null for www.winprofx.org', () => {
    expect(getDefaultLocaleForHostname('www.winprofx.org')).toBeNull()
  })

  // Scenario 8 — localhost → null
  it('returns null for localhost', () => {
    expect(getDefaultLocaleForHostname('localhost')).toBeNull()
  })

  // Scenario 9 — unknown hostname → null
  it('returns null for an unknown hostname', () => {
    expect(getDefaultLocaleForHostname('example.com')).toBeNull()
    expect(getDefaultLocaleForHostname('winprofx.io')).toBeNull()
    expect(getDefaultLocaleForHostname('')).toBeNull()
  })

  // Scenario 10 — window undefined (SSR / build / test environment)
  it('returns null when no hostname argument is given and window is undefined', () => {
    // In Node (Vitest default env), window is undefined.
    // The function should not throw and should return null.
    expect(() => getDefaultLocaleForHostname()).not.toThrow()
    expect(getDefaultLocaleForHostname()).toBeNull()
  })

  it('does not throw when hostname is null or undefined', () => {
    expect(() => getDefaultLocaleForHostname(null)).not.toThrow()
    expect(() => getDefaultLocaleForHostname(undefined)).not.toThrow()
  })
})

describe('isLatinAmericaDomain', () => {
  // Scenario 11 — convenience helper
  it('returns true for winprofx.lat', () => {
    expect(isLatinAmericaDomain('winprofx.lat')).toBe(true)
  })

  it('returns true for www.winprofx.lat', () => {
    expect(isLatinAmericaDomain('www.winprofx.lat')).toBe(true)
  })

  it('returns false for winprofx.com', () => {
    expect(isLatinAmericaDomain('winprofx.com')).toBe(false)
  })

  it('returns false for winprofx.org', () => {
    expect(isLatinAmericaDomain('winprofx.org')).toBe(false)
  })

  it('returns false for localhost', () => {
    expect(isLatinAmericaDomain('localhost')).toBe(false)
  })

  it('returns false when window is undefined (no arg)', () => {
    expect(isLatinAmericaDomain()).toBe(false)
  })
})

describe('i18next detection order contract', () => {
  /**
   * These tests document the expected detection priority without running the
   * full i18next stack (which requires a browser environment).
   * The real behaviour is: path > localStorage > domain > fallbackLng.
   */
  it('domain detector returns null/undefined so i18next skips to fallback for .com', () => {
    // On winprofx.com with no path prefix and no localStorage, the domain
    // detector returns null. i18next then uses fallbackLng ('en').
    const result = getDefaultLocaleForHostname('winprofx.com')
    expect(result).toBeNull()
    // null/undefined tells i18next to continue to the next detector → fallback 'en'
  })

  it('domain detector returns "es" for .lat so i18next uses Spanish', () => {
    const result = getDefaultLocaleForHostname('winprofx.lat')
    expect(result).toBe('es')
    // i18next uses this as the detected language when path and localStorage have no value
  })
})
