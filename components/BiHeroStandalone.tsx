'use client';

/**
 * BI Hero — lightweight standalone component
 * Requires: react, framer-motion
 */

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

type HeroSectionBIProps = {
  heading?: ReactNode;
  subheading?: ReactNode;
  subText?: ReactNode;
  buttonText?: ReactNode;
};

const HERO_CSS = `
.bi-hero-root{--bi-primary:#002cce;--bi-blue:#4d7cff;--bi-blue-light:#6b9aff;--bi-blue-deep:#001a80}
.bi-hero-root .bi-hero{position:relative;display:flex;min-height:100svh;align-items:center;justify-content:center;overflow:hidden;background:linear-gradient(160deg,#002cce 0%,#001a80 28%,#050508 60%,#000 100%)}
.bi-hero-root .bi-hero__bg{position:absolute;inset:0;pointer-events:none}
.bi-hero-root .bi-hero__glow{position:absolute;border-radius:9999px;filter:blur(60px);opacity:.5}
.bi-hero-root .bi-hero__glow--a{top:-8%;left:14%;width:44vw;height:44vw;background:radial-gradient(circle,rgba(0,80,255,.28) 0%,transparent 70%)}
.bi-hero-root .bi-hero__glow--b{bottom:-6%;right:6%;width:36vw;height:36vw;background:radial-gradient(circle,rgba(0,26,128,.32) 0%,transparent 70%)}
.bi-hero-root .bi-hero__ring{position:absolute;left:50%;top:50%;border:1px dashed rgba(77,124,255,.15);border-radius:9999px;transform:translate(-50%,-50%)}
.bi-hero-root .bi-hero__ring--1{width:min(58vw,760px);height:min(58vw,760px);animation:bi-spin 36s linear infinite}
.bi-hero-root .bi-hero__ring--2{width:min(42vw,560px);height:min(42vw,560px);animation:bi-spin-rev 26s linear infinite}
.bi-hero-root .bi-hero__grid{position:absolute;inset:0;opacity:.35;transform:perspective(650px) rotateX(56deg) translateY(28%);transform-origin:center 78%;background-image:linear-gradient(rgba(77,124,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(77,124,255,.045) 1px,transparent 1px);background-size:50px 50px}
.bi-hero-root .bi-hero__content{position:relative;z-index:2;max-width:840px;margin:0 auto;padding:0 1.5rem;text-align:center}
.bi-hero-root .bi-hero__title{margin:0 0 2.5rem;font-size:clamp(1.8rem,4vw,2.95rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;color:#fff;text-shadow:0 2px 28px rgba(0,0,0,.55)}
.bi-hero-root .bi-hero__sub{margin:0 auto 2rem;max-width:550px;font-size:clamp(.95rem,1.8vw,1.13rem);line-height:1.65;color:#fff}
.bi-hero-root .bi-hero__btn{display:inline-flex;align-items:center;gap:.625rem;border-radius:9999px;border:1px solid rgba(255,255,255,.2);background:#fff;padding:15px 34px;font-size:.94rem;font-weight:600;color:var(--bi-primary);text-decoration:none;box-shadow:0 8px 32px rgba(0,0,0,.18);transition:transform .2s,background .2s}
.bi-hero-root .bi-hero__btn:hover{background:rgba(255,255,255,.95);transform:translateY(-2px)}
.bi-hero-root .bi-widget{position:absolute;width:66px;padding:9px;border-radius:13px;border:1px solid rgba(77,124,255,.2);background:linear-gradient(140deg,rgba(0,26,128,.38),rgba(0,0,0,.48));box-shadow:0 4px 28px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.06)}
.bi-hero-root .bi-widget__bar{display:flex;height:34px;align-items:flex-end;gap:3px}
.bi-hero-root .bi-widget__bar span{flex:1;border-radius:2px 2px 0 0;background:linear-gradient(to top,var(--bi-primary),var(--bi-blue-light))}
@keyframes bi-spin{to{transform:translate(-50%,-50%) rotate(360deg)}}
@keyframes bi-spin-rev{to{transform:translate(-50%,-50%) rotate(-360deg)}}
@media (prefers-reduced-motion:reduce){.bi-hero-root .bi-hero__ring,.bi-hero-root .bi-hero__grid{animation:none}}
@media (max-width:768px){.bi-hero-root .bi-widget{display:none}}
`;

function BiHeroStyles() {
  return <style dangerouslySetInnerHTML={{ __html: HERO_CSS }} />;
}

function HeroWidgets() {
  const items = [
    { className: 'top-[12%] left-[clamp(16px,3.5vw,48px)]', bars: ['50%', '78%', '42%', '68%'] },
    { className: 'top-[22%] right-[clamp(16px,3.5vw,48px)]', bars: ['62%', '38%', '85%', '52%'] },
    { className: 'bottom-[28%] left-[clamp(26px,5.5vw,80px)]', bars: ['40%', '70%', '55%', '48%'] },
    { className: 'bottom-[18%] right-[clamp(26px,5.5vw,80px)]', bars: ['58%', '44%', '72%', '36%'] },
  ];

  return (
    <>
      {items.map((w, i) => (
        <div key={i} className={`bi-widget absolute z-[1] ${w.className}`} aria-hidden>
          <div className='bi-widget__bar'>
            {w.bars.map((h, j) => (
              <span key={j} style={{ height: h, opacity: 0.7 + j * 0.08 }} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function HeroContent({
  heading,
  subheading,
  buttonText,
}: {
  heading: ReactNode;
  subheading?: ReactNode;
  buttonText: ReactNode;
}) {
  return (
    <motion.div
      className='bi-hero__content'
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <h1 className='bi-hero__title'>{heading}</h1>
      {subheading && <p className='bi-hero__sub'>{subheading}</p>}
      <a href='#' className='bi-hero__btn'>
        <span>{buttonText}</span>
        <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' aria-hidden>
          <path d='M5 12h14M12 5l7 7-7 7' />
        </svg>
      </a>
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
  return (
    <header className='bi-hero'>
      <div className='bi-hero__bg' aria-hidden>
        <div className='bi-hero__glow bi-hero__glow--a' />
        <div className='bi-hero__glow bi-hero__glow--b' />
        <div className='bi-hero__grid' />
        <div className='bi-hero__ring bi-hero__ring--1' />
        <div className='bi-hero__ring bi-hero__ring--2' />
        <HeroWidgets />
      </div>
      <HeroContent heading={heading} subheading={subheading ?? subText} buttonText={buttonText} />
    </header>
  );
}

export default function BiHeroStandalone({
  heading = (
    <>
      <span style={{ display: 'block' }}>Business Intelligence Services</span>
      <span style={{ display: 'block' }}>&amp; Analytics Solutions</span>
      <span style={{ display: 'block' }}>Delivering 360&deg; Visibility</span>
    </>
  ),
  subheading = 'Transform raw data into actionable insights with enterprise-grade analytics, dashboards, and reporting tailored to your business.',
  subText,
  buttonText = 'Explore Analytics Solutions',
}: HeroSectionBIProps) {
  return (
    <div className='bi-hero-root'>
      <BiHeroStyles />
      <BiHero heading={heading} subheading={subheading} subText={subText} buttonText={buttonText} />
    </div>
  );
}

export { BiHero, BiHeroStyles };
