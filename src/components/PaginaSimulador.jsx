import { useState, useMemo } from 'react';
import {
  setores,
  categoriasInfra,
  eventos,
  getResultado,
  METRICAS_INICIAIS,
  MIN_METRICA,
  MAX_METRICA,
} from '../data/simuladorEmpresa';
import './PaginaSimulador.css';

function clamp(v) {
  return Math.min(MAX_METRICA, Math.max(MIN_METRICA, v));
}

function Medidores({ seguranca, financeiro, reputacao }) {
  return (
    <div className="simulador__medidores" aria-label="Métricas da empresa">
      <div className="simulador__medidor">
        <span className="simulador__medidor-label">Segurança</span>
        <div className="simulador__medidor-bar">
          <div className="simulador__medidor-fill simulador__medidor-fill--seg" style={{ width: `${seguranca}%` }} />
        </div>
        <span className="simulador__medidor-valor">{seguranca}</span>
      </div>
      <div className="simulador__medidor">
        <span className="simulador__medidor-label">Financeiro</span>
        <div className="simulador__medidor-bar">
          <div className="simulador__medidor-fill simulador__medidor-fill--fin" style={{ width: `${financeiro}%` }} />
        </div>
        <span className="simulador__medidor-valor">{financeiro}</span>
      </div>
      <div className="simulador__medidor">
        <span className="simulador__medidor-label">Reputação</span>
        <div className="simulador__medidor-bar">
          <div className="simulador__medidor-fill simulador__medidor-fill--rep" style={{ width: `${reputacao}%` }} />
        </div>
        <span className="simulador__medidor-valor">{reputacao}</span>
      </div>
    </div>
  );
}

export default function PaginaSimulador() {
  const [etapa, setEtapa] = useState('inicio');
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [setorId, setSetorId] = useState('');
  const [infraEscolhas, setInfraEscolhas] = useState({});
  const [metricas, setMetricas] = useState({ ...METRICAS_INICIAIS });
  const [eventoIndex, setEventoIndex] = useState(0);

  const setor = setores.find((s) => s.id === setorId);
  const todosInfraEscolhidos = useMemo(() => {
    return categoriasInfra.every((cat) => infraEscolhas[cat.id]);
  }, [infraEscolhas]);

  const avancarParaInfra = () => {
    if (!nomeEmpresa.trim() || !setorId) return;
    const segInicial = setor ? setor.segInicial : METRICAS_INICIAIS.seguranca;
    setMetricas({ ...METRICAS_INICIAIS, seguranca: segInicial });
    setEtapa('infra');
  };

  const escolherInfra = (categoriaId, opcao) => {
    setInfraEscolhas((prev) => ({ ...prev, [categoriaId]: opcao.id }));
  };

  const avancarParaEventos = () => {
    if (!todosInfraEscolhidos) return;
    let seg = metricas.seguranca;
    let fin = metricas.financeiro;
    let rep = metricas.reputacao;
    categoriasInfra.forEach((cat) => {
      const opId = infraEscolhas[cat.id];
      const op = cat.opcoes.find((o) => o.id === opId);
      if (op) {
        seg += op.seg;
        fin += op.fin;
        rep += op.rep;
      }
    });
    setMetricas({ seguranca: clamp(seg), financeiro: clamp(fin), reputacao: clamp(rep) });
    setEtapa('eventos');
  };

  const escolherEvento = (op) => {
    setMetricas((m) => ({
      seguranca: clamp(m.seguranca + op.seg),
      financeiro: clamp(m.financeiro + op.fin),
      reputacao: clamp(m.reputacao + op.rep),
    }));
    if (eventoIndex + 1 >= eventos.length) {
      setEtapa('resultado');
    } else {
      setEventoIndex((i) => i + 1);
    }
  };

  const reiniciar = () => {
    setEtapa('inicio');
    setNomeEmpresa('');
    setSetorId('');
    setInfraEscolhas({});
    setMetricas({ ...METRICAS_INICIAIS });
    setEventoIndex(0);
  };

  const eventoAtual = eventos[eventoIndex];
  const resultado = etapa === 'resultado' ? getResultado(metricas.seguranca, metricas.financeiro, metricas.reputacao) : null;

  return (
    <div className="simulador">
      <header className="simulador__header">
        <h1 className="simulador__titulo">Cyber Defense Simulator</h1>
        <p className="simulador__subtitulo">
          Você é o CISO ou Analista de Segurança. Crie a empresa, monte a infraestrutura de TI e reaja a ataques reais. Cada decisão altera Segurança, Financeiro e Reputação.
        </p>
        {etapa !== 'inicio' && etapa !== 'resultado' && (
          <Medidores seguranca={metricas.seguranca} financeiro={metricas.financeiro} reputacao={metricas.reputacao} />
        )}
      </header>

      <main className="simulador__main">
        {etapa === 'inicio' && (
          <section className="simulador__etapa">
            <p className="simulador__intro">
              Decisões ruins podem levar a vazamento de dados, perda de dinheiro, parada de operações ou falha digital. Boas decisões tornam a empresa referência em segurança. Setores como Banco e Hospital exigem mais proteção; você escolhe rede (VLANs ou não), firewall, backup, autenticação (MFA ou senha) e monitoramento (SOC, SIEM ou nenhum). Depois enfrenta eventos como phishing, ransomware e DDoS.
            </p>
            <button type="button" className="simulador__btn simulador__btn--primario" onClick={() => setEtapa('empresa')}>
              Começar
            </button>
          </section>
        )}

        {etapa === 'empresa' && (
          <section className="simulador__etapa">
            <h2 className="simulador__etapa-titulo">Fase 1 – Criação da empresa</h2>
            <label className="simulador__label">
              Nome da empresa
              <input
                type="text"
                className="simulador__input"
                value={nomeEmpresa}
                onChange={(e) => setNomeEmpresa(e.target.value)}
                placeholder="Ex.: SecureBank"
              />
            </label>
            <label className="simulador__label">
              Setor de atuação (cada um tem nível de risco diferente)
              <select className="simulador__select" value={setorId} onChange={(e) => setSetorId(e.target.value)}>
                <option value="">Selecione</option>
                {setores.map((s) => (
                  <option key={s.id} value={s.id}>{s.nome}</option>
                ))}
              </select>
            </label>
            {setor && <p className="simulador__setor-risco">{setor.risco}</p>}
            <button
              type="button"
              className="simulador__btn simulador__btn--primario"
              onClick={avancarParaInfra}
              disabled={!nomeEmpresa.trim() || !setorId}
            >
              Próximo – Construir infraestrutura
            </button>
          </section>
        )}

        {etapa === 'infra' && (
          <section className="simulador__etapa">
            <h2 className="simulador__etapa-titulo">Fase 2 – Infraestrutura de TI – {nomeEmpresa}</h2>
            <p className="simulador__etapa-desc">Escolha uma opção por categoria. Cada escolha altera Segurança, Financeiro e Reputação.</p>
            {categoriasInfra.map((cat) => (
              <div key={cat.id} className="simulador__categoria">
                <h3 className="simulador__categoria-titulo">{cat.titulo}</h3>
                <ul className="simulador__opcoes-infra">
                  {cat.opcoes.map((op) => (
                    <li key={op.id}>
                      <label className={`simulador__opcao-infra ${infraEscolhas[cat.id] === op.id ? 'simulador__opcao-infra--ativa' : ''}`}>
                        <input
                          type="radio"
                          name={cat.id}
                          checked={infraEscolhas[cat.id] === op.id}
                          onChange={() => escolherInfra(cat.id, op)}
                        />
                        <span className="simulador__opcao-infra-nome">{op.nome}</span>
                        <span className="simulador__opcao-infra-desc">{op.desc}</span>
                        <span className="simulador__opcao-infra-impacto">
                          Seg {op.seg >= 0 ? '+' : ''}{op.seg} · Fin {op.fin >= 0 ? '+' : ''}{op.fin} · Rep {op.rep >= 0 ? '+' : ''}{op.rep}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <button
              type="button"
              className="simulador__btn simulador__btn--primario"
              onClick={avancarParaEventos}
              disabled={!todosInfraEscolhidos}
            >
              Próximo – Operação e eventos
            </button>
          </section>
        )}

        {etapa === 'eventos' && eventoAtual && (
          <section className="simulador__etapa simulador__etapa--evento">
            <span className="simulador__evento-progresso">Evento {eventoIndex + 1} de {eventos.length}</span>
            <h2 className="simulador__etapa-titulo">{eventoAtual.titulo}</h2>
            <p className="simulador__evento-texto">{eventoAtual.texto}</p>
            <ul className="simulador__opcoes-evento">
              {eventoAtual.opcoes.map((op, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    className="simulador__btn simulador__btn--opcao"
                    onClick={() => escolherEvento(op)}
                  >
                    {op.texto}
                    <span className="simulador__opcao-impacto">
                      Seg {op.seg >= 0 ? '+' : ''}{op.seg} · Fin {op.fin >= 0 ? '+' : ''}{op.fin} · Rep {op.rep >= 0 ? '+' : ''}{op.rep}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {etapa === 'resultado' && resultado && (
          <section className={`simulador__etapa simulador__resultado simulador__resultado--${resultado.nivel}`}>
            <h2 className="simulador__etapa-titulo">{resultado.titulo}</h2>
            <p className="simulador__resultado-empresa">{nomeEmpresa}</p>
            <Medidores
              seguranca={metricas.seguranca}
              financeiro={metricas.financeiro}
              reputacao={metricas.reputacao}
            />
            <p className="simulador__resultado-mensagem">{resultado.mensagem}</p>
            <p className="simulador__resultado-dica">
              <strong>Dica de estudo:</strong> {resultado.dica}
            </p>
            <button type="button" className="simulador__btn simulador__btn--primario" onClick={reiniciar}>
              Jogar novamente
            </button>
          </section>
        )}
      </main>
    </div>
  );
}
