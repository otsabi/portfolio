import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/container";
import { profile } from "@/data/profile";
import { btnArrow, btnGhost, btnOutline, btnPrimary } from "./buttons";
import { Eyebrow } from "./section";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden border-t border-white/10 py-28 text-center sm:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 size-[48rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-500/[0.12] blur-3xl"
      />
      <Container className="reveal relative flex flex-col items-center">
        <Eyebrow id="contact" className="justify-center" />
        <h2
          id="contact-title"
          className="mt-6 text-[clamp(3.25rem,11vw,8rem)] leading-[0.92] font-semibold tracking-[-0.05em]"
        >
          Let&apos;s <span className="text-brand-400">talk</span>.
        </h2>
        <p className="mt-6 max-w-md text-mist">
          {profile.title} · {profile.location}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href={`mailto:${profile.email}`} className={btnPrimary}>
            Email me
            <ArrowRight aria-hidden="true" className={btnArrow} />
          </a>
          <a href={`mailto:${profile.email}`} className={btnOutline}>
            {profile.email}
          </a>
          <a href={profile.resume} download={profile.resumeFileName} className={btnGhost}>
            Download resume
            <Download aria-hidden="true" className="size-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
