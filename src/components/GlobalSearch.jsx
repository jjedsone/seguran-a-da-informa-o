import { useState, useEffect, useRef } from 'react';
import { buscarEstudos } from '../data/estudos';
import { atalhos } from '../data/atalhos';
import { searchCapitulosApostila } from '../data/apostilaSeguranca';
import './GlobalSearch.css';

const MAX_POR_SECAO = 5;

export default function GlobalSearch({ onSelectCurso, onSelectAtalhos, onSelectApostila }) {
  const [termo, setTermo] = useState('');
  const [aberto, setAberto] = useState(false);
  const [resultados, setResultados] = useState({ curso: [], atalhos: [], apostila: [] });
  const refContainer = useRef(null);

  useEffect(() => {
    if (!termo.trim()) {
      setResultados({ curso: [], atalhos: [], apostila: [] });
      return;
    }
    const t = termo.trim().toLowerCase();
    const curso = buscarEstudos(termo).slice(0, MAX_POR_SECAO);
    const atalhosFiltro = atalhos.filter(
      (a) => a.titulo && a.titulo.toLowerCase().includes(t)
    ).slice(0, MAX_POR_SECAO);
    const apostila = searchCapitulosApostila(termo).slice(0, MAX_POR_SECAO);
    setResultados({ curso, atalhos: atalhosFiltro, apostila });
  }, [termo]);

  useEffect(() => {
    setAberto(termo.length > 0);
  }, [termo]);

  useEffect(() => {
    function handleClickFora(e) {
      if (refContainer.current && !refContainer.current.contains(e.target)) {
        setAberto(false);
      }
    }
    document.addEventListener('click', handleClickFora);
    return () => document.removeEventListener('click', handleClickFora);
  }, []);

  const total = resultados.curso.length + resultados.atalhos.length + resultados.apostila.length;
  const temResultados = total > 0;

  const handleSelectCurso = (estudo) => {
    onSelectCurso(estudo);
    setTermo('');
    setAberto(false);
  };

  const handleSelectAtalhos = () => {
    onSelectAtalhos();
    setTermo('');
    setAberto(false);
  };

  const handleSelectApostila = (cap) => {
    onSelectApostila(cap.id);
    setTermo('');
    setAberto(false);
  };

  return (
    <div className="global-search" ref={refContainer}>
      <span className="global-search__icon" aria-hidden>🔍</span>
      <input
        type="search"
        className="global-search__input"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder="Buscar em curso, atalhos e apostila..."
        aria-label="Busca global"
        aria-expanded={aberto}
        aria-haspopup="listbox"
      />
      {termo && (
        <button
          type="button"
          className="global-search__clear"
          onClick={() => { setTermo(''); setAberto(false); }}
          aria-label="Limpar busca"
        >
          ✕
        </button>
      )}
      {aberto && (
        <div
          className="global-search__dropdown"
          role="listbox"
          aria-label="Resultados da busca"
        >
          {!termo.trim() ? (
            <p className="global-search__msg">Digite para buscar.</p>
          ) : !temResultados ? (
            <p className="global-search__msg">Nenhum resultado.</p>
          ) : (
            <>
              {resultados.curso.length > 0 && (
                <section className="global-search__secao">
                  <h3 className="global-search__secao-titulo">Curso</h3>
                  <ul className="global-search__lista">
                    {resultados.curso.map((e) => (
                      <li key={e.id}>
                        <button
                          type="button"
                          className="global-search__item"
                          onClick={() => handleSelectCurso(e)}
                          role="option"
                        >
                          {e.titulo}
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {resultados.atalhos.length > 0 && (
                <section className="global-search__secao">
                  <h3 className="global-search__secao-titulo">Atalhos</h3>
                  <ul className="global-search__lista">
                    {resultados.atalhos.map((a) => (
                      <li key={a.id}>
                        <button
                          type="button"
                          className="global-search__item"
                          onClick={handleSelectAtalhos}
                          role="option"
                        >
                          {a.titulo}
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {resultados.apostila.length > 0 && (
                <section className="global-search__secao">
                  <h3 className="global-search__secao-titulo">Apostila</h3>
                  <ul className="global-search__lista">
                    {resultados.apostila.map((cap) => (
                      <li key={cap.id}>
                        <button
                          type="button"
                          className="global-search__item"
                          onClick={() => handleSelectApostila(cap)}
                          role="option"
                        >
                          <span className="global-search__item-titulo">{cap.titulo}</span>
                          {cap.moduloNome && (
                            <span className="global-search__item-sub">{cap.moduloNome}</span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
