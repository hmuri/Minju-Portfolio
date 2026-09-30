'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '/work/monov', label: 'MONOV' },
  { href: '/work/commercial', label: 'COMMERCIAL' },
  { href: '/work/film-stage', label: 'FILM & STAGE' },
  { href: '/#contact', label: 'CONTACT' }
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-nav${open ? ' open' : ''}`}>
      <Link href="/" className="nav-name">MINJU CHOI</Link>
      <button type="button" className="nav-toggle" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(v => !v)}>
        {open ? 'CLOSE' : 'MENU'}
      </button>
      <nav id="nav-links" className="nav-links" onClick={() => setOpen(false)}>
        {LINKS.map(l => (
          <Link key={l.href} href={l.href} className={pathname === l.href ? 'active' : ''}>{l.label}</Link>
        ))}
      </nav>
    </header>
  );
}
