/* eslint-disable react-hooks/set-state-in-effect -- abre estudo a partir de location.state (busca global) */
import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { estudos, periodos, buscarEstudos } from '../data/estudos';
import { useFavoritos } from '../contexts/FavoritosContext';
import SearchBar from '../components/SearchBar';
import StudyCard from '../components/StudyCard';
import StudyDetail from '../components/StudyDetail';
import { IMAGEM_HEADER } from '../data/imagens';

export default function CursoPage() {
  const { favoritos, vistos, toggleFavorito, marcarVisto } = useFavoritos();
  const location = useLocation();
  const [busca, setBusca] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState('');
  const [estudoAberto, setEstudoAberto] = useState(null);
  const [soFavoritos, setSoFavoritos] = useState(false);

  const openStudyFromState = location.state?.openStudy;
  useEffect(() => {
    if (openStudyFromState) {
      setEstudoAberto(openStudyFromState);
      window.history.replaceState({}, '', location.pathname);
    }
  }, [openStudyFromState, location.pathname]);

  useEffect(() => {
    if (estudoAberto) marcarVisto(estudoAberto.id);
  }, [estudoAberto, marcarVisto]);

  const listaFiltrada = useMemo(() => {
    let resultado = buscarEstudos(busca);
    if (categoriaAtiva) resultado = resultado.filter((e) => e.periodoId === categoriaAtiva);
    if (soFavoritos) resultado = resultado.filter((e) => favoritos.has(e.id));
    return resultado;
  }, [busca, categoriaAtiva, soFavoritos, favoritos]);

  return (
    <>
      <header className="app__header">
        <img src={IMAGEM_HEADER} alt="" className="app__header-img" />
        <h1 className="app__titulo">Curso de Segurança Cibernética</h1>
        <p className="app__subtitulo">Base de conhecimento – Formação profissional · 5 períodos · Material completo por disciplina</p>
        <p className="app__metodologia">Ementa, objetivos gerais e específicos, unidades temáticas, mentalidade profissional, prática e checklist de aprendizagem — nível faculdade de elite.</p>
        <div className="app__progresso-wrap">
          <span className="app__progresso-texto">
            {vistos.size} de {estudos.length} disciplinas vistas
          </span>
          <div className="app__progresso-bar" role="progressbar" aria-valuenow={vistos.size} aria-valuemin={0} aria-valuemax={estudos.length}>
            <div className="app__progresso-fill" style={{ width: `${(vistos.size / estudos.length) * 100}%` }} />
          </div>
        </div>
        <SearchBar value={busca} onChange={setBusca} placeholder="Buscar disciplina, tag ou tema..." />
        <nav className="app__filtros" aria-label="Filtrar por período">
          <button
            type="button"
            className={`app__filtro ${!categoriaAtiva && !soFavoritos ? 'app__filtro--ativo' : ''}`}
            onClick={() => { setCategoriaAtiva(''); setSoFavoritos(false); }}
          >
            Todos os períodos
          </button>
          <button
            type="button"
            className={`app__filtro app__filtro--favoritos ${soFavoritos ? 'app__filtro--ativo' : ''}`}
            onClick={() => { setSoFavoritos(true); setCategoriaAtiva(''); }}
            title="Ver só favoritos"
          >
            ★ Favoritos ({favoritos.size})
          </button>
          {periodos.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`app__filtro ${categoriaAtiva === p.id ? 'app__filtro--ativo' : ''}`}
              onClick={() => { setCategoriaAtiva(p.id); setSoFavoritos(false); }}
              style={categoriaAtiva === p.id ? { borderColor: p.cor, color: p.cor } : {}}
            >
              {p.nome} – {p.titulo}
            </button>
          ))}
        </nav>
      </header>

      <main className="app__main">
        {listaFiltrada.length === 0 ? (
          <p className="app__vazio">
            {soFavoritos ? 'Nenhum favorito. Clique na estrela (☆) em uma disciplina para adicionar.' : 'Nenhum estudo encontrado. Tente outra busca ou categoria.'}
          </p>
        ) : (
          <div className="app__grid">
            {listaFiltrada.map((estudo) => (
              <StudyCard
                key={estudo.id}
                estudo={estudo}
                onClick={setEstudoAberto}
                isFavorito={favoritos.has(estudo.id)}
                onToggleFavorito={(e) => toggleFavorito(estudo.id, e)}
              />
            ))}
          </div>
        )}
      </main>

      {estudoAberto && (
        <StudyDetail estudo={estudoAberto} onFechar={() => setEstudoAberto(null)} />
      )}
    </>
  );
}
