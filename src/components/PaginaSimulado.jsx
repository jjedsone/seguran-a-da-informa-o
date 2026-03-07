import { useState, useMemo, useCallback, useEffect } from 'react';
import { questoesSimulado, certificacoesSimulado } from '../data/questoesSimulado';
import { questoesSimuladoCurso, periodosSimuladoCurso } from '../data/questoesSimuladoCurso';
import { saveSimuladoProgress } from '../lib/firestorePrefs';
import './PaginaSimulado.css';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const MODOS = { certificacoes: 'certificacoes', curso: 'curso' };

export default function PaginaSimulado({ firebaseUserId }) {
  const [modo, setModo] = useState(MODOS.curso);
  const [filtroCert, setFiltroCert] = useState('');
  const [filtroPeriodo, setFiltroPeriodo] = useState('');
  const [questoesCert] = useState(() => shuffleArray(questoesSimulado));
  const [questoesCurso] = useState(() => shuffleArray(questoesSimuladoCurso));
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [historico, setHistorico] = useState({ acertos: 0, total: 0 });
  const [iniciado, setIniciado] = useState(false);

  useEffect(() => {
    if (firebaseUserId && historico.total > 0) {
      saveSimuladoProgress(firebaseUserId, historico).catch(() => {});
    }
  }, [firebaseUserId, historico.acertos, historico.total]);

  const listaFiltrada = useMemo(() => {
    if (modo === MODOS.curso) {
      const lista = questoesCurso;
      if (!filtroPeriodo) return lista;
      return lista.filter((q) => q.periodo === filtroPeriodo);
    }
    const lista = questoesCert;
    if (!filtroCert) return lista;
    return lista.filter((q) => q.certificacao === filtroCert);
  }, [modo, filtroCert, filtroPeriodo, questoesCert, questoesCurso]);

  const questaoAtual = listaFiltrada[indiceAtual] || null;
  const totalQuestoes = listaFiltrada.length;
  const numeroNaLista = indiceAtual + 1;

  const responder = useCallback(() => {
    if (respostaSelecionada === null || mostrarResultado) return;
    const acertou = respostaSelecionada === questaoAtual.respostaCorreta;
    setHistorico((h) => ({ acertos: h.acertos + (acertou ? 1 : 0), total: h.total + 1 }));
    setMostrarResultado(true);
  }, [respostaSelecionada, mostrarResultado, questaoAtual]);

  const proxima = useCallback(() => {
    setIndiceAtual((i) => Math.min(i + 1, totalQuestoes - 1));
    setRespostaSelecionada(null);
    setMostrarResultado(false);
  }, [totalQuestoes]);

  const anterior = useCallback(() => {
    setIndiceAtual((i) => Math.max(i - 1, 0));
    setRespostaSelecionada(null);
    setMostrarResultado(false);
  }, []);

  const reiniciar = useCallback(() => {
    setIndiceAtual(0);
    setRespostaSelecionada(null);
    setMostrarResultado(false);
    setHistorico({ acertos: 0, total: 0 });
    setIniciado(false);
  }, []);

  const iniciarSimulado = () => {
    setIniciado(true);
    setIndiceAtual(0);
    setRespostaSelecionada(null);
    setMostrarResultado(false);
    setHistorico({ acertos: 0, total: 0 });
  };

  if (!iniciado) {
    return (
      <div className="simulado">
        <header className="simulado__header">
          <h1 className="simulado__titulo">Simulado – Perguntas e Respostas</h1>
          <p className="simulado__subtitulo">
            Questões do curso de Segurança Cibernética e questões de prática por certificação (CompTIA Security+, CySA+, CASP+ e OSCP), alinhadas aos domínios e temas oficiais. Não são questões reais das provas – use para estudar e fixar os conceitos. Estude com explicações.
          </p>

          <div className="simulado__modos">
            <button
              type="button"
              className={`simulado__modo-btn ${modo === MODOS.curso ? 'simulado__modo-btn--ativo' : ''}`}
              onClick={() => setModo(MODOS.curso)}
            >
              Curso ({questoesSimuladoCurso.length} questões)
            </button>
            <button
              type="button"
              className={`simulado__modo-btn ${modo === MODOS.certificacoes ? 'simulado__modo-btn--ativo' : ''}`}
              onClick={() => setModo(MODOS.certificacoes)}
            >
              Certificações ({questoesSimulado.length})
            </button>
          </div>

          {modo === MODOS.curso && (
            <div className="simulado__filtro-wrap">
              <label htmlFor="simulado-filtro-periodo" className="simulado__label">Filtrar por período:</label>
              <select
                id="simulado-filtro-periodo"
                value={filtroPeriodo}
                onChange={(e) => setFiltroPeriodo(e.target.value)}
                className="simulado__select"
              >
                <option value="">Todos os períodos ({questoesSimuladoCurso.length} questões)</option>
                {periodosSimuladoCurso.map((p) => {
                  const count = questoesSimuladoCurso.filter((q) => q.periodo === p.id).length;
                  return (
                    <option key={p.id} value={p.id}>
                      {p.nome} – {p.titulo} ({count})
                    </option>
                  );
                })}
              </select>
            </div>
          )}

          {modo === MODOS.certificacoes && (
            <div className="simulado__filtro-wrap">
              <label htmlFor="simulado-filtro" className="simulado__label">Filtrar por certificação:</label>
              <select
                id="simulado-filtro"
                value={filtroCert}
                onChange={(e) => setFiltroCert(e.target.value)}
                className="simulado__select"
              >
                <option value="">Todas ({questoesSimulado.length} questões)</option>
                {certificacoesSimulado.map((c) => {
                  const count = questoesSimulado.filter((q) => q.certificacao === c.id).length;
                  return (
                    <option key={c.id} value={c.id}>
                      {c.sigla} – {c.nome} ({count})
                    </option>
                  );
                })}
              </select>
            </div>
          )}

          <p className="simulado__contador">
            {listaFiltrada.length} questão{listaFiltrada.length !== 1 ? 'ões' : ''} neste simulado
          </p>
          <button type="button" className="simulado__btn-iniciar" onClick={iniciarSimulado}>
            Iniciar simulado
          </button>
        </header>
      </div>
    );
  }

  if (totalQuestoes === 0) {
    return (
      <div className="simulado">
        <p className="simulado__vazio">
          Nenhuma questão para o filtro selecionado. Escolha outro período ou certificação.
        </p>
        <button type="button" className="simulado__btn-voltar" onClick={reiniciar}>Voltar</button>
      </div>
    );
  }

  const acertou = mostrarResultado && respostaSelecionada === questaoAtual.respostaCorreta;
  const badgeTexto = questaoAtual.certificacao
    ? questaoAtual.certificacao.toUpperCase().replace(/-/g, ' ')
    : (periodosSimuladoCurso.find((p) => p.id === questaoAtual.periodo)?.nome || questaoAtual.periodo);

  return (
    <div className="simulado">
      <header className="simulado__barra">
        <span className="simulado__progresso">
          Questão {numeroNaLista} de {totalQuestoes}
        </span>
        <span className="simulado__score">
          Acertos: {historico.acertos}/{historico.total}
        </span>
        <button type="button" className="simulado__btn-sair" onClick={reiniciar}>
          Sair do simulado
        </button>
      </header>

      <main className="simulado__main">
        <div className="simulado__questao-card">
          <div className="simulado__cert-badge">{badgeTexto}</div>
          <h2 className="simulado__pergunta">{questaoAtual.pergunta}</h2>

          <ul className="simulado__opcoes" role="radiogroup" aria-label="Opções de resposta">
            {questaoAtual.opcoes.map((op, idx) => {
              const isSelected = respostaSelecionada === idx;
              const isCorrect = idx === questaoAtual.respostaCorreta;
              const showCorrect = mostrarResultado && isCorrect;
              const showWrong = mostrarResultado && isSelected && !isCorrect;
              return (
                <li key={idx}>
                  <label
                    className={`simulado__opcao ${isSelected ? 'simulado__opcao--selecionada' : ''} ${showCorrect ? 'simulado__opcao--correta' : ''} ${showWrong ? 'simulado__opcao--errada' : ''}`}
                  >
                    <input
                      type="radio"
                      name="resposta"
                      value={idx}
                      checked={isSelected}
                      onChange={() => !mostrarResultado && setRespostaSelecionada(idx)}
                      disabled={mostrarResultado}
                    />
                    <span className="simulado__opcao-texto">{op.replace(/^[A-D]\)\s*/, '')}</span>
                    {showCorrect && <span className="simulado__opcao-marca">✓ Correta</span>}
                    {showWrong && <span className="simulado__opcao-marca simulado__opcao-marca--erro">✗</span>}
                  </label>
                </li>
              );
            })}
          </ul>

          {mostrarResultado && (
            <div className={`simulado__explicacao ${acertou ? 'simulado__explicacao--acerto' : 'simulado__explicacao--erro'}`}>
              <h3 className="simulado__explicacao-titulo">{acertou ? 'Correto!' : 'Resposta correta'}</h3>
              <p className="simulado__explicacao-texto">{questaoAtual.explicacao}</p>
            </div>
          )}

          <div className="simulado__acoes">
            {!mostrarResultado ? (
              <button
                type="button"
                className="simulado__btn simulado__btn-responder"
                onClick={responder}
                disabled={respostaSelecionada === null}
              >
                Confirmar resposta
              </button>
            ) : (
              <>
                <button type="button" className="simulado__btn simulado__btn-nav" onClick={anterior} disabled={indiceAtual === 0}>
                  ← Anterior
                </button>
                <button type="button" className="simulado__btn simulado__btn-nav" onClick={proxima} disabled={indiceAtual >= totalQuestoes - 1}>
                  Próxima →
                </button>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
