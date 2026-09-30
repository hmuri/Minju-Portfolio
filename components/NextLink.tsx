import Link from 'next/link';

export function NextLink({ label, name, href }: { label: string; name: string; href: string }) {
  return (
    <Link className="next-link" href={href}>
      <span className="label">{label}</span>
      <span className="name">{name}</span>
    </Link>
  );
}
