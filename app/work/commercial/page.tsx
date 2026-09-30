import type { Metadata } from 'next';
import { Project } from '@/components/Project';
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
      </section>

      <Project
        kicker="AI VISUAL · DIGITAL OOH · 2026"
        title="OFF BEAUTY"
        line="AI-generated visuals for a 6,568 × 680 outdoor LED."
        credits={[
          ['CLIENT', '대명화학 OFF BEAUTY'],
          ['ROLE', 'AI Visual · Generation · Compositing · LED Master'],
          ['FORMAT', '6,568 × 680 px LED'],
          ['LIVE', '홍대점 외벽 전광판']
        ]}
      >
        <figure className="captioned">
          <div className="tile dark" style={{ aspectRatio: '6568/680' }}>
            <AutoVideo src={`${C}/offbeauty-final.mp4`} label="OFF BEAUTY 옥외 LED 마스터 영상" />
          </div>
          <figcaption className="tile-caption">LED MASTER · 6,568 × 680 · 18.8s</figcaption>
        </figure>
        <div className="gallery cols-2">
          <Tile ratio="16/9" src={`${C}/offbeauty-master-frame.jpg`} label="AI 비주얼 프레임" caption="AI FRAME" />
          <Tile ratio="16/9" src={`${C}/offbeauty-ooh.jpg`} label="홍대점 전광판 송출" caption="LIVE · 홍대점" captionAccent />
        </div>
        <div className="gallery cols-3">
          <Tile ratio="16/9" src={`${C}/offbeauty-ooh-2.jpg`} label="홍대점 전광판 송출" sizes="(max-width: 900px) 100vw, 33vw" />
          <Tile ratio="16/9" label="AI 비주얼 프레임" />
          <Tile ratio="16/9" label="AI 비주얼 프레임" />
        </div>
      </Project>

      <Project
        kicker="PROMOTIONAL FILM · 2026"
        title="THE M.E.N.D. BIOSIMULATOR"
        credits={[
          ['ROLE', 'Planning · Shooting · Editing · Brochure'],
          ['MADE WITH', 'Live Action · Motion Graphics · Generative AI']
        ]}
      >
        <div className="gallery cols-4">
          <div className="tile dark span-3" style={{ gridColumn: 'span 3', aspectRatio: '16/9' }}>
            <YouTube id="W0ZrnxUIQIs" title="The M.E.N.D. BioSimulator" />
          </div>
          <Tile rows2 mobileRatio="3/4" src={`${C}/mend-brochure.png`} label="브로셔" sizes="(max-width: 900px) 100vw, 20vw" />
          <Tile ratio="16/9" src={`${C}/mend-video-1.png`} label="영상 프레임" sizes="25vw" />
          <Tile ratio="16/9" src={`${C}/mend-video-2.png`} label="영상 프레임" sizes="25vw" />
          <Tile ratio="16/9" label="영상 프레임" />
        </div>
      </Project>

      <Project
        kicker="COMMERCIAL FILM · 2026"
        title="EASYCHECK"
        credits={[
          ['ROLE', 'Creative Planning · On-set Production · AI TTS'],
          ['PRODUCTION', 'External studio']
        ]}
      >
        <div className="tile dark" style={{ aspectRatio: '16/7' }}>
          <YouTube id="_C-BR4NXRHg" title="EasyCheck commercial" />
        </div>
        <div className="gallery cols-3">
          <Tile ratio="16/9" label="콘티" caption="STORYBOARD" />
          <Tile ratio="16/9" label="촬영 현장" caption="ON SET" />
          <Tile ratio="16/9" label="촬영 현장" caption="ON SET" />
        </div>
      </Project>

      <NextLink label="NEXT · 03" name="FILM & STAGE →" href="/work/film-stage" />
    </main>
  );
}
