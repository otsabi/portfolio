import { skills } from "@/data/profile";
import { namedTools, split } from "@/lib/derived";
import { Section } from "./section";

// Big flowing list: backend and data in paper, frontend and DevOps in brand green
const primary = namedTools(["Backend", "Data"]);
const accent = namedTools(["Frontend", "DevOps"]);

function Flow({ items, className }: { items: string[]; className?: string }) {
  return (
    <span className={className}>
      {items.map((item, i) => (
        <span key={item}>
          {/* keep each name and its dot together; the space after is a break point */}
          <span className="whitespace-nowrap">
            {item}
            {i < items.length - 1 && (
              <span aria-hidden="true" className="opacity-50">
                {" "}·
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
      <p className="reveal max-w-5xl text-[clamp(1.6rem,4vw,3rem)] leading-[1.2] font-medium tracking-[-0.025em]">
        <Flow items={primary} className="text-paper/90" />
        <br />
        <Flow items={accent} className="text-brand-400" />
      </p>

      <ol className="mt-16 grid gap-x-12 md:grid-cols-2">
        {skills.map((row, i) => (
          <li key={row.group} className="reveal grid grid-cols-[2.25rem_1fr] border-t border-white/10 py-6">
            <span className="pt-0.5 font-mono text-xs text-mist-2">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="font-medium">{row.group}</h3>
              <p className="mt-2 font-mono text-xs leading-relaxed text-mist">{split(row.items).join(" / ")}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
