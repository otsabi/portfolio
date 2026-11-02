"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { sections } from "./nav-items";

const go = (index: number) =>
  document.getElementById(sections[index]?.id)?.scrollIntoView({ block: "start" });

/** Numbered section navigator fixed to the right edge on wide screens. */
export function SectionRail() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(sections.findIndex((s) => s.id === entry.target.id));
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <aside
      aria-label="Page section navigation"
      className="fixed top-1/2 right-5 z-30 hidden -translate-y-1/2 flex-col items-end gap-2 min-[1440px]:flex"
    >
      <button
        type="button"
        onClick={() => go(active - 1)}
        disabled={active === 0}
        className="grid size-7 place-items-center rounded-full text-mist transition-colors hover:text-paper disabled:opacity-30"
      >
        <ChevronUp aria-hidden="true" className="size-4" />
        <span className="sr-only">Scroll to previous section</span>
      </button>
      <ol className="flex flex-col items-end gap-1.5">
        {sections.map((s, i) => (
          <li key={s.id}>
            <button
              type="button"
              onClick={() => go(i)}
              aria-current={i === active ? "true" : undefined}
              className="group flex items-center gap-2.5 py-0.5 font-mono text-[0.68rem] tracking-[0.16em] uppercase"
            >
              <span
                className={cn(
                  "transition-all duration-300",
                  i === active
                    ? "translate-x-0 text-paper opacity-100"
                    : "translate-x-2 text-mist opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                )}
              >
                {s.label}
              </span>
              <span className={cn("tabular-nums transition-colors", i === active ? "text-brand-400" : "text-mist-2")}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  "h-px transition-all duration-300",
                  i === active ? "w-6 bg-brand-500" : "w-3 bg-white/25 group-hover:w-5",
                )}
              />
            </button>
          </li>
        ))}
      </ol>
      <button
        type="button"
        onClick={() => go(active + 1)}
        disabled={active === sections.length - 1}
        className="grid size-7 place-items-center rounded-full text-mist transition-colors hover:text-paper disabled:opacity-30"
      >
        <ChevronDown aria-hidden="true" className="size-4" />
        <span className="sr-only">Scroll to next section</span>
      </button>
    </aside>
  );
}
