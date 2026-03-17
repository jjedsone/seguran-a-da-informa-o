import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import GlobalSearch from './GlobalSearch';
import Breadcrumb from './Breadcrumb';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const NAV_LINKS = [
  { path: '/', label: 'Curso' },
  { path: '/atalhos', label: 'Atalhos' },
  { path: '/atalhos-teclado', label: 'Atalhos de teclado' },
  { path: '/segmentos', label: 'Proteção por segmento' },
  { path: '/backdoor', label: 'Backdoor & Acesso remoto' },
  { path: '/certificacoes', label: 'Certificações' },
  { path: '/aulas-praticas', label: 'Aulas Práticas' },
  { path: '/simulado', label: 'Simulado' },
  { path: '/simulador', label: 'Simulador' },
  { path: '/extrair-estudo', label: 'Extrair o estudo' },
  { path: '/apostila', label: 'Apostila' },
  { path: '/guia', label: 'Guia de Segurança' },
  { path: '/projetos', label: 'Projetos & Ferramentas' },
  { path: '/jogos', label: 'Jogos de Segurança' },
  { path: '/aulas-destrinchadas', label: 'Destrinchando as 16 Aulas' },
  { path: '/7-camadas', label: 'As 7 Camadas (OSI)' },
  { path: '/windows-11', label: 'Windows 11' },
];

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { tema, toggleTema } = useTheme();
  const { logout } = useAuth();
  const [menuAberto, setMenuAberto] = useState(false);

  const handleSelectCurso = (estudo) => {
    setMenuAberto(false);
    navigate('/', { state: { openStudy: estudo } });
  };

  const handleSelectAtalhos = () => {
    setMenuAberto(false);
    navigate('/atalhos');
  };

  const handleSelectApostila = (capId) => {
    setMenuAberto(false);
    navigate('/apostila', { state: { capituloInicial: capId } });
  };

  return (
    <div className="app">
      <nav className="app__global-nav" aria-label="Navegação principal">
        <button
          type="button"
          className="app__nav-hamburger"
          onClick={() => setMenuAberto((v) => !v)}
          aria-expanded={menuAberto}
          aria-controls="app__global-nav-links"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className="app__nav-hamburger-bar" />
          <span className="app__nav-hamburger-bar" />
          <span className="app__nav-hamburger-bar" />
        </button>
        <div
          id="app__global-nav-links"
          className={`app__global-nav-links ${menuAberto ? 'app__global-nav-links--aberto' : ''}`}
        >
          <GlobalSearch
            onSelectCurso={handleSelectCurso}
            onSelectAtalhos={handleSelectAtalhos}
            onSelectApostila={handleSelectApostila}
          />
          {NAV_LINKS.map(({ path, label }) => (
            <button
              key={path}
              type="button"
              className={`app__global-nav-link ${location.pathname === path ? 'app__global-nav-link--ativo' : ''}`}
              onClick={() => { navigate(path); setMenuAberto(false); }}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="app__nav-right">
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
            onClick={logout}
            title="Sair"
            aria-label="Sair da conta"
          >
            Sair
          </button>
        </div>
      </nav>

      <div className="app__breadcrumb-wrap">
        <Breadcrumb />
      </div>

      <Outlet />
    </div>
  );
}

export default Layout;
