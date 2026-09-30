type NumRowProps = {
  n: string;
  title: string;
  sub: string;
  desc: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

/** Big purple number · title + subline · ruled description. */
export function NumRow({ n, title, sub, desc, href, onClick }: NumRowProps) {
  const inner = (
    <>
      <b className="n">{n}</b>
      <div className="t"><b>{title}</b><span>{sub}</span></div>
      <span className="d">{desc}</span>
    </>
  );
  if (href) return <a className="num-row" href={href} onClick={onClick}>{inner}</a>;
  return <div className="num-row">{inner}</div>;
}
