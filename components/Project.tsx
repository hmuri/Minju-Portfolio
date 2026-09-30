type Credit = [string, React.ReactNode];

type ProjectProps = {
  id?: string;
  /** Small purple line above the title, e.g. "AI VISUAL · DIGITAL OOH". */
  kicker: string;
  title: React.ReactNode;
  /** Optional one line under the title. */
  line?: React.ReactNode;
  credits: Credit[];
  children: React.ReactNode;
};

/** Title, then the credits as one horizontal row, then the work. No prose. */
export function Project({ id, kicker, title, line, credits, children }: ProjectProps) {
  return (
    <section id={id} className="project">
      <header className="project-head">
        <div className="stack-10">
          <span className="eyebrow tight">{kicker}</span>
          <h2 className="project-title">{title}</h2>
          {line && <p className="project-line">{line}</p>}
        </div>
        <Credits items={credits} />
      </header>
      {children}
    </section>
  );
}

export function Credits({ items }: { items: Credit[] }) {
  return (
    <dl className="credits">
      {items.map(([term, value]) => (
        <div key={term} className="credit">
          <dt>{term}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** A numbered step on the MONOV page: "01 INPUT → PRODUCT SHOT" + tags. */
export function Step({ n, label, tags, children }: { n: string; label: string; tags: string; children: React.ReactNode }) {
  return (
    <section className="step">
      <header className="step-head">
        <span className="step-label"><b>{n}</b>{label}</span>
        <span className="tags">{tags}</span>
      </header>
      {children}
    </section>
  );
}
