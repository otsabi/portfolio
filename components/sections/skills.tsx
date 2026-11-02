import { skills } from "@/data/profile";
import { namedTools, split } from "@/lib/derived";
import { brandColor, TechIcon } from "@/lib/tech-icons";
import { Section } from "./section";

// Big flowing list, each tech in its own brand color with its logo:
// backend and data on the first lines, frontend and DevOps below
const primary = namedTools(["Backend", "Data"]);
const accent = namedTools(["Frontend", "DevOps"]);

function Flow({ items }: { items: string[] }) {
  return (
    <span className="block">
      {items.map((item, i) => (
        <span key={item}>
          {/* keep logo, name and dot together; the space after is a break point */}
          <span className="inline-flex items-center gap-[0.3em] whitespace-nowrap">
            <TechIcon item={item} className="size-[0.8em] shrink-0" />
            <span style={{ color: brandColor(item) ?? "var(--color-paper)" }}>{item}</span>
            {i < items.length - 1 && (
              <span aria-hidden="true" className="text-white/25">
                ·
              </span>
            )}
          </span>{" "}
        </span>
      ))}
    </span>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="The toolbox I bring to every project.">
      <p className="reveal max-w-5xl text-[clamp(1.25rem,2.8vw,2.125rem)] leading-[1.45] font-medium tracking-[-0.02em]">
        <Flow items={primary} />
        <Flow items={accent} />
      </p>

      <ol className="mt-16 grid gap-x-12 md:grid-cols-2">
        {skills.map((row, i) => (
          <li key={row.group} className="reveal grid grid-cols-[2.25rem_1fr] border-t border-white/10 py-6">
            <span className="pt-0.5 font-mono text-xs text-mist-2">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="font-medium">{row.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {split(row.items).map((item) => {
                  // "German (B2)" -> name + small tag; "Linux (Ubuntu)" stays as one label
                  const note = item.match(/\((professional|[ABC][12])\)$/i)?.[1];
                  const label = note ? item.replace(/\s*\([^)]*\)$/, "") : item;
                  return (
                    <li
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-xs text-paper/85 transition-colors hover:border-brand-500/50"
                    >
                      <TechIcon item={item} />
                      {label}
                      {note && <span className="text-[0.65rem] tracking-wider text-brand-400 uppercase">{note}</span>}
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
