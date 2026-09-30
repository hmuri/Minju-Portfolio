'use client';

import { useState } from 'react';

const modes = [
  {
    key: 'PRODUCT',
    kicker: '01 · PRODUCT SHOT',
    title: 'Direct the product,\nnot the prompt.',
    body: 'Users choose a visual direction and keep the product recognizable while the surrounding scene is generated around it.',
    src: '/assets/monov/02-studio-product-grid.jpg',
  },
  {
    key: 'UGC',
    kicker: '02 · UGC',
    title: 'Choose the scene.\nThen choose who appears.',
    body: 'Scene templates and model casting were separated so one creative format could be reused with different people and products.',
    src: '/assets/monov/03-studio-ugc-tab.jpg',
  },
  {
    key: 'VIDEO',
    kicker: '03 · VIDEO WORKFLOW',
    title: 'One surface,\ndifferent engines.',
    body: 'Duration, aspect ratio and generation engine are exposed as production choices instead of hidden implementation details.',
    src: '/assets/monov/04-studio-template-sheet.jpg',
  },
] as const;

export function MonovModes() {
  const [active, setActive] = useState(0);
  const mode = modes[active];

  return (
    <section className="monov-modes dark-screen">
      <div className="modes-copy">
        <span className="eyebrow">BUILDING THE STUDIO</span>
        <h2>I wasn’t building a generation button.<br/>I was building ways to create.</h2>
        <div className="modes-tabs" role="tablist" aria-label="MONOV creation modes">
          {modes.map((item, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={active === index}
              className={active === index ? 'is-active' : ''}
              key={item.key}
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
            >
              <span>0{index + 1}</span>{item.key}
            </button>
          ))}
        </div>
        <div className="mode-description" aria-live="polite">
          <span>{mode.kicker}</span>
          <h3>{mode.title.split('\n').map((line, i) => <span key={line}>{line}{i === 0 && <br/>}</span>)}</h3>
          <p>{mode.body}</p>
        </div>
      </div>
      <div className="modes-visual">
        {modes.map((item, index) => (
          <img
            key={item.key}
            className={active === index ? 'is-active' : ''}
            src={item.src}
            alt={`MONOV ${item.key.toLowerCase()} interface`}
          />
        ))}
        <div className="modes-corner"><span>MONOV / STUDIO</span><span>0{active + 1} / 03</span></div>
      </div>
    </section>
  );
}
