"use client";

import { useEffect, useState } from "react";
import { sections } from "./nav-items";

/** Index of the section currently in the middle of the viewport. */
export function useActiveSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
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
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return active;
}
