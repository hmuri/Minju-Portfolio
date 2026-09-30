import Link from 'next/link';
import { Tile } from '@/components/Tile';
import { ContactFooter } from '@/components/ContactFooter';

const FIGURES = [
  { n: '01', value: '97%', unit: '', caption: 'MONOV · 편집으로 줄인 생성 비용', href: '/work/monov' },
  { n: '02', value: '6,568 × 680', unit: 'px', caption: 'OFF BEAUTY · 홍대점 LED 마스터', href: '/work/commercial' },
  { n: '03', value: '₩35M', unit: '', caption: '단편영화 · 확보한 제작비', href: '/work/film-stage' }
];

const WORK = [
  {
    n: '01', title: 'MONOV', meta: 'PRODUCT LEAD · 2025—26', href: '/work/monov', mirror: false,
    main: { src: '/assets/monov/01-studio-hero.jpg', label: 'MONOV 대표 이미지' },
    side: [
      { src: '/assets/monov/02-studio-product-grid.jpg', label: 'MONOV 스튜디오' },
      { src: '/assets/monov/09-workspace-edit.jpg', label: 'MONOV 편집' }
    ]
  },
  {
    n: '02', title: 'COMMERCIAL', meta: 'OFF BEAUTY · M.E.N.D. · EASYCHECK', href: '/work/commercial', mirror: true,
    main: { src: '/assets/commercial/offbeauty-ooh.jpg', label: 'OFF BEAUTY 홍대 전광판' },
    side: [
      { src: '/assets/commercial/offbeauty-master-frame.jpg', label: 'OFF BEAUTY 마스터 프레임' },
      { src: '/assets/commercial/mend-video-1.png', label: 'M.E.N.D. 영상 프레임' }
    ]
  },
  {
    n: '03', title: 'FILM & STAGE', meta: 'PRODUCER · DIRECTOR', href: '/work/film-stage', mirror: false,
    main: { src: '/assets/film/heaven-field.jpg', label: '그곳에는 천국이 있습니까 스틸' },
    side: [
      { src: '/assets/film/the-sun-curtain.jpg', label: 'THE SUN 무대' },
      { src: '/assets/film/heaven-camera.jpg', label: '그곳에는 천국이 있습니까 촬영' }
    ]
  }
];

export default function Home() {
  return (
    <main lang="ko">
      <section className="home-top">
        <span className="eyebrow">MINJU CHOI · CREATIVE TECHNOLOGIST</span>
        <div className="home-hero">
          <h1 className="home-h1" aria-label="I build ways to create">
            <span>I BUILD</span>
            <span className="indent">WAYS TO</span>
            <span>CREATE.</span>
          </h1>
          <aside className="home-figures" aria-label="대표 수치">
            <span className="label-muted">IN NUMBERS</span>
            {FIGURES.map(f => (
              <Link key={f.n} className="figure" href={f.href}>
                <span className="figure-n">{f.n}</span>
                <b className="figure-v">{f.value}{f.unit && <small>{f.unit}</small>}</b>
                <span className="figure-c">{f.caption}</span>
              </Link>
            ))}
          </aside>
        </div>
        <div className="home-top-foot">
          <span>Product Lead @ MONOV</span>
          <span>AI CONTENT · PRODUCT · FILM</span>
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
