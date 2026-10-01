import './globals.css';
import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { SiteEffects } from '@/components/SiteEffects';
import { Tracker } from '@/components/Tracker';

// Local edit mode switch, only under `next dev` (npm run edit). Not in the production bundle.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const EditBar: typeof import('@/components/edit/EditBar').EditBar | null = process.env.NODE_ENV === 'development' ? require('@/components/edit/EditBar').EditBar : null;

export const metadata: Metadata = {
  title: { default: 'Minju Choi · AI Content · Commercial · Film', template: '%s · Minju Choi' },
  description: 'Portfolio of Minju Choi. AI content, commercial production, film and stage.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      </head>
      <body>
        <Nav />
        {children}
        <SiteEffects />
        <Tracker />
        {EditBar && <EditBar />}
      </body>
    </html>
  );
}
