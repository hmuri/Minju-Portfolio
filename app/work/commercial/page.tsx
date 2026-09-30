import type { Metadata } from 'next';
import { AsideItem, CaseBlock, Spec, Tbd } from '@/components/CaseBlock';
import { NumRow } from '@/components/NumRow';
import { Tile } from '@/components/Tile';
import { AutoVideo } from '@/components/AutoVideo';
import { YouTube } from '@/components/YouTube';
import { NextLink } from '@/components/NextLink';

export const metadata: Metadata = { title: 'Commercial' };

const C = '/assets/commercial';

export default function CommercialPage() {
  return (
    <main lang="ko" className="case-main">
      <section className="case-header">
        <span className="eyebrow">02 · COMMERCIAL</span>
        <h1 className="case-h1">COMMERCIAL</h1>
        <p className="lead">AI 비주얼부터 기획·현장 진행까지. 광고 세 편, 역할은 프로젝트마다 다릅니다. 2026.</p>
      </section>

      {/* OFF BEAUTY — overview */}
      <section className="two-col" data-reveal="">
        <div className="stack-28">
          <span className="eyebrow">CAMPAIGN OVERVIEW</span>
          <h2 className="big-h2">OFF<br />BEAUTY</h2>
          <p className="lead-sm">대명화학 OFF BEAUTY 홍대점 대형 전광판 광고. AI 비주얼 제작을 담당했고, 6,568 × 680 px 초광폭 LED 규격에 맞춰 마스터를 만들어 실제 송출했습니다.</p>
        </div>
        <div className="stack ruled-left">
          <span className="eyebrow">WHAT I DELIVERED</span>
          <span className="rows-intro">AI 비주얼 하나로, 거리의 전광판까지.</span>
          <div>
            <NumRow n="01" title="AI 비주얼 제작" sub="Generative Visuals" desc={<>광고 영상에 들어가는<br />AI 비주얼 기획·생성·합성</>} />
            <NumRow n="02" title="초광폭 마스터" sub="6,568 × 680 px" desc={<>16:9가 아닌 9.66:1 LED 규격에<br />맞춘 마스터 재구성</>} />
            <NumRow n="03" title="홍대점 대형 전광판" sub="Large-scale Billboard · 2026" desc={<>홍대점 외벽 LED에<br />실제 송출</>} />
          </div>
        </div>
      </section>

      {/* OFF BEAUTY — works */}
      <CaseBlock
        eyebrow="SELECTED WORK · AI 비주얼 · 옥외 LED 마스터"
        en="DIGITAL OOH" ko="OFF BEAUTY"
        gallery={
          <div className="stack-8">
            <div className="tile dark" style={{ aspectRatio: '6568/680' }}>
              <AutoVideo src={`${C}/offbeauty-final.mp4`} label="OFF BEAUTY 옥외 LED 마스터 영상" />
              <span className="tile-badge">6,568 × 680 · OUTDOOR LED MASTER · 18.8s</span>
            </div>
            <div className="gallery cols-4">
              <Tile span={2} ratio="16/9" src={`${C}/offbeauty-master-frame.jpg`} label="AI 비주얼 프레임" />
              <Tile span={2} ratio="16/9" src={`${C}/offbeauty-ooh.jpg`} label="홍대 송출 현장" />
              <Tile ratio="16/9" src={`${C}/offbeauty-ooh-2.jpg`} label="송출 현장 2" sizes="25vw" />
              <Tile ratio="16/9" label="AI 비주얼 프레임" />
              <Tile ratio="16/9" label="AI 비주얼 프레임" />
              <Tile ratio="16/9" label="영상 프레임" />
            </div>
          </div>
        }
        aside={
          <>
            <AsideItem label="개요"><p>홍대점 외벽 대형 LED에 송출된 OFF BEAUTY 브랜드 광고. 실사 영상에 AI 비주얼을 결합했다.</p></AsideItem>
            <AsideItem label="역할"><p>AI 비주얼 기획·생성·합성. 6,568×680 옥외 LED 규격 마스터 재구성·송출 납품.</p></AsideItem>
            <AsideItem label="재구성에서 바꾼 것"><p className="tbd">[한 줄 기입 — 예: 세로 컷은 버리고 타이포를 좌우로 분산]</p></AsideItem>
            <Spec items={[['CLIENT', '대명화학 OFF BEAUTY'], ['FORMAT', '6,568 × 680 초광폭 LED'], ['LIVE', '홍대점 외벽 LED'], ['YEAR', '2026']]} />
          </>
        }
      />

      {/* M.E.N.D. */}
      <CaseBlock
        eyebrow="SELECTED WORK · 기획. 촬영. 편집. AI 영상. 브로셔"
        en="PROMOTIONAL FILM" ko="THE M.E.N.D. BIOSIMULATOR"
        gallery={
          <div className="gallery cols-4">
            <div className="tile dark span-3" style={{ gridColumn: 'span 3', aspectRatio: '16/9' }}>
              <YouTube id="W0ZrnxUIQIs" title="The M.E.N.D. BioSimulator" />
            </div>
            <Tile rows2 mobileRatio="3/4" src={`${C}/mend-brochure.png`} label="브로셔" sizes="(max-width: 900px) 100vw, 20vw" />
            <Tile ratio="16/9" src={`${C}/mend-video-1.png`} label="프레임" sizes="25vw" />
            <Tile ratio="16/9" src={`${C}/mend-video-2.png`} label="프레임" sizes="25vw" />
            <Tile ratio="16/9" label="프레임" />
          </div>
        }
        aside={
          <>
            <AsideItem label="개요"><p>의료 시뮬레이터의 기술 자료를 시각 내러티브로 다시 짜, 비전문가도 이해하는 홍보 영상과 브로셔.</p></AsideItem>
            <AsideItem label="역할"><p>기획·구성안 → 촬영·편집 → 실사 + 모션그래픽 + AI 생성 이미지 결합 → 브로셔 디자인.</p></AsideItem>
            <Spec items={[['DELIVERABLE', '영상 · 브로셔'], ['USE', <Tbd key="u">[전시 · 영업 · 사이트]</Tbd>], ['YEAR', '2026']]} />
          </>
        }
      />

      {/* EASYCHECK */}
      <CaseBlock
        eyebrow="SELECTED WORK · 기획. 현장 진행. AI TTS"
        en="MAIN COMMERCIAL FILM" ko="EASYCHECK"
        gallery={
          <div className="gallery cols-4">
            <div className="tile dark span-4" style={{ gridColumn: 'span 4', aspectRatio: '16/7' }}>
              <YouTube id="_C-BR4NXRHg" title="EasyCheck commercial" />
            </div>
            <Tile ratio="16/9" label="영상 프레임" />
            <Tile ratio="16/9" label="영상 프레임" />
            <Tile ratio="16/9" label="영상 프레임" />
            <Tile ratio="16/9" label="영상 프레임" />
            <Tile ratio="16/9" label="콘티 · 기획안" />
            <Tile ratio="16/9" label="촬영 현장" />
            <Tile ratio="16/9" label="촬영 현장" />
            <Tile ratio="16/9" label="영상 프레임" />
          </div>
        }
        aside={
          <>
            <AsideItem label="개요"><p>대행사 쪽에서 크리에이티브를 기획하고 촬영 현장을 진행한 광고 캠페인.</p></AsideItem>
            <AsideItem label="역할"><p>크리에이티브 기획 · 촬영 현장 진행 · AI TTS 내레이션 제작.<br /><span style={{ color: 'var(--muted)' }}>최종 제작은 외부 프로덕션.</span></p></AsideItem>
            <Spec items={[['SIDE', '대행사'], ['MEDIA', <Tbd key="m">[유튜브 · SNS]</Tbd>], ['YEAR', '2026']]} />
          </>
        }
      />

      <NextLink label="NEXT · 03" name="FILM & STAGE →" href="/work/film-stage" />
    </main>
  );
}
