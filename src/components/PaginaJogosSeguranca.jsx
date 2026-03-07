import { useState } from 'react';
import { fasesCicloAtaque, cenarioDefesa } from '../data/jogosSeguranca';
import './PaginaJogosSeguranca.css';

const AVISO_LEGAL = 'Este conteúdo é apenas educacional. Conhecer o ciclo do ataque ajuda a defender. Acesso não autorizado a sistemas é crime (Art. 154-A). Use apenas em ambientes próprios ou com autorização por escrito.';

// Total de perguntas no Ciclo do Ataque (todas as fases)
const TOTAL_PERGUNTAS_ATAQUE = fasesCicloAtaque.reduce((s, f) => s + (f.perguntas?.length ?? 0), 0);

// ========== JOGO 1: CICLO DO ATAQUE ==========
function JogoCicloAtaque({ onVoltar }) {
  const [faseAtual, setFaseAtual] = useState(0);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostaMostrada, setRespostaMostrada] = useState(false);
  const [escolhida, setEscolhida] = useState(null);

  const fase = fasesCicloAtaque[faseAtual];
  const perguntasDaFase = fase.perguntas ?? [];
  const item = perguntasDaFase[perguntaAtual];
  const isUltimaPerguntaDaFase = perguntaAtual === perguntasDaFase.length - 1;
  const isUltimaFase = faseAtual === fasesCicloAtaque.length - 1;
  const isFimDoJogo = isUltimaFase && isUltimaPerguntaDaFase;
  const indiceGlobal = fasesCicloAtaque.slice(0, faseAtual).reduce((s, f) => s + (f.perguntas?.length ?? 0), 0) + perguntaAtual + 1;

  const handleResponder = (opcao) => {
    if (respostaMostrada) return;
    setEscolhida(opcao);
    setRespostaMostrada(true);
  };

  const handleProximo = () => {
    setRespostaMostrada(false);
    setEscolhida(null);
    if (isFimDoJogo) {
      onVoltar();
      return;
    }
    if (!isUltimaPerguntaDaFase) {
      setPerguntaAtual((p) => p + 1);
    } else {
      setFaseAtual((i) => i + 1);
      setPerguntaAtual(0);
    }
  };

  return (
    <div className="jogos">
      <header className="jogos__header jogos__header--ataque">
        <button type="button" className="jogos__btn-voltar" onClick={onVoltar}>
          ← Voltar aos jogos
        </button>
        <h1 className="jogos__titulo-jogo">Ciclo do Ataque</h1>
        <p className="jogos__subtitulo">Do básico ao avançado: reconhecer as fases para defender melhor</p>
        <div className="jogos__progresso">
          <div
            className="jogos__progresso-bar"
            style={{ width: `${(indiceGlobal / TOTAL_PERGUNTAS_ATAQUE) * 100}%` }}
          />
          <span className="jogos__progresso-texto">
            Pergunta {indiceGlobal} de {TOTAL_PERGUNTAS_ATAQUE}
          </span>
        </div>
      </header>

      <main className="jogos__fase">
        <section className="jogos__fase-card">
          <h2 className="jogos__fase-nome">
            <span className="jogos__fase-icone" aria-hidden>{fase.icone}</span>
            {fase.nome}
          </h2>
          <p className="jogos__fase-desc">{fase.descricao}</p>
          <div className="jogos__tecnicas">
            <strong>Técnicas comuns:</strong>
            <ul>
              {fase.tecnicas.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="jogos__pergunta">
          {item && (
            <>
              <p className="jogos__pergunta-texto">{item.pergunta}</p>
              <ul className="jogos__opcoes">
                {item.opcoes.map((op, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      className={`jogos__opcao ${respostaMostrada ? (op.correto ? 'jogos__opcao--certa' : op === escolhida ? 'jogos__opcao--errada' : '') : ''}`}
                      onClick={() => handleResponder(op)}
                      disabled={respostaMostrada}
                    >
                      {op.texto}
                    </button>
                  </li>
                ))}
              </ul>
              {respostaMostrada && (
                <div className={`jogos__feedback ${escolhida?.correto ? 'jogos__feedback--certo' : 'jogos__feedback--errado'}`}>
                  <p>{item.feedback}</p>
                  <button type="button" className="jogos__btn-proximo" onClick={handleProximo}>
                    {isFimDoJogo ? 'Concluir e voltar' : 'Próxima pergunta →'}
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </main>

      <p className="jogos__aviso">{AVISO_LEGAL}</p>
    </div>
  );
}

// ========== JOGO 2: DEFESA EM AÇÃO ==========
function JogoDefesa({ onVoltar }) {
  const [cenarioAtual, setCenarioAtual] = useState(0);
  const [escolhida, setEscolhida] = useState(null);
  const [mostrarFeedback, setMostrarFeedback] = useState(false);
  const [pontos, setPontos] = useState(0);

  const cenario = cenarioDefesa[cenarioAtual];
  const isUltimo = cenarioAtual === cenarioDefesa.length - 1;

  const handleEscolher = (opcao) => {
    if (mostrarFeedback) return;
    setEscolhida(opcao);
    setMostrarFeedback(true);
    if (opcao.correto) setPontos((p) => p + 1);
  };

  const handleProximo = () => {
    setEscolhida(null);
    setMostrarFeedback(false);
    if (isUltimo) onVoltar();
    else setCenarioAtual((i) => i + 1);
  };

  const finalizado = mostrarFeedback && isUltimo;

  return (
    <div className="jogos">
      <header className="jogos__header jogos__header--defesa">
        <button type="button" className="jogos__btn-voltar" onClick={onVoltar}>
          ← Voltar aos jogos
        </button>
        <h1 className="jogos__titulo-jogo">Defesa em Ação</h1>
        <p className="jogos__subtitulo">Cenários reais: escolha a melhor resposta de defesa</p>
        <div className="jogos__progresso">
          <div
            className="jogos__progresso-bar"
            style={{ width: `${((cenarioAtual + 1) / cenarioDefesa.length) * 100}%` }}
          />
          <span className="jogos__progresso-texto">
            Cenário {cenarioAtual + 1} de {cenarioDefesa.length} · {pontos} acertos
          </span>
        </div>
      </header>

      {!finalizado ? (
        <main className="jogos__cenario">
          <section className="jogos__cenario-card">
            <h2 className="jogos__cenario-titulo">{cenario.titulo}</h2>
            <p className="jogos__cenario-texto">{cenario.cenario}</p>
          </section>
          <section className="jogos__pergunta">
            <p className="jogos__pergunta-label">O que você faz?</p>
            <ul className="jogos__opcoes">
              {cenario.opcoes.map((op, i) => (
                <li key={i}>
                  <button
                    type="button"
                    className={`jogos__opcao ${mostrarFeedback ? (op.correto ? 'jogos__opcao--certa' : op === escolhida ? 'jogos__opcao--errada' : '') : ''}`}
                    onClick={() => handleEscolher(op)}
                    disabled={mostrarFeedback}
                  >
                    {op.texto}
                  </button>
                </li>
              ))}
            </ul>
            {mostrarFeedback && escolhida && (
              <div className={`jogos__feedback ${escolhida.correto ? 'jogos__feedback--certo' : 'jogos__feedback--errado'}`}>
                <p>{escolhida.feedback}</p>
                <button type="button" className="jogos__btn-proximo" onClick={handleProximo}>
                  {isUltimo ? 'Ver resultado final' : 'Próximo cenário →'}
                </button>
              </div>
            )}
          </section>
        </main>
      ) : (
        <main className="jogos__resultado">
          <h2 className="jogos__resultado-titulo">Resultado</h2>
          <p className="jogos__resultado-pontos">
            Você acertou <strong>{pontos}</strong> de <strong>{cenarioDefesa.length}</strong> cenários.
          </p>
          <p className="jogos__resultado-msg">
            {pontos === cenarioDefesa.length
              ? 'Excelente! Suas respostas de defesa estão alinhadas às melhores práticas.'
              : pontos >= cenarioDefesa.length / 2
                ? 'Bom trabalho! Revise os cenários em que errou para reforçar a defesa.'
                : 'Vale revisar os conceitos de resposta a incidentes e conscientização para melhorar na próxima.'}
          </p>
          <button type="button" className="jogos__btn-proximo" onClick={onVoltar}>
            ← Voltar aos jogos
          </button>
        </main>
      )}
    </div>
  );
}

// ========== MENU PRINCIPAL ==========
export default function PaginaJogosSeguranca() {
  const [modo, setModo] = useState('menu'); // 'menu' | 'ataque' | 'defesa'

  if (modo === 'ataque') return <JogoCicloAtaque onVoltar={() => setModo('menu')} />;
  if (modo === 'defesa') return <JogoDefesa onVoltar={() => setModo('menu')} />;

  return (
    <div className="jogos jogos--menu">
      <header className="jogos__header">
        <span className="jogos__badge">Educativo</span>
        <h1 className="jogos__titulo">Jogos de Segurança</h1>
        <p className="jogos__subtitulo">
          Aprenda o ciclo do ataque (do básico ao avançado) e pratique decisões de defesa em cenários reais.
        </p>
      </header>
      <main className="jogos__grid">
        <article className="jogos__card" onClick={() => setModo('ataque')}>
          <span className="jogos__card-icone" aria-hidden>🎯</span>
          <h2 className="jogos__card-titulo">Ciclo do Ataque</h2>
          <p className="jogos__card-desc">
            Conheça as fases: reconhecimento, varredura, acesso inicial, escalação, persistência e exfiltração. Entenda onde o atacante “entra” e como age para defender melhor.
          </p>
          <span className="jogos__card-cta">Jogar →</span>
        </article>
        <article className="jogos__card" onClick={() => setModo('defesa')}>
          <span className="jogos__card-icone" aria-hidden>🛡️</span>
          <h2 className="jogos__card-titulo">Defesa em Ação</h2>
          <p className="jogos__card-desc">
            Cenários práticos: phishing, brute force, ransomware, dispositivo desconhecido, conta comprometida e mais. Escolha a melhor resposta e aprenda com o feedback.
          </p>
          <span className="jogos__card-cta">Jogar →</span>
        </article>
      </main>
      <p className="jogos__aviso jogos__aviso--menu">{AVISO_LEGAL}</p>
    </div>
  );
}
