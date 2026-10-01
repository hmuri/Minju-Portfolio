/**
 * 방문자 트래킹 설정.
 * 배포하는 곳(Vercel 등) 환경변수에 넣거나, 아래 '' 자리에 ID를 바로 붙여넣어도 돼요. 둘 다 공개돼도 괜찮은 값이에요.
 *
 *  - Google Analytics 4 측정 ID   → 'G-XXXXXXXXXX'   (방문자 수, 유입 경로, 국가/기기, 이벤트)
 *  - Microsoft Clarity 프로젝트 ID → 'abcd1234ef'     (클릭 히트맵, 스크롤 깊이, 방문 녹화)
 *
 * ID가 비어 있으면 그 도구는 그냥 안 불러와요. 로컬(npm run dev / edit)에서는 항상 꺼져 있어요.
 */
export const ANALYTICS = {
  gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  clarityId: process.env.NEXT_PUBLIC_CLARITY_ID || ''
};
