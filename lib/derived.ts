// Values computed from data/profile.ts so the page never states
// anything that isn't in the data file.
import { experience, skills } from "@/data/profile";

export const split = (list: string) => list.split(", ").map((s) => s.trim());

const startYear = (period: string) => Number(period.match(/\d{4}/)?.[0]);

export const currentJob = experience[0];
export const currentSince = startYear(currentJob.period);
export const isCurrent = (period: string) => /now|present/i.test(period);
export const firstYear = Math.min(...experience.map((job) => startYear(job.period)));

/** Tools for the hero ticker: named technologies only, nothing marked "(learning)". */
export const tickerItems = skills
  .filter((row) => ["Backend", "Frontend", "Data", "DevOps"].includes(row.group))
  .flatMap((row) => split(row.items))
  .filter((item) => /^[A-Z]/.test(item) && !item.includes("(learning)"));

/**
 * Splits a level note off a skill: "Node.js (learning)" -> Node.js + "learning",
 * "German (B2)" -> German + "B2". Other brackets, like "Linux (Ubuntu)", stay as text.
 */
export function parseSkill(item: string) {
  const match = item.match(/^(.*?)\s*\((learning|professional|[ABC][12])\)$/i);
  return match ? { name: match[1], note: match[2] } : { name: item, note: undefined };
}
