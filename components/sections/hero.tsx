import { Download } from "lucide-react";
import { Container } from "@/components/container";
import { HeroCanvas } from "@/components/motion/hero-canvas";
import { LocalTime } from "@/components/motion/local-time";
import { profile } from "@/data/profile";
import { currentJob, tickerItems } from "@/lib/derived";

const [firstName, ...rest] = profile.name.split(" ");

export function Hero() {
  return (
    <section
      id="intro"
      aria-labelledby="intro-title"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-16"
    >
      <HeroCanvas />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 -right-40 size-[42rem] rounded-full bg-brand-500/10 blur-3xl"
      />

      <Container className="relative flex flex-1 flex-col justify-center py-16 sm:py-20">
        <div className="flex animate-rise flex-wrap items-center gap-x-5 gap-y-3 text-sm text-mist">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5">
            <span aria-hidden="true" className="size-1.5 animate-pulse-dot rounded-full bg-brand-500" />
            Now: {currentJob.role} at {currentJob.company}
          </span>
          <span className="inline-flex items-center gap-2">
            {profile.location}
            <span aria-hidden="true" className="text-white/20">/</span>
            <LocalTime />
          </span>
        </div>

        <h1
          id="intro-title"
          className="mt-8 animate-rise text-[clamp(3rem,11vw,8.5rem)] leading-[0.9] font-semibold tracking-[-0.05em] [animation-delay:120ms]"
        >
          {firstName}
          <br />
          <span className="text-mist-2">{rest.join(" ")}</span>
          <span className="sr-only">, {profile.title}</span>
        </h1>

        <p
          aria-hidden="true"
          className="mt-7 animate-rise font-mono text-xs tracking-[0.2em] text-brand-400 uppercase [animation-delay:220ms] sm:text-sm"
        >
          {profile.title}
        </p>

        <p className="mt-5 max-w-2xl animate-rise text-lg text-paper/85 [animation-delay:300ms] sm:text-2xl sm:leading-snug">
          {profile.headline}
        </p>

        <div className="mt-10 flex animate-rise flex-wrap items-center gap-3 [animation-delay:400ms]">
          <a
            href="#work"
            className="inline-flex h-12 items-center rounded-full bg-brand-500 px-6 font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-brand-400"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center rounded-full border border-white/15 px-6 font-medium transition-all hover:-translate-y-0.5 hover:border-paper/50"
          >
            Contact me
          </a>
          <a
            href={profile.resume}
            download
            className="inline-flex h-12 items-center gap-2 px-3 text-mist underline-offset-4 transition-colors hover:text-paper hover:underline"
          >
            <Download aria-hidden="true" className="size-4" />
            Résumé
          </a>
        </div>
      </Container>

      {/* Skill ticker */}
      <div className="marquee-mask relative overflow-hidden border-t border-white/10 py-5">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? "true" : undefined}
              aria-label={copy === 0 ? "Technologies" : undefined}
              className="flex shrink-0 items-center gap-10 pr-10 font-mono text-sm tracking-wide text-mist"
            >
              {tickerItems.map((item) => (
                <li key={item} className="flex items-center gap-10 whitespace-nowrap">
                  {item}
                  <span aria-hidden="true" className="size-1 rounded-full bg-brand-500/70" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
