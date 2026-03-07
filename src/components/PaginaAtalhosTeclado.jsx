import { useState, useMemo } from 'react';
import {
  atalhosTeclado,
  plataformasTeclado,
  categoriasTeclado,
} from '../data/atalhosTeclado';
import SearchBar from './SearchBar';
import './PaginaAtalhosTeclado.css';

function getAtalhoPorPlataforma(item, plataformaId) {
  if (plataformaId === 'windows') return item.windows;
  if (plataformaId === 'macos') return item.macos;
  return item.linux;
}

export default function PaginaAtalhosTeclado() {
  const [plataforma, setPlataforma] = useState('windows');
  const [categoria, setCategoria] = useState('');
  const [busca, setBusca] = useState('');

  const listaFiltrada = useMemo(() => {
    let lista = atalhosTeclado.map((item) => ({
      ...item,
      atalho: getAtalhoPorPlataforma(item, plataforma),
    }));
    if (categoria) {
      lista = lista.filter((a) => a.categoriaId === categoria);
    }
    if (busca.trim()) {
      const t = busca.toLowerCase().trim();
      lista = lista.filter(
        (a) =>
          a.acao.toLowerCase().includes(t) ||
          (a.atalho && a.atalho.toLowerCase().includes(t))
      );
    }
    return lista;
  }, [plataforma, categoria, busca]);

  const pl = plataformasTeclado.find((p) => p.id === plataforma);

  return (
    <div className="atalhos-teclado">
      <header className="atalhos-teclado__header">
        <h1 className="atalhos-teclado__titulo">Atalhos de teclado</h1>
        <p className="atalhos-teclado__subtitulo">
          Windows, macOS e Linux – sistema, navegação, janelas, edição, arquivos e segurança
        </p>
        <div className="atalhos-teclado__busca">
          <SearchBar
            value={busca}
            onChange={setBusca}
            placeholder="Buscar ação ou atalho..."
          />
        </div>

        <nav className="atalhos-teclado__nav" aria-label="Plataforma">
          {plataformasTeclado.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`atalhos-teclado__nav-plataforma ${plataforma === p.id ? 'atalhos-teclado__nav-plataforma--ativo' : ''}`}
              onClick={() => setPlataforma(p.id)}
              style={plataforma === p.id ? { borderColor: p.cor, color: p.cor } : {}}
            >
              {p.nome}
            </button>
          ))}
        </nav>

        <nav className="atalhos-teclado__categorias" aria-label="Categoria">
          <button
            type="button"
            className={`atalhos-teclado__cat-btn ${!categoria ? 'atalhos-teclado__cat-btn--ativo' : ''}`}
            onClick={() => setCategoria('')}
          >
            Todas
          </button>
          {categoriasTeclado.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`atalhos-teclado__cat-btn ${categoria === c.id ? 'atalhos-teclado__cat-btn--ativo' : ''}`}
              onClick={() => setCategoria(c.id)}
            >
              {c.nome}
            </button>
          ))}
        </nav>
      </header>

      <main className="atalhos-teclado__main">
        <p className="atalhos-teclado__plataforma-label">
          Atalhos para <strong>{pl?.nome}</strong>
        </p>
        {listaFiltrada.length === 0 ? (
          <p className="atalhos-teclado__vazio">
            Nenhum atalho encontrado. Tente outra busca ou categoria.
          </p>
        ) : (
          <div className="atalhos-teclado__table-wrap">
            <table className="atalhos-teclado__table" role="table">
              <thead>
                <tr>
                  <th scope="col">Ação</th>
                  <th scope="col">Atalho</th>
                </tr>
              </thead>
              <tbody>
                {listaFiltrada.map((item, idx) => (
                  <tr key={item.categoriaId + idx}>
                    <td className="atalhos-teclado__acao">{item.acao}</td>
                    <td className="atalhos-teclado__tecla">
                      {item.atalho && item.atalho !== '—' ? (
                        <kbd className="atalhos-teclado__kbd">{item.atalho}</kbd>
                      ) : (
                        <span className="atalhos-teclado__nao">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
