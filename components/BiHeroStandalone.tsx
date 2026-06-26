'use client';

/**
 * BI Hero — Single-file standalone component
 * Next.js + Framer Motion + Tailwind (compressed CSS embedded)
 *
 * Usage:
 *   import BiHeroStandalone from "./BiHeroStandalone";
 *   <BiHeroStandalone heading="..." subheading="..." buttonText="..." />
 *
 * Requires: react, framer-motion
 */

import {
  useRef,
  useState,
  useCallback,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import { motion } from 'framer-motion';

type HeroSectionBIProps = {
  heading?: ReactNode;
  subheading?: ReactNode;
  subText?: ReactNode;
  buttonText?: ReactNode;
};

const BI_HERO_COMPRESSED_CSS =
  '*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.19 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-feature-settings:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.bottom-\\[-6\\%\\]{bottom:-6%}.bottom-\\[22\\%\\]{bottom:22%}.bottom-\\[30\\%\\]{bottom:30%}.left-1\\/2{left:50%}.left-\\[10\\%\\]{left:10%}.left-\\[14\\%\\]{left:14%}.left-\\[22\\%\\]{left:22%}.left-\\[24\\%\\]{left:24%}.left-\\[4\\%\\]{left:4%}.left-\\[6\\%\\]{left:6%}.left-\\[8\\%\\]{left:8%}.left-\\[clamp\\(16px\\2c 3\\.5vw\\2c 48px\\)\\]{left:clamp(16px,3.5vw,48px)}.left-\\[clamp\\(26px\\2c 5\\.5vw\\2c 80px\\)\\]{left:clamp(26px,5.5vw,80px)}.left-auto{left:auto}.right-\\[20\\%\\]{right:20%}.right-\\[6\\%\\]{right:6%}.right-\\[8\\%\\]{right:8%}.right-\\[clamp\\(16px\\2c 3\\.5vw\\2c 48px\\)\\]{right:clamp(16px,3.5vw,48px)}.right-\\[clamp\\(26px\\2c 5\\.5vw\\2c 80px\\)\\]{right:clamp(26px,5.5vw,80px)}.top-0{top:0}.top-1\\/2{top:50%}.top-\\[-8\\%\\]{top:-8%}.top-\\[12\\%\\]{top:12%}.top-\\[16\\%\\]{top:16%}.top-\\[20\\%\\]{top:20%}.top-\\[22\\%\\]{top:22%}.top-\\[28\\%\\]{top:28%}.top-\\[35\\%\\]{top:35%}.top-\\[38\\%\\]{top:38%}.top-\\[4\\%\\]{top:4%}.top-\\[40\\%\\]{top:40%}.top-\\[44\\%\\]{top:44%}.top-\\[48\\%\\]{top:48%}.top-\\[58\\%\\]{top:58%}.top-\\[60\\%\\]{top:60%}.top-\\[72\\%\\]{top:72%}.top-\\[76\\%\\]{top:76%}.top-\\[8\\%\\]{top:8%}.top-\\[88\\%\\]{top:88%}.top-\\[90\\%\\]{top:90%}.z-20{z-index:20}.z-\\[1\\]{z-index:1}.z-\\[2\\]{z-index:2}.z-\\[3\\]{z-index:3}.z-\\[4\\]{z-index:4}.z-\\[5\\]{z-index:5}.z-\\[6\\]{z-index:6}.mx-auto{margin-left:auto;margin-right:auto}.mb-10{margin-bottom:2.5rem}.mb-8{margin-bottom:2rem}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.hidden{display:none}.h-0\\.5{height:.125rem}.h-1\\.5{height:.375rem}.h-11{height:2.75rem}.h-8{height:2rem}.h-\\[21px\\]{height:21px}.h-\\[26vw\\]{height:26vw}.h-\\[34px\\]{height:34px}.h-\\[36vw\\]{height:36vw}.h-\\[44vw\\]{height:44vw}.h-\\[52px\\]{height:52px}.h-\\[7px\\]{height:7px}.h-\\[92\\%\\]{height:92%}.h-full{height:100%}.min-h-svh{min-height:100svh}.w-1\\.5{width:.375rem}.w-11{width:2.75rem}.w-14{width:3.5rem}.w-\\[21px\\]{width:21px}.w-\\[26vw\\]{width:26vw}.w-\\[34px\\]{width:34px}.w-\\[36vw\\]{width:36vw}.w-\\[44vw\\]{width:44vw}.w-\\[52px\\]{width:52px}.w-\\[55\\%\\]{width:55%}.w-\\[66px\\]{width:66px}.w-\\[7px\\]{width:7px}.w-\\[92\\%\\]{width:92%}.w-\\[min\\(180px\\2c 26vw\\)\\]{width:min(180px,26vw)}.w-\\[min\\(200px\\2c 28vw\\)\\]{width:min(200px,28vw)}.w-\\[min\\(220px\\2c 30vw\\)\\]{width:min(220px,30vw)}.w-\\[min\\(240px\\2c 32vw\\)\\]{width:min(240px,32vw)}.w-full{width:100%}.max-w-\\[550px\\]{max-width:550px}.max-w-\\[840px\\]{max-width:840px}.flex-1{flex:1 1 0%}.origin-bottom{transform-origin:bottom}.-translate-x-1\\/2{--tw-translate-x:-50%}.-translate-x-1\\/2,.-translate-y-1\\/2{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y:-50%}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-center{justify-content:center}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.gap-\\[3px\\]{gap:3px}.overflow-hidden{overflow:hidden}.rounded-\\[13px\\]{border-radius:13px}.rounded-full{border-radius:9999px}.rounded-t-sm{border-top-left-radius:.125rem;border-top-right-radius:.125rem}.border{border-width:1px}.border-none{border-style:none}.border-blue\\/20{border-color:rgba(77,124,255,.2)}.border-blue\\/30{border-color:rgba(77,124,255,.3)}.border-white\\/10{border-color:hsla(0,0%,100%,.1)}.bg-blue{--tw-bg-opacity:1;background-color:rgb(77 124 255/var(--tw-bg-opacity,1))}.bg-blue-light{--tw-bg-opacity:1;background-color:rgb(107 154 255/var(--tw-bg-opacity,1))}.bg-blue\\/\\[0\\.04\\]{background-color:rgba(77,124,255,.04)}.bg-primary\\/20{background-color:rgba(0,44,206,.2)}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.bg-\\[conic-gradient\\(\\#6b9aff_0\\%_68\\%\\2c rgba\\(77\\2c 124\\2c 255\\2c 0\\.15\\)_68\\%\\)\\]{background-image:conic-gradient(#6b9aff 0 68%,rgba(77,124,255,.15) 68%)}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.bg-gradient-to-t{background-image:linear-gradient(to top,var(--tw-gradient-stops))}.bg-widget-grad{background-image:linear-gradient(140deg,rgba(0,26,128,.38),rgba(0,0,0,.48))}.from-blue\\/10{--tw-gradient-from:rgba(77,124,255,.1) var(--tw-gradient-from-position);--tw-gradient-to:rgba(77,124,255,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.from-primary{--tw-gradient-from:#002cce var(--tw-gradient-from-position);--tw-gradient-to:rgba(0,44,206,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.from-transparent{--tw-gradient-from:transparent var(--tw-gradient-from-position);--tw-gradient-to:transparent var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.via-blue-deep{--tw-gradient-to:rgba(0,26,128,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),#001a80 var(--tw-gradient-via-position),var(--tw-gradient-to)}.via-blue\\/50{--tw-gradient-to:rgba(77,124,255,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),rgba(77,124,255,.5) var(--tw-gradient-via-position),var(--tw-gradient-to)}.via-white\\/20{--tw-gradient-to:hsla(0,0%,100%,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),hsla(0,0%,100%,.2) var(--tw-gradient-via-position),var(--tw-gradient-to)}.to-black{--tw-gradient-to:#000 var(--tw-gradient-to-position)}.to-blue-light{--tw-gradient-to:#6b9aff var(--tw-gradient-to-position)}.to-transparent{--tw-gradient-to:transparent var(--tw-gradient-to-position)}.p-\\[9px\\]{padding:9px}.px-3\\.5{padding-left:.875rem;padding-right:.875rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-\\[34px\\]{padding-left:34px;padding-right:34px}.py-1\\.5{padding-bottom:.375rem;padding-top:.375rem}.py-\\[15px\\]{padding-bottom:15px;padding-top:15px}.text-center{text-align:center}.text-\\[0\\.68rem\\]{font-size:.68rem}.text-\\[0\\.94rem\\]{font-size:.94rem}.text-\\[clamp\\(0\\.95rem\\2c 1\\.8vw\\2c 1\\.13rem\\)\\]{font-size:clamp(.95rem,1.8vw,1.13rem)}.text-\\[clamp\\(1\\.8rem\\2c 4vw\\2c 2\\.95rem\\)\\]{font-size:clamp(1.8rem,4vw,2.95rem)}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.not-italic{font-style:normal}.leading-\\[1\\.1\\]{line-height:1.1}.leading-\\[1\\.65\\]{line-height:1.65}.tracking-\\[-0\\.03em\\]{letter-spacing:-.03em}.tracking-\\[0\\.12em\\]{letter-spacing:.12em}.text-blue{--tw-text-opacity:1;color:rgb(77 124 255/var(--tw-text-opacity,1))}.text-blue-light{--tw-text-opacity:1;color:rgb(107 154 255/var(--tw-text-opacity,1))}.text-blue-light\\/65{color:rgba(107,154,255,.65)}.text-primary{--tw-text-opacity:1;color:rgb(0 44 206/var(--tw-text-opacity,1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.text-white\\/70{color:hsla(0,0%,100%,.7)}.opacity-45{opacity:.45}.opacity-\\[0\\.35\\]{opacity:.35}.mix-blend-screen{mix-blend-mode:screen}.shadow-\\[0_0_10px_\\#4d7cff\\]{--tw-shadow:0 0 10px #4d7cff;--tw-shadow-colored:0 0 10px var(--tw-shadow-color)}.shadow-\\[0_0_10px_\\#4d7cff\\],.shadow-\\[0_4px_28px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.35\\)\\2c inset_0_1px_0_rgba\\(255\\2c 255\\2c 255\\2c 0\\.06\\)\\]{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-\\[0_4px_28px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.35\\)\\2c inset_0_1px_0_rgba\\(255\\2c 255\\2c 255\\2c 0\\.06\\)\\]{--tw-shadow:0 4px 28px rgba(0,0,0,.35),inset 0 1px 0 hsla(0,0%,100%,.06);--tw-shadow-colored:0 4px 28px var(--tw-shadow-color),inset 0 1px 0 var(--tw-shadow-color)}.shadow-\\[0_8px_32px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.18\\)\\]{--tw-shadow:0 8px 32px rgba(0,0,0,.18);--tw-shadow-colored:0 8px 32px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.ring{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.blur-\\[0\\.5px\\]{--tw-blur:blur(0.5px)}.blur-\\[0\\.5px\\],.blur-\\[85px\\]{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[85px\\]{--tw-blur:blur(85px)}.drop-shadow-\\[0_2px_28px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.55\\)\\]{--tw-drop-shadow:drop-shadow(0 2px 28px rgba(0,0,0,.55))}.drop-shadow-\\[0_2px_28px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.55\\)\\],.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-\\[14px\\]{--tw-backdrop-blur:blur(14px)}.backdrop-blur-\\[14px\\],.backdrop-blur-sm{backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.backdrop-blur-sm{--tw-backdrop-blur:blur(4px)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-\\[450ms\\]{transition-duration:.45s}.ease-\\[cubic-bezier\\(0\\.22\\2c 1\\2c 0\\.36\\2c 1\\)\\]{transition-timing-function:cubic-bezier(.22,1,.36,1)}.perspective-grid{transform:perspective(650px) rotateX(56deg) translateY(28%);transform-origin:center 78%}.hero-content-3d{transform:perspective(1400px) rotateX(var(--tx,0deg)) rotateY(var(--ty,0deg))}.orbit-ring-inner:before{border:1px dashed rgba(77,124,255,.15);border-radius:9999px;content:"";inset:-1px;position:absolute}.widget-donut-hole:after{background:rgba(8,14,36,.92);border-radius:9999px;content:"";inset:8px;position:absolute}@media (prefers-reduced-motion:reduce){.motion-safe-only{display:none!important}}@media not all and (min-width:1024px){.max-lg\\:block{display:block}.max-lg\\:hidden{display:none}}@media not all and (min-width:768px){.max-md\\:hidden{display:none}}@media not all and (min-width:640px){.max-sm\\:hidden{display:none}}@media (min-width:640px){.sm\\:block{display:block}}';

const HERO_SCOPE = '.bi-hero-root';
const KEYFRAME_PREFIX = 'bi-';

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

    const placeholder = `__BI_KEYFRAMES_${keyframes.length}__`;
    keyframes.push(css.slice(start, end + 1));
    scopedSource += placeholder;
    index = end + 1;
  }

  return { scopedSource, keyframes };
}

function stripGlobalRules(css: string) {
  return css.replace(/body\{[^}]*\}/g, '');
}

function scopeSelectorList(selectorList: string) {
  return selectorList
    .split(',')
    .map((selector) => {
      const trimmedSelector = selector.trim();

      if (!trimmedSelector || trimmedSelector.startsWith(HERO_SCOPE)) {
        return trimmedSelector;
      }

      if (trimmedSelector === 'body') {
        return null;
      }

      if ([':root', ':host', 'html'].includes(trimmedSelector)) {
        return HERO_SCOPE;
      }

      return `${HERO_SCOPE} ${trimmedSelector}`;
    })
    .filter(Boolean)
    .join(',');
}

function scopeHeroCss(css: string) {
  const { scopedSource, keyframes } = extractKeyframeBlocks(
    namespaceHeroKeyframes(stripGlobalRules(css)),
  );
  const scopedCss = scopedSource.replace(
    /(^|[{};])([^{}@;]+){/g,
    (match, boundary: string, selectorList: string) => {
      const scoped = scopeSelectorList(selectorList);
      if (!scoped) return '';
      return `${boundary}${scoped}{`;
    },
  );

  return keyframes.reduce(
    (result, keyframeBlock, index) =>
      result.replace(`__BI_KEYFRAMES_${index}__`, keyframeBlock),
    scopedCss,
  );
}

const BI_HERO_SCOPED_CSS = scopeHeroCss(BI_HERO_COMPRESSED_CSS);

function BiHeroStyles() {
  return <style dangerouslySetInnerHTML={{ __html: BI_HERO_SCOPED_CSS }} />;
}

const subscribe = (cb: () => void) => {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', cb);
  return () => mq.removeEventListener('change', cb);
};

const getSnapshot = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const getServerSnapshot = () => false;

function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function useFinePointer() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia('(pointer: fine)');
      mq.addEventListener('change', cb);
      return () => mq.removeEventListener('change', cb);
    },
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches,
    () => true,
  );
}

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '80px', threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return inView;
}

function SceneCanvas({
  containerRef,
  active,
}: {
  containerRef: React.RefObject<HTMLElement | null>;
  active: boolean;
}) {
  const reduced = useReducedMotion();
  const netRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<HTMLCanvasElement>(null);
  const pathRef = useRef<HTMLCanvasElement>(null);
  const partRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (reduced || !active) return;
    const hero = containerRef.current;
    if (!hero) return;

    const netCvs = netRef.current;
    const streamCvs = streamRef.current;
    const pathCvs = pathRef.current;
    const partCvs = partRef.current;
    if (!netCvs || !streamCvs || !pathCvs || !partCvs) return;

    const netCtx = netCvs.getContext('2d', { alpha: true })!;
    const streamCtx = streamCvs.getContext('2d', { alpha: true })!;
    const pathCtx = pathCvs.getContext('2d', { alpha: true })!;
    const partCtx = partCvs.getContext('2d', { alpha: true })!;

    let W = 0;
    let H = 0;
    let nodes: {
      x: number;
      y: number;
      r: number;
      pulse: number;
      tier: number;
    }[] = [];
    let edges: { i: number; j: number; key: string; phase: number }[] = [];
    let packets: {
      edge: (typeof edges)[0];
      t: number;
      speed: number;
      size: number;
      hue: number;
    }[] = [];
    let netT = 0;
    let streams: {
      yBase: number;
      amp: number;
      freq: number;
      phase: number;
      speed: number;
      particles: { x: number; offset: number }[];
    }[] = [];
    let streamT = 0;
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
    }[] = [];
    let pulses: { x: number; y: number; maxR: number; life: number }[] = [];
    let pathways: {
      sx: number;
      sy: number;
      ex: number;
      ey: number;
      cpx: number;
      cpy: number;
      t: number;
      speed: number;
      phase: number;
    }[] = [];
    let pathT = 0;
    let rafId = 0;
    let frame = 0;
    let running = true;

    function size() {
      const r = hero!.getBoundingClientRect();
      W = r.width;
      H = r.height;
    }

    function setupCanvas(
      cvs: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D,
    ) {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      cvs.width = W * dpr;
      cvs.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initNetwork() {
      size();
      setupCanvas(netCvs!, netCtx);
      const cx = W * 0.5;
      const cy = H * 0.5;
      const clearR = Math.min(W, H) * 0.23;
      const pad = Math.max(44, W * 0.05);
      const count = Math.min(36, Math.floor(W / 32));
      nodes = [];
      for (let i = 0; i < count; i++) {
        let x = 0;
        let y = 0;
        let tries = 0;
        do {
          x = pad + Math.random() * (W - pad * 2);
          y = pad + Math.random() * (H - pad * 2);
          tries++;
        } while (Math.hypot(x - cx, y - cy) < clearR && tries < 30);
        nodes.push({
          x,
          y,
          r: 2 + Math.random() * 2,
          pulse: Math.random() * 6.28,
          tier: Math.random() < 0.14 ? 2 : 1,
        });
      }
      edges = [];
      for (let i = 0; i < nodes.length; i++) {
        const near = nodes
          .map((n, j) => ({
            j,
            d: Math.hypot(nodes[i].x - n.x, nodes[i].y - n.y),
          }))
          .filter((o) => o.j !== i)
          .sort((a, b) => a.d - b.d);
        for (let k = 0; k < Math.min(2, near.length); k++) {
          const j = near[k].j;
          if (near[k].d > W * 0.34) continue;
          const mx = (nodes[i].x + nodes[j].x) / 2;
          const my = (nodes[i].y + nodes[j].y) / 2;
          if (Math.hypot(mx - cx, my - cy) < clearR * 0.88) continue;
          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          if (!edges.find((e) => e.key === key))
            edges.push({ i, j, key, phase: Math.random() });
        }
      }
      packets = edges.slice(0, Math.min(edges.length, 28)).map((e, idx) => ({
        edge: e,
        t: Math.random(),
        speed: 0.003 + Math.random() * 0.004,
        size: 1.4 + Math.random() * 1.4,
        hue: idx % 2,
      }));
    }

    function drawNetwork() {
      const cx = W * 0.5;
      const cy = H * 0.5;
      const clearR = Math.min(W, H) * 0.24;
      netCtx.clearRect(0, 0, W, H);
      netT += 0.014;
      edges.forEach((e) => {
        const a = nodes[e.i];
        const b = nodes[e.j];
        const fade =
          Math.hypot((a.x + b.x) / 2 - cx, (a.y + b.y) / 2 - cy) < clearR
            ? 0.14
            : 1;
        netCtx.beginPath();
        netCtx.moveTo(a.x, a.y);
        netCtx.lineTo(b.x, b.y);
        netCtx.strokeStyle = `rgba(77,124,255,${(0.07 + Math.sin(netT * 0.85 + e.phase * 6) * 0.03) * fade})`;
        netCtx.lineWidth = 0.7;
        netCtx.stroke();
      });
      packets.forEach((p) => {
        p.t += p.speed;
        if (p.t > 1) p.t = 0;
        const a = nodes[p.edge.i];
        const b = nodes[p.edge.j];
        const px = a.x + (b.x - a.x) * p.t;
        const py = a.y + (b.y - a.y) * p.t;
        const col = p.hue ? 'rgba(0,80,255,' : 'rgba(147,180,255,';
        netCtx.beginPath();
        netCtx.arc(px, py, p.size, 0, 6.28);
        netCtx.fillStyle = col + '0.85)';
        netCtx.fill();
      });
      nodes.forEach((n) => {
        const dist = Math.hypot(n.x - cx, n.y - cy);
        const fade = dist < clearR ? (dist / clearR) * 0.28 : 1;
        const glow = 0.4 + Math.sin(netT * 1.15 + n.pulse) * 0.22;
        netCtx.beginPath();
        netCtx.arc(n.x, n.y, n.r * (n.tier === 2 ? 1.35 : 1), 0, 6.28);
        netCtx.fillStyle =
          (n.tier === 2 ? 'rgba(0,80,255,' : 'rgba(147,180,255,') +
          glow * fade +
          ')';
        netCtx.fill();
      });
    }

    function initStreams() {
      setupCanvas(streamCvs!, streamCtx);
      streams = Array.from({ length: 6 }, (_, i) => ({
        yBase: H * (0.1 + i * 0.14),
        amp: 22 + Math.random() * 36,
        freq: 0.002 + Math.random() * 0.003,
        phase: Math.random() * 6.28,
        speed: 0.35 + Math.random() * 0.45,
        particles: Array.from({ length: 8 }, () => ({
          x: Math.random() * W,
          offset: Math.random(),
        })),
      }));
    }

    function drawStreams() {
      streamCtx.clearRect(0, 0, W, H);
      streamT += 0.011;
      const cx = W * 0.5;
      const cy = H * 0.5;
      const clearR = Math.min(W, H) * 0.21;
      streams.forEach((s, si) => {
        streamCtx.beginPath();
        for (let x = 0; x <= W; x += 6) {
          const y =
            s.yBase +
            Math.sin(x * s.freq + s.phase + streamT * s.speed) * s.amp;
          x === 0 ? streamCtx.moveTo(x, y) : streamCtx.lineTo(x, y);
        }
        const grad = streamCtx.createLinearGradient(0, 0, W, 0);
        grad.addColorStop(0, 'rgba(77,124,255,0)');
        grad.addColorStop(0.65, `rgba(77,124,255,${0.06 + si * 0.01})`);
        grad.addColorStop(1, 'rgba(77,124,255,0)');
        streamCtx.strokeStyle = grad;
        streamCtx.lineWidth = 1;
        streamCtx.stroke();
        s.particles.forEach((p) => {
          p.x += s.speed * 1.4;
          if (p.x > W + 16) p.x = -16;
          const y =
            s.yBase +
            Math.sin(p.x * s.freq + s.phase + streamT * s.speed) * s.amp;
          if (Math.hypot(p.x - cx, y - cy) < clearR) return;
          streamCtx.beginPath();
          streamCtx.arc(p.x, y, 1.1, 0, 6.28);
          streamCtx.fillStyle = `rgba(147,180,255,${0.22 + Math.sin(streamT + p.offset * 5) * 0.12})`;
          streamCtx.fill();
        });
      });
    }

    function initPathways() {
      setupCanvas(pathCvs!, pathCtx);
      const cx = W * 0.5;
      const cy = H * 0.5;
      const angles = [0.15, 0.65, 1.15, 1.75, 2.35, 2.95];
      pathways = angles.map((a, i) => {
        const r = Math.min(W, H) * (0.34 + (i % 3) * 0.06);
        return {
          sx: cx + Math.cos(a * Math.PI) * r,
          sy: cy + Math.sin(a * Math.PI) * r * 0.72,
          ex: cx + Math.cos(a * Math.PI + 0.35) * r * 1.05,
          ey: cy + Math.sin(a * Math.PI + 0.35) * r * 0.78,
          cpx: cx + Math.cos(a * Math.PI + 0.15) * r * 0.55,
          cpy: cy + Math.sin(a * Math.PI + 0.15) * r * 0.4,
          t: Math.random(),
          speed: 0.0035 + Math.random() * 0.004,
          phase: Math.random(),
        };
      });
    }

    function drawPathways() {
      pathCtx.clearRect(0, 0, W, H);
      pathT += 0.013;
      const cx = W * 0.5;
      const cy = H * 0.5;
      const clearR = Math.min(W, H) * 0.21;
      pathways.forEach((p) => {
        if (
          Math.hypot((p.sx + p.ex) / 2 - cx, (p.sy + p.ey) / 2 - cy) <
          clearR * 0.75
        )
          return;
        pathCtx.beginPath();
        pathCtx.moveTo(p.sx, p.sy);
        pathCtx.quadraticCurveTo(p.cpx, p.cpy, p.ex, p.ey);
        pathCtx.strokeStyle = `rgba(77,124,255,${0.05 + Math.sin(pathT + p.phase * 5) * 0.025})`;
        pathCtx.lineWidth = 0.8;
        pathCtx.stroke();
        p.t += p.speed;
        if (p.t > 1) p.t = 0;
        const inv = 1 - p.t;
        const px = inv * inv * p.sx + 2 * inv * p.t * p.cpx + p.t * p.t * p.ex;
        const py = inv * inv * p.sy + 2 * inv * p.t * p.cpy + p.t * p.t * p.ey;
        pathCtx.beginPath();
        pathCtx.arc(px, py, 1.8, 0, 6.28);
        pathCtx.fillStyle = 'rgba(107,154,255,0.75)';
        pathCtx.fill();
      });
    }

    function initParticles() {
      setupCanvas(partCvs!, partCtx);
      const n = Math.min(70, Math.floor((W * H) / 14000));
      particles = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: 0.3 + Math.random() * 1.2,
        a: Math.random() * 6.28,
      }));
      pulses = Array.from({ length: 4 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        maxR: 50 + Math.random() * 60,
        life: Math.random(),
      }));
    }

    function drawParticles() {
      partCtx.clearRect(0, 0, W, H);
      const cx = W * 0.5;
      const cy = H * 0.5;
      const clearR = Math.min(W, H) * 0.25;
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        const fade =
          Math.hypot(p.x - cx, p.y - cy) < clearR
            ? (Math.hypot(p.x - cx, p.y - cy) / clearR) * 0.18
            : 0.42 + Math.sin(p.a) * 0.28;
        partCtx.beginPath();
        partCtx.arc(p.x, p.y, p.r, 0, 6.28);
        partCtx.fillStyle = `rgba(190,215,255,${fade * 0.38})`;
        partCtx.fill();
        p.a += 0.018;
      });
      pulses.forEach((p) => {
        p.life += 0.008;
        if (p.life > 1) {
          p.life = 0;
          p.x = Math.random() * W;
          p.y = Math.random() * H;
        }
        if (Math.hypot(p.x - cx, p.y - cy) < clearR) return;
        partCtx.beginPath();
        partCtx.arc(p.x, p.y, p.maxR * p.life, 0, 6.28);
        partCtx.strokeStyle = `rgba(77,124,255,${(1 - p.life) * 0.2})`;
        partCtx.lineWidth = 1;
        partCtx.stroke();
      });
    }

    function initAll() {
      initNetwork();
      initStreams();
      initPathways();
      initParticles();
    }

    function tick() {
      if (!running) return;
      frame += 1;
      if (frame % 2 === 0) {
        drawNetwork();
        drawStreams();
        drawPathways();
        drawParticles();
      }
      rafId = requestAnimationFrame(tick);
    }

    initAll();
    tick();

    const ro = new ResizeObserver(() => initAll());
    ro.observe(hero);

    return () => {
      running = false;
      ro.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [reduced, active, containerRef]);

  if (reduced) return null;

  const cls = 'motion-safe-only absolute inset-0 h-full w-full';
  return (
    <>
      <canvas ref={netRef} className={`${cls} z-[2]`} aria-hidden />
      <canvas ref={streamRef} className={`${cls} z-[3]`} aria-hidden />
      <canvas ref={pathRef} className={`${cls} z-[3]`} aria-hidden />
      <canvas ref={partRef} className={`${cls} z-[4]`} aria-hidden />
    </>
  );
}

const rings = [
  { size: 'min(80vw,1050px)', duration: 52, opacity: 0.38, reverse: false },
  { size: 'min(58vw,760px)', duration: 36, opacity: 0.55, reverse: true },
  {
    size: 'min(42vw,560px)',
    duration: 26,
    opacity: 0.65,
    reverse: false,
    dotLight: true,
  },
];

const trails = [
  {
    className: 'top-[20%] left-[8%] w-[min(200px,28vw)]',
    duration: 5,
    delay: 0,
    reverse: false,
  },
  {
    className: 'top-[48%] left-[6%] w-[min(240px,32vw)] max-sm:hidden',
    duration: 7,
    delay: 2,
    reverse: false,
  },
  {
    className:
      'top-[35%] right-[8%] left-auto w-[min(220px,30vw)] max-md:hidden',
    duration: 8,
    delay: 1,
    reverse: true,
  },
];

function SceneDecorations({
  parallax,
  animate,
}: {
  parallax: { x: number; y: number };
  animate: boolean;
}) {
  return (
    <>
      <div
        className='absolute inset-0'
        style={{
          background: `
            radial-gradient(ellipse 90% 65% at 50% 0%, rgba(0,44,206,0.38) 0%, transparent 52%),
            radial-gradient(ellipse 50% 40% at 12% 88%, rgba(0,26,128,0.3) 0%, transparent 48%),
            radial-gradient(ellipse 50% 40% at 88% 78%, rgba(0,44,206,0.18) 0%, transparent 48%),
            linear-gradient(160deg,#002CCE 0%,#001a80 28%,#050508 60%,#000 100%)`,
        }}
      />

      <motion.div
        className='motion-safe-only perspective-grid absolute inset-0 opacity-45'
        style={{
          backgroundImage: `
            linear-gradient(rgba(77,124,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(77,124,255,0.045) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
        animate={
          animate ? { backgroundPosition: ['0 0', '0 50px'] } : undefined
        }
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      />

      {[
        {
          className: 'top-[-8%] left-[14%] h-[44vw] w-[44vw]',
          bg: 'rgba(0,80,255,0.28)',
          delay: 0,
          p: 0.022,
        },
        {
          className: 'bottom-[-6%] right-[6%] h-[36vw] w-[36vw]',
          bg: 'rgba(0,26,128,0.32)',
          delay: 2.5,
          p: 0.03,
        },
      ].map((g, i) => (
        <motion.div
          key={i}
          className={`motion-safe-only absolute rounded-full blur-[85px] mix-blend-screen ${g.className}`}
          style={{
            background: `radial-gradient(circle, ${g.bg} 0%, transparent 70%)`,
            x: parallax.x * g.p * 65,
            y: parallax.y * g.p * 65,
          }}
          animate={
            animate
              ? { opacity: [0.45, 0.75, 0.45], scale: [1, 1.04, 1] }
              : undefined
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: g.delay,
          }}
        />
      ))}

      <div className='pointer-events-none absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2'>
        {rings.map((ring, i) => (
          <motion.div
            key={i}
            className={`orbit-ring-inner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full${i === 0 ? ' max-md:hidden' : ''}`}
            style={{
              width: ring.size,
              height: ring.size,
              opacity: ring.opacity,
            }}
            animate={animate ? { rotate: ring.reverse ? -360 : 360 } : undefined}
            transition={{
              duration: ring.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <motion.div
              className={`absolute left-1/2 rounded-full ${ring.dotLight ? 'h-1.5 w-1.5 bg-blue-light' : 'h-[7px] w-[7px] bg-blue'}`}
              style={{
                top: ring.dotLight ? -3 : -3.5,
                marginLeft: ring.dotLight ? -3 : -3.5,
                boxShadow: '0 0 14px #4d7cff',
              }}
            />
          </motion.div>
        ))}
      </div>

      <svg
        className='motion-safe-only pointer-events-none absolute left-[4%] top-[4%] z-[5] h-[92%] w-[92%] opacity-[0.35]'
        viewBox='0 0 1920 1080'
        preserveAspectRatio='xMidYMid meet'
        aria-hidden
      >
        {[
          'M180,200 Q520,100 960,260 T1700,200',
          'M180,880 Q620,820 1080,760 T1700,840',
          'M240,120 Q500,480 220,960',
          'M1680,120 Q1320,500 1700,960',
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill='none'
            stroke='rgba(77,124,255,0.22)'
            strokeWidth={0.7}
            strokeDasharray='4 14'
            animate={
              animate ? { strokeDashoffset: [0, -120] } : { strokeDashoffset: 0 }
            }
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </svg>

      {trails.map((t, i) => (
        <motion.div
          key={i}
          className={`motion-safe-only absolute z-[5] h-0.5 bg-gradient-to-r from-transparent via-blue/50 to-transparent blur-[0.5px] ${t.className}`}
          animate={
            animate
              ? {
                  opacity: [0, 1, 1, 0],
                  x: t.reverse ? ['0%', '-100vw'] : ['0%', '100vw'],
                }
              : undefined
          }
          transition={{
            duration: t.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: t.delay,
            times: [0, 0.08, 0.92, 1],
          }}
        />
      ))}
    </>
  );
}

type WidgetType = 'bars' | 'line' | 'donut' | 'icon';

interface WidgetConfig {
  id: string;
  type: WidgetType;
  className: string;
  floatDuration: number;
  floatDelay?: number;
  parallax: number;
  barHeights?: string[];
  linePath?: string;
  icon?: ReactNode;
}

const BarChart = ({ heights, animate }: { heights: string[]; animate: boolean }) => (
  <div className='flex h-[34px] items-end gap-[3px]'>
    {heights.map((h, i) => (
      <motion.span
        key={i}
        className='flex-1 rounded-t-sm bg-gradient-to-t from-primary to-blue-light origin-bottom'
        style={{ height: h }}
        animate={animate ? { scaleY: [1, 1.1, 1], opacity: [0.7, 1, 0.7] } : undefined}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          delay: i * 0.16,
          ease: [0.45, 0, 0.55, 1],
        }}
      />
    ))}
  </div>
);

const LineChart = ({ d, animate }: { d: string; animate: boolean }) => (
  <svg className='h-[34px] w-full' viewBox='0 0 50 34'>
    <defs>
      <linearGradient id='wGrad' x1='0' y1='0' x2='1' y2='0'>
        <stop offset='0%' stopColor='#002CCE' />
        <stop offset='100%' stopColor='#6b9aff' />
      </linearGradient>
    </defs>
    <motion.path
      d={d}
      fill='none'
      stroke='url(#wGrad)'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeDasharray='90'
      animate={
        animate
          ? { strokeDashoffset: [90, 0, 90], opacity: [0.6, 1, 0.6] }
          : undefined
      }
      transition={{ duration: 3.2, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
    />
  </svg>
);

const Donut = ({ animate }: { animate: boolean }) => (
  <motion.div
    className='widget-donut-hole relative mx-auto h-[34px] w-[34px] rounded-full bg-[conic-gradient(#6b9aff_0%_68%,rgba(77,124,255,0.15)_68%)]'
    animate={animate ? { rotate: 360 } : undefined}
    transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
  />
);

const widgets: WidgetConfig[] = [
  {
    id: 'dw-1',
    type: 'bars',
    className:
      'top-[8%] left-[clamp(16px,3.5vw,48px)] max-lg:block hidden sm:block',
    floatDuration: 17,
    parallax: 0.07,
    barHeights: ['50%', '78%', '42%', '68%'],
  },
  {
    id: 'dw-2',
    type: 'line',
    className: 'top-[22%] left-[clamp(26px,5.5vw,80px)] max-sm:hidden',
    floatDuration: 19,
    floatDelay: 2,
    parallax: 0.06,
    linePath: 'M0,26 L10,22 L20,24 L30,14 L40,18 L50,8',
  },
  {
    id: 'dw-3',
    type: 'donut',
    className: 'top-[40%] left-[clamp(16px,3.5vw,48px)] max-lg:hidden',
    floatDuration: 18,
    floatDelay: 4,
    parallax: 0.075,
  },
  {
    id: 'dw-7',
    type: 'bars',
    className: 'top-[12%] right-[clamp(26px,5.5vw,80px)]',
    floatDuration: 18,
    floatDelay: 1.5,
    parallax: 0.07,
    barHeights: ['62%', '38%', '85%', '52%'],
  },
  {
    id: 'dw-8',
    type: 'icon',
    className: 'top-[28%] right-[clamp(16px,3.5vw,48px)] max-sm:hidden',
    floatDuration: 16,
    floatDelay: 3.5,
    parallax: 0.058,
    icon: (
      <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' />
    ),
  },
  {
    id: 'dw-9',
    type: 'donut',
    className: 'top-[44%] right-[clamp(26px,5.5vw,80px)] max-lg:hidden',
    floatDuration: 19,
    floatDelay: 2.5,
    parallax: 0.068,
  },
];

function DashboardWidgets({
  parallax,
  animate,
}: {
  parallax: { x: number; y: number };
  animate: boolean;
}) {
  return (
    <>
      {widgets.map((w) => (
        <motion.div
          key={w.id}
          aria-hidden
          className={`absolute z-[6] ${w.className}`}
          style={{
            x: parallax.x * w.parallax * 65,
            y: parallax.y * w.parallax * 65,
          }}
        >
          <motion.div
            className='relative w-[66px] overflow-hidden rounded-[13px] border border-blue/20 bg-widget-grad p-[9px] shadow-[0_4px_28px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-[14px]'
            animate={animate ? { y: [0, -8, 0] } : undefined}
            transition={{
              duration: w.floatDuration,
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1],
              delay: w.floatDelay ?? 0,
            }}
          >
            {w.type === 'bars' && w.barHeights && (
              <BarChart heights={w.barHeights} animate={animate} />
            )}
            {w.type === 'line' && w.linePath && (
              <LineChart d={w.linePath} animate={animate} />
            )}
            {w.type === 'donut' && <Donut animate={animate} />}
            {w.type === 'icon' && (
              <div className='flex h-[34px] items-center justify-center text-blue-light/65'>
                <svg
                  className='h-[21px] w-[21px]'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  {w.icon}
                </svg>
              </div>
            )}
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}

function HeroContent({
  rotateX,
  rotateY,
  heading,
  subheading,
  buttonText,
}: {
  rotateX: number;
  rotateY: number;
  heading: ReactNode;
  subheading?: ReactNode;
  buttonText: ReactNode;
}) {
  return (
    <motion.div
      className='hero-content-3d relative z-20 mx-auto max-w-[840px] px-6 text-center transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]'
      style={
        {
          '--tx': `${rotateX}deg`,
          '--ty': `${rotateY}deg`,
        } as React.CSSProperties
      }
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <h1 className='mb-10 text-[clamp(1.8rem,4vw,2.95rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white drop-shadow-[0_2px_28px_rgba(0,0,0,0.55)]'>
        {heading}
      </h1>

      {subheading && (
        <p className='mx-auto mb-8 max-w-[550px] text-[clamp(0.95rem,1.8vw,1.13rem)] leading-[1.65] text-white'>
          {subheading}
        </p>
      )}

      <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.25 }}>
        <a
          href='#'
          className='relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-white/20 bg-white px-[34px] py-[15px] text-[0.94rem] font-semibold text-primary shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition hover:bg-white/95'
        >
          <span className='relative'>{buttonText}</span>
          <svg
            className='relative text-primary'
            width='18'
            height='18'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2.5'
          >
            <path d='M5 12h14M12 5l7 7-7 7' />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
}

function BiHero({
  heading,
  subheading,
  subText,
  buttonText,
}: Required<Pick<HeroSectionBIProps, 'heading' | 'buttonText'>> &
  Pick<HeroSectionBIProps, 'subheading' | 'subText'>) {
  const heroSubheading = subheading ?? subText;
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const finePointer = useFinePointer();
  const inView = useInView(heroRef);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const rafRef = useRef(0);
  const pendingRef = useRef<{ x: number; y: number } | null>(null);

  const animateScene = !reduced && inView;

  const flushParallax = useCallback(() => {
    rafRef.current = 0;
    const next = pendingRef.current;
    if (!next) return;
    setParallax({ x: next.x, y: next.y });
    setRotate({ x: next.y * -3, y: next.x * 3.5 });
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!finePointer || reduced || !heroRef.current) return;
      const r = heroRef.current.getBoundingClientRect();
      const mx = (e.clientX - r.left) / r.width - 0.5;
      const my = (e.clientY - r.top) / r.height - 0.5;
      pendingRef.current = { x: mx, y: my };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(flushParallax);
      }
    },
    [finePointer, reduced, flushParallax],
  );

  const onMouseLeave = useCallback(() => {
    pendingRef.current = null;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = 0;
    setParallax({ x: 0, y: 0 });
    setRotate({ x: 0, y: 0 });
  }, []);

  useEffect(
    () => () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  return (
    <header
      ref={heroRef}
      id='hero'
      className='relative flex min-h-svh items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-blue-deep to-black'
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className='absolute inset-0'>
        <SceneDecorations parallax={parallax} animate={animateScene} />
        <SceneCanvas containerRef={heroRef} active={animateScene} />
        <DashboardWidgets parallax={parallax} animate={animateScene} />
      </div>

      <HeroContent
        rotateX={rotate.x}
        rotateY={rotate.y}
        heading={heading}
        subheading={heroSubheading}
        buttonText={buttonText}
      />
    </header>
  );
}

export default function BiHeroStandalone({
  heading = (
    <>
      <span className='block text-white'>Business Intelligence Services</span>
      <span className='block text-white'>&amp; Analytics Solutions</span>
      <span className='block text-white'>
        Delivering 360&deg; Visibility
      </span>
    </>
  ),
  subheading = 'Transform raw data into actionable insights with enterprise-grade analytics, dashboards, and reporting tailored to your business.',
  subText,
  buttonText = 'Explore Analytics Solutions',
}: HeroSectionBIProps) {
  return (
    <div className='bi-hero-root'>
      <BiHeroStyles />
      <BiHero
        heading={heading}
        subheading={subheading}
        subText={subText}
        buttonText={buttonText}
      />
    </div>
  );
}

export { BiHero, BiHeroStyles, BI_HERO_COMPRESSED_CSS };
