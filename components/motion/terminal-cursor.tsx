"use client";

import { useEffect, useRef } from "react";

// Characters that pop out on click
const CHARS = [";", "{", "}", "<", ">", "/", "=", "(", ")", "$", "#"];
const INTERACTIVE = "a, button, summary, [role='button']";

// Lines the little terminal types out, one after another
const LINES = [
  "php artisan serve",
  'git commit -m "ship it"',
  "npm run build",
  "return $solution;",
  "deploy --prod",
];

// Typing rhythm (ms)
const TYPE_MS = 85; // per character typed
const ERASE_MS = 35; // per character erased
const HOLD_MS = 1400; // pause on a finished line

// Show the keyboard under the screen? Set to true to bring it back.
const SHOW_KEYBOARD = false;

// Laptop size (keep in sync with .terminal-screen / .terminal-keyboard in globals.css)
const LAPTOP_W = 96;
const LAPTOP_H = SHOW_KEYBOARD ? 92 : 58;

/**
 * Coding cursor: a mini laptop follows the mouse and keeps typing code onto
 * its screen; each typed character lights up a key on its keyboard. Over
 * links and buttons [ brackets ] wrap the element, and each click pops out a
 * code character.
 * Mouse only: does nothing on touch devices or with prefers-reduced-motion.
 */
export function TerminalCursor() {
  const caretRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const caret = caretRef.current;
    const frame = frameRef.current;
    const output = outputRef.current;
    if (!caret || !frame || !output) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const keys = Array.from(caret.querySelectorAll<SVGRectElement>(".kb-key"));
    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let shown = false;
    let target: Element | null = null;
    let raf = 0;

    // Follow the pointer with a slight glide, sitting below-right of the arrow
    const loop = () => {
      cx += (x - cx) * 0.25;
      cy += (y - cy) * 0.25;
      caret.style.transform = `translate3d(${cx + 16}px, ${cy + 18}px, 0)`;

      if (target) {
        const r = target.getBoundingClientRect();
        frame.style.transform = `translate3d(${r.left - 8}px, ${r.top - 4}px, 0)`;
        frame.style.width = `${r.width + 16}px`;
        frame.style.height = `${r.height + 8}px`;
      }
      raf = requestAnimationFrame(loop);
    };

    // Light up one random key, like a keystroke
    const tapKey = () => {
      if (keys.length === 0) return; // keyboard turned off
      const key = keys[Math.floor(Math.random() * keys.length)];
      key.classList.remove("kb-hit");
      void key.getBoundingClientRect(); // restart the animation
      key.classList.add("kb-hit");
    };

    // Typewriter: type a line, hold, erase it, move to the next one
    let line = 0;
    let length = 0;
    let erasing = false;
    let timer = 0;
    let typing = false;
    const type = () => {
      const text = LINES[line];
      if (!erasing) {
        length += 1;
        output.textContent = text.slice(0, length);
        if (text[length - 1] !== " ") tapKey();
        if (length === text.length) {
          erasing = true;
          timer = window.setTimeout(type, HOLD_MS);
          return;
        }
        timer = window.setTimeout(type, TYPE_MS + Math.random() * 60);
      } else {
        length -= 1;
        output.textContent = text.slice(0, length);
        if (length === 0) {
          erasing = false;
          line = (line + 1) % LINES.length;
        }
        timer = window.setTimeout(type, ERASE_MS);
      }
    };

    const setTarget = (next: Element | null) => {
      if (next === target) return;
      if (next && !target) {
        // Start the brackets at the keyboard so they visibly stretch open
        frame.style.transition = "none";
        frame.style.transform = `translate3d(${cx + 16}px, ${cy + 18}px, 0)`;
        frame.style.width = `${LAPTOP_W}px`;
        frame.style.height = `${LAPTOP_H}px`;
        void frame.offsetWidth; // apply the start position before animating
        frame.style.transition = "";
      }
      target = next;
      frame.dataset.visible = next ? "true" : "false";
      caret.dataset.hidden = next ? "true" : "false";
    };

    // Typing runs the whole time the laptop is on screen
    const startTyping = () => {
      if (typing) return;
      typing = true;
      timer = window.setTimeout(type, 300);
    };
    const stopTyping = () => {
      typing = false;
      window.clearTimeout(timer);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      if (!shown) {
        shown = true;
        cx = x;
        cy = y;
        caret.dataset.visible = "true";
        startTyping();
      }
      setTarget((e.target as Element | null)?.closest?.(INTERACTIVE) ?? null);
    };

    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      // Press the keyboard down, then let it bounce back
      caret.dataset.pressed = "true";
      window.setTimeout(() => (caret.dataset.pressed = "false"), 160);
      tapKey();

      const char = document.createElement("span");
      char.className = "terminal-char";
      char.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
      char.style.left = `${e.clientX + 18}px`;
      char.style.top = `${e.clientY + 12}px`;
      char.setAttribute("aria-hidden", "true");
      char.addEventListener("animationend", () => char.remove());
      document.body.appendChild(char);
    };

    // Hide when the mouse leaves the window
    const onOut = (e: MouseEvent) => {
      if (e.relatedTarget) return;
      shown = false;
      caret.dataset.visible = "false";
      stopTyping();
      setTarget(null);
    };

    raf = requestAnimationFrame(loop);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={frameRef} aria-hidden="true" className="terminal-frame" />
      <div ref={caretRef} aria-hidden="true" className="terminal-caret">
        {/* Mini laptop: typed code shows on the screen */}
        <div className="terminal-screen">
          <span className="terminal-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="terminal-output">
            <span className="terminal-prompt">&gt; </span>
            <span ref={outputRef} />
          </span>
        </div>
        {SHOW_KEYBOARD && <KeyboardDeck />}
      </div>
    </>
  );
}

// Laptop keyboard layout: each row lists key widths in "key units" (15 units per row)
const ROWS: { h: number; keys: number[] }[] = [
  { h: 2.6, keys: Array(15).fill(1) }, // slim function row
  { h: 4.8, keys: [...Array(13).fill(1), 2] }, // numbers + delete
  { h: 4.8, keys: [1.5, ...Array(12).fill(1), 1.5] }, // tab row
  { h: 4.8, keys: [1.75, ...Array(11).fill(1), 2.25] }, // caps row
  { h: 4.8, keys: [2.25, ...Array(10).fill(1), 2.75] }, // shift row
  { h: 4.8, keys: [1, 1, 1, 1.25, 5.5, 1.25, 1, 1, 1, 1] }, // modifiers, space bar, arrows
];

// Deck geometry in a 100 x 56 viewBox
const DECK = { left: 6, top: 4, width: 88, gap: 0.8 };
const UNIT = DECK.width / 15;

// Precompute every key rectangle: [x, y, width, height]
const KEYS: [number, number, number, number][] = (() => {
  const rects: [number, number, number, number][] = [];
  let y = DECK.top;
  for (const row of ROWS) {
    let x = DECK.left;
    for (const units of row.keys) {
      rects.push([x + DECK.gap / 2, y, units * UNIT - DECK.gap, row.h]);
      x += units * UNIT;
    }
    y += row.h + DECK.gap;
  }
  return rects;
})();
const KEYS_BOTTOM = KEYS[KEYS.length - 1][1] + KEYS[KEYS.length - 1][3];

/**
 * The laptop deck: silver aluminium body, black keys in a real laptop layout
 * and a wide trackpad. Keys light up when the typewriter "presses" them.
 */
function KeyboardDeck() {
  return (
    <svg viewBox="0 0 100 56" className="terminal-keyboard">
      <defs>
        <linearGradient id="deck-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e4e5e8" />
          <stop offset="1" stopColor="#b7b9be" />
        </linearGradient>
      </defs>
      <rect x="0.5" y="0.5" width="99" height="55" rx="3" fill="url(#deck-metal)" className="kb-body" />
      {KEYS.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="0.7" className="kb-key" />
      ))}
      {/* Trackpad */}
      <rect x="32" y={KEYS_BOTTOM + 3} width="36" height={52 - KEYS_BOTTOM - 3} rx="1.6" className="kb-trackpad" />
    </svg>
  );
}
