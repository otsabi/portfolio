import { cacheLife } from "next/cache";
import { Container } from "@/components/container";
import { BackToTop } from "@/components/motion/back-to-top";
import { LocalTime } from "@/components/motion/local-time";
import { profile } from "@/data/profile";
import { sections } from "./nav-items";

// Cached so the page stays static; the year refreshes on each deploy.
async function CurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

const heading = "font-mono text-[0.68rem] tracking-[0.18em] text-mist-2 uppercase";
const link = "text-mist transition-colors hover:text-paper";

export function SiteFooter() {
  return (
    <footer aria-labelledby="footer-title" className="border-t border-white/10 bg-ink-2">
      <h2 id="footer-title" className="sr-only">
        Footer
      </h2>
      <Container className="grid gap-12 py-16 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <p className={heading}>Email</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-block text-xl font-medium tracking-tight break-all transition-colors hover:text-brand-400 sm:text-2xl"
          >
            {profile.email}
          </a>
          <p className="mt-6 text-sm text-mist">
            {profile.location}
            <br />
            <LocalTime />
          </p>
        </div>

        <nav aria-label="Footer">
          <p className={heading}>Navigate</p>
          <ul className="mt-4 space-y-2 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={link}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={heading}>Elsewhere</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={link}>
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.resume} download className={link}>
                Resume (PDF)
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-mist-2">
        <p>
          © <CurrentYear /> {profile.name}
        </p>
        <BackToTop />
      </Container>
    </footer>
  );
}
