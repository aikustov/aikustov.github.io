// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical domain. Needed for the sitemap, canonical links and hreflang.
const SITE = 'https://aikustov.com';

export default defineConfig({
  site: SITE,

  // The Russian version lives at the root, the English one at /en/.
  // prefixDefaultLocale: false means the Russian version carries no /ru/ prefix.
  // Language detection by IP is deliberately not used: Googlebot crawls from US
  // addresses, so an IP redirect would mean the Russian page never gets indexed.
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ru',
        locales: { ru: 'ru-RU', en: 'en-US' },
      },
    }),
  ],
});
