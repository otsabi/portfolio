import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { sectionNumber, sections, type SectionId } from "./nav-items";

/** Numbered editorial section: "03 · SKILLS" eyebrow, big heading, content. */
export function Section({
  id,
  title,
  className,
  children,
}: {
  id: SectionId;
  title: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  const label = sections.find((s) => s.id === id)?.label;
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("border-t border-white/10 py-20 sm:py-28", className)}
    >
      <Container>
        <div className="reveal">
          <p className="flex items-center gap-3 font-mono text-[0.72rem] tracking-[0.18em] text-mist uppercase">
            <span className="text-brand-400">{sectionNumber(id)}</span>
            <span aria-hidden="true" className="h-px w-8 bg-white/20" />
            <span>{label}</span>
          </p>
          <h2
            id={`${id}-title`}
            className="mt-5 max-w-4xl text-[clamp(1.9rem,5vw,3.75rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-balance"
          >
            {title}
          </h2>
        </div>
        <div className="mt-12 sm:mt-16">{children}</div>
      </Container>
    </section>
  );
}
