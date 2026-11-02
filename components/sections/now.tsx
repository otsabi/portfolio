import { ArrowRight } from "lucide-react";
import { LocalTime } from "@/components/motion/local-time";
import { profile } from "@/data/profile";
import { currentJob, currentSince } from "@/lib/derived";
import { circleLink, circleLinkIcon } from "./buttons";
import { Section } from "./section";

export function Now() {
  const facts = [
    { term: "Role", value: currentJob.role },
    { term: "Since", value: String(currentSince) },
    {
      term: "Based in",
      value: (
        <>
          {profile.location} <span className="text-white/25">·</span> <LocalTime />
        </>
      ),
    },
  ];

  return (
    <Section
      id="now"
      title={
        <>
          Right now: {profile.focus} at <span className="text-brand-400">{currentJob.company}</span>.
        </>
      }
    >
      <div className="reveal">
        <p className="max-w-3xl text-lg leading-relaxed text-paper/85">{currentJob.context}</p>
        <dl className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.term}>
              <dt className="font-mono text-[0.68rem] tracking-[0.16em] text-mist uppercase">{fact.term}</dt>
              <dd className="mt-2">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <a href="#experience" className={`${circleLink} mt-12`}>
          See where I&apos;ve worked
          <span className={circleLinkIcon}>
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </span>
        </a>
      </div>
    </Section>
  );
}
