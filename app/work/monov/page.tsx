import type { Metadata } from 'next';
import { Credits, Step } from '@/components/Project';
import { Tile } from '@/components/Tile';
import { NextLink } from '@/components/NextLink';

export const metadata: Metadata = { title: 'MONOV' };

const A = '/assets/monov';
// TODO: 배포 전 public/assets/monov/outputs/ 로 내려받아 교체 (운영 스토리지 URL 의존 제거)
const GS = 'https://storage.googleapis.com/monov-prod-public-cache/gallery_seed';
const GALLERY = [
  { src: `${GS}/1788244038813-0p4cph71.png`, label: '화장품' },
  { src: `${GS}/1785309780943_image-gen-5_74_.png`, label: '음식' },
  { label: '패션' },
  { label: '생활용품' },
  { src: `${GS}/1785999310086-ycfuwsu0.png`, label: '스킨케어' },
  { label: '포스터' }
];

export default function MonovPage() {
  return (
    <main lang="ko" className="case-main">
      <section className="case-header">
        <div className="stack-20">
          <span className="eyebrow">01 · MONOV</span>
          <h1 className="case-h1 purple">MONOV</h1>
          <p className="lead">제품 사진 한 장으로<br />광고 이미지와 숏폼 영상을 만드는 AI 콘텐츠 제작 서비스.</p>
        </div>
        <Credits
          items={[
            ['ROLE', 'Product Lead'],
            ['YEAR', 'Since 2025'],
            ['MODELS', 'Nano Banana · OpenAI Images · Kling · Seedance'],
            ['LIVE', <a key="l" className="accent" href="https://www.monov-ai.com" target="_blank" rel="noopener noreferrer">monov-ai.com ↗</a>]
          ]}
        />
      </section>

      <div className="steps">
        <Step n="01" label="INPUT → PRODUCT SHOT" tags="Product-preserving generation · Nano Banana · OpenAI Images">
          <div className="gallery cols-4">
            <Tile ratio="1" label="입력 제품 사진" caption="INPUT" />
            <Tile ratio="1" label="생성 결과" caption="OUTPUT" captionAccent />
            <Tile ratio="1" label="생성 결과" caption="OUTPUT" captionAccent />
            <Tile ratio="1" label="생성 결과" caption="OUTPUT" captionAccent />
            <Tile span={4} ratio="16/8" src={`${A}/02-studio-product-grid.jpg`} label="마케팅 스튜디오 Product Shot" />
          </div>
        </Step>

        <Step n="02" label="UGC" tags="Model · Scene · Direction">
          <div className="gallery cols-4">
            <Tile span={2} ratio="16/10" src={`${A}/03-studio-ugc-tab.jpg`} label="마케팅 스튜디오 UGC" />
            <Tile span={2} ratio="16/10" src={`${A}/01-studio-hero.jpg`} label="마케팅 스튜디오" />
            <Tile ratio="4/5" label="UGC 결과" />
            <Tile ratio="4/5" label="UGC 결과" />
            <Tile ratio="4/5" label="UGC 결과" />
            <Tile ratio="4/5" label="UGC 결과" />
          </div>
        </Step>

        <Step n="03" label="IMAGE → VIDEO" tags="Kling · Seedance · 8~10s · 9:16 / 1:1 / 16:9">
          <div className="gallery cols-4">
            <Tile ratio="9/16" label="생성 영상" />
            <Tile ratio="9/16" label="생성 영상" />
            <Tile ratio="9/16" label="생성 영상" />
            <Tile ratio="9/16" src={`${A}/04-studio-template-sheet.jpg`} label="영상 템플릿" />
          </div>
        </Step>

        <Step n="04" label="WORKSPACE · EDIT" tags="Template · Reference · Text edit">
          <div className="gallery cols-3">
            <Tile ratio="16/10" src={`${A}/08-workspace-create-references.jpg`} label="만들기 · 레퍼런스" caption="CREATE" sizes="(max-width: 900px) 100vw, 33vw" />
            <Tile ratio="16/10" src={`${A}/07-workspace-templates.jpg`} label="템플릿" caption="TEMPLATE" sizes="(max-width: 900px) 100vw, 33vw" />
            <Tile ratio="16/10" src={`${A}/09-workspace-edit.jpg`} label="텍스트 편집" caption="TEXT EDIT" sizes="(max-width: 900px) 100vw, 33vw" />
          </div>
        </Step>
      </div>

      <section className="step">
        <header className="step-head">
          <span className="step-label">GALLERY</span>
          <span className="tags">Selected AI Contents</span>
        </header>
        <div className="gallery cols-6">
          {GALLERY.map(g => <Tile key={g.label} ratio="4/5" src={g.src} label={g.label} sizes="(max-width: 900px) 33vw, 17vw" />)}
        </div>
      </section>

      <NextLink label="NEXT · 02" name="COMMERCIAL →" href="/work/commercial" />
    </main>
  );
}
