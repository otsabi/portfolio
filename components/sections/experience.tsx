import { Plus } from "lucide-react";
import { experience } from "@/data/profile";
import { isCurrent, split } from "@/lib/derived";
import { TechIcon } from "@/lib/tech-icons";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" title="Where I've worked, newest first.">
      <ol className="border-t border-white/10">
        {experience.map((job) => {
          const now = isCurrent(job.period);
          return (
            <li
              key={job.company}
              className="reveal grid gap-4 border-b border-white/10 py-8 md:grid-cols-[12rem_1fr_1.35fr] md:gap-10"
            >
              <p className="flex items-center gap-3 pt-1 font-mono text-xs text-mist md:items-start">
                {job.period}
                {now && (
                  <span className="inline-flex items-center gap-1.5 text-brand-400">
                    <span aria-hidden="true" className="size-1.5 animate-pulse-dot rounded-full bg-brand-500" />
                    Now
                  </span>
                )}
              </p>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{job.company}</h3>
                <p className="mt-1 text-sm text-mist">{job.role}</p>
              </div>
              <div>
                <p className="text-[0.95rem] leading-relaxed text-paper/85">{job.context}</p>
                {/* Stack with logos, always visible */}
                <ul aria-label="Stack" className="mt-4 flex flex-wrap gap-1.5">
                  {split(job.stack).map((tech) => (
                    <li
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-xs text-paper/85"
                    >
                      <TechIcon item={tech} />
                      {tech}
                    </li>
                  ))}
                </ul>
                <details className="group mt-4">
                  <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm text-brand-400 transition-colors hover:text-brand-300 [&::-webkit-details-marker]:hidden">
                    <Plus aria-hidden="true" className="size-4 transition-transform duration-300 group-open:rotate-45" />
                    Highlights
                  </summary>
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point) => (
                      <li key={point} className="relative pl-5 text-[0.95rem] leading-relaxed text-paper/85">
                        <span aria-hidden="true" className="absolute top-[0.7rem] left-0 h-0.5 w-2.5 rounded-full bg-brand-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
