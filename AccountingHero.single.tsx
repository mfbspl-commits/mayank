/**
 * Accounting Hero — single-file component
 * Dependencies: react, framer-motion
 * Usage: import AccountingHero from "./AccountingHero.single";
 */
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

/* ── Scoped CSS (no global/body/font imports) ── */
const HERO_CSS =
  ".acct-hero{--primary:#002cce;--blue:#4d7cff;--blue-light:#6b9aff;--blue-deep:#001a80;--grad-btn:linear-gradient(135deg,#002cce,#1a4cdf 50%,#3366f0);--grad-scene:linear-gradient(145deg,#002cce,#001a80 35%,#0a0a12 65%,#000)}@media (prefers-reduced-motion:reduce){.motion-reduce-off{animation:none!important}.motion-reduce-hide{display:none!important}}@keyframes gridScroll{0%{background-position:0 0}to{background-position:0 52px}}@keyframes ledgerDrift{0%{background-position:0 0}to{background-position:72px 72px}}@keyframes barPulse{0%,to{opacity:.7;transform:scaleY(1)}50%{opacity:1;transform:scaleY(1.12)}}@keyframes lineDraw{0%{opacity:.5;stroke-dashoffset:200}50%{opacity:1;stroke-dashoffset:0}to{opacity:.5;stroke-dashoffset:-200}}@keyframes donutSpin{to{transform:rotate(1turn)}}@keyframes neuralFlow{to{stroke-dashoffset:-160}}@media (prefers-reduced-motion:reduce){.bar-fill,.donut-ring,.grid-floor,.ledger-grid,.line-chart-path,.neural-path{animation:none!important}}.scene-bg{background:radial-gradient(ellipse 95% 75% at 50% -5%,rgba(0,44,206,.42) 0,transparent 55%),radial-gradient(ellipse 55% 45% at 10% 88%,rgba(0,26,128,.38) 0,transparent 50%),radial-gradient(ellipse 55% 45% at 90% 78%,rgba(0,44,206,.22) 0,transparent 50%),linear-gradient(158deg,#002cce,#001a80 28%,#050508 60%,#000)}.grid-floor{animation:gridScroll 28s linear infinite;background-image:linear-gradient(rgba(77,124,255,.04) 1px,transparent 0),linear-gradient(90deg,rgba(77,124,255,.04) 1px,transparent 0);background-size:52px 52px;opacity:.45;transform:perspective(680px) rotateX(58deg) translateY(32%);transform-origin:center 82%}.ledger-grid{animation:ledgerDrift 48s linear infinite;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'%3E%3Cg fill='none' stroke='%234d7cff' stroke-opacity='.04'%3E%3Crect width='64' height='64' x='4' y='4' rx='2'/%3E%3Cpath d='M4 22h64M4 40h64M4 58h64M24 4v64M44 4v64'/%3E%3C/g%3E%3C/svg%3E\");background-size:72px 72px;opacity:.5}.vg-1{background:radial-gradient(circle,rgba(0,80,255,.28) 0,transparent 70%)}.vg-2{background:radial-gradient(circle,rgba(0,26,128,.34) 0,transparent 70%)}.vg-3{background:radial-gradient(circle,rgba(51,102,240,.18) 0,transparent 70%)}.metric-ring:before{border:1px dashed rgba(77,124,255,.12);border-radius:50%;content:\"\";inset:10px;position:absolute}.metric-ring:after{background:var(--blue);border-radius:50%;box-shadow:0 0 12px var(--blue);content:\"\";height:6px;left:50%;margin-left:-3px;position:absolute;top:-3px;width:6px}.geo-hex{clip-path:polygon(50% 0,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)}.neural-path{animation:neuralFlow 26s linear infinite;fill:none;stroke:rgba(77,124,255,.18);stroke-dasharray:4 12;stroke-width:.6}.scene-canvas{height:100%;inset:0;position:absolute;width:100%}@media (max-width:1024px){.geo-lg-hide{display:none!important}}@media (max-width:768px){.holo-md-hide,.metric-ring-outer{display:none!important}}@media (max-width:480px){.geo-sm-hide{display:none!important}}@media (prefers-reduced-motion:reduce){.scene-canvas{display:none!important}}.holo-glass{background:linear-gradient(135deg,rgba(0,26,128,.34),rgba(0,0,0,.48));border:1px solid rgba(77,124,255,.2);box-shadow:0 0 28px rgba(0,60,200,.14),inset 0 1px 0 hsla(0,0%,100%,.06)}.float-icon svg{display:block;height:26px;width:26px}.bar-fill{animation:barPulse 2.4s ease-in-out infinite;animation-delay:calc(var(--i)*.18s);background:linear-gradient(180deg,var(--blue-light),var(--primary));border-radius:2px 2px 0 0;flex:1;opacity:.8}.line-chart-path{animation:lineDraw 3.5s ease-in-out infinite;fill:none;stroke:url(#acctLineGrad);stroke-dasharray:200;stroke-width:1.5}.donut-ring{animation:donutSpin 14s linear infinite;background:conic-gradient(var(--blue) 0 72%,rgba(77,124,255,.15) 72% 100%);border-radius:50%;height:36px;position:relative;width:36px}.donut-ring:after{background:rgba(8,16,40,.9);border-radius:50%;content:\"\";inset:6px;position:absolute}.acct-hero{position:relative;display:flex;min-height:100svh;align-items:center;justify-content:center;overflow:hidden;background:var(--grad-scene);contain:layout paint}.acct-hero *,.acct-hero *::before,.acct-hero *::after{box-sizing:border-box}.ah-abs{position:absolute;inset:0}.ah-cam{position:absolute;inset:0}.ah-ring-wrap{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:1}.ah-metric-ring{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;border:1px solid rgba(77,124,255,.1)}.ah-content{position:relative;z-index:20;text-align:center;max-width:860px;padding:0 24px;margin:0 20px}.ah-title{font-size:clamp(1.8rem,4.1vw,3rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;color:var(--primary);margin:0 0 40px;text-shadow:none}.ah-title span{display:block}.ah-sub{font-size:clamp(.95rem,1.8vw,1.12rem);color:var(--primary);line-height:1.65;max-width:560px;margin:0 auto 36px;opacity:.88;text-shadow:none}.ah-cta{display:inline-flex;align-items:center;gap:10px;padding:16px 34px;font-size:.95rem;font-weight:600;color:var(--primary);text-decoration:none;border-radius:999px;background:#fff;border:1px solid #fff;box-shadow:0 6px 28px rgba(0,0,0,.2)}.ah-cta svg{width:18px;height:18px}.ah-holo-inner{position:relative;z-index:8;overflow:hidden;border-radius:10px;padding:10px;backdrop-filter:blur(14px)}.ah-float{display:flex;align-items:center;justify-content:center;width:50px;height:50px;color:rgba(147,180,255,.6)}.ah-bars{display:flex;align-items:flex-end;gap:4px;height:36px;width:56px}.ah-geo{position:absolute;border:1px solid rgba(77,124,255,.18);background:rgba(77,124,255,.03);backdrop-filter:blur(4px)}.ah-glow{position:absolute;border-radius:50%;filter:blur(85px);mix-blend-mode:screen}.ah-glow-1{width:44vw;height:44vw;top:-8%;left:14%}.ah-glow-2{width:36vw;height:36vw;bottom:-4%;right:8%}.ah-glow-3{width:28vw;height:28vw;top:42%;left:2%}.ah-geo-1{width:64px;height:64px;top:8%;left:clamp(20px,5vw,72px)}.ah-geo-2{width:48px;height:48px;bottom:10%;right:clamp(20px,5vw,72px)}.ah-geo-3{width:54px;height:54px;top:8%;right:clamp(20px,5vw,72px)}.ah-neural{pointer-events:none;position:absolute;left:3%;top:3%;width:94%;height:94%;z-index:6;opacity:.26}.ah-canvas-wrap{pointer-events:none;position:absolute;inset:0}@media(max-width:1024px){.ah-hide-lg{display:none!important}}@media(max-width:768px){.ah-hide-md{display:none!important}.ah-content{padding:0 16px}.ah-ring-outer{display:none!important}}@media(max-width:480px){.ah-hide-sm{display:none!important}}";

function HeroStyles() {
  return <style dangerouslySetInnerHTML={{ __html: HERO_CSS }} />;
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return reduced;
}

function usePageVisible() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const onVis = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);
  return visible;
}

function useHeroParallax(enabled: boolean) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 100, damping: 24 });
  const springY = useSpring(my, { stiffness: 100, damping: 24 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["2.5deg", "-2.5deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-3deg", "3deg"]);
  const rafRef = useRef(0);
  const onMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!enabled) return;
      cancelAnimationFrame(rafRef.current);
      const { clientX, clientY, currentTarget } = e;
      rafRef.current = requestAnimationFrame(() => {
        const r = currentTarget.getBoundingClientRect();
        mx.set((clientX - r.left) / r.width - 0.5);
        my.set((clientY - r.top) / r.height - 0.5);
      });
    },
    [enabled, mx, my]
  );
  const onLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    mx.set(0);
    my.set(0);
  }, [mx, my]);
  return { rotateX, rotateY, springX, springY, onMove, onLeave };
}

function usePanelParallax(
  springX: MotionValue<number>,
  springY: MotionValue<number>,
  depth: number
) {
  const x = useTransform(springX, (v) => Math.max(-16, Math.min(16, v * depth * 56)));
  const y = useTransform(springY, (v) => Math.max(-12, Math.min(12, v * depth * 56)));
  return { x, y };
}

function clearRadius(w: number, h: number) {
  return Math.min(w, h) * 0.24;
}

function inClearZone(x: number, y: number, w: number, h: number, pad?: number) {
  const cx = w * 0.5;
  const cy = h * 0.5;
  return Math.hypot(x - cx, y - cy) < (pad ?? clearRadius(w, h));
}

type CanvasEngine = {
  init: (w: number, h: number) => void;
  draw: (w: number, h: number) => void;
};

function createNetworkEngine(ctx: CanvasRenderingContext2D): CanvasEngine {
  let nodes: Array<{ x: number; y: number; r: number; pulse: number; tier: number }> = [];
  let edges: Array<{ i: number; j: number; phase: number }> = [];
  let packets: Array<{
    edge: { i: number; j: number };
    t: number;
    speed: number;
    size: number;
    hue: number;
  }> = [];
  let netT = 0;

  return {
    init(w, h) {
      const cx = w * 0.5;
      const cy = h * 0.5;
      const clearR = clearRadius(w, h);
      const padX = Math.max(48, w * 0.04);
      const padY = Math.max(40, h * 0.04);
      const count = Math.min(32, Math.floor(w / 34));
      nodes = [];

      for (let i = 0; i < count; i++) {
        let x: number;
        let y: number;
        let tries = 0;
        do {
          x = padX + Math.random() * (w - padX * 2);
          y = padY + Math.random() * (h - padY * 2);
          tries++;
        } while (Math.hypot(x - cx, y - cy) < clearR && tries < 24);

        nodes.push({
          x,
          y,
          r: 1.6 + Math.random() * 1.8,
          pulse: Math.random() * Math.PI * 2,
          tier: Math.random() < 0.15 ? 2 : 1,
        });
      }

      edges = [];
      for (let i = 0; i < nodes.length; i++) {
        const dists = nodes
          .map((n, j) => ({ j, d: Math.hypot(nodes[i].x - n.x, nodes[i].y - n.y) }))
          .filter((o) => o.j !== i)
          .sort((a, b) => a.d - b.d);

        for (let k = 0; k < Math.min(2, dists.length); k++) {
          const j = dists[k].j;
          if (dists[k].d > w * 0.3) continue;
          const midX = (nodes[i].x + nodes[j].x) / 2;
          const midY = (nodes[i].y + nodes[j].y) / 2;
          if (Math.hypot(midX - cx, midY - cy) < clearR * 0.85) continue;
          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          if (!edges.find((e) => `${Math.min(e.i, e.j)}-${Math.max(e.i, e.j)}` === key)) {
            edges.push({ i, j, phase: Math.random() });
          }
        }
      }

      packets = edges.slice(0, Math.min(edges.length, 24)).map((e, idx) => ({
        edge: e,
        t: Math.random(),
        speed: 0.0025 + Math.random() * 0.003,
        size: 1.2 + Math.random() * 1.2,
        hue: idx % 4,
      }));
      netT = 0;
    },
    draw(w, h) {
      const cx = w * 0.5;
      const cy = h * 0.5;
      const clearR = clearRadius(w, h);
      ctx.clearRect(0, 0, w, h);
      netT += 0.014;

      edges.forEach((e) => {
        const a = nodes[e.i];
        const b = nodes[e.j];
        const midX = (a.x + b.x) / 2;
        const midY = (a.y + b.y) / 2;
        const fade = Math.hypot(midX - cx, midY - cy) < clearR ? 0.12 : 1;
        const alpha = (0.08 + Math.sin(netT * 0.7 + e.phase * 5) * 0.025) * fade;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(77, 124, 255, ${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      });

      const colors = [
        "rgba(77,124,255,",
        "rgba(51,102,240,",
        "rgba(0,80,255,",
        "rgba(147,180,255,",
      ];

      packets.forEach((p) => {
        p.t += p.speed;
        if (p.t > 1) p.t = 0;
        const a = nodes[p.edge.i];
        const b = nodes[p.edge.j];
        const px = a.x + (b.x - a.x) * p.t;
        const py = a.y + (b.y - a.y) * p.t;
        const c = colors[p.hue];
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = c + "0.85)";
        ctx.fill();
      });

      nodes.forEach((n) => {
        const dist = Math.hypot(n.x - cx, n.y - cy);
        const fade = dist < clearR ? (dist / clearR) * 0.25 : 1;
        const glow = 0.35 + Math.sin(netT * 1.1 + n.pulse) * 0.18;
        const col = n.tier === 2 ? "rgba(0, 80, 255," : "rgba(147, 180, 255,";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * (n.tier === 2 ? 1.25 : 1), 0, Math.PI * 2);
        ctx.fillStyle = col + glow * fade + ")";
        ctx.fill();
      });
    },
  };
}

function createParticlesEngine(ctx: CanvasRenderingContext2D): CanvasEngine {
  let particles: Array<{ x: number; y: number; vx: number; vy: number; r: number; a: number }> =
    [];

  return {
    init(w, h) {
      const n = Math.min(72, Math.floor((w * h) / 18000));
      particles = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        r: 0.3 + Math.random() * 1.1,
        a: Math.random() * Math.PI * 2,
      }));
    },
    draw(w, h) {
      ctx.clearRect(0, 0, w, h);
      const cr = clearRadius(w, h);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        const dist = Math.hypot(p.x - w * 0.5, p.y - h * 0.5);
        const fade = dist < cr ? (dist / cr) * 0.16 : 0.4 + Math.sin(p.a) * 0.22;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${fade * 0.32})`;
        ctx.fill();
        p.a += 0.014;
      });
    },
  };
}

const LAYERS = [
  { id: "network", z: 2, factory: createNetworkEngine },
  { id: "particles", z: 3, factory: createParticlesEngine },
] as const;

function HeroCanvas({ reduced, active }: { reduced: boolean; active: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);

  useEffect(() => {
    if (reduced || !active) return;
    const container = containerRef.current;
    if (!container) return;

    const engines = canvasRefs.current.map((canvas, i) => {
      if (!canvas) return null;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;
      return LAYERS[i].factory(ctx);
    });

    let raf = 0;
    let w = 0;
    let h = 0;
    let frame = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      const dpr = Math.min(devicePixelRatio, 1.5);
      canvasRefs.current.forEach((canvas) => {
        if (!canvas) return;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        canvas.getContext("2d")?.setTransform(dpr, 0, 0, dpr, 0, 0);
      });
      engines.forEach((e) => e?.init(w, h));
    };

    const tick = () => {
      frame++;
      if (frame % 2 === 0) engines.forEach((e) => e?.draw(w, h));
      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduced, active]);

  if (reduced) return null;
  return (
    <div ref={containerRef} className="ah-canvas-wrap">
      {LAYERS.map((layer, i) => (
        <canvas
          key={layer.id}
          ref={(el) => {
            canvasRefs.current[i] = el;
          }}
          className="scene-canvas motion-reduce-hide"
          style={{ zIndex: layer.z }}
          aria-hidden
        />
      ))}
    </div>
  );
}

const NEURAL_PATHS = [
  "M100,180 H420 V500 H100 Z",
  "M1500,180 H1820 V500 H1500 Z",
  "M100,580 H420 V900 H100 Z",
  "M1500,580 H1820 V900 H1500 Z",
  "M100,180 L960,540 L1820,180",
  "M100,900 L960,540 L1820,900",
  "M420,180 V900",
  "M1500,180 V900",
];

const RINGS = [
  { size: "min(82vw,1080px)", dur: 56, opacity: 0.28, reverse: false, hide: "ah-ring-outer" },
  { size: "min(62vw,820px)", dur: 40, opacity: 0.42, reverse: true, hide: "" },
  { size: "min(44vw,580px)", dur: 28, opacity: 0.55, reverse: false, hide: "" },
];

const BAR_HEIGHTS = ["50%", "85%", "40%", "75%", "60%"];

type PanelDef = {
  id: string;
  top: string;
  left?: string;
  right?: string;
  hide?: string;
  dur: number;
  delay: number;
  depth: number;
  content: React.ReactNode;
};

const PANELS: PanelDef[] = [
  {
    id: "line",
    top: "6%",
    left: "clamp(100px,20vw,260px)",
    dur: 20,
    delay: 0,
    depth: 0.07,
    content: (
      <svg width={56} height={32} viewBox="0 0 160 50" aria-hidden>
        <defs>
          <linearGradient id="acctLineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#002CCE" />
            <stop offset="100%" stopColor="#4d7cff" />
          </linearGradient>
        </defs>
        <path
          className="line-chart-path"
          d="M0,42 L25,38 L50,30 L75,22 L100,16 L125,10 L160,6"
        />
      </svg>
    ),
  },
  {
    id: "ledger",
    top: "14%",
    right: "clamp(52px,11vw,140px)",
    dur: 22,
    delay: -3,
    depth: 0.06,
    content: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
  },
  {
    id: "check",
    top: "24%",
    left: "clamp(48px,10vw,130px)",
    hide: "ah-hide-md",
    dur: 24,
    delay: -5,
    depth: 0.05,
    content: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    ),
  },
  {
    id: "bars",
    top: "34%",
    right: "clamp(100px,20vw,260px)",
    hide: "ah-hide-md",
    dur: 21,
    delay: -7,
    depth: 0.045,
    content: (
      <div className="ah-bars">
        {BAR_HEIGHTS.map((h, i) => (
          <div key={i} className="bar-fill" style={{ height: h, ["--i" as string]: i }} />
        ))}
      </div>
    ),
  },
  {
    id: "invoice",
    top: "44%",
    left: "clamp(105px,21vw,270px)",
    hide: "ah-hide-lg",
    dur: 23,
    delay: -4,
    depth: 0.055,
    content: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
    ),
  },
  {
    id: "donut",
    top: "54%",
    right: "clamp(44px,9vw,120px)",
    hide: "ah-hide-lg",
    dur: 19,
    delay: -8,
    depth: 0.06,
    content: <div className="donut-ring" aria-hidden />,
  },
  {
    id: "bank",
    top: "64%",
    left: "clamp(52px,11vw,140px)",
    hide: "ah-hide-lg",
    dur: 22,
    delay: -2,
    depth: 0.065,
    content: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-5-9L2 6v2h19V6l-9-5z" />
      </svg>
    ),
  },
  {
    id: "audit",
    top: "78%",
    left: "clamp(100px,20vw,260px)",
    hide: "ah-hide-md",
    dur: 21,
    delay: -9,
    depth: 0.055,
    content: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
      </svg>
    ),
  },
];

function HoloPanel({
  panel,
  px,
  py,
  animate,
}: {
  panel: PanelDef;
  px: MotionValue<number>;
  py: MotionValue<number>;
  animate: boolean;
}) {
  const { x, y } = usePanelParallax(px, py, panel.depth);
  return (
    <motion.div
      className={panel.hide ?? ""}
      style={{ position: "absolute", top: panel.top, left: panel.left, right: panel.right, x, y }}
    >
      <motion.div
        className="holo-glass ah-holo-inner"
        animate={animate ? { y: [0, -9, 0] } : undefined}
        transition={
          animate
            ? {
                duration: panel.dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: panel.delay < 0 ? panel.dur + panel.delay : panel.delay,
              }
            : undefined
        }
      >
        <div className="ah-float float-icon">{panel.content}</div>
      </motion.div>
    </motion.div>
  );
}

function ParallaxGlow({
  cls,
  depth,
  px,
  py,
}: {
  cls: string;
  depth: number;
  px: MotionValue<number>;
  py: MotionValue<number>;
}) {
  const { x, y } = usePanelParallax(px, py, depth);
  return <motion.div className={"ah-glow " + cls} style={{ x, y, opacity: 0.72 }} />;
}

function ParallaxGeo({
  cls,
  dur,
  delay,
  px,
  py,
  hide,
  animate,
}: {
  cls: string;
  dur: number;
  delay: number;
  px: MotionValue<number>;
  py: MotionValue<number>;
  hide?: string;
  animate: boolean;
}) {
  const { x, y } = usePanelParallax(px, py, 0.04);
  return (
    <motion.div style={{ position: "absolute", x, y }} className={hide}>
      <motion.div
        className={"geo-hex geo-struct ah-geo " + cls}
        animate={animate ? { y: [0, -10, 0], opacity: [0.5, 0.9, 0.5] } : undefined}
        transition={
          animate
            ? {
                duration: dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay < 0 ? dur + delay : delay,
              }
            : undefined
        }
      />
    </motion.div>
  );
}

export interface AccountingHeroProps {
  heading: string;
  subheading?: string;
  buttonText: string;
}

export default function AccountingHero({
  heading,
  subheading,
  buttonText,
}: AccountingHeroProps) {
  const reduced = useReducedMotion();
  const pageVisible = usePageVisible();
  const heroRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(true);
  const motionActive = !reduced && pageVisible && inView;
  const { rotateX, rotateY, springX, springY, onMove, onLeave } = useHeroParallax(motionActive);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "80px",
      threshold: 0.05,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <HeroStyles />
      <header
        ref={heroRef}
        className="acct-hero"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div className="ah-cam">
          <div className="scene-bg ah-abs" />
          <div className="grid-floor motion-reduce-off ah-abs" />
          <div className="ledger-grid motion-reduce-off ah-abs" />
          <ParallaxGlow cls="ah-glow-1 vg-1" depth={0.018} px={springX} py={springY} />
          <ParallaxGlow cls="ah-glow-2 vg-2" depth={0.024} px={springX} py={springY} />
          <ParallaxGlow cls="ah-glow-3 vg-3" depth={0.02} px={springX} py={springY} />
          <div className="ah-ring-wrap">
            {RINGS.map((r) => (
              <motion.div
                key={r.size}
                className={"ah-metric-ring metric-ring " + r.hide}
                style={{ width: r.size, height: r.size, opacity: r.opacity }}
                animate={motionActive ? { rotate: r.reverse ? -360 : 360 } : undefined}
                transition={
                  motionActive
                    ? { duration: r.dur, repeat: Infinity, ease: "linear" }
                    : undefined
                }
              />
            ))}
          </div>
          <ParallaxGeo
            cls="ah-geo-1"
            dur={24}
            delay={0}
            px={springX}
            py={springY}
            hide="ah-hide-sm ah-hide-lg"
            animate={motionActive}
          />
          <ParallaxGeo
            cls="ah-geo-2"
            dur={21}
            delay={-4}
            px={springX}
            py={springY}
            hide="ah-hide-sm"
            animate={motionActive}
          />
          <ParallaxGeo
            cls="ah-geo-3"
            dur={26}
            delay={-8}
            px={springX}
            py={springY}
            hide="ah-hide-lg"
            animate={motionActive}
          />
          <HeroCanvas reduced={reduced} active={motionActive} />
          <svg
            className="ah-neural"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            {NEURAL_PATHS.map((d) => (
              <path key={d} d={d} className="neural-path" />
            ))}
          </svg>
          {PANELS.map((p) => (
            <HoloPanel
              key={p.id}
              panel={p}
              px={springX}
              py={springY}
              animate={motionActive}
            />
          ))}
        </div>
        <motion.div
          className="ah-content"
          style={{
            rotateX: motionActive ? rotateX : 0,
            rotateY: motionActive ? rotateY : 0,
            transformPerspective: 1200,
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="ah-title">
            <span>{heading}</span>
          </h1>
          {subheading ? <p className="ah-sub">{subheading}</p> : null}
          <motion.a
            href="#contact-section"
            className="ah-cta"
            whileHover={motionActive ? { y: -2 } : undefined}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
          >
            {buttonText}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </header>
    </>
  );
}
