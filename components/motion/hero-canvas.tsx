"use client";

import { useEffect, useRef } from "react";

/**
 * A field of small cells that ripple like a living spreadsheet and glow
 * around the pointer. Pauses when off screen or in a background tab, and
 * draws a single still frame when the user prefers reduced motion.
 */
export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const GAP = 26;
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      pointer.x += (pointer.tx - pointer.x) * 0.12;
      pointer.y += (pointer.ty - pointer.y) * 0.12;
      const time = t / 1000;

      for (let y = GAP / 2; y < h; y += GAP) {
        for (let x = GAP / 2; x < w; x += GAP) {
          const wave =
            Math.sin(x * 0.012 + time * 0.8) * Math.cos(y * 0.016 - time * 0.6) * 0.5 + 0.5;
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const near = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / 180);
          const size = 1.2 + wave * 1.4 + near * 3;
          if (near > 0.02) {
            ctx.fillStyle = `rgba(134, 214, 170, ${0.15 + near * 0.75})`;
          } else {
            ctx.fillStyle = `rgba(243, 240, 234, ${0.05 + wave * 0.13})`;
          }
          ctx.fillRect(x - size / 2, y - size / 2, size, size);
        }
      }
    };

    const loop = (t: number) => {
      draw(t);
      if (visible && !document.hidden) raf = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (reduced) draw(0);
      else raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.tx = e.clientX - r.left;
      pointer.ty = e.clientY - r.top;
    };
    // Fires when the mouse leaves the window (relatedTarget is null)
    const onLeave = (e: MouseEvent) => {
      if (e.relatedTarget) return;
      pointer.tx = -9999;
      pointer.ty = -9999;
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw(0);
    });
    const onVisibility = () => !document.hidden && visible && start();

    resize();
    start();
    io.observe(canvas);
    ro.observe(canvas);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseout", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseout", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 size-full [mask-image:radial-gradient(ellipse_at_70%_40%,black_20%,transparent_75%)]"
    />
  );
}
