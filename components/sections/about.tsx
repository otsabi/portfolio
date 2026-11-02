import { Container } from "@/components/container";
import { CountUp } from "@/components/motion/count-up";
import { WordReveal } from "@/components/motion/word-reveal";
import { experience, profile, projects, skills } from "@/data/profile";
import { firstYear } from "@/lib/derived";
import { Eyebrow } from "./section";

const stats = [
  { label: "Building software since", value: firstYear, static: true },
  { label: "Roles so far", value: experience.length },
  { label: "Personal projects", value: projects.length },
  { label: "Skill groups", value: skills.length },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 sm:py-32">
      <Container>
        <Eyebrow id="about" as="h2" titleId="about-title" className="reveal" />

        <WordReveal
          text={profile.intro}
          className="mt-8 max-w-5xl text-[clamp(1.6rem,3.8vw,3rem)] leading-[1.18] font-medium tracking-[-0.025em]"
        />

        <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 pt-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal flex flex-col-reverse gap-2">
              <dt className="text-sm text-mist">{stat.label}</dt>
              <dd className="text-5xl font-semibold tracking-[-0.03em] sm:text-6xl">
                {"static" in stat ? stat.value : <CountUp value={stat.value} />}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
