/**
 * The single source of the site's content. Updating the CV means editing this
 * file, never the markup.
 *
 * Page structure: role → name → lead → three headline results → positioning →
 * timeline from newest to oldest, two results per position → skills → about →
 * contacts.
 *
 * Why the numbers appear twice. The three at the top are the trailer: measured
 * on a phone, the first number inside the timeline used to sit 2.6 screens
 * down, and the reader who scans for thirty seconds never reached it. The
 * timeline keeps its own pair per position, with the full context — there the
 * numbers prove the story rather than open it.
 */

import type { Locale } from '../config';

/** A headline result number: «≈9%», «0 → 1», «10 лет». */
export interface Metric {
  /** The number or formula itself. */
  value: string;
  /** What it means, in one short line. */
  label: string;
}

/** A group in the skills block. Groups rather than one flat list: the three
 *  headings are themselves a statement — product, ML, engineering. */
export interface StackGroup {
  label: string;
  items: string[];
}

export interface Job {
  company: string;
  /** Organisation name for Schema.org, used when `company` holds a display
   *  string with a separator in it. */
  orgName?: string;
  role: string;
  /** Human-readable period: «2025 — сейчас». */
  period: string;
  /** ISO dates for the Schema.org markup. */
  from: string;
  to?: string;
  /** Two or three sentences: the remit, and what was done hands-on. */
  summary: string;
  /** Exactly two results. More looks busy, fewer looks incomplete. */
  metrics: [Metric, Metric];
  /** The product years of the career are highlighted, the engineering ones
   *  are not. The turn shows through colour and needs no words. */
  accent?: boolean;
}

export interface CV {
  name: string;
  role: string;
  lead: string;
  /** Exactly three: the strongest results, in three different currencies —
   *  hardware money, product adoption, automated time. Three fits one line on
   *  a wide screen and still fits the first screen of a phone. */
  highlights: [Metric, Metric, Metric];
  /** The paragraph after the highlights: positioning spelled out in three
   *  moves — the engineering foundation, a startup background where
   *  uncertainty is the working environment, and the move into ML/R&D. */
  sub: string;
  /** Two or three lines before the timeline: without them the jump from the
   *  lead to the dates reads as a break. */
  intro: string;
  jobs: Job[];
  /** Rendered on the page, and the source for Schema.org knowsAbout. Both at
   *  once on purpose: whatever is claimed to a machine has to be visible to a
   *  human on the same page. */
  stack: StackGroup[];
  /** The block after the skills: the direction, and as the last paragraph the
   *  candid weak spot. Paragraphs, not a single line. */
  about: string[];
  education: { org: string; faculty: string; year: string };
  /** The native language of a version is left out: on the Russian page
   *  «русский — родной» carries no information. */
  languages: string[];
  /** English page only. A reader outside Russia has one unspoken question
   *  about a candidate with a Russian work history — «can we even hire him?»
   *  — and silence gets answered with the worst assumption. One line closes
   *  it without putting a city on the page. */
  availability?: string;
}

export const identity = {
  canonicalLatin: 'Aleksey Kustov',
  alternateNames: [
    'Алексей Кустов',
    'Кустов Алексей',
    /* The full name with a patronymic: how HR, security screening and anyone
       holding the hh.ru CV searches for a person. The registry aggregators —
       rusprofile, checko — hold that query for namesakes, so the point is not
       to outrank them but to be the answer for «full name + product / Sber». */
    'Кустов Алексей Игоревич',
    'Алексей Игоревич Кустов',
    'Alexey Kustov',
    'Aleksei Kustov',
    'Alexei Kustov',
  ],
  /** Profiles for sameAs and for the links in the top bar. Empty ones are not
   *  rendered: a link to nowhere hurts rather than helps. */
  profiles: {
    github: 'https://github.com/aikustov',
    linkedin: 'https://www.linkedin.com/in/aikustov/',
    habr: 'https://habr.com/ru/users/aikustov/',
  },
  /** The primary contact. There is no mailbox on the domain and setting one up
   *  for a single address was not worth it: an unattended inbox on the page is
   *  worse than no inbox at all. */
  telegram: { handle: '@aikustov', url: 'https://t.me/aikustov' },
  /** The birth date is not published on the site — age works as a filter
   *  during screening. Kept here for reference only. */
  birthDate: '1989-06-26',
} as const;

export const cv: Record<Locale, CV> = {
  ru: {
    name: 'Алексей Кустов',
    role: 'Technical Product Manager · ML / AI · R&D',

    lead:
      'Мне интересно там, где ещё ничего нет — ни продукта, ни команды, ни ясности. ' +
      'Инженерный опыт подсказывает, что здесь возможно. Продуктовый — что из этого ' +
      'действительно стоит делать.',

    highlights: [
      {
        value: '+9%',
        label: 'утилизации GPU — без единой закупки железа',
      },
      {
        value: '10 → 50%',
        label: 'R&D-команд на платформе экспериментов за квартал',
      },
      {
        value: 'дни → минута',
        label: 'доставка данных потребителю в Т-Банке',
      },
    ],

    sub:
      'Я делаю продукты, которыми пользуются инженеры: платформы для ' +
      'ML-экспериментов, инструменты исследовательских команд, работу с данными. ' +
      'Десять лет я писал код сам — поэтому с инженерами говорю на их языке, ' +
      'а с бизнесом на языке сроков и денег. Продуктом занимаюсь пять лет: ' +
      'начинал в стартапе, где неопределённость просто часть работы, а не повод ' +
      'остановиться, — и последние три года делаю внутренние продукты ' +
      'в Т-Банке и Сбере, где к той же неопределённости добавляется масштаб.',

    intro:
      'Это один путь, а не смена профессий: от кода к команде, от команды ' +
      'к продукту. Каждая ступень добавляла ответственности, инженерная основа ' +
      'оставалась — она и сейчас рабочий инструмент, а не строчка в биографии.',

    jobs: [
      {
        company: 'Сбер · SberDevices',
        orgName: 'SberDevices',
        role: 'Technical Lead · внутренние ML/R&D-платформы',
        period: '2025 — сейчас',
        from: '2025-02-01',
        summary:
          'Развиваю внутренние продукты для ML- и R&D-команд. Главный из них — ' +
          'конвейер экспериментов: исследователи запускают, отслеживают ' +
          'и валидируют в нём ML-эксперименты, а бизнес впервые видит все ' +
          'исследования и потребление GPU в одном контуре. Принял продукт после ' +
          'полутора лет стагнации, когда он шёл на закрытие: за месяц закрыл ' +
          'продуктовый и технический долг, вернул заказчиков и удержал ' +
          'за продуктом выделенные ставки. Дальше приводил на платформу ' +
          'автономные R&D-команды — демо, разбор реальных болей, поэтапный ' +
          'онбординг, публичный roadmap под их запросы. Веду продукт внутри ' +
          'команды из тринадцати человек и без прямого подчинения: там, где ' +
          'сильные ML-команды не считают указание сверху аргументом, работает ' +
          'только доказанная польза инструмента. Вторая задача — эффективность ' +
          'железа: спроектировал и провёл пилот динамического перераспределения ' +
          'мощностей между продакшн-инференсом и обучением. Отдельно собрал ' +
          'мультиагентную систему управления релизами на GigaChat — продуктовая ' +
          'концепция, архитектура вместе с архитектором и рабочий прототип.',
        accent: true,
        metrics: [
          {
            value: '10 → 50%',
            label:
              'покрытие R&D-команд конвейером за квартал — без административного ' +
              'ресурса, через демо, разбор болей и публичный roadmap',
          },
          {
            value: '+9%',
            label:
              'утилизации GPU: в часы низкой нагрузки серверы уходят под обучение — ' +
              'как если бы каждый одиннадцатый появился без закупки. Один такой ' +
              'сервер на восьми H100 стоит на рынке $300–500 тыс.',
          },
        ],
      },
      {
        company: 'Т-Банк',
        orgName: 'Т-Банк',
        role: 'Technical Product Manager · триггерная платформа',
        period: '2023 — 2024',
        from: '2023-10-01',
        to: '2024-08-31',
        summary:
          'Триггерная платформа: внутренний B2B-продукт, дающий бизнес-линиям банка ' +
          'событийные данные как сервис, а не как разовую выгрузку. Принял его ' +
          'на стадии POC, когда команды ещё не было: собрал шестерых и вёл их ' +
          'по задачам, без прямого подчинения. Главное, что сделал, — убрал ' +
          'человека из цепочки поставки: раньше аналитик собирал требования, ' +
          'партнёр настраивал у себя и присылал файлы, команда разбирала их ' +
          'руками. Связал платформу с внутренними продуктами банка и внедрил ' +
          'ML-модели расчёта триггеров, согласовав переход к инференсу ' +
          'в реальном времени.',
        accent: true,
        metrics: [
          { value: '1 квартал', label: 'от POC до работающего MVP' },
          {
            value: 'дни → минута',
            label:
              'доставка триггера потребителю. Все, кто раньше получал их руками, ' +
              'перешли на платформу — 100% операций без ручного участия',
          },
        ],
      },
      {
        company: 'Unikoom',
        orgName: 'Unikoom',
        role: 'Product Manager',
        period: '2021 — 2023',
        from: '2021-01-01',
        to: '2023-06-30',
        summary:
          'AI-стартап, тревел-платформа. Пришёл лидом мобильной разработки и вырос ' +
          'в продакта приложения. Собрал мобильную команду с рынка и за квартал ' +
          'вывел MVP в продакшн — с этого момента компания проверяла гипотезы ' +
          'неделями, а не кварталами. Вместе с data science довёл до продакшна ' +
          'ML-ядро продукта — собственную модель подбора маршрутов на датасете, ' +
          'который мы собирали сами. Вёл дискавери и приоритизацию: CustDev, ' +
          'A/B-тесты, RICE. Совмещал продуктовую роль с инженерной: архитектура ' +
          'на Flutter, веб-версия на React, CI и среды. Подписку мы запустили ' +
          'и успели протестировать, но до внятной статистики не дошли: ' +
          'пользователи приходили разово, устойчивого ядра не сложилось. ' +
          'Product-market fit продукт так и не нашёл.',
        accent: true,
        metrics: [
          {
            value: '0 → прод',
            label: 'за квартал собрал команду из пяти инженеров и вывел MVP',
          },
          {
            value: 'ML-ядро',
            label:
              'собственная модель подбора маршрутов — от датасета до продакшна, ' +
              'вместе с data science',
          },
        ],
      },
      {
        company: 'Vedidev',
        orgName: 'Vedidev',
        role: 'Team Lead, web и mobile',
        period: '2020',
        from: '2020-02-01',
        to: '2020-11-30',
        summary:
          'Осознанный переход из инженерии в продукт. Вёл MVP мобильного приложения ' +
          'лояльности для торговой сети целиком — от бизнес-требований, CJM ' +
          'и roadmap до кода на React Native. Координировал фронтенд-команду, ' +
          'проводил технические интервью и онбординг.',
        metrics: [
          {
            value: 'MVP',
            label: 'провёл целиком — от бизнес-требований и CJM до кода',
          },
          {
            value: 'переход',
            label:
              'из инженерии в продукт: первая роль, где отвечал не только ' +
              'за свой код',
          },
        ],
      },
      {
        company: 'Фриланс',
        orgName: 'Freelance',
        role: 'Fullstack-разработчик',
        period: '2010 — 2020',
        from: '2010-05-01',
        to: '2020-02-29',
        summary:
          'Десять лет заказной разработки на JavaScript, C#/.NET и PHP для прямых ' +
          'заказчиков — отсюда привычка начинать с бизнес-задачи, а не с технологии. ' +
          'Ключевой проект — онлайн-платформа обучения: бизнес-логика вместе ' +
          'с Product Owner, архитектура, фронтенд и бэкенд, вывод в продакшн ' +
          'и поддержка.',
        metrics: [
          { value: '10 лет', label: 'руками в коде' },
          { value: '0 → 1', label: 'платформа обучения целиком, от логики до прода' },
        ],
      },
    ],

    stack: [
      {
        label: 'Продукт',
        items: [
          'Technical Product Management',
          'AI/ML Product Management',
          'Product discovery',
          'Product strategy',
          'Roadmap',
          'CustDev',
          'A/B-тесты',
          'CJM',
          'RICE',
          'Unit-экономика',
        ],
      },
      {
        label: 'ML и данные',
        items: [
          'MLOps',
          'Инфраструктура ML-экспериментов',
          'Утилизация GPU',
          'Инференс в реальном времени',
          'LLM',
          'Мультиагентные системы',
          'Событийные данные',
          'Python',
          'SQL',
        ],
      },
      {
        label: 'Инженерия и процесс',
        items: [
          'JavaScript / TypeScript',
          'React',
          'React Native',
          'Flutter',
          'C# / .NET',
          'CI/CD',
          'Agile',
          'Scrum',
          'Kanban',
          'Jira',
          'Confluence',
          'Figma',
        ],
      },
    ],

    about: [
      'Целюсь в компании, где продукт упирается в инфраструктуру, данные ' +
        'и исследовательские команды — там, где нужно разбираться в предметной ' +
        'области, а не только вести бэклог. Лучшая для меня среда — высокая ' +
        'неопределённость: продукт ещё предстоит придумать, а решения приходится ' +
        'принимать раньше, чем появятся все данные. В стартапах это называется ' +
        'вторником.',
      'Я пришёл в корпорацию с фриланса, где десять лет отвечал только за результат, ' +
        'и довольно долго считал, что результат говорит сам за себя. Он не говорит. ' +
        'В большой организации его нужно доносить, и это отдельная работа, ' +
        'которую я теперь закладываю заранее.',
    ],

    education: {
      org: 'Санкт-Петербургский политехнический университет Петра Великого',
      faculty: 'ИМОП, информационные технологии в дизайне',
      year: '2011',
    },
    languages: ['Английский — B2'],
  },

  en: {
    name: 'Aleksey Kustov',
    role: 'Technical Product Manager · ML / AI · R&D',

    lead:
      "I'm drawn to places where nothing exists yet — no product, no team, " +
      'no clarity. The engineering half of me works out what is possible here. ' +
      'The product half works out what is worth doing.',

    highlights: [
      {
        value: '+9%',
        label: 'GPU utilisation — with no hardware bought',
      },
      {
        value: '10 → 50%',
        label: 'of R&D teams on the experiment platform in a quarter',
      },
      {
        value: 'days → a minute',
        label: 'data delivery to the consumer at T-Bank',
      },
    ],

    sub:
      'I build products that engineers use: platforms for ML experiments, tooling ' +
      'for research teams, work with data. I wrote code myself for ten years, ' +
      'so I speak to engineers in their language and to the business in deadlines ' +
      'and money. I have been doing product for five years: I started in a startup, ' +
      'where uncertainty is simply part of the job rather than a reason to stop, ' +
      'and for the last three years I have been building internal products at ' +
      'T-Bank and Sber, where scale is added to the same uncertainty.',

    intro:
      'One path rather than a change of profession: from code to a team, from ' +
      'a team to a product. Each step added responsibility; the engineering ' +
      'foundation stayed — still a working tool, not a line in a biography.',

    jobs: [
      {
        company: 'Sber · SberDevices',
        orgName: 'SberDevices',
        role: 'Technical Lead · internal ML/R&D platforms',
        period: '2025 — present',
        from: '2025-02-01',
        summary:
          'Sber is the largest bank in Russia; SberDevices is its consumer-AI and ' +
          'devices arm. I build and grow the internal products its ML and R&D teams ' +
          'run on. The main one is the experiment pipeline: researchers launch, ' +
          'track and validate ML experiments in it, and the business sees every ' +
          'experiment and every unit of GPU spend in one place for the first time. ' +
          'I took the product over after a year and a half of stagnation, when it ' +
          'was heading for shutdown: in a month I cleared the product and technical ' +
          'debt, brought the stakeholders back and kept the headcount allocated to ' +
          'it. Then came adoption — demos, working through real pain points, ' +
          'staged onboarding, a public roadmap driven by what teams asked for. ' +
          'I run the product inside a team of thirteen and with no one reporting ' +
          'to me: where strong ML teams do not treat an instruction from above as ' +
          'an argument, only demonstrated usefulness works. The second job is ' +
          'hardware efficiency: I designed and ran a pilot that shifts capacity ' +
          'between production inference and training. Separately I built a ' +
          'multi-agent system for managing releases on GigaChat, Sber\'s own LLM — ' +
          'the product concept, the architecture together with an architect, and ' +
          'a working prototype.',
        accent: true,
        metrics: [
          {
            value: '10 → 50%',
            label:
              'of R&D teams on the pipeline within a quarter — with no ' +
              'administrative leverage, through demos, real pain points and ' +
              'a public roadmap',
          },
          {
            value: '+9%',
            label:
              'GPU utilisation: at quiet hours servers move to training — as if ' +
              'every eleventh one appeared without being bought. One such server, ' +
              'eight H100s, costs $300–500K on the market',
          },
        ],
      },
      {
        company: 'T-Bank',
        orgName: 'T-Bank',
        role: 'Technical Product Manager · trigger platform',
        period: '2023 — 2024',
        from: '2023-10-01',
        to: '2024-08-31',
        summary:
          'T-Bank is one of the largest digital banks in Russia, built without ' +
          "branches. The trigger platform is an internal B2B product giving the " +
          "bank's business lines event data as a service rather than as a one-off " +
          'export. I took it over as a proof of concept when there was no team ' +
          'yet: I hired six people and led them by the work rather than by ' +
          'reporting lines. The main thing I did was take the human out of the ' +
          'delivery chain: an analyst used to collect requirements, a partner ' +
          'configured things on their side and sent files, and the team unpicked ' +
          "them by hand. I wired the platform into the bank's other internal " +
          'products and shipped ML models for computing triggers, getting the ' +
          'move to real-time inference agreed.',
        accent: true,
        metrics: [
          { value: '1 quarter', label: 'from proof of concept to a working MVP' },
          {
            value: 'days → a minute',
            label:
              'trigger delivery to the consumer. Everyone who used to receive them ' +
              'by hand moved onto the platform — 100% of it without manual work',
          },
        ],
      },
      {
        company: 'Unikoom',
        orgName: 'Unikoom',
        role: 'Product Manager',
        period: '2021 — 2023',
        from: '2021-01-01',
        to: '2023-06-30',
        summary:
          'An AI travel startup — three teams: data science, backend and mobile. ' +
          'I arrived as mobile engineering lead and grew into the app\'s product ' +
          'manager. I hired the mobile team from the market and shipped the MVP to ' +
          'production within a quarter — from that point the company tested ' +
          'hypotheses in weeks rather than quarters. Together with data science ' +
          "I took the product's ML core to production — our own route-matching " +
          'model, trained on a dataset we collected ourselves. Ran discovery and ' +
          'prioritisation: CustDev, A/B tests, RICE. Combined the product role ' +
          'with an engineering one: Flutter architecture, the React web version, ' +
          'CI and environments. We did launch and test a subscription, but never ' +
          'reached a readable picture: users came once and no stable core formed. ' +
          'The product never found product-market fit.',
        accent: true,
        metrics: [
          {
            value: '0 → prod',
            label: 'hired five engineers and shipped the MVP within a quarter',
          },
          {
            value: 'ML core',
            label:
              'our own route-matching model — from dataset to production, ' +
              'with data science',
          },
        ],
      },
      {
        company: 'Vedidev',
        orgName: 'Vedidev',
        role: 'Team Lead, web and mobile',
        period: '2020',
        from: '2020-02-01',
        to: '2020-11-30',
        summary:
          'A deliberate move from engineering into product. I owned the MVP of ' +
          'a loyalty app for a retail chain end to end — from business ' +
          'requirements, journey mapping and roadmap down to the React Native ' +
          'code. Coordinated the front-end team, ran technical interviews ' +
          'and onboarding.',
        metrics: [
          {
            value: 'MVP',
            label: 'owned end to end — from business requirements and CJM to code',
          },
          {
            value: 'the turn',
            label:
              'from engineering into product: the first role where I answered ' +
              'for more than my own code',
          },
        ],
      },
      {
        company: 'Freelance',
        orgName: 'Freelance',
        role: 'Fullstack developer',
        period: '2010 — 2020',
        from: '2010-05-01',
        to: '2020-02-29',
        summary:
          'Ten years of client work across JavaScript, C#/.NET and PHP, always with ' +
          'the client directly — which is where the habit of starting from the ' +
          'business problem rather than the technology comes from. The main project ' +
          'was an online learning platform: business logic with the product owner, ' +
          'architecture, front end and back end, shipping and support.',
        metrics: [
          { value: '10 years', label: 'with my hands in the code' },
          { value: '0 → 1', label: 'a learning platform end to end, logic to production' },
        ],
      },
    ],

    stack: [
      {
        label: 'Product',
        items: [
          'Technical Product Management',
          'AI/ML Product Management',
          'Product discovery',
          'Product strategy',
          'Roadmap',
          'Customer development',
          'A/B testing',
          'Customer journey mapping',
          'RICE',
          'Unit economics',
        ],
      },
      {
        label: 'ML and data',
        items: [
          'MLOps',
          'ML experiment infrastructure',
          'GPU utilisation',
          'Real-time inference',
          'LLM',
          'Multi-agent systems',
          'Event data',
          'Python',
          'SQL',
        ],
      },
      {
        label: 'Engineering and process',
        items: [
          'JavaScript / TypeScript',
          'React',
          'React Native',
          'Flutter',
          'C# / .NET',
          'CI/CD',
          'Agile',
          'Scrum',
          'Kanban',
          'Jira',
          'Confluence',
          'Figma',
        ],
      },
    ],

    about: [
      'I am aiming at companies where the product runs into infrastructure, data ' +
        'and research teams — where you have to understand the domain, not just run ' +
        'a backlog. My best environment is high uncertainty: the product is still ' +
        'to be invented, and decisions have to be made before all the data arrives. ' +
        'In startups that is called Tuesday.',
      'I came into a large company from ten years of freelancing, where the only ' +
        'thing I answered for was the result — and for a long time I assumed the ' +
        'result would speak for itself. It does not. Inside a large organisation ' +
        'it has to be carried to people, and that is separate work, which I now ' +
        'plan for in advance.',
    ],

    education: {
      org: 'Peter the Great St. Petersburg Polytechnic University',
      faculty: 'Information Technology in Design',
      year: '2011',
    },
    languages: ['Russian — native', 'English — B2'],
    availability:
      'Open to relocation and to fully remote work. Russian citizenship, ' +
      'so work authorisation would need arranging.',
  },
};
