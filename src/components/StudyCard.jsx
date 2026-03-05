import { getCategoria } from '../data/estudos';
import './StudyCard.css';

export default function StudyCard({ estudo, onClick }) {
  const periodo = getCategoria(estudo.periodoId);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(estudo);
    }
  };

  return (
    <article
      className="study-card"
      role="button"
      tabIndex={0}
      onClick={() => onClick(estudo)}
      onKeyDown={handleKeyDown}
      style={{ '--card-accent': periodo?.cor || '#64748b' }}
      aria-label={`Ver detalhes: ${estudo.titulo}`}
    >
      <div className="study-card__header">
        <span className="study-card__badge" style={{ backgroundColor: periodo?.cor }}>
          {periodo?.nome}
        </span>
        {estudo.horas != null && (
          <span className="study-card__horas">{estudo.horas}h</span>
        )}
      </div>
      <h2 className="study-card__titulo">{estudo.titulo}</h2>
      <p className="study-card__resumo">{estudo.resumo}</p>
      <div className="study-card__tags">
        {estudo.tags?.map((tag) => (
          <span key={tag} className="study-card__tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
