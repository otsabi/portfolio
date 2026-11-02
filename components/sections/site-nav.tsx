"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { topLinks } from "./nav-items";

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .join("");

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300",
        scrolled || open
          ? "border-white/10 bg-ink/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:rounded-md focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#intro" className="group flex items-center gap-3" aria-label={`${profile.name}, home`}>
          <span className="grid size-9 place-items-center rounded-full border border-white/15 font-mono text-xs font-medium tracking-wider transition-colors group-hover:border-brand-500 group-hover:text-brand-400">
            {initials}
          </span>
          <span className="text-sm font-medium tracking-tight">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm">
            {topLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-mist transition-colors hover:bg-white/5 hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="ml-2">
              <a
                href={profile.resume}
                download
                className="rounded-full border border-white/15 px-4 py-1.5 transition-colors hover:border-brand-500 hover:text-brand-400"
              >
                Résumé
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-white/15 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" className="size-4" /> : <Menu aria-hidden="true" className="size-4" />}
          <span className="sr-only">{open ? "Close menu" : "Menu"}</span>
        </button>
      </Container>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-white/10 md:hidden">
          <Container className="py-6">
            <ul className="flex flex-col gap-1">
              {[...topLinks, { href: profile.resume, label: "Résumé" }].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-2xl font-medium tracking-tight transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-5 border-t border-white/10 pt-5 text-sm text-mist">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                LinkedIn
              </a>
              <a href={`mailto:${profile.email}`} className="hover:text-paper">
                Email
              </a>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
