"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { sections, topLinks } from "./nav-items";
import { useActiveSection } from "./use-active-section";

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .join("");

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = sections[useActiveSection()]?.id;

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
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        open ? "bg-ink" : scrolled ? "bg-ink/70 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:rounded-md focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="flex h-16 items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#intro" className="group flex items-center gap-3" aria-label={`${profile.name}, home`}>
          <span className="grid size-9 place-items-center rounded-full border border-white/20 font-mono text-[0.7rem] font-medium tracking-wider transition-colors group-hover:border-brand-500 group-hover:text-brand-400">
            {initials}
          </span>
          <span className="text-sm font-medium tracking-tight">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-0.5 rounded-full border border-white/10 bg-ink/50 p-1 text-sm backdrop-blur-md">
            {topLinks.map((link) => {
              const active = link.id === activeId;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={active ? "location" : undefined}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition-colors",
                      active ? "text-paper" : "text-mist hover:text-paper",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "size-1.5 rounded-full bg-brand-500 transition-all duration-300",
                        active ? "scale-100 opacity-100" : "w-0 scale-0 opacity-0",
                      )}
                    />
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href={profile.resume}
                download
                className="inline-flex rounded-full px-3.5 py-1.5 text-mist transition-colors hover:text-paper"
              >
                Resume
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
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="h-[calc(100svh-4rem)] border-t border-white/10 md:hidden">
          <Container className="py-8">
            <ul className="flex flex-col gap-1">
              {topLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-3xl font-medium tracking-tight transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={profile.resume} download className="block py-2 text-3xl font-medium tracking-tight hover:text-brand-400">
                  Resume
                </a>
              </li>
            </ul>
            <p className="mt-10 font-mono text-[0.68rem] tracking-[0.18em] text-mist-2 uppercase">Socials</p>
            <div className="mt-3 flex gap-5 text-sm text-mist">
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
