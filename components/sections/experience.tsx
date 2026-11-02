import { experience } from "@/data/profile";
import { isCurrent, split } from "@/lib/derived";
import { cn } from "@/lib/utils";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" title="Where I've worked, newest first.">
      <ol className="relative">
        {/* Timeline spine */}
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[5px] w-px bg-white/10 md:left-[13.5rem]" />
        {experience.map((job) => {
          const now = isCurrent(job.period);
          return (
            <li
              key={job.company}
              className="reveal relative grid gap-3 pb-14 pl-8 last:pb-0 md:grid-cols-[12rem_1fr] md:gap-12 md:pl-0"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-[0.4rem] left-0 size-[11px] rounded-full border-2 md:left-[calc(13.5rem-5px)]",
                  now ? "animate-pulse-dot border-brand-500 bg-brand-500" : "border-white/30 bg-ink",
                )}
              />
              <p className="flex items-center gap-3 font-mono text-sm text-mist md:flex-col md:items-start md:gap-2">
                {job.period}
                {now && (
                  <span className="rounded-full bg-brand-500/15 px-2 py-0.5 text-[0.68rem] tracking-[0.16em] text-brand-300 uppercase">
                    Now
                  </span>
                )}
              </p>
              <div className="max-w-3xl md:pl-4">
                <h3 className="text-2xl font-semibold tracking-tight">{job.company}</h3>
                <p className="mt-1 text-brand-400">{job.role}</p>
                <p className="mt-3 text-mist">{job.context}</p>
                <ul className="mt-5 space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="relative pl-5 text-paper/90">
                      <span aria-hidden="true" className="absolute top-[0.68rem] left-0 h-0.5 w-2.5 rounded-full bg-brand-500" />
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
                  {split(job.stack).map((tech) => (
                    <li key={tech} className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-paper/75">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
