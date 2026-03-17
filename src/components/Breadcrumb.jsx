import { useLocation, Link } from 'react-router-dom';

const ROTAS = {
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
  '/7-camadas': 'As 7 Camadas (OSI)',
  '/windows-11': 'Tudo sobre o Windows 11',
};

export default function Breadcrumb() {
  const { pathname } = useLocation();
  const nome = ROTAS[pathname] || 'Curso';

  return (
    <nav className="breadcrumb" aria-label="Navegação secundária">
      <ol className="breadcrumb__list">
        <li className="breadcrumb__item">
          <Link to="/" className="breadcrumb__link">Início</Link>
        </li>
        <li className="breadcrumb__item breadcrumb__item--current" aria-current="page">
          {nome}
        </li>
      </ol>
    </nav>
  );
}
