// Curso Completo de Segurança Cibernética – Formação Profissional
// Organizado por período para fácil localização e consulta

import { conteudoCompleto } from './conteudoCompleto.js';

export const periodos = [
  { id: '1', nome: '1º Período', titulo: 'Fundamentos Sólidos', cor: '#10b981', icone: '◆' },
  { id: '2', nome: '2º Período', titulo: 'Sistemas, Redes e Controle', cor: '#3b82f6', icone: '◆' },
  { id: '3', nome: '3º Período', titulo: 'Defesa e Ataque Controlado', cor: '#f59e0b', icone: '◆' },
  { id: '4', nome: '4º Período', titulo: 'Operações de Segurança', cor: '#ef4444', icone: '◆' },
  { id: '5', nome: '5º Período', titulo: 'Especialização e Investigação', cor: '#8b5cf6', icone: '◆' },
];

// Compatibilidade: categorias = periodos para filtro
export const categorias = periodos;

export function getPeriodo(id) {
  return periodos.find((p) => p.id === id);
}

export function getCategoria(id) {
  return getPeriodo(id);
}

export function getEstudosPorPeriodo(periodoId) {
  return estudos.filter((e) => e.periodoId === periodoId);
}

export function buscarEstudos(termo) {
  if (!termo || !termo.trim()) return estudos;
  const t = termo.toLowerCase().trim();
  return estudos.filter(
    (e) =>
      e.titulo.toLowerCase().includes(t) ||
      (e.resumo && e.resumo.toLowerCase().includes(t)) ||
      (e.tags && e.tags.some((tag) => tag.toLowerCase().includes(t)))
  );
}

// Todas as disciplinas do curso com conteúdo destrinchado (conteúdo completo em conteudoCompleto.js)
const estudosBase = [
  // ========== 1º PERÍODO – FUNDAMENTOS SÓLIDOS ==========
  {
    id: 'p1-conceitos-computacao',
    periodoId: '1',
    titulo: 'Conceitos de Computação',
    horas: 72,
    resumo: 'Funcionamento real do computador: hardware, software, memória e processamento. Base do raciocínio técnico.',
    tags: ['hardware', 'software', 'CPU', 'memória', 'fundamentos'],
    conteudo: `# Conceitos de Computação (72h)
## Objetivo
Compreender o funcionamento interno do computador. Segurança começa entendendo a máquina.

## Conteúdo destrinchado

### Hardware (parte física)
- **CPU**: executa instruções; núcleos e threads; ataques de negação de serviço exploram processamento.
- **Memória RAM**: volátil; dados sensíveis passam por ela; ataques em memória (buffer overflow, injeção de código).
- **Disco (HD/SSD)**: sistema de arquivos; apagar não significa destruir; dados em repouso.
- **Placa-mãe e periféricos**: comunicação entre componentes; riscos físicos (USB, firmware).

### Software (parte lógica)
- **Sistema operacional**: gerencia memória, processos, usuários e permissões. Quem controla o SO controla tudo.
- **Aplicativos**: vulnerabilidades nascem no software.
- **Drivers e firmware**: camadas baixas = impacto alto.

### Ciclo entrada → processamento → saída
- Dado, informação e conhecimento.
- Nada acontece "do nada" em um computador.

### Mentalidade profissional
O profissional de segurança entende a máquina. O operador fraco só sabe clicar em ferramenta.

### Prática
Identificar componentes reais e relacionar cada um com possíveis falhas de segurança.`,
  },
  {
    id: 'p1-fundamentos-administracao',
    periodoId: '1',
    titulo: 'Fundamentos da Administração',
    horas: 72,
    resumo: 'Estrutura organizacional, processos, normas e hierarquia. Segurança protege o negócio e as pessoas.',
    tags: ['administração', 'processos', 'organização', 'decisão'],
    conteudo: `# Fundamentos da Administração (72h)
## Objetivo
Entender como as organizações funcionam. Segurança protege processos e pessoas, não apenas computadores.

## Conteúdo destrinchado
- Estrutura organizacional.
- Processos, normas e hierarquia.
- Responsabilidade e tomada de decisão.
- Por que políticas existem; por que acesso não é livre; por que auditoria é necessária.

### Mentalidade profissional
Segurança não protege computador. Protege o negócio, a operação e as pessoas.

### Prática
Analisar uma empresa fictícia e identificar onde a segurança da informação é crítica.`,
  },
  {
    id: 'p1-infraestrutura-ti',
    periodoId: '1',
    titulo: 'Infraestrutura de Tecnologia da Informação',
    horas: 72,
    resumo: 'Servidores, estações, redes, datacenter e serviços. Não se protege o que não se conhece.',
    tags: ['infraestrutura', 'servidores', 'rede', 'datacenter'],
    conteudo: `# Infraestrutura de TI (72h)
## Objetivo
Conhecer o ambiente que será protegido.

## Conteúdo destrinchado
- **Estações de trabalho**: usuário como maior superfície de ataque (phishing, downloads, pendrives).
- **Servidores**: arquivos, banco de dados, e-mail, autenticação; controle de acesso e monitoramento.
- **Datacenter**: energia, climatização, controle físico; risco de acesso físico.
- **Rede**: LAN, WAN, internet; invasões, interceptação, DDoS.
- **Armazenamento**: NAS, SAN, nuvem; backup e criptografia.
- **Monitoramento**: uso de rede, status de servidores, atividades.

### Mentalidade profissional
Não se protege o que não se conhece. Mapear ambientes e identificar pontos críticos de risco.

### Prática
Mapear uma infraestrutura básica de TI e apontar riscos físicos e lógicos.`,
  },
  {
    id: 'p1-pensamento-computacional',
    periodoId: '1',
    titulo: 'Pensamento Computacional',
    horas: 72,
    resumo: 'Decomposição de problemas, reconhecimento de padrões, algoritmos. O profissional pensa antes de agir.',
    tags: ['lógica', 'algoritmos', 'decomposição', 'padrões'],
    conteudo: `# Pensamento Computacional (72h)
## Objetivo
Desenvolver raciocínio lógico e organizado. O profissional calmo pensa antes de agir.

## Conteúdo destrinchado
- **Decomposição**: dividir problemas grandes em partes menores (ex.: "internet não funciona" → cabo, IP, gateway, DNS).
- **Reconhecimento de padrões**: falhas e ataques se repetem; acelera diagnóstico.
- **Abstração**: focar no essencial (quem acessa, o que executa, onde está o dado).
- **Algoritmos**: sequência lógica de passos para diagnóstico.
- **Causa e efeito**: nada acontece por mistério; investigação lógica.

### Mentalidade profissional
O profissional analisa. O amador reage. Resolver problemas técnicos por etapas, sem pular fases.

### Prática
Resolver problemas técnicos por etapas, sem improviso.`,
  },
  {
    id: 'p1-pesquisa-tecnologia-sociedade',
    periodoId: '1',
    titulo: 'Pesquisa, Tecnologia e Sociedade',
    horas: 72,
    resumo: 'Impacto social da tecnologia, ética e responsabilidade. Conhecimento sem ética destrói carreiras.',
    tags: ['ética', 'sociedade', 'LGPD', 'responsabilidade'],
    conteudo: `# Pesquisa, Tecnologia e Sociedade (72h)
## Objetivo
Compreender o impacto social da tecnologia e da segurança.

## Conteúdo destrinchado
- Evolução tecnológica (1940–hoje).
- Tecnologia e sociedade: bancos, hospitais, transporte dependem de sistemas.
- **Ética na tecnologia**: proteger x invadir; a diferença entre profissional e criminoso é ética.
- **Legislação**: LGPD – proteção de dados pessoais; multas e sanções.
- Impactos sociais: benefícios e desafios (vazamento, desinformação, crimes digitais).

### Mentalidade profissional
Conhecimento sem ética destrói carreiras. Segurança sem responsabilidade vira crime.

### Prática
Analisar casos reais de falhas tecnológicas com impacto social.`,
  },
  {
    id: 'p1-projeto-integrador-diagnostico',
    periodoId: '1',
    titulo: 'Projeto Integrador – Diagnóstico de Soluções em TI',
    horas: 72,
    resumo: 'Levantamento de ambiente, identificação de problemas e proposta de soluções. Diagnóstico antes de agir.',
    tags: ['projeto integrador', 'diagnóstico', 'relatório', 'soluções'],
    conteudo: `# Projeto Integrador – Diagnóstico de Soluções em TI (72h)
## Objetivo
Integrar todo o conhecimento do período. Diagnosticar antes de agir é sinal de maturidade técnica.

## Conteúdo destrinchado
- **Levantamento do ambiente**: quantos computadores, sistemas operacionais, rede, servidores, serviços.
- **Identificação de problemas**: usuários administradores, sistemas desatualizados, rede mal configurada, ausência de backup.
- **Análise de riscos**: classificar em baixo, médio e alto risco.
- **Proposta de soluções**: remover privilégios, atualizar, controlar acesso, backup, monitorar.
- **Relatório técnico**: descrição do ambiente, problemas, riscos, recomendações.

### Resultado esperado
Relatório técnico claro, objetivo e profissional. Nada de achismo.`,
  },

  // ========== 2º PERÍODO – SISTEMAS, REDES E CONTROLE ==========
  {
    id: 'p2-banco-dados',
    periodoId: '2',
    titulo: 'Banco de Dados',
    horas: 72,
    resumo: 'Armazenamento, consulta e proteção de dados. SQL Injection e práticas de segurança em SGBD.',
    tags: ['banco de dados', 'SQL', 'SGBD', 'dados'],
    conteudo: `# Banco de Dados (72h)
## Objetivo
Entender como os dados são armazenados, consultados e protegidos. Ataques a bancos são clássicos e perigosos.

## Conteúdo destrinchado
- O que é banco de dados: tabelas, registros, campos.
- **SGBD**: MySQL, PostgreSQL, SQL Server, Oracle – armazenamento, consulta, permissões.
- **SQL**: SELECT, INSERT, UPDATE, DELETE. **SQL Injection** como ataque famoso.
- Segurança: acesso não autorizado, vazamento, alteração, exclusão; controle de acesso, criptografia, backup, auditoria.
- Dados valem dinheiro; proteger dados é proteger o coração do sistema.`,
  },
  {
    id: 'p2-etica-cidadania-sustentabilidade',
    periodoId: '2',
    titulo: 'Ética, Cidadania e Sustentabilidade',
    horas: 72,
    resumo: 'Segurança sem ética vira crime. Limite, lei e responsabilidade profissional.',
    tags: ['ética', 'cidadania', 'sustentabilidade', 'responsabilidade'],
    conteudo: `# Ética, Cidadania e Sustentabilidade (72h)
## Objetivo
Segurança sem ética vira crime. Aprender limite, lei e responsabilidade profissional.`,
  },
  {
    id: 'p2-protocolos-redes',
    periodoId: '2',
    titulo: 'Protocolos de Redes',
    horas: 72,
    resumo: 'TCP/IP, DNS, DHCP, HTTP/HTTPS, portas. Quem não entende protocolo não entende ataque.',
    tags: ['TCP/IP', 'DNS', 'DHCP', 'HTTP', 'portas'],
    conteudo: `# Protocolos de Redes (72h)
## Objetivo
Entender como os dados trafegam. Quem não entende protocolo não entende ataque.

## Conteúdo destrinchado
- **Modelo TCP/IP**: camadas de aplicação, transporte, internet, rede.
- **Endereço IP**: privado e público; identidade de cada máquina.
- **DNS**: traduz nomes em números (google.com → 142.250.78.14).
- **DHCP**: distribui IP, gateway, DNS automaticamente.
- **HTTP e HTTPS**: HTTPS = comunicação criptografada.
- **Portas**: 80 (HTTP), 443 (HTTPS), 22 (SSH), 3389 (RDP), 21 (FTP). Cada porta aberta pode ser entrada.

### Mentalidade
Quem está falando com quem? Por qual porta? Por qual protocolo? Assim se detectam invasões.`,
  },
  {
    id: 'p2-seguranca-auditoria-sistemas',
    periodoId: '2',
    titulo: 'Segurança e Auditoria de Sistemas de Informação',
    horas: 72,
    resumo: 'Tríade CIA, controle de acesso, políticas, auditoria, logs e gestão de vulnerabilidades.',
    tags: ['CIA', 'auditoria', 'logs', 'vulnerabilidades'],
    conteudo: `# Segurança e Auditoria de Sistemas de Informação (72h)
## Objetivo
Saber se um sistema está seguro. Controle de acessos, políticas, auditoria e conformidade.

## Conteúdo destrinchado
- **Tríade CIA**: Confidencialidade, Integridade, Disponibilidade. Se um falha, a segurança falhou.
- **Controle de acesso**: privilégio mínimo; usuário comum x administrador.
- **Políticas de segurança**: senha, acesso remoto, uso de equipamentos, backup.
- **Auditoria**: verificar logs, permissões, atividades suspeitas, configurações.
- **Logs**: quem acessou, quando, o que fez. Ler logs como detetive lê pistas.
- **Vulnerabilidades**: fraquezas por configuração, software desatualizado, senha fraca; gestão de vulnerabilidades.`,
  },
  {
    id: 'p2-sistema-operacional-i',
    periodoId: '2',
    titulo: 'Sistema Operacional I',
    horas: 72,
    resumo: 'Fundamentos de Windows e Linux: usuários, permissões, processos, serviços e logs.',
    tags: ['Windows', 'Linux', 'usuários', 'permissões', 'processos'],
    conteudo: `# Sistema Operacional I (72h)
## Objetivo
Administrar sistemas na prática. Windows e Linux dominam o mercado corporativo.

## Conteúdo destrinchado
- **Usuários**: criar, remover, definir permissões; nunca dar admin para todos.
- **Permissões**: leitura, escrita, execução; Linux rigoroso; Windows ACL.
- **Processos**: visualizar, identificar consumo, finalizar; detectar malware e processos suspeitos.
- **Serviços**: cada serviço aberto é possível porta de entrada; desativar o desnecessário.
- **Atualizações**: muitas invasões por sistemas desatualizados.
- **Logs**: login, erros, rede, instalação; fundamentais para auditoria e investigação.`,
  },
  {
    id: 'p2-projeto-integrador-rede-local',
    periodoId: '2',
    titulo: 'Projeto Integrador – Rede Local',
    horas: 72,
    resumo: 'Montagem, configuração e análise de rede local com foco em segurança.',
    tags: ['rede local', 'IP', 'DHCP', 'DNS', 'switch', 'roteador'],
    conteudo: `# Projeto Integrador – Rede Local (72h)
## Objetivo
Montar uma rede corporativa básica: planejamento, componentes, IP, serviços, testes e segurança.

## Conteúdo destrinchado
- Planejamento: faixa de IP (ex.: 192.168.0.0/24), gateway, serviços.
- Componentes: switch, roteador, servidor, estações.
- Configuração de IP; conflitos.
- Serviços: DHCP, DNS, arquivos, autenticação.
- Testes: ping, tracert, ipconfig.
- Identificação de problemas: conflito de IP, cabo, DNS, firewall.
- Segurança na rede local: controle de acesso, segmentação, monitoramento.`,
  },

  // ========== 3º PERÍODO – DEFESA E ATAQUE CONTROLADO ==========
  {
    id: 'p3-conectividade-redes',
    periodoId: '3',
    titulo: 'Conectividade de Redes',
    horas: 72,
    resumo: 'Roteamento, tabela de rotas, NAT, VLAN, VPN. Redes conectando redes.',
    tags: ['roteamento', 'NAT', 'VLAN', 'VPN'],
    conteudo: `# Conectividade de Redes (72h)
## Objetivo
Como redes diferentes se conectam. A internet é uma rede de redes.

## Conteúdo destrinchado
- **Roteamento**: melhor caminho para os dados; roteador como cruzamento.
- **Tabela de rotas**: destino, gateway, interface, métrica.
- **NAT**: vários dispositivos com um único IP público.
- **VLAN**: dividir rede física em redes lógicas (administrativo, financeiro, visitantes); isolamento.
- **VPN**: túnel seguro; acesso remoto, criptografia.`,
  },
  {
    id: 'p3-criptografia',
    periodoId: '3',
    titulo: 'Criptografia',
    horas: 72,
    resumo: 'Simétrica, assimétrica, hash, certificados. Segurança sem criptografia não existe.',
    tags: ['criptografia', 'AES', 'RSA', 'hash', 'certificados'],
    conteudo: `# Criptografia (72h)
## Objetivo
Proteger informações contra acesso não autorizado. Sem criptografia, a internet moderna não funcionaria.

## Conteúdo destrinchado
- **Texto claro e texto cifrado**; chave criptográfica.
- **Simétrica**: mesma chave (AES, DES); rápida; usada em disco e comunicação.
- **Assimétrica**: chave pública e privada (RSA, ECC); HTTPS, assinaturas.
- **Hash**: resumo único; não reversível; senhas, integridade de arquivos.
- **Certificados digitais**: identidade do servidor, autenticidade, criptografia em HTTPS.`,
  },
  {
    id: 'p3-empreendedorismo-inovacao',
    periodoId: '3',
    titulo: 'Empreendedorismo, Inovação e Economia Criativa',
    horas: 72,
    resumo: 'Pensar como estrategista. Segurança também é negócio.',
    tags: ['empreendedorismo', 'inovação', 'economia criativa'],
    conteudo: `# Empreendedorismo, Inovação e Economia Criativa (72h)
## Objetivo
Pensar como estrategista, não só como técnico. Segurança também é negócio.`,
  },
  {
    id: 'p3-ethical-hacking',
    periodoId: '3',
    titulo: 'Ethical Hacking',
    horas: 36,
    resumo: 'Teste de invasão autorizado. Pensar como o invasor para defender. Pentest.',
    tags: ['ethical hacking', 'pentest', 'reconhecimento', 'exploração'],
    conteudo: `# Ethical Hacking (36h)
## Objetivo
Teste de invasão autorizado. Descobrir falhas antes que criminosos descubram.

## Conteúdo destrinchado
- **White Hat x Black Hat x Gray Hat**. Foco em White Hat.
- **Etapas**: Reconhecimento → Varredura → Exploração → Pós-exploração → Relatório.
- **Reconhecimento (OSINT)**: servidores, domínios, tecnologias.
- **Varredura**: portas abertas, serviços, sistemas.
- **Exploração**: falhas conhecidas (software desatualizado, senhas fracas, configuração).
- **Pós-exploração**: até onde o acesso chega.

### Mentalidade
"Se eu fosse tentar entrar, por onde começaria?"`,
  },
  {
    id: 'p3-sistema-operacional-ii',
    periodoId: '3',
    titulo: 'Sistema Operacional II',
    horas: 72,
    resumo: 'Hardening, controle avançado de permissões, monitoramento, logs e automação.',
    tags: ['hardening', 'GPO', 'logs', 'automação'],
    conteudo: `# Sistema Operacional II (72h)
## Objetivo
Proteger e administrar sistemas em nível profissional. Hardening e administração avançada.

## Conteúdo destrinchado
- **Hardening**: remover serviços desnecessários, desativar portas, limitar permissões, atualizar.
- **Controle avançado**: Linux (usuários, grupos); Windows (GPO – senha, USB, instalação).
- **Monitoramento**: CPU, memória, processos, acessos.
- **Logs**: registro detalhado; análise para detectar atividades suspeitas.
- **Serviços**: revisar ativos, desativar desnecessários.
- **Automação e acesso remoto**: gerenciar muitas máquinas.`,
  },
  {
    id: 'p3-projeto-integrador-trafego',
    periodoId: '3',
    titulo: 'Projeto Integrador – Interpretação de Tráfego de Rede',
    horas: 72,
    resumo: 'Análise de pacotes, detecção de anomalias e investigação técnica.',
    tags: ['tráfego', 'pacotes', 'Wireshark', 'análise'],
    conteudo: `# Projeto Integrador – Interpretação de Tráfego de Rede (72h)
## Objetivo
Analisar o que circula na rede. Ler conversas entre máquinas.

## Conteúdo destrinchado
- **Pacote**: cabeçalho, carga útil, rota.
- **Captura**: ferramentas mostram pacotes, protocolos, dispositivos.
- **Protocolos**: HTTP, HTTPS, DNS, FTP, SSH.
- **Comportamentos anormais**: volume alto, endereços desconhecidos, tentativas repetidas → ataques ou falhas.
- **Investigação de incidentes**: como aconteceu, qual máquina, quais dados.`,
  },

  // ========== 4º PERÍODO – OPERAÇÕES DE SEGURANÇA ==========
  {
    id: 'p4-cybersecurity',
    periodoId: '4',
    titulo: 'Cybersecurity',
    horas: 72,
    resumo: 'Ameaças, superfície de ataque, camadas de segurança e monitoramento. Processo contínuo.',
    tags: ['cybersecurity', 'malware', 'phishing', 'DDoS', 'defesa em profundidade'],
    conteudo: `# Cybersecurity (72h)
## Objetivo
Estratégia da segurança digital. Tecnologia, processos e pessoas.

## Conteúdo destrinchado
- **Ameaças**: malware (vírus, trojan, ransomware, spyware), phishing, força bruta, DDoS.
- **Superfície de ataque**: portas, serviços, aplicações, dispositivos; quanto maior, maior o risco.
- **Defesa em profundidade**: firewall, antivírus, autenticação, criptografia, monitoramento.
- **Monitoramento**: tráfego, usuários, eventos, tentativas de invasão.
- Segurança nunca fica "pronta"; é processo contínuo.`,
  },
  {
    id: 'p4-teste-intrusao-redes',
    periodoId: '4',
    titulo: 'Práticas de Teste de Intrusão em Redes',
    horas: 72,
    resumo: 'Pentest em redes: reconhecimento, enumeração, exploração e relatório técnico.',
    tags: ['pentest', 'varredura', 'vulnerabilidades', 'relatório'],
    conteudo: `# Práticas de Teste de Intrusão em Redes (72h)
## Objetivo
Simular ataques controlados em redes para descobrir falhas.

## Conteúdo destrinchado
- **Mapeamento**: máquinas, servidores, serviços, portas.
- **Enumeração**: protocolos, versões de software, configurações.
- **Identificação de vulnerabilidades**: desatualizado, senhas fracas, permissões excessivas.
- **Exploração controlada**: testar se a falha é explorável; avaliar impacto.
- **Pós-exploração**: alcance do acesso, dados acessíveis.
- **Relatório**: vulnerabilidades, risco, impacto, recomendações.`,
  },
  {
    id: 'p4-protecao-perimetro',
    periodoId: '4',
    titulo: 'Proteção de Perímetro',
    horas: 72,
    resumo: 'Firewall, IDS, IPS, segmentação e DMZ. Primeira linha de defesa.',
    tags: ['firewall', 'IDS', 'IPS', 'DMZ', 'segmentação'],
    conteudo: `# Proteção de Perímetro (72h)
## Objetivo
Primeira linha de defesa. Perímetro = limite entre rede interna e mundo externo.

## Conteúdo destrinchado
- **Firewall**: controla tráfego; regras de permitir/bloquear.
- **IDS**: detecta atividades suspeitas (muitos logins, varredura de portas); gera alerta.
- **IPS**: detecta e bloqueia automaticamente.
- **Segmentação**: rede administrativa, financeira, visitantes, servidores; reduz impacto.
- **DMZ**: área entre internet e rede interna; servidores web, e-mail, portais.`,
  },
  {
    id: 'p4-seguranca-mobile-iot',
    periodoId: '4',
    titulo: 'Segurança em Redes Móveis e Internet das Coisas',
    horas: 72,
    resumo: 'Riscos em dispositivos móveis, IoT, botnets e boas práticas.',
    tags: ['IoT', 'mobile', 'botnet', '5G'],
    conteudo: `# Segurança em Redes Móveis e IoT (72h)
## Objetivo
Cada dispositivo conectado pode virar ponto de ataque.

## Conteúdo destrinchado
- Redes móveis: 2G a 5G; desafios de segurança.
- **Dispositivos IoT**: sensores, microcontroladores; casas inteligentes, indústria.
- **Riscos**: senhas padrão, firmware desatualizado, falta de criptografia.
- **Botnets**: dispositivos comprometidos para DDoS, spam.
- **Boas práticas**: alterar senha padrão, atualizar firmware, isolar em rede separada.`,
  },
  {
    id: 'p4-tratamento-resposta-incidentes',
    periodoId: '4',
    titulo: 'Tratamento e Resposta a Incidentes',
    horas: 72,
    resumo: 'Identificação, contenção, erradicação, recuperação e análise pós-incidente.',
    tags: ['resposta a incidentes', 'contenção', 'erradicação', 'recuperação'],
    conteudo: `# Tratamento e Resposta a Incidentes (72h)
## Objetivo
Reagir de forma organizada quando um ataque acontece.

## Conteúdo destrinchado
- **Identificação**: tráfego anormal, login suspeito, arquivos alterados, alertas.
- **Contenção**: isolar máquina, bloquear IP, desligar serviços.
- **Erradicação**: remover malware, corrigir vulnerabilidades, atualizar, redefinir senhas.
- **Recuperação**: restaurar backup, validar integridade, monitorar.
- **Análise pós-incidente**: como aconteceu, como evitar de novo.`,
  },
  {
    id: 'p4-projeto-integrador-defesa',
    periodoId: '4',
    titulo: 'Projeto Integrador – Defesa e Resposta a Incidentes',
    horas: 36,
    resumo: 'Simulação de ataque real com resposta estruturada em ambiente de TIC.',
    tags: ['projeto integrador', 'SOC', 'simulação', 'defesa'],
    conteudo: `# Projeto Integrador – Defesa e Resposta a Incidentes (36h)
## Objetivo
Simular ambiente corporativo; detectar, analisar e responder a incidentes.

## Conteúdo destrinchado
- Ambiente: servidores, rede, firewall, banco de dados.
- Monitoramento; detecção de incidentes (invasão, malware, acesso não autorizado).
- Resposta: isolamento, bloqueio, análise, correção.
- Relatório técnico: descrição, causa, impacto, medidas, recomendações.
- Mentalidade de analista em SOC (Security Operations Center).`,
  },

  // ========== 5º PERÍODO – ESPECIALIZAÇÃO E INVESTIGAÇÃO ==========
  {
    id: 'p5-analise-malwares',
    periodoId: '5',
    titulo: 'Análise de Malwares',
    horas: 36,
    resumo: 'Comportamento de códigos maliciosos. Análise estática e dinâmica (sandbox).',
    tags: ['malware', 'vírus', 'ransomware', 'análise estática', 'sandbox'],
    conteudo: `# Análise de Malwares (36h)
## Objetivo
Entender o comportamento de códigos maliciosos. Separa curioso de especialista.

## Conteúdo destrinchado
- Tipos: vírus, trojan, ransomware, spyware.
- **Infecção**: e-mail, downloads, vulnerabilidades, USB.
- **Ocultação**: ofuscação, criptografia interna, persistência.
- **Análise estática**: examinar sem executar (estrutura, strings, bibliotecas).
- **Análise dinâmica**: executar em sandbox; arquivos criados, conexões, alterações.`,
  },
  {
    id: 'p5-pericia-forense',
    periodoId: '5',
    titulo: 'Análise e Perícia Forense Computacional',
    horas: 72,
    resumo: 'Coleta, preservação e análise de evidências digitais com validade técnica e jurídica.',
    tags: ['forense', 'evidências', 'imagem forense', 'logs'],
    conteudo: `# Análise e Perícia Forense Computacional (72h)
## Objetivo
Investigar incidentes digitais; coletar evidências com validade técnica e jurídica.

## Conteúdo destrinchado
- **Coleta**: discos, arquivos, registros de rede, logs; não alterar evidências.
- **Imagem forense**: cópia exata do disco antes de analisar; preservar original.
- **Análise de arquivos**: ocultos, apagados (recuperáveis), suspeitos.
- **Análise de logs**: login, acessos, execução, conexões.
- **Reconstrução**: quando começou, qual máquina, quais dados.`,
  },
  {
    id: 'p5-auditoria-conformidade',
    periodoId: '5',
    titulo: 'Auditoria e Conformidade em Segurança Cibernética',
    horas: 72,
    resumo: 'ISO 27001, LGPD, GDPR. Políticas, controles e relatório de auditoria.',
    tags: ['auditoria', 'conformidade', 'ISO 27001', 'LGPD', 'GDPR'],
    conteudo: `# Auditoria e Conformidade em Segurança Cibernética (72h)
## Objetivo
Garantir que a organização siga normas, leis e boas práticas.

## Conteúdo destrinchado
- **Conformidade**: ISO 27001, LGPD, GDPR.
- **Políticas**: senha, acesso remoto, uso de equipamentos, backup.
- **Controles**: técnicos (firewall, criptografia) e administrativos (políticas, treinamento).
- **Avaliação de riscos**: ameaças, vulnerabilidades, impacto.
- **Relatório de auditoria**: problemas, risco, recomendações, plano de ação.`,
  },
  {
    id: 'p5-cyberwar',
    periodoId: '5',
    titulo: 'Cyberwar',
    horas: 36,
    resumo: 'Guerra cibernética, espionagem e ataques a infraestrutura crítica.',
    tags: ['cyberwar', 'espionagem', 'infraestrutura crítica', 'geopolítica'],
    conteudo: `# Cyberwar (36h)
## Objetivo
Conflitos digitais entre nações; espionagem e operações no espaço digital.

## Conteúdo destrinchado
- **Guerra cibernética**: ataques para atingir infraestrutura, sistemas, informações.
- Alvos: redes elétricas, sistemas financeiros, transporte, comunicações militares.
- **Espionagem cibernética**: segredos industriais, estratégias, pesquisas.
- **Infraestrutura crítica**: energia, água, transporte, telecomunicações, saúde.
- **Defesa cibernética nacional**: monitoramento de ameaças e tentativas de invasão.`,
  },
  {
    id: 'p5-mitigacao-vulnerabilidades',
    periodoId: '5',
    titulo: 'Mitigação de Vulnerabilidades',
    horas: 72,
    resumo: 'Identificar, classificar e corrigir falhas. Gestão contínua de vulnerabilidades.',
    tags: ['vulnerabilidades', 'patch', 'gestão', 'priorização'],
    conteudo: `# Mitigação de Vulnerabilidades (72h)
## Objetivo
Identificar, priorizar e corrigir falhas antes que sejam exploradas.

## Conteúdo destrinchado
- **Identificação**: varredura, auditoria, pentest, análise de configuração.
- **Classificação**: baixo, médio, alto risco; priorizar correções.
- **Correção**: atualização, patch, configuração, permissões, hardening.
- **Gestão contínua**: novas falhas surgem sempre; monitorar, atualizar, analisar.
- **Boas práticas**: sistemas atualizados, privilégio mínimo, segmentar, monitorar.`,
  },
  {
    id: 'p5-projeto-integrador-final',
    periodoId: '5',
    titulo: 'Projeto Integrador – Segurança Cibernética e Forense',
    horas: 36,
    resumo: 'Cenário completo: detecção, investigação, análise de malware, contenção e relatório final.',
    tags: ['projeto final', 'forense', 'resposta a incidentes', 'relatório'],
    conteudo: `# Projeto Integrador Final – Segurança Cibernética e Forense (36h)
## Objetivo
Cenário real: incidente de segurança; aplicar todo o conhecimento do curso.

## Conteúdo destrinchado
- **Cenário**: rede corporativa com servidores, firewall, banco de dados.
- **Detecção**: tráfego incomum, acessos inesperados, arquivos modificados.
- **Investigação**: qual máquina, como começou, qual vulnerabilidade, quais dados.
- **Análise de malware** (se aplicável): comportamento, conexões, arquivos alterados.
- **Contenção e recuperação**: isolar, remover, corrigir, restaurar backup.
- **Relatório final**: descrição, análise, impacto, medidas, recomendações.

## Formação final
Ao concluir: analista de segurança, SOC, resposta a incidentes, auditor, forense, pentester.`,
  },
];

// Mescla conteúdo completo (nível faculdade de elite) quando disponível
const estudos = estudosBase.map((e) => ({
  ...e,
  conteudo: conteudoCompleto[e.id] ?? e.conteudo,
}));

export { estudos };
