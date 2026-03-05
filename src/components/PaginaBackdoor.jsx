import { useState, useMemo } from 'react';
import { modulosBackdoor } from '../data/backdoorCurso';
import SearchBar from './SearchBar';
import './PaginaBackdoor.css';

function CardBackdoor({ mod, onCopiar }) {
  const [copiado, setCopiado] = useState(false);

  const copiar = () => {
    const texto = `${mod.titulo}\n\n${mod.conteudo}`;
    navigator.clipboard.writeText(texto).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    });
    onCopiar?.();
  };

  return (
    <article className="backdoor__card">
      <div className="backdoor__card-header">
        <span className="backdoor__card-badge">{mod.badge}</span>
        <h2 className="backdoor__card-titulo">{mod.titulo}</h2>
        <button
          type="button"
          className="backdoor__card-copy"
          onClick={copiar}
          title="Copiar conteúdo"
          aria-label="Copiar"
        >
          {copiado ? '✓ Copiado' : 'Copiar'}
        </button>
      </div>
      <div className="backdoor__card-body">
        <pre className="backdoor__card-text">{mod.conteudo}</pre>
      </div>
    </article>
  );
}

export default function PaginaBackdoor() {
  const [busca, setBusca] = useState('');

  const modulosFiltrados = useMemo(() => {
    if (!busca.trim()) return modulosBackdoor;
    const t = busca.toLowerCase().trim();
    return modulosBackdoor.filter(
      (m) =>
        m.titulo.toLowerCase().includes(t) ||
        m.conteudo.toLowerCase().includes(t) ||
        (m.badge && m.badge.toLowerCase().includes(t))
    );
  }, [busca]);

  return (
    <div className="backdoor">
      <header className="backdoor__header">
        <h1 className="backdoor__titulo">Backdoor e Acesso Remoto</h1>
        <p className="backdoor__subtitulo">
          Curso completo: backdoor destrinchado, net user, acesso remoto pela rede e celular na rede (notebook e Wi‑Fi) — uso autorizado e defesa.
        </p>
        <div className="backdoor__busca-wrap">
          <SearchBar
            value={busca}
            onChange={setBusca}
            placeholder="Buscar por backdoor, net user, celular, rede..."
          />
        </div>
      </header>

      <main className="backdoor__main">
        {modulosFiltrados.length === 0 ? (
          <p className="backdoor__vazio">Nenhum módulo encontrado. Tente outra busca.</p>
        ) : (
          <div className="backdoor__grid">
            {modulosFiltrados.map((mod) => (
              <CardBackdoor key={mod.id} mod={mod} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
