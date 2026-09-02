import type { APIRoute } from 'astro';
import { SITE_URL } from '../config';
import { cv, identity } from '../content/cv';

/**
 * llms.txt — a short machine-readable summary of the page for language models.
 * Built from the same content as the site, so the two cannot drift apart.
 *
 * The structure follows llmstxt.org: an H1 title, a blockquote summary, free-form
 * paragraphs, then H2 sections. The spec expects those sections to be lists of
 * links, and Lighthouse checks that literally: a file without a single markdown
 * link fails the audit with "does not appear to contain any links". Hence the
 * link sections come first and the narrative follows them.
 */
export const GET: APIRoute = () => {
  const ru = cv.ru;
  const current = ru.jobs[0];

  const profiles: [string, string, string][] = [
    ['GitHub', identity.profiles.github, 'репозитории и профиль'],
    ['LinkedIn', identity.profiles.linkedin, 'профессиональный профиль'],
    ['Habr', identity.profiles.habr, 'публикации'],
    [
      `Telegram ${identity.telegram.handle}`,
      identity.telegram.url,
      'основной способ связи',
    ],
  ];

  const lines = [
    `# ${ru.name} (${identity.canonicalLatin})`,
    '',
    `> ${ru.role}. ${ru.lead}`,
    '',
    ru.sub,
    '',
    `Другие написания имени: ${identity.alternateNames.join(', ')}.`,
    '',
    '## Страницы',
    '',
    `- [Резюме, русская версия](${SITE_URL}/): путь, результаты по компаниям, навыки, образование, контакты`,
    `- [CV, English version](${SITE_URL}/en/): то же самое, написанное по-английски`,
    '',
    '## Профили',
    '',
    ...profiles
      .filter(([, url]) => url)
      .map(([name, url, note]) => `- [${name}](${url}): ${note}`),
    '',
    '## Главное цифрами',
    '',
    ...ru.highlights.map((h) => `- ${h.value} — ${h.label}`),
    '',
    '## Сейчас',
    '',
    `${current.company}, ${current.role}, ${current.period}.`,
    current.summary,
    '',
    '## Путь и результаты',
    '',
    ...ru.jobs.flatMap((j) => [
      `### ${j.period} — ${j.company}, ${j.role}`,
      j.summary,
      ...j.metrics.map((m) => `- ${m.value} — ${m.label}`),
      '',
    ]),
    '## Навыки',
    '',
    ...ru.stack.map((g) => `- ${g.label}: ${g.items.join(', ')}.`),
    '',
    '## Куда иду',
    '',
    ...ru.about.flatMap((p) => [p, '']),
    '## Образование',
    '',
    `${ru.education.org}, ${ru.education.faculty}, ${ru.education.year}.`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
