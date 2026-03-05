import { useEffect, useRef } from 'react';
import { getCategoria } from '../data/estudos';
import './StudyDetail.css';

// Converte conteúdo estilo markdown simples em HTML seguro para exibição
function formatarConteudo(texto) {
  if (!texto) return '';
  let html = texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  // Blocos de código primeiro (antes de trocar \n)
  html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  // Títulos
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  // Negrito
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Separador horizontal (---)
  html = html.replace(/^---$/gm, '<hr/>');
  // Quebras de linha
  html = html.replace(/\n/g, '<br/>');
  return html;
}

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
          dangerouslySetInnerHTML={{ __html: formatarConteudo(estudo.conteudo) }}
        />
      </div>
    </div>
  );
}
