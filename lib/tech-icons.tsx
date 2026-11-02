// Logo for each skill in data/profile.ts.
// Brand logos come from Simple Icons (CC0). Concepts without a brand
// (and AWS, which Simple Icons no longer ships) use Lucide icons.
import {
  Accessibility,
  Blocks,
  ChartColumn,
  FileCode,
  Handshake,
  Braces,
  Cloud,
  Database,
  Drama,
  FlaskConical,
  GitPullRequest,
  ListChecks,
  Search,
  ShieldCheck,
  TestTube,
  type LucideIcon,
} from "lucide-react";
import {
  siApache,
  siPusher,
  siSap,
  siStoryblok,
  siWoocommerce,
  siWordpress,
  siInertia,
  siPostman,
  siRedis,
  siVite,
  siVitest,
  siDigitalocean,
  siDocker,
  siFilament,
  siGithubactions,
  siLaravel,
  siLivewire,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siNuxt,
  siOpenjdk,
  siPhp,
  siPinia,
  siPostgresql,
  siPython,
  siReact,
  siRedux,
  siSentry,
  siSpringboot,
  siTailwindcss,
  siTypescript,
  siUbuntu,
  siVercel,
  siVuedotjs,
  type SimpleIcon,
} from "simple-icons";

const brands: Record<string, SimpleIcon> = {
  PHP: siPhp,
  Laravel: siLaravel,
  Python: siPython,
  Java: siOpenjdk,
  "Spring Boot": siSpringboot,
  "Node.js": siNodedotjs,
  React: siReact,
  Redux: siRedux,
  "Vue.js": siVuedotjs,
  Nuxt: siNuxt,
  Pinia: siPinia,
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  "Tailwind CSS": siTailwindcss,
  Livewire: siLivewire,
  Filament: siFilament,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Linux: siUbuntu,
  Docker: siDocker,
  "GitHub Actions": siGithubactions,
  Nginx: siNginx,
  Apache: siApache,
  "Laravel Cloud": siLaravel,
  Vercel: siVercel,
  DigitalOcean: siDigitalocean,
  Sentry: siSentry,
  Redis: siRedis,
  "Inertia.js": siInertia,
  Vite: siVite,
  Vitest: siVitest,
  Postman: siPostman,
  Pusher: siPusher,
  "Laravel Echo": siLaravel,
  SAP: siSap,
  Storyblok: siStoryblok,
  WordPress: siWordpress,
  WooCommerce: siWoocommerce,
};

const concepts: Record<string, LucideIcon> = {
  "REST APIs": Braces,
  "REST API": Braces,
  REST: Braces,
  SOAP: FileCode,
  vTiger: Handshake,
  Plecto: ChartColumn,
  "queues and jobs": ListChecks,
  indexing: Search,
  "stored procedures": Database,
  AWS: Cloud,
  TDD: FlaskConical,
  "clean architecture": Blocks,
  "code review": GitPullRequest,
  accessibility: Accessibility,
  "security and data privacy": ShieldCheck,
  PHPUnit: TestTube,
  Playwright: Drama,
};


/** Brand colors too dark to see on the black background fall back to the text color. */
function visibleColor(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.25 ? "var(--color-paper)" : `#${hex}`;
}

/** "Linux (Ubuntu)" -> "Linux"; "React 19" -> "React" */
const baseName = (item: string) =>
  item
    .replace(/\s*\(.*\)$/, "") // "(Ubuntu)", "(B2)"
    .replace(/\s+\d+(\.\d+)*$/, ""); // "Laravel 12" -> "Laravel"

/** Brand color for a skill (readable on dark), or undefined if it has no brand. */
export function brandColor(item: string) {
  const brand = brands[baseName(item)];
  return brand ? visibleColor(brand.hex) : undefined;
}

export function TechIcon({ item, className = "size-3.5" }: { item: string; className?: string }) {
  const name = baseName(item);
  const brand = brands[name];
  if (brand) {
    return (
      <svg
        role="img"
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={className}
        fill={visibleColor(brand.hex)}
      >
        <path d={brand.path} />
      </svg>
    );
  }
  const Icon = concepts[name];
  return Icon ? <Icon aria-hidden="true" className={`${className} text-mist`} strokeWidth={1.75} /> : null;
}
