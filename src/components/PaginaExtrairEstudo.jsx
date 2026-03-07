import { useState, useMemo } from 'react';
import { periodos } from '../data/estudos';
import { questoesSimuladoCurso, periodosSimuladoCurso } from '../data/questoesSimuladoCurso';
import './PaginaExtrairEstudo.css';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const RESUMOS_POR_PERIODO = {
  '1': 'Fundamentos: computação, administração, infraestrutura de TI, pensamento computacional, LGPD e políticas. Base para todo o restante.',
  '2': 'Sistemas e redes: banco de dados (SQL, SQLi, prepared statements), TCP/IP, DNS, HTTP/HTTPS, CIA, hardening, backup e ética.',
  '3': 'Defesa e ataque: VLAN, criptografia assimétrica e hash, Nmap, pentest (escopo, enumeração), Wireshark, VPN, GPO, defesa em profundidade.',
  '4': 'Operações: IDS/IPS, resposta a incidentes (identificação, contenção, erradicação, recuperação), DMZ, ransomware, SIEM, IOCs, segmentação.',
  '5': 'Especialização: análise de malware (estática/dinâmica), forense (imagem, timeline, chain of custody), ISO 27001, DPO, CVSS, APT, auditoria.',
};

export default function PaginaExtrairEstudo() {
  const [aba, setAba] = useState('resumos');
  const [periodoFiltro, setPeriodoFiltro] = useState('');
  const [indiceFlash, setIndiceFlash] = useState(0);
  const [virado, setVirado] = useState(false);

  const questoesEmbaralhadas = useMemo(() => shuffle(questoesSimuladoCurso), []);
  const questoesFiltradas = useMemo(() => {
    if (!periodoFiltro) return questoesEmbaralhadas;
    return questoesEmbaralhadas.filter((q) => q.periodo === periodoFiltro);
  }, [questoesEmbaralhadas, periodoFiltro]);

  const qAtual = questoesFiltradas[indiceFlash] || null;
  const totalFlash = questoesFiltradas.length;

  const proximoFlash = () => {
    setVirado(false);
    setIndiceFlash((i) => (i + 1) % totalFlash);
  };
  const anteriorFlash = () => {
    setVirado(false);
    setIndiceFlash((i) => (i - 1 + totalFlash) % totalFlash);
  };

  return (
    <div className="extrair-estudo">
      <header className="extrair-estudo__hero">
        <span className="extrair-estudo__badge">Modo estudo · Nível elite</span>
        <h1 className="extrair-estudo__titulo">Extrair o estudo</h1>
        <p className="extrair-estudo__subtitulo">
          Resumos por período, flashcards com perguntas e respostas, e material condensado para revisão rápida — como numa faculdade de referência.
        </p>
        <p className="extrair-estudo__meta">
          {questoesSimuladoCurso.length}+ questões com explicação · 5 períodos · CIA, LGPD, pentest, forense e operações
        </p>
      </header>

      <nav className="extrair-estudo__tabs" aria-label="Seções">
        <button
          type="button"
          className={`extrair-estudo__tab ${aba === 'resumos' ? 'extrair-estudo__tab--ativo' : ''}`}
          onClick={() => setAba('resumos')}
        >
          Resumos por período
        </button>
        <button
          type="button"
          className={`extrair-estudo__tab ${aba === 'flashcards' ? 'extrair-estudo__tab--ativo' : ''}`}
          onClick={() => setAba('flashcards')}
        >
          Flashcards
        </button>
      </nav>

      {aba === 'resumos' && (
        <section className="extrair-estudo__secao" aria-labelledby="resumos-heading">
          <h2 id="resumos-heading" className="extrair-estudo__secao-titulo">Resumos condensados</h2>
          <p className="extrair-estudo__secao-desc">
            Use estes blocos para revisar cada período antes de provas ou simulados.
          </p>
          <div className="extrair-estudo__grid-resumos">
            {periodos.map((p) => (
              <article key={p.id} className="extrair-estudo__card-resumo" style={{ '--card-accent': p.cor }}>
                <h3 className="extrair-estudo__card-resumo-titulo">
                  <span className="extrair-estudo__card-resumo-icone" aria-hidden>{p.icone}</span>
                  {p.nome} — {p.titulo}
                </h3>
                <p className="extrair-estudo__card-resumo-texto">{RESUMOS_POR_PERIODO[p.id] || 'Conteúdo do período no curso principal.'}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {aba === 'flashcards' && (
        <section className="extrair-estudo__secao extrair-estudo__secao--flash" aria-labelledby="flash-heading">
          <h2 id="flash-heading" className="extrair-estudo__secao-titulo">Flashcards</h2>
          <p className="extrair-estudo__secao-desc">
            Clique no card para virar e ver a resposta correta e a explicação.
          </p>
          <div className="extrair-estudo__flash-filtro">
            <label htmlFor="periodo-flash">Filtrar por período:</label>
            <select
              id="periodo-flash"
              value={periodoFiltro}
              onChange={(e) => { setPeriodoFiltro(e.target.value); setIndiceFlash(0); setVirado(false); }}
              className="extrair-estudo__select"
            >
              <option value="">Todos ({questoesSimuladoCurso.length})</option>
              {periodosSimuladoCurso.map((p) => (
                <option key={p.id} value={p.id}>{p.nome}</option>
              ))}
            </select>
          </div>
          {qAtual && (
            <div className="extrair-estudo__flash-wrap">
              <button
                type="button"
                className={`extrair-estudo__flash-card ${virado ? 'extrair-estudo__flash-card--virado' : ''}`}
                onClick={() => setVirado(!virado)}
                aria-label={virado ? 'Ocultar resposta' : 'Mostrar resposta'}
              >
                <div className="extrair-estudo__flash-face extrair-estudo__flash-face--frente">
                  <span className="extrair-estudo__flash-num">{indiceFlash + 1} / {totalFlash}</span>
                  <p className="extrair-estudo__flash-pergunta">{qAtual.pergunta}</p>
                  <span className="extrair-estudo__flash-dica">Clique para ver a resposta</span>
                </div>
                <div className="extrair-estudo__flash-face extrair-estudo__flash-face--verso">
                  <p className="extrair-estudo__flash-resposta">
                    <strong>Resposta:</strong> {qAtual.opcoes[qAtual.respostaCorreta]}
                  </p>
                  <p className="extrair-estudo__flash-explicacao">{qAtual.explicacao}</p>
                </div>
              </button>
              <div className="extrair-estudo__flash-nav">
                <button type="button" onClick={anteriorFlash} className="extrair-estudo__flash-btn">← Anterior</button>
                <button type="button" onClick={proximoFlash} className="extrair-estudo__flash-btn">Próximo →</button>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
