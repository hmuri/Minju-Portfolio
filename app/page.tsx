import Link from 'next/link';
import { Tile } from '@/components/Tile';
import { Credits } from '@/components/Project';
import { ContactFooter, EMAIL } from '@/components/ContactFooter';

const WORK = [
  {
    n: '01', title: 'MONOV', meta: 'AI CONTENT SYSTEM · SINCE 2025', href: '/work/monov', mirror: false,
    main: { src: '/assets/monov/01-studio-hero.jpg', label: 'MONOV 마케팅 스튜디오' },
    side: [
      { src: '/assets/monov/02-studio-product-grid.jpg', label: 'MONOV 생성 결과' },
      { src: '/assets/monov/03-studio-ugc-tab.jpg', label: 'MONOV UGC' }
    ]
  },
  {
    n: '02', title: 'COMMERCIAL', meta: 'OFF BEAUTY · M.E.N.D. · EASYCHECK', href: '/work/commercial', mirror: true,
    main: { src: '/assets/commercial/offbeauty-ooh.jpg', label: 'OFF BEAUTY 홍대점 전광판' },
    side: [
      { src: '/assets/commercial/offbeauty-master-frame.jpg', label: 'OFF BEAUTY AI 비주얼' },
      { src: '/assets/commercial/mend-video-1.png', label: 'M.E.N.D. 영상 프레임' }
    ]
  },
  {
    n: '03', title: 'FILM & STAGE', meta: 'PRODUCER · DIRECTOR', href: '/work/film-stage', mirror: false,
    main: { src: '/assets/film/heaven-field.jpg', label: '그곳에는 천국이 있습니까' },
    side: [
      { src: '/assets/film/the-sun-curtain.jpg', label: 'THE SUN' },
      { src: '/assets/film/heaven-camera.jpg', label: '그곳에는 천국이 있습니까 촬영' }
    ]
  }
];

export default function Home() {
  return (
    <main lang="ko">
      <section className="home-top">
        <div className="home-hero">
          <h1 className="home-h1"><span>MINJU</span><span className="indent">CHOI</span></h1>
          <Credits
            items={[
              ['FIELD', 'AI Content · Commercial · Film'],
              ['BASED', 'Seoul'],
              ['CONTACT', <a key="m" href={`mailto:${EMAIL}`}>{EMAIL}</a>]
            ]}
          />
        </div>
      </section>

      <section className="work-list">
        {WORK.map((w, i) => {
          const main = <Tile className="work-main" src={w.main.src} label={w.main.label} sizes="(max-width: 900px) 100vw, 66vw" priority={i === 0} />;
          const side = (
            <div className="work-side">
              {w.side.map(s => <Tile key={s.src} src={s.src} label={s.label} sizes="(max-width: 900px) 50vw, 33vw" />)}
            </div>
          );
          return (
            <article key={w.n} className="work">
              <Link className="work-head" href={w.href}>
                <div className="l"><span className="num">{w.n}</span><h2>{w.title}</h2></div>
                <span className="meta">{w.meta}&nbsp;&nbsp;→</span>
              </Link>
              <div className="work-grid">
                {w.mirror ? <>{side}{main}</> : <>{main}{side}</>}
              </div>
            </article>
          );
        })}
      </section>

      <ContactFooter />
    </main>
  );
}
