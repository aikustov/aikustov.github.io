import type { APIRoute } from 'astro';
import { SITE_URL, INDEXABLE } from '../config';

/**
 * robots.txt is built from the INDEXABLE flag so it cannot drift apart from the
 * meta tag. While the site is not ready, everything is disallowed. Once the flag
 * is flipped, access opens to everyone, AI crawlers included: showing up in
 * their answers is a goal of the project.
 */
const AI_CRAWLERS = [
  'GPTBot',           // OpenAI, training
  'OAI-SearchBot',    // OpenAI, search inside ChatGPT
  'ChatGPT-User',     // link visits from ChatGPT
  'ClaudeBot',        // Anthropic
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',  // Gemini and Google training
  'Applebot-Extended',
  'CCBot',            // Common Crawl, the source behind many datasets
  'Bytespider',
  'cohere-ai',
  'YandexAdditional', // Yandex, generative answers
];

export const GET: APIRoute = () => {
  const body = INDEXABLE
    ? [
        '# Indexing is allowed for everyone, language-model crawlers included.',
        '',
        'User-agent: *',
        'Allow: /',
        '',
        ...AI_CRAWLERS.flatMap((ua) => [`User-agent: ${ua}`, 'Allow: /', '']),
        `Sitemap: ${SITE_URL}/sitemap-index.xml`,
        '',
      ].join('\n')
    : [
        '# This site is not ready for indexing yet.',
        '# Opened by the INDEXABLE switch in src/config.ts.',
        '',
        'User-agent: *',
        'Disallow: /',
        '',
      ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
