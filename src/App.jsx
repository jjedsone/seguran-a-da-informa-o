import { useState, useMemo, useEffect } from 'react';
import { estudos, periodos, buscarEstudos } from './data/estudos';
import SearchBar from './components/SearchBar';
import StudyCard from './components/StudyCard';
import StudyDetail from './components/StudyDetail';
import PaginaAtalhos from './components/PaginaAtalhos';
import PaginaBackdoor from './components/PaginaBackdoor';
import Login from './components/Login';
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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem(THEME_KEY, tema);
  }, [tema]);

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
    return resultado;
  }, [busca, categoriaAtiva]);

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
          {navLink('backdoor', 'Backdoor & Acesso remoto')}
        </div>
        <button
          type="button"
          className="app__theme-toggle"
          onClick={toggleTema}
          title={tema === 'dark' ? 'Usar tema claro' : 'Usar tema escuro'}
          aria-label={tema === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
        >
          {tema === 'dark' ? '☀️ Claro' : '🌙 Escuro'}
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

      {pagina === 'atalhos' && <PaginaAtalhos />}

      {pagina === 'backdoor' && <PaginaBackdoor />}

      {pagina === 'curso' && (
        <>
          <header className="app__header">
            <h1 className="app__titulo">Curso de Segurança Cibernética</h1>
            <p className="app__subtitulo">Formação profissional – 5 períodos · Material completo por disciplina</p>
            <p className="app__metodologia">Ementa, objetivos gerais e específicos, unidades temáticas, mentalidade profissional, prática e checklist de aprendizagem — nível faculdade de elite.</p>
            <SearchBar value={busca} onChange={setBusca} placeholder="Buscar disciplina, tag ou tema..." />
            <nav className="app__filtros" aria-label="Filtrar por período">
              <button
                type="button"
                className={`app__filtro ${!categoriaAtiva ? 'app__filtro--ativo' : ''}`}
                onClick={() => setCategoriaAtiva('')}
              >
                Todos os períodos
              </button>
              {periodos.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`app__filtro ${categoriaAtiva === p.id ? 'app__filtro--ativo' : ''}`}
                  onClick={() => setCategoriaAtiva(p.id)}
                  style={categoriaAtiva === p.id ? { borderColor: p.cor, color: p.cor } : {}}
                >
                  {p.nome} – {p.titulo}
                </button>
              ))}
            </nav>
          </header>

          <main className="app__main">
            {listaFiltrada.length === 0 ? (
              <p className="app__vazio">Nenhum estudo encontrado. Tente outra busca ou categoria.</p>
            ) : (
              <div className="app__grid">
                {listaFiltrada.map((estudo) => (
                  <StudyCard key={estudo.id} estudo={estudo} onClick={setEstudoAberto} />
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
