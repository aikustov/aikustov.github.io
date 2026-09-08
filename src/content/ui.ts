/** Section labels. Kept apart from the CV content: this is interface, not facts. */

import type { Locale } from '../config';

export interface UI {
  timeline: string;
  skills: string;
  about: string;
  education: string;
  languages: string;
  availability: string;
  contacts: string;
  /** The full legal name in the footer. Kept as interface rather than as CV
   *  content: it is a signature under the page, not a fact about the career. */
  legal: string;
  switchTo: string;
  skip: string;
  portraitAlt: string;
  metaTitle: string;
  metaDescription: string;
}

export const ui: Record<Locale, UI> = {
  ru: {
    timeline: 'Путь',
    skills: 'Навыки',
    about: 'Куда иду',
    education: 'Образование',
    languages: 'Языки',
    availability: 'Формат работы',
    contacts: 'Контакты',
    /* With the patronymic, and in visible text rather than in JSON-LD alone:
       HR and security screening search exactly this string when they have the
       CV in hand. The quietest register on the page — a signature, not a
       heading. The Latin page carries the same name in alternateName. */
    legal: 'Кустов Алексей Игоревич',
    switchTo: 'English',
    skip: 'К содержанию',
    portraitAlt: 'Алексей Кустов',
    metaTitle: 'Алексей Кустов — Technical Product Manager',
    metaDescription:
      'Алексей Кустов, Technical Product Manager в SberDevices. 15 лет в разработке ' +
      'и продукте: ML-инфраструктура, платформы данных, продукты 0→1.',
  },
  en: {
    timeline: 'Path',
    skills: 'Skills',
    about: 'Where I am going',
    education: 'Education',
    languages: 'Languages',
    availability: 'Availability',
    contacts: 'Contact',
    legal: 'Aleksey Kustov',
    switchTo: 'Русский',
    skip: 'Skip to content',
    portraitAlt: 'Aleksey Kustov',
    metaTitle: 'Aleksey Kustov — Technical Product Manager',
    metaDescription:
      'Aleksey Kustov, Technical Product Manager at SberDevices. 15 years across ' +
      'engineering and product: ML infrastructure, data platforms, 0→1 products.',
  },
};
