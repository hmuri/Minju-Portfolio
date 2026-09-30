import './globals.css';
import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { SiteEffects } from '@/components/SiteEffects';

export const metadata: Metadata = {
  title: { default: 'Minju Choi — AI · Content · Film', template: '%s — Minju Choi' },
  description: 'Portfolio of Minju Choi — Product Lead at MONOV, commercial production, film and stage.'
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
      </body>
    </html>
  );
}
