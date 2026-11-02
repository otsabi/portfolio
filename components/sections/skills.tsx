import { SpotlightCard } from "@/components/motion/spotlight-card";
import { skills } from "@/data/profile";
import { parseSkill, split } from "@/lib/derived";
import { Section } from "./section";

export function Skills() {
  return (
    <Section id="skills" title="What I work with, end to end.">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((row, i) => (
          <li key={row.group} className="reveal">
            <SpotlightCard className="h-full p-6 sm:p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight">{row.group}</h3>
                <span className="font-mono text-xs text-mist-2 transition-colors group-hover:text-brand-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {split(row.items).map((item) => {
                  const { name, note } = parseSkill(item);
                  return (
                    <li
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-paper/90"
                    >
                      {name}
                      {note && (
                        <span className="font-mono text-[0.65rem] tracking-wider text-brand-300 uppercase">
                          {note}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </SpotlightCard>
          </li>
        ))}
      </ul>
    </Section>
  );
}
