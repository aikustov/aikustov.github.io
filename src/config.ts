/**
 * Shared site settings.
 */

export const SITE_URL = 'https://aikustov.com';

/**
 * Indexing switch. Opened on 2 September 2026.
 *
 * One flag drives two things: the robots meta tag on every page and the body of
 * robots.txt. While it was false the site was closed to crawlers on purpose —
 * whatever a search engine sees first shapes how the page is represented in the
 * index, and a draft instead of a CV would have spoiled that representation.
 *
 * Set it back to false only to take the site out of the index deliberately.
 * Flipping it off and on again is not free: re-indexing takes weeks.
 */
export const INDEXABLE = true;

export const LOCALES = ['ru', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'ru';

/** Path to the page for a given locale. The Russian version lives at the root. */
export function localePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
}

/** hreflang attribute value for a locale. */
export const HREFLANG: Record<Locale, string> = {
  ru: 'ru-RU',
  en: 'en-US',
};

/**
 * Yandex.Metrica counter ID. While empty, the counter is not injected at all.
 */
export const YANDEX_METRIKA_ID = '112190592';

/**
 * Horizontal preview for messengers and social networks, in public/.
 * The dimensions are declared in the markup as 1200×630, so a replacement
 * has to keep exactly that size — an og:image whose meta tags disagree with
 * the file gets re-cropped by every client in its own way.
 *
 * While the value is empty the og:image tags are omitted altogether:
 * a broken preview is worse than no preview.
 */
export const OG_IMAGE = '/og.jpg';


/**
 * IndexNow key — an instant ping to Bing and Yandex about new pages.
 * Any string of 8 to 128 hexadecimal characters; generate one with
 * openssl rand -hex 16
 * Once set, the site serves the confirmation file at /<key>.txt itself.
 */
export const INDEXNOW_KEY = '53c2b90eeaff45f902f7efd5fd254e86';
