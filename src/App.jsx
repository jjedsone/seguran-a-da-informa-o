import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';
import { FavoritosProvider } from './contexts/FavoritosContext';
import Layout from './components/Layout';
import Login from './components/Login';
import CursoPage from './pages/CursoPage';
import Skeleton from './components/Skeleton';
import './App.css';

const PaginaAtalhos = lazy(() => import('./components/PaginaAtalhos'));
const PaginaAtalhosTeclado = lazy(() => import('./components/PaginaAtalhosTeclado'));
const PaginaBackdoor = lazy(() => import('./components/PaginaBackdoor'));
const PaginaSegmentos = lazy(() => import('./components/PaginaSegmentos'));
const PaginaCertificacoes = lazy(() => import('./components/PaginaCertificacoes'));
const PaginaAulasPraticas = lazy(() => import('./components/PaginaAulasPraticas'));
const PaginaSimulado = lazy(() => import('./components/PaginaSimulado'));
const PaginaSimulador = lazy(() => import('./components/PaginaSimulador'));
const PaginaExtrairEstudo = lazy(() => import('./components/PaginaExtrairEstudo'));
const PaginaApostila = lazy(() => import('./components/PaginaApostila'));
const PaginaGuiaSeguranca = lazy(() => import('./components/PaginaGuiaSeguranca'));
const PaginaFerramentasProjetos = lazy(() => import('./components/PaginaFerramentasProjetos'));
const PaginaJogosSeguranca = lazy(() => import('./components/PaginaJogosSeguranca'));
const PaginaAulasDestrinchadas = lazy(() => import('./components/PaginaAulasDestrinchadas'));
const Pagina7Camadas = lazy(() => import('./components/Pagina7Camadas'));
const PaginaWindows11 = lazy(() => import('./components/PaginaWindows11'));

const TITULOS = {
  '/': 'Curso',
  '/atalhos': 'Atalhos',
  '/atalhos-teclado': 'Atalhos de teclado',
  '/segmentos': 'Proteção por segmento',
  '/backdoor': 'Backdoor & Acesso remoto',
  '/certificacoes': 'Certificações',
  '/aulas-praticas': 'Aulas Práticas',
  '/simulado': 'Simulado',
  '/simulador': 'Simulador',
  '/extrair-estudo': 'Extrair o estudo',
  '/apostila': 'Apostila',
  '/guia': 'Guia de Segurança',
  '/projetos': 'Projetos & Ferramentas',
  '/jogos': 'Jogos de Segurança',
  '/aulas-destrinchadas': 'Destrinchando as 16 Aulas',
  '/7-camadas': 'As 7 Camadas do Modelo OSI',
  '/windows-11': 'Tudo sobre o Windows 11',
};

function DocumentTitle() {
  const location = useLocation();
  useEffect(() => {
    const nome = TITULOS[location.pathname] || 'Curso';
    document.title = `${nome} – Segurança Cibernética`;
  }, [location.pathname]);
  return null;
}

function ApostilaRoute() {
  const location = useLocation();
  const capituloInicial = location.state?.capituloInicial ?? null;
  return (
    <PaginaApostila
      initialCapituloId={capituloInicial}
      onInitialAberto={() => window.history.replaceState({}, '', location.pathname)}
    />
  );
}

function AppRoutes() {
  const { autenticado, login } = useAuth();

  if (!autenticado) {
    return <Login onLogin={login} />;
  }

  return (
    <>
      <DocumentTitle />
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<CursoPage />} />
            <Route path="/atalhos" element={<PaginaAtalhos />} />
            <Route path="/atalhos-teclado" element={<PaginaAtalhosTeclado />} />
            <Route path="/segmentos" element={<PaginaSegmentos />} />
            <Route path="/backdoor" element={<PaginaBackdoor />} />
            <Route path="/certificacoes" element={<PaginaCertificacoes />} />
            <Route path="/aulas-praticas" element={<PaginaAulasPraticas />} />
            <Route path="/simulado" element={<PaginaSimulado />} />
            <Route path="/simulador" element={<PaginaSimulador />} />
            <Route path="/extrair-estudo" element={<PaginaExtrairEstudo />} />
            <Route path="/apostila" element={<ApostilaRoute />} />
            <Route path="/guia" element={<PaginaGuiaSeguranca />} />
            <Route path="/projetos" element={<PaginaFerramentasProjetos />} />
            <Route path="/jogos" element={<PaginaJogosSeguranca />} />
            <Route path="/aulas-destrinchadas" element={<PaginaAulasDestrinchadas />} />
            <Route path="/7-camadas" element={<Pagina7Camadas />} />
            <Route path="/windows-11" element={<PaginaWindows11 />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ToastProvider>
          <FavoritosProvider>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
              <AppRoutes />
            </BrowserRouter>
          </FavoritosProvider>
        </ToastProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
