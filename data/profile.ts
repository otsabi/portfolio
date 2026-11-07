// All the content of the site lives here.
// Edit this file to update your portfolio, then git push: Vercel redeploys automatically.

export const profile = {
  name: 'Othmane Sabi',
  title: 'Full-Stack Developer',
  tagline: 'Front to back by day, problem solver by night.', // green line under the name in the hero
  location: 'Ottawa, ON',
  headline:
    'I turn complex business processes into clean, maintainable web applications, from the data model to the interface.',
  focus: 'building a SaaS CRM', // used in "Right now: … at <current company>."
  intro:
    "I'm a problem solver who builds and ships business software end to end, from the database to the screen. Since 2019 I've grown from Laravel developer to full-stack developer, and lately I've been bringing AI into real products. This site is the latest thing I've shipped.",
  email: 'sabi.othmane@gmail.com',
  website: 'https://www.othmanesabi.dev',
  github: 'https://github.com/otsabi',
  linkedin: 'https://www.linkedin.com/in/othmane-sabi',
  resume: '/resume.pdf', // the PDF in public/; replace that file to update it
  resumeFileName: 'Othmane_Sabi_Resume.pdf', // name visitors get when they download it
}

// Big KPI tiles in the "Who I am" section (from the resume)
export const impact: { value: string; label: string; note: string }[] = [
  { value: '2x', label: 'Deployment frequency', note: 'Disklosure' },
  { value: '-40%', label: 'Lead time for changes', note: 'Reusable components, automation' },
  { value: '-30%', label: 'Change failure rate', note: 'Disklosure' },
  { value: '-35%', label: 'p95 API latency', note: 'Petrom' },
  { value: '99.9%', label: 'Availability target', note: 'Petrom' },
  { value: '<2h', label: 'MTTR', note: 'Petrom' },
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
    role: 'Full-Stack Developer (Contract, Remote) - CRM & Business Operations',
    period: '2025 - Present',
    context: 'Small energy services company in Casablanca, Morocco, specializing in solar products. I lead its CRM end to end, working remotely from Ottawa with the business team.',
    points: [
      'Centralized sales, stock, invoicing and payments in a 5-module CRM, ending manual Excel tracking and securing financial data with role-based access.',
      'Delivered management dashboards and a field-team module giving a small company real-time visibility on operations (Laravel REST API, Filament admin app, React client app).',
      'Made the CRM multi-tenant with stancl/tenancy (shared database + tenant_id), so it can be sold as SaaS to other companies.',
      'Automated releases with GitHub Actions running tests and database migrations before each deploy to Laravel Cloud with Docker.',
    ],
    stack: 'Laravel, Filament, React, Next.js, Redux, MySQL, GitHub Actions, Docker, Laravel Cloud',
  },
  {
    company: 'Disklosure',
    role: 'Software Engineer - SaaS Applications',
    period: '2024 - 2025',
    context: 'ESG and HSE sustainability software publisher and consulting firm in Casablanca, Morocco.',
    points: [
      'Collaborated with a team of 4 developers, a manager and a product owner on an ESG/HSE SaaS platform, designing robust and secure REST APIs in Laravel and Java/Spring Boot with a Nuxt/TypeScript front end.',
      'Increased deployment frequency by approximately 2x and cut the change failure rate by approximately 30% through standardized Git workflows, automated testing and repeatable CI/CD pipelines (GitLab CI, Docker).',
      'Cut lead time for changes by approximately 40% through reusable components, pull request reviews and delivery automation.',
      'Contributed to a conditional questionnaire engine showing 100 to 300 questions as a tree, so clients only see what applies to them.',
      'Wrote technical specifications and estimated features in sprint planning.',
      'Mentored a junior developer through code reviews, from our Storybook component documentation to integration in the codebase.',
    ],
    stack: 'Laravel, Java/Spring Boot, Vue.js, Nuxt, TypeScript, React, Inertia.js, Redis, MongoDB, GitLab CI, Docker, Vitest',
  },
  {
    company: 'Petrom',
    role: 'Software Engineer - Enterprise Integrations & Platform',
    period: '2023 - 2024',
    context: "Fuel distribution company in Casablanca, Morocco. Within a team of 4 developers, I led the architecture decisions, split the work and reviewed the team's code, gathered requirements with the director, set up the servers from scratch, and supported the legacy CRM in production during its migration.",
    points: [
      'Designed and implemented, within a team of 4 developers, a Java/Spring Boot and Laravel microservices architecture replacing a legacy PHP CRM supporting 100+ service stations, migrated module by module with a gradual rollout.',
      'Developed SAP-to-CRM integrations (SOAP APIs, Laravel queued jobs) automating invoicing, data synchronization and reporting.',
      'Reduced p95 API latency by approximately 35% through indexing, query rewrites, shorter transactions and Redis caching.',
      'Added real-time updates over WebSocket (Laravel Echo, Pusher), so users see CRM changes without reloading.',
      "Restored availability after a client's ERP flooded the API: traced the root cause and added per-client rate limiting.",
      'Maintained a 99.9% availability target and resolved production incidents in under 2 hours (MTTR).',
      'Built an LLM-powered reporting prototype: chat assistant in the Laravel CRM, Python/LangChain microservice, self-hosted Ollama model, turning French questions into SQL in under 15 seconds; tested with real users.',
    ],
    stack: 'Laravel, Vue.js, MySQL, REST, SOAP, SAP, Python, Laravel Echo, Pusher, Java, Spring Boot, Redis',
  },
  {
    company: 'Smart Call Distribution (now TalkLab)',
    role: 'Software Engineer - CRM Automation & APIs',
    period: '2022 - 2023',
    context: 'Casablanca, Morocco call center (now TalkLab), working for Ipsys, a Belgian provider of business telecom and internet services.',
    points: [
      'Integrated vTiger CRM with Plecto through webhooks to provide real-time sales KPIs (Laravel, Vue.js).',
      'Automated 100% of a previously manual subscription-billing workflow, eliminating recurring billing errors.',
    ],
    stack: 'Laravel, Vue.js, PHP, MySQL, vTiger, Plecto',
  },
  {
    company: 'Health Innovation',
    role: 'Full-Stack Developer - E-commerce & Business Applications',
    period: '2019 - 2020',
    context: 'Moroccan developer and distributor of medical and nutraceutical products in Casablanca, serving pharmacies and wholesalers nationwide.',
    points: [
      'Eliminated manual Excel reporting for 100+ medical delegates with a web app automating daily report checks, dashboards and weekly synthesis.',
      'Built a para-pharmacy e-commerce site with 4,000+ products, card payments, refunds and order changes (Laravel, Vue.js, Docker).',
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
    link: 'https://github.com/otsabi/portfolio',
  },
  {
    name: 'MoSuite',
    status: 'In progress',
    description: 'A multi-company SaaS that helps small businesses manage their stock and daily operations.',
    stack: 'Laravel, React, TypeScript, Inertia.js, Tailwind CSS, MySQL',
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
  { group: 'Backend', items: 'PHP/Laravel, Java/Spring Boot, Python, REST APIs, microservices, Redis, Node.js' },
  { group: 'Frontend', items: 'TypeScript, Vue.js, React, Next.js, Redux, Nuxt, Livewire, Tailwind' },
  { group: 'Data', items: 'MySQL, PostgreSQL, MongoDB, indexing' },
  { group: 'Cloud & platform', items: 'AWS, Docker, GitHub Actions, GitLab CI, Linux, Nginx, Apache, Laravel Cloud, Vercel, DigitalOcean' },
  { group: 'Testing & tools', items: 'PHPUnit, Vitest, Playwright, Postman' },
  { group: 'Practices', items: 'TDD, clean architecture, code review, accessibility (WCAG AA), security and data privacy' },
]
