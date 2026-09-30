import { ProjectPanel } from '@/components/ProjectPanel';
import { Reveal } from '@/components/Reveal';

export default function Home() {
  return (
    <main>
      <section className="home-hero purple-screen">
        <div className="hero-kicker">AI · CONTENT · FILM</div>
        <h1>I BUILD<br/>WAYS TO<br/>CREATE.</h1>
        <div className="hero-foot"><span>MINJU CHOI</span><span>SEOUL, KR</span></div>
      </section>

      <section className="selected-head white-screen">
        <Reveal><span className="eyebrow">SELECTED WORK</span><h2>Three ways I make<br/>ideas real.</h2></Reveal>
      </section>

      <ProjectPanel index="01" title="MONOV" subtitle="Building AI content workflows." href="/work/monov" image="/assets/monov/01-studio-hero.jpg" tone="dark" />
      <ProjectPanel index="02" title="COMMERCIAL" subtitle="Ideas that left the screen." href="/work/commercial" image="/assets/commercial/offbeauty-ooh.jpg" tone="purple" />
      <ProjectPanel index="03" title="FILM & STAGE" subtitle="Stories made with people." href="/work/film-stage" image="/assets/film/heaven-field.jpg" tone="dark" />

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
