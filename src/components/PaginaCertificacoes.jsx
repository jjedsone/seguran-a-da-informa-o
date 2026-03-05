import { useState, useMemo } from 'react';
import { certificacoes } from '../data/certificacoes';
import SearchBar from './SearchBar';
import './PaginaCertificacoes.css';

function CardCertificacao({ cert }) {
  const [expandido, setExpandido] = useState(false);
  const toggle = () => setExpandido((e) => !e);

  return (
    <article className="cert__card" style={{ '--cert-cor': cert.cor }}>
      <header className="cert__card-header">
        <span className="cert__card-badge" style={{ backgroundColor: cert.cor }}>
          {cert.sigla}
        </span>
        <h2 className="cert__card-titulo">{cert.nome}</h2>
        <p className="cert__card-fornecedor">{cert.fornecedor} · {cert.tipo}</p>
        <button
          type="button"
          className="cert__card-expand"
          onClick={toggle}
          aria-expanded={expandido}
          aria-controls={`cert-body-${cert.id}`}
        >
          {expandido ? 'Ver menos' : 'Ver todas as informações'}
        </button>
      </header>
      <div
        id={`cert-body-${cert.id}`}
        className={`cert__card-body ${expandido ? 'cert__card-body--aberto' : ''}`}
      >
        <p className="cert__descricao">{cert.descricao}</p>
        <dl className="cert__meta">
          <dt>Duração da prova</dt>
          <dd>{cert.duracaoProva}</dd>
          <dt>Questões / formato</dt>
          <dd>{cert.questoes}</dd>
          <dt>Pontuação</dt>
          <dd>{cert.pontuacao}</dd>
          <dt>Validade</dt>
          <dd>{cert.validade}</dd>
          <dt>Preço (aprox.)</dt>
          <dd>{cert.precoAprox}</dd>
        </dl>
        <section className="cert__dominios">
          <h3 className="cert__dominios-titulo">Domínios / Conteúdo</h3>
          <ul className="cert__dominios-lista">
            {cert.dominios.map((d, i) => (
              <li key={i}>
                <strong>{d.nome}</strong>
                {d.peso && d.peso !== '—' && <span className="cert__peso"> {d.peso}</span>}
              </li>
            ))}
          </ul>
        </section>
        <section className="cert__temas">
          <h3 className="cert__temas-titulo">Temas principais</h3>
          <p className="cert__temas-texto">{cert.temas}</p>
        </section>
        {cert.linkOficial && (
          <a
            href={cert.linkOficial}
            target="_blank"
            rel="noopener noreferrer"
            className="cert__link"
          >
            Site oficial →
          </a>
        )}
      </div>
    </article>
  );
}

export default function PaginaCertificacoes() {
  const [busca, setBusca] = useState('');

  const certificacoesFiltradas = useMemo(() => {
    if (!busca.trim()) return certificacoes;
    const t = busca.toLowerCase().trim();
    return certificacoes.filter(
      (c) =>
        c.nome.toLowerCase().includes(t) ||
        c.sigla.toLowerCase().includes(t) ||
        c.fornecedor.toLowerCase().includes(t) ||
        c.descricao.toLowerCase().includes(t) ||
        c.temas.toLowerCase().includes(t) ||
        c.dominios.some((d) => d.nome.toLowerCase().includes(t))
    );
  }, [busca]);

  return (
    <div className="cert">
      <header className="cert__header">
        <h1 className="cert__titulo">Certificações em Segurança Cibernética</h1>
        <p className="cert__subtitulo">
          CompTIA (Security+, CySA+, CASP+) e OSCP (Offensive Security): informações completas sobre provas, domínios, duração, custos e temas para estudo.
        </p>
        <div className="cert__busca-wrap">
          <SearchBar
            value={busca}
            onChange={setBusca}
            placeholder="Buscar certificação (Security+, OSCP, domínio...)"
          />
        </div>
      </header>

      <main className="cert__main">
        {certificacoesFiltradas.length === 0 ? (
          <p className="cert__vazio">Nenhuma certificação encontrada. Tente outra busca.</p>
        ) : (
          <div className="cert__grid">
            {certificacoesFiltradas.map((c) => (
              <CardCertificacao key={c.id} cert={c} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
