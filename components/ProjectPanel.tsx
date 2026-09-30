import Link from 'next/link';

export function ProjectPanel({ index, title, subtitle, href, image, tone = 'dark' }: {
  index: string; title: string; subtitle: string; href: string; image: string; tone?: 'dark' | 'purple' | 'light';
}) {
  return (
    <Link href={href} className={`project-panel project-${tone}`}>
      <div className="project-copy">
        <span className="eyebrow">{index}</span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <span className="project-arrow">VIEW PROJECT ↗</span>
      </div>
      <div className="project-media">
        <img src={image} alt="" />
      </div>
    </Link>
  );
}
