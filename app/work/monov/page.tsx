import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { HoverVideo } from '@/components/HoverVideo';

const videos = [
  {
    label: 'SOFT COLLISION', meta: 'PRODUCT · 09s',
    src: 'https://storage.googleapis.com/clips-flow.firebasestorage.app/templates/tpl_1790682208413_29be/1790683295437.mp4',
    poster: 'https://storage.googleapis.com/clips-flow.firebasestorage.app/templates/tpl_1790682208413_29be/poster_1790683295437.jpg'
  },
  {
    label: 'REALITY BEND', meta: 'PRODUCT · 09s',
    src: 'https://storage.googleapis.com/clips-flow.firebasestorage.app/templates/tpl_1790682000533_xxav/1790683293700.mp4',
    poster: 'https://storage.googleapis.com/clips-flow.firebasestorage.app/templates/tpl_1790682000533_xxav/poster_1790683293700.jpg'
  },
  {
    label: 'MINI COLOR CREW', meta: 'PRODUCT · 09s',
    src: 'https://storage.googleapis.com/clips-flow.firebasestorage.app/templates/tpl_1790668316022_vk3s/1790683291942.mp4',
    poster: 'https://storage.googleapis.com/clips-flow.firebasestorage.app/templates/tpl_1790668316022_vk3s/poster_1790683291942.jpg'
  },
  {
    label: 'CAFE WINDOW', meta: 'UGC · 08s',
    src: 'https://storage.googleapis.com/clips-flow.firebasestorage.app/templates/tpl_1790660105165_qts2/1790683248607.mp4',
    poster: 'https://storage.googleapis.com/clips-flow.firebasestorage.app/templates/tpl_1790660105165_qts2/poster_1790683248607.jpg'
  }
];

export default function MonovPage() {
  return <main className="case-page monov-page">
    <section className="case-hero purple-screen">
      <span className="eyebrow">01 · MONOV · 2025—26</span>
      <h1>BUILDING<br/>AI CONTENT<br/>WORKFLOWS.</h1>
      <div className="case-meta"><span>Product Lead</span><span>Product · Development · AI Workflow</span><a href="https://www.monov-ai.com" target="_blank">VISIT MONOV ↗</a></div>
    </section>

    <section className="split-story white-screen">
      <Reveal><div className="section-no">01</div><h2>One product photo.<br/>Many ways to create.</h2><p>MONOV turns a single product photo into ready-to-use commercial images and videos.</p></Reveal>
      <Reveal className="before-after"><img src="/assets/monov/10-landing-hero.jpg" alt="MONOV before and after interface"/></Reveal>
    </section>

    <section className="sticky-showcase dark-screen">
      <aside><span className="eyebrow">BUILDING THE STUDIO</span><h2>I wasn’t building a generation button.<br/>I was building ways to create.</h2></aside>
      <div className="showcase-stack">
        <Reveal><span className="image-label">01 · PRODUCT SHOT</span><img src="/assets/monov/02-studio-product-grid.jpg" alt="MONOV product shot studio"/></Reveal>
        <Reveal><span className="image-label">02 · UGC</span><img src="/assets/monov/03-studio-ugc-tab.jpg" alt="MONOV UGC studio"/></Reveal>
        <Reveal><span className="image-label">03 · VIDEO WORKFLOW</span><img src="/assets/monov/04-studio-template-sheet.jpg" alt="MONOV video generation workflow"/></Reveal>
      </div>
    </section>

    <section className="model-section white-screen">
      <Reveal><span className="eyebrow">DESIGNING THE WORKFLOW</span><h2>Different content needs<br/>different models.</h2><p>Models were selected by the task — visual fidelity, motion, controllability, speed and cost.</p></Reveal>
      <Reveal className="stack-list"><div><span>IMAGE</span><b>Nano Banana · OpenAI Images</b></div><div><span>VIDEO</span><b>Kling · Seedance</b></div><div><span>PRODUCT</span><b>Next.js · TypeScript · Firebase</b></div></Reveal>
      <div className="video-grid">{videos.map(v => <HoverVideo key={v.label} {...v}/>)}</div>
    </section>

    <section className="statement purple-screen"><Reveal><h2>WHEN<br/>GENERATION<br/>ISN’T THE<br/>ANSWER.</h2></Reveal></section>

    <section className="workflow white-screen">
      <div className="workflow-copy"><span className="eyebrow">CASE · EDITING GENERATED TEXT</span><h2>Not every AI problem needs another generation.</h2><p>Changing only a price or sentence on a finished poster shouldn’t require recreating the whole image.</p></div>
      <div className="workflow-steps"><span>OCR</span><i>→</i><span>TEXT REGION</span><i>→</i><span>BACKGROUND RESTORATION</span><i>→</i><span>EDITABLE TEXT</span></div>
      <div className="metrics"><div><strong>97%</strong><span>lower generation cost</span></div><div><strong>~14s</strong><span>p50 processing time</span></div></div>
      <img className="full-ui" src="/assets/monov/09-workspace-edit.jpg" alt="MONOV image editing interface"/>
    </section>

    <section className="output-section dark-screen">
      <Reveal><span className="eyebrow">SELECTED OUTPUTS</span><h2>From AI models<br/>to creative workflows.</h2></Reveal>
      <div className="output-grid">
        <img src="/assets/monov/11-landing-gallery.jpg" alt="MONOV output gallery"/>
        <img src="/assets/monov/07-workspace-templates.jpg" alt="MONOV templates"/>
        <img src="/assets/monov/08-workspace-create-references.jpg" alt="MONOV references workflow"/>
      </div>
      <Link className="big-next" href="/work/commercial">NEXT · COMMERCIAL →</Link>
    </section>
  </main>
}
