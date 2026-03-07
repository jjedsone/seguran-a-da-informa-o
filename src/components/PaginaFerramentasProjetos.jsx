import { useState } from 'react';
import { getTemasOrdenados, getTemaById } from '../data/ferramentasProjetos';
import { formatarConteudo } from '../lib/formatarConteudo';
import './PaginaApostila.css';

const CORES_TEMAS = [
  '#0ea5e9', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444',
  '#ec4899', '#6366f1', '#14b8a6', '#dc2626', '#0d9488',
];

export default function PaginaFerramentasProjetos() {
  const [temaAberto, setTemaAberto] = useState(null);
  const [moduloExpandido, setModuloExpandido] = useState(null);
  const [verCompleta, setVerCompleta] = useState(false);

  const temas = getTemasOrdenados();
  const tema = temaAberto ? getTemaById(temaAberto) : null;

  const handleAbreTema = (id) => {
    setTemaAberto(id);
    setVerCompleta(false);
  };

  const handleVoltar = () => setTemaAberto(null);

  const toggleModulo = (id) => {
    setModuloExpandido((atual) => (atual === id ? null : id));
  };

  const corTema = (ordem) => CORES_TEMAS[(ordem - 1) % CORES_TEMAS.length];

  // Modo "Ver todos os temas" – tudo em uma página para estudo/impressão
  if (verCompleta) {
    return (
      <div className="apostila apostila--completa">
        <header className="apostila__hero apostila__hero--completa">
          <h1 className="apostila__titulo">Projetos e Ferramentas de Segurança</h1>
          <p className="apostila__subtitulo">Temas completos para estudo e impressão</p>
          <button
            type="button"
            className="apostila__btn apostila__btn--secondary"
            onClick={() => setVerCompleta(false)}
          >
            ← Voltar ao índice
          </button>
        </header>
        <div className="apostila__completa-conteudo">
          {temas.map((t) => (
            <section
              key={t.id}
              className="apostila__modulo-completo"
              style={{ borderLeftColor: corTema(t.ordem) }}
            >
              <h2 className="apostila__modulo-completo-titulo">
                <span className="apostila__modulo-icone" aria-hidden>▣</span>
                {t.titulo}
              </h2>
              <article className="apostila__capitulo-completo">
                <div
                  className="apostila__capitulo-completo-body"
                  dangerouslySetInnerHTML={{ __html: formatarConteudo(t.conteudo || '') }}
                />
              </article>
            </section>
          ))}
        </div>
        <div className="apostila__completa-footer">
          <button
            type="button"
            className="apostila__btn apostila__btn--secondary"
            onClick={() => setVerCompleta(false)}
          >
            ← Voltar ao índice
          </button>
        </div>
      </div>
    );
  }

  // Modo leitura de um tema (igual à leitura de capítulo da apostila)
  if (tema) {
    return (
      <div className="apostila">
        <header className="apostila__hero apostila__hero--capitulo">
          <button
            type="button"
            className="apostila__btn apostila__btn--back"
            onClick={handleVoltar}
          >
            ← Índice
          </button>
          <span
            className="apostila__modulo-badge"
            style={{ backgroundColor: corTema(tema.ordem) }}
          >
            Projetos & Ferramentas
          </span>
          <h1 className="apostila__titulo apostila__titulo--capitulo">{tema.titulo}</h1>
        </header>
        <div
          className="apostila__conteudo"
          dangerouslySetInnerHTML={{ __html: formatarConteudo(tema.conteudo || '') }}
        />
      </div>
    );
  }

  // Modo índice – lista de temas (mesmo raciocínio da apostila: módulos expansíveis com capítulos)
  return (
    <div className="apostila">
      <header className="apostila__hero">
        <span className="apostila__badge">Projetos práticos</span>
        <h1 className="apostila__titulo">Projetos e Ferramentas de Segurança</h1>
        <p className="apostila__subtitulo">
          Temas explicados do zero: como fazer, o que precisa e como funciona na prática. Monitoramento de rede, scanner de vulnerabilidades, análise de logs, auditoria, IDS, forense, simulador de ataques, SOAR, sandbox de malware e conscientização.
        </p>
        <button
          type="button"
          className="apostila__btn apostila__btn--primary"
          onClick={() => setVerCompleta(true)}
        >
          Ver todos os temas (estudo / impressão)
        </button>
      </header>

      <nav className="apostila__indice" aria-label="Índice dos temas">
        <h2 className="apostila__indice-titulo">Temas</h2>
        {temas.map((t) => {
          const aberto = moduloExpandido === t.id;
          return (
            <div key={t.id} className="apostila__modulo">
              <button
                type="button"
                className="apostila__modulo-trigger"
                onClick={() => toggleModulo(t.id)}
                aria-expanded={aberto}
                style={{ borderLeftColor: corTema(t.ordem) }}
              >
                <span className="apostila__modulo-icone" aria-hidden>▣</span>
                <span className="apostila__modulo-nome">{t.titulo}</span>
                <span className="apostila__modulo-chevron" aria-hidden>{aberto ? '▼' : '▶'}</span>
              </button>
              {aberto && (
                <ul className="apostila__capitulos">
                  <li>
                    <button
                      type="button"
                      className="apostila__capitulo-link"
                      onClick={() => handleAbreTema(t.id)}
                    >
                      {t.titulo}
                    </button>
                  </li>
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
