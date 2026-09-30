import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { OffBeautyStory } from '@/components/OffBeautyStory';
import { OohReveal } from '@/components/OohReveal';

export default function CommercialPage() {
  return <main className="case-page commercial-page">
    <section className="case-hero purple-screen">
      <span className="eyebrow">02 · COMMERCIAL</span>
      <h1>IDEAS<br/>THAT LEFT<br/>THE SCREEN.</h1>
      <div className="case-meta"><span>Creative Planning</span><span>Production · AI Content</span><span>Commercial Delivery</span></div>
    </section>

    <section className="ooh-hero dark-screen">
      <img src="/assets/commercial/offbeauty-ooh.jpg" alt="OFF BEAUTY digital OOH in Hongdae"/>
      <div className="floating-caption"><span>OFF BEAUTY</span><span>COMMERCIAL FILM · DIGITAL OOH · HONGDAE</span></div>
    </section>

    <section className="commercial-project offbeauty-intro white-screen">
      <Reveal className="project-intro"><span className="eyebrow">01 · OFF BEAUTY</span><h2>From treatment<br/>to a real-world screen.</h2><p>A commercial developed across concept, production, AI-assisted visual work and large-format delivery.</p></Reveal>
      <OffBeautyStory />
    </section>

    <OohReveal />

    <section className="commercial-project dark-screen mend-section">
      <Reveal className="project-intro"><span className="eyebrow">02 · THE M.E.N.D. BIOSIMULATOR</span><h2>Making complex medical technology understandable.</h2><p>Planning · Shooting · Editing · AI Video · Brochure Design</p></Reveal>
      <div className="youtube-frame"><iframe src="https://www.youtube.com/embed/W0ZrnxUIQIs" title="The M.E.N.D. BioSimulator promotional video" allowFullScreen /></div>
      <div className="mend-grid"><img src="/assets/commercial/mend-video-1.png" alt="MEND video frame"/><img src="/assets/commercial/mend-video-2.png" alt="MEND video frame"/><img src="/assets/commercial/mend-brochure.png" alt="MEND brochure design"/></div>
      <Reveal className="pull-quote"><h3>Technical input → visual communication.</h3><p>Medical concepts were restructured into a visual narrative, with AI-generated imagery used alongside live-action footage and motion graphics.</p></Reveal>
    </section>

    <section className="commercial-project white-screen easycheck-section">
      <Reveal className="project-intro"><span className="eyebrow">03 · EASYCHECK CF</span><h2>From agency-side planning<br/>to the set.</h2><p>Creative Planning · On-set Production · AI TTS</p></Reveal>
      <div className="youtube-frame light"><iframe src="https://www.youtube.com/embed/_C-BR4NXRHg" title="EasyCheck commercial" allowFullScreen /></div>
      <p className="credit-note">Final production was executed with an external production partner. My role covered agency-side planning, on-set execution and AI-generated TTS in post.</p>
      <Link className="big-next dark-text" href="/work/film-stage">NEXT · FILM & STAGE →</Link>
    </section>
  </main>
}
