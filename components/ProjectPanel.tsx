import Link from 'next/link';

export function ProjectPanel({ index, title, subtitle, href, image, tone = 'dark', position = 'center' }: {
  index: string;
  title: string;
  subtitle: string;
  href: string;
  image: string;
  tone?: 'dark' | 'purple' | 'light';
  position?: string;
}) {
  return (
    <Link href={href} className={`project-panel project-${tone}`}>
      <div className="project-copy">
        <div className="project-index-row"><span className="eyebrow">{index}</span><span className="project-rule" /></div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <span className="project-arrow">VIEW PROJECT <b>↗</b></span>
      </div>
      <div className="project-media">
        <img src={image} alt="" style={{ objectPosition: position }} />
        <span className="project-media-index" aria-hidden="true">{index}</span>
      </div>
    </Link>
  );
}
