import { LocalTime } from "@/components/motion/local-time";
import { profile } from "@/data/profile";
import { currentJob, currentSince } from "@/lib/derived";
import { Section } from "./section";

export function Now() {
  return (
    <Section
      id="now"
      title={
        <>
          Right now: {currentJob.role} at{" "}
          <span className="text-brand-400">{currentJob.company}</span>.
        </>
      }
    >
      <div className="reveal grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <p className="max-w-2xl text-xl text-paper/85 sm:text-2xl sm:leading-snug">{currentJob.context}</p>
        <dl className="divide-y divide-white/10 border-y border-white/10">
          {[
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
          ].map((row) => (
            <div key={row.term} className="flex items-baseline justify-between gap-6 py-4">
              <dt className="font-mono text-[0.72rem] tracking-[0.16em] text-mist uppercase">{row.term}</dt>
              <dd className="text-right">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
