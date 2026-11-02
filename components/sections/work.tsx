"use client";

import { ArrowUpRight, Lock } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/container";
import { projects } from "@/data/profile";
import { split } from "@/lib/derived";
import { cn } from "@/lib/utils";
import { Section } from "./section";

export function Work() {
  // Index of the hovered project name; others dim
  const [active, setActive] = useState<number | null>(null);
  const dim = (i: number) => active !== null && active !== i;

  return (
    <Section
      id="work"
      title="Personal projects, shipped and in progress."
      bleed={
        <>
          <ul className="border-t border-white/10" onMouseLeave={() => setActive(null)}>
            {projects.map((project, i) => (
              <li key={project.name} className="border-b border-white/10" onMouseEnter={() => setActive(i)}>
                <h3
                  className={cn(
                    "px-4 py-7 text-center text-[clamp(2rem,6.5vw,4.75rem)] leading-none font-medium tracking-[-0.035em] transition-all duration-300 sm:py-9",
                    active === i && "text-brand-400",
                    dim(i) && "text-white/20",
                  )}
                >
                  {project.name}
                </h3>
              </li>
            ))}
          </ul>

          <Container>
            <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {projects.map((project, i) => (
                <li
                  key={project.name}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  className="reveal"
                >
                  {/* dim on an inner wrapper: the reveal animation controls the li's opacity */}
                  <div className={cn("transition-opacity duration-300", dim(i) && "opacity-40")}>
                  <p className="flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.16em] text-mist uppercase">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span aria-hidden="true">·</span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "size-1.5 rounded-full",
                        project.status === "Live" ? "animate-pulse-dot bg-brand-500" : "bg-mist-2",
                      )}
                    />
                    <span>{project.status}</span>
                    <span className="sr-only">: {project.name}</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-paper/85">{project.description}</p>
                  <p className="mt-3 font-mono text-xs text-mist">{split(project.stack).join(" / ")}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-sm text-brand-400 transition-colors hover:text-brand-300"
                    >
                      {project.link.replace(/^https?:\/\//, "")}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  )}
                  {project.privateNote && (
                    <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-mist">
                      <Lock aria-hidden="true" className="size-3.5" />
                      {project.privateNote}
                    </p>
                  )}
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </>
      }
    />
  );
}
