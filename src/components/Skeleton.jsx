/** Skeleton de carregamento para fallback do Suspense (acessível). */
export default function Skeleton() {
  return (
    <div className="skeleton-wrap" role="status" aria-live="polite" aria-label="Carregando conteúdo">
      <div className="skeleton skeleton--header" />
      <div className="skeleton skeleton--line" />
      <div className="skeleton skeleton--line skeleton--short" />
      <div className="skeleton skeleton--line" />
      <span className="visually-hidden">Carregando…</span>
    </div>
  );
}
