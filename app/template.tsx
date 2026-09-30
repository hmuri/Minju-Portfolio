export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="route-shell">
      <div className="route-wipe" aria-hidden="true" />
      {children}
    </div>
  );
}
