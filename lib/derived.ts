// Values computed from data/profile.ts so the page never states
// anything that isn't in the data file.
import { experience, skills } from "@/data/profile";

export const split = (list: string) => list.split(", ").map((s) => s.trim());

const startYear = (period: string) => Number(period.match(/\d{4}/)?.[0]);

export const currentJob = experience[0];
export const currentSince = startYear(currentJob.period);
export const isCurrent = (period: string) => /now|present/i.test(period);
export const firstYear = Math.min(...experience.map((job) => startYear(job.period)));

/**
 * Named technologies from the given skill groups: proper names only
 * (no "queues and jobs").
 */
export const namedTools = (groups: string[]) =>
  skills
    .filter((row) => groups.includes(row.group))
    .flatMap((row) => split(row.items))
    .filter((item) => /^[A-Z]/.test(item));

/** Tools for the hero tech row */
export const tickerItems = namedTools(["Backend", "Frontend", "Data", "Cloud & platform"]);
