import { useState, useMemo } from 'react';
import { atalhos, categoriasAtalhos, getAtalhosPorCategoria, getCategoriaAtalho } from '../data/atalhos';
import SearchBar from './SearchBar';
import './PaginaAtalhos.css';

function BlocoCodigo({ label, codigo }) {
  const [copiado, setCopiado] = useState(false);

  const copiar = () => {
    navigator.clipboard.writeText(codigo).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    });
  };

  return (
    <div className="atalhos__bloco">
      {label && <span className="atalhos__bloco-label">{label}</span>}
      <div className="atalhos__bloco-code-wrap">
        <pre className="atalhos__bloco-code"><code>{codigo}</code></pre>
        <div className="atalhos__bloco-copy-wrap">
          <button
            type="button"
            className="atalhos__bloco-copy"
            onClick={copiar}
            title="Copiar"
            aria-label="Copiar comando"
          >
            {copiado ? '✓ Copiado' : 'Copiar'}
          </button>
          {copiado && <span className="atalhos__toast" role="status">Copiado!</span>}
        </div>
      </div>
    </div>
  );
}

export default function PaginaAtalhos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('');
  const [busca, setBusca] = useState('');

  const listaFiltrada = useMemo(() => {
    let resultado = atalhos;
    if (categoriaAtiva) {
      resultado = getAtalhosPorCategoria(categoriaAtiva);
    }
    if (busca.trim()) {
      const t = busca.toLowerCase().trim();
      resultado = resultado.filter(
        (a) =>
          a.titulo.toLowerCase().includes(t) ||
          a.blocos.some((b) => (b.label && b.label.toLowerCase().includes(t)) || (b.codigo && b.codigo.toLowerCase().includes(t)))
      );
    }
    return resultado;
  }, [categoriaAtiva, busca]);

  return (
    <div className="atalhos">
      <header className="atalhos__header">
        <h1 className="atalhos__titulo">Atalhos e Prompts</h1>
        <p className="atalhos__subtitulo">
          Comandos Windows, Mac, Linux, Kali · LGPD · Scripts · Rede · Estratégia de ataques e defesa (elite)
        </p>
        <div className="atalhos__busca-wrap">
          <SearchBar
            value={busca}
            onChange={setBusca}
            placeholder="Buscar comando, artigo ou tema..."
          />
        </div>
        <nav className="atalhos__nav" aria-label="Categorias de atalhos">
          <button
            type="button"
            className={`atalhos__nav-btn ${!categoriaAtiva ? 'atalhos__nav-btn--ativo' : ''}`}
            onClick={() => setCategoriaAtiva('')}
          >
            Todos
          </button>
          {categoriasAtalhos.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`atalhos__nav-btn ${categoriaAtiva === cat.id ? 'atalhos__nav-btn--ativo' : ''}`}
              onClick={() => setCategoriaAtiva(cat.id)}
              style={categoriaAtiva === cat.id ? { borderColor: cat.cor, color: cat.cor } : {}}
            >
              {cat.nome}
            </button>
          ))}
        </nav>
      </header>

      <main className="atalhos__main">
        {listaFiltrada.length === 0 ? (
          <p className="atalhos__vazio">Nenhum atalho encontrado. Tente outra busca ou categoria.</p>
        ) : (
          <div className="atalhos__lista">
            {listaFiltrada.map((item) => {
              const cat = getCategoriaAtalho(item.categoriaId);
              return (
                <section key={item.id} className="atalhos__card">
                  <div className="atalhos__card-header">
                    <span className="atalhos__card-badge" style={{ backgroundColor: cat?.cor }}>
                      {cat?.nome}
                    </span>
                    <h2 className="atalhos__card-titulo">{item.titulo}</h2>
                  </div>
                  <div className="atalhos__card-body">
                    {item.blocos.map((bloco, idx) => (
                      <BlocoCodigo key={idx} label={bloco.label} codigo={bloco.codigo} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
