// All the content of the site lives here.
// Edit this file to update your portfolio, then git push: Vercel redeploys automatically.

export const profile = {
  name: 'Othmane Sabi',
  title: 'Full-Stack Software Engineer',
  tagline: 'Front to back by day, problem solver by night.', // green line under the name in the hero
  location: 'Ottawa, ON',
  headline:
    'PHP and Laravel at the core, React, Vue.js, Next.js and Nuxt on the front, Java and Spring Boot where they fit — I turn Excel workflows and legacy code into CRMs and SaaS platforms.',
  focus: 'building a SaaS CRM', // used in "Right now: … at <current company>."
  intro:
    "I'm a problem solver who builds and ships business software end to end, from the database to the screen. Since 2019 I've grown from Laravel developer to full-stack engineer and tech lead, and lately I've been bringing AI into real products. This site is the latest thing I've shipped.",
  email: 'sabi.othmane@gmail.com',
  github: 'https://github.com/otsabi',
  linkedin: 'https://www.linkedin.com/in/othmane-sabi',
  resume: '/resume.pdf', // put your PDF in the public/ folder with this name
}

export type Job = {
  company: string
  role: string
  period: string
  context: string
  points: string[]
  stack: string
}

export const experience: Job[] = [
  {
    company: 'Akawatt Energy Services',
    role: 'Full-Stack Developer',
    period: '2025 to now',
    context: 'Energy services startup in Casablanca.',
    points: [
      'Built a 5-module CRM that replaced manual Excel files for sales, stock, logistics, field teams, billing and payments.',
      'Made the CRM multi-tenant (stancl/tenancy) so it can be sold as a SaaS to other companies.',
      'Set up CI/CD with GitHub Actions that runs the tests and migrations, then deploys to Laravel Cloud, with Sentry monitoring.',
    ],
    stack: 'Laravel, REST API, MySQL, Filament, React, Redux, Next.js, GitHub Actions',
  },
  {
    company: 'Disklosure',
    role: 'Software Engineer, SaaS Applications',
    period: '2024 to 2025',
    context: 'SaaS platform for ESG and HSE compliance. Team of 4 developers, a manager and a product owner.',
    points: [
      'Contributed to a conditional questionnaire engine showing 100 to 300 questions as a tree, so clients only see what applies to them and new questionnaires need no new code.',
      'Worked on compliance notifications that alert clients when their waste or CO2 data passes regulatory thresholds.',
      'Mentored a junior developer and helped unblock teammates.',
    ],
    stack: 'Laravel, Nuxt, Vue.js, Pinia, MongoDB, Storyblok, Java, Spring Boot',
  },
  {
    company: 'Petrom',
    role: 'Tech Lead, Full-Stack Developer',
    period: '2023 to 2024',
    context: 'Fuel distribution company. Led a team of 4 developers for about a year.',
    points: [
      'Led the migration of a legacy PHP 5 CRM to Laravel, module by module, with a progressive rollout to small groups of users first.',
      'Built a prototype assistant that answers questions in French about sales and stations by turning them into SQL, using a self-hosted Ollama model.',
      'Integrated the CRM with SAP and B2B client systems, and fixed a production outage with per-client throttling, caching and background queues.',
    ],
    stack: 'Laravel, Vue.js, MySQL, REST, SOAP, SAP, Python, Laravel Echo, Pusher',
  },
  {
    company: 'Smart Call Distribution',
    role: 'Full-Stack Developer', // TODO: confirm your exact title here
    period: '2022 to 2023',
    context: 'Distribution company.', // TODO: confirm or improve this one-line description
    points: [
      'Automated the billing process, which is still in use today.',
      'Connected the vTiger CRM to internal tools with webhooks.',
    ],
    stack: 'Laravel, PHP, MySQL, vTiger',
  },
  {
    company: 'Health Development',
    role: 'Full-Stack Developer',
    period: '2019 to 2020',
    context: 'Health and parapharmacy retail.',
    points: [
      'Contributed to an e-commerce site with more than 4,000 products and online payments.',
      'Built a reporting app for more than 100 medical sales reps, replacing a manual Excel process.',
    ],
    stack: 'Laravel, Vue.js, WordPress, WooCommerce, Docker',
  },
]

export type Project = {
  name: string
  status: string
  description: string
  stack: string
  link?: string
}

export const projects: Project[] = [
  {
    name: 'This portfolio',
    status: 'Live',
    description: 'Built while learning Next.js. All the content comes from one data file, deployed on Vercel.',
    stack: 'Next.js, React, TypeScript',
    link: 'https://github.com/otsabi',
  },
  {
    name: 'Small business SaaS',
    status: 'In progress',
    description: 'A SaaS to help small businesses manage their daily work.',
    stack: 'Laravel, React, MySQL',
  },
  {
    name: 'Seller assistant mobile app',
    status: 'In progress',
    description:
      'A React Native app for e-commerce sellers. A Laravel API handles accounts and calls the Claude API to generate product texts, SVG logos and bundle ideas.',
    stack: 'React Native, Laravel, Claude API',
  },
]

export const skills: { group: string; items: string }[] = [
  { group: 'Backend', items: 'PHP, Laravel, REST APIs, queues and jobs, Python, Java, Spring Boot, Node.js (learning)' },
  { group: 'Frontend', items: 'React, Redux, Vue.js, Nuxt, Pinia, Next.js, TypeScript, Tailwind CSS, Livewire, Filament' },
  { group: 'Data', items: 'MySQL, PostgreSQL, MongoDB, indexing, stored procedures' },
  { group: 'DevOps', items: 'Linux (Ubuntu), Docker, GitHub Actions, Nginx, Apache, Laravel Cloud, Vercel, Sentry, AWS (learning)' },
  { group: 'Practices', items: 'TDD, clean architecture, code review, accessibility (WCAG AA), security and data privacy' },
  { group: 'Languages', items: 'English and French (professional), Arabic, German (B2)' },
]
