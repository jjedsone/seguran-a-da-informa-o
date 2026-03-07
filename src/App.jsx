import { useState, useMemo, useEffect, useRef, lazy, Suspense } from 'react';
import { estudos, periodos, buscarEstudos } from './data/estudos';
import { getFavoritos, getVistos, toggleFavorito, marcarComoVisto } from './lib/cursoStorage';
import SearchBar from './components/SearchBar';
import StudyCard from './components/StudyCard';
import StudyDetail from './components/StudyDetail';
import Login from './components/Login';

const PaginaAtalhos = lazy(() => import('./components/PaginaAtalhos'));
const PaginaAtalhosTeclado = lazy(() => import('./components/PaginaAtalhosTeclado'));
const PaginaBackdoor = lazy(() => import('./components/PaginaBackdoor'));
const PaginaSegmentos = lazy(() => import('./components/PaginaSegmentos'));
const PaginaCertificacoes = lazy(() => import('./components/PaginaCertificacoes'));
const PaginaAulasPraticas = lazy(() => import('./components/PaginaAulasPraticas'));
const PaginaSimulado = lazy(() => import('./components/PaginaSimulado'));
const PaginaSimulador = lazy(() => import('./components/PaginaSimulador'));
import { initFirebaseUserAndPrefs, subscribePreferencias, savePreferencias } from './lib/firestorePrefs';
import { IMAGEM_HEADER } from './data/imagens';
import './App.css';

const THEME_KEY = 'seguranca-app-theme';
const AUTH_KEY = 'seguranca-app-auth';

export default function App() {
  const [autenticado, setAutenticado] = useState(() => localStorage.getItem(AUTH_KEY) === 'true');
  const [pagina, setPagina] = useState('curso');
  const [tema, setTema] = useState(() => localStorage.getItem(THEME_KEY) || 'dark');
  const [busca, setBusca] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState('');
  const [estudoAberto, setEstudoAberto] = useState(null);
  const [firebaseUserId, setFirebaseUserId] = useState(null);
  const [favoritos, setFavoritos] = useState(() => getFavoritos());
  const [soFavoritos, setSoFavoritos] = useState(false);
  const [vistos, setVistos] = useState(() => getVistos());
  const temaFromFirestoreRef = useRef(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem(THEME_KEY, tema);
  }, [tema]);

  useEffect(() => {
    let unsub = () => {};
    initFirebaseUserAndPrefs().then((uid) => {
      if (!uid) return;
      setFirebaseUserId(uid);
      unsub = subscribePreferencias(uid, (data) => {
        if (data.tema && !temaFromFirestoreRef.current) {
          temaFromFirestoreRef.current = true;
          setTema(data.tema);
        }
      });
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!firebaseUserId) return;
    savePreferencias(firebaseUserId, { tema }).catch(() => {});
  }, [firebaseUserId, tema]);

  useEffect(() => {
    if (estudoAberto) {
      marcarComoVisto(estudoAberto.id);
      setVistos(getVistos());
    }
  }, [estudoAberto]);

  const handleToggleFavorito = (id, e) => {
    e.stopPropagation();
    toggleFavorito(id);
    setFavoritos(getFavoritos());
  };

  useEffect(() => {
    const titulos = {
      curso: 'Curso',
      atalhos: 'Atalhos',
      'atalhos-teclado': 'Atalhos de teclado',
      segmentos: 'Proteção por segmento',
      backdoor: 'Backdoor & Acesso remoto',
      certificacoes: 'Certificações',
      'aulas-praticas': 'Aulas Práticas',
      simulado: 'Simulado',
      simulador: 'Simulador',
    };
    const nome = titulos[pagina] || pagina;
    document.title = `${nome} – Segurança Cibernética`;
  }, [pagina]);

  const toggleTema = () => setTema((t) => (t === 'dark' ? 'light' : 'dark'));

  const handleLogin = () => {
    localStorage.setItem(AUTH_KEY, 'true');
    setAutenticado(true);
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    setAutenticado(false);
  };

  const listaFiltrada = useMemo(() => {
    let resultado = buscarEstudos(busca);
    if (categoriaAtiva) resultado = resultado.filter((e) => e.periodoId === categoriaAtiva);
    if (soFavoritos) resultado = resultado.filter((e) => favoritos.has(e.id));
    return resultado;
  }, [busca, categoriaAtiva, soFavoritos, favoritos]);

  if (!autenticado) {
    return <Login onLogin={handleLogin} />;
  }

  const navLink = (id, label) => (
    <button
      type="button"
      className={`app__global-nav-link ${pagina === id ? 'app__global-nav-link--ativo' : ''}`}
      onClick={() => setPagina(id)}
    >
      {label}
    </button>
  );

  return (
    <div className="app">
      <nav className="app__global-nav" aria-label="Navegação principal">
        <div className="app__global-nav-links">
          {navLink('curso', 'Curso')}
          {navLink('atalhos', 'Atalhos')}
          {navLink('atalhos-teclado', 'Atalhos de teclado')}
          {navLink('segmentos', 'Proteção por segmento')}
          {navLink('backdoor', 'Backdoor & Acesso remoto')}
          {navLink('certificacoes', 'Certificações')}
          {navLink('aulas-praticas', 'Aulas Práticas')}
          {navLink('simulado', 'Simulado')}
          {navLink('simulador', 'Simulador')}
        </div>
        <button
          type="button"
          className="app__theme-toggle"
          onClick={toggleTema}
          title={tema === 'dark' ? 'Usar tema claro' : 'Usar tema escuro'}
          aria-label={tema === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
        >
          <span className="app__theme-icon" aria-hidden="true">{tema === 'dark' ? '☀️' : '🌙'}</span>
          <span className="app__theme-label">Tema {tema === 'dark' ? 'claro' : 'escuro'}</span>
        </button>
        <button
          type="button"
          className="app__logout"
          onClick={handleLogout}
          title="Sair"
          aria-label="Sair da conta"
        >
          Sair
        </button>
      </nav>

      <Suspense fallback={<div className="app__loading" aria-live="polite">Carregando...</div>}>
        {pagina === 'atalhos' && <PaginaAtalhos />}
        {pagina === 'atalhos-teclado' && <PaginaAtalhosTeclado />}
        {pagina === 'segmentos' && <PaginaSegmentos />}
        {pagina === 'backdoor' && <PaginaBackdoor />}
        {pagina === 'certificacoes' && <PaginaCertificacoes />}
        {pagina === 'aulas-praticas' && <PaginaAulasPraticas />}
        {pagina === 'simulado' && <PaginaSimulado firebaseUserId={firebaseUserId} />}
        {pagina === 'simulador' && <PaginaSimulador />}
      </Suspense>

      {pagina === 'curso' && (
        <>
          <header className="app__header">
            <img
              src={IMAGEM_HEADER}
              alt=""
              className="app__header-img"
            />
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
                    onToggleFavorito={(e) => handleToggleFavorito(estudo.id, e)}
                  />
                ))}
              </div>
            )}
          </main>

          {estudoAberto && (
            <StudyDetail estudo={estudoAberto} onFechar={() => setEstudoAberto(null)} />
          )}
        </>
      )}
    </div>
  );
}
