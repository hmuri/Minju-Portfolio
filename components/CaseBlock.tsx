export function SectionTitle({ en, ko, small = false }: { en: string; ko: React.ReactNode; small?: boolean }) {
  return (
    <h2 className={`section-title${small ? ' sm' : ''}`}>
      <span>{en}</span>
      <span className="slash">/</span>
      <span>{ko}</span>
    </h2>
  );
}

type CaseBlockProps = {
  id?: string;
  eyebrow: string;
  en: string;
  ko: React.ReactNode;
  gallery: React.ReactNode;
  aside: React.ReactNode;
  reveal?: boolean;
};

/** Eyebrow + ENGLISH / 한국어 title + gallery | aside grid. */
export function CaseBlock({ id, eyebrow, en, ko, gallery, aside, reveal = true }: CaseBlockProps) {
  return (
    <section id={id} className="case-block" data-reveal={reveal ? '' : undefined}>
      <div className="stack-10">
        <span className="eyebrow tight">{eyebrow}</span>
        <SectionTitle en={en} ko={ko} />
      </div>
      <div className="case-grid">
        {gallery}
        <aside className="case-aside">{aside}</aside>
      </div>
    </section>
  );
}

export function AsideItem({ label, decision = false, children }: { label: string; decision?: boolean; children: React.ReactNode }) {
  return (
    <div className={`aside-item${decision ? ' decision' : ''}`}>
      <div className="aside-label">{label}</div>
      {children}
    </div>
  );
}

export function Spec({ items }: { items: [string, React.ReactNode][] }) {
  return (
    <dl className="spec">
      {items.map(([term, value]) => (
        <div key={term} style={{ display: 'contents' }}>
          <dt>{term}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Placeholder text the owner still has to confirm. */
export function Tbd({ children }: { children: React.ReactNode }) {
  return <span className="tbd">{children}</span>;
}
