/**
 * Jogos de Segurança – Ciclo do Ataque (educativo) e Defesa em Ação
 * Conteúdo apenas educacional. Uso não autorizado contra sistemas é crime (Art. 154-A).
 */

import {
  perguntasReconExtras,
  perguntasVarreduraExtras,
  perguntasAcessoExtras,
  perguntasEscalacaoExtras,
  perguntasPersistenciaExtras,
  perguntasExfiltracaoExtras,
  cenariosDefesaExtras,
} from './jogosSegurancaDados';

// ========== JOGO 1: CICLO DO ATAQUE (do básico ao avançado – conceitos) ==========
export const fasesCicloAtaque = [
  {
    id: 'recon',
    ordem: 1,
    nome: 'Reconhecimento',
    icone: '🔍',
    descricao: 'O atacante coleta informações sobre o alvo sem ainda acessar sistemas. Objetivo: descobrir domínios, e-mails, redes sociais, tecnologias usadas e possíveis pontos de entrada.',
    tecnicas: ['OSINT (pesquisa aberta)', 'Whois e DNS', 'Redes sociais e LinkedIn', 'Google dorking', 'Subdomínios e histórico de sites'],
    pergunta: 'O que o atacante NÃO deve fazer nesta fase em um pentest autorizado?',
    opcoes: [
      { texto: 'Pesquisar domínios e subdomínios do alvo', correto: false },
      { texto: 'Invadir sistemas sem autorização por escrito', correto: true },
      { texto: 'Coletar e-mails e nomes de funcionários em fontes públicas', correto: false },
      { texto: 'Verificar tecnologias (servidor web, CMS) em fontes abertas', correto: false },
    ],
    feedback: 'Em pentest, reconhecimento é só com fontes abertas e dentro do escopo. Invadir ou acessar sistemas sem autorização é crime (Art. 154-A).',
    perguntas: [
      { pergunta: 'O que o atacante NÃO deve fazer nesta fase em um pentest autorizado?', opcoes: [{ texto: 'Pesquisar domínios e subdomínios do alvo', correto: false }, { texto: 'Invadir sistemas sem autorização por escrito', correto: true }, { texto: 'Coletar e-mails e nomes de funcionários em fontes públicas', correto: false }, { texto: 'Verificar tecnologias (servidor web, CMS) em fontes abertas', correto: false }], feedback: 'Em pentest, reconhecimento é só com fontes abertas e dentro do escopo. Invadir ou acessar sistemas sem autorização é crime (Art. 154-A).' },
      ...perguntasReconExtras,
    ],
  },
  {
    id: 'varredura',
    ordem: 2,
    nome: 'Varredura e enumeração',
    icone: '📡',
    descricao: 'Com alvos em mente, o atacante descobre hosts ativos, portas abertas e serviços. Ferramentas como Nmap varrem a rede; o resultado indica onde pode haver vulnerabilidades (SSH, RDP, HTTP, etc.).',
    tecnicas: ['Ping sweep e descoberta de hosts', 'Varredura de portas (Nmap)', 'Detecção de versão de serviços', 'Enumeração (usuários, shares, DNS)', 'Scripts de vulnerabilidade (NSE)'],
    pergunta: 'Qual ferramenta é típica para varredura de portas em um teste autorizado?',
    opcoes: [
      { texto: 'Apenas navegador', correto: false },
      { texto: 'Nmap (com escopo e autorização por escrito)', correto: true },
      { texto: 'Enviar malware por e-mail', correto: false },
      { texto: 'Forçar senhas em produção sem aviso', correto: false },
    ],
    feedback: 'Nmap é usado para descobrir portas e serviços. Sempre com autorização e escopo definido; varredura em rede alheia é crime.',
    perguntas: [
      { pergunta: 'Qual ferramenta é típica para varredura de portas em um teste autorizado?', opcoes: [{ texto: 'Apenas navegador', correto: false }, { texto: 'Nmap (com escopo e autorização por escrito)', correto: true }, { texto: 'Enviar malware por e-mail', correto: false }, { texto: 'Forçar senhas em produção sem aviso', correto: false }], feedback: 'Nmap é usado para descobrir portas e serviços. Sempre com autorização e escopo definido; varredura em rede alheia é crime.' },
      ...perguntasVarreduraExtras,
    ],
  },
  {
    id: 'acesso',
    ordem: 3,
    nome: 'Acesso inicial',
    icone: '🚪',
    descricao: 'O atacante explora uma vulnerabilidade ou engenharia social para obter o primeiro ponto de entrada: uma conta, um servidor comprometido ou um malware executado na vítima.',
    tecnicas: ['Phishing (e-mail, link, anexo)', 'Exploração de vulnerabilidade (CVE)', 'Credenciais fracas ou vazadas', 'Ataque a serviços expostos (RDP, SSH)', 'Engenharia social (pretexting, baiting)'],
    pergunta: 'Qual é um vetor comum de acesso inicial em ataques reais?',
    opcoes: [
      { texto: 'Phishing: e-mail que leva a clicar em link ou abrir anexo malicioso', correto: true },
      { texto: 'Apenas “adivinhar” a senha do CEO sem tentativas', correto: false },
      { texto: 'Nenhum atacante usa engenharia social', correto: false },
      { texto: 'Só entram por porta aberta sem explorar serviço', correto: false },
    ],
    feedback: 'Phishing e engenharia social são os vetores mais comuns de acesso inicial. Por isso defesa inclui treinamento e MFA.',
    perguntas: [
      { pergunta: 'Qual é um vetor comum de acesso inicial em ataques reais?', opcoes: [{ texto: 'Phishing: e-mail que leva a clicar em link ou abrir anexo malicioso', correto: true }, { texto: 'Apenas "adivinhar" a senha do CEO sem tentativas', correto: false }, { texto: 'Nenhum atacante usa engenharia social', correto: false }, { texto: 'Só entram por porta aberta sem explorar serviço', correto: false }], feedback: 'Phishing e engenharia social são os vetores mais comuns de acesso inicial. Por isso defesa inclui treinamento e MFA.' },
      ...perguntasAcessoExtras,
    ],
  },
  {
    id: 'escalacao',
    ordem: 4,
    nome: 'Escalação de privilégios',
    icone: '⬆️',
    descricao: 'A partir de um acesso limitado (ex.: usuário comum), o atacante busca se tornar administrador ou obter acesso a sistemas mais sensíveis (domínio, banco de dados, nuvem).',
    tecnicas: ['Exploração de vulnerabilidades locais', 'Abuso de permissões mal configuradas', 'Roubo de tokens ou credenciais (memória, disco)', 'Movimentação lateral (outros hosts)', 'Abuso de serviços (Kerberos, NTLM em redes Windows)'],
    pergunta: 'O que significa “movimentação lateral” no ciclo de ataque?',
    opcoes: [
      { texto: 'Sair do sistema e desistir do ataque', correto: false },
      { texto: 'A partir de um host comprometido, acessar outros hosts da rede', correto: true },
      { texto: 'Apenas mudar a senha do usuário', correto: false },
      { texto: 'Atualizar o sistema operacional', correto: false },
    ],
    feedback: 'Movimentação lateral é quando o atacante usa o primeiro host para alcançar outros (credenciais, shares, RDP). Segmentação e monitoramento reduzem o risco.',
    perguntas: [
      { pergunta: 'O que significa "movimentação lateral" no ciclo de ataque?', opcoes: [{ texto: 'Sair do sistema e desistir do ataque', correto: false }, { texto: 'A partir de um host comprometido, acessar outros hosts da rede', correto: true }, { texto: 'Apenas mudar a senha do usuário', correto: false }, { texto: 'Atualizar o sistema operacional', correto: false }], feedback: 'Movimentação lateral é quando o atacante usa o primeiro host para alcançar outros (credenciais, shares, RDP). Segmentação e monitoramento reduzem o risco.' },
      ...perguntasEscalacaoExtras,
    ],
  },
  {
    id: 'persistencia',
    ordem: 5,
    nome: 'Persistência',
    icone: '🔄',
    descricao: 'O atacante garante que continuará com acesso mesmo se a conta for alterada ou o sistema reiniciado. Técnicas incluem backdoors, tarefas agendadas, chaves de registro e contas ocultas.',
    tecnicas: ['Backdoor (serviço, tarefa agendada)', 'Conta de usuário ou administrador criada', 'Chaves de registro (Run, RunOnce)', 'Web shell em servidor web', 'Token ou certificado roubado'],
    pergunta: 'Por que o atacante busca “persistência”?',
    opcoes: [
      { texto: 'Para ser detectado mais rápido', correto: false },
      { texto: 'Para manter acesso mesmo após troca de senha ou reinício', correto: true },
      { texto: 'Para melhorar o desempenho do sistema', correto: false },
      { texto: 'Para fazer backup legítimo', correto: false },
    ],
    feedback: 'Persistência permite que o atacante volte ao ambiente depois. Monitorar criação de contas, tarefas e serviços ajuda a detectar.',
    perguntas: [
      { pergunta: 'Por que o atacante busca "persistência"?', opcoes: [{ texto: 'Para ser detectado mais rápido', correto: false }, { texto: 'Para manter acesso mesmo após troca de senha ou reinício', correto: true }, { texto: 'Para melhorar o desempenho do sistema', correto: false }, { texto: 'Para fazer backup legítimo', correto: false }], feedback: 'Persistência permite que o atacante volte ao ambiente depois. Monitorar criação de contas, tarefas e serviços ajuda a detectar.' },
      ...perguntasPersistenciaExtras,
    ],
  },
  {
    id: 'exfiltracao',
    ordem: 6,
    nome: 'Exfiltração e impacto',
    icone: '📤',
    descricao: 'O atacante extrai dados (exfiltração), criptografa sistemas (ransomware), altera ou destrói dados, ou usa o acesso para outros fins. Esta fase é onde o dano se concretiza.',
    tecnicas: ['Cópia de dados para servidor externo', 'Ransomware (criptografar e pedir resgate)', 'Vazamento de dados (venda, exposição)', 'Uso da infraestrutura (mineração, botnet)', 'Destruição ou alteração de dados'],
    pergunta: 'O que a defesa deve priorizar para reduzir impacto de exfiltração?',
    opcoes: [
      { texto: 'Ignorar classificação de dados', correto: false },
      { texto: 'Segmentação de rede, DLP, backup offline e monitoramento de tráfego anômalo', correto: true },
      { texto: 'Deixar todos os dados na mesma rede sem controle', correto: false },
      { texto: 'Nunca fazer backup', correto: false },
    ],
    feedback: 'Segmentação, DLP (Data Loss Prevention), backup imutável e detecção de upload anômalo ajudam a limitar exfiltração e a se recuperar (ex.: ransomware).',
    perguntas: [
      { pergunta: 'O que a defesa deve priorizar para reduzir impacto de exfiltração?', opcoes: [{ texto: 'Ignorar classificação de dados', correto: false }, { texto: 'Segmentação de rede, DLP, backup offline e monitoramento de tráfego anômalo', correto: true }, { texto: 'Deixar todos os dados na mesma rede sem controle', correto: false }, { texto: 'Nunca fazer backup', correto: false }], feedback: 'Segmentação, DLP (Data Loss Prevention), backup imutável e detecção de upload anômalo ajudam a limitar exfiltração e a se recuperar (ex.: ransomware).' },
      ...perguntasExfiltracaoExtras,
    ],
  },
];

// ========== JOGO 2: DEFESA EM AÇÃO (cenários de resposta) – 8 originais + extras = 36+ cenários ==========
const cenarioDefesaBase = [
  {
    id: 'd1',
    titulo: 'E-mail suspeito',
    cenario: 'Você recebeu um e-mail que parece do suporte da empresa, pedindo para clicar em um link e “atualizar sua senha” em 1 hora, senão a conta será bloqueada. O remetente é suporte@empresasegura.com (parecido com o domínio real). O que você faz?',
    opcoes: [
      { texto: 'Clico no link e atualizo a senha para não perder o acesso', correto: false, feedback: 'Links em e-mails de “urgência” são uma tática clássica de phishing. Nunca clique; vá ao site oficial digitando o endereço ou use o aplicativo da empresa.' },
      { texto: 'Não clico; verifico o endereço real da empresa e reporto o e-mail ao TI ou à equipe de segurança', correto: true, feedback: 'Correto. Não clicar e reportar protege você e ajuda a bloquear a campanha para outros.' },
      { texto: 'Encaminho o e-mail para todos os colegas para avisar', correto: false, feedback: 'Encaminhar pode espalhar o link malicioso. Melhor: reportar ao TI e deixar que a empresa avise de forma controlada.' },
      { texto: 'Respondo ao e-mail pedindo mais informações', correto: false, feedback: 'Responder confirma que sua caixa está ativa e pode gerar mais ataques. Reporte sem interagir.' },
    ],
  },
  {
    id: 'd2',
    titulo: 'Alerta: muitas falhas de login',
    cenario: 'O SIEM disparou: um IP externo tentou fazer mais de 100 logins no servidor de e-mail nos últimos 5 minutos (várias contas). Como defensor, qual a primeira ação recomendada?',
    opcoes: [
      { texto: 'Ignorar; pode ser usuário esquecendo a senha', correto: false, feedback: 'Volume alto de falhas de um mesmo IP é forte indicativo de brute force. Deve ser contido.' },
      { texto: 'Bloquear o IP no firewall ou no WAF e verificar se alguma conta foi comprometida (logins bem-sucedidos)', correto: true, feedback: 'Correto. Bloquear limita o ataque; em seguida verificar se alguma conta cedeu e forçar troca de senha + MFA.' },
      { texto: 'Desligar o servidor de e-mail para sempre', correto: false, feedback: 'Desligar sem análise causa indisponibilidade. Bloquear o IP e investigar é o caminho.' },
      { texto: 'Enviar e-mail para o IP pedindo que pare', correto: false, feedback: 'Atacantes não param por pedido. Ação técnica (bloqueio e hardening) é necessária.' },
    ],
  },
  {
    id: 'd3',
    titulo: 'Ransomware em uma estação',
    cenario: 'Um usuário reportou que os arquivos da pasta de documentos estão com extensão estranha e uma mensagem pede resgate em Bitcoin para “desbloquear”. O que a equipe de resposta deve fazer primeiro?',
    opcoes: [
      { texto: 'Pagar o resgate imediatamente para recuperar os arquivos', correto: false, feedback: 'Pagar não garante recuperação e financia o crime. Política recomendada: não pagar; usar backup e recuperação.' },
      { texto: 'Isolar a estação da rede (desconectar cabo/Wi‑Fi), preservar evidências e acionar o plano de resposta a incidentes', correto: true, feedback: 'Correto. Isolar evita propagação; preservar evidências ajuda na forense; plano de resposta define próximos passos (backup, erradicação).' },
      { texto: 'Reiniciar a máquina várias vezes para “limpar”', correto: false, feedback: 'Reiniciar pode perder evidências e o ransomware já pode ter se espalhado. Isolar primeiro.' },
      { texto: 'Conectar um pendrive na máquina para copiar os arquivos', correto: false, feedback: 'Conectar dispositivos pode contaminar ou espalhar o malware. Isolar a vítima primeiro.' },
    ],
  },
  {
    id: 'd4',
    titulo: 'Dispositivo desconhecido na rede',
    cenario: 'O monitoramento de rede detectou um dispositivo (MAC e IP novos) na VLAN da área financeira. Nenhum cadastro de novo equipamento. O que fazer?',
    opcoes: [
      { texto: 'Ignorar; pode ser visitante', correto: false, feedback: 'Visitantes não deveriam estar na VLAN financeira. Dispositivo não cadastrado em área sensível é risco.' },
      { texto: 'Investigar (quem é, de onde), isolar/bloquear se não for autorizado e revisar controle de acesso físico e rede', correto: true, feedback: 'Correto. Identificar a origem; se não autorizado, bloquear e revisar como entrou (porta física? Wi‑Fi? segmentação).' },
      { texto: 'Dar acesso total ao dispositivo para não atrapalhar', correto: false, feedback: 'Nunca conceder acesso sem identificar e autorizar. Princípio do menor privilégio.' },
      { texto: 'Desligar toda a rede da empresa', correto: false, feedback: 'Ação desproporcional. Isolar o segmento ou o dispositivo é suficiente.' },
    ],
  },
  {
    id: 'd5',
    titulo: 'Link recebido no WhatsApp',
    cenario: 'Um contato conhecido enviou: “Olha esse site com a promoção incrível [link encurtado]. Corre!”. Você não esperava essa mensagem dele. O que fazer?',
    opcoes: [
      { texto: 'Clico no link porque veio de conhecido', correto: false, feedback: 'Contas podem estar comprometidas. Link de “promoção” é típico de phishing e malware. Não clique.' },
      { texto: 'Não clico; confirmo com a pessoa por outro canal (ligação, outro app) se ela realmente enviou e reporto como suspeito se não enviou', correto: true, feedback: 'Correto. Confirmar por outro canal evita cair em conta comprometida; reportar ajuda a proteger outros.' },
      { texto: 'Encaminho para o grupo da família para todos verem', correto: false, feedback: 'Encaminhar espalha o risco. Se for golpe, você estará ajudando a enganar outros.' },
      { texto: 'Abro o link em uma “conta fake” para ver o que é', correto: false, feedback: 'Abrir em qualquer dispositivo pode infectar ou roubar dados. Melhor não abrir e reportar.' },
    ],
  },
  {
    id: 'd6',
    titulo: 'Atualização de sistema pendente',
    cenario: 'O sistema de gestão de patches indica que vários servidores críticos estão com atualizações de segurança pendentes há mais de 30 dias (incluindo correções para vulnerabilidades conhecidas). Como priorizar?',
    opcoes: [
      { texto: 'Não atualizar nunca; “se está funcionando, não mexe”', correto: false, feedback: 'Vulnerabilidades não corrigidas são a porta de entrada de muitos ataques. Atualizar é parte da defesa.' },
      { texto: 'Priorizar por criticidade e risco (serviços expostos e com CVE conhecido primeiro), testar em ambiente de homologação e aplicar em janela de manutenção', correto: true, feedback: 'Correto. Priorizar por risco, testar antes e aplicar em janela reduz impacto e falhas.' },
      { texto: 'Atualizar todos os servidores ao mesmo tempo em horário de pico', correto: false, feedback: 'Atualização em massa em horário de pico pode causar indisponibilidade. Planejamento e janela de manutenção são necessários.' },
      { texto: 'Desativar o sistema de patches para não ver mais alertas', correto: false, feedback: 'Ignorar o problema aumenta o risco. Patches são defesa essencial.' },
    ],
  },
  {
    id: 'd7',
    titulo: 'Conta de e-mail comprometida',
    cenario: 'Foi confirmado que a conta de e-mail de um gestor foi usada para enviar phishing para a lista de contatos. A senha já foi alterada. O que mais a equipe deve fazer?',
    opcoes: [
      { texto: 'Só trocar a senha e encerrar o caso', correto: false, feedback: 'É preciso verificar encaminhamentos, regras de e-mail e outras contas (SSO, nuvem) que possam ter sido acessadas.' },
      { texto: 'Verificar regras de encaminhamento e caixas de saída, revisar acessos a sistemas ligados (SSO, nuvem), forçar MFA e avisar contatos que receberam o phishing', correto: true, feedback: 'Correto. Atacantes costumam criar regras de encaminhamento e acessar outros sistemas. Limpar regras, revisar acessos e avisar terceiros contém o dano.' },
      { texto: 'Deletar toda a caixa de e-mail do gestor', correto: false, feedback: 'Deletar pode perder evidências e dados de trabalho. Investigar e limpar regras é o adequado.' },
      { texto: 'Nada mais; o atacante já foi embora', correto: false, feedback: 'Conta comprometida pode ter sido usada para persistência ou acesso a outros sistemas. Resposta completa é necessária.' },
    ],
  },
  {
    id: 'd8',
    titulo: 'Senha forte e MFA',
    cenario: 'A empresa decidiu exigir MFA (autenticação em dois fatores) em todos os acessos a sistemas críticos. Um usuário reclama que “é chato” e pede exceção. Como o TI deve responder?',
    opcoes: [
      { texto: 'Conceder exceção para não incomodar', correto: false, feedback: 'Exceções enfraquecem a segurança para todos. Contas sem MFA são alvo preferencial de phishing.' },
      { texto: 'Manter a política; explicar que MFA protege a conta e os dados da empresa e oferecer suporte para configurar (app, token)', correto: true, feedback: 'Correto. MFA é uma das defesas mais efetivas contra roubo de senha. Suporte facilita a adoção.' },
      { texto: 'Remover MFA de todos para ser “justo”', correto: false, feedback: 'Remover MFA aumenta o risco. A política deve ser para todos os acessos sensíveis.' },
      { texto: 'Criar uma senha única “super forte” e compartilhar com o usuário', correto: false, feedback: 'Senha compartilhada e sem MFA é péssima prática. Cada um com sua conta e MFA.' },
    ],
  },
];
export const cenarioDefesa = [...cenarioDefesaBase, ...cenariosDefesaExtras];
