import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { sectionNumber, sections, type SectionId } from "./nav-items";

export function Eyebrow({
  id,
  className,
  as: Tag = "p",
  titleId,
}: {
  id: SectionId;
  className?: string;
  as?: "p" | "h2";
  titleId?: string;
}) {
  const label = sections.find((s) => s.id === id)?.label;
  return (
    <Tag
      id={titleId}
      className={cn("flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.18em] text-mist uppercase", className)}
    >
      <span className="text-brand-400">{sectionNumber(id)}</span>
      <span aria-hidden="true" className="h-px w-8 bg-white/20" />
      <span>{label}</span>
    </Tag>
  );
}

/**
 * Numbered editorial section: "03 —— SKILLS" eyebrow, big heading, content.
 * `bleed` renders after the container, edge to edge.
 */
export function Section({
  id,
  title,
  className,
  children,
  bleed,
}: {
  id: SectionId;
  title: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  bleed?: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("border-t border-white/10 py-24 sm:py-32", className)}
    >
      <Container>
        <div className="reveal">
          <Eyebrow id={id} />
          <h2
            id={`${id}-title`}
            className="mt-5 max-w-3xl text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-balance"
          >
            {title}
          </h2>
        </div>
        {children && <div className="mt-14 sm:mt-16">{children}</div>}
      </Container>
      {bleed && <div className="mt-14 sm:mt-16">{bleed}</div>}
    </section>
  );
}
