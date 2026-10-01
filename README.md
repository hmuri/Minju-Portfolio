# Minju-Portfolio

Portfolio site of Minju Choi — Creative Technologist · AI · Content · Film.
Built with Next.js 15 (App Router) + React 19 + TypeScript. Current version: **v4 (final)** — rebuilt from `design_handoff_portfolio_final`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## 사진 교체 (로컬 편집 모드)

```bash
npm run edit     # http://localhost:3000 , EDIT 모드가 켜진 채로 열려요
```

- 오른쪽 아래 **EDIT** 버튼 (또는 키보드 `E`)으로 켜고 끔. 켜면 모든 이미지 칸에 보라색 점선 + 칸 이름(`monov/ugc-1 · 4/5`)이 보여요.
- 칸을 **클릭해서 고르거나, 파일을 끌어다 놓으면** 바로 교체되고 화면에 반영돼요. 영상(mp4/webm/mov)도 같은 방식으로 올리면 자동재생 타일이 돼요.
- 사진 비율이 칸 비율과 많이 다르면 "가장자리가 잘려 보여요" 경고가 떠요. 2800px 넘는 사진은 자동으로 줄여서 저장.
- 칸 위에 마우스를 올리면 **비우기** 버튼(다시 빈 칸으로).
- 저장 위치: 파일은 `public/assets/<페이지>/`, 어느 칸에 어떤 파일인지는 `content/images.json`. 교체돼서 안 쓰게 된 파일은 `.replaced/`로 옮겨둠(git에 안 올라감).
- 다 바꾼 뒤 평소처럼 commit · push 하면 배포 사이트에 반영. 편집 기능은 로컬(`next dev`)에서만 동작하고 배포 사이트에는 들어가지 않아요.
- 새 칸을 만들 땐 `content/images.json`에 키를 추가하고 페이지에서 `<Tile slot="키" ... />`.

## 방문자 트래킹

`lib/analytics.config.ts`에 ID를 넣거나 배포 환경변수(`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_CLARITY_ID`)로 설정.

- **Google Analytics 4**: 방문자 수, 유입 경로, 국가·도시, 기기, 페이지별 조회, 아래 이벤트
- **Microsoft Clarity**: 클릭 히트맵, 스크롤 깊이, 방문 녹화(익명)
- **추적 링크**: 지원서·메일에 `https://<사이트>/?from=회사이름` 형태로 넣으면 그 링크로 들어온 방문이 `회사이름`으로 태그돼요 (주소창에서는 자동으로 지워짐). GA4는 맞춤 정의에 사용자 범위 측정기준 `visitor_from` 등록 필요, Clarity는 필터의 Custom tags → `from`.
- **내 방문 제외**: 내 브라우저에서 한 번 `?me` 붙여 열기 (해제는 `?me=0`). localhost에서는 항상 꺼져 있음.
- 보내는 이벤트: `tagged_visit`, `section_view`(어느 프로젝트까지 봤는지), `image_zoom`(어떤 사진을 크게 봤는지), `video_play`, `video_sound_on`, `contact_click`, `outbound_click`. YouTube 재생은 GA4 향상된 측정이 자동 수집.

## Pages
- `/` — Home (name · credits · work index · contact)
- `/work/monov` — MONOV (credits · INPUT → PRODUCT SHOT · UGC · IMAGE → VIDEO · WORKSPACE · EDIT · gallery)
- `/work/commercial` — Commercial (OFF BEAUTY · M.E.N.D. · EASYCHECK)
- `/work/film-stage` — Film & Stage (filmography · 천국 · THE SUN · 백화 · 윤슬)

Writing rule: show the work first; text only as credits (ROLE / FORMAT / MODELS …) and short tags. No problem/decision/role paragraphs.

## Components
- `Nav` — fixed 60px nav, active link purple, MENU toggle under 560px
- `SiteEffects` — click-to-zoom lightbox for images (no scroll/entrance animation)
- `Tile` — gallery tile (`next/image` fill, or autoplay video for .mp4/.webm/.mov), optional `caption`. Image comes from `content/images.json` by `slot`; empty = placeholder tile
- `Project` / `Credits` / `Step` — title + credit list + work; MONOV step header with tags
- `AutoVideo`, `YouTube`, `NextLink`, `ContactFooter`

Design tokens live at the top of `app/globals.css` (paper / ink / purple / body / muted only). Radius 0, no shadows, no animation.

## Still to fill
- Empty tiles (placeholders): MONOV input/output pairs, UGC results, generated videos, fashion/living/poster outputs · OFF BEAUTY AI frames · M.E.N.D. frame · EASYCHECK storyboard/on-set · THE SUN performance/rehearsal · 백화 poster/stills · 윤슬 stills
- MONOV gallery tiles 1, 2, 5 (`monov/gallery-1, 2, 5`) still load from `storage.googleapis.com/monov-prod-public-cache/...`. Re-upload them as files in edit mode before deploying.
