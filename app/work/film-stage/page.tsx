import type { Metadata } from 'next';
import { AsideItem, CaseBlock, SectionTitle, Spec, Tbd } from '@/components/CaseBlock';
import { Tile } from '@/components/Tile';
import { ContactFooter } from '@/components/ContactFooter';

export const metadata: Metadata = { title: 'Film & Stage' };

const F = '/assets/film';

const FILMOGRAPHY = [
  { n: '01', title: '그곳에는 천국이 있습니까', meta: 'Line Producer · 단편 35분', href: '#heaven' },
  { n: '02', title: 'THE SUN', meta: 'Director · 연극', href: '#sun' },
  { n: '03', title: '백화 · 윤슬', meta: '연출부 · 조감독', href: '#other' }
];

const HEAVEN = [
  { src: `${F}/heaven-clinic.jpg` }, { src: `${F}/heaven-field.jpg` }, {},
  { src: `${F}/heaven-camera.jpg` }, { src: `${F}/heaven-wide.jpg` }, {},
  {}, {}, { src: `${F}/heaven-theatre.jpg` }
];

export default function FilmStagePage() {
  return (
    <main lang="ko">
      <div className="case-main">
        <section className="two-col end" style={{ paddingTop: 72 }}>
          <div className="stack-20">
            <span className="eyebrow">03 · FILM &amp; STAGE</span>
            <h1 className="case-h1">FILM<br />&amp; STAGE</h1>
            <p className="lead" style={{ maxWidth: 520 }}>단편영화 제작 관리와 연극 연출. 예산과 사람을 모아 작품을 끝까지 완성한 기록입니다.</p>
          </div>
          <div className="stack">
            <span className="eyebrow" style={{ marginBottom: 14 }}>FILMOGRAPHY</span>
            <div>
              {FILMOGRAPHY.map(f => (
                <a key={f.n} className="film-row" href={f.href}>
                  <b className="n">{f.n}</b>
                  <span className="t">{f.title}</span>
                  <span className="m">{f.meta}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CaseBlock
          id="heaven"
          eyebrow="SELECTED WORK · 제작 (Line Producer)"
          en="FILM" ko="그곳에는 천국이 있습니까"
          gallery={
            <div className="gallery cols-3">
              {HEAVEN.map((h, i) => <Tile key={i} ratio="16/9" src={h.src} label="스틸" sizes="(max-width: 900px) 50vw, 25vw" />)}
            </div>
          }
          aside={
            <>
              <AsideItem label="시놉시스"><p>사이비 교주가 신도를 모으기 위해 만든 VR &lsquo;천국&rsquo;에서 살인 사건이 일어나고, 교주의 유토피아는 점차 지옥으로 변해갑니다.</p></AsideItem>
              <AsideItem label="역할"><p>경기 청년 갭이어 지원사업에 기획서와 PT로 지원해 제작비 ₩35M을 확보했습니다. 예산·일정·장소·스태프·장비를 운영하며 기획부터 완성까지 함께했습니다.</p></AsideItem>
              <AsideItem label="수상 & 상영"><p>경기도 미래세대재단 제작지원작 <Tbd>· [상영 이력]</Tbd></p></AsideItem>
              <Spec items={[['RUNNING TIME', '35M'], ['GENRE', '스릴러, SF, 블랙코미디'], ['ACTOR', '이규회, 전규원, 김지훈, 박지훈'], ['ROLE', 'Line Producer']]} />
            </>
          }
        />

        <CaseBlock
          id="sun"
          eyebrow="SELECTED WORK · 연출 (Director)"
          en="STAGE" ko="THE SUN"
          gallery={
            <div className="gallery cols-4">
              <Tile span={3} ratio="21/9" src={`${F}/the-sun-curtain.jpg`} label="무대 사진" sizes="(max-width: 900px) 100vw, 55vw" />
              <Tile rows2 mobileRatio="3/4" src={`${F}/the-sun-poster.png`} label="포스터" sizes="(max-width: 900px) 100vw, 20vw" />
              <Tile ratio="16/9" label="공연 사진" />
              <Tile ratio="16/9" label="공연 사진" />
              <Tile ratio="16/9" label="리허설" />
            </div>
          }
          aside={
            <>
              <AsideItem label="연출 노트"><p className="tbd">[작품이 다루는 것 + 연출의 핵심 선택 한 가지]</p></AsideItem>
              <AsideItem label="역할"><p>Florian Zeller 희곡의 해석부터 배우 디렉션, 무대 구성, 팀 조율까지 연출 전 과정을 맡았습니다.</p></AsideItem>
              <AsideItem label="크레딧">
                <p>연출 최민주 · 조연출 오윤형 · 번역 임선욱</p>
                <a className="aside-link" href="https://ewhaimplay75.vercel.app/" target="_blank" rel="noopener noreferrer">공연 사이트 ↗</a>
              </AsideItem>
              <Spec items={[['COMPANY', '이화 인문극회 75회'], ['ORIGINAL', 'Florian Zeller'], ['ROLE', 'Director']]} />
            </>
          }
        />

        <section id="other" className="case-block" style={{ gap: 64 }}>
          <div className="other-grid">
            <div className="stack-20">
              <div className="stack-8">
                <span className="eyebrow tight">OTHER WORK · 스크립터 · 연출부</span>
                <SectionTitle small en="FILM" ko="백화" />
              </div>
              <div className="poster-stack">
                <Tile ratio="3/4" label="백화 포스터" />
                <div className="rows">
                  <Tile label="스틸" />
                  <Tile label="스틸" />
                  <Tile label="스틸" />
                </div>
              </div>
              <span className="caption-line">단편영화 · 2023.02 · Scripter · 연출부 <Tbd>· [MovieBloc 링크 보류]</Tbd></span>
            </div>
            <div className="stack-20">
              <div className="stack-8">
                <span className="eyebrow tight">OTHER WORK · 조감독</span>
                <SectionTitle small en="FILM" ko="윤슬" />
              </div>
              <div className="gallery cols-2">
                <Tile span={2} ratio="16/9" label="윤슬 대표 스틸" />
                <Tile ratio="16/9" label="스틸" />
                <Tile ratio="16/9" label="스틸" />
              </div>
              <span className="caption-line">
                단편영화 · Assistant Director ·{' '}
                <a href="https://www.moviebloc.com/detail/ct_11ed3b348f08cc23ada2023f85d07bb2/ko" target="_blank" rel="noopener noreferrer">MovieBloc에서 보기 ↗</a>
              </span>
            </div>
          </div>
        </section>
      </div>

      <ContactFooter allWork marginTop={140} />
    </main>
  );
}
