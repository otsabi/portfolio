"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => {
        window.scrollTo({ top: 0 });
        document.getElementById("main")?.focus({ preventScroll: true });
      }}
      className="inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-paper"
    >
      <ArrowUp aria-hidden="true" className="size-4" />
      Back to top
    </button>
  );
}
