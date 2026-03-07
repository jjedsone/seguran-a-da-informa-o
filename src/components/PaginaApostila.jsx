import { useState, useEffect } from 'react';
import {
  modulosApostila,
  getCapitulosByModulo,
  getCapituloById,
  getModuloApostila,
} from '../data/apostilaSeguranca';
import { formatarConteudo, conteudoOuFallback } from '../lib/formatarConteudo';
import './PaginaApostila.css';

export default function PaginaApostila({ initialCapituloId, onInitialAberto }) {
  const [capituloAberto, setCapituloAberto] = useState(null);
  const [moduloExpandido, setModuloExpandido] = useState(null);
  const [verCompleta, setVerCompleta] = useState(false);

  useEffect(() => {
    if (initialCapituloId && getCapituloById(initialCapituloId)) {
      setCapituloAberto(initialCapituloId);
      onInitialAberto?.();
    }
  }, [initialCapituloId, onInitialAberto]);

  const capitulo = capituloAberto ? getCapituloById(capituloAberto) : null;
  const modulo = capitulo ? getModuloApostila(capitulo.moduloId) : null;

  const handleAbreCapitulo = (id) => {
    setCapituloAberto(id);
    setVerCompleta(false);
  };

  const handleVoltar = () => {
    setCapituloAberto(null);
  };

  const toggleModulo = (id) => {
    setModuloExpandido((atual) => (atual === id ? null : id));
  };

  // Modo "Apostila completa" – todos os capítulos em uma única página para estudo/impressão
  if (verCompleta) {
    return (
      <div className="apostila apostila--completa">
        <header className="apostila__hero apostila__hero--completa">
          <h1 className="apostila__titulo">Apostila de Segurança da Informação</h1>
          <p className="apostila__subtitulo">Do básico ao avançado – Curso complementar</p>
          <button
            type="button"
            className="apostila__btn apostila__btn--secondary"
            onClick={() => setVerCompleta(false)}
          >
            ← Voltar ao índice
          </button>
        </header>
        <div className="apostila__completa-conteudo">
          {modulosApostila.map((mod) => {
            const capitulos = getCapitulosByModulo(mod.id);
            return (
              <section key={mod.id} className="apostila__modulo-completo" style={{ borderLeftColor: mod.cor }}>
                <h2 className="apostila__modulo-completo-titulo">
                  <span className="apostila__modulo-icone" aria-hidden>{mod.icone}</span>
                  {mod.nome}
                </h2>
                {capitulos.map((cap) => (
                  <article key={cap.id} className="apostila__capitulo-completo">
                    <h3 className="apostila__capitulo-completo-titulo">{cap.titulo}</h3>
                    <div
                      className="apostila__capitulo-completo-body"
                      dangerouslySetInnerHTML={{ __html: formatarConteudo(conteudoOuFallback(cap)) }}
                    />
                  </article>
                ))}
              </section>
            );
          })}
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

  // Modo leitura de um capítulo
  if (capitulo && modulo) {
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
          <span className="apostila__modulo-badge" style={{ backgroundColor: modulo.cor }}>
            {modulo.nome}
          </span>
          <h1 className="apostila__titulo apostila__titulo--capitulo">{capitulo.titulo}</h1>
        </header>
        <div
          className="apostila__conteudo"
          dangerouslySetInnerHTML={{ __html: formatarConteudo(conteudoOuFallback(capitulo)) }}
        />
      </div>
    );
  }

  // Modo índice – lista de módulos e capítulos
  return (
    <div className="apostila">
      <header className="apostila__hero">
        <span className="apostila__badge">Curso complementar</span>
        <h1 className="apostila__titulo">Apostila de Segurança da Informação</h1>
        <p className="apostila__subtitulo">
          Do básico ao avançado: Governança, IAM, Criptografia, Nuvem, AppSec, IR, Threat Intel, Física/OT, Red Team e <strong>Liderança e Estratégia</strong> (perfil CISO / CEO da segurança).
        </p>
        <button
          type="button"
          className="apostila__btn apostila__btn--primary"
          onClick={() => setVerCompleta(true)}
        >
          Ver apostila completa (estudo / impressão)
        </button>
      </header>

      <nav className="apostila__indice" aria-label="Índice da apostila">
        <h2 className="apostila__indice-titulo">Módulos</h2>
        {modulosApostila.map((mod) => {
          const capitulos = getCapitulosByModulo(mod.id);
          const aberto = moduloExpandido === mod.id;
          return (
            <div key={mod.id} className="apostila__modulo">
              <button
                type="button"
                className="apostila__modulo-trigger"
                onClick={() => toggleModulo(mod.id)}
                aria-expanded={aberto}
                style={{ borderLeftColor: mod.cor }}
              >
                <span className="apostila__modulo-icone" aria-hidden>{mod.icone}</span>
                <span className="apostila__modulo-nome">{mod.nome}</span>
                <span className="apostila__modulo-chevron" aria-hidden>{aberto ? '▼' : '▶'}</span>
              </button>
              {aberto && (
                <ul className="apostila__capitulos">
                  {capitulos.map((cap) => (
                    <li key={cap.id}>
                      <button
                        type="button"
                        className="apostila__capitulo-link"
                        onClick={() => handleAbreCapitulo(cap.id)}
                      >
                        {cap.titulo}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
