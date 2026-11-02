// Shared link-button styles (rendered on <a> elements).
// 40px tall on phones, 48px on desktop.
const base =
  "group/btn inline-flex h-10 items-center gap-2 rounded-full px-5 text-sm font-medium whitespace-nowrap transition-all duration-200 lg:h-12 lg:px-6 lg:text-[0.9375rem]";

export const btnPrimary = `${base} bg-brand-400 text-ink hover:-translate-y-0.5 hover:bg-brand-300`;
export const btnOutline = `${base} border border-white/15 text-paper hover:-translate-y-0.5 hover:border-white/40`;
export const btnGhost = `${base} px-3 text-mist hover:text-paper`;

/** Arrow that nudges right on hover */
export const btnArrow = "size-4 transition-transform group-hover/btn:translate-x-0.5";

/** "Read more" style link with a circled arrow */
export const circleLink =
  "group/link inline-flex items-center gap-3 text-sm font-medium text-paper transition-colors hover:text-brand-400 lg:text-[0.9375rem]";
export const circleLinkIcon =
  "grid size-9 place-items-center rounded-full border border-white/25 transition-all group-hover/link:translate-x-0.5 group-hover/link:border-brand-500";
