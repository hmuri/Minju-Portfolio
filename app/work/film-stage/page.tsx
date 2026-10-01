import type { Metadata } from 'next';
import { Project } from '@/components/Project';
import { Tile } from '@/components/Tile';
import { ContactFooter } from '@/components/ContactFooter';

export const metadata: Metadata = { title: 'Film & Stage' };

const FILMOGRAPHY = [
  { n: '01', title: '그곳에는 천국이 있습니까', meta: 'Line Producer · 단편 35분', href: '#heaven' },
  { n: '02', title: 'THE SUN', meta: 'Director · 연극', href: '#sun' },
  { n: '03', title: '백화', meta: 'Scripter · 연출부', href: '#other' },
  { n: '04', title: '윤슬', meta: 'Assistant Director', href: '#other' }
];

export default function FilmStagePage() {
  return (
    <main lang="ko">
      <div className="case-main">
        <section className="case-header split">
          <div className="stack-20">
            <span className="eyebrow">03 · FILM &amp; STAGE</span>
            <h1 className="case-h1">FILM<br />&amp; STAGE</h1>
          </div>
          <div>
            {FILMOGRAPHY.map(f => (
              <a key={f.n} className="film-row" href={f.href}>
                <b className="n">{f.n}</b>
                <span className="t">{f.title}</span>
                <span className="m">{f.meta}</span>
              </a>
            ))}
          </div>
        </section>

        <Project
          id="heaven"
          kicker="SHORT FILM · 35 MIN"
          title="그곳에는 천국이 있습니까"
          line="사이비 교주가 만든 VR ‘천국’에서 살인 사건이 일어나고, 유토피아는 지옥이 되어 간다."
          credits={[
            ['ROLE', 'Line Producer'],
            ['PRODUCTION', '₩35M · Budget · Schedule · Crew · Location'],
            ['GENRE', '스릴러 · SF · 블랙코미디'],
            ['CAST', '이규회, 전규원, 김지훈, 박지훈'],
            ['SUPPORT', '경기도 미래세대재단 제작지원']
          ]}
        >
          <div className="gallery cols-4">
            <Tile span={4} ratio="21/9" slot="film/heaven-hero" label="스틸" sizes="100vw" />
            <Tile ratio="16/9" slot="film/heaven-1" label="스틸" sizes="(max-width: 900px) 50vw, 25vw" />
            <Tile ratio="16/9" slot="film/heaven-2" label="스틸" sizes="(max-width: 900px) 50vw, 25vw" />
            <Tile ratio="16/9" slot="film/heaven-3" label="스틸" sizes="(max-width: 900px) 50vw, 25vw" />
            <Tile ratio="16/9" slot="film/heaven-4" label="스틸" sizes="(max-width: 900px) 50vw, 25vw" />
          </div>
        </Project>

        <Project
          id="sun"
          kicker="STAGE · 이화 인문극회 75회"
          title="THE SUN"
          credits={[
            ['ROLE', 'Director'],
            ['ORIGINAL', 'The Son · Florian Zeller'],
            ['ADAPTATION', 'The Son → THE SUN'],
            ['CREDITS', '연출 최민주 · 조연출 오윤형 · 번역 임선욱'],
            ['SITE', <a key="s" className="accent" href="https://ewhaimplay75.vercel.app/" target="_blank" rel="noopener noreferrer">ewhaimplay75 ↗</a>]
          ]}
        >
          <div className="gallery cols-4">
            <Tile span={3} ratio="21/9" slot="film/sun-stage" label="무대" sizes="(max-width: 900px) 100vw, 70vw" />
            <Tile rows2 mobileRatio="3/4" slot="film/sun-poster" label="포스터" sizes="(max-width: 900px) 100vw, 25vw" />
            <Tile slot="film/sun-1" ratio="16/9" label="공연 사진" />
            <Tile slot="film/sun-2" ratio="16/9" label="공연 사진" />
            <Tile slot="film/sun-rehearsal" ratio="16/9" label="리허설" />
          </div>
        </Project>

        <section id="other" className="other-grid">
          <div className="project">
            <header className="project-head compact">
              <div className="stack-10">
                <span className="eyebrow tight">SHORT FILM · 2023</span>
                <h2 className="project-title sm">백화</h2>
              </div>
              <span className="tags">Scripter · 연출부</span>
            </header>
            <div className="poster-stack">
              <Tile slot="film/baekhwa-poster" ratio="3/4" label="백화 포스터" />
              <div className="rows">
                <Tile slot="film/baekhwa-1" label="스틸" />
                <Tile slot="film/baekhwa-2" label="스틸" />
                <Tile slot="film/baekhwa-3" label="스틸" />
              </div>
            </div>
          </div>
          <div className="project">
            <header className="project-head compact">
              <div className="stack-10">
                <span className="eyebrow tight">SHORT FILM</span>
                <h2 className="project-title sm">윤슬</h2>
              </div>
              <a className="tags" href="https://www.moviebloc.com/detail/ct_11ed3b348f08cc23ada2023f85d07bb2/ko" target="_blank" rel="noopener noreferrer">Assistant Director · <span className="accent">MovieBloc ↗</span></a>
            </header>
            <div className="gallery cols-2">
              <Tile slot="film/yunseul-hero" span={2} ratio="16/9" label="윤슬 대표 스틸" />
              <Tile slot="film/yunseul-1" ratio="16/9" label="스틸" />
              <Tile slot="film/yunseul-2" ratio="16/9" label="스틸" />
            </div>
          </div>
        </section>
      </div>

      <ContactFooter allWork marginTop={140} />
    </main>
  );
}
