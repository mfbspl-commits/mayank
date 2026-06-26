'use client';

/**
 * Finance Hero — single-file component
 * Next.js + Framer Motion | compressed CSS embedded below
 * Usage: import FinanceHero from "./finance-hero";
 */
import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from 'react';
import { motion } from 'framer-motion';

const COMPRESSED_CSS =
  ".finance-hero,.finance-hero *{box-sizing:border-box}.finance-hero{position:relative;display:flex;min-height:100svh;align-items:center;justify-content:center;overflow:hidden;background:var(--grad-scene);margin:0}.fh-rig{position:absolute;inset:0}.fh-abs{position:absolute;inset:0}.fh-cols{position:absolute;inset:0;z-index:2;display:flex;justify-content:space-between;padding:0 clamp(40px,10vw,160px);pointer-events:none}.fh-hex-sys{position:absolute;left:50%;top:50%;z-index:1;pointer-events:none;transform:translate(-50%,-50%)}.fh-vol{border-radius:50%;filter:blur(80px);mix-blend-mode:screen}.fh-vol-1{top:-8%;left:15%;width:45vw;height:45vw}.fh-vol-2{bottom:-5%;right:8%;width:38vw;height:38vw}.fh-vol-3{top:42%;left:2%;width:28vw;height:28vw}.fh-canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}.fh-holo{position:absolute;z-index:6}.fh-content{position:relative;z-index:20;text-align:center;max-width:820px;padding:0 24px;margin:0 20px;overflow:visible}.fh-content .fh-holo{z-index:1;pointer-events:none}.fh-content .fh-title,.fh-content .fh-sub,.fh-content .fh-cta{position:relative;z-index:2}.fh-title{font-size:clamp(1.85rem,4.2vw,3.1rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;color:#fff;margin:0 0 36px}.fh-sub{font-size:clamp(.95rem,1.8vw,1.15rem);color:#fff;line-height:1.65;max-width:520px;margin:0 auto 32px;opacity:.88}.fh-cta{display:inline-flex;align-items:center;gap:10px;padding:16px 34px;font-size:.95rem;font-weight:600;color:var(--primary);text-decoration:none;border-radius:999px;background:#fff;border:1px solid rgba(255,255,255,.2);box-shadow:0 4px 24px rgba(0,0,0,.18);position:relative;overflow:hidden;transition:transform .2s ease,box-shadow .2s ease}.fh-cta:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(0,0,0,.22)}.fh-bars{display:flex;align-items:flex-end;gap:4px;height:36px;width:56px}.fh-candles{display:flex;align-items:flex-end;justify-content:center;gap:5px;height:36px;width:56px}.fh-line{width:56px;height:32px}@media(max-width:768px){.fh-hide-md{display:none!important}}.finance-hero{--primary:#002cce;--blue:#4d7cff;--blue-light:#6b9aff;--blue-deep:#001a80;--grad-scene:linear-gradient(145deg,#002cce,#001a80 35%,#0a0a12 65%,#000)}@keyframes hexScroll{0%{background-position:0 0}to{background-position:60px 104px}}@keyframes areaPulse{0%,to{opacity:.7}50%{opacity:1}}@keyframes areaLineDraw{0%{stroke-dashoffset:2800}45%{stroke-dashoffset:0}55%{stroke-dashoffset:0}to{stroke-dashoffset:-2800}}@keyframes volPulse{0%,to{opacity:.5;transform:scale(1)}50%{opacity:.85;transform:scale(1.08)}}@keyframes hexRingSpin{to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes colDrop{0%{opacity:0;top:-8%}8%{opacity:.9}92%{opacity:.9}to{opacity:0;top:108%}}@keyframes beamDrop{0%{opacity:0;transform:translateY(-80px)}10%{opacity:1}90%{opacity:1}to{opacity:0;transform:translateY(110vh)}}@keyframes geoPulse{0%,to{opacity:.5;transform:scaleY(1)}50%{opacity:1;transform:scaleY(1.2)}}@keyframes holoScan{0%,to{left:-100%}50%{left:150%}}@keyframes barPulse{0%,to{opacity:.7;transform:scaleY(1)}50%{opacity:1;transform:scaleY(1.15)}}@keyframes lineDraw{0%{opacity:.5;stroke-dashoffset:200}50%{opacity:1;stroke-dashoffset:0}to{opacity:.5;stroke-dashoffset:-200}}@keyframes donutSpin{to{transform:rotate(1turn)}}@keyframes candlePulse{0%,to{opacity:.65;transform:scaleY(1)}50%{opacity:1;transform:scaleY(1.1)}}@keyframes ctaShine{0%,to{transform:translateX(-150%)}50%{transform:translateX(150%)}}@keyframes holoFloat{0%,to{transform:translate(0,0)}50%{transform:translate(var(--hf-x,0),-10px)}}@media (prefers-reduced-motion:reduce){.motion-reduce-off{animation:none!important}.motion-reduce-hide{display:none!important}}.scene-bg{background:radial-gradient(ellipse 90% 70% at 50% 0,rgba(0,44,206,.4) 0,transparent 55%),radial-gradient(ellipse 55% 45% at 15% 85%,rgba(0,26,128,.35) 0,transparent 50%),radial-gradient(ellipse 55% 45% at 85% 75%,rgba(0,44,206,.2) 0,transparent 50%),linear-gradient(160deg,#002cce,#001a80 30%,#050508 62%,#000)}.hex-grid-bg{animation:hexScroll 40s linear infinite;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104' viewBox='0 0 60 104'%3E%3Cpath fill='none' stroke='rgba(77,124,255,0.07)' stroke-width='.6' d='m30 0 30 17v35L30 69 0 52V17Z'/%3E%3Cpath fill='none' stroke='rgba(77,124,255,0.05)' stroke-width='.6' d='m30 35 30 17v35l-30 17L0 87V52Z'/%3E%3C/svg%3E\");background-size:60px 104px;opacity:.7}.market-area .area-fill{animation:areaPulse 8s ease-in-out infinite;fill:url(#areaFill)}.market-area .area-line{animation:areaLineDraw 20s ease-in-out infinite;fill:none;filter:drop-shadow(0 0 10px rgba(77,124,255,.35));stroke:url(#chartGrad);stroke-dasharray:2800;stroke-linecap:round;stroke-linejoin:round;stroke-width:2.5}.vg-1{animation:volPulse 8s ease-in-out infinite;background:radial-gradient(circle,rgba(0,80,255,.3) 0,transparent 70%)}.vg-2{animation:volPulse 8s ease-in-out -3s infinite;background:radial-gradient(circle,rgba(0,26,128,.35) 0,transparent 70%)}.vg-3{animation:volPulse 8s ease-in-out -5s infinite;background:radial-gradient(circle,rgba(51,102,240,.2) 0,transparent 70%)}.hex-ring{animation:hexRingSpin var(--hrs-dur,50s) linear infinite;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.hex-ring polygon{fill:none;stroke:rgba(77,124,255,.22);stroke-dasharray:10 14;stroke-width:1}.hex-node{fill:var(--blue);filter:drop-shadow(0 0 8px var(--blue))}.hex-r1{--hrs-dur:60s;opacity:.45}.hex-r2{--hrs-dur:42s;animation-direction:reverse;opacity:.6}.hex-r3{--hrs-dur:30s;opacity:.75}.data-col{background:linear-gradient(180deg,transparent 5%,rgba(77,124,255,.12) 30%,rgba(77,124,255,.12) 70%,transparent 95%);height:100%;position:relative;width:1px}.data-col:after,.data-col:before{animation:colDrop var(--cd-dur,7s) linear infinite;animation-delay:var(--cd-delay,0s);background:linear-gradient(180deg,transparent,rgba(147,180,255,.7),transparent);border-radius:3px;content:\"\";height:32px;left:-2px;position:absolute;width:5px}.data-col:after{animation-delay:calc(var(--cd-delay, 0s) - 3.5s)}.col-1{--cd-dur:8s;--cd-delay:0s}.col-2{--cd-dur:10s;--cd-delay:-2s}.col-3{--cd-dur:7s;--cd-delay:-4s}.col-4{--cd-dur:9s;--cd-delay:-1s}.col-5{--cd-dur:11s;--cd-delay:-5s}.col-6{--cd-dur:8.5s;--cd-delay:-3s}.col-7{--cd-dur:10.5s;--cd-delay:-6s}.txn-beam{animation:beamDrop var(--tb-dur,5s) linear infinite;animation-delay:var(--tb-delay,0s);background:linear-gradient(180deg,transparent,rgba(147,180,255,.9),transparent);box-shadow:0 0 12px rgba(77,124,255,.5);height:60px;opacity:0;width:2px}.beam-1{left:18%;--tb-dur:4.5s}.beam-2{left:35%;--tb-dur:6s;--tb-delay:-2s}.beam-3{right:35%;--tb-dur:5.5s;--tb-delay:-1s}.beam-4{right:18%;--tb-dur:7s;--tb-delay:-3.5s}.geo-struct{animation:geoPulse var(--gf-dur,16s) ease-in-out infinite;animation-delay:var(--gf-delay,0s);backdrop-filter:blur(6px);background:rgba(77,124,255,.05);border:1px solid rgba(77,124,255,.25)}.geo-1{height:48px;left:clamp(20px,5vw,72px);top:15%;--gf-dur:2s}.geo-1,.geo-2{border-radius:2px;width:8px}.geo-2{bottom:20%;height:72px;right:clamp(20px,5vw,72px);--gf-dur:2.2s;--gf-delay:-0.5s}.geo-3{height:36px;left:clamp(20px,5vw,72px);top:68%;--gf-dur:1.8s;--gf-delay:-1s}.geo-3,.geo-4{border-radius:2px;width:8px}.geo-4{height:56px;right:clamp(20px,5vw,72px);top:22%;--gf-dur:2.4s;--gf-delay:-0.3s}@media (max-width:1024px){.geo-lg-hide,.holo-lg-hide{display:none!important}}@media (max-width:768px){.col-5,.col-6,.col-7,.hex-r1,.holo-md-hide{display:none!important}}@media (max-width:480px){.geo-sm-hide{display:none!important}}@media (prefers-reduced-motion:reduce){.data-col:after,.data-col:before,.geo-struct,.hex-grid-bg,.hex-ring,.market-area path,.txn-beam,.volumetric-glow{animation:none!important}}.holo-panel{background:linear-gradient(135deg,rgba(0,26,128,.35),rgba(0,0,0,.45));border:1px solid rgba(77,124,255,.2);box-shadow:0 0 30px rgba(0,60,200,.15),inset 0 1px 0 hsla(0,0%,100%,.06)}.holo-scan:before{animation:holoScan 4s ease-in-out infinite;animation-delay:var(--hf-delay,0s);background:linear-gradient(90deg,transparent,rgba(77,124,255,.08),transparent);content:\"\";height:100%;left:-100%;position:absolute;top:0;width:60%}.holo-glass{background:linear-gradient(135deg,rgba(0,26,128,.35),rgba(0,0,0,.45));border:1px solid rgba(77,124,255,.2);box-shadow:0 0 30px rgba(0,60,200,.15),inset 0 1px 0 hsla(0,0%,100%,.06);position:relative;overflow:hidden;border-radius:14px;padding:10px;backdrop-filter:blur(24px)}.fh-holo{animation:holoFloat var(--hf-dur,20s) ease-in-out infinite;animation-delay:var(--hf-delay,0s)}.float-icon{align-items:center;color:rgba(147,180,255,.55);display:flex;height:52px;justify-content:center;width:52px}.float-icon svg{display:block;height:28px;width:28px}.line-chart-path{animation:lineDraw 3s ease-in-out infinite;fill:none;stroke:url(#lineGrad);stroke-dasharray:200;stroke-width:1.5}.bar-fill{animation:barPulse 2s ease-in-out infinite;animation-delay:calc(var(--i)*.15s);background:linear-gradient(180deg,var(--blue-light),var(--primary));border-radius:2px 2px 0 0;flex:1;opacity:.8}.donut-ring{animation:donutSpin 12s linear infinite;background:conic-gradient(var(--blue) 0 72%,rgba(77,124,255,.15) 72% 100%);border-radius:50%;height:36px;position:relative;width:36px}.donut-ring:after{background:rgba(8,16,40,.9);border-radius:50%;content:\"\";inset:6px;position:absolute}.candle{animation:candlePulse 2.5s ease-in-out infinite;animation-delay:calc(var(--i)*.2s);background:var(--blue-light);border-radius:1px;position:relative;width:6px}.candle:after,.candle:before{background:rgba(147,180,255,.5);content:\"\";left:50%;position:absolute;transform:translateX(-50%);width:1px}.candle:before{height:6px;top:-6px}.candle:after{bottom:-4px;height:4px}.candle.down{background:rgba(0,80,255,.45)}.cta-shine:before{animation:ctaShine 4s ease-in-out infinite;background:linear-gradient(105deg,transparent 35%,hsla(0,0%,100%,.35) 50%,transparent 65%);content:\"\";inset:0;position:absolute}@media (prefers-reduced-motion:reduce){.bar-fill,.candle,.cta-shine:before,.donut-ring,.fh-holo,.holo-scan:before,.line-chart-path{animation:none!important}}";

const HERO_SCOPE = '.finance-hero';
const KEYFRAME_PREFIX = 'fh-';

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function namespaceHeroKeyframes(css: string) {
  const keyframeNames = Array.from(
    css.matchAll(/@keyframes\s+([_a-zA-Z][\w-]*)/g),
    ([, keyframeName]) => keyframeName,
  );

  return keyframeNames.reduce((result, keyframeName) => {
    const keyframePattern = new RegExp(
      `(^|[^-\\w])(${escapeRegExp(keyframeName)})(?![-\\w])`,
      'g',
    );

    return result.replace(keyframePattern, `$1${KEYFRAME_PREFIX}$2`);
  }, css);
}

function extractKeyframeBlocks(css: string) {
  const keyframes: string[] = [];
  let scopedSource = '';
  let index = 0;

  while (index < css.length) {
    const start = css.indexOf('@keyframes', index);
    if (start === -1) {
      scopedSource += css.slice(index);
      break;
    }

    scopedSource += css.slice(index, start);
    const blockStart = css.indexOf('{', start);
    if (blockStart === -1) {
      scopedSource += css.slice(start);
      break;
    }

    let depth = 0;
    let end = blockStart;

    for (; end < css.length; end += 1) {
      if (css[end] === '{') depth += 1;
      if (css[end] === '}') depth -= 1;
      if (depth === 0) break;
    }

    const placeholder = `__FH_KEYFRAMES_${keyframes.length}__`;
    keyframes.push(css.slice(start, end + 1));
    scopedSource += placeholder;
    index = end + 1;
  }

  return { scopedSource, keyframes };
}

function scopeSelectorList(selectorList: string) {
  return selectorList
    .split(',')
    .map((selector) => {
      const trimmedSelector = selector.trim();

      if (!trimmedSelector || trimmedSelector.startsWith(HERO_SCOPE)) {
        return trimmedSelector;
      }

      return `${HERO_SCOPE} ${trimmedSelector}`;
    })
    .join(',');
}

function scopeHeroCss(css: string) {
  const { scopedSource, keyframes } = extractKeyframeBlocks(
    namespaceHeroKeyframes(css),
  );
  const scopedCss = scopedSource.replace(
    /(^|[{}])([^{}@]+){/g,
    (_, boundary: string, selectorList: string) =>
      `${boundary}${scopeSelectorList(selectorList)}{`,
  );

  return keyframes.reduce(
    (result, keyframeBlock, index) =>
      result.replace(`__FH_KEYFRAMES_${index}__`, keyframeBlock),
    scopedCss,
  );
}

const SCOPED_CSS = scopeHeroCss(COMPRESSED_CSS);

export type HoloItem = {
  id: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  duration: number;
  delay: number;
  hzX: number;
  hide?: string;
  type:
    | 'dollar'
    | 'line'
    | 'bank'
    | 'card'
    | 'donut'
    | 'bars'
    | 'ledger'
    | 'trend';
};

type FinanceHeroProps = {
  heading: ReactNode;
  subheading?: ReactNode;
  buttonText: ReactNode;
  buttonHref?: string;
};

export const HEX_RINGS = [
  {
    size: 1100,
    dur: 60,
    opacity: 0.45,
    reverse: false,
    node: { cx: 100, cy: 8 },
  },
  {
    size: 880,
    dur: 42,
    opacity: 0.6,
    reverse: true,
    node: { cx: 175, cy: 52 },
  },
  {
    size: 660,
    dur: 30,
    opacity: 0.75,
    reverse: false,
    node: { cx: 25, cy: 148 },
  },
] as const;

/** Finance icons positioned around the hero text block */
export const HOLO_ITEMS: HoloItem[] = [
  {
    id: '1',
    top: '-10%',
    left: '0%',
    duration: 20,
    delay: 0,
    hzX: 4,
    type: 'trend',
  },
  {
    id: '2',
    top: '-8%',
    right: '2%',
    duration: 22,
    delay: -2,
    hzX: -4,
    type: 'line',
  },
  {
    id: '3',
    top: '36%',
    left: '-6%',
    duration: 21,
    delay: -3,
    hzX: 5,
    type: 'dollar',
    hide: 'holo-md-hide',
  },
  {
    id: '4',
    top: '38%',
    right: '-4%',
    duration: 19,
    delay: -4,
    hzX: -5,
    type: 'bank',
    hide: 'holo-md-hide',
  },
  {
    id: '5',
    bottom: '6%',
    left: '6%',
    duration: 23,
    delay: -1,
    hzX: 4,
    type: 'card',
  },
  {
    id: '6',
    bottom: '4%',
    right: '8%',
    duration: 18,
    delay: -5,
    hzX: -4,
    type: 'ledger',
  },
  {
    id: '7',
    top: '14%',
    left: '-12%',
    duration: 24,
    delay: -6,
    hzX: 3,
    type: 'bars',
    hide: 'holo-lg-hide',
  },
  {
    id: '8',
    top: '16%',
    right: '-10%',
    duration: 20,
    delay: -7,
    hzX: -3,
    type: 'donut',
    hide: 'holo-lg-hide',
  },
];

export const BAR_HEIGHTS = [50, 85, 40, 75, 60];

export const DATA_COLUMNS = [
  { cls: 'col-1' },
  { cls: 'col-2' },
  { cls: 'col-3' },
  { cls: 'col-4' },
  { cls: 'col-5', hide: 'fh-hide-md' },
  { cls: 'col-6', hide: 'fh-hide-md' },
  { cls: 'col-7', hide: 'fh-hide-md' },
];

export const TXN_BEAMS = [
  { cls: 'beam-1', side: 'left' as const, offset: '18%' },
  { cls: 'beam-2', side: 'left' as const, offset: '35%' },
  { cls: 'beam-3', side: 'right' as const, offset: '35%' },
  { cls: 'beam-4', side: 'right' as const, offset: '18%' },
];

export const GEO_STRUCTS = [
  { cls: 'geo-1 geo-sm-hide' },
  { cls: 'geo-2 geo-sm-hide' },
  { cls: 'geo-3 geo-lg-hide' },
  { cls: 'geo-4 geo-lg-hide' },
];

export const HOLO_CHAINS = [
  ['holo-1', 'holo-7', 'holo-3', 'holo-5'],
  ['holo-2', 'holo-8', 'holo-4', 'holo-6'],
] as const;

type GridEdge = { i: number; j: number; vertical: boolean; phase: number };
type GridNode = { x: number; y: number; pulse: number };
type RoutePath = {
  a: { x: number; y: number };
  b: { x: number; y: number };
  phase: number;
  bridge?: boolean;
};

const TARGET_FPS = 30;
const FRAME_MS = 1000 / TARGET_FPS;

function useFinanceCanvases(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const hero = containerRef.current;
    if (!hero) return;

    const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    let W = 0;
    let H = 0;
    let active = false;
    let lastFrame = 0;

    const size = () => {
      const r = hero.getBoundingClientRect();
      W = r.width;
      H = r.height;
      return r;
    };

    const ledgerCvs = hero.querySelector<HTMLCanvasElement>('#canvas-ledger');
    const vertCvs = hero.querySelector<HTMLCanvasElement>('#canvas-vertical');
    const routeCvs = hero.querySelector<HTMLCanvasElement>('#canvas-routes');
    const ledgerCtx = ledgerCvs?.getContext('2d', { alpha: true }) ?? null;
    const vertCtx = vertCvs?.getContext('2d', { alpha: true }) ?? null;
    const routeCtx = routeCvs?.getContext('2d', { alpha: true }) ?? null;
    if (!ledgerCtx || !vertCtx || !routeCtx) return;

    let gridNodes: GridNode[] = [];
    let gridEdges: GridEdge[] = [];
    let gridPackets: {
      edge: GridEdge;
      t: number;
      speed: number;
      size: number;
      dir: number;
    }[] = [];
    let ledgerT = 0;

    const initLedger = () => {
      size();
      ledgerCvs!.width = W * devicePixelRatio;
      ledgerCvs!.height = H * devicePixelRatio;
      ledgerCtx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      const cx = W * 0.5;
      const cy = H * 0.5;
      const clearR = Math.min(W, H) * 0.24;
      const stepX = Math.max(70, W / 14);
      const stepY = Math.max(55, H / 12);
      gridNodes = [];
      gridEdges = [];

      for (let row = 0; row <= Math.ceil(H / stepY); row++) {
        for (let col = 0; col <= Math.ceil(W / stepX); col++) {
          const x = col * stepX;
          const y = row * stepY;
          if (Math.hypot(x - cx, y - cy) < clearR) continue;
          gridNodes.push({ x, y, pulse: Math.random() * 6 });
        }
      }

      gridNodes.forEach((n, i) => {
        gridNodes.forEach((m, j) => {
          if (j <= i) return;
          const dx = Math.abs(n.x - m.x);
          const dy = Math.abs(n.y - m.y);
          if ((dx < stepX * 1.1 && dy < 4) || (dy < stepY * 1.1 && dx < 4)) {
            const midX = (n.x + m.x) / 2;
            const midY = (n.y + m.y) / 2;
            if (Math.hypot(midX - cx, midY - cy) < clearR * 0.9) return;
            gridEdges.push({ i, j, vertical: dy > dx, phase: Math.random() });
          }
        });
      });

      gridPackets = gridEdges
        .slice(0, Math.min(gridEdges.length, 16))
        .map((e) => ({
          edge: e,
          t: Math.random(),
          speed: 0.002 + Math.random() * 0.003,
          size: 1.2 + Math.random() * 0.8,
          dir: Math.random() < 0.5 ? 1 : -1,
        }));
    };

    const packetPos = (e: GridEdge, t: number, dir: number) => {
      const a = gridNodes[e.i];
      const b = gridNodes[e.j];
      const u = dir > 0 ? t : 1 - t;
      if (e.vertical) {
        if (u < 0.5) return { x: a.x, y: a.y + (b.y - a.y) * u * 2 };
        return { x: b.x, y: a.y + (b.y - a.y) * (u - 0.5) * 2 };
      }
      if (u < 0.5) return { x: a.x + (b.x - a.x) * u * 2, y: a.y };
      return { x: a.x + (b.x - a.x) * (u - 0.5) * 2, y: b.y };
    };

    const drawLedger = () => {
      const cx = W * 0.5;
      const cy = H * 0.5;
      const clearR = Math.min(W, H) * 0.24;
      ledgerCtx.clearRect(0, 0, W, H);
      ledgerT += 0.014;

      gridEdges.forEach((e) => {
        const a = gridNodes[e.i];
        const b = gridNodes[e.j];
        const midX = (a.x + b.x) / 2;
        const midY = (a.y + b.y) / 2;
        const fade = Math.hypot(midX - cx, midY - cy) < clearR ? 0.1 : 1;
        const alpha = (0.07 + Math.sin(ledgerT + e.phase) * 0.025) * fade;
        ledgerCtx.beginPath();
        ledgerCtx.moveTo(a.x, a.y);
        if (e.vertical) {
          ledgerCtx.lineTo(a.x, b.y);
          ledgerCtx.lineTo(b.x, b.y);
        } else {
          ledgerCtx.lineTo(b.x, a.y);
          ledgerCtx.lineTo(b.x, b.y);
        }
        ledgerCtx.strokeStyle = `rgba(77, 124, 255, ${alpha})`;
        ledgerCtx.lineWidth = 0.6;
        ledgerCtx.stroke();
      });

      gridPackets.forEach((p) => {
        p.t += p.speed;
        if (p.t > 1) p.t = 0;
        const pt = packetPos(p.edge, p.t, p.dir);
        if (Math.hypot(pt.x - cx, pt.y - cy) < clearR) return;
        ledgerCtx.beginPath();
        ledgerCtx.arc(pt.x, pt.y, p.size, 0, Math.PI * 2);
        ledgerCtx.fillStyle = 'rgba(147, 180, 255, 0.75)';
        ledgerCtx.fill();
      });
    };

    let drops: {
      x: number;
      y: number;
      speed: number;
      len: number;
      alpha: number;
    }[] = [];

    const initVertical = () => {
      size();
      vertCvs!.width = W * devicePixelRatio;
      vertCvs!.height = H * devicePixelRatio;
      vertCtx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      const cols = 10;
      drops = Array.from({ length: cols * 2 }, (_, i) => ({
        x: (W / cols) * (i % cols) + Math.random() * (W / cols),
        y: Math.random() * H,
        speed: 0.6 + Math.random() * 1.4,
        len: 8 + Math.random() * 20,
        alpha: 0.15 + Math.random() * 0.2,
      }));
    };

    const drawVertical = () => {
      vertCtx.clearRect(0, 0, W, H);
      const cx = W * 0.5;
      const cy = H * 0.5;
      const clearR = Math.min(W, H) * 0.22;

      drops.forEach((d) => {
        d.y += d.speed;
        if (d.y > H + d.len) {
          d.y = -d.len;
          d.x += (Math.random() - 0.5) * 30;
        }
        if (Math.hypot(d.x - cx, d.y - cy) < clearR) return;
        const grad = vertCtx.createLinearGradient(d.x, d.y - d.len, d.x, d.y);
        grad.addColorStop(0, 'rgba(77,124,255,0)');
        grad.addColorStop(1, `rgba(147,180,255,${d.alpha})`);
        vertCtx.beginPath();
        vertCtx.moveTo(d.x, d.y - d.len);
        vertCtx.lineTo(d.x, d.y);
        vertCtx.strokeStyle = grad;
        vertCtx.lineWidth = 1;
        vertCtx.stroke();
      });
    };

    let routePaths: RoutePath[] = [];
    let routeSparks: { path: number; t: number; speed: number }[] = [];
    let routeT = 0;

    const initRoutes = () => {
      size();
      routeCvs!.width = W * devicePixelRatio;
      routeCvs!.height = H * devicePixelRatio;
      routeCtx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      routePaths = [];
      const r = hero.getBoundingClientRect();

      HOLO_CHAINS.forEach((chain) => {
        const pts = chain
          .map((id) => {
            const el = hero.querySelector(`[data-holo="${id}"]`);
            if (!el || (el as HTMLElement).offsetParent === null) return null;
            const b = el.getBoundingClientRect();
            return {
              x: b.left + b.width / 2 - r.left,
              y: b.top + b.height / 2 - r.top,
            };
          })
          .filter(Boolean) as { x: number; y: number }[];

        for (let i = 0; i < pts.length - 1; i++) {
          routePaths.push({
            a: pts[i],
            b: pts[i + 1],
            phase: Math.random() * 6,
          });
        }
      });

      routeSparks = routePaths.map((_, i) => ({
        path: i,
        t: Math.random(),
        speed: 0.0012 + Math.random() * 0.0018,
      }));
    };

    const pointOnRoute = (p: RoutePath, t: number) => {
      if (p.bridge) {
        const midX = (p.a.x + p.b.x) / 2;
        if (t < 0.5) return { x: p.a.x + (midX - p.a.x) * (t * 2), y: p.a.y };
        return { x: midX + (p.b.x - midX) * ((t - 0.5) * 2), y: p.b.y };
      }
      if (t < 0.5) return { x: p.a.x + (p.b.x - p.a.x) * (t * 2), y: p.a.y };
      return { x: p.b.x, y: p.a.y + (p.b.y - p.a.y) * ((t - 0.5) * 2) };
    };

    const drawRoutes = () => {
      routeCtx.clearRect(0, 0, W, H);
      routeT += 0.016;
      const cx = W * 0.5;
      const cy = H * 0.5;
      const clearR = Math.min(W, H) * 0.2;

      routePaths.forEach((p) => {
        const mid = pointOnRoute(p, 0.5);
        if (Math.hypot(mid.x - cx, mid.y - cy) < clearR * 0.85) return;
        routeCtx.beginPath();
        routeCtx.moveTo(p.a.x, p.a.y);
        if (p.bridge) {
          const midX = (p.a.x + p.b.x) / 2;
          routeCtx.lineTo(midX, p.a.y);
          routeCtx.lineTo(midX, p.b.y);
          routeCtx.lineTo(p.b.x, p.b.y);
        } else {
          routeCtx.lineTo(p.b.x, p.a.y);
          routeCtx.lineTo(p.b.x, p.b.y);
        }
        routeCtx.strokeStyle = `rgba(77, 124, 255, ${0.1 + Math.sin(routeT + p.phase) * 0.03})`;
        routeCtx.lineWidth = 0.8;
        routeCtx.setLineDash([4, 12]);
        routeCtx.lineDashOffset = -routeT * 18;
        routeCtx.stroke();
        routeCtx.setLineDash([]);
      });

      routeSparks.forEach((s) => {
        if (!routePaths[s.path]) return;
        s.t += s.speed;
        if (s.t > 1) s.t = 0;
        const pt = pointOnRoute(routePaths[s.path], s.t);
        if (Math.hypot(pt.x - cx, pt.y - cy) < clearR) return;
        routeCtx.beginPath();
        routeCtx.arc(pt.x, pt.y, 1.5, 0, Math.PI * 2);
        routeCtx.fillStyle = 'rgba(200, 220, 255, 0.7)';
        routeCtx.fill();
      });
    };

    let rafId = 0;

    const tick = (now: number) => {
      rafId = requestAnimationFrame(tick);
      if (!active || document.hidden) return;
      if (now - lastFrame < FRAME_MS) return;
      lastFrame = now;
      drawLedger();
      drawVertical();
      drawRoutes();
    };

    const initAll = () => {
      initLedger();
      initVertical();
      initRoutes();
    };

    const setActive = (next: boolean) => {
      active = next;
      if (active) {
        lastFrame = 0;
        rafId = requestAnimationFrame(tick);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(hero);

    const onVisibility = () => {
      if (!document.hidden && active) {
        lastFrame = 0;
      }
    };

    initAll();
    window.addEventListener('resize', initAll);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      active = false;
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener('resize', initAll);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [containerRef]);
}

type HoloProps = { item: HoloItem };

function HoloContent({ item }: HoloProps) {
  switch (item.type) {
    case 'dollar':
      return (
        <svg viewBox='0 0 24 24' fill='currentColor'>
          <path d='M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z' />
        </svg>
      );
    case 'line':
      return (
        <svg className='fh-line' viewBox='0 0 160 50'>
          <defs>
            <linearGradient id='lineGrad' x1='0' y1='0' x2='1' y2='0'>
              <stop offset='0%' stopColor='#002CCE' />
              <stop offset='100%' stopColor='#4d7cff' />
            </linearGradient>
          </defs>
          <path
            className='line-chart-path'
            d='M0,42 L25,38 L50,30 L75,22 L100,16 L125,10 L160,6'
          />
        </svg>
      );
    case 'bank':
      return (
        <svg viewBox='0 0 24 24' fill='currentColor'>
          <path d='M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-5-9L2 6v2h19V6l-9-5z' />
        </svg>
      );
    case 'card':
      return (
        <svg viewBox='0 0 24 24' fill='currentColor'>
          <path d='M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z' />
        </svg>
      );
    case 'donut':
      return <div className='donut-ring motion-reduce-off' />;
    case 'bars':
      return (
        <div className='fh-bars'>
          {BAR_HEIGHTS.map((h, i) => (
            <div
              key={i}
              className='bar-fill'
              style={{ height: `${h}%`, ['--i' as string]: i }}
            />
          ))}
        </div>
      );
    case 'ledger':
      return (
        <svg viewBox='0 0 24 24' fill='currentColor'>
          <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z' />
        </svg>
      );
    case 'trend':
      return (
        <svg viewBox='0 0 24 24' fill='currentColor'>
          <path d='M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z' />
        </svg>
      );
    default:
      return null;
  }
}

function holoStyle(item: HoloItem): CSSProperties {
  return {
    top: item.top,
    left: item.left,
    right: item.right,
    bottom: item.bottom,
    ['--hf-delay' as string]: `${Math.abs(item.delay)}s`,
    ['--hf-dur' as string]: `${item.duration}s`,
    ['--hf-x' as string]: `${item.hzX}px`,
  };
}

export default function FinanceHero({
  heading,
  subheading,
  buttonText,
  buttonHref = '#',
}: FinanceHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  useFinanceCanvases(heroRef);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SCOPED_CSS }} />
      <header ref={heroRef} className='finance-hero'>
        <div className='fh-rig'>
          <div className='scene-bg fh-abs' />
          <div
            className='hex-grid-bg motion-reduce-off fh-abs'
            style={{ zIndex: 1 }}
          />
          <svg
            className='market-area motion-reduce-off fh-abs'
            style={{ zIndex: 1, opacity: 0.5 }}
            viewBox='0 0 1920 1080'
            preserveAspectRatio='xMidYMid slice'
            aria-hidden
          >
            <defs>
              <linearGradient id='chartGrad' x1='0' y1='0' x2='1' y2='0'>
                <stop offset='0%' stopColor='#002CCE' stopOpacity='0.5' />
                <stop offset='50%' stopColor='#4d7cff' />
                <stop offset='100%' stopColor='#93b4ff' stopOpacity='0.5' />
              </linearGradient>
              <linearGradient id='areaFill' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#4d7cff' stopOpacity='0.22' />
                <stop offset='100%' stopColor='#001a80' stopOpacity='0' />
              </linearGradient>
            </defs>
            <path
              className='area-fill'
              d='M0,1080 L0,820 L160,780 L320,720 L480,680 L640,620 L800,580 L960,520 L1120,480 L1280,420 L1440,380 L1600,320 L1760,280 L1920,240 L1920,1080 Z'
            />
            <path
              className='area-line'
              d='M0,820 L160,780 L320,720 L480,680 L640,620 L800,580 L960,520 L1120,480 L1280,420 L1440,380 L1600,320 L1760,280 L1920,240'
            />
          </svg>
          <div className='volumetric-glow vg-1 fh-vol fh-vol-1 motion-reduce-off' />
          <div className='volumetric-glow vg-2 fh-vol fh-vol-2 motion-reduce-off' />
          <div className='volumetric-glow vg-3 fh-vol fh-vol-3 motion-reduce-off' />
          <div className='fh-hex-sys'>
            {HEX_RINGS.map((ring, i) => (
              <div
                key={i}
                className={`hex-ring hex-r${i + 1} motion-reduce-off ${i === 0 ? 'fh-hide-md' : ''}`}
                style={{
                  width: ring.size,
                  height: ring.size,
                  opacity: ring.opacity,
                }}
              >
                <svg width={ring.size} height={ring.size} viewBox='0 0 200 200'>
                  <polygon points='100,8 175,52 175,148 100,192 25,148 25,52' />
                  <circle
                    className='hex-node'
                    cx={ring.node.cx}
                    cy={ring.node.cy}
                    r='3'
                  />
                </svg>
              </div>
            ))}
          </div>
          <div className='fh-cols'>
            {DATA_COLUMNS.map((col, i) => (
              <div
                key={i}
                className={`data-col ${col.cls} motion-reduce-off ${col.hide ?? ''}`}
              />
            ))}
          </div>
          {TXN_BEAMS.map((beam, i) => (
            <div
              key={i}
              className={`txn-beam ${beam.cls} motion-reduce-off`}
              style={{
                position: 'absolute',
                zIndex: 4,
                pointerEvents: 'none',
                ...(beam.side === 'left'
                  ? { left: beam.offset }
                  : { right: beam.offset }),
              }}
            />
          ))}
          {GEO_STRUCTS.map((g, i) => (
            <div
              key={i}
              className={`geo-struct motion-reduce-off ${g.cls}`}
              style={{ position: 'absolute' }}
            />
          ))}
          <canvas
            id='canvas-ledger'
            className='fh-canvas motion-reduce-hide'
            style={{ zIndex: 2 }}
          />
          <canvas
            id='canvas-vertical'
            className='fh-canvas motion-reduce-hide'
            style={{ zIndex: 3 }}
          />
          <canvas
            id='canvas-routes'
            className='fh-canvas motion-reduce-hide'
            style={{ zIndex: 5 }}
          />
        </div>
        <motion.div
          className='fh-content'
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {HOLO_ITEMS.map((item) => (
            <div
              key={item.id}
              data-holo={`holo-${item.id}`}
              className={`holo-glass holo-scan fh-holo motion-reduce-off ${item.hide ?? ''}`}
              style={holoStyle(item)}
              aria-hidden
            >
              <div className='float-icon'>
                <HoloContent item={item} />
              </div>
            </div>
          ))}
          <h1 className='fh-title'>{heading}</h1>
          {subheading && <p className='fh-sub'>{subheading}</p>}
          <a href={buttonHref} className='fh-cta cta-shine'>
            <span style={{ position: 'relative', zIndex: 1 }}>{buttonText}</span>
            <svg
              style={{ position: 'relative', zIndex: 1 }}
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              aria-hidden
            >
              <path d='M5 12h14M12 5l7 7-7 7' />
            </svg>
          </a>
        </motion.div>
      </header>
    </>
  );
}
