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
    switchTo: 'Русский',
    skip: 'Skip to content',
    portraitAlt: 'Aleksey Kustov',
    metaTitle: 'Aleksey Kustov — Technical Product Manager',
    metaDescription:
      'Aleksey Kustov, Technical Product Manager at SberDevices. 15 years across ' +
      'engineering and product: ML infrastructure, data platforms, 0→1 products.',
  },
};
