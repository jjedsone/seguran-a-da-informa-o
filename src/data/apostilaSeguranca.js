/**
 * Apostila de Segurança da Informação – Do Básico ao Avançado
 * Curso complementar: Governança, IAM, Criptografia, Nuvem, AppSec, IR/Forense, Threat Intel, Física/OT, Red Team
 */

export const modulosApostila = [
  { id: 'gov', nome: 'Governança e Compliance', ordem: 1, cor: '#0ea5e9', icone: '▣' },
  { id: 'iam', nome: 'Gestão de Identidade e Acesso', ordem: 2, cor: '#8b5cf6', icone: '▣' },
  { id: 'crypto', nome: 'Criptografia Aplicada', ordem: 3, cor: '#10b981', icone: '▣' },
  { id: 'cloud', nome: 'Segurança em Nuvem', ordem: 4, cor: '#f59e0b', icone: '▣' },
  { id: 'appsec', nome: 'Segurança de Aplicações', ordem: 5, cor: '#ef4444', icone: '▣' },
  { id: 'ir', nome: 'Resposta a Incidentes e Forense', ordem: 6, cor: '#ec4899', icone: '▣' },
  { id: 'threat', nome: 'Threat Intelligence e Hunting', ordem: 7, cor: '#6366f1', icone: '▣' },
  { id: 'fisica', nome: 'Segurança Física e OT/ICS', ordem: 8, cor: '#14b8a6', icone: '▣' },
  { id: 'redteam', nome: 'Red Team e Pentest', ordem: 9, cor: '#dc2626', icone: '▣' },
  { id: 'lideranca', nome: 'Liderança e Estratégia em Segurança', ordem: 10, cor: '#0d9488', icone: '▣' },
];

export function getModuloApostila(id) {
  return modulosApostila.find((m) => m.id === id);
}

export function getCapitulosByModulo(moduloId) {
  return capitulosApostila.filter((c) => c.moduloId === moduloId).sort((a, b) => a.ordem - b.ordem);
}

export function getCapituloById(id) {
  return capitulosApostila.find((c) => c.id === id);
}

/** Busca capítulos por título ou conteúdo (para busca global). */
export function searchCapitulosApostila(termo) {
  if (!termo || !String(termo).trim()) return [];
  const t = String(termo).toLowerCase().trim();
  return capitulosApostila.filter(
    (c) =>
      c.titulo.toLowerCase().includes(t) ||
      (c.conteudo && c.conteudo.toLowerCase().includes(t))
  ).map((c) => ({
    id: c.id,
    titulo: c.titulo,
    moduloId: c.moduloId,
    moduloNome: getModuloApostila(c.moduloId)?.nome || '',
  }));
}

// Capítulos com conteúdo completo (apostila do básico ao avançado)
const capitulosApostila = [
  // ========== MÓDULO 1: GOVERNANÇA E COMPLIANCE ==========
  {
    id: 'gov-1',
    moduloId: 'gov',
    titulo: 'LGPD: fundamentos, princípios e bases legais',
    ordem: 1,
    conteudo: `# LGPD – Lei Geral de Proteção de Dados

## Objetivo
A LGPD (Lei 13.709/2018) regula o tratamento de dados pessoais no Brasil. Todo profissional de segurança precisa conhecer seus princípios e obrigações.

## Princípios (Art. 6º)
- **Finalidade**: tratar para propósitos legítimos e específicos.
- **Adequação**: compatível com as finalidades informadas.
- **Necessidade**: mínimo necessário para a finalidade.
- **Livre acesso**: titulares podem consultar seus dados.
- **Qualidade dos dados**: exatidão, clareza e atualização.
- **Transparência**: informações claras sobre o tratamento.
- **Segurança**: medidas técnicas e administrativas.
- **Prevenção**: adotar medidas para evitar danos.
- **Não discriminação**: tratamento não discriminatório.
- **Responsabilização**: demonstração de conformidade.

## Bases legais (Art. 7º)
Consentimento; execução de contrato; exercício de direitos; proteção da vida; tutela da saúde; interesses legítimos do controlador; proteção do crédito; obrigação legal; estudos por órgão de pesquisa; execução de políticas públicas; representação legal; proteção da honra e da vida.

## Direitos do titular (Art. 18)
Confirmação de tratamento; acesso; correção; anonimização, bloqueio ou eliminação; portabilidade; eliminação (com exceções); informação sobre compartilhamento; revogação do consentimento.

## ANPD
A Autoridade Nacional de Proteção de Dados fiscaliza e aplica sanções (advertência, multa, publicização da infração).`,
  },
  {
    id: 'gov-2',
    moduloId: 'gov',
    titulo: 'ISO 27001 e ISO 27002 – SGSI e controles',
    ordem: 2,
    conteudo: `# ISO/IEC 27001 e 27002

## ISO 27001 – Sistema de Gestão
A ISO 27001 define requisitos para um **Sistema de Gestão de Segurança da Informação (SGSI)**. A organização deve:
- Definir escopo do SGSI.
- Estabelecer política de segurança.
- Fazer **avaliação de riscos** (metodologia documentada).
- Tratar riscos (mitigar, aceitar, transferir, evitar).
- Selecionar controles do Anexo A (ou justificar exclusões).
- Elaborar **Declaração de Aplicabilidade (SoA)**.
- Implementar e operar os controles.
- Monitorar, medir e avaliar desempenho.
- Realizar **revisão pela direção** e melhoria contínua.
- Ciclo **PDCA** (Plan–Do–Check–Act) aplicado ao SGSI.

Certificação: auditoria por organismo acreditado (ex.: certificado ISO 27001).

## ISO 27002 – Código de prática
A ISO 27002 é um **código de prática** que detalha os controles sugeridos (não é norma de certificação). Organizada em **domínios**, por exemplo:
- Controle organizacional (políticas, segregação de funções).
- Controle de pessoas (antes, durante e após emprego).
- Controle físico e ambiental.
- Controle de comunicações e operações (gestão de capacidade, malware, backup, logs).
- Controle de acesso (gestão de acesso, controle de acesso à rede, gestão de direitos).
- Aquisição, desenvolvimento e manutenção de sistemas.
- Gestão de incidentes.
- Continuidade de negócio.

Cada controle traz **objetivo** e **orientações de implementação**. Use a 27002 para implementar os controles escolhidos na 27001.`,
  },
  {
    id: 'gov-3',
    moduloId: 'gov',
    titulo: 'NIST Cybersecurity Framework e PCI-DSS',
    ordem: 3,
    conteudo: `# NIST CSF e PCI-DSS

## NIST Cybersecurity Framework (CSF)
Framework voluntário (EUA e global) para **gestão de risco cibernético**. Estruturado em cinco **funções**:
1. **Identify** – Inventário de ativos, negócio, riscos, políticas.
2. **Protect** – Controles para limitar impacto (acesso, treinamento, dados, manutenção, proteção técnica).
3. **Detect** – Eventos de segurança (anomalias, monitoramento contínuo).
4. **Respond** – Planos de resposta a incidentes, comunicação, análise.
5. **Recover** – Planos de recuperação, melhorias.

Cada função desdobra em **categorias** e **subcategorias**. Para cada subcategoria existem **referências** (NIST 800-53, ISO 27001, etc.). A organização pode mapear sua prática atual (Profile “as is”) e definir alvo (Profile “to be”) e priorizar gaps.

## PCI-DSS (Payment Card Industry Data Security Standard)
Padrão para **proteção de dados de cartão** (número do cartão, CVV, etc.). Aplicável a comerciantes e prestadores que armazenam, processam ou transmitem dados de cartão.

**Princípios gerais:**
- Construir e manter rede segura (firewall, não usar defaults).
- Proteger dados do titular do cartão (não armazenar desnecessário; criptografia em trânsito e em repouso).
- Programa de gestão de vulnerabilidades (patch, antivírus).
- Controle de acesso (menor privilégio, identificação única).
- Monitorar e testar redes (logs, testes de segurança).
- Política de segurança da informação.

**Níveis** de conformidade dependem do volume de transações; auditoria por **QSA** (Qualified Security Assessor) ou **SAQ** (Self-Assessment Questionnaire) conforme o caso.`,
  },
  {
    id: 'gov-4',
    moduloId: 'gov',
    titulo: 'Políticas de segurança e classificação de dados',
    ordem: 4,
    conteudo: `# Políticas de Segurança e Classificação de Dados

## Políticas de segurança
Políticas são **diretrizes aprovadas pela alta direção** que definem o “que” a organização exige em segurança. Exemplos:
- **Política de segurança da informação** – Visão geral, responsabilidades, conformidade.
- **Política de controle de acesso** – Princípio do menor privilégio, gestão de identidades, revisão de acessos.
- **Política de senha** – Comprimento, complexidade, expiração, histórico, bloqueio.
- **Política de uso aceitável (AUP)** – Uso de recursos de TI, e-mail, internet.
- **Política de backup e recuperação** – Frequência, retenção, testes de restauração.
- **Política de classificação de dados** – Níveis e regras de tratamento.

Políticas devem ser **comunicadas**, **treinadas** e **auditadas**. Procedimentos e padrões desdobram o “como” implementar.

## Classificação de dados
Objetivo: tratar cada tipo de dado conforme o **nível de sensibilidade** e impacto em caso de vazamento.

**Níveis típicos:**
- **Público** – Pode ser divulgado (ex.: site institucional).
- **Interno** – Uso interno; vazamento causa baixo impacto.
- **Confidencial** – Dados de negócio ou pessoais sensíveis; acesso restrito.
- **Restrito** – Máxima proteção (segredos industriais, dados de cartão, saúde); criptografia e controle rigoroso.

Para cada nível define-se: quem pode acessar, onde armazenar, criptografia, retenção, descarte (shredding, wipe). A classificação orienta DLP, controle de acesso e resposta a incidentes.`,
  },
  {
    id: 'gov-5',
    moduloId: 'gov',
    titulo: 'BCP e DR – Continuidade de negócio e recuperação de desastres',
    ordem: 5,
    conteudo: `# BCP e DR – Continuidade e Recuperação

## Conceitos
- **BCP (Business Continuity Plan)** – Plano para manter ou retomar operações críticas durante e após uma interrupção.
- **DR (Disaster Recovery)** – Plano e procedimentos para recuperar sistemas de TI e dados após um desastre (falha, ataque, desastre natural).
- **BIA (Business Impact Analysis)** – Análise que identifica funções críticas, dependências e impacto de interrupção (financeiro, operacional, reputação). Base para definir RTO e RPO.

## RTO e RPO
- **RTO (Recovery Time Objective)** – Tempo máximo aceitável para restabelecer o serviço (ex.: 4 horas).
- **RPO (Recovery Point Objective)** – Perda máxima aceitável de dados (ex.: 1 hora de dados → backup a cada hora).

RTO e RPO orientam a escolha de soluções (backup, replicação, site secundário) e a frequência de testes.

## Estratégias de recuperação
- **Cold site** – Local preparado sem sistemas ativos; ativação demorada; menor custo.
- **Warm site** – Equipamentos parcialmente prontos; ativação em horas.
- **Hot site** – Réplica em tempo real ou quase; ativação rápida; maior custo.
- **Backup e restauração** – Mídia ou nuvem; tempo de restauração conforme tamanho e tipo (full/incremental).

## Boas práticas
Documentar planos (BCP e DRP), definir responsáveis, realizar **testes periódicos** (simulação, tabletop), revisar após mudanças ou incidentes. Normas como **ISO 22301** tratam de continuidade de negócio.`,
  },
  {
    id: 'gov-6',
    moduloId: 'gov',
    titulo: 'Segurança de e-mail: SPF, DKIM, DMARC e BEC',
    ordem: 6,
    conteudo: `# Segurança de E-mail

## SPF (Sender Policy Framework)
Registro **DNS (TXT)** que lista os servidores de e-mail **autorizados** a enviar mensagens em nome do domínio. O receptor consulta o SPF e rejeita ou marca como suspeito se o servidor de origem não estiver na lista. Reduz **spoofing** (falsificação de remetente).

## DKIM (DomainKeys Identified Mail)
**Assinatura criptográfica** do corpo e cabeçalhos da mensagem com chave privada do remetente; a chave pública é publicada em DNS. O receptor verifica a assinatura para garantir que a mensagem não foi alterada e que veio do domínio declarado. Garante **integridade** e **autenticidade**.

## DMARC (Domain-based Message Authentication, Reporting and Conformance)
Política publicada em DNS que diz ao receptor **o que fazer** quando SPF ou DKIM falham: **none** (monitorar), **quarantine** (quarentena) ou **reject** (rejeitar). Permite receber relatórios (rua/ruf) sobre falhas. Alinha SPF e DKIM e reduz phishing com o domínio.

## BEC (Business Email Compromise)
Fraude em que o atacante se passa por **executivo ou fornecedor** (e-mail comprometido ou domínio parecido) para induzir transferência de valores ou divulgação de dados. Mitigação: **treinamento**, **verificação por outro canal** (telefone, presencial), **regras de aprovação** para pagamentos e **MFA** em contas de e-mail.`,
  },
  {
    id: 'gov-7',
    moduloId: 'gov',
    titulo: 'Conscientização e awareness em segurança',
    ordem: 7,
    conteudo: `# Conscientização e Awareness em Segurança

## Objetivo
O **fator humano** é um dos principais vetores de ataque (phishing, engenharia social, senhas fracas). Conscientização reduz cliques em links maliciosos e comportamentos de risco.

## Treinamento contínuo
- **Onboarding** – Novos colaboradores devem receber noções de segurança (senha, e-mail, uso aceitável).
- **Treinamento periódico** – Conteúdo atualizado (novos golpes, exemplos reais); formato acessível (vídeos curtos, quizzes).
- **Comunicação** – Campanhas internas, dicas, alertas sobre ameaças atuais.

## Phishing simulado
- **Simulação controlada** – Envio de e-mails de teste (phishing simulado) para medir taxa de cliques e reportes.
- **Métricas** – Taxa de cliques, taxa de reporte (“denuncie este e-mail”); acompanhar evolução ao longo do tempo.
- **Feedback** – Quem clicou recebe mensagem educativa (não punitiva); reforçar como identificar e reportar.

## Cultura de segurança
- **Reportar sem medo** – Canal claro para reportar incidentes e suspeitas (e-mail, link, botão “reportar phishing”).
- **Liderança** – Gestores darem exemplo e priorizarem segurança nas decisões.
- **Reconhecimento** – Valorizar quem reporta e quem evita incidentes.`,
  },
  {
    id: 'gov-8',
    moduloId: 'gov',
    titulo: 'Análise de risco: metodologias, matriz e tratamento',
    ordem: 8,
    conteudo: `# Análise de Risco

## Conceitos
- **Risco** = probabilidade × impacto (ameaça explora vulnerabilidade e causa dano).
- **Ameaça** – O que pode acontecer (malware, invasão, desastre).
- **Vulnerabilidade** – Fraqueza que pode ser explorada (configuração, patch, senha fraca).
- **Impacto** – Consequência (financeiro, operacional, reputação, legal).

## Metodologias
- **Qualitativa** – Classificação em níveis (baixo, médio, alto, crítico) com critérios definidos.
- **Quantitativa** – Valores numéricos (SLE, ARO, ALE); mais complexa, útil quando há dados históricos.
- **BIA (Business Impact Analysis)** – Foco no impacto ao negócio; alimenta RTO/RPO e priorização.

## Matriz de risco
Tabela que cruza **probabilidade** (ou likelihood) e **impacto**; cada célula indica o **nível de risco** (ex.: alto na intersecção “probabilidade alta” e “impacto alto”). Usada para **priorizar** tratamentos.

## Tratamento
- **Mitigar** – Reduzir probabilidade ou impacto (controles, patch, treinamento).
- **Transferir** – Seguro, terceirização (parceiro assume parte do risco).
- **Aceitar** – Decisão formal de aceitar o risco residual; documentar e revisar.
- **Evitar** – Eliminar a atividade ou o ativo que gera o risco.

Risco residual é o que sobra após os controles; deve ser conhecido e aceito pela gestão.`,
  },
  {
    id: 'gov-9',
    moduloId: 'gov',
    titulo: 'Marco Civil da Internet e legislação complementar',
    ordem: 9,
    conteudo: `# Marco Civil da Internet e Legislação Complementar

## Marco Civil da Internet (Lei 12.965/2014)
Lei que estabelece **princípios, garantias e direitos** no uso da internet no Brasil.

**Princípios:** liberdade de expressão; privacidade; neutralidade da rede; preservação da natureza participativa da internet; finalidade pública da rede.

**Neutralidade de rede:** provedores não podem discriminar pacotes por conteúdo, origem ou destino (exceto requisitos técnicos ou priorização de serviços de emergência). Evita “fast lanes” pagas que prejudiquem competição e usuários.

**Guardião de dados:** provedores e aplicações devem guardar registros de conexão e de acesso a aplicações (formato e prazo em decreto); dados só podem ser entregues a terceiros por ordem judicial.

**Responsabilidade:** provedores de aplicação (redes sociais, sites) não são responsáveis por conteúdo de terceiros, salvo se não cumprirem ordem judicial de remoção; provedores de conexão não respondem por conteúdo gerado por usuários.

## Relação com segurança
- **Retenção de logs** – Prazos e formato definidos em regulamento; essenciais para investigação de crimes e resposta a incidentes.
- **Ordem judicial** – Entrega de dados a autoridades segue previsão legal; segurança da informação deve preservar evidências e atender à lei.
- **LGPD** – Complementa o Marco Civil no tratamento de dados pessoais; ambas as leis devem ser observadas.`,
  },
  {
    id: 'gov-10',
    moduloId: 'gov',
    titulo: 'Governança na prática: da política ao comitê (passo a passo)',
    ordem: 10,
    conteudo: `# Governança na Prática: Da Política ao Comitê

## Pergunta central
“Quem decide as regras da nossa segurança e como elas viram ação?”

**Metáfora:** Governança é o “conselho da cidade” – não apaga incêndio; define leis, prioridades e quem responde por quê. Sem isso, cada um faz um pouco e ninguém é dono do risco.

## Passo a passo – Implementar governança do zero

**1. Definir dono** – Quem é responsável por segurança no topo? (CISO, diretor de TI, comitê.) Sem dono, políticas não saem do papel.

**2. Primeira política** – Começar pela **política de segurança da informação** (visão geral, princípios, responsabilidades). Uma página já ajuda. Aprovar com a direção.

**3. Políticas críticas em sequência** – Senha; acesso (quem pode o quê); backup e recuperação; uso aceitável (e-mail, internet); resposta a incidentes. Cada uma: objetivo, regra, exceção, consequência.

**4. Comitê de segurança** – Reunião periódica (mensal ou trimestral) com TI, jurídico, compliance, RH e um representante da direção. Pauta: incidentes, riscos, projetos, conformidade. Ata registrada.

**5. Classificação de dados** – Definir níveis (público, interno, confidencial, restrito) e regras (“dados de cliente = confidencial; não enviar por e-mail não criptografado”). Toda governança desemboca em “o que fazer com cada tipo de dado”.

**6. Revisão e auditoria** – Políticas revisadas anualmente; auditoria (interna ou externa) para ver se a prática segue o documento.

## Exemplo real
Empresa de 100 pessoas: começou com política de senha (8 caracteres, troca a cada 90 dias) e comitê trimestral com TI, jurídico e direção. Em um ano, tinha 5 políticas e classificação básica de dados. Governança não é “documento para gaveta”; é regra que a empresa se compromete a cumprir e a revisar.`,
  },

  // ========== MÓDULO 2: GESTÃO DE IDENTIDADE E ACESSO ==========
  {
    id: 'iam-1',
    moduloId: 'iam',
    titulo: 'IAM: conceitos, identidade, autenticação e autorização',
    ordem: 1,
    conteudo: `# IAM – Identity and Access Management

## Conceitos
- **Identidade** – Representação única de um usuário, serviço ou dispositivo (ex.: conta, certificado).
- **Autenticação** – Provar que a identidade é quem diz ser (“quem é você?”).
- **Autorização** – Definir o que a identidade pode fazer (“o que você pode acessar?”).
- **Accounting/Auditoria** – Registrar o que foi feito (logs de acesso). Junto com Auth e Authz forma o **AAA**.

## Autenticação
- **Algo que você sabe** – Senha, PIN.
- **Algo que você tem** – Token, cartão, smartphone (TOTP, push).
- **Algo que você é** – Biometria (impressão digital, face).

**MFA (Multi-Factor Authentication)** combina dois ou mais fatores para reduzir risco de credenciais roubadas.

## Autorização
- **RBAC (Role-Based Access Control)** – Permissões agrupadas em **papéis** (roles); usuários recebem papéis.
- **ABAC (Attribute-Based Access Control)** – Acesso baseado em atributos (cargo, departamento, horário, sensibilidade do recurso).
- **DAC (Discretionary)** – Dono do recurso decide (ex.: permissões de arquivo no Linux).
- **MAC (Mandatory)** – Sistema aplica política central (níveis de classificação).

IAM centralizado (Active Directory, LDAP, IdP em nuvem) permite um único ponto para provisionar, revisar e desprovisionar acessos.`,
  },
  {
    id: 'iam-2',
    moduloId: 'iam',
    titulo: 'MFA, SSO e gestão de privilégios (PAM)',
    ordem: 2,
    conteudo: `# MFA, SSO e PAM

## MFA (Multi-Factor Authentication)
Dois ou mais fatores entre: conhecimento (senha), posse (token, app) e inerência (biometria). Reduz drasticamente sucesso de phishing e uso de senhas vazadas.

**Implementação:** aplicativos autenticador (TOTP), SMS (menos seguro), push no celular, FIDO2/WebAuthn (chave de segurança). Política deve exigir MFA para acesso a sistemas sensíveis e administração.

## SSO (Single Sign-On)
Um login para vários sistemas. O usuário autentica uma vez no **Identity Provider (IdP)**; os **Service Providers (SP)** confiam no IdP (protocolos **SAML**, **OAuth 2.0**, **OpenID Connect**).

**Benefícios:** menos senhas para o usuário, gestão centralizada, revogação em um ponto. **Cuidado:** comprometimento do IdP afeta todos os SP; proteger IdP com MFA e monitoramento.

## PAM (Privileged Access Management)
Gestão de **acessos privilegiados** (contas admin, root, contas de serviço).

**Práticas:**
- **Just-in-time (JIT)** – Privilégio concedido só quando necessário, por tempo limitado.
- **Vault de senhas** – Senhas de admin armazenadas em cofre; acesso via checkout com aprovação e sessão gravada.
- **Session management** – Gravação e auditoria de sessões privilegiadas.
- **LAPS** (Windows) – Senha local de administrador única por máquina e rotacionada.

PAM reduz risco de **Pass-the-Hash**, **lateral movement** e abuso de contas privilegiadas.`,
  },
  {
    id: 'iam-3',
    moduloId: 'iam',
    titulo: 'RBAC, Zero Trust e controles de acesso',
    ordem: 3,
    conteudo: `# RBAC, Zero Trust e Controles de Acesso

## RBAC (Role-Based Access Control)
Permissões são atribuídas a **roles** (ex.: “Analista SOC”, “Desenvolvedor”); usuários recebem um ou mais roles. Facilita auditoria (“quem tem acesso a X?” = quem tem o role Y) e onboarding/offboarding (atribuir/remover roles).

**Boas práticas:** menor privilégio por role; revisão periódica de roles e atribuições; evitar “role explosion” (muitos roles muito específicos).

## Zero Trust
Princípio: **nunca confie, sempre verifique**. A rede interna não é considerada segura; cada acesso é **autenticado**, **autorizado** e **inspecionado** com base em identidade, dispositivo, contexto (localização, horário) e sensibilidade do recurso.

**Elementos:**
- Identidade forte (MFA).
- Microsegmentação (rede e aplicação).
- Acesso mínimo por sessão/recurso.
- Inspeção e registro de tráfego.
- Análise contínua (comportamento, risco).

Não é um produto único; é arquitetura e cultura (NIST 800-207, CISA Zero Trust maturity).

## Controles de acesso
- **Provisioning/Deprovisioning** – Criar e encerrar contas conforme ciclo de vida (RH).
- **Revisão de acessos** – Período em que gestores confirmam se acessos ainda são necessários.
- **Segregação de funções (SoD)** – Nenhuma pessoa sozinha pode completar transação crítica (ex.: criar fornecedor e aprovar pagamento).
- **Need to know** – Acesso apenas aos dados necessários para a função.`,
  },
  {
    id: 'iam-4',
    moduloId: 'iam',
    titulo: 'IAM na prática: do login ao Zero Trust (passo a passo)',
    ordem: 4,
    conteudo: `# IAM na Prática: Do Login ao Zero Trust

## Pergunta central
“Quem pode entrar onde e como provamos que é essa pessoa?”

**Metáfora:** Identidade é o “documento do cidadão” da cidade digital. Autenticação é a checagem na porta; autorização é a lista do que aquela pessoa pode acessar. Sem IAM claro, a porta abre para quem não deveria.

## Passo a passo – IAM do zero ao controle

**1. Inventário de acessos** – Quem acessa o quê hoje? (Contas em sistemas críticos, privilégios de admin, acessos compartilhados.) Listar e classificar: crítico, importante, comum.

**2. Política de senha** – Comprimento mínimo (ex.: 12 caracteres), complexidade, troca periódica (ou não, se usar MFA e senha forte), bloqueio após X tentativas. Aplicar no diretório (AD, LDAP) e em sistemas principais.

**3. MFA nos pontos críticos** – E-mail, VPN, sistemas com dados sensíveis, administração. Passo a passo: ativar MFA por app (TOTP) ou token; comunicar e treinar; depois exigir para todos.

**4. Papéis (RBAC)** – Agrupar permissões em papéis: “Analista RH”, “Desenvolvedor”, “Admin sistema X”. Atribuir usuários aos papéis; novo colaborador recebe papéis; na saída, remover todos. Revisão semestral: “Quem ainda precisa desse acesso?”

**5. Contas privilegiadas** – Senha de admin não compartilhada; onde possível, PAM (cofre de senhas, checkout com aprovação). Conta de serviço com senha rotacionada ou identidade gerenciada.

**6. Zero Trust (evolução)** – Não confiar na rede; verificar identidade e contexto em cada acesso. Começar por: MFA em tudo que for sensível, segmentação (rede/VLAN), e “acesso mínimo por sessão”.

## Exemplo real
Empresa implementou MFA no e-mail e na VPN em 3 meses; em 6 meses tinha 4 papéis definidos (Colaborador, Gestor, TI, Admin) e revisão de acessos a cada 6 meses. Incidentes de conta comprometida caíram; tempo para desprovisionar na demissão caiu de dias para horas.`,
  },

  // ========== MÓDULO 3: CRIPTOGRAFIA APLICADA ==========
  {
    id: 'crypto-1',
    moduloId: 'crypto',
    titulo: 'TLS, certificados e PKI',
    ordem: 1,
    conteudo: `# TLS, Certificados e PKI

## TLS (Transport Layer Security)
Protocolo que garante **confidencialidade** e **integridade** entre cliente e servidor (ex.: navegador e site). Substitui SSL (obsoleto). Versões atuais: TLS 1.2 e TLS 1.3.

**Handshake:** negociação de versão, cifras e troca de chaves; servidor envia **certificado**; cliente verifica assinatura e identidade; chave de sessão é usada para cifrar o tráfego.

**Boas práticas:** desabilitar SSL e TLS 1.0/1.1; usar cifras fortes (TLS 1.3 simplifica); HSTS no servidor para forçar HTTPS.

## Certificados digitais
Certificado associa uma **chave pública** a uma **identidade** (domínio, organização). Contém: assunto (CN, O), emissor (CA), validade, chave pública, assinatura da CA.

**Cadeia de confiança:** cliente confia em **Root CA** (raiz); Root assina **Intermediate CA**; Intermediate assina o certificado do **servidor**. Navegadores e SOs trazem lista de Root CAs confiáveis.

**Let's Encrypt** – CA gratuita para certificados de domínio (ACME). Em produção empresarial: CA interna ou CA comercial (EV, OV) conforme necessidade.

## PKI (Public Key Infrastructure)
Conjunto de políticas, software e hardware para emitir, revogar e distribuir certificados. Componentes: **CA (Certificate Authority)**, **RA (Registration Authority)**, **CRL/OCSP** (revogação). Gestão de ciclo de vida (renovação, revogação em caso de comprometimento) é crítica.`,
  },
  {
    id: 'crypto-2',
    moduloId: 'crypto',
    titulo: 'Hashing, assinatura digital e gestão de chaves',
    ordem: 2,
    conteudo: `# Hashing, Assinatura Digital e Gestão de Chaves

## Hashing
Função que produz **impressão digital** de tamanho fixo. Um bit diferente na entrada altera completamente a saída. **Unidirecional** (não se recupera o dado a partir do hash).

**Uso:** integridade de arquivos (comparar hash antes/depois), armazenamento de senhas (bcrypt, Argon2, PBKDF2 – nunca MD5/SHA-1 para senha), assinaturas.

**Algoritmos:** SHA-256, SHA-3 para uso geral; MD5 e SHA-1 **não** para segurança nova (colisões conhecidas).

## Assinatura digital
Usa **chave privada** para “assinar” um documento (hash do documento cifrado com a privada). Qualquer um com a **chave pública** pode **verificar** que o documento não foi alterado e que foi assinado pelo dono da privada. Garante **integridade** e **não repúdio**.

Padrões: RSA, ECDSA. Certificado do signatário vincula a chave pública à identidade.

## Gestão de chaves
- **Ciclo de vida:** geração, armazenamento, uso, rotação, backup, destruição.
- **HSM (Hardware Security Module)** – Dispositivo que protege chaves (nunca saem do HSM); operações criptográficas dentro do hardware. Usado para CA, TDE, assinatura.
- **Key rotation** – Trocar chaves periodicamente; suportar chaves antigas durante transição (decrypt) e novas (encrypt).
- **Secret management** – Coffres (HashiCorp Vault, AWS Secrets Manager) para API keys, senhas de banco; acesso auditado e rotacionado.`,
  },
  {
    id: 'crypto-3',
    moduloId: 'crypto',
    titulo: 'Criptografia na prática: quando e como proteger (passo a passo)',
    ordem: 3,
    conteudo: `# Criptografia na Prática: Quando e Como Proteger

## Pergunta central
“Onde os dados estão e em que momento precisam estar cifrados?”

**Metáfora:** Criptografia é a “caixa-forte” e o “envelope lacrado” da cidade digital. Em repouso = dentro do cofre; em trânsito = envelope que ninguém abre no caminho. Sem isso, o “ouro” (dados) trafega e fica armazenado em claro.

## Passo a passo – Onde aplicar criptografia

**1. Em trânsito (sempre)** – Todo acesso a sistema sensível deve usar **HTTPS (TLS)**. Passo a passo: obter certificado (Let's Encrypt ou CA interna); configurar servidor web/load balancer para TLS 1.2+; ativar HSTS. E-mail entre servidores: TLS. VPN para acesso remoto: IPsec ou WireGuard.

**2. Em repouso – discos** – Dados em servidores e estações: **criptografia de disco** (BitLocker, LUKS, ou criptografia da nuvem). Passo a passo: ativar BitLocker em Windows (TPM + PIN ou senha); em Linux, LUKS na instalação ou em volumes sensíveis. Backup também criptografado.

**3. Em repouso – banco de dados** – Opções: TDE (Transparent Data Encryption) no SGBD; ou criptografia no nível do volume/armazenamento. Senhas de aplicação: nunca em texto puro; usar hash (bcrypt, Argon2) com salt.

**4. Senhas e segredos** – Senha de usuário: apenas hash irreversível. API keys e senhas de sistema: em cofre (Vault, Secrets Manager); aplicação lê no startup; rotacionar periodicamente.

**5. Assinatura e integridade** – Documentos e software: **assinar digitalmente** (certificado); o receptor verifica com a chave pública. Integridade de arquivo: hash (SHA-256) e comparar com o valor publicado.

## Exemplo real
Empresa ativou HTTPS em todos os sites e APIs em 1 mês; em 3 meses tinha BitLocker em 100% dos notebooks e TDE no banco de produção. Política: “dado sensível não trafega nem fica armazenado em texto claro”. Auditoria passou a verificar certificados e criptografia de disco.`,
  },

  // ========== MÓDULO 4: SEGURANÇA EM NUVEM ==========
  {
    id: 'cloud-1',
    moduloId: 'cloud',
    titulo: 'Modelo de responsabilidade compartilhada (AWS, Azure, GCP)',
    ordem: 1,
    conteudo: `# Modelo de Responsabilidade Compartilhada

## Ideia central
A **nuvem** é responsável pela **segurança da nuvem** (infraestrutura, hipervisor, rede física, disponibilidade do serviço). O **cliente** é responsável pela **segurança na nuvem** (dados, configuração, identidade, sistema operacional quando aplicável, rede lógica).

Quanto mais “gerenciado” o serviço (SaaS > PaaS > IaaS), mais a provedora assume; o cliente continua responsável por **dados**, **acesso** e **configurações**.

## Exemplos por camada
- **IaaS (VM, rede, disco):** Cliente: SO, patch, firewall do SO, aplicações, dados. Provedor: hardware, rede física, hipervisor.
- **PaaS (banco, função):** Cliente: dados, configuração do serviço, identidade. Provedor: runtime, SO subjacente, disponibilidade do serviço.
- **SaaS:** Cliente: dados, configurações de usuário, políticas. Provedor: aplicação, infraestrutura.

**Consequência:** inventário de ativos na nuvem, configuração segura (CIS benchmarks), gestão de identidade (IAM da nuvem), criptografia e logs são responsabilidade do cliente e devem ser tratados na política de segurança.`,
  },
  {
    id: 'cloud-2',
    moduloId: 'cloud',
    titulo: 'IAM em nuvem, VPC, KMS e boas configurações',
    ordem: 2,
    conteudo: `# IAM em Nuvem, VPC, KMS e Configuração Segura

## IAM (Identity and Access Management) na nuvem
Cada provedor (AWS IAM, Azure AD + RBAC, GCP IAM) oferece:
- **Usuários, grupos e roles** – Menor privilégio; evitar chaves de acesso root/administrador.
- **Políticas (policy)** – Permissões em formato JSON (AWS) ou YAML; preferir políticas atribuídas a roles do que a usuários fixos.
- **MFA** – Obrigatório para contas humanas e preferencialmente para console.
- **Roles temporárias** – AssumeRole (AWS), managed identity (Azure): credenciais efêmeras, sem chave longa no código.

**Boas práticas:** não usar root para operação; usar federation (SSO) quando possível; revisar políticas com ferramentas (IAM Access Analyzer, etc.).

## VPC (Virtual Private Cloud)
Rede lógica isolada. Controle: **sub-redes** (públicas/privadas), **security groups / NSGs** (firewall no nível de instância), **NACLs** (opcional, na sub-rede), **gateways** (internet, VPN, direct connect).

**Segmentação:** colocar bancos e backends em sub-redes privadas sem internet direta; apenas front/load balancer em sub-redes públicas.

## KMS (Key Management Service)
Serviço gerenciado para **chaves de criptografia**. Criptografia de dados em repouso (EBS, S3, RDS, etc.) usa chaves do KMS; rotação e auditoria centralizadas. **Customer Managed Keys (CMK)** permitem política e rotação sob controle do cliente.

## Configuração segura
- **CIS benchmarks** para AWS/Azure/GCP – Guias de hardening.
- **Config / Security Hub / GuardDuty (AWS)** – Conformidade e detecção de ameaças.
- **Azure Security Center; GCP Security Command Center** – Visibilidade e recomendações.
- **Infrastructure as Code (Terraform, CloudFormation)** – Revisão de mudanças e padrões repetíveis.`,
  },
  {
    id: 'cloud-3',
    moduloId: 'cloud',
    titulo: 'Nuvem na prática: responsabilidade e primeiros passos (passo a passo)',
    ordem: 3,
    conteudo: `# Nuvem na Prática: Responsabilidade e Primeiros Passos

## Pergunta central
“O que é nosso dever proteger e o que o provedor já cuida?”

**Metáfora:** O modelo de responsabilidade compartilhada é como um **prédio**: o provedor garante a estrutura (fundação, paredes, telhado); você cuida do que está **dentro** (portas, fechaduras, quem entra). Em nuvem: provedor = infraestrutura física e hipervisor; você = SO, rede, dados, identidade e aplicação.

## Passo a passo – Primeiro projeto em nuvem seguro

**1. Definir responsabilidades** – Ler o documento de responsabilidade compartilhada do provedor (AWS, Azure, GCP). Listar: o que eles fazem (patch do hipervisor, física do datacenter) e o que você faz (patch do SO na VM, regras de firewall, IAM, criptografia dos dados).

**2. Contas e identidade** – Não usar conta root/admin no dia a dia. Criar **usuários** ou **federation (SSO)**; **roles** para serviços e aplicações. MFA obrigatório para humanos; políticas com menor privilégio.

**3. Rede** – Criar **VPC** com sub-redes públicas e privadas. Banco e back-end em sub-rede **privada** (sem internet direta); load balancer ou front em sub-rede pública. **Security groups / NSGs**: regra mínima (só as portas necessárias).

**4. Dados** – Criptografia em repouso (geralmente ativada por padrão – S3, EBS, RDS); usar **KMS** com chave gerenciada pelo cliente quando exigido. Backup com retenção e teste de restauração.

**5. Conformidade** – Ativar **Config / Security Hub** (ou equivalente) para checagem contínua; seguir **CIS benchmarks** do provedor. Revisar recomendações semanalmente no início.

**6. Infraestrutura como código** – Terraform ou CloudFormation para criar e alterar recursos; revisão em código (merge request) antes de aplicar. Reduz “configuração manual” e documenta o ambiente.

## Exemplo real
Startup migrou o primeiro ambiente para AWS em 2 meses: VPC segmentada, RDS em sub-rede privada, IAM com roles por aplicação, S3 com encryption e versionamento. Primeira auditoria: poucos achados; correções feitas via Terraform e guardadas no repositório.`,
  },

  // ========== MÓDULO 5: SEGURANÇA DE APLICAÇÕES ==========
  {
    id: 'appsec-1',
    moduloId: 'appsec',
    titulo: 'OWASP Top 10 e vulnerabilidades web',
    ordem: 1,
    conteudo: `# OWASP Top 10 e Vulnerabilidades Web

## OWASP Top 10 (referência atualizada periodicamente)
Lista das **10 categorias de risco** mais críticas em aplicações web. Inclui, entre outras:
- **Broken Access Control** – Falha em restringir o que usuário pode acessar (IDOR, elevação de privilégio).
- **Cryptographic Failures** – Uso fraco de criptografia, dados sensíveis em texto claro.
- **Injection** – SQL, NoSQL, OS, LDAP: entrada do usuário interpretada como comando.
- **Insecure Design** – Riscos de arquitetura e fluxo (threat modeling).
- **Security Misconfiguration** – Defaults, mensagens de erro verbosas, headers faltando.
- **Vulnerable and Outdated Components** – Dependências com CVEs conhecidos.
- **Identification and Authentication Failures** – Senha fraca, sem MFA, sessão insegura.
- **Software and Data Integrity Failures** – CI/CD inseguro, atualizações não assinadas.
- **Security Logging and Monitoring Failures** – Falta de logs e detecção.
- **Server-Side Request Forgery (SSRF)** – Aplicação faz requisição a URL controlada pelo atacante.

Cada item traz exemplos, como prevenir e como testar.

## Vulnerabilidades comuns
- **SQL Injection** – Prepared statements/ORM; nunca concatenar entrada na query.
- **XSS (Cross-Site Scripting)** – Escape de saída, CSP, HttpOnly em cookies.
- **CSRF** – Token anti-CSRF, SameSite em cookies.
- **IDOR** – Validar que o recurso pertence ao usuário/sessão; não confiar em IDs na URL.`,
  },
  {
    id: 'appsec-2',
    moduloId: 'appsec',
    titulo: 'SAST, DAST e Secure SDLC',
    ordem: 2,
    conteudo: `# SAST, DAST e Secure SDLC

## SAST (Static Application Security Testing)
Análise do **código-fonte** (ou binário) **sem executar** a aplicação. Encontra padrões inseguros: SQLi, XSS, uso de funções perigosas, senhas hardcoded.

**Ferramentas:** SonarQube, Checkmarx, Fortify, Semgrep. Integração no pipeline (CI); correção pelo desenvolvedor antes do merge.

**Limitação:** falsos positivos; não vê comportamento em tempo de execução.

## DAST (Dynamic Application Security Testing)
Testa a aplicação **em execução** (black-box). Simula atacante externo: injeta entradas, analisa respostas, procura vulnerabilidades (injection, XSS, headers, configuração).

**Ferramentas:** OWASP ZAP, Burp Suite (automático ou manual), Acunetix. Útil em staging antes de produção; complementa SAST.

## Secure SDLC (S-SDLC)
Integrar segurança em **todas as fases** do ciclo de vida:
- **Requisitos** – Requisitos de segurança, privacidade, conformidade.
- **Design** – Threat modeling (STRIDE), revisão de arquitetura.
- **Implementação** – Padrões seguros, SAST, revisão de código.
- **Teste** – DAST, testes de penetração, testes de dependências (SCA).
- **Deploy** – Configuração segura, segredos em cofre.
- **Operação** – Monitoramento, resposta a incidentes, patch.

**DevSecOps** – Automação de segurança no pipeline (scan de imagem, secrets, SAST/DAST em CI/CD).`,
  },
  {
    id: 'appsec-3',
    moduloId: 'appsec',
    titulo: 'APIs seguras e proteção em produção',
    ordem: 3,
    conteudo: `# APIs Seguras e Proteção em Produção

## APIs seguras
- **Autenticação** – API key, OAuth 2.0, JWT; nunca enviar credenciais em URL.
- **Autorização** – Validar escopo e recurso para cada request; não confiar apenas em “está logado”.
- **Rate limiting** – Evitar abuso e brute force.
- **Validação de entrada** – Esquemas (JSON Schema); rejeitar payload malformado.
- **Resposta** – Não vazar stack trace ou detalhes internos em erro.
- **HTTPS** – Sempre; HSTS.
- **CORS** – Configurar origens permitidas; não usar * em produção com credenciais.

## Proteção em produção
- **WAF (Web Application Firewall)** – Filtra requisições por regras e assinaturas (SQLi, XSS); não substitui código seguro, mas adiciona camada.
- **RASP (Runtime Application Self-Protection)** – Instrumentação na aplicação para detectar e bloquear ataques em tempo real (mais caro, maior cobertura).
- **Headers de segurança** – Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security.
- **Gestão de dependências** – npm audit, Snyk, Dependabot; corrigir CVEs em libs.`,
  },
  {
    id: 'appsec-4',
    moduloId: 'appsec',
    titulo: 'DevSecOps e segurança em containers (Docker, Kubernetes)',
    ordem: 4,
    conteudo: `# DevSecOps e Segurança em Containers

## DevSecOps
Integrar **segurança no pipeline** de CI/CD: análise de código (SAST), análise de dependências (SCA), varredura de imagens de container, testes de segurança (DAST) e gestão de segredos. Objetivo: encontrar e corrigir vulnerabilidades **antes** da produção, com feedback rápido ao desenvolvedor.

## Containers (Docker)
- **Imagem** – Camadas read-only; base mínima (Alpine) reduz superfície de ataque.
- **Registry** – Fonte confiável de imagens; assinar imagens (Docker Content Trust, Notary); escanear imagens (Trivy, Clair).
- **Runtime** – Não rodar como root; usar usuário não privilegiado; limitar recursos (CPU, memória); read-only filesystem quando possível.
- **Secrets** – Não colocar senhas na imagem ou em variáveis de ambiente em texto; usar secrets do orquestrador ou cofre externo.

## Kubernetes (K8s)
- **RBAC** – Controle de acesso a recursos do cluster (roles, rolebindings).
- **Network policies** – Restringir tráfego entre pods (segmentação).
- **Secrets e ConfigMaps** – Secrets em base64 (melhor: integração com Vault, provider de nuvem).
- **Pod security** – Security context (non-root, read-only root filesystem); Pod Security Standards (restricted, baseline).
- **Audit logs** – Habilitar e monitorar ações no cluster.

Segurança em DevOps e containers é essencial para ambientes modernos de nuvem e microsserviços.`,
  },
  {
    id: 'appsec-5',
    moduloId: 'appsec',
    titulo: 'AppSec na prática: do código ao produção seguro (passo a passo)',
    ordem: 5,
    conteudo: `# AppSec na Prática: Do Código ao Produção Seguro

## Pergunta central
“Em que momento do ciclo do software inserimos segurança para não chegar vulnerável em produção?”

**Metáfora:** Segurança de aplicação é como **inspeção na linha de produção**: não adianta só testar o carro no final; cada etapa (desenho, peças, montagem) precisa de critério. No software: requisitos, design, código, build, deploy e operação.

## Passo a passo – Pipeline seguro do zero

**1. Requisitos e design** – Incluir na história/requisito: “dados sensíveis não em log”; “autenticação obrigatória”; “rate limit na API”. No design: **threat modeling** simples (STRIDE): quem ataca, o que quer, como poderia atacar este fluxo?

**2. Código** – Padrões seguros (OWASP Cheat Sheets); **nunca** concatenar entrada em SQL (usar prepared statement/ORM); escape de saída para XSS; senha e tokens nunca no código. **SAST** no commit ou no merge (SonarQube, Semgrep) para pegar padrões perigosos.

**3. Dependências** – **SCA (Software Composition Analysis)**: npm audit, Snyk, Dependabot. Corrigir CVEs conhecidos em libs; política: “build falha se vulnerabilidade crítica ou alta”.

**4. Build e imagem** – Imagem de container: base mínima (Alpine); **scan de imagem** (Trivy, Clair) no pipeline; não rodar como root. **Secrets**: não em Dockerfile nem em env em texto; usar cofre (Vault, Secrets Manager) em runtime.

**5. Teste antes de produção** – **DAST** em ambiente de staging (OWASP ZAP, Burp); testes de autenticação e autorização (acesso negado para recurso de outro usuário). Pentest periódico em aplicações críticas.

**6. Produção** – **WAF** como camada extra; **headers** de segurança (CSP, HSTS, X-Frame-Options); **monitoramento** (logs de acesso, erros, tentativas de injection). Incidente vira lição e vira regra no pipeline.

## Exemplo real
Squad passou a rodar SAST e SCA em todo merge; build quebrava se dependência com CVE crítico. Em 3 meses, zero deploy de CVE crítico; em 6 meses, primeiro threat modeling em feature nova e DAST automatizado em staging. Número de achados em pentest anual caiu.`,
  },

  // ========== MÓDULO 6: RESPOSTA A INCIDENTES E FORENSE ==========
  {
    id: 'ir-1',
    moduloId: 'ir',
    titulo: 'Ciclo de resposta a incidentes e playbooks',
    ordem: 1,
    conteudo: `# Resposta a Incidentes e Playbooks

## Ciclo de resposta (NIST, SANS)
1. **Preparação** – Planos, equipe, ferramentas, comunicação, treinamento.
2. **Identificação** – Detectar e confirmar o incidente (alertas, usuário, monitoramento).
3. **Contenção** – Limitar propagação (isolar host, bloquear IP, desativar conta, segmentar).
4. **Erradicação** – Remover causa (malware, conta comprometida, vulnerabilidade explorada).
5. **Recuperação** – Restaurar sistemas (backup íntegro), validar e retomar operações.
6. **Lições aprendidas** – Post-mortem: o que aconteceu, o que funcionou, o que melhorar.

## Playbooks
**Playbook** é um procedimento **passo a passo** para um tipo de incidente (ex.: ransomware, phishing, conta comprometida). Inclui:
- Gatilho (como reconhecer o caso).
- Primeiras ações (isolar, preservar evidência, quem avisar).
- O que **não** fazer (ex.: não pagar resgate sem decisão formal; não desligar sem imagem de disco se forense for necessária).
- Checklist de verificação (escopo, backup, comunicação).
- Escalação e encerramento.

Playbooks reduzem tempo de resposta e erro humano. Devem ser testados em exercícios (tabletop, simulação).`,
  },
  {
    id: 'ir-2',
    moduloId: 'ir',
    titulo: 'Forense: chain of custody, análise de logs e triagem',
    ordem: 2,
    conteudo: `# Forense: Cadeia de Custódia, Logs e Triagem

## Chain of custody (cadeia de custódia)
Registro de **quem** teve posse da evidência, **quando** e **como** (transferência, armazenamento). Objetivo: garantir que a evidência não foi alterada e é aceitável em processo legal ou disciplinar.

Cada transferência deve ser documentada (data, hora, nome, assinatura). Evidência em mídia (disco, pendrive) deve ser **imageada** (cópia bit a bit) e o **hash** registrado; trabalhar sobre a cópia, nunca no original.

## Análise de logs
- **Fontes:** SO (Event Viewer, auth.log), aplicação, firewall, proxy, DNS, EDR, SIEM.
- **Correlação** – Sequência de eventos (quem, quando, de onde, o quê).
- **Timeline** – Ordenar eventos para reconstruir a sequência do ataque.
- **Preservação** – Logs devem ser centralizados e imutáveis (WORM, SIEM com retenção).

## Triagem de incidentes
Classificar por **severidade** (crítico, alto, médio, baixo) e **tipo** (malware, phishing, DDoS, vazamento). Priorizar conforme impacto no negócio e critérios definidos (ex.: dados pessoais envolvidos, sistema crítico). Triagem define quem responde e em que prazo.`,
  },
  {
    id: 'ir-3',
    moduloId: 'ir',
    titulo: 'Malware básico: análise estática e dinâmica',
    ordem: 3,
    conteudo: `# Malware: Análise Estática e Dinâmica

## Análise estática
Exame do **arquivo sem executar**. Ferramentas: strings, hex editor, análise de PE (imports, seções, recursos), detecção de packer. Objetivo: indicadores (hashes, URLs, chaves de registro), comportamento provável, família.

**Cuidado:** amostras em ambiente isolado; não abrir em sistema de produção.

## Análise dinâmica
**Executar** o malware em ambiente controlado (**sandbox**) e observar: criação de arquivos, alterações de registro, tráfego de rede, processos filhos. Ferramentas: Cuckoo, Joe Sandbox, VM com ferramentas de monitoramento (Process Monitor, Wireshark).

Resultado: IOCs (IPs, domínios, hashes de arquivos criados), comportamento (backdoor, keylogger, ransomware) para alimentar detecção (SIEM, EDR) e bloqueio (firewall, proxy).

## Triagem de amostra
Antes de análise profunda: **hash** (VirusTotal para ver detecções e IOCs – cuidado com confidencialidade); **tipo de arquivo**; **contexto** (como chegou – e-mail, USB). Decidir se vale análise interna ou encaminhamento (CERT, fornecedor de EDR).`,
  },
  {
    id: 'ir-4',
    moduloId: 'ir',
    titulo: 'Resposta a incidentes na prática: do alerta à lição aprendida (passo a passo)',
    ordem: 4,
    conteudo: `# Resposta a Incidentes na Prática: Do Alerta à Lição Aprendida

## Pergunta central
“Quando algo der errado, quem faz o quê, em que ordem, e como evitamos repetir?”

**Metáfora:** Resposta a incidentes é o **corpo de bombeiros** da cidade digital: não é “apagar e esquecer”; é **conter**, **investigar**, **recuperar** e **aprender** para melhorar defesas e processos. Sem playbook e dono, cada um age por instinto e evidência se perde.

## Passo a passo – Do primeiro alerta ao fechamento

**1. Detecção e triagem** – Alerta (SIEM, EDR, usuário, parceiro). **Triagem**: é incidente de segurança ou falso positivo? Severidade (crítico, alto, médio, baixo) conforme impacto (dados vazados? sistema down? malware em uma estação?). Quem responde: SOC, TI, CISO conforme matriz.

**2. Contenção curta** – Evitar que o problema se espalhe: isolar máquina (desconectar rede), desabilitar conta comprometida, bloquear IP/domínio malicioso no firewall. **Não** destruir evidência (se for ransomware, não desligar sem imagem de disco se forense for necessária – ver playbook).

**3. Análise** – O que aconteceu? Timeline (logs, EDR, correlação). Quem, quando, de onde, qual técnica (ATT&CK). Preservar evidência (cadeia de custódia, image de disco, cópia de logs). Definir escopo: quantos sistemas/contas afetados?

**4. Erradicação e recuperação** – Remover ameaça (malware, backdoor, conta do atacante). Restaurar sistema a partir de backup limpo ou rebuild. Trocar senhas e chaves que possam ter sido expostas. Validar que o ambiente está limpo antes de declarar fim da contenção.

**5. Comunicação** – Interna (gestão, TI, jurídico, compliance) e, se aplicável, externa (clientes, ANPD/LGPD, autoridades). Mensagem clara: o que ocorreu, o que foi feito, o que fazer (ex.: trocar senha, ficar atento a phishing).

**6. Lição aprendida** – **Post-mortem** (reunião sem culpa): o que funcionou, o que atrasou, o que faltou (ferramenta, playbook, treinamento). Atualizar playbooks, regras de detecção e controles. Objetivo: o próximo incidente similar seja mais rápido e organizado.

## Exemplo real
Empresa teve incidente de phishing com conta de e-mail comprometida. Playbook de “conta comprometida” foi acionado: desabilitar conta, forçar troca de senha, verificar encaminhamentos e regras, buscar e-mails enviados pelo atacante. Em 2 horas a conta estava contida; em 1 semana o playbook foi revisado com o passo “verificar regras de encaminhamento” em destaque. Próximo caso similar foi resolvido em 45 minutos.`,
  },

  // ========== MÓDULO 7: THREAT INTELLIGENCE E HUNTING ==========
  {
    id: 'threat-1',
    moduloId: 'threat',
    titulo: 'IOCs, MITRE ATT&CK e fontes de inteligência',
    ordem: 1,
    conteudo: `# IOCs, MITRE ATT&CK e Fontes de Inteligência

## IOCs (Indicators of Compromise)
Artefatos ou comportamentos que **indicam comprometimento**: hash de arquivo (MD5, SHA-256), endereço IP, domínio, URL, padrão em registro ou arquivo, comportamento (ex.: processo que injeta em outro).

Uso: buscar IOCs em endpoints (EDR), rede (firewall, proxy), logs (SIEM); bloquear IOCs conhecidos (lista no firewall, bloqueio de hash). IOCs podem **expirar** (atacante troca infraestrutura); combinar com detecção por comportamento.

## MITRE ATT&CK
Framework de **táticas e técnicas** de adversários (TTPs). Organizado em **matriz** (linhas = táticas, colunas = técnicas). Ex.: Tática **Initial Access**, técnica **Phishing**. Cada técnica tem descrição, exemplos de ferramentas, mitigações e detecções.

Uso: mapear cobertura de detecção (“temos regra para esta técnica?”), priorizar hunts, comunicar com gestão (“atacante usou técnica X”). **ATT&CK for ICS** cobre ambientes industriais.

## Fontes de threat intelligence
- **Internas** – IOCs e TTPs de seus próprios incidentes, honeypots.
- **Compartilhadas** – ISACs, CERT, listas (abuse.ch, etc.).
- **Comerciais** – Feeds e relatórios de fornecedores (FireEye, CrowdStrike, etc.).
- **Open source** – MISP, AlienVault OTX, GitHub (YARA rules). Avaliar relevância e qualidade; integrar ao SIEM/EDR.`,
  },
  {
    id: 'threat-2',
    moduloId: 'threat',
    titulo: 'Threat hunting e detecção proativa',
    ordem: 2,
    conteudo: `# Threat Hunting e Detecção Proativa

## Threat hunting
Busca **proativa** por ameaças que podem ter passado pelas defesas. Não espera alerta; o caçador formula **hipóteses** (ex.: “atacante pode ter usado PowerShell para baixar payload”) e busca dados (logs, EDR, rede) para confirmar ou refutar.

**Ciclo:** hipótese → coleta de dados (queries, scripts) → análise → conclusão (incidente ou falso positivo) → refinamento (novas hipóteses, novas regras de detecção).

**Base:** visibilidade (logs, EDR, NetFlow), conhecimento de TTPs (ATT&CK), contexto do ambiente (o que é normal aqui?).

## Detecção proativa
- **Regras de correlação** no SIEM (ex.: login de admin de IP nunca visto + acesso a arquivo sensível).
- **Anomalia** – Comportamento que se desvia do baseline (machine learning ou estatística).
- **YARA** – Regras para identificar amostras de malware ou artefatos conhecidos em disco ou memória.
- **Hunting queries** – Scripts reutilizáveis (Sigma, KQL) para buscar TTPs na rede e endpoints.

Integrar descobertas do hunt em **playbooks** e **regras permanentes** para que a próxima ocorrência gere alerta.`,
  },
  {
    id: 'threat-3',
    moduloId: 'threat',
    titulo: 'Engenharia social: técnicas e defesa',
    ordem: 3,
    conteudo: `# Engenharia Social: Técnicas e Defesa

## O que é
**Engenharia social** é a manipulação de **pessoas** para obter informação, acesso ou ação (abrir anexo, transferir dinheiro, revelar senha). O atacante explora confiança, urgência, autoridade ou medo.

## Técnicas comuns
- **Phishing** – E-mail (ou SMS, mensagem) que imita fonte confiável para roubar credenciais ou instalar malware.
- **Spear phishing** – Phishing direcionado a alvo específico (dados do alvo são usados para personalizar).
- **Pretexting** – Criar um **pretexto** (história falsa): “sou da TI, preciso da sua senha para atualizar o sistema”.
- **Baiting** – Oferecer algo (pendrive “perdido”, link para “prêmio”) para que a vítima execute código ou acesse site malicioso.
- **Tailgating** – Entrar em área restrita seguindo alguém autorizado (contorno do controle físico).
- **Vishing** – Phishing por **voz** (telefone); atacante se passa por banco, suporte, autoridade.
- **Quid pro quo** – Oferecer algo em troca (ex.: “sou do suporte, resolvo seu problema se você desabilitar o antivírus”).

## Defesa
- **Treinamento** – Conscientização sobre essas técnicas; simulação de phishing.
- **Verificação de identidade** – Nunca dar senha ou dados sensíveis por e-mail/telefone; confirmar por canal alternativo (ligar para número oficial).
- **Políticas claras** – TI nunca pede senha por e-mail; procedimento para pedidos de transferência (confirmação com outro gestor).
- **Controle físico** – Evitar tailgating (porta de batente, conscientização).
- **Desconfiar de urgência** – Ataques frequentemente criam pressa (“sua conta será bloqueada em 1 hora”) para reduzir reflexão.`,
  },
  {
    id: 'threat-4',
    moduloId: 'threat',
    titulo: 'Threat intel e hunting na prática: do IOC à detecção (passo a passo)',
    ordem: 4,
    conteudo: `# Threat Intel e Hunting na Prática: Do IOC à Detecção

## Pergunta central
“Como passamos de ‘sabemos que fomos atacados’ para ‘encontramos quem ainda está escondido’?”

**Metáfora:** Threat intelligence é o **boletim de ocorrência** da cidade digital: padrões de atacantes, indicadores conhecidos (IOCs), táticas (ATT&CK). Hunting é a **ronda proativa**: não esperar o alarme; ir atrás de hipóteses (“e se alguém usou técnica X aqui?”) e transformar achado em regra permanente.

## Passo a passo – Do feed de IOCs ao primeiro hunt

**1. Alimentar defesas com IOCs** – Obter feeds (abertos como abuse.ch, OTX, ou comerciais) e integrar ao **firewall**, **proxy**, **EDR** e **SIEM**: bloquear IPs/domínios/hashes maliciosos. Revisar listas (IOCs expiram quando o atacante troca infraestrutura). Objetivo: bloquear o que já conhecemos.

**2. Mapear cobertura ATT&CK** – Pegar a matriz MITRE ATT&CK e marcar: “para cada técnica que importa ao nosso perfil, temos regra de detecção?”. Priorizar técnicas de **Initial Access**, **Execution**, **Persistence** e **Credential Access**. Lacunas viram lista de trabalho (novas regras ou hunts).

**3. Criar hipótese de hunt** – Exemplo: “Atacantes costumam usar PowerShell para baixar payload; será que temos processos PowerShell invocando download de rede sem ser por nosso script padrão?”. Hipótese deve ser **testável** com os dados que você tem (logs, EDR, NetFlow).

**4. Coletar e analisar** – Query no SIEM/EDR (KQL, Splunk, etc.) para buscar o comportamento. Ex.: “PowerShell com parâmetro -EncodedCommand ou download de URL em processo PowerShell”. Revisar resultados: incidente real ou falso positivo (script legítimo). Documentar query e critério.

**5. Formalizar descoberta** – Se for incidente: acionar resposta a incidentes. Se for falso positivo: ajustar query ou excluir exceção. Se for técnica nova que vale monitorar: criar **regra permanente** no SIEM/EDR para que na próxima vez gere alerta. Hunting vira detecção contínua.

**6. Ciclo contínuo** – Repetir hunts com base em relatórios de ameaça (novas TTPs de grupos que atingem nosso setor), incidentes internos (o que o atacante fez aqui pode ter feito em outros lugares?) e lacunas da matriz ATT&CK.

## Exemplo real
Equipe integrou feed de IOCs ao proxy e ao EDR; em 1 mês bloqueou dezenas de domínios e hashes. Primeiro hunt: “execução de script a partir de e-mail ou download de usuário”. Query encontrou 3 casos legítimos (script aprovado) e 1 suspeito (script não reconhecido) que virou incidente e depois regra. Em 3 meses, 5 regras novas no SIEM vieram de hunts.`,
  },

  // ========== MÓDULO 8: SEGURANÇA FÍSICA E OT/ICS ==========
  {
    id: 'fisica-1',
    moduloId: 'fisica',
    titulo: 'Controle de acesso físico e CCTV',
    ordem: 1,
    conteudo: `# Segurança Física: Controle de Acesso e CCTV

## Controle de acesso físico
Objetivo: **só pessoas autorizadas** entram em áreas específicas. Meios:
- **Algo que você tem** – Cartão de proximidade, crachá, chave.
- **Algo que você sabe** – PIN.
- **Algo que você é** – Biometria (impressão digital, face).

**Boas práticas:** segregação de áreas (recepção, escritório, datacenter, almoxarifado); registro de acessos (quem, quando, qual porta); revogação imediata (demissão, perda de cartão); evitar tailgating (porta de batente, conscientização).

## CCTV (circuito fechado de TV)
Câmeras para **vigilância e evidência**. Considerações:
- **Cobertura** – Pontos críticos (entradas, corredores, perímetro); evitar pontos cegos.
- **Retenção** – Quanto tempo guardar imagens (política e lei).
- **Privacidade** – Áreas com expectativa de privacidade (banheiros); aviso de gravação onde permitido.
- **Integridade** – Proteger gravações contra adulteração; acesso restrito e auditado.

CCTV complementa controle de acesso (quem passou, em que horário) e apoio à investigação de incidentes.`,
  },
  {
    id: 'fisica-2',
    moduloId: 'fisica',
    titulo: 'SCADA/ICS e segmentação industrial',
    ordem: 2,
    conteudo: `# SCADA/ICS e Segmentação Industrial

## SCADA e ICS
- **ICS (Industrial Control Systems)** – Sistemas que controlam processos industriais (energia, água, manufatura).
- **SCADA (Supervisory Control and Data Acquisition)** – Camada de supervisão: coleta dados de sensores e envia comandos a atuadores (PLCs, RTUs).
- **PLC (Programmable Logic Controller)** – Controlador que executa lógica em tempo real na planta.

Esses sistemas foram projetados para **disponibilidade** e **tempo real**, não para segurança de rede. Protocolos antigos (Modbus, DNP3) muitas vezes sem autenticação ou criptografia. Vulnerabilidades podem causar **impacto físico** (parada de planta, dano a equipamentos, segurança de pessoas).

## Segmentação industrial
- **Separar** rede OT (operacional) da TI corporativa e da internet. **DMZ** entre TI e OT; regras restritivas (apenas o necessário).
- **Zonas e condutos** (IEC 62443) – Dividir OT em zonas por função/criticidade; tráfego entre zonas por condutos controlados.
- **Atualização** – Patch em OT é delicado (disponibilidade); testar em ambiente espelho; janelas de manutenção.
- **Inventário** – Saber quais ativos OT existem, protocolos e riscos (ex.: Shodan para dispositivos expostos).`,
  },
  {
    id: 'fisica-3',
    moduloId: 'fisica',
    titulo: 'Segurança em Wi-Fi e redes sem fio',
    ordem: 3,
    conteudo: `# Segurança em Wi-Fi e Redes Sem Fio

## Riscos em redes sem fio
- **Interceptação** – Tráfego em rede aberta ou WEP pode ser capturado e lido.
- **Evil twin** – Access point falso com mesmo nome (SSID) para capturar credenciais.
- **Ataques de desautenticação** – Frames que derrubam clientes da rede para forçar reautenticação (e captura de handshake).
- **Acesso não autorizado** – Uso da rede por vizinhos ou atacantes se senha fraca ou WPS vulnerável.

## WPA2 e WPA3
- **WEP** – Obsoleto; fácil de quebrar. Não usar.
- **WPA2 (Wi-Fi Protected Access 2)** – AES-CCMP; seguro se senha forte (PMK derivado da passphrase). Vulnerável a ataques de desautenticação e a KRACK (mitigado com patches).
- **WPA3** – Sucessor; proteção contra força bruta (SAE – Simultaneous Authentication of Equals), forward secrecy. Preferir em equipamentos novos.

## Boas práticas
- **Senha forte** – Passphrase longa e aleatória para o Wi-Fi.
- **Desativar WPS** – WPS PIN é vulnerável a brute force.
- **Segmentar** – Rede de visitantes isolada (VLAN, sem acesso à rede interna).
- **802.1X (WPA-Enterprise)** – Autenticação por usuário/certificado (RADIUS); ideal em empresas.
- **Ocultar SSID** – Não é segurança real (SSID aparece em probes); não confiar só nisso.
- **Atualizar firmware** do access point e desativar serviços desnecessários.`,
  },
  {
    id: 'fisica-4',
    moduloId: 'fisica',
    titulo: 'Segurança física e OT na prática: da porta ao SCADA (passo a passo)',
    ordem: 4,
    conteudo: `# Segurança Física e OT na Prática: Da Porta ao SCADA

## Pergunta central
“Quem pode entrar onde, e onde a rede operacional (OT) se encontra com a TI e com o mundo?”

**Metáfora:** Segurança física é a **cerca e a fechadura** da cidade: sem controle de quem entra no prédio e nas áreas sensíveis, firewalls e criptografia podem ser contornados (USB malicioso, terminal aberto, acesso ao rack). OT/ICS é a **usina e a rede de água**: sistemas que controlam processos reais; uma falha pode parar planta ou colocar vidas em risco.

## Passo a passo – Da porta ao primeiro controle em OT

**1. Controle de acesso físico** – Identificar **áreas críticas** (servidor, CPD, sala de comando, almoxarifado). Quem pode entrar? Cartão, biometria ou chave; registro de entrada/saída (log). Visitante: acompanhado, crachá, sem acesso a rede interna. Política de mesa limpa e tela bloqueada ao sair.

**2. CCTV e evidência** – Câmeras em pontos de entrada e corredores críticos; retenção de imagens conforme política (ex.: 30 dias). Objetivo: dissuadir, investigar incidente (quem entrou, quando) e apoiar forense. Acesso às gravações restrito e auditado.

**3. Rede sem fio** – Wi-Fi corporativo: WPA2/WPA3, senha forte ou 802.1X (RADIUS). Rede de **visitantes** em VLAN separada, sem acesso à rede interna. Não usar Wi-Fi em rede OT; se inevitável, segmentar e criptografar.

**4. Inventário OT** – Listar ativos industriais: PLCs, RTUs, HMI, estações de engenharia. Quais protocolos (Modbus, DNP3)? Quem acessa (manutenção, operação, fornecedor)? Qual rede (OT pura ou já conectada à TI?). Mapa “TI ↔ DMZ ↔ OT” com regras de firewall.

**5. Segmentação TI-OT** – **DMZ** entre TI e OT: apenas serviços necessários (ex.: atualização de patches, relatório). Firewall com regra **restritiva** (negar tudo, liberar o mínimo). Objetivo: um comprometimento na TI não chegue direto ao PLC.

**6. Próximos passos em OT** – Política de patch em OT (testar em espelho, janela de manutenção); remediação de vulnerabilidades críticas; monitoramento (tráfego anômalo, conexões não esperadas). Alinhar com área operacional e manutenção.

## Exemplo real
Fábrica mapeou todas as entradas ao CPD e à sala de controle; implementou cartão + PIN e log de acesso. Em OT, desenhou zonas (chão de fábrica, sala de controle, engenharia) e colocou firewall entre TI e OT com apenas 2 serviços aprovados. Primeira varredura de vulnerabilidade em OT foi feita em ambiente de teste; 2 PLCs com credencial padrão foram alterados em janela programada.`,
  },

  // ========== MÓDULO 9: RED TEAM E PENTEST ==========
  {
    id: 'redteam-1',
    moduloId: 'redteam',
    titulo: 'Metodologia de pentest e escopo legal',
    ordem: 1,
    conteudo: `# Metodologia de Pentest e Escopo Legal

## Pentest (teste de penetração)
Avaliação **autorizada** que simula um atacante para encontrar vulnerabilidades reais. Fases típicas:
1. **Reconhecimento** – Open source (OSINT), domínios, e-mails, redes.
2. **Varredura** – Portas e serviços (Nmap), vulnerabilidades (Nessus, etc.).
3. **Ganho de acesso** – Exploração (exploits, credenciais fracas, engenharia social se no escopo).
4. **Manutenção de acesso** – Persistência (opcional, conforme escopo).
5. **Análise e relatório** – Evidências, severidade, impacto, recomendações.

## Escopo e autorização
- **Autorização por escrito** – Contrato ou ordem de serviço com **escopo** (alvos permitidos, IPs/URLs), **limites** (o que não testar – ex.: produção de pagamento), **horários** e **tipos** de teste (black-box, gray-box, white-box).
- **Sem autorização = crime** (Art. 154-A, invasão de dispositivo). Documentar escopo protege o pentester e o cliente.

## Black / Gray / White box
- **Black** – Sem informação interna; simula atacante externo.
- **Gray** – Alguma informação (ex.: conta de teste).
- **White** – Acesso a código, arquitetura; foco em profundidade.`,
  },
  {
    id: 'redteam-2',
    moduloId: 'redteam',
    titulo: 'Relatórios e ferramentas de pentest',
    ordem: 2,
    conteudo: `# Relatórios e Ferramentas de Pentest

## Relatório de pentest
Cada **achado** deve ter:
- **Título** e **severidade** (crítico, alto, médio, baixo, informativo).
- **Descrição** – O que foi encontrado.
- **Evidência** – Screenshot, comando, resposta do sistema (sanitizado se necessário).
- **Impacto** – O que um atacante poderia fazer.
- **Recomendação** – Como corrigir (patch, configuração, controle).
- **Referências** – CVE, OWASP, etc.

**Resumo executivo** para gestão (visão geral, riscos principais, prioridades). **Anexo técnico** com detalhes para a equipe de correção. Entregar em prazo combinado; confidencialidade acordada.

## Ferramentas (resumo)
- **Recon/Scan:** Nmap, Nessus/OpenVAS, Nuclei.
- **Web:** Burp Suite, OWASP ZAP, sqlmap.
- **Exploit:** Metasploit, SearchSploit, exploits públicos.
- **Pós-exploração:** Mimikatz, BloodHound (AD), Cobalt Strike (licença).
- **Red team:** Simulação de adversário (phishing, physical), ferramentas customizadas; uso ético e dentro do escopo.

Manter ferramentas atualizadas; conhecer limites e falsos positivos.`,
  },
  {
    id: 'redteam-3',
    moduloId: 'redteam',
    titulo: 'Pentest na prática: do escopo ao relatório (passo a passo)',
    ordem: 3,
    conteudo: `# Pentest na Prática: Do Escopo ao Relatório

## Pergunta central
“Como fazemos um teste de invasão ético que realmente ajude a empresa a corrigir o que importa?”

**Metáfora:** Pentest é o **simulacro de incêndio** da segurança: não esperamos o atacante real para descobrir a falha; simulamos com autorização e entregamos um **relatório** que vira lista de correções. Escopo mal definido vira teste inútil ou risco legal; relatório vago vira “não sabemos por onde começar”.

## Passo a passo – Do pedido ao relatório útil

**1. Definir objetivo** – O que a empresa quer? (Validar segurança antes do lançamento; cumprir exigência de auditoria; testar após mudança grande.) Objetivo define **escopo** (só aplicação web? rede interna? rede + phishing?) e **tipo** (black, gray, white box).

**2. Documentar escopo e autorização** – **Por escrito**: alvos permitidos (IPs, URLs, aplicações), **fora de escopo** (ex.: ambiente de pagamento em produção, terceiros), horários, duração e tipos de teste (ex.: sem DoS, sem engenharia social ou com). Assinatura do cliente. Sem isso, o teste pode ser crime (Art. 154-A).

**3. Reconhecimento e varredura** – Coletar informação (OSINT, subdomínios, tecnologias). Varredura de portas e serviços (Nmap); scan de vulnerabilidades (Nessus, OpenVAS, Nuclei). Organizar achados: o que é exposto, qual versão, qual CVE.

**4. Exploração e documentação** – Explorar vulnerabilidades dentro do escopo. Para **cada achado**: capturar evidência (screenshot, comando, resposta); anotar **passos para reproduzir**, **impacto** (o que um atacante faria) e **recomendação** (patch, configuração, controle). Não explorar além do necessário para provar o risco.

**5. Relatório** – **Resumo executivo** (1–2 páginas): visão geral, riscos críticos/altos, mensagem para a direção. **Relatório técnico**: por achado, severidade (CVSS ou critério combinado), descrição, evidência, impacto, recomendação, referência (CVE, OWASP). Entregar em prazo acordado; formato (PDF, confidencialidade) combinado antes.

**6. Apresentação e acompanhamento** – Reunião para apresentar resultados e tirar dúvidas. Cliente prioriza correções; reteste (opcional) para validar que o problema foi resolvido. Achados viram backlog de segurança; não “gaveta”.

## Exemplo real
Cliente pediu pentest na aplicação web nova. Escopo: URL de staging, black box, 5 dias. Pentester documentou 1 crítico (SQLi), 2 altos (IDOR, XSS armazenado) e 3 médios. Relatório com passo a passo de reprodução e recomendações (prepared statements, validação de ownership, escape de saída). Cliente corrigiu crítico e altos em 2 semanas; reteste confirmou. Relatório foi anexado à documentação de release para auditoria.`,
  },

  // ========== MÓDULO 10: LIDERANÇA E ESTRATÉGIA EM SEGURANÇA (perfil CISO / CEO da segurança) ==========
  {
    id: 'lideranca-1',
    moduloId: 'lideranca',
    titulo: 'Papel do CISO e liderança em segurança',
    ordem: 1,
    conteudo: `# Papel do CISO e Liderança em Segurança

## O que é um CISO
**CISO (Chief Information Security Officer)** é o executivo responsável por definir e executar a **estratégia de segurança da informação** da organização. Não é só “chefe de TI segura”: é quem conecta risco cibernético ao negócio, reporta ao board e à alta direção e garante que a empresa proteja ativos, cumpra leis e recupere-se de incidentes.

## Responsabilidades principais
- **Estratégia** – Visão de médio e longo prazo; alinhamento com objetivos do negócio.
- **Governança** – Políticas, comitês, métricas e responsabilidades claras.
- **Gestão de risco** – Identificar, priorizar e tratar riscos; apetite a risco aprovado pela direção.
- **Orçamento e priorização** – Defender investimentos, escolher iniciativas e parceiros.
- **Liderança de equipe** – SOC, resposta a incidentes, conformidade, projetos; reter e desenvolver talentos.
- **Comunicação** – Falar a linguagem do board (risco, impacto, custo); traduzir técnico em decisão.

## Liderança, não só técnica
Um CISO precisa **liderar**: influenciar outras áreas (TI, jurídico, RH, operações), construir confiança com o CEO e o board, tomar decisões sob incerteza e comunicar em crise. Conhecimento técnico é base; visão de negócio, comunicação e gestão de pessoas são o que diferenciam o líder.`,
  },
  {
    id: 'lideranca-2',
    moduloId: 'lideranca',
    titulo: 'Estratégia de segurança e alinhamento ao negócio',
    ordem: 2,
    conteudo: `# Estratégia de Segurança e Alinhamento ao Negócio

## Por que alinhar ao negócio
Segurança não existe para “ficar seguro por ficar”: existe para **habilitar o negócio** (confiança, continuidade, conformidade). Estratégia de segurança deve responder: que ativos e processos são críticos? Que ameaças e regulamentos importam? Que nível de risco a organização aceita?

## Elementos da estratégia
- **Visão e objetivos** – Onde queremos estar em 3–5 anos (ex.: maturidade de detecção e resposta, cultura de segurança).
- **Pilares** – Governança, proteção, detecção, resposta, recuperação; ou alinhado a um framework (NIST CSF, ISO 27001).
- **Iniciativas** – Projetos concretos (ex.: implementar SOC, programa de awareness, gestão de vulnerabilidades).
- **Métricas e KPIs** – Tempo de detecção/resposta, cobertura de backup, conformidade, incidentes; acompanhamento periódico.

## Apresentar em linguagem de negócio
Evitar jargão puramente técnico. Falar em **risco** (probabilidade × impacto), **custo de não fazer** (multa, parada, vazamento) e **retorno** (evitar perda, ganhar confiança, cumprir contrato). Estratégia aprovada pela direção tem muito mais chance de receber orçamento e prioridade.`,
  },
  {
    id: 'lideranca-3',
    moduloId: 'lideranca',
    titulo: 'Comunicação com board e C-level',
    ordem: 3,
    conteudo: `# Comunicação com Board e C-Level

## Por que o board se importa
Risco cibernético é **risco de negócio**: vazamento, ransomware e falha de infraestrutura afetam receita, reputação e obrigações legais. O board e o CEO precisam entender o cenário, as decisões tomadas e o que ainda falta – em **poucas páginas** e em **linguagem executiva**.

## O que reportar
- **Postura de risco** – Principais ameaças e como estamos hoje (maturidade, gaps).
- **Incidentes relevantes** – O que aconteceu, impacto, ações e lições aprendidas.
- **Conformidade** – LGPD, regulamentação do setor, auditorias; status e pendências.
- **Investimentos** – O que foi pedido, o que foi aprovado, o que está em execução e o valor entregue.
- **Recomendações** – Decisões que precisam do board (apetite a risco, orçamento, prioridades).

## Como apresentar
- **Resumo executivo** – Uma página: situação, riscos principais, pedidos.
- **Métricas visuais** – Dashboards simples (verde/amarelo/vermelho, tendências).
- **Evitar** – Listas longas de CVEs, detalhes de firewall; **incluir** – impacto em negócio, custo de inação, opções e recomendação.
- **Periodicidade** – Trimestral ou conforme política; em crise, comunicação imediata e transparente.`,
  },
  {
    id: 'lideranca-4',
    moduloId: 'lideranca',
    titulo: 'Orçamento, priorização e gestão de fornecedores',
    ordem: 4,
    conteudo: `# Orçamento, Priorização e Gestão de Fornecedores

## Orçamento em segurança
- **Justificar em risco** – Cada pedido de investimento deve responder: que risco reduz ou que capacidade habilita? Qual o custo de não fazer?
- **Cenários** – Orçamento ideal vs. mínimo; mostrar trade-offs (o que fica de fora se cortar).
- **Ciclo orçamentário** – Alinhar ao ciclo da empresa; preparar pedidos com antecedência e dados (benchmarks, incidentes, conformidade).

## Priorização
Recursos são limitados. Priorizar com critérios claros: **impacto no risco**, **conformidade**, **alinhamento à estratégia** e **viabilidade**. Matriz impacto/esforço; alinhar com comitê de segurança ou direção. Comunicar o que foi priorizado e o que ficou para frente.

## Gestão de fornecedores
- **Due diligence** – Avaliar segurança do fornecedor (políticas, certificações, tratamento de dados) antes de contratar.
- **Contratos** – Cláusulas de confidencialidade, segurança, LGPD, auditoria e responsabilidade em caso de incidente.
- **Terceirização crítica** – SOC, nuvem, desenvolvimento: definir responsabilidades (shared responsibility), monitorar e revisar contratos.
- **Risco na cadeia** – Um fornecedor comprometido pode ser vetor de ataque; mapear e tratar riscos de supply chain.`,
  },
  {
    id: 'lideranca-5',
    moduloId: 'lideranca',
    titulo: 'Construindo e liderando o programa de segurança (SOC, equipe, maturidade)',
    ordem: 5,
    conteudo: `# Construindo e Liderando o Programa de Segurança

## Programa de segurança
Não é um projeto, é um **programa contínuo**: governança, pessoas, processos e tecnologia. Objetivos claros (ex.: detectar e responder em X horas), métricas (MTTD, MTTR, cobertura) e revisão periódica (maturidade, gaps).

## SOC (Security Operations Center)
- **Função** – Monitorar, detectar e responder a ameaças 24/7 (ou em horário comercial, conforme tamanho).
- **Estrutura** – Analistas de nível 1 (triagem), 2 (investigação), 3 (especialistas); gestor do SOC; integração com IR e TI.
- **Ferramentas** – SIEM, EDR, correlação, playbooks; alimentar com threat intel e boas práticas.
- **Maturidade** – Começar com o básico (logs centralizados, alertas críticos); evoluir para detecção proativa e automação.

## Equipe e cultura
- **Perfis** – Técnicos (SOC, forense, pentest) e não técnicos (governança, conformidade, awareness); equilíbrio conforme a organização.
- **Retenção e desenvolvimento** – Treinamento, certificações, carreira; ambiente onde as pessoas queiram ficar.
- **Cultura de segurança** – Segurança é responsabilidade de todos; líder dá o exemplo e exige prioridade (patch, senha, reportar incidente).`,
  },
  {
    id: 'lideranca-6',
    moduloId: 'lideranca',
    titulo: 'Gestão de crise e comunicação em incidentes',
    ordem: 6,
    conteudo: `# Gestão de Crise e Comunicação em Incidentes

## Crise cibernética
Incidente grave (ransomware, vazamento em massa, indisponibilidade crítica) vira **crise** quando impacta operação, reputação ou obrigações legais. O CISO deve liderar a resposta técnica **e** a comunicação interna e externa.

## Comunicação interna
- **Quem avisar** – CEO, board, jurídico, RH, comunicação, áreas afetadas; conforme plano de crise.
- **O que dizer** – Fatos conhecidos, impacto atual, ações em andamento, o que ainda não se sabe; evitar especulação.
- **Frequência** – Atualizações em intervalos definidos (ex.: a cada X horas) até estabilização.

## Comunicação externa
- **Reguladores** – LGPD (ANPD), setor (BACEN, etc.): prazos e formato definidos em lei ou regulamento; preparar com jurídico.
- **Clientes e parceiros** – Quando e como informar (contratos, política de comunicação de incidente); transparência controlada.
- **Mídia** – Geralmente com assessoria e direção; uma voz, mensagem consistente; não esconder o grave, mas não criar pânico.

## Lições aprendidas
Após a crise: **post-mortem** (o que aconteceu, o que funcionou, o que falhou); atualizar planos, playbooks e comunicação; reportar ao board. Crises bem geridas fortalecem a confiança; mal geridas destroem reputação.`,
  },
  {
    id: 'lideranca-7',
    moduloId: 'lideranca',
    titulo: 'Carreira e trilha para CISO',
    ordem: 7,
    conteudo: `# Carreira e Trilha para CISO

## Caminhos típicos
- **Técnico que sobe** – Analista SOC → líder técnico → gerente de segurança → CISO; forte em operação e ferramentas.
- **Governança e risco** – Auditoria, conformidade, consultoria; entra em segurança por risco e compliance, depois assume liderança.
- **Híbrido** – Experiência em TI (infra, desenvolvimento) + segurança + gestão; visão ampla.

Não há um único caminho; o importante é **combinar** conhecimento técnico, gestão de risco e capacidade de liderar e comunicar.

## Competências do CISO
- **Técnicas** – Entender arquitetura, ameaças, controles e resposta a incidentes (não precisa ser o melhor técnico, mas precisa decidir com base em critério).
- **Gestão de risco** – Avaliar e priorizar; falar em impacto e apetite a risco.
- **Negócio** – Entender o que a empresa faz, o que é crítico e como segurança protege e habilita.
- **Comunicação** – Board, C-level, equipe, pares; clareza, objetividade e adaptação ao público.
- **Liderança** – Tomar decisão, assumir responsabilidade, desenvolver pessoas e influenciar sem autoridade formal.

## Certificações e formação
- **Técnicas/operacionais** – CISSP, CISM, CEH, etc.
- **Governança e risco** – CISM, CRISC, ISO 27001 Lead Implementer/Auditor.
- **Formação contínua** – Cursos, eventos, leitura (frameworks, tendências, casos reais). O “CEO da segurança” nunca para de aprender.`,
  },
  {
    id: 'lideranca-8',
    moduloId: 'lideranca',
    titulo: 'A empresa como cidade digital: metáfora e papel do CISO',
    ordem: 8,
    conteudo: `# A Empresa como Cidade Digital

## A metáfora
Imagine uma empresa moderna como uma **cidade**:

- **Dados** = o ouro (o que tem valor e atrai invasores).
- **Sistemas** = as estradas (por onde o tráfego e os acessos circulam).
- **Servidores** = os prédios (onde os dados e aplicações ficam).
- **Usuários** = os cidadãos (quem usa os sistemas no dia a dia).
- **Hackers** = invasores tentando entrar na cidade para roubar o ouro ou paralisar a cidade.

O **CISO** é o **chefe da defesa** dessa cidade digital. Ele não fica mexendo em firewall o dia todo: o trabalho acontece em **camadas estratégicas** – definir o que proteger, criar regras, gerenciar risco, defender orçamento, liderar equipes e reportar à “prefeitura” (diretoria e conselho).

Segurança cibernética é menos sobre computadores e mais sobre **decisões humanas diante do risco**. O profissional júnior aprende comandos; o sênior aprende arquitetura; o CISO pensa na **sobrevivência da empresa** no mundo digital.`,
  },
  {
    id: 'lideranca-9',
    moduloId: 'lideranca',
    titulo: 'Os 10 trabalhos do CISO – detalhado com exemplos',
    ordem: 9,
    conteudo: `# Os 10 Trabalhos do CISO (detalhado)

## 1. Definir a estratégia de segurança
**Pergunta central:** “O que precisamos proteger e quanto estamos dispostos a arriscar?”

**Passo a passo:**
- Listar ativos (sistemas, dados, processos).
- Classificar: **crítico** (vazamento/parada = impacto enorme), **importante** (impacto alto), **comum** (impacto aceitável).
- Exemplo: e-mail (importante), site institucional (comum), banco de clientes (crítico), sistema financeiro (crítico), propriedade intelectual (crítico). Site cair = baixo impacto; banco vazar = enorme. Sem estratégia, segurança vira só ferramenta cara.

## 2. Criar a governança de segurança
**Governança** = regras claras e responsabilidade definida.

**Passo a passo:**
- Redigir políticas: senha, acesso, backup, uso de dispositivos, resposta a incidentes.
- Exemplo: “Funcionário não pode instalar software sem autorização.” Sem política escrita, a empresa não consegue aplicar disciplina.
- Criar **comitê de segurança** com TI, jurídico, compliance, RH e diretoria. Segurança vira decisão corporativa.

## 3. Gestão de risco cibernético
**Fórmula:** Risco = Probabilidade × Impacto.

**Passo a passo:**
- Para cada sistema: estimar probabilidade de ataque (baixa/média/alta) e impacto (baixo/médio/alto/crítico).
- Exemplo: folha de pagamento – probabilidade média, impacto altíssimo → risco crítico. Decisões: segmentação, MFA, monitoramento, backup isolado.
- Repetir para dezenas de sistemas; priorizar os de risco crítico e alto.

## 4. Defender orçamento de segurança
**Problema:** O board pergunta “Por que gastar milhões se nunca fomos hackeados?”

**Passo a passo:**
- Listar necessidades (SIEM, EDR, SOC, DLP, firewall, pentest, red team, auditorias, treinamento).
- **Traduzir** risco técnico em linguagem financeira. Em vez de “precisamos de detecção”, dizer: “Um ransomware pode parar a empresa 5 dias e custar 10 milhões.” Essa tradução é uma arte.

## 5. Criar o programa de segurança
**Passo a passo:**
- Escolher framework (ISO 27001, NIST CSF, CIS Controls, COBIT).
- Incluir: gestão de vulnerabilidades, identidade, monitoramento, AppSec, nuvem, continuidade, resposta a incidentes.
- Organizar como um **sistema vivo** de defesa, com metas e métricas.

## 6. Liderar equipes de segurança
**Áreas típicas:** SOC, Blue Team, Red Team, Threat Intelligence, GRC, AppSec, Cloud Security. O CISO **coordena** esses times; não executa sozinho.

## 7. Gerenciar incidentes
**Em crise** o CISO coordena TI, forense, jurídico, comunicação e diretoria. Perguntas difíceis: desligamos os sistemas? Pagamos resgate? Notificamos clientes e autoridades? Exige sangue frio e experiência.

## 8. Cumprimento de leis e regulamentações
**Brasil:** LGPD (proteção de dados, controles, auditoria, notificação de vazamento). **Outros:** PCI-DSS (cartões), SOX (financeiro), HIPAA (saúde), GDPR (Europa). Segurança e compliance caminham juntos.

## 9. Construir cultura de segurança
**Problema:** Muitos ataques começam com um clique em e-mail falso. **Solução:** conscientização (treinamentos, simulação de phishing, campanhas, políticas). Segurança vira **comportamento humano**.

## 10. Reportar para a diretoria e o conselho
**Conteúdo dos relatórios:** ataques bloqueados, vulnerabilidades críticas, maturidade, risco residual, tempo de resposta. Esses relatórios orientam decisões estratégicas.`,
  },
  {
    id: 'lideranca-10',
    moduloId: 'lideranca',
    titulo: 'Os 5 pilares da segurança: GRC, SOC, Arquitetura, AppSec, IR',
    ordem: 10,
    conteudo: `# Os 5 Pilares da Segurança (Arquitetura do Trabalho do CISO)

## 1. GRC – Governança, Risco e Compliance
**Função:** Definir as regras do jogo. Sem GRC, segurança vira improviso.

**O CISO supervisiona:**
- Políticas de segurança
- Gestão de riscos
- Auditorias
- Conformidade regulatória
- Gestão de fornecedores (Third-Party Risk)
- Classificação de dados

**Exemplo passo a passo – contratação de fornecedor em nuvem:**
1. Verificar onde os dados serão armazenados (região, jurisdição).
2. Exigir criptografia em repouso e em trânsito.
3. Verificar certificações (ISO 27001, SOC 2).
4. Entender política de backup e de resposta a incidentes do fornecedor.
5. Incluir cláusulas de segurança e LGPD no contrato.
Muitos ataques ocorrem pela **cadeia de fornecedores**; daí a importância do Third-Party Risk Management.

## 2. Security Operations Center (SOC)
**Função:** Centro de monitoramento – “sala de radar” da segurança.

**Monitorado:** logs, tráfego de rede, acessos, comportamento de usuários, tentativas de invasão.

**Ferramentas:** SIEM, EDR, NDR, Threat Intelligence, UEBA (comportamento anômalo).

**Passo a passo do fluxo no SOC:**
1. Coletar eventos de sistemas, rede e endpoints.
2. Correlacionar no SIEM (regras e correlações).
3. Gerar alertas; analista de nível 1 faz triagem.
4. Nível 2 investiga (é verdadeiro positivo? qual escopo?).
5. Nível 3 ou IR trata (contenção, erradicação).
O CISO define nível de monitoramento, tempo de resposta (SLA) e tamanho da equipe.

## 3. Arquitetura de Segurança (Security Engineering)
**Função:** Garantir que os sistemas **nasçam** seguros.

**Áreas:** rede, identidade, nuvem, endpoints, segmentação, criptografia, Zero Trust.

**Exemplo passo a passo – migração para nuvem:**
1. Definir modelo de responsabilidade compartilhada.
2. Controle de acesso (IAM, MFA, menor privilégio).
3. Segmentar ambientes (dev, homolog, prod; redes/VPC).
4. Criptografia em repouso e em trânsito.
5. Monitoramento e alertas (Security Hub, guardrails).
6. Backup seguro e testado.
Se isso não for feito desde o começo, a empresa cria **dívida de segurança**.

## 4. Segurança de Aplicações (AppSec)
**Função:** Ataques hoje focam em aplicações web; AppSec reduz vulnerabilidades no código e no processo.

**Práticas:** code review, pentest, bug bounty, Secure SDLC, análise de dependências (SCA).

**Exemplo – SQL Injection:**
- **Risco:** código concatena entrada do usuário na query; atacante injeta SQL.
- **Passo a passo de defesa:** (1) Usar queries parametrizadas ou ORM. (2) Validar e sanitizar entrada. (3) Usar framework seguro e atualizado. (4) Pentest e SAST/DAST no pipeline.
Segurança passa a fazer parte do **processo de desenvolvimento**.

## 5. Resposta a Incidentes (Incident Response)
**Função:** Quando algo dá errado, o IR investiga e coordena a resposta.

**Processo em 5 passos:**
1. **Detecção** – Identificar o incidente (alerta, usuário, anomalia).
2. **Contenção** – Limitar propagação (isolar host, bloquear IP, desativar conta).
3. **Erradicação** – Remover causa (malware, conta comprometida, vulnerabilidade).
4. **Recuperação** – Restaurar sistemas (backup íntegro) e validar.
5. **Lições aprendidas** – Post-mortem, atualizar playbooks e comunicação.

**Exemplo – ransomware:** CISO coordena: desligar rede? Ativar continuidade? Restaurar backup? Notificar autoridades e clientes? Em crises grandes, o CISO atua ao lado do CEO.`,
  },
  {
    id: 'lideranca-11',
    moduloId: 'lideranca',
    titulo: 'CISO x Gerente de segurança, habilidades e carreira',
    ordem: 11,
    conteudo: `# CISO x Gerente de Segurança, Habilidades e Carreira

## Diferença entre CISO e gerente de segurança
- **Gerente de segurança** – **Executa** operações. Pergunta: “Como implementar segurança?”
- **CISO** – **Define** a estratégia. Pergunta: “Qual risco a empresa pode aceitar?”

O gerente cuida do dia a dia (SOC, firewall, políticas técnicas). O CISO cuida de estratégia, orçamento, board e decisões que afetam toda a empresa.

## As 5 habilidades que formam um CISO
1. **Tecnologia** – Redes, nuvem, sistemas, criptografia, arquitetura (não precisa ser o melhor técnico, mas precisa decidir com critério).
2. **Gestão de risco** – Avaliar probabilidade e impacto; traduzir em decisão de negócio.
3. **Comunicação executiva** – Traduzir tecnologia para linguagem financeira e de risco.
4. **Liderança** – Gerenciar equipes complexas (SOC, GRC, AppSec, IR); influenciar sem autoridade formal.
5. **Estratégia de negócios** – Entender como a empresa ganha dinheiro e o que é crítico proteger.

## Como alguém chega a ser CISO
**Trilha típica (10 a 20 anos):**
Analista de segurança → Engenheiro de segurança → Arquiteto de segurança → Gerente de segurança → Diretor de segurança → **CISO**

## História do cargo
Nas décadas de 90 e início dos 2000 praticamente não existia o cargo de CISO; segurança ficava dentro de TI. Com o aumento de ataques e vazamentos, as empresas passaram a tratar segurança como **risco corporativo**, não só tecnologia. Hoje muitos CISOs reportam diretamente ao **CEO**, ao **CRO (Chief Risk Officer)** ou ao **conselho**.

## Crise global de CISOs
O mundo digital cresce mais rápido que a capacidade de formar **líderes** de segurança. Empresas precisam de quem entenda tecnologia, negócios, gestão e crises – e essa combinação é rara. Por isso o CISO virou um dos cargos mais estratégicos e bem pagos em tecnologia.`,
  },
  {
    id: 'lideranca-12',
    moduloId: 'lideranca',
    titulo: 'Como um CISO pensa durante um ataque real',
    ordem: 12,
    conteudo: `# Como um CISO Pensa Durante um Ataque Real

## Primeiros minutos
- **Confirmar** que é incidente real (não falso positivo).
- **Triagem:** tipo (ransomware? vazamento? invasão?), escopo (quantos sistemas? quais dados?) e impacto imediato (operação parada? dados expostos?).
- **Acionar** equipe de IR e definir líder tático; CISO coordena e comunica para cima.

## Decisões imediatas
- **Contenção** – Isolar sistemas afetados sem parar toda a empresa? Desligar rede? Depende do tipo de ataque e do plano.
- **Comunicação interna** – Quem avisar (CEO, jurídico, RH, comunicação) e o que dizer (fatos, não especulação).
- **Preservação de evidências** – Para forense e eventual processo; não sobrescrever logs nem desligar sem imagem de disco se for crítico.

## Perguntas que o CISO responde (com o time)
- Desligamos os sistemas agora ou mantemos para investigar?
- Pagamos resgate? (Decisão de negócio e jurídico; CISO informa riscos e alternativas.)
- Notificamos clientes e ANPD? (Prazos LGPD; jurídico e comunicação.)
- Ativamos plano de continuidade? Restauramos backup? (Conforme BCP/DR e integridade do backup.)

## Durante a crise
- **Atualizações em ritmo definido** (ex.: a cada 4 horas) para diretoria e board.
- **Uma voz** – Comunicação externa (mídia, clientes) alinhada com diretoria e assessoria.
- **Documentar** – Cronologia, decisões, quem aprovou; essencial para lições aprendidas e eventual auditoria.

## Após a estabilização
- **Post-mortem** – O que aconteceu, o que funcionou, o que falhou.
- **Atualizar** playbooks, políticas e treinamento.
- **Reportar ao board** – Resumo, causas, ações tomadas e recomendações (investimento, processos).

Segurança madura não nasce só de ferramentas; nasce de **liderança estratégica** e de saber agir sob pressão.`,
  },
];
