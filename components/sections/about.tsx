import { Container } from "@/components/container";
import { CountUp } from "@/components/motion/count-up";
import { WordReveal } from "@/components/motion/word-reveal";
import { experience, profile, projects, skills } from "@/data/profile";
import { firstYear } from "@/lib/derived";
import { sectionNumber } from "./nav-items";

const stats = [
  { label: "Building software since", value: firstYear, from: 2000 },
  { label: "Roles so far", value: experience.length },
  { label: "Personal projects", value: projects.length },
  { label: "Skill areas", value: skills.length },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-white/10 py-20 sm:py-28">
      <Container>
        <p className="reveal flex items-center gap-3 font-mono text-[0.72rem] tracking-[0.18em] text-mist uppercase">
          <span className="text-brand-400">{sectionNumber("about")}</span>
          <span aria-hidden="true" className="h-px w-8 bg-white/20" />
          <span id="about-title">Who I am</span>
        </p>

        <WordReveal
          text={profile.intro}
          className="mt-8 max-w-5xl text-[clamp(1.5rem,3.6vw,2.9rem)] leading-[1.2] font-medium tracking-[-0.02em]"
        />

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-white/10 sm:mt-20 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-2 bg-ink p-6 sm:p-8">
              <dt className="text-sm text-mist">{stat.label}</dt>
              <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">
                <CountUp value={stat.value} from={stat.from} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
