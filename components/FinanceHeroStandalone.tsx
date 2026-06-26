"use client";

import { useEffect, useRef, type CSSProperties } from "react";

const H = [
  { s: "left" as const, t: "10%", i: "clamp(16px,3.5vw,48px)", d: 0, k: "d" as const },
  { s: "left" as const, t: "40%", i: "clamp(24px,5.5vw,72px)", d: 1.4, k: "b" as const },
  { s: "left" as const, t: "68%", i: "clamp(16px,3.5vw,48px)", d: 2.6, k: "k" as const },
  { s: "right" as const, t: "16%", i: "clamp(24px,5.5vw,72px)", d: 0.7, k: "l" as const },
  { s: "right" as const, t: "46%", i: "clamp(16px,3.5vw,48px)", d: 2, k: "n" as const },
  { s: "right" as const, t: "76%", i: "clamp(24px,5.5vw,72px)", d: 3.2, k: "c" as const },
];

const B = [50, 85, 40, 75];
const R = [
  { s: "min(78vw,1000px)", d: 56 },
  { s: "min(52vw,700px)", d: 38, r: true },
];

const C = `.fh{--p:#002cce;--b:#4d7cff;--l:#6b9aff;--d:#001a80}@keyframes fS{to{transform:rotate(1turn)}}@keyframes fP{0%,to{opacity:.5;transform:scale(1)}50%{opacity:.85;transform:scale(1.04)}}@keyframes fF{0%,to{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes fG{to{background-position:0 52px}}@keyframes fU{0%{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}@keyframes fH{0%,to{transform:translateX(-120%)}50%{transform:translateX(120%)}}@keyframes fC{0%,to{opacity:.55;stroke-dashoffset:120}50%{opacity:.95;stroke-dashoffset:0}}@keyframes fA{0%,to{opacity:.7}50%{opacity:1}}@keyframes fD{0%,to{stroke-dashoffset:90}50%{stroke-dashoffset:0}}@keyframes fB{0%{opacity:0;top:-8%}8%,92%{opacity:.8}to{opacity:0;top:108%}}@media(prefers-reduced-motion:reduce){.fh .fm{animation:none!important}.fh .fc{display:none}}.fh{position:relative;display:flex;min-height:100svh;align-items:center;justify-content:center;overflow:hidden;color:#fff;background:linear-gradient(160deg,var(--p),var(--d) 30%,#050508 62%,#000);contain:layout style paint}.fi{position:absolute;inset:0}.fb{position:absolute;inset:0;background:radial-gradient(ellipse 90% 65% at 50% 0%,rgba(0,44,206,.38),transparent 52%),radial-gradient(ellipse 50% 40% at 12% 88%,rgba(0,26,128,.3),transparent 48%),radial-gradient(ellipse 50% 40% at 88% 78%,rgba(0,44,206,.18),transparent 48%)}.fg{position:absolute;inset:0;opacity:.3;background-image:linear-gradient(rgba(77,124,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(77,124,255,.05) 1px,transparent 1px);background-size:52px 52px;animation:fG 48s linear infinite}.fv{position:absolute;border-radius:50%;filter:blur(60px);mix-blend-mode:screen;pointer-events:none;animation:fP 10s ease-in-out infinite;will-change:transform,opacity}.fv1{width:40vw;height:40vw;top:-8%;left:14%;background:radial-gradient(circle,rgba(0,80,255,.24),transparent 70%)}.fv2{width:32vw;height:32vw;bottom:-6%;right:6%;background:radial-gradient(circle,rgba(0,26,128,.28),transparent 70%);animation-delay:-3s}.frg{position:absolute;left:50%;top:50%;z-index:1;transform:translate(-50%,-50%)}.fr{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);opacity:.45}.fr::before{content:"";position:absolute;inset:-1px;border-radius:50%;border:1px dashed rgba(77,124,255,.18)}.fr::after{content:"";position:absolute;left:50%;top:-3px;width:7px;height:7px;margin-left:-3.5px;border-radius:50%;background:var(--b);box-shadow:0 0 14px var(--b)}.fc{pointer-events:none;position:absolute;inset:0;z-index:2;width:100%;height:100%}.fch{position:absolute;inset:0;z-index:1;opacity:.4;pointer-events:none}.fch .fa{animation:fA 10s ease-in-out infinite;fill:url(#fAf)}.fch .fl{fill:none;stroke:url(#fCg);stroke-width:2;stroke-linecap:round;stroke-dasharray:2800;animation:fC 22s ease-in-out infinite}.fco{position:absolute;inset:0;z-index:2;display:flex;justify-content:space-between;padding:0 clamp(40px,10vw,160px);pointer-events:none}.fcl{width:1px;height:100%;position:relative;background:linear-gradient(180deg,transparent 5%,rgba(77,124,255,.1) 30%,rgba(77,124,255,.1) 70%,transparent 95%)}.fcl::before,.fcl::after{content:"";position:absolute;left:-2px;width:5px;height:28px;border-radius:3px;background:linear-gradient(180deg,transparent,rgba(147,180,255,.65),transparent);animation:fB 10s linear infinite}.fcl::after{animation-delay:-5s}.fw{position:absolute;z-index:6;display:none;border-radius:13px;border:1px solid rgba(77,124,255,.2);padding:9px;width:66px;backdrop-filter:blur(14px);background:linear-gradient(140deg,rgba(0,26,128,.38),rgba(0,0,0,.48));box-shadow:0 4px 28px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.06)}.fwi{display:flex;height:34px;align-items:center;justify-content:center;color:#fff;animation:fF 6s ease-in-out infinite}.fwi svg{width:28px;height:28px;display:block}.fbr{display:flex;width:100%;height:34px;align-items:flex-end;gap:3px}.fbf{flex:1;border-radius:2px 2px 0 0;background:linear-gradient(180deg,var(--l),var(--p));transform-origin:bottom;animation:fP 2.5s ease-in-out infinite}.fdn{width:34px;height:34px;margin:0 auto;border-radius:50%;background:conic-gradient(var(--l) 0 72%,rgba(77,124,255,.15) 72%);animation:fS 14s linear infinite;position:relative}.fdn::after{content:"";position:absolute;inset:8px;border-radius:50%;background:rgba(8,14,36,.92)}.fln{width:100%;height:34px}.fln path{fill:none;stroke:url(#fLg);stroke-width:1.5;stroke-linecap:round;stroke-dasharray:90;animation:fD 3.5s ease-in-out infinite}.fx{position:relative;z-index:20;margin:0 20px;max-width:820px;padding:0 24px;text-align:center;animation:fU .9s cubic-bezier(.22,1,.36,1) .1s both}.fbd{display:inline-flex;align-items:center;gap:8px;margin-bottom:22px;padding:6px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.25);background:rgba(0,44,206,.2);font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#fff}.fdt{width:6px;height:6px;border-radius:50%;background:#fff;box-shadow:0 0 10px rgba(255,255,255,.6);animation:fP 2.5s ease-in-out infinite}.ftt{font-size:clamp(1.8rem,4vw,2.95rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;margin:0 0 28px;color:#fff;text-shadow:0 2px 28px rgba(0,0,0,.55)}.ftt:has(+ .fst){margin-bottom:8px}.ftt span{display:block;color:#fff}.fst{margin:0 0 28px;font-size:clamp(1.8rem,4vw,2.95rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;color:#fff;text-shadow:0 2px 28px rgba(0,0,0,.55)}.fsb{margin:0 auto 32px;max-width:520px;font-size:clamp(.95rem,1.8vw,1.13rem);line-height:1.65;color:#fff}.fcta{position:relative;display:inline-flex;align-items:center;gap:10px;overflow:hidden;padding:15px 34px;border-radius:999px;border:none;background:#fff;color:var(--p);text-decoration:none;font-weight:600;box-shadow:0 4px 24px rgba(0,0,0,.18);transition:transform .25s cubic-bezier(.22,1,.36,1),box-shadow .25s ease}.fcta:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(0,0,0,.22)}.fcta::before{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 30%,rgba(0,44,206,.08) 50%,transparent 70%);animation:fH 5s ease-in-out infinite}.fcta span{position:relative;z-index:1;color:var(--p)}.fcta svg{position:relative;z-index:1;color:var(--p)}@media(min-width:640px){.fw{display:block}}@media(max-width:768px){.fr:first-child{display:none!important}.fv{filter:blur(40px)}}`;

const P = {
  k: <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-5-9L2 6v2h19V6l-9-5z" />,
  c: <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />,
};

export type FinanceHeroStandaloneProps = {
  heading: string | string[];
  subText?: string;
  subheading: string;
  badge?: string;
  ctaText?: string;
  ctaHref?: string;
  headingStyle?: CSSProperties;
  subTextStyle?: CSSProperties;
  subheadingStyle?: CSSProperties;
};

function W({ k, d }: { k: (typeof H)[0]["k"]; d: number }) {
  if (k === "b")
    return (
      <div className="fbr">
        {B.map((h, i) => (
          <div key={i} className="fbf fm" style={{ height: `${h}%`, animationDelay: `${d + i * 0.15}s` }} />
        ))}
      </div>
    );
  if (k === "n") return <div className="fdn fm" style={{ animationDelay: `${d}s` }} />;
  if (k === "l")
    return (
      <svg className="fln" viewBox="0 0 50 34">
        <defs>
          <linearGradient id="fLg" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#002cce" />
            <stop offset="100%" stopColor="#6b9aff" />
          </linearGradient>
        </defs>
        <path className="fm" d="M0,26 L10,22 L20,24 L30,14 L40,18 L50,8" style={{ animationDelay: `${d}s` }} />
      </svg>
    );
  if (k === "d") return <span style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>$</span>;
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      {P[k]}
    </svg>
  );
}

function Cv() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const x = c.getContext("2d", { alpha: true });
    if (!x || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let w = 0,
      h = 0,
      t = 0,
      raf = 0,
      visible = true,
      active = true,
      last = 0;

    type N = { x: number; y: number; p: number };
    type E = { i: number; j: number; ph: number };
    type K = { e: number; u: number; s: number };
    type D = { x: number; y: number; sp: number; len: number; a: number };

    let ns: N[] = [],
      es: E[] = [],
      pk: K[] = [],
      dr: D[] = [];

    const rs = () => {
      const r = c.parentElement?.getBoundingClientRect();
      if (!r) return;
      w = r.width;
      h = r.height;
      const d = Math.min(devicePixelRatio, 1.25);
      c.width = w * d;
      c.height = h * d;
      x.setTransform(d, 0, 0, d, 0, 0);
      const cx = w / 2,
        cy = h / 2,
        cl = Math.min(w, h) * 0.24,
        pd = Math.max(44, w * 0.05);
      ns = [];
      const n = Math.min(24, Math.floor(w / 40));
      for (let i = 0; i < n; i++) {
        let px = 0,
          py = 0,
          q = 0;
        do {
          px = pd + Math.random() * (w - pd * 2);
          py = pd + Math.random() * (h - pd * 2);
          q++;
        } while (Math.hypot(px - cx, py - cy) < cl && q < 20);
        ns.push({ x: px, y: py, p: Math.random() * 6.28 });
      }
      es = [];
      ns.forEach((a, i) => {
        const nr = ns
          .map((m, j) => ({ j, d: Math.hypot(a.x - m.x, a.y - m.y) }))
          .filter((o) => o.j !== i)
          .sort((u, v) => u.d - v.d);
        for (let k = 0; k < Math.min(2, nr.length); k++) {
          const j = nr[k].j;
          if (nr[k].d > w * 0.32 || j < i) continue;
          if (Math.hypot((a.x + ns[j].x) / 2 - cx, (a.y + ns[j].y) / 2 - cy) < cl * 0.88) continue;
          es.push({ i, j, ph: Math.random() });
        }
      });
      pk = es.slice(0, Math.min(es.length, 14)).map((_, i) => ({
        e: i % es.length,
        u: Math.random(),
        s: 0.002 + Math.random() * 0.003,
      }));
      dr = Array.from({ length: 6 }, (_, i) => ({
        x: (w / 6) * i + Math.random() * (w / 6),
        y: Math.random() * h,
        sp: 0.6 + Math.random() * 0.5,
        len: 10 + Math.random() * 14,
        a: 0.12 + Math.random() * 0.14,
      }));
    };

    const drw = (now: number) => {
      raf = requestAnimationFrame(drw);
      if (!visible || !active) return;
      if (now - last < 32) return;
      last = now;

      const cx = w / 2,
        cy = h / 2,
        cl = Math.min(w, h) * 0.24;
      x.clearRect(0, 0, w, h);
      t += 0.011;

      dr.forEach((v) => {
        v.y += v.sp;
        if (v.y > h + v.len) {
          v.y = -v.len;
          v.x += (Math.random() - 0.5) * 20;
        }
        if (Math.hypot(v.x - cx, v.y - cy) < cl) return;
        const g = x.createLinearGradient(v.x, v.y - v.len, v.x, v.y);
        g.addColorStop(0, "rgba(77,124,255,0)");
        g.addColorStop(1, `rgba(147,180,255,${v.a})`);
        x.beginPath();
        x.moveTo(v.x, v.y - v.len);
        x.lineTo(v.x, v.y);
        x.strokeStyle = g;
        x.lineWidth = 1;
        x.stroke();
      });

      es.forEach((e) => {
        const a = ns[e.i],
          b = ns[e.j],
          f = Math.hypot((a.x + b.x) / 2 - cx, (a.y + b.y) / 2 - cy) < cl ? 0.1 : 1;
        x.strokeStyle = `rgba(77,124,255,${(0.06 + Math.sin(t + e.ph) * 0.025) * f})`;
        x.lineWidth = 0.6;
        x.beginPath();
        x.moveTo(a.x, a.y);
        x.lineTo(b.x, b.y);
        x.stroke();
      });

      pk.forEach((p) => {
        p.u += p.s;
        if (p.u > 1) p.u = 0;
        const e = es[p.e];
        if (!e) return;
        const a = ns[e.i],
          b = ns[e.j],
          px = a.x + (b.x - a.x) * p.u,
          py = a.y + (b.y - a.y) * p.u;
        if (Math.hypot(px - cx, py - cy) < cl * 0.9) return;
        x.fillStyle = "rgba(147,180,255,0.75)";
        x.beginPath();
        x.arc(px, py, 1.2, 0, 6.28);
        x.fill();
      });
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    }, { threshold: 0.05 });

    const onVis = () => {
      active = document.visibilityState === "visible";
    };

    let resizeTimer = 0;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(rs, 150);
    };

    io.observe(c);
    document.addEventListener("visibilitychange", onVis);
    rs();
    raf = requestAnimationFrame(drw);
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
      io.disconnect();
    };
  }, []);

  return <canvas ref={ref} className="fc" aria-hidden />;
}

function resolveHeading(heading: string | string[], subText?: string) {
  if (Array.isArray(heading)) {
    return { main: heading[0], sub: subText ?? heading.slice(1).join(" ") || undefined };
  }
  return { main: heading, sub: subText };
}

export default function FinanceHeroStandalone({
  heading,
  subText,
  subheading,
  badge = "Live Financial Intelligence",
  ctaText = "Get AI-led Finance Support",
  ctaHref = "#",
  headingStyle,
  subTextStyle,
  subheadingStyle,
}: FinanceHeroStandaloneProps) {
  const { main, sub } = resolveHeading(heading, subText);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: C }} />
      <header className="fh">
        <div className="fi">
          <div className="fb" />
          <div className="fg fm" />
          <div className="fv fv1" />
          <div className="fv fv2" />
          <svg className="fch" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <defs>
              <linearGradient id="fCg" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#002cce" stopOpacity=".5" />
                <stop offset="50%" stopColor="#4d7cff" />
                <stop offset="100%" stopColor="#93b4ff" stopOpacity=".5" />
              </linearGradient>
              <linearGradient id="fAf" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4d7cff" stopOpacity=".2" />
                <stop offset="100%" stopColor="#001a80" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path className="fa fm" d="M0,1080 L0,820 L320,720 L640,620 L960,520 L1280,420 L1600,320 L1920,240 L1920,1080 Z" />
            <path className="fl fm" d="M0,820 L320,720 L640,620 L960,520 L1280,420 L1600,320 L1920,240" />
          </svg>
          <div className="frg">
            {R.map((r, i) => (
              <div
                key={i}
                className="fr fm"
                style={{
                  width: r.s,
                  height: r.s,
                  animation: `fS ${r.d}s linear infinite ${r.r ? "reverse" : ""}`,
                }}
              />
            ))}
          </div>
          <div className="fco">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="fcl fm" style={{ animationDelay: `${-i * 1.1}s` }} />
            ))}
          </div>
          <Cv />
          {H.map((w, i) => (
            <div key={i} className="fw" style={{ top: w.t, [w.s]: w.i } as CSSProperties}>
              <div className="fwi fm" style={{ animationDelay: `${w.d}s` }}>
                <W k={w.k} d={w.d} />
              </div>
            </div>
          ))}
        </div>
        <div className="fx">
          <div className="fbd">
            <span className="fdt fm" /> {badge}
          </div>
          <h1 className="ftt" style={headingStyle}>
            {main}
          </h1>
          {sub ? (
            <p className="fst" style={subTextStyle}>
              {sub}
            </p>
          ) : null}
          <p className="fsb" style={subheadingStyle}>
            {subheading}
          </p>
          <a href={ctaHref} className="fcta">
            <span>{ctaText}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </header>
    </>
  );
}
