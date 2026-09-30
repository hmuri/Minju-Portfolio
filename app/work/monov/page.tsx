import type { Metadata } from 'next';
import { MonovFeatures } from '@/components/MonovFeatures';
import { SectionTitle } from '@/components/CaseBlock';
import { Tile } from '@/components/Tile';
import { NextLink } from '@/components/NextLink';

export const metadata: Metadata = { title: 'MONOV' };

// TODO: 배포 전 public/assets/monov/outputs/ 로 내려받아 교체 (운영 스토리지 URL 의존 제거)
const GS = 'https://storage.googleapis.com/monov-prod-public-cache/gallery_seed';
const OUTPUTS = [
  { src: `${GS}/1788244038813-0p4cph71.png`, label: '화장품' },
  { src: `${GS}/1785309780943_image-gen-5_74_.png`, label: '음식' },
  { label: '패션' },
  { label: '생활용품' },
  { src: `${GS}/1785999310086-ycfuwsu0.png`, label: '스킨케어' },
  { label: '포스터' }
];

export default function MonovPage() {
  const overview = (
    <div className="stack-28">
      <span className="eyebrow">01 · PRODUCT OVERVIEW</span>
      <h1 className="case-h1 purple">MONOV</h1>
      <p className="lead-sm">제품 사진 한 장으로 광고 이미지와 영상을 만드는 생성형 AI 서비스입니다. Product Lead로서 기능 정의와 UX 설계, 모델 선정, Next.js·Firebase 구현, 출시 이후 운영까지 맡고 있습니다.</p>
      <div className="btn-row">
        <a className="btn-primary" href="https://www.monov-ai.com" target="_blank" rel="noopener noreferrer">monov-ai.com ↗</a>
        <span className="chip-outline">Product Lead · 2025–26 · <span className="tbd">[팀 규모]</span></span>
      </div>
    </div>
  );

  return (
    <main lang="ko" className="case-main">
      <MonovFeatures overview={overview} />

      <section className="case-block">
        <div className="stack-10">
          <span className="eyebrow tight">OUTPUTS · MONOV로 만든 결과물</span>
          <SectionTitle en="GALLERY" ko="업종별 결과물" />
        </div>
        <div className="gallery cols-6">
          {OUTPUTS.map(o => <Tile key={o.label} ratio="4/5" src={o.src} label={o.label} sizes="(max-width: 900px) 33vw, 17vw" />)}
        </div>
      </section>

      <NextLink label="NEXT · 02" name="COMMERCIAL →" href="/work/commercial" />
    </main>
  );
}
