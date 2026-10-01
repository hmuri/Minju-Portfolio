import Link from 'next/link';
import { Tile } from '@/components/Tile';
import { ContactFooter, EMAIL } from '@/components/ContactFooter';

type Line = { main: string; sub?: string; href?: string };

const PROFILE: { label: string; lines: Line[] }[] = [
  { label: 'FIELD', lines: [{ main: 'AI Content' }, { main: 'Commercial' }, { main: 'Film & Stage' }] },
  {
    label: 'EDUCATION',
    lines: [{ main: 'Ewha Womans University', sub: 'Computer Science · Business Administration' }, { main: 'Expected Feb 2027' }]
  },
  {
    label: 'EXPERIENCE',
    lines: [{ main: 'Ringle', sub: 'Tech Team Intern · 2024' }, { main: 'Market Designers', sub: 'Development Intern · 2024' }]
  },
  { label: 'CONTACT', lines: [{ main: EMAIL, href: `mailto:${EMAIL}` }, { main: 'Seoul, Korea' }] }
];

const WORK = [
  {
    n: '01', title: 'MONOV', meta: 'AI CONTENT SYSTEM · SINCE 2025', href: '/work/monov', mirror: false,
    main: { slot: 'home/monov-main', label: 'MONOV 마케팅 스튜디오' },
    side: [
      { slot: 'home/monov-side-1', label: 'MONOV 생성 결과' },
      { slot: 'home/monov-side-2', label: 'MONOV UGC' }
    ]
  },
  {
    n: '02', title: 'COMMERCIAL', meta: 'OFF BEAUTY · M.E.N.D. · EASYCHECK', href: '/work/commercial', mirror: true,
    main: { slot: 'home/commercial-main', label: 'OFF BEAUTY 홍대점 전광판' },
    side: [
      { slot: 'home/commercial-side-1', label: 'OFF BEAUTY AI 비주얼' },
      { slot: 'home/commercial-side-2', label: 'M.E.N.D. 영상 프레임' }
    ]
  },
  {
    n: '03', title: 'FILM & STAGE', meta: 'PRODUCER · DIRECTOR', href: '/work/film-stage', mirror: false,
    main: { slot: 'home/film-main', label: '그곳에는 천국이 있습니까' },
    side: [
      { slot: 'home/film-side-1', label: 'THE SUN' },
      { slot: 'home/film-side-2', label: '그곳에는 천국이 있습니까 촬영' }
    ]
  }
];

function Item({ p }: { p: { label: string; lines: Line[] } }) {
  return (
    <div className="profile-item">
      <span className="profile-label">{p.label}</span>
      {p.lines.map((l, i) => (
        <div key={i} className="profile-line">
          {l.href ? <a href={l.href}>{l.main}</a> : <b>{l.main}</b>}
          {l.sub && <span>{l.sub}</span>}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main lang="ko">
      <section className="home-top">
        <h1 className="home-h1"><span>MINJU</span><span>CHOI</span></h1>
        <div className="profile-2x2">
          {PROFILE.map(p => <Item key={p.label} p={p} />)}
        </div>
      </section>

      <section className="work-list">
        {WORK.map((w, i) => {
          const main = <Tile className="work-main" slot={w.main.slot} label={w.main.label} sizes="(max-width: 900px) 100vw, 66vw" priority={i === 0} />;
          const side = (
            <div className="work-side">
              {w.side.map(s => <Tile key={s.slot} slot={s.slot} label={s.label} sizes="(max-width: 900px) 50vw, 33vw" />)}
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
