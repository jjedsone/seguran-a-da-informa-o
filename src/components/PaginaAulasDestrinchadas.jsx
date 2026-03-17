import { useState, useMemo, useCallback } from 'react';
import { paginasAulas } from '../data/aulasDestrinchadas';
import { quiz16Aulas, shuffleQuiz } from '../data/quiz16Aulas';
import { formatarConteudo } from '../lib/formatarConteudo';
import './PaginaAulasDestrinchadas.css';

const QUIZ_MODOS = { conteudo: 'conteudo', inicio: 'inicio', rodando: 'rodando', resumo: 'resumo' };

export default function PaginaAulasDestrinchadas() {
  const [aulaAberta, setAulaAberta] = useState(null);
  const [quizModo, setQuizModo] = useState(QUIZ_MODOS.conteudo);
  const [questoesQuiz] = useState(() => shuffleQuiz(quiz16Aulas));
  const [indiceQuiz, setIndiceQuiz] = useState(0);
  const [respostaQuiz, setRespostaQuiz] = useState(null);
  const [mostrarResultadoQuiz, setMostrarResultadoQuiz] = useState(false);
  const [historicoQuiz, setHistoricoQuiz] = useState({ acertos: 0, total: 0 });
  const [historicoQuestoesQuiz, setHistoricoQuestoesQuiz] = useState([]);
  const [modoSoErradasQuiz, setModoSoErradasQuiz] = useState(false);
  const [questoesParaRevisarQuiz, setQuestoesParaRevisarQuiz] = useState([]);

  const listaQuiz = useMemo(() => {
    if (modoSoErradasQuiz && questoesParaRevisarQuiz.length > 0) return questoesParaRevisarQuiz;
    return questoesQuiz;
  }, [questoesQuiz, modoSoErradasQuiz, questoesParaRevisarQuiz]);

  const questaoAtualQuiz = listaQuiz[indiceQuiz] || null;
  const totalQuiz = listaQuiz.length;
  const numeroQuiz = indiceQuiz + 1;

  const responderQuiz = useCallback(() => {
    if (respostaQuiz === null || mostrarResultadoQuiz || !questaoAtualQuiz) return;
    const acertou = respostaQuiz === questaoAtualQuiz.respostaCorreta;
    setHistoricoQuiz((h) => ({ acertos: h.acertos + (acertou ? 1 : 0), total: h.total + 1 }));
    setHistoricoQuestoesQuiz((prev) => [...prev, { id: questaoAtualQuiz.id, acertou, questao: questaoAtualQuiz }]);
    setMostrarResultadoQuiz(true);
  }, [respostaQuiz, mostrarResultadoQuiz, questaoAtualQuiz]);

  const proximaQuiz = useCallback(() => {
    setIndiceQuiz((i) => Math.min(i + 1, totalQuiz - 1));
    setRespostaQuiz(null);
    setMostrarResultadoQuiz(false);
  }, [totalQuiz]);

  const anteriorQuiz = useCallback(() => {
    setIndiceQuiz((i) => Math.max(i - 1, 0));
    setRespostaQuiz(null);
    setMostrarResultadoQuiz(false);
  }, []);

  const iniciarQuiz = useCallback(() => {
    setQuizModo(QUIZ_MODOS.rodando);
    setIndiceQuiz(0);
    setRespostaQuiz(null);
    setMostrarResultadoQuiz(false);
    setHistoricoQuiz({ acertos: 0, total: 0 });
    setHistoricoQuestoesQuiz([]);
    setModoSoErradasQuiz(false);
    setQuestoesParaRevisarQuiz([]);
  }, []);

  const irParaResumoQuiz = useCallback(() => {
    setQuizModo(QUIZ_MODOS.resumo);
  }, []);

  const voltarConteudo = useCallback(() => {
    setQuizModo(QUIZ_MODOS.conteudo);
  }, []);

  const revisarErradasQuiz = useCallback(() => {
    const erradas = historicoQuestoesQuiz.filter((h) => !h.acertou).map((h) => h.questao);
    setQuestoesParaRevisarQuiz(erradas);
    setModoSoErradasQuiz(true);
    setIndiceQuiz(0);
    setRespostaQuiz(null);
    setMostrarResultadoQuiz(false);
    setHistoricoQuiz({ acertos: 0, total: 0 });
    setHistoricoQuestoesQuiz([]);
    setQuizModo(QUIZ_MODOS.rodando);
  }, [historicoQuestoesQuiz]);

  const acertouQuiz = mostrarResultadoQuiz && respostaQuiz === questaoAtualQuiz?.respostaCorreta;

  // ---------- Quiz: tela inicial ----------
  if (quizModo === QUIZ_MODOS.inicio) {
    return (
      <div className="aulas-destrinchadas">
        <div className="aulas-destrinchadas__quiz-inicio">
          <h2 className="aulas-destrinchadas__quiz-titulo">Quiz das 16 Aulas</h2>
          <p className="aulas-destrinchadas__quiz-desc">
            {quiz16Aulas.length} perguntas de múltipla escolha sobre todo o conteúdo das apostilas (Fundamentos, Ameaças, OSI, Protocolos, Ataques, Exploração, Serviços de Segurança, Criptografia, Controles, Proteção de Dados, Ferramentas, Corporativo, Políticas e Controles de Acesso).
          </p>
          <p className="aulas-destrinchadas__quiz-contador">{quiz16Aulas.length} questões</p>
          <div className="aulas-destrinchadas__quiz-acoes">
            <button type="button" className="aulas-destrinchadas__quiz-btn" onClick={iniciarQuiz}>
              Iniciar quiz
            </button>
            <button type="button" className="aulas-destrinchadas__quiz-btn aulas-destrinchadas__quiz-btn--sec" onClick={voltarConteudo}>
              Voltar ao conteúdo
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------- Quiz: rodando ----------
  if (quizModo === QUIZ_MODOS.rodando) {
    if (totalQuiz === 0) {
      return (
        <div className="aulas-destrinchadas">
          <div className="aulas-destrinchadas__quiz-inicio">
            <p className="aulas-destrinchadas__quiz-desc">Nenhuma questão para revisar. Você acertou todas!</p>
            <button type="button" className="aulas-destrinchadas__quiz-btn" onClick={() => { setQuizModo(QUIZ_MODOS.conteudo); }}>Voltar ao conteúdo</button>
          </div>
        </div>
      );
    }

    const mostrandoUltima = numeroQuiz === totalQuiz && mostrarResultadoQuiz;
    const podeIrResumo = historicoQuiz.total > 0 && mostrandoUltima;

    return (
      <div className="aulas-destrinchadas">
        <div className="aulas-destrinchadas__quiz-wrap">
          <div className="aulas-destrinchadas__quiz-barra">
            <span className="aulas-destrinchadas__quiz-progresso">Questão {numeroQuiz} de {totalQuiz}</span>
            <span className="aulas-destrinchadas__quiz-score">Acertos: {historicoQuiz.acertos} / {historicoQuiz.total}</span>
          </div>
          <div className="aulas-destrinchadas__quiz-card">
            <p className="aulas-destrinchadas__quiz-pergunta">{questaoAtualQuiz.pergunta}</p>
            <div className="aulas-destrinchadas__quiz-opcoes" role="radiogroup" aria-label="Opções de resposta">
              {questaoAtualQuiz.opcoes.map((op, idx) => (
                <label
                  key={idx}
                  className={`aulas-destrinchadas__quiz-opcao ${respostaQuiz === idx ? 'aulas-destrinchadas__quiz-opcao--sel' : ''} ${mostrarResultadoQuiz ? (idx === questaoAtualQuiz.respostaCorreta ? 'aulas-destrinchadas__quiz-opcao--certa' : respostaQuiz === idx ? 'aulas-destrinchadas__quiz-opcao--errada' : '') : ''}`}
                >
                  <input
                    type="radio"
                    name="quiz-16"
                    value={idx}
                    checked={respostaQuiz === idx}
                    onChange={() => setRespostaQuiz(idx)}
                    disabled={mostrarResultadoQuiz}
                  />
                  <span>{op}</span>
                </label>
              ))}
            </div>
            {mostrarResultadoQuiz && (
              <div className="aulas-destrinchadas__quiz-explicacao" role="status">
                <p><strong>{acertouQuiz ? '✓ Correto!' : 'Resposta correta:'}</strong></p>
                <p>{questaoAtualQuiz.explicacao}</p>
              </div>
            )}
            <div className="aulas-destrinchadas__quiz-navegacao">
              {!mostrarResultadoQuiz ? (
                <button type="button" className="aulas-destrinchadas__quiz-btn" onClick={responderQuiz} disabled={respostaQuiz === null}>
                  Responder
                </button>
              ) : (
                <>
                  <button type="button" className="aulas-destrinchadas__quiz-btn aulas-destrinchadas__quiz-btn--sec" onClick={anteriorQuiz} disabled={indiceQuiz === 0}>
                    Anterior
                  </button>
                  {mostrandoUltima ? (
                    <button type="button" className="aulas-destrinchadas__quiz-btn" onClick={irParaResumoQuiz}>
                      Ver resumo
                    </button>
                  ) : (
                    <button type="button" className="aulas-destrinchadas__quiz-btn" onClick={proximaQuiz}>
                      Próxima
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
          <button type="button" className="aulas-destrinchadas__quiz-voltar" onClick={voltarConteudo}>
            Voltar ao conteúdo
          </button>
        </div>
      </div>
    );
  }

  // ---------- Quiz: resumo ----------
  if (quizModo === QUIZ_MODOS.resumo) {
    const pct = historicoQuiz.total > 0 ? Math.round((historicoQuiz.acertos / historicoQuiz.total) * 100) : 0;
    const erradas = historicoQuestoesQuiz.filter((h) => !h.acertou);
    return (
      <div className="aulas-destrinchadas">
        <div className="aulas-destrinchadas__quiz-resumo">
          <h2 className="aulas-destrinchadas__quiz-titulo">Resumo do quiz</h2>
          <div className="aulas-destrinchadas__quiz-resumo-stats" role="status">
            <p><strong>Acertos:</strong> {historicoQuiz.acertos} de {historicoQuiz.total} ({pct}%)</p>
            <p><strong>Erros:</strong> {historicoQuiz.total - historicoQuiz.acertos}</p>
          </div>
          {erradas.length > 0 && (
            <section className="aulas-destrinchadas__quiz-resumo-erradas" aria-label="Questões erradas para revisão">
              <h3>Revisar questões erradas</h3>
              <ul className="aulas-destrinchadas__quiz-resumo-lista">
                {erradas.map((h, idx) => (
                  <li key={h.id || idx} className="aulas-destrinchadas__quiz-resumo-item">
                    <p className="aulas-destrinchadas__quiz-resumo-pergunta">{h.questao?.pergunta}</p>
                    <p className="aulas-destrinchadas__quiz-resumo-explicacao">{h.questao?.explicacao}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <div className="aulas-destrinchadas__quiz-acoes">
            {erradas.length > 0 && (
              <button type="button" className="aulas-destrinchadas__quiz-btn aulas-destrinchadas__quiz-btn--sec" onClick={revisarErradasQuiz}>
                Revisar só erradas
              </button>
            )}
            <button type="button" className="aulas-destrinchadas__quiz-btn" onClick={() => setQuizModo(QUIZ_MODOS.inicio)}>
              Novo quiz
            </button>
            <button type="button" className="aulas-destrinchadas__quiz-btn aulas-destrinchadas__quiz-btn--sec" onClick={voltarConteudo}>
              Voltar ao conteúdo
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------- Conteúdo normal (16 aulas) ----------
  return (
    <div className="aulas-destrinchadas">
      <header className="aulas-destrinchadas__hero">
        <h1 className="aulas-destrinchadas__titulo">Destrinchando as 16 Aulas</h1>
        <p className="aulas-destrinchadas__subtitulo">
          Conteúdo das apostilas organizado em 4 páginas temáticas: Fundamentos e Ameaças, Serviços e Controles, Ferramentas e Corporativo, Políticas e Acesso.
        </p>
        <div className="aulas-destrinchadas__hero-acoes">
          <button type="button" className="aulas-destrinchadas__quiz-cta" onClick={() => setQuizModo(QUIZ_MODOS.inicio)}>
            📝 Quiz — 150 perguntas
          </button>
        </div>
      </header>

      <div className="aulas-destrinchadas__paginas">
        {paginasAulas.map((pagina) => (
          <section
            key={pagina.id}
            className="aulas-destrinchadas__secao"
            style={{ borderLeftColor: pagina.cor }}
          >
            <h2 className="aulas-destrinchadas__secao-titulo">
              <span className="aulas-destrinchadas__secao-num" aria-hidden>Pág. {pagina.ordem}</span>
              {pagina.titulo}
            </h2>
            <p className="aulas-destrinchadas__secao-sub">{pagina.subtitulo}</p>

            <ul className="aulas-destrinchadas__lista" aria-label={`Aulas da seção ${pagina.titulo}`}>
              {pagina.aulas.map((aula) => {
                const isAberta = aulaAberta === aula.id;
                return (
                  <li key={aula.id} className="aulas-destrinchadas__item">
                    <button
                      type="button"
                      className={`aulas-destrinchadas__trigger ${isAberta ? 'aulas-destrinchadas__trigger--aberto' : ''}`}
                      onClick={() => setAulaAberta(isAberta ? null : aula.id)}
                      aria-expanded={isAberta}
                      aria-controls={`aula-${aula.id}`}
                      id={`trigger-${aula.id}`}
                    >
                      <span className="aulas-destrinchadas__trigger-texto">{aula.titulo}</span>
                      <span className="aulas-destrinchadas__trigger-icon" aria-hidden>{isAberta ? '▼' : '▶'}</span>
                    </button>
                    <div
                      id={`aula-${aula.id}`}
                      role="region"
                      aria-labelledby={`trigger-${aula.id}`}
                      className={`aulas-destrinchadas__conteudo ${isAberta ? 'aulas-destrinchadas__conteudo--aberto' : ''}`}
                      hidden={!isAberta}
                    >
                      <div
                        className="aulas-destrinchadas__conteudo-body"
                        dangerouslySetInnerHTML={{ __html: formatarConteudo(aula.conteudo ?? '') }}
                      />
                      {aula.pdfArquivo && (
                        <div className="aulas-destrinchadas__pdf-wrap">
                          <a
                            href={`${(import.meta.env.BASE_URL || '/').replace(/\/?$/, '/')}apostilas/${aula.pdfArquivo}`}
                            download={aula.pdfArquivo}
                            className="aulas-destrinchadas__pdf-link"
                          >
                            📥 Baixar PDF
                          </a>
                          <a
                            href={`${(import.meta.env.BASE_URL || '/').replace(/\/?$/, '/')}apostilas/${aula.pdfArquivo}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="aulas-destrinchadas__pdf-link"
                          >
                            📄 Abrir em nova aba
                          </a>
                          <iframe
                            title={`Apostila ${aula.titulo}`}
                            src={`${(import.meta.env.BASE_URL || '/').replace(/\/?$/, '/')}apostilas/${aula.pdfArquivo}#toolbar=1`}
                            className="aulas-destrinchadas__pdf-iframe"
                          />
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
