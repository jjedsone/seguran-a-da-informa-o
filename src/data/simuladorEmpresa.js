// Cyber Defense Simulator – dados do jogo
// Três métricas: Segurança, Financeiro, Reputação (0–100)
// Setores com risco diferente; infraestrutura por categoria; eventos com consequências

export const setores = [
  { id: 'banco', nome: 'Banco', risco: 'Alta segurança necessária; ataques frequentes.', segInicial: 45 },
  { id: 'hospital', nome: 'Hospital', risco: 'Dados sensíveis (LGPD); alvo de ransomware.', segInicial: 40 },
  { id: 'ecommerce', nome: 'E-commerce', risco: 'Foco em fraude e roubo de cartão; disponibilidade crítica.', segInicial: 45 },
  { id: 'startup', nome: 'Startup de tecnologia', risco: 'Rápido crescimento; muitas vezes segurança em segundo plano.', segInicial: 50 },
  { id: 'governo', nome: 'Governo', risco: 'Dados públicos e sigilo; alvo de APT e espionagem.', segInicial: 40 },
];

// Infraestrutura: uma escolha por categoria. Cada opção altera seg, fin, rep.
export const categoriasInfra = [
  {
    id: 'rede',
    titulo: 'Rede',
    opcoes: [
      { id: 'vlan', nome: 'VLANs separadas', desc: 'Segmentação por setor; contém ataques.', seg: 18, fin: -5, rep: 5 },
      { id: 'unica', nome: 'Rede única sem segmentação', desc: 'Todos na mesma rede; risco alto.', seg: -15, fin: 0, rep: -10 },
    ],
  },
  {
    id: 'firewall',
    titulo: 'Firewall',
    opcoes: [
      { id: 'ngfw', nome: 'Firewall avançado (NGFW)', desc: 'Inspeção de aplicação e ameaças.', seg: 20, fin: -10, rep: 8 },
      { id: 'basico', nome: 'Firewall básico', desc: 'Filtro por IP e porta.', seg: 10, fin: -2, rep: 3 },
      { id: 'nenhum', nome: 'Sem firewall', desc: 'Rede exposta.', seg: -25, fin: 0, rep: -15 },
    ],
  },
  {
    id: 'backup',
    titulo: 'Backup',
    opcoes: [
      { id: 'offline', nome: 'Backup offline', desc: 'Melhor opção; resiste a ransomware.', seg: 22, fin: -8, rep: 10 },
      { id: 'nuvem', nome: 'Backup na nuvem', desc: 'Cópias remotas; testar restauração.', seg: 15, fin: -5, rep: 5 },
      { id: 'local', nome: 'Backup local', desc: 'Risco se houver ransomware na rede.', seg: 8, fin: -2, rep: 2 },
      { id: 'sem', nome: 'Sem backup', desc: 'Perda total em incidente.', seg: -20, fin: 0, rep: -20 },
    ],
  },
  {
    id: 'autenticacao',
    titulo: 'Autenticação',
    opcoes: [
      { id: 'mfa', nome: 'MFA (multi-fator)', desc: 'Senha + token/app; referência.', seg: 20, fin: -3, rep: 10 },
      { id: 'forte', nome: 'Senha forte', desc: 'Política de complexidade e troca.', seg: 10, fin: 0, rep: 3 },
      { id: 'simples', nome: 'Senha simples', desc: 'Alto risco de comprometimento.', seg: -15, fin: 0, rep: -10 },
    ],
  },
  {
    id: 'monitoramento',
    titulo: 'Monitoramento',
    opcoes: [
      { id: 'soc', nome: 'SOC', desc: 'Centro de operações 24/7; detecção e resposta.', seg: 25, fin: -15, rep: 12 },
      { id: 'siem', nome: 'SIEM', desc: 'Agregação de logs e alertas.', seg: 18, fin: -8, rep: 8 },
      { id: 'logs', nome: 'Logs simples', desc: 'Registro básico; pouca correlação.', seg: 5, fin: 0, rep: 2 },
      { id: 'nenhum', nome: 'Nenhum', desc: 'Operar no escuro.', seg: -20, fin: 0, rep: -15 },
    ],
  },
];

// Eventos de operação: cada opção altera seg, fin, rep
export const eventos = [
  {
    id: 'e1',
    titulo: 'E-mail suspeito (phishing)',
    texto: 'Um funcionário recebeu um e-mail com link pedindo "atualizar senha" do sistema. O que a empresa orienta?',
    opcoes: [
      { texto: 'Reportar ao TI e não clicar; enviar aviso geral sobre phishing.', seg: 15, fin: 0, rep: 8 },
      { texto: 'Abrir o link para verificar.', seg: -25, fin: -15, rep: -20 },
      { texto: 'Ignorar.', seg: -10, fin: 0, rep: -5 },
    ],
  },
  {
    id: 'e2',
    titulo: 'Vulnerabilidade no servidor',
    texto: 'Um servidor crítico está desatualizado e um CVE foi divulgado. O que fazer?',
    opcoes: [
      { texto: 'Atualizar sistema em janela de manutenção e validar.', seg: 20, fin: -2, rep: 10 },
      { texto: 'Agendar manutenção para o próximo mês.', seg: 2, fin: 0, rep: -2 },
      { texto: 'Ignorar; sistema está estável.', seg: -30, fin: -25, rep: -25 },
    ],
  },
  {
    id: 'e3',
    titulo: 'Ransomware detectado',
    texto: 'Arquivos foram criptografados e há aviso de resgate na tela. Qual decisão?',
    opcoes: [
      { texto: 'Restaurar backup (isolando o host e verificando escopo).', seg: 25, fin: -5, rep: 15 },
      { texto: 'Pagar resgate.', seg: -20, fin: -40, rep: -30 },
      { texto: 'Tentar recuperar manualmente sem backup.', seg: -35, fin: -30, rep: -35 },
    ],
  },
  {
    id: 'e4',
    titulo: 'Ataque DDoS',
    texto: 'O servidor começa a receber milhões de requisições; site fora do ar. O que fazer?',
    opcoes: [
      { texto: 'Ativar mitigação (CDN/provedor ou WAF).', seg: 18, fin: -5, rep: 10 },
      { texto: 'Desligar servidor temporariamente.', seg: 0, fin: -20, rep: -15 },
      { texto: 'Ignorar e esperar passar.', seg: -25, fin: -35, rep: -30 },
    ],
  },
  {
    id: 'e5',
    titulo: 'Backup nunca testado',
    texto: 'A equipe descobre que a restauração do backup nunca foi testada. O que fazer?',
    opcoes: [
      { texto: 'Testar restauração imediatamente e agendar testes trimestrais.', seg: 20, fin: 0, rep: 8 },
      { texto: 'Testar uma vez e documentar.', seg: 10, fin: 0, rep: 3 },
      { texto: 'Deixar como está; backup está rodando.', seg: -20, fin: 0, rep: -10 },
    ],
  },
  {
    id: 'e6',
    titulo: 'Possível vazamento de dados',
    texto: 'Suspeita de que dados de clientes foram acessados por terceiro não autorizado. Próximo passo?',
    opcoes: [
      { texto: 'Abrir incidente, isolar sistemas, avaliar escopo e notificar ANPD/LGPD se necessário.', seg: 15, fin: -10, rep: 5 },
      { texto: 'Investigar internamente sem formalizar.', seg: 0, fin: 0, rep: -15 },
      { texto: 'Não divulgar e seguir operação.', seg: -30, fin: -25, rep: -40 },
    ],
  },
];

const clamp = (v) => Math.min(100, Math.max(0, v));

export function getResultado(seguranca, financeiro, reputacao) {
  const s = clamp(seguranca);
  const f = clamp(financeiro);
  const r = clamp(reputacao);
  const media = (s + f + r) / 3;

  if (media >= 65 && s >= 55 && r >= 50) {
    return {
      nivel: 'blindada',
      titulo: 'Empresa blindada',
      mensagem: 'Infraestrutura forte e decisões corretas. Ataques foram contidos; segurança, finanças e reputação estão sólidos. A empresa é referência em proteção digital.',
      dica: 'Curso: aprofunde Resposta a Incidentes, SOC e Defesa em Profundidade.',
    };
  }
  if (media >= 35 || (s >= 30 && f >= 25)) {
    return {
      nivel: 'risco',
      titulo: 'Empresa em risco',
      mensagem: 'Algumas falhas e decisões deixaram a empresa vulnerável. Há possibilidade de incidentes; é hora de reforçar backup, MFA, segmentação e resposta a incidentes.',
      dica: 'Curso: Backup e Restauração, Políticas de Senha, Tratamento de Incidentes.',
    };
  }
  return {
    nivel: 'comprometida',
    titulo: 'Empresa comprometida',
    mensagem: 'Dados podem ter vazado, operação interrompida ou prejuízo grave. Decisões ruins ou infraestrutura fraca levaram ao colapso. Reconstrua com firewall, backup, MFA e treinamento.',
    dica: 'Curso: do zero – Fundamentos, Infraestrutura de TI, Resposta a Incidentes.',
  };
}

export const METRICAS_INICIAIS = { seguranca: 50, financeiro: 50, reputacao: 50 };
export const MIN_METRICA = 0;
export const MAX_METRICA = 100;
