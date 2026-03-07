import { useEffect, useRef } from 'react';
import { getCategoria } from '../data/estudos';
import { formatarConteudo } from '../lib/formatarConteudo';
import './StudyDetail.css';

export default function StudyDetail({ estudo, onFechar }) {
  const refDialog = useRef(null);

  useEffect(() => {
    if (!estudo) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onFechar();
    };
    document.addEventListener('keydown', handleKeyDown);
    refDialog.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [estudo, onFechar]);

  if (!estudo) return null;
  const periodo = getCategoria(estudo.periodoId);
  const conteudoExibir = estudo.conteudo && String(estudo.conteudo).trim()
    ? estudo.conteudo
    : (estudo.resumo ? `# ${estudo.titulo}\n\n${estudo.resumo}` : `# ${estudo.titulo}\n\nConteúdo em elaboração. Consulte a ementa e os objetivos na grade do curso.`);

  return (
    <div
      ref={refDialog}
      className="study-detail-overlay"
      onClick={onFechar}
      role="dialog"
      aria-modal="true"
      aria-labelledby="study-detail-titulo"
      tabIndex={-1}
    >
      <div
        className="study-detail"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="study-detail__header">
          <div className="study-detail__meta">
            <span className="study-detail__periodo" style={{ color: periodo?.cor }}>
              {periodo?.nome} {periodo?.titulo && `– ${periodo.titulo}`}
            </span>
            {estudo.horas != null && (
              <span className="study-detail__horas">{estudo.horas} horas</span>
            )}
          </div>
          <h1 id="study-detail-titulo" className="study-detail__titulo">{estudo.titulo}</h1>
          <div className="study-detail__tags">
            {estudo.tags?.map((tag) => (
              <span key={tag} className="study-detail__tag">{tag}</span>
            ))}
          </div>
          <button
            type="button"
            className="study-detail__fechar"
            onClick={onFechar}
            aria-label="Fechar"
          >
            ✕
          </button>
        </header>
        <div
          className="study-detail__conteudo"
          dangerouslySetInnerHTML={{ __html: formatarConteudo(conteudoExibir) }}
        />
      </div>
    </div>
  );
}
