// All the content of the site lives here.
// Edit this file to update your portfolio, then git push: Vercel redeploys automatically.

export const profile = {
  name: 'Othmane Sabi',
  title: 'Full-Stack Software Engineer',
  tagline: 'Front to back by day, problem solver by night.', // green line under the name in the hero
  location: 'Ottawa, ON',
  headline:
    'I turn complex business processes into clean, maintainable web applications, from the data model to the interface.',
  focus: 'building a SaaS CRM', // used in "Right now: … at <current company>."
  intro:
    "I'm a problem solver who builds and ships business software end to end, from the database to the screen. Since 2019 I've grown from Laravel developer to full-stack engineer, and lately I've been bringing AI into real products. This site is the latest thing I've shipped.",
  email: 'sabi.othmane@gmail.com',
  github: 'https://github.com/otsabi',
  linkedin: 'https://www.linkedin.com/in/othmane-sabi',
  resume: '/resume.pdf', // the PDF in public/; replace that file to update it
  resumeFileName: 'Othmane_Sabi_Resume.pdf', // name visitors get when they download it
}

// Big KPI tiles in the "Who I am" section (from the resume)
export const impact: { value: string; label: string; note: string }[] = [
  { value: '2x', label: 'Deployment frequency', note: 'CI/CD delivery' },
  { value: '-40%', label: 'Lead time for changes', note: 'Reusable components, automation' },
  { value: '-35%', label: 'p95 API latency', note: 'SQL, Redis caching' },
  { value: '99.9%', label: 'Availability target', note: 'SaaS in production' },
]

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
      'Built a 5-module CRM that centralizes sales, stock, invoicing and payments, ending manual Excel tracking and securing financial data with role-based access.',
      'Delivered management dashboards and a field-team module that give the business real-time visibility on operations.',
      'Made the CRM multi-tenant (stancl/tenancy) so it can be sold as a SaaS to other companies.',
      'Set up CI/CD with GitHub Actions that runs tests and migrations before every release to Laravel Cloud, with Docker and Sentry monitoring.',
    ],
    stack: 'Laravel, REST API, MySQL, Filament, React, Redux, TypeScript, Docker, GitHub Actions',
  },
  {
    company: 'Disklosure',
    role: 'Software Engineer, SaaS Applications',
    period: '2024 to 2025',
    context: 'SaaS platform for ESG and HSE compliance. Team of 4 developers, a manager and a product owner.',
    points: [
      'Reduced p95 API latency by about 35% through SQL optimization, Redis caching and smaller payloads.',
      'Doubled deployment frequency with standardized Git workflows, automated tests (Vitest) and repeatable CI/CD pipelines.',
      'Cut lead time for changes by about 40% with reusable components and automated delivery, while holding a 99.9% availability target.',
      'Contributed to a conditional questionnaire engine showing 100 to 300 questions as a tree, so clients only see what applies to them.',
      'Wrote technical design docs, estimated features in sprint planning, and mentored a junior developer through code reviews.',
    ],
    stack: 'Laravel, Vue.js, Nuxt, React, Inertia.js, Redis, MongoDB, Vitest, Java, Spring Boot',
  },
  {
    company: 'Petrom',
    role: 'Tech Lead, Full-Stack Developer',
    period: '2023 to 2024',
    context: 'Fuel distribution company. Led a team of 4 developers for about a year.',
    points: [
      'Led the migration of a legacy PHP 5 CRM serving 100+ service stations to Laravel microservices, module by module, with a progressive rollout.',
      'Built SAP-to-CRM integrations (SOAP, queued jobs) that automate invoicing, data sync and reporting, with error handling and recovery.',
      'Added real-time updates over WebSocket (Laravel Echo, Pusher), so users see changes without reloading the page.',
      "Restored availability after a client's ERP flooded the API: traced the root cause and added per-client rate limiting.",
      'Built a prototype assistant that answers questions in French about sales and stations by turning them into SQL, using a self-hosted Ollama model.',
    ],
    stack: 'Laravel, Vue.js, MySQL, REST, SOAP, SAP, Python, Laravel Echo, Pusher',
  },
  {
    company: 'Smart Call Distribution',
    role: 'Software Engineer, CRM Automation & APIs',
    period: '2022 to 2023',
    context: 'Distribution company.', // TODO: confirm or improve this one-line description
    points: [
      'Automated 100% of a manual subscription-billing workflow, eliminating recurring billing errors. It is still in use today.',
      'Integrated vTiger CRM with Plecto through webhooks to give managers and sales teams real-time sales KPIs.',
    ],
    stack: 'Laravel, Vue.js, PHP, MySQL, vTiger, Plecto',
  },
  {
    company: 'Health Development',
    role: 'Full-Stack Developer',
    period: '2019 to 2020',
    context: 'Health and parapharmacy retail.',
    points: [
      'Built a para-pharmacy e-commerce site with 4,000+ products, card payments, refunds and order changes.',
      'Replaced manual Excel reporting for 100+ medical sales reps with a web app for daily report checks, dashboards and weekly summaries by area, city and rep.',
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
  privateNote?: string // shown instead of a link when the code can't be shared
}

export const projects: Project[] = [
  {
    name: 'This portfolio',
    status: 'Live',
    description: 'Built with Next.js. All the content comes from one data file, deployed on Vercel.',
    stack: 'Next.js, React, TypeScript',
    link: 'https://github.com/otsabi',
  },
  {
    name: 'MoSuite',
    status: 'In progress',
    description: 'A multi-company SaaS that helps small businesses manage their stock and daily operations.',
    stack: 'Laravel 12, React 19, TypeScript, Inertia.js, Tailwind CSS, MySQL',
    privateNote: 'Private client project, code not public',
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
  { group: 'Backend', items: 'PHP, Laravel, REST APIs, queues and jobs, Python, Java, Spring Boot, Node.js' },
  { group: 'Frontend', items: 'React, Redux, Vue.js, Nuxt, Pinia, Next.js, TypeScript, Tailwind CSS, Inertia.js, Vite, Livewire, Filament' },
  { group: 'Data', items: 'MySQL, PostgreSQL, MongoDB, Redis, indexing, stored procedures' },
  { group: 'DevOps', items: 'Linux (Ubuntu), Docker, GitHub Actions, Nginx, Apache, Laravel Cloud, Vercel, DigitalOcean, Sentry, AWS' },
  { group: 'Testing & tools', items: 'PHPUnit, Vitest, Playwright, Postman' },
  { group: 'Practices', items: 'TDD, clean architecture, code review, accessibility (WCAG AA), security and data privacy' },
]
