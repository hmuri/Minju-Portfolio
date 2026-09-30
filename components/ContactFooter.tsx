import Link from 'next/link';

export const EMAIL = 'minju.choi1326@gmail.com';

export function ContactFooter({ allWork = false, marginTop = 96 }: { allWork?: boolean; marginTop?: number }) {
  return (
    <footer id="contact" className="contact" style={{ marginTop }}>
      <div className="stack-20">
        <span className="label">CONTACT</span>
        <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </div>
      <div className="contact-bottom">
        {allWork ? <Link href="/">ALL WORK →</Link> : <span>PRODUCT LEAD @ MONOV · SEOUL</span>}
        <span className="muted">© 2026 MINJU CHOI</span>
      </div>
    </footer>
  );
}
