import Link from 'next/link';
import { Reveal } from '@/components/Reveal';

export default function FilmStagePage() {
  return <main className="case-page film-page">
    <section className="case-hero black-screen">
      <span className="eyebrow">03 · FILM & STAGE</span>
      <h1>STORIES<br/>MADE WITH<br/>PEOPLE.</h1>
      <div className="case-meta"><span>Production</span><span>Direction</span><span>Film Crew</span></div>
    </section>

    <section className="film-hero dark-screen">
      <img src="/assets/film/heaven-field.jpg" alt="Still from Is There Heaven There"/>
      <div className="floating-caption"><span>그곳에는 천국이 있습니까</span><span>LINE PRODUCER · SHORT FILM · 35 MIN</span></div>
    </section>

    <section className="film-story black-screen">
      <Reveal className="project-intro"><span className="eyebrow">01 · FILM PRODUCTION</span><h2>Making the film possible.</h2><p>A SF thriller / black comedy about a cyber cult and the virtual heaven it builds.</p></Reveal>
      <div className="funding-block"><strong>₩35M</strong><span>SECURED FOR PRODUCTION</span><p>Led the application, presentation and production-budget plan for the Gyeonggi Youth Gap Year support program.</p></div>
      <div className="cinema-grid"><img src="/assets/film/heaven-theatre.jpg" alt="Cinema still"/><img src="/assets/film/heaven-camera.jpg" alt="Cinema still"/><img src="/assets/film/heaven-clinic.jpg" alt="Cinema still"/><img src="/assets/film/heaven-wide.jpg" alt="Cinema still"/></div>
      <Reveal className="pull-quote"><h3>Production wasn’t only about the budget.</h3><p>Coordinated schedule, crew, cast, equipment and art under limited time and resources — carrying the project from plan to finished film.</p></Reveal>
    </section>

    <section className="sun-section white-screen">
      <div className="sun-hero"><img src="/assets/film/the-sun-curtain.jpg" alt="The Sun stage curtain"/><div><span className="eyebrow">02 · STAGE DIRECTION</span><h2>THE SUN</h2><p>Director · Ewha Humanities Theatre · 75th Regular Performance</p></div></div>
      <div className="sun-body"><img src="/assets/film/the-sun-poster.png" alt="The Sun poster"/><Reveal><span className="eyebrow">FROM INTERPRETATION TO PERFORMANCE</span><h3>Directing a stage, not just a scene.</h3><p>As director, I shaped the production from the reading of Florian Zeller’s play to actor direction, staging and coordination across the team.</p><div className="mini-meta"><span>Director · 최민주</span><span>Assistant Director · 오윤형</span><span>Translation · 임선욱</span></div><a className="text-link" href="https://ewhaimplay75.vercel.app/" target="_blank">VIEW THE SUN SITE ↗</a></Reveal></div>
    </section>

    <section className="credits-section black-screen">
      <Reveal><span className="eyebrow">SELECTED FILM CREDITS</span><h2>Learning the set<br/>from different positions.</h2></Reveal>
      <div className="credit-grid">
        <a href="https://www.moviebloc.com/detail/ct_11ed3b348f08cc23ada2023f85d07bb2/ko" target="_blank" className="credit-card"><div className="credit-placeholder">YUNSEUL</div><h3>윤슬</h3><p>Assistant Director</p><span>VIEW FILM ↗</span></a>
        <div className="credit-card"><div className="credit-placeholder alternate">BAEKHWA</div><h3>백화</h3><p>Scripter · Directing Dept.</p><span>LINK TO BE ADDED</span></div>
      </div>
      <Link className="big-next" href="/">BACK TO WORK →</Link>
    </section>
  </main>
}
