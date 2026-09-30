'use client';

import { useState } from 'react';

export function OohReveal() {
  const [active, setActive] = useState<'master' | 'live'>('master');

  return (
    <section className="ooh-delivery dark-screen">
      <div className="ooh-delivery-heading">
        <span className="eyebrow">SCREEN → STREET</span>
        <h2>Designed beyond<br/>the frame.</h2>
        <p>The final film was not delivered for a normal 16:9 screen. It was re-composed for a 6,568 × 680 px outdoor LED canvas, then placed on the OFF BEAUTY storefront in Hongdae.</p>
      </div>

      <div className="delivery-tabs" role="tablist" aria-label="OFF BEAUTY delivery views">
        <button type="button" role="tab" onClick={() => setActive('master')} className={active === 'master' ? 'is-active' : ''} aria-selected={active === 'master'}>
          <span>01</span> DELIVERY MASTER <b>6568 × 680</b>
        </button>
        <button type="button" role="tab" onClick={() => setActive('live')} className={active === 'live' ? 'is-active' : ''} aria-selected={active === 'live'}>
          <span>02</span> LIVE IN HONGDAE <b>REAL-WORLD OOH</b>
        </button>
      </div>

      <div className={`delivery-stage ${active === 'master' ? 'show-master' : 'show-live'}`}>
        <div className="delivery-view delivery-master-view">
          <video src="/assets/commercial/offbeauty-final.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="OFF BEAUTY ultra-wide OOH master" />
          <div className="delivery-caption"><span>OOH MASTER</span><span>6568 × 680 · 18.8s</span></div>
        </div>
        <div className="delivery-view delivery-live-view">
          <img src="/assets/commercial/offbeauty-ooh.jpg" alt="OFF BEAUTY live outdoor display in Hongdae" />
          <div className="delivery-caption"><span>LIVE</span><span>HONGDAE, SEOUL</span></div>
        </div>
      </div>
    </section>
  );
}
