'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Nav() {
  const pathname = usePathname();
  return (
    <header className="site-nav">
      <Link href="/" className="nav-name">MINJU CHOI</Link>
      <nav>
        <Link className={pathname === '/' ? 'active' : ''} href="/">WORK</Link>
        <Link href="/#about">ABOUT</Link>
      </nav>
    </header>
  );
}
