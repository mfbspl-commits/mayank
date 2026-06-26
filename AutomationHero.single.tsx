'use client';

/**
 * AutomationHero — single-file component
 * Dependencies: react, framer-motion
 * Usage: import AutomationHero from "./AutomationHero.single";
 */
import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from 'react';
import {
  motion,
  type Variants,
} from 'framer-motion';

const COMPRESSED_CSS =
  ':root{--primary:#0050ff;--blue:#3d7bff;--blue-light:#6ea0ff;--blue-deep:#001a66;--cyan:#00c8ff;--grad-scene:linear-gradient(180deg,#001a66,#000814 45%,#000)}@keyframes volPulse{0%,to{opacity:.45;transform:scale(1)}50%{opacity:.9;transform:scale(1.1)}}@keyframes volPulseCenter{0%,to{opacity:.45;transform:translateX(-50%) scale(1)}50%{opacity:.9;transform:translateX(-50%) scale(1.1)}}@keyframes arcSpin{to{transform:rotate(1turn)}}@keyframes diamondFloat{0%,to{opacity:.5;transform:rotate(45deg) translateY(0)}50%{opacity:1;transform:rotate(45deg) translateY(-14px)}}@keyframes holoFloat{0%,to{opacity:1;transform:translateY(0)}50%{opacity:1;transform:translateY(-12px)}}@keyframes holoScan{0%,to{left:-100%}50%{left:150%}}@keyframes pipePulse{0%,to{opacity:.5;transform:scale(1)}50%{opacity:1;transform:scale(1.3)}}@keyframes barPulse{0%,to{opacity:.65;transform:scaleY(1)}50%{opacity:1;transform:scaleY(1.2)}}@keyframes lineDraw{0%{opacity:.5;stroke-dashoffset:180}50%{opacity:1;stroke-dashoffset:0}to{opacity:.5;stroke-dashoffset:-180}}@keyframes nodeBlink{0%,to{opacity:.3}50%{opacity:1}}@keyframes beamDrop{0%{opacity:0;transform:scaleY(.3)}8%{opacity:.8}92%{opacity:.8}to{opacity:0;transform:scaleY(1)}}@keyframes aiCorePulse{0%,to{opacity:.3;transform:scale(1)}50%{opacity:.85;transform:scale(1.04)}}@keyframes aiGlow{0%,to{opacity:.5;transform:scale(.95)}50%{opacity:1;transform:scale(1.08)}}@keyframes aiLabelPulse{0%,to{opacity:.35}50%{opacity:.7}}@keyframes aiCoreSpin{to{transform:rotate(1turn)}}@keyframes ctaShine{0%,to{transform:translateX(-160%)}50%{transform:translateX(160%)}}@media (prefers-reduced-motion:reduce){.motion-reduce-off{animation:none!important}.motion-reduce-hide{display:none!important}}.scene-bg{background:radial-gradient(ellipse 100% 80% at 50% -10%,rgba(0,80,255,.45) 0,transparent 50%),radial-gradient(ellipse 60% 50% at 0 50%,rgba(0,26,102,.3) 0,transparent 55%),radial-gradient(ellipse 60% 50% at 100% 50%,rgba(0,50,200,.25) 0,transparent 55%),radial-gradient(ellipse 40% 30% at 50% 50%,rgba(0,200,255,.06) 0,transparent 70%),linear-gradient(180deg,#001a66,#000a1a 40%,#000)}.diamond-lattice{background-image:linear-gradient(45deg,rgba(61,123,255,.04) 1px,transparent 0),linear-gradient(-45deg,rgba(61,123,255,.04) 1px,transparent 0);background-size:40px 40px}.radial-sweep{background:conic-gradient(from 0deg,transparent 0deg,rgba(0,80,255,.08) 30deg,transparent 60deg)}.content-vignette{background:radial-gradient(ellipse 55% 45% at 50% 50%,rgba(0,0,0,.55) 0,transparent 70%)}.vg-1{animation:volPulseCenter 9s ease-in-out infinite;background:radial-gradient(circle,rgba(0,80,255,.35) 0,transparent 70%)}.vg-2{animation:volPulse 9s ease-in-out -4s infinite;background:radial-gradient(circle,rgba(0,26,102,.4) 0,transparent 70%)}.vg-3{animation:volPulse 9s ease-in-out -6s infinite;background:radial-gradient(circle,rgba(0,200,255,.15) 0,transparent 70%)}.arc-ring:before{border-color:rgba(0,200,255,.4) rgba(61,123,255,.25) rgba(61,123,255,.12) rgba(61,123,255,.12);border-radius:50%;border-style:solid;border-width:1px;inset:0}.arc-ring:after,.arc-ring:before{animation:arcSpin var(--ar-dur,30s) linear infinite;content:"";position:absolute}.arc-ring:after{background:var(--cyan);border-radius:50%;box-shadow:0 0 20px var(--cyan),0 0 40px rgba(0,200,255,.4);height:10px;left:50%;margin-left:-5px;top:-5px;width:10px}.geo-diamond:after{border:1px solid rgba(0,200,255,.15);content:"";inset:8px;position:absolute}.energy-beam{background:linear-gradient(180deg,transparent,rgba(0,200,255,.5),rgba(61,123,255,.7),transparent)}.ai-core-glow{background:radial-gradient(circle,rgba(0,200,255,.25) 0,rgba(0,80,255,.08) 50%,transparent 70%)}.ai-core-label{background:linear-gradient(135deg,hsla(0,0%,100%,.15),rgba(0,200,255,.35) 50%,rgba(61,123,255,.2));-webkit-background-clip:text;background-clip:text;filter:drop-shadow(0 0 30px rgba(0,200,255,.4))}.ai-core-label{-webkit-text-fill-color:transparent}.cta-shine:before{animation:ctaShine 4.5s ease-in-out infinite;background:linear-gradient(105deg,transparent 30%,rgba(0,80,255,.08) 50%,transparent 70%)}.cta-shine:before,.pipe-line:after{content:"";inset:0;position:absolute}.pipe-line:after{animation:pipeFlow 1.5s linear infinite;animation-delay:calc(var(--i)*.3s);background:linear-gradient(90deg,transparent,#fff,transparent)}.accuracy-ring:before{animation:accSpin 3s linear infinite;border:2px solid transparent;border-radius:50%;border-top:2px solid var(--cyan);content:"";inset:-2px;position:absolute}.line-chart-path{animation:lineDraw 3.5s ease-in-out infinite;fill:none;stroke:url(#lineGradAuto);stroke-dasharray:180;stroke-width:1.5}.neural-path{animation:neuralFlow 22s linear infinite;fill:none;stroke:rgba(61,123,255,.22);stroke-dasharray:6 14;stroke-width:.7}.neural-node{animation:nodeBlink 3s ease-in-out infinite;fill:rgba(0,200,255,.35)}@media (max-width:1024px){.holo-lg-hide{display:none}}@media (max-width:768px){.arc-lg-hide,.holo-md-hide{display:none}}@media (max-width:480px){.beam-sm-hide,.geo-sm-hide{display:none}}.holo-panel--ai{border-color:rgba(0,200,255,.3)}.geo-diamond{background:linear-gradient(135deg,rgba(0,80,255,.08),rgba(0,0,0,.2));border:1px solid rgba(61,123,255,.25)}.ai-core-ring{border:1px solid rgba(0,200,255,.15)}.ai-core-ring:nth-child(2){border-color:rgba(61,123,255,.2);inset:12%}.ai-core-ring:nth-child(3){border-style:dashed;inset:24%}.pipe-node{background:var(--blue);box-shadow:0 0 8px rgba(61,123,255,.6)}.pipe-line{background:linear-gradient(90deg,var(--blue),var(--cyan))}.accuracy-ring{border:2px solid rgba(61,123,255,.2)}.accuracy-ring span{color:var(--cyan)}.ai-tag{color:rgba(0,200,255,.7)}.bar-fill{background:linear-gradient(180deg,var(--cyan),var(--primary))}.ah-hero{position:relative;min-height:100svh;display:flex;align-items:center;justify-content:center;overflow:hidden;background:var(--grad-scene);color:#fff}.ah-rig{position:absolute;inset:0}.ah-abs{position:absolute;inset:0}.ah-canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}.ah-z1{z-index:1}.ah-z2{z-index:2}.ah-z3{z-index:3}.ah-z4{z-index:4}.ah-z5{z-index:5}.ah-z6{z-index:6}.ah-z10{z-index:10}.ah-z20{z-index:20;position:relative}.ah-content{text-align:center;max-width:860px;padding:0 24px;margin:0 20px}.ah-title{font-size:clamp(1.9rem,4.5vw,3.25rem);font-weight:800;line-height:1.08;letter-spacing:-.035em;margin-bottom:40px;color:#fff;text-shadow:0 4px 32px rgba(0,0,0,.7)}.ah-sub{font-size:clamp(.95rem,1.85vw,1.18rem);color:#fff;line-height:1.7;max-width:580px;margin:0 auto 36px}.ah-cta-row{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:16px}.ah-cta{display:inline-flex;align-items:center;gap:10px;padding:17px 36px;font-size:.95rem;font-weight:600;color:var(--primary);text-decoration:none;border-radius:999px;background:#fff;border:1px solid rgba(255,255,255,.9);box-shadow:0 4px 24px rgba(0,0,0,.2);position:relative;overflow:hidden;transition:background .2s ease,box-shadow .2s ease}.ah-cta:hover{background:#f5f8ff;box-shadow:0 6px 32px rgba(0,80,255,.25)}.ah-holo{position:absolute;padding:12px 14px;border-radius:12px;backdrop-filter:blur(20px);background:linear-gradient(145deg,rgba(0,26,102,.4),rgba(0,0,0,.5));border:1px solid rgba(61,123,255,.22);overflow:hidden}.ah-holo::before{content:"";position:absolute;top:0;left:-100%;width:50%;height:100%;background:linear-gradient(90deg,transparent,rgba(0,200,255,.1),transparent);animation:holoScan 5s ease-in-out infinite;animation-delay:var(--hf-delay,0s)}.ah-icon{color:rgba(110,160,255,.65);display:flex;align-items:center;justify-content:center;width:48px;height:48px;position:relative;z-index:1}.ah-core{pointer-events:none;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(320px,42vw);height:min(320px,42vw)}.ah-ring-center{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.ah-glow-orb{border-radius:50%;filter:blur(90px);mix-blend-mode:screen;pointer-events:none;position:absolute}.ah-glow-1{width:50vw;height:50vw;top:-12%;left:50%;transform:translateX(-50%)}.ah-glow-2{width:35vw;height:35vw;bottom:-8%;left:5%}.ah-glow-3{width:30vw;height:30vw;bottom:10%;right:5%}.ah-neural{pointer-events:none;position:absolute;left:2%;top:2%;width:96%;height:96%;opacity:.38}.ah-beam{width:2px;transform-origin:top center}.ah-diamond{position:absolute;transform:rotate(45deg);backdrop-filter:blur(4px)}.ah-hide-md{display:none}@media(min-width:768px){.ah-hide-md{display:block}}.ah-hide-sm{display:none}@media(min-width:640px){.ah-hide-sm{display:block}}.ah-hide-lg{display:none}@media(min-width:1024px){.ah-hide-lg{display:block}}@keyframes pipeFlow{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes neuralFlow{to{stroke-dashoffset:-120}}@keyframes accSpin{to{transform:rotate(1turn)}}@media(max-width:768px){.ah-cta-row{flex-direction:column}.ah-cta{width:100%;justify-content:center}.ah-core{opacity:.5;width:min(240px,55vw)!important;height:min(240px,55vw)!important}}';

const HERO_SCOPE = '.ah-hero';
const KEYFRAME_PREFIX = 'ah-';

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

    const placeholder = `__AH_KEYFRAMES_${keyframes.length}__`;
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

      if (trimmedSelector === ':root') {
        return HERO_SCOPE;
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
      result.replace(`__AH_KEYFRAMES_${index}__`, keyframeBlock),
    scopedCss,
  );
}

const SCOPED_CSS = scopeHeroCss(COMPRESSED_CSS);

function HeroStyles() {
  return <style dangerouslySetInnerHTML={{ __html: SCOPED_CSS }} />;
}

type HoloItem = {
  id: string;
  side: 'left' | 'right';
  top: string;
  inset: string;
  delay: number;
  tag?: string;
  ai?: boolean;
  type:
    | 'pipeline'
    | 'accuracy'
    | 'genai'
    | 'line'
    | 'bars'
    | 'check'
    | 'nlp'
    | 'neural'
    | 'shield'
    | 'chart';
};

type HeroSectionAIProps = {
  heading: ReactNode;
  subheading?: ReactNode;
  subText?: ReactNode;
  buttonText: ReactNode;
  buttonHref?: string;
};

const ARC_RINGS = [
  {
    size: 'min(90vw,1200px)',
    dur: 48,
    opacity: 0.35,
    reverse: false,
    hide: 'arc-lg-hide',
  },
  { size: 'min(72vw,960px)', dur: 32, opacity: 0.5, reverse: true, hide: '' },
  { size: 'min(54vw,720px)', dur: 22, opacity: 0.7, reverse: false, hide: '' },
  {
    size: 'min(36vw,480px)',
    dur: 16,
    opacity: 0.85,
    reverse: false,
    hide: 'arc-lg-hide',
  },
] as const;

const HOLO_ITEMS: HoloItem[] = [
  {
    id: '1',
    side: 'left',
    top: '6%',
    inset: 'clamp(100px,20vw,260px)',
    delay: 0,
    tag: 'Agents',
    ai: true,
    type: 'pipeline',
  },
  {
    id: '2',
    side: 'right',
    top: '14%',
    inset: 'clamp(52px,11vw,140px)',
    delay: 0.1,
    tag: 'ML',
    ai: true,
    type: 'accuracy',
  },
  {
    id: '3',
    side: 'left',
    top: '24%',
    inset: 'clamp(48px,10vw,130px)',
    delay: 0.2,
    tag: 'Gen AI',
    ai: true,
    type: 'genai',
  },
  {
    id: '4',
    side: 'right',
    top: '34%',
    inset: 'clamp(110px,22vw,280px)',
    delay: 0.15,
    type: 'line',
  },
  {
    id: '5',
    side: 'left',
    top: '44%',
    inset: 'clamp(110px,22vw,280px)',
    delay: 0.25,
    type: 'bars',
  },
  {
    id: '6',
    side: 'right',
    top: '54%',
    inset: 'clamp(48px,10vw,130px)',
    delay: 0.3,
    type: 'check',
  },
  {
    id: '7',
    side: 'left',
    top: '64%',
    inset: 'clamp(52px,11vw,140px)',
    delay: 0.35,
    tag: 'NLP',
    ai: true,
    type: 'nlp',
  },
  {
    id: '8',
    side: 'right',
    top: '74%',
    inset: 'clamp(100px,20vw,260px)',
    delay: 0.2,
    tag: 'Neural',
    ai: true,
    type: 'neural',
  },
  {
    id: '9',
    side: 'left',
    top: '84%',
    inset: 'clamp(100px,20vw,260px)',
    delay: 0.4,
    type: 'shield',
  },
  {
    id: '10',
    side: 'right',
    top: '90%',
    inset: 'clamp(56px,11vw,145px)',
    delay: 0.45,
    type: 'chart',
  },
];

const BAR_HEIGHTS = [45, 75, 55, 90, 65];
const NEURAL_PATHS = [
  'M200,150 Q600,80 960,200 T1720,150',
  'M200,930 Q700,860 1100,800 T1720,900',
  'M300,100 Q500,540 280,980',
  'M1620,100 Q1400,540 1640,980',
  'M200,540 H1720',
  'M960,60 Q760,540 960,1020',
];
const NEURAL_LINES = [
  [400, 300, 800, 500],
  [1120, 300, 1520, 500],
  [400, 780, 800, 580],
  [1120, 780, 1520, 580],
  [960, 200, 960, 880],
] as const;
const NEURAL_NODES = [
  [400, 300],
  [800, 500],
  [960, 540],
  [1120, 300],
  [1520, 500],
  [400, 780],
  [800, 580],
  [1120, 780],
  [1520, 580],
] as const;
const BEAMS = [
  {
    cls: 'beam-sm-hide',
    top: '5%',
    left: '12%',
    h: 'min(200px,28vh)',
    dur: 7,
    rot: 15,
    delay: 0,
  },
  {
    cls: '',
    top: '3%',
    left: '35%',
    h: 'min(240px,32vh)',
    dur: 9,
    rot: -8,
    delay: -2,
  },
  {
    cls: 'beam-sm-hide',
    top: '8%',
    right: '28%',
    h: 'min(180px,25vh)',
    dur: 8,
    rot: 12,
    delay: -4,
  },
] as const;
const DIAMONDS = [
  {
    cls: 'geo-sm-hide',
    top: '10%',
    left: 'clamp(20px,4vw,60px)',
    size: 52,
    dur: 22,
  },
  {
    cls: 'geo-sm-hide',
    top: '22%',
    right: 'clamp(20px,4vw,60px)',
    size: 40,
    dur: 18,
    delay: -3,
  },
  {
    cls: 'holo-lg-hide',
    bottom: '15%',
    left: 'clamp(20px,4vw,60px)',
    size: 36,
    dur: 24,
    delay: -6,
  },
] as const;

const cameraVariants = {
  animate: {
    x: ['0%', '-0.3%', '0.2%', '-0.15%', '0%'],
    y: ['0%', '0.2%', '-0.25%', '0.3%', '0%'],
    transition: { duration: 80, repeat: Infinity, ease: 'easeInOut' },
  },
} satisfies Variants;

function holoHide(id: string) {
  if (['5', '6', '7', '8'].includes(id)) return 'holo-lg-hide ah-hide-lg';
  if (['3', '4', '9', '10'].includes(id)) return 'holo-md-hide ah-hide-sm';
  return 'ah-hide-md';
}

function HoloContent({ item }: { item: HoloItem }) {
  switch (item.type) {
    case 'pipeline':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{ display: 'flex', alignItems: 'center', gap: 4 }}
            >
              <span
                className='pipe-node motion-reduce-off'
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  animation: `ah-pipePulse 2s ease-in-out infinite ${i * 0.3}s`,
                }}
              />
              {i < 2 && (
                <span
                  className='pipe-line'
                  style={
                    {
                      width: 12,
                      height: 2,
                      position: 'relative',
                      overflow: 'hidden',
                      ['--i' as string]: i,
                    } as CSSProperties
                  }
                />
              )}
            </span>
          ))}
        </div>
      );
    case 'accuracy':
      return (
        <div
          className='accuracy-ring'
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <span style={{ fontSize: '0.55rem', fontWeight: 800 }}>100%</span>
        </div>
      );
    case 'genai':
      return (
        <svg viewBox='0 0 24 24' width={28} height={28} fill='currentColor'>
          <path d='M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7 7 7 0 0 1-7 7v1.27c.6.34 1 .99 1 1.73a2 2 0 1 1-4 0c0-.74.4-1.39 1-1.73V14a5 5 0 0 0 5-5h-1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5 2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5z' />
        </svg>
      );
    case 'line':
      return (
        <svg width={56} height={32} viewBox='0 0 160 50'>
          <defs>
            <linearGradient id='lineGradAuto' x1='0' y1='0' x2='1' y2='0'>
              <stop offset='0%' stopColor='#0050ff' />
              <stop offset='100%' stopColor='#00c8ff' />
            </linearGradient>
          </defs>
          <path
            className='line-chart-path'
            d='M0,42 L30,38 L60,28 L90,18 L120,12 L160,6'
          />
        </svg>
      );
    case 'bars':
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 3,
            height: 36,
            width: 56,
          }}
        >
          {BAR_HEIGHTS.map((h, i) => (
            <div
              key={i}
              className='bar-fill motion-reduce-off'
              style={{
                flex: 1,
                height: `${h}%`,
                borderRadius: '2px 2px 0 0',
                animation: `ah-barPulse 2.2s ease-in-out infinite ${i * 0.18}s`,
              }}
            />
          ))}
        </div>
      );
    case 'check':
      return (
        <svg viewBox='0 0 24 24' width={28} height={28} fill='currentColor'>
          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
        </svg>
      );
    case 'nlp':
      return (
        <svg viewBox='0 0 24 24' width={28} height={28} fill='currentColor'>
          <path d='M12 2C8.5 2 6 4.5 6 8c0 2.5 1.5 4.7 3.7 5.7L9 22h6l-.7-8.3C16.5 12.7 18 10.5 18 8c0-3.5-2.5-6-6-6zm0 2c2.2 0 4 1.8 4 4 0 1.8-1.2 3.3-2.9 3.8l-.5.2-.3 3.5h-2.6l-.3-3.5-.5-.2C8.2 11.3 7 9.8 7 8c0-2.2 1.8-4 4-4z' />
        </svg>
      );
    case 'neural':
      return (
        <svg viewBox='0 0 24 24' width={28} height={28} fill='currentColor'>
          <circle cx='6' cy='6' r='2' />
          <circle cx='18' cy='6' r='2' />
          <circle cx='12' cy='12' r='2.5' />
          <circle cx='6' cy='18' r='2' />
          <circle cx='18' cy='18' r='2' />
          <path
            d='M7.5 7.5L10.5 10.5M16.5 7.5L13.5 10.5M7.5 16.5L10.5 13.5M16.5 16.5L13.5 13.5'
            fill='none'
            stroke='currentColor'
            strokeWidth='0.8'
            opacity='0.6'
          />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox='0 0 24 24' width={28} height={28} fill='currentColor'>
          <path d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.54-3.07 8.83-7 9.93-3.93-1.1-7-5.39-7-9.93v-4.7l7-3.12zM11 7v6h2V7h-2zm0 8v2h2v-2h-2z' />
        </svg>
      );
    case 'chart':
      return (
        <svg viewBox='0 0 24 24' width={28} height={28} fill='currentColor'>
          <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z' />
        </svg>
      );
    default:
      return null;
  }
}

function useHeroCanvases(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const hero = containerRef.current;
    if (!hero) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let W = 0;
    let H = 0;
    let active = true;
    let visible = true;

    const hubCvs = hero.querySelector<HTMLCanvasElement>('#canvas-hub');
    const neuralCvs = hero.querySelector<HTMLCanvasElement>('#canvas-neural');
    const pathCvs = hero.querySelector<HTMLCanvasElement>('#canvas-pathways');
    const partCvs = hero.querySelector<HTMLCanvasElement>('#canvas-particles');
    const hubCtx = hubCvs?.getContext('2d', { alpha: true }) ?? null;
    const neuralCtx = neuralCvs?.getContext('2d', { alpha: true }) ?? null;
    const pathCtx = pathCvs?.getContext('2d', { alpha: true }) ?? null;
    const partCtx = partCvs?.getContext('2d', { alpha: true }) ?? null;
    if (!hubCtx || !neuralCtx || !pathCtx || !partCtx) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    observer.observe(hero);

    const size = () => {
      const r = hero.getBoundingClientRect();
      W = r.width;
      H = r.height;
    };
    const clearR = () => Math.min(W, H) * 0.24;
    const cx = () => W * 0.5;
    const cy = () => H * 0.5;
    const inClear = (x: number, y: number, r?: number) =>
      Math.hypot(x - cx(), y - cy()) < (r ?? clearR());

    type HubNode = {
      x: number;
      y: number;
      r: number;
      pulse: number;
      hub: boolean;
    };
    type HubEdge = {
      i: number;
      j: number;
      cx?: number;
      cy?: number;
      phase: number;
      radial: boolean;
    };

    let hubNodes: HubNode[] = [];
    let hubEdges: HubEdge[] = [];
    let hubPackets: {
      edge: HubEdge;
      t: number;
      speed: number;
      size: number;
      hue: number;
    }[] = [];
    let hubT = 0;

    const initHub = () => {
      size();
      hubCvs!.width = W * devicePixelRatio;
      hubCvs!.height = H * devicePixelRatio;
      hubCtx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      const cX = cx();
      const cY = cy();
      hubNodes = [];
      [0.42, 0.58, 0.72].forEach((ratio, ri) => {
        const count = 6 + ri * 3;
        const radius = Math.min(W, H) * ratio * 0.5;
        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 2 + ri * 0.3;
          const x = cX + Math.cos(angle) * radius;
          const y = cY + Math.sin(angle) * radius;
          if (x < 20 || x > W - 20 || y < 20 || y > H - 20) continue;
          hubNodes.push({
            x,
            y,
            r: 1.8 + Math.random() * 1.5,
            pulse: Math.random() * 6.28,
            hub: ri === 0 && i % 4 === 0,
          });
        }
      });
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const dist = Math.min(W, H) * (0.34 + Math.random() * 0.06);
        hubNodes.push({
          x: cX + Math.cos(angle) * dist,
          y: cY + Math.sin(angle) * dist,
          r: 2.5 + Math.random(),
          pulse: Math.random() * 6.28,
          hub: true,
        });
      }
      hubEdges = [];
      hubNodes.forEach((n, i) => {
        if (n.hub)
          hubEdges.push({
            i,
            j: -1,
            cx: cX,
            cy: cY,
            phase: Math.random(),
            radial: true,
          });
        hubNodes.forEach((m, j) => {
          if (j <= i) return;
          if (
            Math.hypot(n.x - m.x, n.y - m.y) < Math.min(W, H) * 0.12 &&
            Math.random() < 0.28
          ) {
            const midX = (n.x + m.x) / 2;
            const midY = (n.y + m.y) / 2;
            if (!inClear(midX, midY, clearR() * 0.9))
              hubEdges.push({ i, j, phase: Math.random(), radial: false });
          }
        });
      });
      hubPackets = hubEdges
        .slice(0, Math.min(hubEdges.length, 24))
        .map((e, idx) => ({
          edge: e,
          t: Math.random(),
          speed: 0.003 + Math.random() * 0.004,
          size: 1.2 + Math.random() * 1.4,
          hue: idx % 3,
        }));
    };

    type NNNode = { x: number; y: number; r: number; pulse: number };
    let nnLayers: NNNode[][] = [];
    let nnSignals: {
      from: NNNode;
      to: NNNode;
      t: number;
      speed: number;
      weight: number;
    }[] = [];
    let nnT = 0;

    const initNeural = () => {
      size();
      neuralCvs!.width = W * devicePixelRatio;
      neuralCvs!.height = H * devicePixelRatio;
      neuralCtx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      const cX = cx();
      const cY = cy();
      const counts = [4, 6, 6, 4];
      const spreadX = Math.min(W, H) * 0.38;
      const spreadY = Math.min(W, H) * 0.22;
      nnLayers = counts.map((count, li) => {
        const layerX = cX - spreadX / 2 + (li / (counts.length - 1)) * spreadX;
        const nodes: NNNode[] = [];
        for (let i = 0; i < count; i++) {
          const y = cY - spreadY / 2 + (i / (count - 1 || 1)) * spreadY;
          if (inClear(layerX, y, clearR() * 0.95)) continue;
          nodes.push({
            x: layerX,
            y,
            r: li === 0 || li === counts.length - 1 ? 2.8 : 2,
            pulse: Math.random() * 6.28,
          });
        }
        return nodes;
      });
      nnSignals = [];
      for (let li = 0; li < nnLayers.length - 1; li++) {
        nnLayers[li].forEach((from) => {
          nnLayers[li + 1].forEach((to) => {
            if (Math.random() < 0.35)
              nnSignals.push({
                from,
                to,
                t: Math.random(),
                speed: 0.005 + Math.random() * 0.006,
                weight: 0.3 + Math.random() * 0.6,
              });
          });
        });
      }
    };

    type Pathway = {
      sx: number;
      sy: number;
      ex: number;
      ey: number;
      cpx: number;
      cpy: number;
      speed: number;
      particles: { t: number; size: number }[];
    };
    let pathways: Pathway[] = [];
    let pathT = 0;

    const initPathways = () => {
      size();
      pathCvs!.width = W * devicePixelRatio;
      pathCvs!.height = H * devicePixelRatio;
      pathCtx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      pathways = Array.from({ length: 6 }, (_, i) => {
        const side = i % 4;
        let sx: number;
        let sy: number;
        let ex: number;
        let ey: number;
        if (side === 0) {
          sx = 0;
          sy = H * (0.1 + Math.random() * 0.8);
          ex = W;
          ey = H * (0.1 + Math.random() * 0.8);
        } else if (side === 1) {
          sx = W * (0.1 + Math.random() * 0.8);
          sy = 0;
          ex = W * (0.1 + Math.random() * 0.8);
          ey = H;
        } else if (side === 2) {
          sx = W;
          sy = H * (0.1 + Math.random() * 0.8);
          ex = 0;
          ey = H * (0.1 + Math.random() * 0.8);
        } else {
          sx = W * (0.1 + Math.random() * 0.8);
          sy = H;
          ex = W * (0.1 + Math.random() * 0.8);
          ey = 0;
        }
        return {
          sx,
          sy,
          ex,
          ey,
          cpx: cx() + (Math.random() - 0.5) * W * 0.3,
          cpy: cy() + (Math.random() - 0.5) * H * 0.3,
          speed: 0.0025 + Math.random() * 0.003,
          particles: Array.from({ length: 4 }, () => ({
            t: Math.random(),
            size: 1 + Math.random(),
          })),
        };
      });
    };

    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
    }[] = [];
    let pulses: {
      x: number;
      y: number;
      r: number;
      maxR: number;
      life: number;
    }[] = [];

    const initParticles = () => {
      size();
      partCvs!.width = W * devicePixelRatio;
      partCvs!.height = H * devicePixelRatio;
      partCtx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      const n = Math.min(60, Math.floor((W * H) / 18000));
      particles = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 0.4 + Math.random() * 1.4,
        a: Math.random() * 6.28,
      }));
      pulses = Array.from({ length: 4 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: 0,
        maxR: 40 + Math.random() * 60,
        life: Math.random(),
      }));
    };

    let rafHub = 0;
    let rafNeural = 0;
    let rafPath = 0;
    let rafPart = 0;
    let frameSkip = 0;

    const drawHub = () => {
      if (!active || !visible) {
        rafHub = requestAnimationFrame(drawHub);
        return;
      }
      hubCtx.clearRect(0, 0, W, H);
      hubT += 0.012;
      const cX = cx();
      const cY = cy();
      const cr = clearR();
      hubEdges.forEach((e) => {
        const a = hubNodes[e.i];
        const ax = a.x;
        const ay = a.y;
        const bx = e.radial ? e.cx! : hubNodes[e.j].x;
        const by = e.radial ? e.cy! : hubNodes[e.j].y;
        const fade = inClear((ax + bx) / 2, (ay + by) / 2, cr * 0.85)
          ? 0.12
          : 1;
        const alpha = (0.1 + Math.sin(hubT * 0.9 + e.phase * 5) * 0.04) * fade;
        hubCtx.beginPath();
        hubCtx.moveTo(ax, ay);
        hubCtx.lineTo(bx, by);
        hubCtx.strokeStyle = `rgba(61,123,255,${alpha})`;
        hubCtx.lineWidth = e.radial ? 0.8 : 0.5;
        hubCtx.stroke();
      });
      hubPackets.forEach((p) => {
        p.t += p.speed;
        if (p.t > 1) p.t = 0;
        const e = p.edge;
        const ax = hubNodes[e.i].x;
        const ay = hubNodes[e.i].y;
        const bx = e.radial ? e.cx! : hubNodes[e.j].x;
        const by = e.radial ? e.cy! : hubNodes[e.j].y;
        const px = ax + (bx - ax) * p.t;
        const py = ay + (by - ay) * p.t;
        const colors = [
          'rgba(0,200,255,',
          'rgba(61,123,255,',
          'rgba(0,80,255,',
        ];
        hubCtx.beginPath();
        hubCtx.arc(px, py, p.size, 0, 6.28);
        hubCtx.fillStyle = colors[p.hue] + '0.9)';
        hubCtx.fill();
      });
      hubNodes.forEach((n) => {
        const fade =
          Math.hypot(n.x - cX, n.y - cY) < cr
            ? (Math.hypot(n.x - cX, n.y - cY) / cr) * 0.25
            : 1;
        const glow = 0.45 + Math.sin(hubT * 1.2 + n.pulse) * 0.25;
        hubCtx.beginPath();
        hubCtx.arc(n.x, n.y, n.r * (n.hub ? 1.4 : 1), 0, 6.28);
        hubCtx.fillStyle =
          (n.hub ? 'rgba(0,200,255,' : 'rgba(110,160,255,') + glow * fade + ')';
        hubCtx.fill();
      });
      rafHub = requestAnimationFrame(drawHub);
    };

    const drawNeural = () => {
      if (!active || !visible) {
        rafNeural = requestAnimationFrame(drawNeural);
        return;
      }
      frameSkip += 1;
      if (frameSkip % 2 !== 0) {
        rafNeural = requestAnimationFrame(drawNeural);
        return;
      }
      neuralCtx.clearRect(0, 0, W, H);
      nnT += 0.014;
      const cr = clearR();
      for (let li = 0; li < nnLayers.length - 1; li++) {
        nnLayers[li].forEach((from) =>
          nnLayers[li + 1].forEach((to) => {
            if (inClear((from.x + to.x) / 2, (from.y + to.y) / 2, cr * 0.85))
              return;
            neuralCtx.beginPath();
            neuralCtx.moveTo(from.x, from.y);
            neuralCtx.lineTo(to.x, to.y);
            neuralCtx.strokeStyle = 'rgba(61,123,255,0.05)';
            neuralCtx.lineWidth = 0.5;
            neuralCtx.stroke();
          }),
        );
      }
      nnSignals.forEach((s) => {
        s.t += s.speed;
        if (s.t > 1) s.t = 0;
        const x = s.from.x + (s.to.x - s.from.x) * s.t;
        const y = s.from.y + (s.to.y - s.from.y) * s.t;
        if (inClear(x, y, cr * 0.9)) return;
        neuralCtx.beginPath();
        neuralCtx.arc(x, y, 1.6 * s.weight, 0, 6.28);
        neuralCtx.fillStyle = `rgba(0,200,255,${0.55 + Math.sin(nnT * 2.5 + s.t * 8) * 0.25})`;
        neuralCtx.fill();
      });
      nnLayers.forEach((layer, li) =>
        layer.forEach((n) => {
          if (inClear(n.x, n.y, cr * 0.88)) return;
          const glow = 0.5 + Math.sin(nnT * 1.4 + n.pulse) * 0.3;
          const edge = li === 0 || li === nnLayers.length - 1;
          neuralCtx.beginPath();
          neuralCtx.arc(n.x, n.y, n.r * (edge ? 1.2 : 1), 0, 6.28);
          neuralCtx.fillStyle = edge
            ? `rgba(0,200,255,${glow * 0.65})`
            : `rgba(110,160,255,${glow * 0.45})`;
          neuralCtx.fill();
        }),
      );
      rafNeural = requestAnimationFrame(drawNeural);
    };

    const drawPathways = () => {
      if (!active || !visible) {
        rafPath = requestAnimationFrame(drawPathways);
        return;
      }
      pathCtx.clearRect(0, 0, W, H);
      pathT += 0.011;
      const cr = clearR();
      pathways.forEach((p, pi) => {
        pathCtx.beginPath();
        pathCtx.moveTo(p.sx, p.sy);
        pathCtx.quadraticCurveTo(p.cpx, p.cpy, p.ex, p.ey);
        const midX = 0.25 * p.sx + 0.5 * p.cpx + 0.25 * p.ex;
        const midY = 0.25 * p.sy + 0.5 * p.cpy + 0.25 * p.ey;
        const fade = inClear(midX, midY, cr) ? 0.15 : 1;
        pathCtx.strokeStyle = `rgba(61,123,255,${(0.06 + pi * 0.005) * fade})`;
        pathCtx.lineWidth = 0.7;
        pathCtx.stroke();
        p.particles.forEach((pt) => {
          pt.t += p.speed;
          if (pt.t > 1) pt.t = 0;
          const t = pt.t;
          const x =
            (1 - t) ** 2 * p.sx + 2 * (1 - t) * t * p.cpx + t ** 2 * p.ex;
          const y =
            (1 - t) ** 2 * p.sy + 2 * (1 - t) * t * p.cpy + t ** 2 * p.ey;
          if (inClear(x, y, cr * 0.9)) return;
          pathCtx.beginPath();
          pathCtx.arc(x, y, pt.size, 0, 6.28);
          pathCtx.fillStyle = `rgba(0,200,255,${0.35 + Math.sin(pathT + pt.t * 10) * 0.15})`;
          pathCtx.fill();
        });
      });
      rafPath = requestAnimationFrame(drawPathways);
    };

    const drawParticles = () => {
      if (!active || !visible) {
        rafPart = requestAnimationFrame(drawParticles);
        return;
      }
      partCtx.clearRect(0, 0, W, H);
      const cX = cx();
      const cY = cy();
      const cr = clearR();
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        const dist = Math.hypot(p.x - cX, p.y - cY);
        const fade =
          dist < cr ? (dist / cr) * 0.15 : 0.4 + Math.sin(p.a) * 0.3;
        partCtx.beginPath();
        partCtx.arc(p.x, p.y, p.r, 0, 6.28);
        partCtx.fillStyle = `rgba(180,220,255,${fade * 0.4})`;
        partCtx.fill();
        p.a += 0.02;
      });
      pulses.forEach((p) => {
        p.life += 0.006;
        if (p.life > 1) {
          p.life = 0;
          p.x = Math.random() * W;
          p.y = Math.random() * H;
        }
        p.r = p.maxR * p.life;
        if (inClear(p.x, p.y, cr)) return;
        partCtx.beginPath();
        partCtx.arc(p.x, p.y, p.r, 0, 6.28);
        partCtx.strokeStyle = `rgba(0,200,255,${(1 - p.life) * 0.18})`;
        partCtx.lineWidth = 1;
        partCtx.stroke();
      });
      rafPart = requestAnimationFrame(drawParticles);
    };

    const initAll = () => {
      initHub();
      initNeural();
      initPathways();
      initParticles();
    };

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(initAll, 150);
    };

    initAll();
    drawHub();
    drawNeural();
    drawPathways();
    drawParticles();
    window.addEventListener('resize', onResize);

    return () => {
      active = false;
      cancelAnimationFrame(rafHub);
      cancelAnimationFrame(rafNeural);
      cancelAnimationFrame(rafPath);
      cancelAnimationFrame(rafPart);
      window.removeEventListener('resize', onResize);
      window.clearTimeout(resizeTimer);
      observer.disconnect();
    };
  }, [containerRef]);
}

export default function AutomationHero({
  heading,
  subheading,
  subText,
  buttonText,
  buttonHref = '#',
}: HeroSectionAIProps) {
  const heroSubheading = subheading ?? subText;
  const heroRef = useRef<HTMLElement>(null);
  useHeroCanvases(heroRef);

  return (
    <>
      <HeroStyles />
      <header ref={heroRef} className='ah-hero'>
        <motion.div
          className='ah-rig'
          variants={cameraVariants}
          animate='animate'
        >
          <div className='scene-bg ah-abs' />
          <div
            className='diamond-lattice motion-reduce-off ah-abs'
            style={{ inset: '-20%', opacity: 0.5 }}
          />
          <motion.div
            className='radial-sweep motion-reduce-off ah-z1 ah-ring-center'
            style={{ width: 'min(140vw,1800px)', height: 'min(140vw,1800px)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          />
          <div className='vg-1 ah-glow-orb ah-glow-1' />
          <div className='vg-2 ah-glow-orb ah-glow-2' />
          <div className='vg-3 ah-glow-orb ah-glow-3' />
          <div
            className='ah-ring-center ah-z1'
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          >
            {ARC_RINGS.map((ring, i) => (
              <motion.div
                key={i}
                className={`arc-ring ah-ring-center rounded-full ${ring.hide}`}
                style={{
                  width: ring.size,
                  height: ring.size,
                  opacity: ring.opacity,
                  ['--ar-dur' as string]: `${ring.dur}s`,
                }}
                animate={{ rotate: ring.reverse ? -360 : 360 }}
                transition={{
                  duration: ring.dur,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}
          </div>
          {DIAMONDS.map((d, i) => (
            <div
              key={i}
              className={`geo-diamond ah-diamond motion-reduce-off ${d.cls}`}
              style={{
                top: 'top' in d ? d.top : undefined,
                bottom: 'bottom' in d ? d.bottom : undefined,
                left: 'left' in d ? d.left : undefined,
                right: 'right' in d ? d.right : undefined,
                width: d.size,
                height: d.size,
                animation: `ah-diamondFloat ${d.dur}s ease-in-out infinite`,
                animationDelay: `${'delay' in d ? d.delay : 0}s`,
              }}
            />
          ))}
          <canvas
            id='canvas-hub'
            className='ah-canvas ah-z2 motion-reduce-hide'
          />
          <canvas
            id='canvas-neural'
            className='ah-canvas ah-z3 motion-reduce-hide'
          />
          <canvas
            id='canvas-pathways'
            className='ah-canvas ah-z4 motion-reduce-hide'
          />
          <canvas
            id='canvas-particles'
            className='ah-canvas ah-z5 motion-reduce-hide'
          />
          <div className='ah-core ah-z2' aria-hidden>
            {[4, 3.2, 2.6].map((dur, i) => (
              <div
                key={i}
                className='ai-core-ring motion-reduce-off'
                style={{
                  position: 'absolute',
                  borderRadius: '50%',
                  inset: i === 0 ? 0 : i === 1 ? '12%' : '24%',
                  borderStyle: i === 2 ? 'dashed' : 'solid',
                  animation: `ah-aiCorePulse ${dur}s ease-in-out infinite`,
                  animationDelay: `${i * -0.8}s`,
                }}
              />
            ))}
            <div
              className='ai-core-glow motion-reduce-off'
              style={{
                position: 'absolute',
                inset: '30%',
                borderRadius: '50%',
                animation: 'ah-aiGlow 3s ease-in-out infinite',
              }}
            />
            <svg
              className='motion-reduce-off'
              style={{
                position: 'absolute',
                inset: '18%',
                opacity: 0.5,
                animation: 'ah-aiCoreSpin 40s linear infinite',
              }}
              viewBox='0 0 200 200'
            >
              <circle
                cx='100'
                cy='100'
                r='80'
                fill='none'
                stroke='rgba(0,200,255,0.12)'
                strokeWidth='0.5'
                strokeDasharray='4 8'
              />
              <circle
                cx='100'
                cy='100'
                r='60'
                fill='none'
                stroke='rgba(61,123,255,0.15)'
                strokeWidth='0.5'
              />
            </svg>
            <span
              className='ai-core-label motion-reduce-off'
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(2rem,5vw,3.5rem)',
                fontWeight: 800,
                letterSpacing: '0.08em',
                animation: 'ah-aiLabelPulse 3s ease-in-out infinite',
              }}
            >
              AI
            </span>
          </div>
          <svg
            className='ah-neural ah-z5'
            viewBox='0 0 1920 1080'
            preserveAspectRatio='xMidYMid meet'
          >
            {NEURAL_PATHS.map((d, i) => (
              <path
                key={i}
                d={d}
                className='neural-path motion-reduce-off'
                opacity={i > 4 ? 0.6 : 1}
              />
            ))}
            {NEURAL_LINES.map(([x1, y1, x2, y2], i) => (
              <line
                key={`l${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                className='neural-path motion-reduce-off'
                opacity={i === 4 ? 0.5 : 1}
              />
            ))}
            {NEURAL_NODES.map(([nodeCx, nodeCy], i) => (
              <circle
                key={`n${i}`}
                cx={nodeCx}
                cy={nodeCy}
                r={nodeCx === 960 ? 6 : 4}
                className='neural-node motion-reduce-off'
              />
            ))}
          </svg>
          {BEAMS.map((b, i) => (
            <div
              key={i}
              className={`energy-beam ah-beam motion-reduce-off ah-z5 ${b.cls}`}
              style={{
                position: 'absolute',
                top: b.top,
                left: 'left' in b ? b.left : undefined,
                right: 'right' in b ? b.right : undefined,
                height: b.h,
                rotate: `${b.rot}deg`,
                animation: `ah-beamDrop ${b.dur}s linear infinite`,
                animationDelay: `${b.delay}s`,
              }}
            />
          ))}
          {HOLO_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`ah-holo ah-z6 ${item.ai ? 'holo-panel--ai' : ''} ${holoHide(item.id)}`}
              style={
                {
                  top: item.top,
                  [item.side]: item.inset,
                  ['--hf-delay' as string]: `${item.delay}s`,
                  animation: `ah-holoFloat ${17 + item.delay * 2}s ease-in-out infinite`,
                  animationDelay: `${item.delay}s`,
                } as CSSProperties
              }
            >
              {item.tag && (
                <span
                  className='ai-tag'
                  style={{
                    position: 'absolute',
                    top: 4,
                    right: 6,
                    fontSize: '0.5rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  {item.tag}
                </span>
              )}
              <div className='ah-icon'>
                <HoloContent item={item} />
              </div>
            </div>
          ))}
          <div className='content-vignette ah-abs ah-z10' />
        </motion.div>
        <motion.div
          className='ah-z20 ah-content'
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className='ah-title'>{heading}</h1>
          {heroSubheading ? <p className='ah-sub'>{heroSubheading}</p> : null}
          <div className='ah-cta-row'>
            <a href={buttonHref} className='ah-cta cta-shine'>
              <span style={{ position: 'relative', zIndex: 1 }}>
                {buttonText}
              </span>
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2.5'
                style={{ position: 'relative', zIndex: 1 }}
              >
                <path d='M5 12h14M12 5l7 7-7 7' />
              </svg>
            </a>
          </div>
        </motion.div>
      </header>
    </>
  );
}
