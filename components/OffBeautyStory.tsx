'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    no: '01',
    title: 'CONCEPT',
    body: 'A 26-cut treatment built around one simple rhythm: scan, discount, repeat — until receipts and shopping bags take over the frame.',
    type: 'image',
    src: '/assets/commercial/offbeauty-treatment.jpg',
    alt: 'OFF BEAUTY commercial treatment'
  },
  {
    no: '02',
    title: 'PRODUCTION',
    body: 'The idea moved from a storyboard into a finished commercial, combining physical production with AI-assisted visual work.',
    type: 'video',
    src: '/assets/commercial/offbeauty-final.mp4',
    alt: 'OFF BEAUTY final commercial'
  },
  {
    no: '03',
    title: 'FORMAT',
    body: 'The final piece was re-composed for a large outdoor LED surface — not just a 16:9 screen — so the subject and brand still read at street distance.',
    type: 'image',
    src: '/assets/commercial/offbeauty-ooh.jpg',
    alt: 'OFF BEAUTY large format outdoor display'
  },
  {
    no: '04',
    title: 'LIVE',
    body: 'The campaign left the edit timeline and became part of the street: delivered to and displayed on OFF BEAUTY’s Hongdae storefront.',
    type: 'image',
    src: '/assets/commercial/offbeauty-ooh-2.jpg',
    alt: 'OFF BEAUTY campaign live in Hongdae'
  }
] as const;

export function OffBeautyStory() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.index || 0);
        setActive(index);
      },
      { rootMargin: '-28% 0px -42% 0px', threshold: [0.05, 0.25, 0.55] }
    );

    refs.current.forEach(node => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="offbeauty-story" aria-label="OFF BEAUTY production process">
      <div className="story-copy">
        {steps.map((step, index) => (
          <article
            key={step.title}
            ref={node => { refs.current[index] = node; }}
            data-index={index}
            className={`story-step ${active === index ? 'is-active' : ''}`}
          >
            <span className="story-no">{step.no}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            <div className="story-mobile-media">
              {step.type === 'video' ? (
                <video src={step.src} muted loop controls playsInline preload="metadata" aria-label={step.alt} />
              ) : (
                <img src={step.src} alt={step.alt} />
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="story-visual-wrap">
        <div className="story-visual">
          {steps.map((step, index) => (
            <div key={step.title} className={`story-frame ${active === index ? 'is-active' : ''}`}>
              {step.type === 'video' ? (
                <video src={step.src} muted loop autoPlay playsInline preload="metadata" aria-label={step.alt} />
              ) : (
                <img src={step.src} alt={step.alt} />
              )}
              <div className="story-frame-label"><span>OFF BEAUTY</span><span>{step.no} / 04</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
