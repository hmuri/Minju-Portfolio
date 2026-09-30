import { ProjectPanel } from '@/components/ProjectPanel';
import { Reveal } from '@/components/Reveal';

export default function Home() {
  return (
    <main>
      <section className="home-hero home-hero-v2 purple-screen">
        <div className="home-topline"><span>CREATIVE TECHNOLOGIST</span><span>PORTFOLIO · 2026</span></div>
        <div className="home-type" aria-label="I build ways to create">
          <span className="home-line home-line-a">I BUILD</span>
          <span className="home-line home-line-b">WAYS TO</span>
          <span className="home-line home-line-c">CREATE.</span>
        </div>
        <div className="home-bottomline"><span>AI CONTENT · PRODUCT · FILM</span><span>SCROLL TO WORK ↓</span></div>
      </section>

      <section className="selected-head white-screen">
        <Reveal className="selected-grid">
          <span className="eyebrow">SELECTED WORK · 01—03</span>
          <h2>I build the tool,<br/>make the content,<br/>and take it to production.</h2>
        </Reveal>
      </section>

      <ProjectPanel index="01" title="MONOV" subtitle="Building AI content workflows." href="/work/monov" image="/assets/monov/01-studio-hero.jpg" tone="dark" position="center 34%" />
      <ProjectPanel index="02" title="COMMERCIAL" subtitle="Ideas that left the screen." href="/work/commercial" image="/assets/commercial/offbeauty-ooh.jpg" tone="purple" position="center 46%" />
      <ProjectPanel index="03" title="FILM & STAGE" subtitle="Stories made with people." href="/work/film-stage" image="/assets/film/heaven-field.jpg" tone="dark" position="center 45%" />

      <section id="about" className="about white-screen">
        <Reveal className="about-grid">
          <div><span className="eyebrow">ABOUT</span></div>
          <div>
            <h2>I started by making stories with people.<br/>Now I also build the tools that make them possible.</h2>
            <p>Computer Science × Business. Product Lead building generative-AI content products, with hands-on experience across commercial production, film and stage.</p>
            <div className="about-meta"><span>Product Lead · MONOV</span><span>Former SAP Korea · Ringle</span><span>Ewha Womans University</span></div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
