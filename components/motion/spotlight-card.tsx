"use client";

import { cn } from "@/lib/utils";

/** A card with a soft glow that follows the pointer. */
export function SpotlightCard({ className, children, ...props }: React.ComponentProps<"article">) {
  return (
    <article
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
      }}
      className={cn(
        "spotlight group relative rounded-2xl border bg-ink-2 transition-colors duration-300 hover:border-brand-500/40",
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
}
