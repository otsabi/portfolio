"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { sections } from "./nav-items";
import { useActiveSection } from "./use-active-section";

const go = (index: number) =>
  document.getElementById(sections[index]?.id)?.scrollIntoView({ block: "start" });

const nn = (i: number) => String(i + 1).padStart(2, "0");

/** Vertical pill of dots fixed to the right edge on wide screens. */
export function SectionRail() {
  const active = useActiveSection();

  return (
    <aside
      aria-label="Page section navigation"
      className="fixed top-1/2 right-4 z-30 hidden -translate-y-1/2 flex-col items-center gap-1 rounded-full border border-white/10 bg-ink/60 px-1 py-1.5 backdrop-blur-md xl:flex"
    >
      <button
        type="button"
        onClick={() => go(active - 1)}
        disabled={active === 0}
        className="grid size-7 place-items-center rounded-full text-mist transition-colors hover:text-paper disabled:opacity-25"
      >
        <ChevronUp aria-hidden="true" className="size-4" />
        <span className="sr-only">Scroll to previous section</span>
      </button>
      <ol className="flex flex-col items-center">
        {sections.map((s, i) => {
          const isActive = i === active;
          return (
            <li key={s.id} className="group relative">
              <button
                type="button"
                onClick={() => go(i)}
                aria-current={isActive ? "true" : undefined}
                className="grid size-7 place-items-center"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "rounded-full transition-all duration-300",
                    isActive
                      ? "size-2.5 bg-brand-500 ring-4 ring-brand-500/20"
                      : "size-1.5 bg-white/35 group-hover:bg-paper",
                  )}
                />
                <span className="sr-only">
                  {nn(i)} · {s.label}
                </span>
              </button>
              <span
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute top-1/2 right-full mr-3 -translate-y-1/2 rounded-md border border-white/10 bg-ink-2 px-2 py-1 font-mono text-[0.62rem] tracking-[0.14em] whitespace-nowrap uppercase transition-all duration-200",
                  isActive
                    ? "translate-x-0 text-brand-400 opacity-100"
                    : "translate-x-1 text-paper opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                )}
              >
                <span className="text-mist-2">{nn(i)}</span> {s.label}
              </span>
            </li>
          );
        })}
      </ol>
      <button
        type="button"
        onClick={() => go(active + 1)}
        disabled={active === sections.length - 1}
        className="grid size-7 place-items-center rounded-full text-mist transition-colors hover:text-paper disabled:opacity-25"
      >
        <ChevronDown aria-hidden="true" className="size-4" />
        <span className="sr-only">Scroll to next section</span>
      </button>
    </aside>
  );
}
