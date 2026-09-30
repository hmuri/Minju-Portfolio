'use client';

import { useState } from 'react';
import { Tile } from '@/components/Tile';
import { AsideItem, CaseBlock, Spec } from '@/components/CaseBlock';
import { NumRow } from '@/components/NumRow';

const A = '/assets/monov';

const DECISIONS = [
  { n: '01', title: '마케팅 스튜디오', sub: 'Product Shot · UGC', desc: <>제품은 유지하고<br />장면만 생성한다</> },
  { n: '02', title: '워크스페이스', sub: '만들기 · 템플릿 · 보관함', desc: <>여러 장을<br />같은 느낌으로</> },
  { n: '03', title: '편집', sub: '텍스트 편집 · 부분 수정', desc: <>생성 대신 편집<br />비용 97% ↓</> },
  { n: '04', title: '영상', sub: '이미지 1장 → 8–10초 숏폼', desc: <>엔진 차이를<br />제작 선택지로</> }
];

const TABS = ['마케팅 스튜디오', '워크스페이스', '편집', '영상'];

function Studio() {
  return (
    <CaseBlock
      id="f1" reveal={false}
      eyebrow="FEATURE 01 · 기획. UX. 구현"
      en="MARKETING STUDIO" ko="마케팅 스튜디오"
      gallery={
        <div className="gallery cols-4">
          <Tile span={4} ratio="16/8" src={`${A}/02-studio-product-grid.jpg`} label="스튜디오 화면 녹화 (무음 루프)" />
          <Tile ratio="1" label="입력 제품 사진" />
          <Tile ratio="1" label="결과 1" />
          <Tile ratio="1" label="결과 2" />
          <Tile ratio="1" src={`${A}/03-studio-ugc-tab.jpg`} label="UGC 탭" sizes="25vw" />
        </div>
      }
      aside={
        <>
          <AsideItem label="문제"><p>소상공인은 프롬프트를 못 쓴다. 생성 AI는 제품 모양을 바꿔버린다.</p></AsideItem>
          <AsideItem label="결정" decision><p>입력은 제품 사진 + 연출 선택만. 제품은 유지하고 장면만 생성한다.</p></AsideItem>
          <AsideItem label="역할"><p>Product Shot / UGC 두 모드 기획·UX. 장면 템플릿과 모델 캐스팅 분리 구조. 제품 보존용 이미지 모델 선정과 프롬프트 파이프라인 구현.</p></AsideItem>
          <Spec items={[['MENU', '/studio · /video'], ['MODELS', 'Nano Banana · OpenAI Images']]} />
        </>
      }
    />
  );
}

function Workspace() {
  return (
    <CaseBlock
      id="f2" reveal={false}
      eyebrow="FEATURE 02 · 기획. 프론트·백엔드 구현"
      en="WORKSPACE" ko="워크스페이스"
      gallery={
        <div className="gallery cols-4">
          <Tile span={2} ratio="16/10" src={`${A}/08-workspace-create-references.jpg`} label="만들기 화면 녹화" />
          <Tile span={2} ratio="16/10" src={`${A}/07-workspace-templates.jpg`} label="템플릿" />
          <Tile ratio="16/10" src={`${A}/10-landing-hero.jpg`} label="홈" sizes="25vw" />
          <Tile ratio="16/10" label="보관함" />
          <Tile ratio="16/10" label="내 스타일" />
          <Tile ratio="16/10" src={`${A}/11-landing-gallery.jpg`} label="갤러리" sizes="25vw" />
        </div>
      }
      aside={
        <>
          <AsideItem label="문제"><p>한 장씩 만드는 툴은 많다. 가게는 이번 주 올릴 여러 장을 같은 느낌으로 만들어야 한다.</p></AsideItem>
          <AsideItem label="결정" decision><p>템플릿 + 레퍼런스(최대 5장)를 입력으로. 만든 것은 보관함·내 스타일로 돌아와 다음 재료가 된다.</p></AsideItem>
          <AsideItem label="역할"><p>생성 플로우 기획. Next.js·TypeScript 프론트와 Firebase 백엔드 구현. 생성 이력·저장·재사용 구조 설계.</p></AsideItem>
          <Spec items={[['MENU', '홈 · 만들기 · 템플릿 · 보관함 · 내 스타일'], ['STACK', 'Next.js · TS · Firebase']]} />
        </>
      }
    />
  );
}

function Edit() {
  return (
    <CaseBlock
      id="f3" reveal={false}
      eyebrow="FEATURE 03 · 방향 제안. 파이프라인 설계·구현"
      en="EDIT" ko="생성하지 않고 편집하기"
      gallery={
        <div className="gallery cols-4">
          <div className="captioned" style={{ gridColumn: 'span 2' }}>
            <Tile ratio="4/5" label="BEFORE · 원본 포스터" />
            <span className="tile-caption">BEFORE</span>
          </div>
          <div className="captioned" style={{ gridColumn: 'span 2' }}>
            <Tile ratio="4/5" label="AFTER · 가격 문구만 바뀜" />
            <span className="tile-caption accent">AFTER</span>
          </div>
          <Tile span={4} ratio="16/8" src={`${A}/09-workspace-edit.jpg`} label="편집 화면 녹화" />
        </div>
      }
      aside={
        <>
          <AsideItem label="문제"><p>포스터에서 가격 하나 바꾸려고 전체를 다시 생성하면 다른 그림이 나오고 크레딧이 또 든다.</p></AsideItem>
          <AsideItem label="결정" decision><p>텍스트 영역만 인식해 배경을 복원하고, 글자를 편집 가능한 레이어로 만든다.</p></AsideItem>
          <AsideItem label="역할"><p>&ldquo;모든 문제를 생성으로 풀지 않는다&rdquo; 방향 제안. OCR → 텍스트 영역 검출 → 배경 복원 → 편집 가능 텍스트 파이프라인 설계·구현.</p></AsideItem>
          <div className="stat-pair">
            <div className="stat fill"><b>97%</b><span>비용 절감</span></div>
            <div className="stat line"><b>14s</b><span>처리 시간 p50</span></div>
          </div>
        </>
      }
    />
  );
}

function Video() {
  return (
    <CaseBlock
      id="f4" reveal={false}
      eyebrow="FEATURE 04 · UX. 모델 평가·연동. 구현"
      en="VIDEO" ko="이미지 한 장 → 숏폼 영상"
      gallery={
        <div className="gallery cols-4">
          <Tile ratio="9/16" label="생성 영상 1 (9:16)" />
          <Tile ratio="9/16" label="생성 영상 2" />
          <Tile ratio="9/16" label="생성 영상 3" />
          <Tile ratio="9/16" src={`${A}/04-studio-template-sheet.jpg`} label="템플릿 시트" sizes="25vw" />
        </div>
      }
      aside={
        <>
          <AsideItem label="문제"><p>영상 모델마다 잘하는 게 다르고 비싸다. 이미지의 4배.</p></AsideItem>
          <AsideItem label="결정" decision><p>엔진을 숨기지 않고 길이·비율·엔진을 고르게 한다. 템플릿은 호버 미리보기로 결과를 먼저 보여준다.</p></AsideItem>
          <AsideItem label="역할"><p>영상 템플릿 시트와 옵션 UX 설계. Kling·Seedance 등 모델 비교·연동. 호버 미리보기 구현.</p></AsideItem>
          <Spec items={[['MENU', '/workspace/video · Video Studio'], ['ENGINES', 'Kling · Seedance'], ['OUTPUT', '8–10s · 9:16 / 1:1 / 16:9']]} />
        </>
      }
    />
  );
}

const PANELS = [Studio, Workspace, Edit, Video];

/** Overview (left copy + FOUR DECISIONS) and the feature tabs below it. */
export function MonovFeatures({ overview }: { overview: React.ReactNode }) {
  const [tab, setTab] = useState(0);
  const Panel = PANELS[tab];

  return (
    <>
      <section className="two-col" style={{ paddingTop: 72 }}>
        {overview}
        <div className="stack ruled-left">
          <span className="eyebrow">FOUR DECISIONS</span>
          <span className="rows-intro">생성 버튼이 아니라, 만드는 방법을 만들었다.</span>
          <div>
            {DECISIONS.map((d, i) => (
              <NumRow key={d.n} n={d.n} title={d.title} sub={d.sub} desc={d.desc} href="#features" onClick={() => setTab(i)} />
            ))}
          </div>
        </div>
      </section>

      <div id="features" className="features">
        <div className="stack" style={{ gap: 24 }}>
          <span className="eyebrow tight">FEATURES · 기능별로 보기</span>
          <div className="tablist" role="tablist" aria-label="MONOV 기능">
            {TABS.map((t, i) => (
              <button
                key={t} type="button" role="tab" className="tab"
                id={`tab-${i + 1}`} aria-controls={`f${i + 1}`} aria-selected={tab === i}
                onClick={() => setTab(i)}
              >
                <span>{String(i + 1).padStart(2, '0')}</span>{t}
              </button>
            ))}
          </div>
        </div>
        <div role="tabpanel" aria-labelledby={`tab-${tab + 1}`}>
          <Panel />
        </div>
      </div>
    </>
  );
}
