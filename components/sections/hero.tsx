import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { HeroCanvas } from "@/components/motion/hero-canvas";
import { LocalTime } from "@/components/motion/local-time";
import { profile } from "@/data/profile";
import { currentJob, tickerItems } from "@/lib/derived";
import { btnArrow, btnGhost, btnOutline, btnPrimary } from "./buttons";

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
        className="pointer-events-none absolute -top-56 right-[-10%] size-[46rem] rounded-full bg-brand-500/10 blur-3xl"
      />

      <Container className="relative flex flex-1 flex-col pt-8 pb-12">
        {/* Status row */}
        <div className="flex animate-rise flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[0.8rem] text-paper/85">
            <span aria-hidden="true" className="size-1.5 animate-pulse-dot rounded-full bg-brand-500" />
            Now: {currentJob.role} at {currentJob.company}
          </span>
          <span className="inline-flex items-center gap-2 font-mono text-xs text-mist">
            {profile.location}
            <span aria-hidden="true">·</span>
            <LocalTime />
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center py-16 sm:py-20">
          <h1
            id="intro-title"
            className="animate-rise text-[clamp(3rem,10.5vw,8rem)] leading-[0.95] font-semibold tracking-[-0.045em] [animation-delay:100ms]"
          >
            {profile.name}
            <span className="sr-only">, {profile.title}</span>
          </h1>
          <p className="mt-3 animate-rise text-[clamp(1.5rem,3.4vw,2.6rem)] font-medium tracking-[-0.02em] text-brand-400 [animation-delay:200ms]">
            {profile.tagline}
          </p>

          <div className="mt-12 flex flex-col gap-8 lg:mt-16 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl animate-rise text-lg leading-relaxed text-paper/80 [animation-delay:300ms]">
              {profile.headline}
            </p>
            <div className="flex animate-rise flex-wrap items-center gap-3 [animation-delay:400ms] lg:shrink-0 lg:flex-nowrap">
              <a href="#work" className={btnPrimary}>
                View my work
                <ArrowRight aria-hidden="true" className={btnArrow} />
              </a>
              <a href="#contact" className={btnOutline}>
                Contact me
              </a>
              <a href={profile.resume} download className={btnGhost}>
                Resume
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Tech ticker: two identical lists slide left forever; the second is hidden from screen readers */}
      <div className="marquee relative animate-rise overflow-hidden border-y border-white/10 py-4 [animation-delay:500ms]">
        <div className="marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-label={copy === 0 ? "Technologies" : undefined}
              aria-hidden={copy === 1 ? "true" : undefined}
              className="marquee-copy flex shrink-0 items-center font-mono text-xs text-mist sm:text-[0.8rem]"
            >
              {tickerItems.map((item) => (
                <li key={item} className="inline-flex items-center whitespace-nowrap">
                  {item}
                  <span aria-hidden="true" className="px-4 text-brand-500/70">
                    ·
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
