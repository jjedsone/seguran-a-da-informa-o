import { useState, useRef } from 'react';
import { getCategoria } from '../data/estudos';
import './StudyCard.css';

export default function StudyCard({ estudo, onClick, isFavorito, onToggleFavorito }) {
  const periodo = getCategoria(estudo.periodoId);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (y - 0.5) * 8, y: (x - 0.5) * -8 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(estudo);
    }
  };

  return (
    <article
      ref={cardRef}
      className="study-card"
      role="button"
      tabIndex={0}
      onClick={() => onClick(estudo)}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--card-accent': periodo?.cor || '#64748b',
        '--tilt-x': `${tilt.x}deg`,
        '--tilt-y': `${tilt.y}deg`,
      }}
      aria-label={`Ver detalhes: ${estudo.titulo}`}
    >
      <div className="study-card__header">
        <span className="study-card__badge" style={{ backgroundColor: periodo?.cor }}>
          {periodo?.nome}
        </span>
        <div className="study-card__header-right">
          {estudo.horas != null && (
            <span className="study-card__horas">{estudo.horas}h</span>
          )}
          <button
            type="button"
            className={`study-card__favorito ${isFavorito ? 'study-card__favorito--ativo' : ''}`}
            onClick={onToggleFavorito}
            title={isFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            aria-label={isFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          >
            {isFavorito ? '★' : '☆'}
          </button>
        </div>
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
