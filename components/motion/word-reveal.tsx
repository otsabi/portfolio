"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Words brighten one after another as the paragraph scrolls into view. */
export function WordReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");
  // null = not hydrated yet: render fully visible (good for no-JS and SEO)
  const [lit, setLit] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh * 0.9 - r.top) / (r.height + vh * 0.45);
      setLit(Math.round(Math.min(1, Math.max(0, progress)) * words.length));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [words.length]);

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className={cn(
            "transition-opacity duration-300",
            lit !== null && i >= lit ? "opacity-20" : "opacity-100",
          )}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
