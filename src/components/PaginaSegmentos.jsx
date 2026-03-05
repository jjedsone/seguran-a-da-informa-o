import { useState, useMemo } from 'react';
import { segmentos } from '../data/segmentosEmpresa';
import SearchBar from './SearchBar';
import './PaginaSegmentos.css';

function CardSegmento({ seg }) {
  return (
    <article className="segmentos__card" style={{ '--seg-cor': seg.cor }}>
      <header className="segmentos__card-header">
        <span className="segmentos__card-badge" style={{ backgroundColor: seg.cor }}>
          {seg.nome.split(' (')[0]}
        </span>
        <h2 className="segmentos__card-titulo">{seg.nome}</h2>
      </header>
      <div className="segmentos__card-body">
        <section className="segmentos__bloco">
          <h3 className="segmentos__bloco-titulo">Onde começar</h3>
          <p className="segmentos__bloco-texto">{seg.ondeComecar}</p>
        </section>
        <section className="segmentos__bloco">
          <h3 className="segmentos__bloco-titulo">Como analisa</h3>
          <p className="segmentos__bloco-texto">{seg.comoAnalisa}</p>
        </section>
        <section className="segmentos__bloco">
          <h3 className="segmentos__bloco-titulo">Como proceder</h3>
          <p className="segmentos__bloco-texto">{seg.comoProceder}</p>
        </section>
      </div>
    </article>
  );
}

export default function PaginaSegmentos() {
  const [busca, setBusca] = useState('');

  const segmentosFiltrados = useMemo(() => {
    if (!busca.trim()) return segmentos;
    const t = busca.toLowerCase().trim();
    return segmentos.filter(
      (s) =>
        s.nome.toLowerCase().includes(t) ||
        s.ondeComecar.toLowerCase().includes(t) ||
        s.comoAnalisa.toLowerCase().includes(t) ||
        s.comoProceder.toLowerCase().includes(t)
    );
  }, [busca]);

  return (
    <div className="segmentos">
      <header className="segmentos__header">
        <h1 className="segmentos__titulo">Proteção por segmento</h1>
        <p className="segmentos__subtitulo">
          Como o profissional de cybersecurity protege cada empresa: onde começa, como é feita a análise e como procede, dependendo do ramo.
        </p>
        <div className="segmentos__busca-wrap">
          <SearchBar
            value={busca}
            onChange={setBusca}
            placeholder="Buscar por ramo (saúde, financeiro, varejo...)"
          />
        </div>
      </header>

      <main className="segmentos__main">
        {segmentosFiltrados.length === 0 ? (
          <p className="segmentos__vazio">Nenhum segmento encontrado. Tente outra busca.</p>
        ) : (
          <div className="segmentos__grid">
            {segmentosFiltrados.map((seg) => (
              <CardSegmento key={seg.id} seg={seg} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
