"use client";

import { useEffect, useState } from "react";

const TIME_ZONE = "America/Toronto"; // Ottawa

function format() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: TIME_ZONE,
    timeZoneName: "short",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return { time: `${get("hour")}:${get("minute")}`, zone: get("timeZoneName") };
}

/** Live local time in Ottawa. Renders "--:--" until hydrated. */
export function LocalTime({ city = "Ottawa" }: { city?: string }) {
  const [now, setNow] = useState<{ time: string; zone: string } | null>(null);

  useEffect(() => {
    const tick = () => setNow(format());
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="inline-flex items-baseline gap-1 font-mono tabular-nums"
      aria-label={now ? `Local time in ${city} ${now.time}` : undefined}
    >
      <span>{now?.time ?? "--:--"}</span>
      <span className="text-[0.85em] text-mist-2">{now?.zone ?? ""}</span>
    </span>
  );
}
