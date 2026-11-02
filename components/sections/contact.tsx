import { Download, Mail } from "lucide-react";
import { Container } from "@/components/container";
import { profile } from "@/data/profile";
import { sectionNumber } from "./nav-items";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-64 left-1/2 size-[44rem] -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl"
      />
      <Container className="reveal relative">
        <p className="flex items-center gap-3 font-mono text-[0.72rem] tracking-[0.18em] text-mist uppercase">
          <span className="text-brand-400">{sectionNumber("contact")}</span>
          <span aria-hidden="true" className="h-px w-8 bg-white/20" />
          <span>Let&apos;s talk</span>
        </p>
        <h2
          id="contact-title"
          className="mt-6 text-[clamp(3rem,10vw,7.5rem)] leading-[0.92] font-semibold tracking-[-0.05em]"
        >
          Let&apos;s talk<span className="text-brand-500">.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-mist">
          {profile.title}, {profile.location}.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-block text-[clamp(1.35rem,4.5vw,2.75rem)] font-medium tracking-tight break-all underline decoration-white/20 decoration-2 underline-offset-8 transition-colors hover:text-brand-400 hover:decoration-brand-500"
        >
          {profile.email}
        </a>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-500 px-6 font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-brand-400"
          >
            <Mail aria-hidden="true" className="size-4" />
            Email me
          </a>
          <a
            href={profile.resume}
            download
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-6 font-medium transition-all hover:-translate-y-0.5 hover:border-paper/50"
          >
            <Download aria-hidden="true" className="size-4" />
            Download résumé
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center px-4 text-mist transition-colors hover:text-paper"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center px-4 text-mist transition-colors hover:text-paper"
          >
            GitHub
          </a>
        </div>
      </Container>
    </section>
  );
}
