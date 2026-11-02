import { ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { projects } from "@/data/profile";
import { split } from "@/lib/derived";
import { cn } from "@/lib/utils";
import { Section } from "./section";

export function Work() {
  return (
    <Section id="work" title="Personal projects, shipped and in progress.">
      <ul className="grid gap-4 lg:grid-cols-3">
        {projects.map((project, i) => {
          const live = project.status === "Live";
          return (
            <li key={project.name} className="reveal">
              <SpotlightCard className="flex h-full flex-col p-6 sm:p-8">
                <p className="flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.16em] text-mist uppercase">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      aria-hidden="true"
                      className={cn("size-1.5 rounded-full", live ? "animate-pulse-dot bg-brand-500" : "bg-mist-2")}
                    />
                    {project.status}
                  </span>
                </p>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{project.name}</h3>
                <p className="mt-3 text-mist">{project.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
                  {split(project.stack).map((tech) => (
                    <li key={tech} className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-paper/80">
                      {tech}
                    </li>
                  ))}
                </ul>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 self-start pt-8 text-sm text-brand-400 transition-colors hover:text-brand-300"
                  >
                    {project.link.replace(/^https?:\/\//, "")}
                    <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </SpotlightCard>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
