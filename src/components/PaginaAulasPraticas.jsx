import { useState } from 'react';
import { aulasPraticasPorPeriodo } from '../data/aulasPraticas';
import './PaginaAulasPraticas.css';

function DisciplinaPratica({ disciplina, cor }) {
  const [expandido, setExpandido] = useState(false);
  const toggle = () => setExpandido((e) => !e);

  return (
    <article className="ap__card" style={{ '--ap-cor': cor }}>
      <header className="ap__card-header">
        <h3 className="ap__card-titulo">{disciplina.titulo}</h3>
        <button
          type="button"
          className="ap__card-expand"
          onClick={toggle}
          aria-expanded={expandido}
          aria-controls={`ap-body-${disciplina.id}`}
        >
          {expandido ? 'Ocultar práticas' : `Ver passo a passo (${disciplina.itens.length} prática${disciplina.itens.length !== 1 ? 's' : ''})`}
        </button>
      </header>
      <div
        id={`ap-body-${disciplina.id}`}
        className={`ap__card-body ${expandido ? 'ap__card-body--aberto' : ''}`}
      >
        <div className="ap__praticas">
          {disciplina.itens.map((item, i) => (
            <div key={i} className="ap__pratica">
              {typeof item === 'string' ? (
                <p className="ap__pratica-texto">{item}</p>
              ) : (
                <>
                  <h4 className="ap__pratica-titulo">{item.titulo}</h4>
                  <ol className="ap__lista">
                    {item.passos.map((passo, j) => (
                      <li key={j} className="ap__item">{passo}</li>
                    ))}
                  </ol>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function PaginaAulasPraticas() {
  return (
    <div className="ap">
      <header className="ap__header">
        <h1 className="ap__titulo">Aulas Práticas – Segurança Cibernética</h1>
        <p className="ap__subtitulo">
          Atividades práticas por período: laboratório, exercícios hands-on e checklists para consolidar o que você aprende em cada disciplina.
        </p>
      </header>

      <main className="ap__main">
        {aulasPraticasPorPeriodo.map((periodo) => (
          <section key={periodo.periodoId} className="ap__periodo">
            <h2 className="ap__periodo-titulo" style={{ borderColor: periodo.cor, color: periodo.cor }}>
              {periodo.nome} – {periodo.titulo}
            </h2>
            <div className="ap__grid">
              {periodo.disciplinas.map((disciplina) => (
                <DisciplinaPratica
                  key={disciplina.id}
                  disciplina={disciplina}
                  cor={periodo.cor}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
