"use client";

import { memo, useCallback, useEffect, useRef, type CSSProperties } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

const HOLO_ITEMS = [
  { id: "1", side: "left" as const, top: "7%", inset: "clamp(16px,3.5vw,48px)", delay: 0, type: "icon" as const, path: "M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-3h-4v-2h6v-2h-4V8h7z" },
  { id: "2", side: "right" as const, top: "17%", inset: "clamp(24px,6vw,88px)", delay: 0.1, type: "line" as const },
  { id: "3", side: "left" as const, top: "28%", inset: "clamp(24px,6vw,88px)", delay: 0.2, type: "icon" as const, path: "M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7zM9 21h6v-1H9v1z" },
  { id: "4", side: "right" as const, top: "38%", inset: "clamp(16px,3.5vw,48px)", delay: 0.3, type: "icon" as const, path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" },
  { id: "5", side: "left" as const, top: "50%", inset: "clamp(16px,3.5vw,48px)", delay: 0.15, type: "donut" as const },
  { id: "6", side: "right" as const, top: "58%", inset: "clamp(24px,6vw,88px)", delay: 0.25, type: "bars" as const },
  { id: "7", side: "left" as const, top: "70%", inset: "clamp(24px,6vw,88px)", delay: 0.35, type: "icon" as const, path: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" },
  { id: "8", side: "right" as const, top: "78%", inset: "clamp(16px,3.5vw,48px)", delay: 0.2, type: "icon" as const, path: "M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" },
  { id: "9", side: "left" as const, top: "86%", inset: "clamp(16px,3.5vw,48px)", delay: 0.4, type: "icon" as const, path: "M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.96 8.96 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.36-.9-4.51-2.47-6.11zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" },
  { id: "10", side: "right" as const, top: "90%", inset: "clamp(24px,6vw,88px)", delay: 0.45, type: "icon" as const, path: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" },
] as const;

const BAR_HEIGHTS = [55, 80, 45, 70] as const;
const BRAND_BLUE = "#002CCE";

const CSS = `
.ins-page { color: #fff; }
.ins-hero {
  position: relative; display: flex; min-height: 100svh; align-items: center; justify-content: center;
  overflow: hidden;
  background: linear-gradient(160deg, #002CCE 0%, #001a80 30%, #050508 62%, #000 100%);
}
.ins-hero-inner { position: absolute; inset: 0; }
.ins-glow-top { position: absolute; inset: 0; background: radial-gradient(ellipse 90% 70% at 50% 0%, rgba(0,44,206,0.4), transparent 55%); }
.ins-blob { position: absolute; border-radius: 50%; filter: blur(80px); will-change: transform; }
.ins-blob--l { left: -8%; top: 42%; width: 28vw; height: 28vw; background: radial-gradient(circle, rgba(51,102,240,0.2), transparent 70%); }
.ins-blob--t { top: -8%; left: 15%; width: 45vw; height: 45vw; background: radial-gradient(circle, rgba(0,80,255,0.3), transparent 70%); }
.ins-blob--r { bottom: -5%; right: 8%; width: 38vw; height: 38vw; background: radial-gradient(circle, rgba(0,26,128,0.35), transparent 70%); }
.ins-rings { position: absolute; left: 50%; top: 50%; z-index: 1; transform: translate(-50%, -50%); }
.ins-orbit-ring { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); opacity: 0.5; }
.ins-orbit-ring::before {
  content: ""; position: absolute; inset: -1px; border-radius: 50%;
  border: 1px dashed rgba(255,255,255,0.15);
}
.ins-orbit-ring::after {
  content: ""; position: absolute; left: 50%; top: -4px; width: 8px; height: 8px; margin-left: -4px;
  border-radius: 50%; background: #fff;
  box-shadow: 0 0 16px rgba(255,255,255,0.8), 0 0 32px rgba(255,255,255,0.4);
}
.ins-orbit-ring--dashed { position: absolute; inset: -1px; border-radius: 50%; border: 1px dashed rgba(255,255,255,0.15); }
.ins-canvas { pointer-events: none; position: absolute; inset: 0; z-index: 2; width: 100%; height: 100%; }
.ins-neural { pointer-events: none; position: absolute; left: 4%; top: 4%; z-index: 5; width: 92%; height: 92%; opacity: 0.4; }
.ins-neural path { animation: insNeuralFlow 25s linear infinite; }
.ins-holo {
  position: absolute; z-index: 6; display: none;
  border-radius: 14px; border: 1px solid rgba(255,255,255,0.2); padding: 10px;
  backdrop-filter: blur(24px);
  background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(0,0,0,0.45));
  box-shadow: 0 0 30px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.06);
}
.ins-holo-inner { display: flex; width: 52px; height: 52px; align-items: center; justify-content: center; }
.ins-holo-icon { width: 28px; height: 28px; color: rgba(255,255,255,0.7); fill: currentColor; }
.ins-holo-bars { display: flex; width: 56px; height: 36px; align-items: flex-end; gap: 4px; }
.ins-holo-bar { flex: 1; border-radius: 2px 2px 0 0; background: linear-gradient(to top, rgba(255,255,255,0.35), rgba(255,255,255,0.85)); }
.ins-holo-donut { position: relative; width: 36px; height: 36px; border-radius: 50%; background: conic-gradient(rgba(255,255,255,0.85) 0% 72%, rgba(255,255,255,0.15) 72% 100%); }
.ins-holo-donut-hole { position: absolute; inset: 6px; border-radius: 50%; background: #081028; }
.ins-content {
  position: relative; z-index: 20; margin: 0 20px; width: min(100%, 1040px); max-width: 1040px;
  padding: 0 24px; text-align: center;
  transform-style: preserve-3d; perspective: 1400px;
}
.ins-badge {
  display: inline-flex; align-items: center; gap: 8px; margin-bottom: 24px;
  border-radius: 999px; border: 1px solid rgba(255,255,255,0.35);
  background: rgba(255,255,255,0.08); padding: 6px 14px;
  font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #fff;
}
.ins-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #fff; box-shadow: 0 0 12px rgba(255,255,255,0.9); }
.ins-title {
  font-size: clamp(1.85rem, 4.2vw, 3.1rem); font-weight: 800; line-height: 1.15; letter-spacing: -0.02em;
  color: #fff; text-shadow: 0 2px 24px rgba(0,0,0,0.6);
}
.ins-title em { color: #fff; font-style: normal; }
.ins-grad-text {
  display: block; margin-top: 0.35em; color: #fff;
  text-shadow: 0 0 40px rgba(255,255,255,0.25);
}
.ins-sub {
  margin: 40px auto 32px; max-width: 680px;
  font-size: clamp(0.95rem, 1.8vw, 1.15rem); line-height: 1.6; color: #fff;
}
.ins-cta {
  position: relative; display: inline-flex; align-items: center; gap: 10px; overflow: hidden;
  border-radius: 999px; border: none;
  background: #fff; padding: 16px 32px; text-decoration: none;
  font-size: 0.95rem; font-weight: 600; color: ${BRAND_BLUE};
  box-shadow: 0 4px 24px rgba(0,44,206,0.25);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.ins-cta:hover { box-shadow: 0 8px 32px rgba(0,44,206,0.35); }
.ins-cta svg { color: ${BRAND_BLUE}; }
@keyframes insNeuralFlow { to { stroke-dashoffset: -120; } }
@media (min-width: 768px) {
  .ins-holo { display: block; }
}
@media (prefers-reduced-motion: reduce) {
  .ins-neural path { animation: none; }
  .ins-blob { filter: blur(40px); }
}
`;

const ringSpin = (dur: number, reverse = false) => ({
  rotate: reverse ? [0, -360] : [0, 360],
  transition: { duration: dur, repeat: Infinity, ease: "linear" as const },
});

type HoloItem = (typeof HOLO_ITEMS)[number];

export type InsuranceHeroSectionProps = {
  heading: React.ReactNode;
  subheading: string;
  badgeText?: string;
  ctaText?: string;
  ctaHref?: string;
};

const HoloContent = memo(function HoloContent({ item, reduced }: { item: HoloItem; reduced: boolean }) {
  if (item.type === "line") {
    return (
      <svg style={{ width: 56, height: 32 }} viewBox="0 0 160 50" aria-hidden>
        <motion.path
          d="M0,40 L25,35 L50,28 L75,22 L100,18 L125,12 L160,8"
          fill="none"
          stroke="rgba(255,255,255,0.75)"
          strokeWidth="1.5"
          strokeDasharray="200"
          initial={{ strokeDashoffset: 200 }}
          animate={reduced ? undefined : { strokeDashoffset: [200, 0, -200] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    );
  }

  if (item.type === "bars") {
    return (
      <div className="ins-holo-bars">
        {BAR_HEIGHTS.map((h, i) => (
          <motion.div
            key={i}
            className="ins-holo-bar"
            style={{ height: `${h}%`, transformOrigin: "bottom" }}
            animate={reduced ? undefined : { scaleY: [1, 1.12, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    );
  }

  if (item.type === "donut") {
    return (
      <motion.div
        className="ins-holo-donut"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <div className="ins-holo-donut-hole" />
      </motion.div>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="ins-holo-icon" aria-hidden>
      <path d={item.path} />
    </svg>
  );
});

const NetworkCanvas = memo(function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let w = 0;
    let h = 0;
    let t = 0;
    let raf = 0;
    let visible = true;
    let nodes: { x: number; y: number; p: number }[] = [];
    let edges: { i: number; j: number }[] = [];

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;

      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * devicePixelRatio);
      canvas.height = Math.floor(h * devicePixelRatio);
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      const cx = w / 2;
      const cy = h / 2;
      const clear = Math.min(w, h) * 0.22;
      const pad = Math.max(48, w * 0.05);
      const nodeCount = Math.min(18, Math.floor(w / 55));

      nodes = Array.from({ length: nodeCount }, () => {
        let x = 0;
        let y = 0;
        let n = 0;
        do {
          x = pad + Math.random() * (w - pad * 2);
          y = pad + Math.random() * (h - pad * 2);
          n++;
        } while (Math.hypot(x - cx, y - cy) < clear && n < 20);
        return { x, y, p: Math.random() * 6.28 };
      });

      edges = [];
      nodes.forEach((a, i) =>
        nodes.forEach((b, j) => {
          if (j <= i) return;
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          const mid = Math.hypot((a.x + b.x) / 2 - cx, (a.y + b.y) / 2 - cy);
          if (d < w * 0.3 && mid > clear * 0.85) edges.push({ i, j });
        }),
      );
    };

    const draw = () => {
      if (!visible) {
        raf = requestAnimationFrame(draw);
        return;
      }

      const cx = w / 2;
      const cy = h / 2;
      const clear = Math.min(w, h) * 0.24;

      ctx.clearRect(0, 0, w, h);
      t += 0.012;

      for (let e = 0; e < edges.length; e++) {
        const { i, j } = edges[e];
        const a = nodes[i];
        const b = nodes[j];
        const mid = Math.hypot((a.x + b.x) / 2 - cx, (a.y + b.y) / 2 - cy);
        const fade = mid < clear ? 0.12 : 1;
        ctx.strokeStyle = `rgba(255,255,255,${0.07 * fade})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      for (let n = 0; n < nodes.length; n++) {
        const node = nodes[n];
        const fade = Math.hypot(node.x - cx, node.y - cy) < clear ? 0.2 : 1;
        ctx.fillStyle = `rgba(255,255,255,${(0.35 + Math.sin(t + node.p) * 0.15) * fade})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, 6.28);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      visible = document.visibilityState === "visible";
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && document.visibilityState === "visible";
      },
      { threshold: 0.05 },
    );

    resize();
    draw();
    observer.observe(canvas);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="ins-canvas" aria-hidden />;
});

const InsuranceHero = memo(function InsuranceHero({
  heading,
  subheading,
  badgeText = "Live AI Infrastructure",
  ctaText = "Get AI-led Insurance Support",
  ctaHref = "#",
}: InsuranceHeroSectionProps) {
  const reduced = useReducedMotion() ?? false;
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tiltX = useSpring(useTransform(my, [-0.5, 0.5], [1.5, -1.5]), { stiffness: 120, damping: 24 });
  const tiltY = useSpring(useTransform(mx, [-0.5, 0.5], [-1.5, 1.5]), { stiffness: 120, damping: 24 });

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (reduced) return;
      const r = e.currentTarget.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    },
    [mx, my, reduced],
  );

  const onMouseLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  return (
    <header className="ins-hero" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <div className="ins-hero-inner">
        <div className="ins-glow-top" />
        <div className="ins-blob ins-blob--l" />
        <div className="ins-blob ins-blob--t" />
        <div className="ins-blob ins-blob--r" />

        <div className="ins-rings">
          {[
            { s: "min(82vw,1100px)", d: 55 },
            { s: "min(66vw,880px)", d: 38, rev: true },
            { s: "min(50vw,660px)", d: 28 },
          ].map((r, i) => (
            <motion.div
              key={i}
              className="ins-orbit-ring"
              style={{ width: r.s, height: r.s }}
              animate={reduced ? undefined : ringSpin(r.d, r.rev)}
            >
              <motion.div className="ins-orbit-ring--dashed" animate={reduced ? undefined : ringSpin(r.d, r.rev)} />
            </motion.div>
          ))}
        </div>

        <NetworkCanvas />

        <svg className="ins-neural" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet" aria-hidden>
          {[
            "M160,200 Q560,120 960,280 T1760,200",
            "M160,880 Q640,820 1100,760 T1760,840",
            "M960,80 Q720,540 960,1000",
          ].map((d, i) => (
            <path key={i} d={d} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.6" strokeDasharray="3 12" />
          ))}
        </svg>

        {HOLO_ITEMS.map((item) => (
          <motion.div
            key={item.id}
            className="ins-holo"
            style={{ top: item.top, [item.side]: item.inset } as CSSProperties}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: item.delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="ins-holo-inner"
              animate={reduced ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
            >
              <HoloContent item={item} reduced={reduced} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="ins-content"
        style={reduced ? undefined : { rotateX: tiltX, rotateY: tiltY }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="ins-badge"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <motion.span
            className="ins-badge-dot"
            animate={reduced ? undefined : { scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          {badgeText}
        </motion.div>

        <h1 className="ins-title">{heading}</h1>

        <p className="ins-sub">{subheading}</p>

        <motion.a
          href={ctaHref}
          className="ins-cta"
          whileHover={reduced ? undefined : { y: -2 }}
          whileTap={reduced ? undefined : { scale: 0.98 }}
        >
          {ctaText}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.a>
      </motion.div>
    </header>
  );
});

export default function InsuranceHeroSection({
  heading = (
    <>
      <span style={{ display: "block" }}>
        Outdated Workflows and <em>Policy Errors</em>
      </span>
      <span className="ins-grad-text">Slowing You Down?</span>
    </>
  ),
  subheading = "Seek Our AI-led Insurance Support — enterprise intelligence powering real-time automation across your global operations.",
  badgeText,
  ctaText,
  ctaHref,
}: Partial<InsuranceHeroSectionProps> = {}) {
  return (
    <div className="ins-page">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <InsuranceHero
        heading={heading}
        subheading={subheading}
        badgeText={badgeText}
        ctaText={ctaText}
        ctaHref={ctaHref}
      />
    </div>
  );
}
