import { About } from "@/components/sections/about";
import { TerminalCursor } from "@/components/motion/terminal-cursor";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Now } from "@/components/sections/now";
import { SectionRail } from "@/components/sections/section-rail";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNav } from "@/components/sections/site-nav";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <SiteNav />
      <SectionRail />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Now />
        <Contact />
      </main>
      <SiteFooter />
      <TerminalCursor />
    </>
  );
}
