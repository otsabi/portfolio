// Section order for the page, the side rail and the menus.
export const sections = [
  { id: "intro", label: "Home" },
  { id: "about", label: "Who I am" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "now", label: "Now" },
  { id: "contact", label: "Let's talk" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const sectionNumber = (id: SectionId) =>
  String(sections.findIndex((s) => s.id === id) + 1).padStart(2, "0");

// Links shown in the top bar
export const topLinks: { id: SectionId; label: string }[] = [
  { id: "intro", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
