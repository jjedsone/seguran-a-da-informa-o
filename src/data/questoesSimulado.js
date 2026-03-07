// Banco de questões para simulado – CompTIA Security+, CySA+, CASP+ e OSCP
// Questões de PRÁTICA alinhadas aos objetivos públicos das provas (não são questões reais do exame).
// respostaCorreta = índice (0-based) da opção correta em opcoes[]

export const certificacoesSimulado = [
  { id: 'security-plus', nome: 'CompTIA Security+', sigla: 'SY0-701' },
  { id: 'cysa-plus', nome: 'CompTIA CySA+', sigla: 'CS0-003' },
  { id: 'casp-plus', nome: 'CompTIA CASP+', sigla: 'CAS-004' },
  { id: 'oscp', nome: 'OSCP', sigla: 'OSCP' },
];

const _ = (opcoes, correta, explicacao, cert) => ({
  opcoes,
  respostaCorreta: correta,
  explicacao,
  certificacao: cert,
});

export const questoesSimulado = [
  // --- Security+ (40) ---
  {
    id: 's1',
    pergunta: 'O que o princípio de "menor privilégio" (least privilege) determina?',
    ..._(['A) Conceder aos usuários apenas as permissões necessárias para suas funções', 'B) Exigir duas formas de autenticação para todos os acessos', 'C) Criptografar todos os dados em repouso e em trânsito', 'D) Manter logs de auditoria por no mínimo 7 anos'], 0, 'Menor privilégio significa dar apenas o acesso mínimo necessário para executar a tarefa, reduzindo a superfície de ataque.', 'security-plus'),
  },
  {
    id: 's2',
    pergunta: 'Qual técnica é mais eficaz para mitigar ataques de phishing por e-mail?',
    ..._(['A) Firewall de aplicação web', 'B) Filtro de spam e treinamento de conscientização', 'C) Segmentação de rede', 'D) IDS baseado em assinatura'], 1, 'Phishing explora o fator humano; filtros reduzem a quantidade e o treinamento ajuda a identificar e não clicar em links maliciosos.', 'security-plus'),
  },
  {
    id: 's3',
    pergunta: 'O que é MFA (Multi-Factor Authentication)?',
    ..._(['A) Uso de duas ou mais senhas diferentes', 'B) Autenticação usando dois ou mais fatores (ex.: senha + token ou biometria)', 'C) Múltiplos firewalls em série', 'D) Criptografia de dados em múltiplas camadas'], 1, 'MFA combina algo que você sabe (senha), algo que você tem (token/celular) ou algo que você é (biometria).', 'security-plus'),
  },
  {
    id: 's4',
    pergunta: 'Qual protocolo criptográfico é recomendado para tunelamento VPN moderno?',
    ..._(['A) PPTP', 'B) L2TP sem criptografia', 'C) IPsec ou WireGuard', 'D) SSL v2'], 2, 'IPsec e WireGuard oferecem criptografia forte; PPTP e SSL v2 são considerados inseguros.', 'security-plus'),
  },
  {
    id: 's5',
    pergunta: 'O que é um ataque de "man-in-the-middle" (MITM)?',
    ..._(['A) Invasão física ao datacenter', 'B) Interceptação e possivelmente alteração do tráfego entre duas partes', 'C) Ataque de negação de serviço distribuído', 'D) Roubo de credenciais por engenharia social'], 1, 'No MITM o atacante se coloca entre duas partes que comunicam e pode ler ou modificar o tráfego.', 'security-plus'),
  },
  {
    id: 's6',
    pergunta: 'Qual é a função principal de um IDS (Intrusion Detection System)?',
    ..._(['A) Bloquear automaticamente todo o tráfego suspeito', 'B) Detectar e alertar sobre atividades anômalas ou maliciosas', 'C) Criptografar o tráfego de rede', 'D) Gerenciar políticas de firewall'], 1, 'IDS monitora e alerta; um IPS (Intrusion Prevention System) pode bloquear. IDS não altera o tráfego por padrão.', 'security-plus'),
  },
  {
    id: 's7',
    pergunta: 'O que significa "criptografia em repouso"?',
    ..._(['A) Criptografia apenas durante a transmissão na rede', 'B) Criptografia de dados armazenados (discos, bancos de dados)', 'C) Criptografia usada somente em backups', 'D) Ausência de criptografia em dados parados'], 1, 'Dados em repouso são os armazenados em mídia; criptografá-los protege em caso de roubo ou vazamento.', 'security-plus'),
  },
  {
    id: 's8',
    pergunta: 'Qual componente da PKI emite e assina certificados digitais?',
    ..._(['A) RA (Registration Authority)', 'B) CA (Certificate Authority)', 'C) CRL (Certificate Revocation List)', 'D) End-entity'], 1, 'A CA emite e assina certificados; a RA valida a identidade dos solicitantes; a CRL lista certificados revogados.', 'security-plus'),
  },
  {
    id: 's9',
    pergunta: 'O que é hardening de sistema?',
    ..._(['A) Aumentar a velocidade do servidor', 'B) Reduzir a superfície de ataque desabilitando serviços desnecessários e aplicando boas configurações', 'C) Duplicar todos os dados para alta disponibilidade', 'D) Instalar o máximo de antivírus possível'], 1, 'Hardening inclui desabilitar serviços não usados, aplicar patches, políticas de senha e configurações seguras.', 'security-plus'),
  },
  {
    id: 's10',
    pergunta: 'Qual lei brasileira regula o tratamento de dados pessoais?',
    ..._(['A) Marco Civil da Internet', 'B) LGPD (Lei Geral de Proteção de Dados)', 'C) Código de Defesa do Consumidor', 'D) Lei do Software'], 1, 'A LGPD (Lei 13.709/2018) estabelece bases legais, direitos dos titulares e obrigações dos controladores e operadores.', 'security-plus'),
  },
  {
    id: 's11',
    pergunta: 'O que é um backup "3-2-1"?',
    ..._(['A) 3 backups, 2 locais, 1 nuvem', 'B) 3 cópias dos dados, 2 mídias diferentes, 1 cópia off-site', 'C) Backup a cada 3 horas, retenção 2 dias, 1 versão', 'D) 3 servidores, 2 discos, 1 RAID'], 1, 'Estratégia 3-2-1: 3 cópias totais, 2 tipos de mídia diferentes, 1 cópia em local físico distante (ou nuvem).', 'security-plus'),
  },
  {
    id: 's12',
    pergunta: 'Qual tipo de malware se propaga sem intervenção do usuário explorando vulnerabilidades?',
    ..._(['A) Trojan', 'B) Worm', 'C) Adware', 'D) Ransomware'], 1, 'Worms se autorreplicam pela rede explorando vulnerabilidades; trojans precisam ser executados pelo usuário.', 'security-plus'),
  },
  {
    id: 's13',
    pergunta: 'O que é segmentação de rede?',
    ..._(['A) Aumentar a velocidade da rede dividindo o cabo', 'B) Dividir a rede em sub-redes/VLANs para limitar o alcance de um comprometimento', 'C) Usar apenas um switch para toda a rede', 'D) Criptografar cada segmento com chaves diferentes'], 1, 'Segmentação isola grupos de sistemas (ex.: TI, RH, IoT), contendo ataques e reduzindo movimento lateral.', 'security-plus'),
  },
  {
    id: 's14',
    pergunta: 'Qual ferramenta é tipicamente usada para varredura de vulnerabilidades em hosts?',
    ..._(['A) Antivírus', 'B) Scanner de vulnerabilidades (ex.: Nessus, OpenVAS)', 'C) Firewall', 'D) Proxy reverso'], 1, 'Scanners de vulnerabilidades identificam fraquezas (CVE, misconfigs) em sistemas e redes.', 'security-plus'),
  },
  {
    id: 's15',
    pergunta: 'O que é um "false positive" em um sistema de detecção?',
    ..._(['A) Alerta correto que foi ignorado', 'B) Alerta disparado para atividade que não é realmente maliciosa', 'C) Invasão que não foi detectada', 'D) Bloqueio legítimo de tráfego'], 1, 'False positive = alarme quando não há ameaça real; false negative = ameaça real não detectada.', 'security-plus'),
  },
  {
    id: 's16',
    pergunta: 'Qual é o objetivo de um plano de resposta a incidentes?',
    ..._(['A) Substituir o backup', 'B) Definir papéis, procedimentos e comunicação para conter e recuperar de incidentes de segurança', 'C) Eliminar todos os riscos', 'D) Apenas documentar ataques passados'], 1, 'O plano de IR define quem faz o quê, como contêm, erradicam e recuperam, e como comunicam (internamente e externamente).', 'security-plus'),
  },
  {
    id: 's17',
    pergunta: 'O que é "tailgating" no contexto de segurança física?',
    ..._(['A) Ataque de rede que segue um pacote legítimo', 'B) Entrada não autorizada em área restrita seguindo alguém que abriu a porta', 'C) Backup que segue o último arquivo', 'D) Log que registra apenas as últimas linhas'], 1, 'Tailgating é quando uma pessoa entra atrás de outra autorizada sem usar suas próprias credenciais.', 'security-plus'),
  },
  {
    id: 's18',
    pergunta: 'Qual algoritmo de hash é considerado seguro para integridade de dados (ex.: verificação de arquivos)?',
    ..._(['A) MD5', 'B) SHA-1', 'C) SHA-256', 'D) DES'], 2, 'MD5 e SHA-1 são considerados criptograficamente quebrados; SHA-256 (família SHA-2) é recomendado.', 'security-plus'),
  },
  {
    id: 's19',
    pergunta: 'O que é um "zero-day"?',
    ..._(['A) Dia em que não há ataques', 'B) Vulnerabilidade explorada antes de haver patch ou conhecimento público', 'C) Política de senha que expira em 24 horas', 'D) Backup diário às zero horas'], 1, 'Zero-day refere-se a vulnerabilidade ainda não corrigida pelo fabricante, explorada por atacantes.', 'security-plus'),
  },
  {
    id: 's20',
    pergunta: 'Qual camada do modelo OSI é onde um firewall de rede opera tipicamente?',
    ..._(['A) Camada 1 (Física)', 'B) Camada 2 (Enlace)', 'C) Camadas 3 e 4 (Rede e Transporte)', 'D) Camada 7 (Aplicação)'], 2, 'Firewalls de rede tradicionais filtram por IP e porta (L3/L4); next-gen e WAF podem inspecionar até L7.', 'security-plus'),
  },
  {
    id: 's21',
    pergunta: 'O que é "data loss prevention" (DLP)?',
    ..._(['A) Backup automático de dados', 'B) Conjunto de controles para detectar e impedir vazamento ou uso indevido de dados sensíveis', 'C) Criptografia de backup', 'D) Política de retenção de logs'], 1, 'DLP monitora e bloqueia transferências não autorizadas de dados sensíveis (e-mail, USB, nuvem).', 'security-plus'),
  },
  {
    id: 's22',
    pergunta: 'Qual afirmação sobre "security by design" está correta?',
    ..._(['A) Segurança é adicionada apenas na fase de testes', 'B) Considerações de segurança são integradas desde o início do ciclo de vida do produto/sistema', 'C) Apenas o código-fonte é revisado', 'D) Firewall é o único controle necessário'], 1, 'Security by design incorpora requisitos e controles de segurança em todas as fases (design, desenvolvimento, deploy).', 'security-plus'),
  },
  {
    id: 's23',
    pergunta: 'O que é um "honeypot"?',
    ..._(['A) Sistema de backup oculto', 'B) Recurso deliberadamente exposto para atrair e estudar atacantes', 'C) Criptografia dupla', 'D) Política de senha forte'], 1, 'Honeypots são sistemas/mídia que parecem valiosos para desviar atacantes e coletar indicadores de ataque.', 'security-plus'),
  },
  {
    id: 's24',
    pergunta: 'Qual é a diferença entre "autenticação" e "autorização"?',
    ..._(['A) São sinônimos', 'B) Autenticação verifica identidade; autorização verifica o que a identidade pode fazer', 'C) Autorização vem sempre antes da autenticação', 'D) Apenas autorização usa senha'], 1, 'Autenticação: "quem é você?"; Autorização: "o que você tem permissão para acessar ou fazer?".', 'security-plus'),
  },
  {
    id: 's25',
    pergunta: 'O que é "patch management"?',
    ..._(['A) Gerenciamento de licenças de software', 'B) Processo de identificar, testar e aplicar atualizações/correções em sistemas', 'C) Backup incremental', 'D) Controle de versão de documentos'], 1, 'Patch management inclui inventário, priorização (criticidade), teste e implantação de patches de segurança e correções.', 'security-plus'),
  },
  {
    id: 's26',
    pergunta: 'Qual tipo de teste de segurança simula um atacante real sem conhecimento prévio dos sistemas?',
    ..._(['A) Varredura de vulnerabilidades apenas', 'B) Teste de penetração (pentest) black box', 'C) Auditoria de configuração', 'D) Revisão de código estática'], 1, 'Black box pentest simula atacante externo sem informações internas; gray/white box usam algum nível de informação.', 'security-plus'),
  },
  {
    id: 's27',
    pergunta: 'O que é "non-repudiation" (não repúdio)?',
    ..._(['A) Impossibilidade de negar que uma ação foi realizada (ex.: quem enviou/assinou)', 'B) Bloqueio de usuários após 3 tentativas erradas', 'C) Criptografia simétrica', 'D) Log apenas de erros'], 0, 'Não repúdio garante que o autor de uma ação não possa negar ter feito; assinaturas digitais e logs ajudam.', 'security-plus'),
  },
  {
    id: 's28',
    pergunta: 'Qual protocolo deve ser evitado para acesso remoto por ser inseguro?',
    ..._(['A) SSH', 'B) RDP com NLA', 'C) Telnet', 'D) VPN IPsec'], 2, 'Telnet transmite dados (incluindo credenciais) em texto claro; SSH e RDP com NLA são alternativas seguras.', 'security-plus'),
  },
  {
    id: 's29',
    pergunta: 'O que é "sandboxing"?',
    ..._(['A) Backup em fita', 'B) Execução de código em ambiente isolado para análise de comportamento', 'C) Criptografia de disco', 'D) Rede sem internet'], 1, 'Sandbox isola a execução (arquivos, rede) para observar malware ou código não confiável sem afetar o sistema real.', 'security-plus'),
  },
  {
    id: 's30',
    pergunta: 'Qual órgão brasileiro é a autoridade nacional de proteção de dados pessoais?',
    ..._(['A) CGU', 'B) ANPD (Autoridade Nacional de Proteção de Dados)', 'C) BACEN', 'D) Anatel'], 1, 'A ANPD foi criada pela LGPD para fiscalizar e aplicar sanções relacionadas ao tratamento de dados pessoais.', 'security-plus'),
  },
  {
    id: 's31',
    pergunta: 'O que significa "availability" no triângulo CIA?',
    ..._(['A) Dados disponíveis apenas para alguns', 'B) Garantir que sistemas e dados estejam acessíveis quando necessários', 'C) Disponibilidade de backup apenas', 'D) Acesso somente em horário comercial'], 1, 'CIA: Confidentiality (confidencialidade), Integrity (integridade), Availability (disponibilidade).', 'security-plus'),
  },
  {
    id: 's32',
    pergunta: 'Qual é a principal vantagem do SSO (Single Sign-On)?',
    ..._(['A) Uma única senha para todos os sistemas, reduzindo esqueci-mentos e suporte', 'B) Eliminar a necessidade de MFA', 'C) Criptografar todas as senhas com uma chave', 'D) Bloquear acesso de dispositivos móveis'], 0, 'SSO permite um login para vários sistemas; deve ser combinado com MFA para maior segurança.', 'security-plus'),
  },
  {
    id: 's33',
    pergunta: 'O que é "whitelisting" de aplicações?',
    ..._(['A) Listar apenas aplicações maliciosas', 'B) Permitir execução apenas de aplicações previamente aprovadas', 'C) Bloquear todas as aplicações', 'D) Lista de fornecedores aprovados'], 1, 'Application whitelisting reduz risco permitindo só programas autorizados; blacklisting bloqueia os conhecidos como maliciosos.', 'security-plus'),
  },
  {
    id: 's34',
    pergunta: 'Qual tipo de ataque explora a confiança que um usuário tem em um site legítimo para redirecioná-lo a um falso?',
    ..._(['A) DDoS', 'B) Phishing', 'C) SQL Injection', 'D) Brute force'], 1, 'Phishing usa e-mails ou sites falsos que imitam entidades confiáveis para roubar credenciais ou dados.', 'security-plus'),
  },
  {
    id: 's35',
    pergunta: 'O que é BCP (Business Continuity Plan)?',
    ..._(['A) Plano apenas de backup', 'B) Plano para manter ou recuperar operações críticas em caso de interrupção', 'C) Plano de resposta a incidentes de segurança apenas', 'D) Plano de compra de equipamentos'], 1, 'BCP cobre continuidade de negócio; DRP (Disaster Recovery) foca em TI e recuperação de sistemas.', 'security-plus'),
  },
  {
    id: 's36',
    pergunta: 'Qual ferramenta agrega e correlaciona logs de segurança para análise?',
    ..._(['A) Antivírus', 'B) SIEM (Security Information and Event Management)', 'C) Firewall', 'D) Proxy'], 1, 'SIEM coleta logs de várias fontes, correlaciona eventos e ajuda em detecção e resposta a incidentes.', 'security-plus'),
  },
  {
    id: 's37',
    pergunta: 'O que é "segregation of duties" (segregação de funções)?',
    ..._(['A) Separar rede em VLANs', 'B) Dividir tarefas críticas entre várias pessoas para reduzir fraude e erro', 'C) Ter dois administradores com a mesma senha', 'D) Backup em dois locais'], 1, 'Segregação de funções garante que uma única pessoa não controle todo um processo crítico (ex.: criar e aprovar pagamento).', 'security-plus'),
  },
  {
    id: 's38',
    pergunta: 'Qual é o propósito de um "security awareness training"?',
    ..._(['A) Substituir controles técnicos', 'B) Educar usuários sobre ameaças e boas práticas para reduzir riscos humanos', 'C) Treinar apenas a equipe de TI', 'D) Apenas cumprir auditoria'], 1, 'Conscientização reduz cliques em phishing, uso de senhas fracas e comportamentos que aumentam risco.', 'security-plus'),
  },
  {
    id: 's39',
    pergunta: 'O que é "defense in depth"?',
    ..._(['A) Um único firewall muito forte', 'B) Múltiplas camadas de controles de segurança para que a falha de um não comprometa tudo', 'C) Apenas criptografia', 'D) Backup em profundidade'], 1, 'Defense in depth usa várias barreiras (rede, host, aplicação, dados, pessoas) para dificultar o atacante.', 'security-plus'),
  },
  {
    id: 's40',
    pergunta: 'Qual afirmação sobre "incident response" está correta?',
    ..._(['A) A primeira ação deve ser desligar todos os sistemas', 'B) Seguir etapas como identificação, contenção, erradicação, recuperação e lições aprendidas', 'C) Não documentar para evitar vazamento', 'D) Comunicar apenas após um ano'], 1, 'Ciclo de IR: preparação, identificação, contenção, erradicação, recuperação e lições aprendidas (e comunicação quando aplicável).', 'security-plus'),
  },
  // Security+ – mais questões por domínio (General, Threats, Architecture, Operations, Program Management)
  { id: 's41', pergunta: 'O que é "confidentiality" no triângulo CIA?', ..._(['A) Disponibilidade dos dados', 'B) Garantir que informações só sejam acessadas por quem está autorizado', 'C) Integridade dos logs', 'D) Backup em nuvem'], 1, 'Confidencialidade protege contra divulgação não autorizada; criptografia e controle de acesso são controles típicos.', 'security-plus') },
  { id: 's42', pergunta: 'Qual ataque visa tornar um recurso indisponível para usuários legítimos?', ..._(['A) Phishing', 'B) DoS/DDoS (negação de serviço)', 'C) SQL Injection', 'D) Vazamento de dados'], 1, 'DoS/DDoS esgota recursos (banda, CPU, conexões) para impedir o uso legítimo do serviço.', 'security-plus') },
  { id: 's43', pergunta: 'O que é "integrity" no triângulo CIA?', ..._(['A) Apenas backup', 'B) Garantir que os dados não sejam alterados de forma não autorizada ou acidental', 'C) Criptografia apenas', 'D) Disponibilidade'], 1, 'Integridade: dados corretos e não adulterados; hashes, assinaturas e controles de alteração protegem.', 'security-plus') },
  { id: 's44', pergunta: 'Qual tipo de malware bloqueia o acesso aos dados e exige pagamento para liberar?', ..._(['A) Worm', 'B) Ransomware', 'C) Adware', 'D) Spyware'], 1, 'Ransomware criptografa ou bloqueia dados e exige resgate; backup offline e segmentação ajudam na defesa.', 'security-plus') },
  { id: 's45', pergunta: 'O que é um "next-generation firewall" (NGFW)?', ..._(['A) Firewall apenas de camada 3', 'B) Firewall com inspeção de aplicação (L7), IPS e awareness de usuário/aplicação', 'C) Apenas antivírus', 'D) Apenas proxy'], 1, 'NGFW combina filtro de pacotes com inspeção de conteúdo, aplicações e ameaças (IPS, antimalware).', 'security-plus') },
  { id: 's46', pergunta: 'Para que serve o protocolo TLS?', ..._(['A) Apenas autenticação', 'B) Criptografar e autenticar comunicações (ex.: HTTPS, e-mail)', 'C) Apenas firewall', 'D) Apenas DNS'], 1, 'TLS fornece confidencialidade e integridade em trânsito; certificados permitem autenticar o servidor (e opcionalmente o cliente).', 'security-plus') },
  { id: 's47', pergunta: 'O que é "key stretching" no contexto de senhas?', ..._(['A) Encurtar a chave', 'B) Aplicar função (ex.: PBKDF2, bcrypt) para tornar ataques de força bruta mais lentos', 'C) Apenas hash MD5', 'D) Backup de chaves'], 1, 'Key stretching aumenta o custo computacional para testar cada senha; usa salt e muitas iterações.', 'security-plus') },
  { id: 's48', pergunta: 'Qual é a função de um "proxy" em segurança?', ..._(['A) Apenas roteamento', 'B) Intermediar requisições (ex.: web) para filtrar conteúdo, cache e aplicar políticas', 'C) Apenas DNS', 'D) Apenas firewall de rede'], 1, 'Proxy atua como intermediário; pode inspecionar tráfego, bloquear sites e aplicar DLP ou políticas.', 'security-plus') },
  { id: 's49', pergunta: 'O que é "rainbow table" em ataques a senhas?', ..._(['A) Tabela de cores para interface', 'B) Tabela pré-computada de hashes de senhas comuns para comparação rápida', 'C) Política de senha', 'D) Criptografia'], 1, 'Rainbow tables permitem reverter hashes de senhas comuns; salt torna cada hash único e anula esse ataque.', 'security-plus') },
  { id: 's50', pergunta: 'Qual prática reduz o risco de engenharia social?', ..._(['A) Apenas firewall', 'B) Treinamento de conscientização e políticas de verificação (ex.: não clicar em links suspeitos)', 'C) Apenas criptografia', 'D) Apenas backup'], 1, 'Engenharia social explora o humano; conscientização e procedimentos de verificação (ex.: confirmar por outro canal) reduzem risco.', 'security-plus') },
  { id: 's51', pergunta: 'O que é "cold site" em recuperação de desastres?', ..._(['A) Datacenter congelado', 'B) Local com espaço e infraestrutura básica, sem sistemas ativos; ativação leva tempo', 'C) Backup em nuvem', 'D) Site principal'], 1, 'Cold site tem espaço e energia mas pouca ou nenhuma infraestrutura pronta; mais barato que hot/warm, recuperação mais lenta.', 'security-plus') },
  { id: 's52', pergunta: 'Qual documento define o que fazer quando um incidente é detectado?', ..._(['A) Apenas política de senha', 'B) Plano de resposta a incidentes (IR plan)', 'C) Apenas relatório de pentest', 'D) Contrato de SLA'], 1, 'O plano de IR define papéis, contatos, procedimentos de contenção/erradicação e comunicação.', 'security-plus') },
  { id: 's53', pergunta: 'O que é "penetration testing" em relação a "vulnerability scanning"?', ..._(['A) São idênticos', 'B) Pentest explora vulnerabilidades para provar impacto; scan apenas identifica possíveis falhas', 'C) Scan é ilegal', 'D) Pentest não usa ferramentas'], 1, 'Scan lista vulnerabilidades; pentest usa técnicas manuais e ferramentas para explorar e demonstrar risco real.', 'security-plus') },
  { id: 's54', pergunta: 'Qual órgão emite certificados SSL/TLS para domínios públicos na web?', ..._(['A) ANPD', 'B) CA (Certificate Authority) pública ou privada', 'C) Firewall', 'D) DNS'], 1, 'CAs (Let\'s Encrypt, DigiCert, etc.) emitem e assinam certificados; o navegador confia em CAs pré-instaladas.', 'security-plus') },
  { id: 's55', pergunta: 'O que é "data at rest"?', ..._(['A) Dados em movimento na rede', 'B) Dados armazenados em mídia (disco, backup)', 'C) Dados em cache apenas', 'D) Dados em RAM apenas'], 1, 'Dados em repouso estão em armazenamento persistente; criptografia em repouso protege em caso de roubo ou vazamento.', 'security-plus') },
  { id: 's56', pergunta: 'Qual controle ajuda a garantir "non-repudiation"?', ..._(['A) Apenas firewall', 'B) Assinatura digital e logs de auditoria', 'C) Apenas backup', 'D) Apenas antivírus'], 1, 'Assinaturas digitais e logs imutáveis permitem provar quem realizou uma ação (não repúdio).', 'security-plus') },
  { id: 's57', pergunta: 'O que é "war driving"?', ..._(['A) Dirigir em guerra', 'B) Varredura de redes Wi-Fi a partir de locais móveis para encontrar redes abertas ou fracas', 'C) Ataque a veículos', 'D) Backup em movimento'], 1, 'War driving descobre redes sem fio; redes abertas ou com WEP são alvos; WPA3 e configuração adequada mitigam.', 'security-plus') },
  { id: 's58', pergunta: 'Qual protocolo NÃO deve ser usado para acesso administrativo por ser inseguro?', ..._(['A) SSH', 'B) Telnet e FTP em texto claro', 'C) HTTPS', 'D) IPsec'], 1, 'Telnet e FTP transmitem credenciais em texto claro; use SSH, SFTP, HTTPS ou VPN.', 'security-plus') },
  { id: 's59', pergunta: 'O que é "risk assessment"?', ..._(['A) Apenas comprar seguro', 'B) Processo de identificar ameaças, vulnerabilidades e impacto para determinar e priorizar riscos', 'C) Apenas backup', 'D) Apenas pentest'], 1, 'Avaliação de riscos identifica e prioriza riscos (probabilidade x impacto) para decisão de tratamento.', 'security-plus') },
  { id: 's60', pergunta: 'Qual tipo de backup copia todos os dados selecionados?', ..._(['A) Incremental apenas', 'B) Full (completo)', 'C) Diferencial apenas', 'D) Nenhum'], 1, 'Backup completo (full) copia todos os dados; incremental/diferencial copiam apenas alterações desde certo ponto.', 'security-plus') },
  { id: 's61', pergunta: 'O que é "port security" em um switch?', ..._(['A) Firewall de portas', 'B) Limitar quais endereços MAC podem usar uma porta (evitar bypass de rede)', 'C) Apenas fechar portas', 'D) Apenas abrir portas'], 1, 'Port security associa portas a MACs permitidos; impede que dispositivo não autorizado use a porta.', 'security-plus') },
  { id: 's62', pergunta: 'Qual lei europeia é análoga à LGPD em proteção de dados pessoais?', ..._(['A) ISO 27001', 'B) GDPR (General Data Protection Regulation)', 'C) NIST CSF', 'D) PCI DSS'], 1, 'GDPR regula dados pessoais na UE; LGPD foi inspirada nela; ambas tratam de bases legais, direitos e sanções.', 'security-plus') },
  { id: 's63', pergunta: 'O que é "security baseline"?', ..._(['A) Apenas política', 'B) Configuração mínima recomendada (hardening) para um tipo de sistema', 'C) Apenas backup inicial', 'D) Apenas antivírus'], 1, 'Baseline define configuração padrão segura (CIS Benchmarks, vendor); desvios são corrigidos ou documentados.', 'security-plus') },
  { id: 's64', pergunta: 'Qual ataque usa múltiplos sistemas comprometidos para enviar tráfego contra um alvo?', ..._(['A) Phishing', 'B) DDoS distribuído (botnet)', 'C) SQL Injection', 'D) Roubo de laptop'], 1, 'DDoS usa muitos hosts (botnet) para sobrecarregar o alvo; mitigação inclui filtros, CDN e provedor de proteção.', 'security-plus') },
  { id: 's65', pergunta: 'O que é "least privilege" aplicado a contas de serviço?', ..._(['A) Usar conta de administrador para tudo', 'B) Dar à conta de serviço apenas as permissões necessárias para a função', 'C) Sem senha', 'D) Uma conta para todos os serviços'], 1, 'Contas de serviço devem ter apenas os privilégios mínimos; reduz impacto se a conta for comprometida.', 'security-plus') },
  { id: 's66', pergunta: 'Qual componente da PKI lista certificados revogados?', ..._(['A) CA', 'B) CRL (Certificate Revocation List) ou OCSP', 'C) RA apenas', 'D) End-entity'], 1, 'CRL e OCSP permitem verificar se um certificado foi revogado antes do vencimento.', 'security-plus') },
  { id: 's67', pergunta: 'O que é "data in transit"?', ..._(['A) Dados no disco', 'B) Dados sendo transmitidos pela rede', 'C) Dados em backup', 'D) Dados em repouso'], 1, 'Dados em trânsito são os que trafegam na rede; TLS/HTTPS e VPN protegem em trânsito.', 'security-plus') },
  { id: 's68', pergunta: 'Qual prática é recomendada após um incidente de segurança?', ..._(['A) Esconder o fato', 'B) Lições aprendidas e atualização de procedimentos/controles', 'C) Apenas trocar senhas', 'D) Não documentar'], 1, 'Lições aprendidas identificam falhas no processo e melhoram preparação e resposta para o futuro.', 'security-plus') },
  { id: 's69', pergunta: 'O que é "acceptable use policy" (AUP)?', ..._(['A) Política de backup', 'B) Política que define uso permitido dos recursos de TI (e-mail, internet, equipamentos)', 'C) Apenas política de senha', 'D) Política de firewall'], 1, 'AUP define o que usuários podem e não podem fazer com sistemas e rede; base para disciplina e conscientização.', 'security-plus') },
  { id: 's70', pergunta: 'Qual ferramenta é usada para capturar e analisar tráfego de rede?', ..._(['A) Antivírus', 'B) Wireshark ou tcpdump', 'C) Apenas firewall', 'D) Apenas SIEM'], 1, 'Wireshark e tcpdump capturam pacotes para análise; úteis em investigação de incidentes e troubleshooting.', 'security-plus') },

  // --- CySA+ (30) ---
  {
    id: 'c1',
    pergunta: 'O que é um IOC (Indicator of Compromise)?',
    ..._(['A) Lista de senhas vazadas', 'B) Artefato ou comportamento que sugere que um sistema foi comprometido', 'C) Certificado SSL', 'D) Política de firewall'], 1, 'IOCs incluem IPs maliciosos, hashes de arquivos, domínios C2, padrões de tráfego ou alterações em registro.', 'cysa-plus'),
  },
  {
    id: 'c2',
    pergunta: 'Qual métrica de vulnerabilidade indica a severidade de forma padronizada?',
    ..._(['A) ISO 27001', 'B) CVSS (Common Vulnerability Scoring System)', 'C) NIST CSF', 'D) LGPD'], 1, 'CVSS atribui uma pontuação (e vetor) à severidade de uma vulnerabilidade (ex.: 9.8 crítico).', 'cysa-plus'),
  },
  {
    id: 'c3',
    pergunta: 'O que o analista deve fazer ao identificar um possível incidente em um SIEM?',
    ..._(['A) Ignorar até ter 100% de certeza', 'B) Triar, correlacionar com outros eventos e seguir o playbook de resposta', 'C) Desligar o SIEM', 'D) Apenas arquivar o alerta'], 1, 'Triagem, correlação e execução do playbook permitem resposta rápida e consistente.', 'cysa-plus'),
  },
  {
    id: 'c4',
    pergunta: 'Qual ferramenta é comumente usada para análise de malware em ambiente controlado?',
    ..._(['A) Nmap', 'B) Sandbox ou ambiente de análise (ex.: sandbox dinâmico)', 'C) Firewall', 'D) Antivírus em produção'], 1, 'Sandboxes (Cuckoo, Joe Sandbox, etc.) executam malware e capturam comportamento (arquivos, rede, registro).', 'cysa-plus'),
  },
  {
    id: 'c5',
    pergunta: 'O que é "threat intelligence" no contexto de CySA+?',
    ..._(['A) Apenas relatórios de vendors', 'B) Informações sobre ameaças (TTPs, IOCs, atores) usadas para tomar decisões de defesa', 'C) Inteligência de negócios', 'D) Lista de vulnerabilidades sem contexto'], 1, 'Threat intel inclui quem ataca, como (TTPs), com quê (IOCs) e como usar isso para detecção e resposta.', 'cysa-plus'),
  },
  {
    id: 'c6',
    pergunta: 'Qual etapa do ciclo de resposta a incidentes vem logo após "Containment"?',
    ..._(['A) Identification', 'B) Eradication', 'C) Recovery', 'D) Preparation'], 1, 'Ordem típica: Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned.', 'cysa-plus'),
  },
  {
    id: 'c7',
    pergunta: 'O que um "playbook" de resposta a incidentes descreve?',
    ..._(['A) Apenas a política de backup', 'B) Passos padronizados para tipos específicos de incidentes (ex.: ransomware, phishing)', 'C) Configuração do firewall', 'D) Calendário de patches'], 1, 'Playbooks são procedimentos passo a passo para tipos de incidente (malware, DDoS, vazamento de dados).', 'cysa-plus'),
  },
  {
    id: 'c8',
    pergunta: 'Para que serve a análise de "network flow" (ex.: NetFlow)?',
    ..._(['A) Criptografar o tráfego', 'B) Identificar padrões de tráfego, anomalias e possíveis C2 ou exfiltração', 'C) Substituir o firewall', 'D) Apenas contabilizar bytes'], 1, 'Fluxos de rede (origem, destino, porta, bytes) ajudam a detectar tráfego anômalo ou malicioso.', 'cysa-plus'),
  },
  {
    id: 'c9',
    pergunta: 'O que é "vulnerability scanning" em relação a "penetration testing"?',
    ..._(['A) São a mesma coisa', 'B) Scanning identifica vulnerabilidades; pentest explora-as para provar impacto', 'C) Pentest só usa scanners', 'D) Scanning é ilegal'], 1, 'Varredura lista possíveis fraquezas; pentest usa técnicas manuais e ferramentas para explorar e demonstrar risco.', 'cysa-plus'),
  },
  {
    id: 'c10',
    pergunta: 'Qual tipo de dado é mais útil para detecção de comportamento anômalo (UEBA)?',
    ..._(['A) Apenas logs de firewall', 'B) Logs de autenticação, acesso a dados e comportamento do usuário/entidade', 'C) Apenas antivírus', 'D) Configuração estática'], 1, 'UEBA usa comportamento de usuários e entidades (login, acesso a arquivos, horários) para detectar anomalias.', 'cysa-plus'),
  },
  {
    id: 'c11',
    pergunta: 'O que significa "IOA" (Indicator of Attack)?',
    ..._(['A) Lista de endereços IP atacantes', 'B) Comportamento ou técnica de ataque em andamento, antes do comprometimento total', 'C) Relatório pós-incidente', 'D) Assinatura de antivírus'], 1, 'IOA foca em ações do atacante (TTPs) em tempo real; IOC foca em artefatos deixados após o comprometimento.', 'cysa-plus'),
  },
  {
    id: 'c12',
    pergunta: 'Por que a "retention" de logs é importante para o analista?',
    ..._(['A) Apenas para economizar espaço', 'B) Permitir investigação retrospectiva e cumprimento de requisitos legais/regulatórios', 'C) Substituir backup', 'D) Aumentar performance do SIEM'], 1, 'Retenção adequada permite analisar incidentes passados e atender auditoria e regulamentação.', 'cysa-plus'),
  },
  {
    id: 'c13',
    pergunta: 'O que é "false negative" em um sistema de detecção?',
    ..._(['A) Alerta correto', 'B) Ameaça real que não foi detectada', 'C) Alerta disparado sem ameaça', 'D) Bloqueio de tráfego legítimo'], 1, 'False negative = falha em detectar um ataque real; é especialmente perigoso em segurança.', 'cysa-plus'),
  },
  {
    id: 'c14',
    pergunta: 'Qual documento deve ser produzido após a contenção de um incidente grave?',
    ..._(['A) Apenas e-mail interno', 'B) Relatório de incidente (para gestão, compliance e lições aprendidas)', 'C) Nenhum', 'D) Apenas log do SIEM'], 1, 'Relatório de incidente documenta o que aconteceu, ações tomadas e recomendações para evitar recorrência.', 'cysa-plus'),
  },
  {
    id: 'c15',
    pergunta: 'O que é "threat hunting"?',
    ..._(['A) Apenas executar varreduras agendadas', 'B) Busca proativa por ameaças que podem ter evadido controles automatizados', 'C) Contratar caçadores', 'D) Bloquear todos os IPs desconhecidos'], 1, 'Threat hunting é busca proativa por IOCs/IOAs e comportamentos suspeitos, usando hipóteses e dados.', 'cysa-plus'),
  },
  {
    id: 'c16',
    pergunta: 'Qual ferramenta é tipicamente usada para correlacionar eventos de segurança em tempo real?',
    ..._(['A) Editor de texto', 'B) SIEM', 'C) Antivírus standalone', 'D) Planilha'], 1, 'SIEM agrega e correlaciona eventos de múltiplas fontes para detecção e resposta.', 'cysa-plus'),
  },
  {
    id: 'c17',
    pergunta: 'O que deve constar em um "incident response report" para stakeholders?',
    ..._(['A) Apenas dados técnicos brutos', 'B) Resumo executivo, impacto, ações tomadas e recomendações em linguagem adequada ao público', 'C) Nada', 'D) Apenas logs'], 1, 'Relatório para gestão deve ser claro: o que ocorreu, impacto no negócio, o que foi feito e próximos passos.', 'cysa-plus'),
  },
  {
    id: 'c18',
    pergunta: 'O que é "baseline" de rede ou sistema no contexto de análise?',
    ..._(['A) Última versão do sistema', 'B) Comportamento ou configuração "normal" usada para comparar e detectar desvios', 'C) Backup inicial', 'D) Política de senha'], 1, 'Baseline define o normal; desvios (tráfego, processos, arquivos) podem indicar comprometimento.', 'cysa-plus'),
  },
  {
    id: 'c19',
    pergunta: 'Por que "chain of custody" é importante na resposta a incidentes?',
    ..._(['A) Apenas para backup', 'B) Garantir que evidências forenses não foram alteradas e são admissíveis em processo', 'C) Para acelerar o patch', 'D) Para desligar sistemas'], 1, 'Cadeia de custódia documenta quem manipulou a evidência, quando e como, preservando integridade.', 'cysa-plus'),
  },
  {
    id: 'c20',
    pergunta: 'O que é "reconnaissance" na visão do analista de defesa?',
    ..._(['A) Apenas varredura de portas', 'B) Fase em que o atacante coleta informações; defesa monitora sinais (scans, enumeração)', 'C) Relatório final', 'D) Backup'], 1, 'Recon do atacante (OSINT, scan) deixa rastros; o analista usa isso para detectar e preparar defesa.', 'cysa-plus'),
  },
  {
    id: 'c21',
    pergunta: 'Qual tipo de análise de malware foca em comportamento em tempo de execução?',
    ..._(['A) Apenas análise estática', 'B) Análise dinâmica (execução em sandbox/VM)', 'C) Apenas hash', 'D) Análise de fonte'], 1, 'Análise dinâmica observa o que o malware faz ao executar (arquivos, rede, registro); estática analisa sem executar.', 'cysa-plus'),
  },
  {
    id: 'c22',
    pergunta: 'O que é "credential stuffing"?',
    ..._(['A) Backup de credenciais', 'B) Uso de listas de credenciais vazadas para tentar login em outros serviços', 'C) Criptografia de senhas', 'D) Política de senha forte'], 1, 'Atacantes usam pares usuário/senha vazados em um site para testar em outros (reuso de senha).', 'cysa-plus'),
  },
  {
    id: 'c23',
    pergunta: 'Para que serve um "runbook" em operações de segurança?',
    ..._(['A) Apenas para desenvolvimento', 'B) Procedimento operacional detalhado para executar tarefas ou responder a cenários', 'C) Documentação de rede apenas', 'D) Política de backup'], 1, 'Runbooks são guias passo a passo para operações (ex.: como tratar alerta X, como escalar).', 'cysa-plus'),
  },
  {
    id: 'c24',
    pergunta: 'O que é "mean time to detect" (MTTD)?',
    ..._(['A) Tempo para aplicar patch', 'B) Tempo médio desde o início de um incidente até sua detecção', 'C) Tempo de backup', 'D) Tempo de login'], 1, 'MTTD mede a eficácia da detecção; MTTR (mean time to respond/recover) mede a resposta.', 'cysa-plus'),
  },
  {
    id: 'c25',
    pergunta: 'Qual abordagem ajuda a reduzir "alert fatigue"?',
    ..._(['A) Aumentar todos os alertas', 'B) Tuning de regras, priorização, automação e correlação para reduzir ruído e focar no que importa', 'C) Desligar o SIEM', 'D) Ignorar alertas'], 1, 'Ajuste de regras, filtros, prioridade e automação reduzem alertas irrelevantes e melhoram a resposta.', 'cysa-plus'),
  },
  {
    id: 'c26',
    pergunta: 'O que é "packet capture" usado para, na análise de segurança?',
    ..._(['A) Apenas para performance', 'B) Inspeção detalhada do tráfego de rede para investigar incidentes ou malware', 'C) Criptografar pacotes', 'D) Substituir firewall'], 1, 'PCAP (Wireshark, tcpdump) permite analisar conteúdo e comportamento do tráfego em nível de pacote.', 'cysa-plus'),
  },
  {
    id: 'c27',
    pergunta: 'O que significa "triage" em um SOC?',
    ..._(['A) Apenas arquivar alertas', 'B) Classificação e priorização inicial de alertas para decidir resposta', 'C) Fechar todos os tickets', 'D) Atualizar apenas antivírus'], 1, 'Triagem avalia severidade, impacto e urgência do alerta para encaminhar e agir corretamente.', 'cysa-plus'),
  },
  {
    id: 'c28',
    pergunta: 'Qual framework é comumente usado para descrever táticas e técnicas de atacantes?',
    ..._(['A) ISO 27001 apenas', 'B) MITRE ATT&CK', 'C) LGPD', 'D) Nenhum'], 1, 'MITRE ATT&CK mapeia táticas e técnicas de adversários; útil para detecção, threat hunting e comunicação.', 'cysa-plus'),
  },
  {
    id: 'c29',
    pergunta: 'O que é "remediation" no ciclo de vulnerabilidade?',
    ..._(['A) Apenas detectar', 'B) Ação para corrigir ou mitigar a vulnerabilidade (patch, configuração, controle)', 'C) Apenas relatar', 'D) Ignorar'], 1, 'Remediation inclui aplicar patch, mudar configuração ou adicionar controle para reduzir risco.', 'cysa-plus'),
  },
  {
    id: 'c30',
    pergunta: 'Por que "stakeholder communication" é importante durante um incidente?',
    ..._(['A) Apenas para cumprir processo', 'B) Manter gestão, jurídico e afetados informados e alinhar expectativas e ações', 'C) Apenas no final', 'D) Apenas por e-mail'], 1, 'Comunicação adequada evita pânico, permite decisões de negócio e cumprimento legal (ex.: notificação ANPD).', 'cysa-plus'),
  },
  // CySA+ – mais questões (Security Ops, Vuln Management, IR, Reporting)
  { id: 'c31', pergunta: 'O que é "CVSS score" usado para?', ..._(['A) Medir desempenho de rede', 'B) Avaliar severidade de uma vulnerabilidade de forma padronizada (0–10)', 'C) Medir tempo de resposta', 'D) Classificar malware'], 1, 'CVSS produz uma pontuação e um vetor (ex.: 9.8 Crítico); ajuda a priorizar remediação.', 'cysa-plus') },
  { id: 'c32', pergunta: 'Qual métrica indica tempo médio para corrigir/recuperar após um incidente?', ..._(['A) MTTF', 'B) MTTR (mean time to respond/recover)', 'C) Apenas MTTD', 'D) CVSS'], 1, 'MTTR mede o tempo até a resposta ou recuperação; MTTD mede até a detecção.', 'cysa-plus') },
  { id: 'c33', pergunta: 'O que é "IOC" em detecção de ameaças?', ..._(['A) Certificado SSL', 'B) Indicator of Compromise – artefato que sugere comprometimento (hash, IP, domínio)', 'C) Política de firewall', 'D) Relatório de backup'], 1, 'IOCs são evidências de invasão: hashes de malware, IPs C2, domínios, alterações em arquivos/registro.', 'cysa-plus') },
  { id: 'c34', pergunta: 'Para que o analista usa "MITRE ATT&CK"?', ..._(['A) Apenas para pentest', 'B) Mapear táticas e técnicas de atacantes para detecção, caça e comunicação', 'C) Apenas para backup', 'D) Apenas para firewall'], 1, 'ATT&CK organiza TTPs (táticas e técnicas); facilita regras de detecção e relatórios.', 'cysa-plus') },
  { id: 'c35', pergunta: 'O que é "vulnerability management lifecycle"?', ..._(['A) Apenas escanear uma vez', 'B) Ciclo: descobrir, priorizar, remediar/mitigar, verificar e repetir', 'C) Apenas aplicar patch', 'D) Apenas relatar'], 1, 'Ciclo de gestão de vulnerabilidades inclui scan, priorização (CVSS/contexto), correção e re-scan.', 'cysa-plus') },
  { id: 'c36', pergunta: 'Qual tipo de análise de malware examina o código sem executá-lo?', ..._(['A) Apenas dinâmica', 'B) Análise estática (strings, disassembly, estrutura)', 'C) Apenas em produção', 'D) Apenas hash'], 1, 'Análise estática inspeciona o arquivo sem executar; dinâmica observa o comportamento em execução.', 'cysa-plus') },
  { id: 'c37', pergunta: 'O que é "KRI" (Key Risk Indicator)?', ..._(['A) Indicador de desempenho de rede', 'B) Indicador que sinaliza aumento de risco antes de um evento', 'C) Apenas KPI', 'D) Relatório de backup'], 1, 'KRIs ajudam a monitorar fatores de risco; KPIs medem desempenho operacional.', 'cysa-plus') },
  { id: 'c38', pergunta: 'Por que "retention" de logs é definida por política?', ..._(['A) Apenas para economizar espaço', 'B) Atender requisitos legais, forense e auditoria', 'C) Apenas para performance', 'D) Apenas para backup'], 1, 'Retenção de logs deve seguir lei (ex.: LGPD), regulamento e necessidade de investigação.', 'cysa-plus') },
  { id: 'c39', pergunta: 'O que o analista faz na fase de "containment" do IR?', ..._(['A) Apenas documentar', 'B) Isolar sistemas afetados, desabilitar contas, bloquear IPs para impedir expansão', 'C) Apenas aplicar patch', 'D) Apenas notificar'], 1, 'Contenção limita o dano: isolar host, bloquear tráfego malicioso, desabilitar credenciais comprometidas.', 'cysa-plus') },
  { id: 'c40', pergunta: 'Qual ferramenta é típica para varredura de vulnerabilidades em rede?', ..._(['A) Apenas Nmap', 'B) Nessus, OpenVAS, Qualys (scanners de vuln)', 'C) Apenas Wireshark', 'D) Apenas antivírus'], 1, 'Scanners de vulnerabilidade (Nessus, OpenVAS) verificam CVE e misconfigs em hosts e rede.', 'cysa-plus') },
  { id: 'c41', pergunta: 'O que é "threat hunting" baseado em hipótese?', ..._(['A) Apenas esperar alertas', 'B) Busca proativa por TTPs ou IOCs com base em hipótese (ex.: "pode haver lateral movement")', 'C) Apenas varredura agendada', 'D) Apenas relatório'], 1, 'Threat hunting usa hipóteses (ex.: atacante pode estar usando PowerShell malicioso) para buscar em dados.', 'cysa-plus') },
  { id: 'c42', pergunta: 'O que deve constar em um "executive summary" de incidente?', ..._(['A) Apenas logs brutos', 'B) Resumo do que ocorreu, impacto e ações em linguagem não técnica', 'C) Apenas comandos', 'D) Apenas para TI'], 1, 'Resumo executivo comunica impacto e resposta para gestão e tomada de decisão.', 'cysa-plus') },
  { id: 'c43', pergunta: 'O que é "IOA" (Indicator of Attack)?', ..._(['A) Apenas hash de arquivo', 'B) Comportamento ou técnica de ataque em andamento (antes do comprometimento total)', 'C) Relatório pós-incidente', 'D) Política de firewall'], 1, 'IOA foca em ações do atacante em tempo real; IOC foca em artefatos após o comprometimento.', 'cysa-plus') },
  { id: 'c44', pergunta: 'Para que serve "NetFlow" ou "IPFIX" na análise de segurança?', ..._(['A) Criptografar tráfego', 'B) Ver padrões de tráfego, anomalias e possível exfiltração ou C2', 'C) Apenas substituir firewall', 'D) Apenas contagem de bytes'], 1, 'Fluxos de rede (origem, destino, bytes, portas) ajudam a detectar tráfego anômalo.', 'cysa-plus') },
  { id: 'c45', pergunta: 'O que é "red team" em relação a "blue team"?', ..._(['A) São iguais', 'B) Red simula atacante; blue defende e responde', 'C) Blue ataca', 'D) Apenas pentest externo'], 1, 'Red team ataca com objetivos realistas; blue team detecta e responde; purple une os dois.', 'cysa-plus') },
  { id: 'c46', pergunta: 'Qual etapa do IR vem após "Eradication"?', ..._(['A) Identification', 'B) Recovery', 'C) Containment', 'D) Preparation'], 1, 'Ordem: Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned.', 'cysa-plus') },
  { id: 'c47', pergunta: 'O que é "chain of custody" em forense?', ..._(['A) Backup em cadeia', 'B) Documentação de quem manipulou a evidência, quando e como', 'C) Apenas para patch', 'D) Apenas para rede'], 1, 'Cadeia de custódia preserva a integridade e admissibilidade das evidências.', 'cysa-plus') },
  { id: 'c48', pergunta: 'O que é "alert fatigue"?', ..._(['A) Falta de alertas', 'B) Excesso de alertas irrelevantes que levam a ignorar ou atrasar resposta', 'C) Apenas alertas críticos', 'D) Apenas SIEM'], 1, 'Alert fatigue ocorre quando há muitos falsos positivos; tuning e priorização reduzem o problema.', 'cysa-plus') },
  { id: 'c49', pergunta: 'Qual formato de relatório é útil para comunicação técnica com TI?', ..._(['A) Apenas resumo de uma linha', 'B) Relatório com evidências, IOCs, recomendações técnicas e prioridade', 'C) Apenas para jurídico', 'D) Nenhum'], 1, 'Relatório técnico inclui passos, evidências (logs, hashes), impacto e correções sugeridas.', 'cysa-plus') },
  { id: 'c50', pergunta: 'O que é "baseline" em monitoramento?', ..._(['A) Última versão do SO', 'B) Comportamento ou configuração normal para comparar e detectar desvios', 'C) Apenas backup', 'D) Apenas política'], 1, 'Baseline define o normal; desvios (tráfego, processos, arquivos) podem indicar incidente.', 'cysa-plus') },
  { id: 'c51', pergunta: 'Para que o analista usa "YARA rules"?', ..._(['A) Apenas para firewall', 'B) Identificar e classificar amostras de malware por padrões (strings, estrutura)', 'C) Apenas para backup', 'D) Apenas para DNS'], 1, 'YARA permite criar regras que descrevem famílias de malware; útil em triagem e caça.', 'cysa-plus') },
  { id: 'c52', pergunta: 'O que é "remediation" no ciclo de vulnerabilidade?', ..._(['A) Apenas detectar', 'B) Ação para corrigir ou mitigar (patch, config, controle)', 'C) Apenas relatar', 'D) Ignorar'], 1, 'Remediation é a correção ou mitigação da vulnerabilidade após priorização.', 'cysa-plus') },
  { id: 'c53', pergunta: 'Qual tipo de dado o SIEM correlaciona?', ..._(['A) Apenas um log', 'B) Logs de múltiplas fontes (firewall, auth, endpoint, app) para detectar padrões', 'C) Apenas antivírus', 'D) Apenas backup'], 1, 'SIEM agrega e correlaciona eventos de várias fontes para detecção de ataques complexos.', 'cysa-plus') },
  { id: 'c54', pergunta: 'O que é "triage" em um SOC?', ..._(['A) Fechar todos os tickets', 'B) Classificar e priorizar alertas para decidir resposta', 'C) Apenas arquivar', 'D) Apenas escalar'], 1, 'Triagem avalia severidade e urgência do alerta para encaminhar e agir adequadamente.', 'cysa-plus') },
  { id: 'c55', pergunta: 'Por que "playbook" é importante na resposta a incidentes?', ..._(['A) Apenas para documentar', 'B) Padronizar e acelerar resposta para tipos de incidente (ransomware, phishing)', 'C) Apenas para gestão', 'D) Apenas para TI'], 1, 'Playbooks são procedimentos passo a passo para cenários conhecidos; reduzem tempo e erro.', 'cysa-plus') },

  // --- CASP+ (25) ---
  {
    id: 'p1',
    pergunta: 'O que é "zero trust" em arquitetura de segurança?',
    ..._(['A) Confiar em todos os usuários da rede interna', 'B) Nunca confiar, sempre verificar; verificação contínua e acesso mínimo por recurso', 'C) Zero firewalls', 'D) Apenas criptografia'], 1, 'Zero trust assume que a rede interna não é segura; cada acesso é verificado (identidade, dispositivo, contexto).', 'casp-plus'),
  },
  {
    id: 'p2',
    pergunta: 'Qual modelo de responsabilidade de segurança em cloud (IaaS) coloca no provedor a segurança do host e da rede física?',
    ..._(['A) Tudo é responsabilidade do cliente', 'B) Provedor: físico, rede, host; Cliente: OS, app, dados', 'C) Tudo é do provedor', 'D) Apenas dados'], 1, 'Em IaaS o provedor garante infraestrutura física e hipervisor; cliente é responsável por OS, aplicação e dados.', 'casp-plus'),
  },
  {
    id: 'p3',
    pergunta: 'O que é "threat modeling" em engenharia de segurança?',
    ..._(['A) Apenas varredura de vulnerabilidades', 'B) Processo estruturado para identificar ameaças e mitigações no design do sistema', 'C) Relatório pós-ataque', 'D) Política de senha'], 1, 'Threat modeling (ex.: STRIDE) identifica ameaças no desenho e ajuda a definir controles desde o início.', 'casp-plus'),
  },
  {
    id: 'p4',
    pergunta: 'Qual framework do NIST é amplamente usado para gestão de riscos de cybersecurity?',
    ..._(['A) NIST SP 800-53 apenas', 'B) NIST Cybersecurity Framework (CSF) e NIST SP 800-37 (RMF)', 'C) Apenas ISO 27001', 'D) LGPD'], 1, 'NIST CSF (Identify, Protect, Detect, Respond, Recover) e RMF são referências para gestão de risco e controles.', 'casp-plus'),
  },
  {
    id: 'p5',
    pergunta: 'O que é "secure DevOps" (DevSecOps)?',
    ..._(['A) Apenas usar DevOps sem segurança', 'B) Integrar segurança em todo o pipeline CI/CD (código, build, deploy)', 'C) Segurança apenas em produção', 'D) Apenas SAST'], 1, 'DevSecOps incorpora segurança (SAST, DAST, dependências, configuração) em todas as fases do pipeline.', 'casp-plus'),
  },
  {
    id: 'p6',
    pergunta: 'Qual tipo de criptografia é usada para assinatura digital e não repúdio?',
    ..._(['A) Apenas simétrica', 'B) Criptografia assimétrica (chave privada assina; pública verifica)', 'C) Apenas hash', 'D) Base64'], 1, 'Assinatura digital usa chave privada do signatário; qualquer um com a chave pública pode verificar a autenticidade.', 'casp-plus'),
  },
  {
    id: 'p7',
    pergunta: 'O que é "software-defined networking" (SDN) do ponto de vista de segurança?',
    ..._(['A) Rede sem controle', 'B) Rede onde o plano de controle é separado do plano de dados; permite segmentação e políticas centralizadas', 'C) Apenas VLAN', 'D) Rede física apenas'], 1, 'SDN centraliza o controle e permite aplicar políticas de segurança (segmentação, QoS) de forma programável.', 'casp-plus'),
  },
  {
    id: 'p8',
    pergunta: 'Qual documento descreve o nível de risco aceitável pela organização?',
    ..._(['A) Apenas política de senha', 'B) Apetite ao risco (risk appetite) / política de gestão de riscos', 'C) Relatório de pentest', 'D) Backup'], 1, 'Risk appetite define quanto risco a organização aceita; políticas e controles são alinhados a isso.', 'casp-plus'),
  },
  {
    id: 'p9',
    pergunta: 'O que é "red team" em relação a "blue team"?',
    ..._(['A) São a mesma coisa', 'B) Red team simula o atacante; blue team defende e responde', 'C) Blue team ataca', 'D) Apenas pentest interno'], 1, 'Red team = ataque simulado (objetivos realistas); blue team = defesa e detecção; purple team = colaboração.', 'casp-plus'),
  },
  {
    id: 'p10',
    pergunta: 'Para que serve um "security assessment" em nível enterprise?',
    ..._(['A) Apenas varredura de portas', 'B) Avaliação abrangente de controles, conformidade e postura de risco', 'C) Apenas backup', 'D) Apenas antivírus'], 1, 'Assessment avalia se controles estão implementados e efetivos (frameworks, regulatório, melhores práticas).', 'casp-plus'),
  },
  {
    id: 'p11',
    pergunta: 'O que é "PKI" (Public Key Infrastructure) em nível avançado?',
    ..._(['A) Apenas um certificado', 'B) Conjunto de políticas, hardware, software e procedimentos para criar, gerenciar e revogar certificados digitais', 'C) Apenas HTTPS', 'D) Criptografia simétrica'], 1, 'PKI inclui CA, RA, CRL/OCSP, políticas (CPS), HSM e ciclo de vida dos certificados.', 'casp-plus'),
  },
  {
    id: 'p12',
    pergunta: 'Qual padrão é comumente usado para gestão de continuidade de negócios?',
    ..._(['A) Apenas backup', 'B) ISO 22301 (BCMS) e práticas como BIA e planos BCP/DRP', 'C) Apenas LGPD', 'D) Nenhum'], 1, 'ISO 22301 cobre Business Continuity Management; BIA (Business Impact Analysis) alimenta BCP e DRP.', 'casp-plus'),
  },
  {
    id: 'p13',
    pergunta: 'O que é "container security" no contexto de CASP+?',
    ..._(['A) Apenas usar Docker sem segurança', 'B) Segurança de imagens, registro, runtime e orquestração (ex.: Kubernetes)', 'C) Apenas rede', 'D) Apenas host'], 1, 'Segurança de containers inclui imagem escaneada, registry seguro, runtime isolado e políticas de rede/pod.', 'casp-plus'),
  },
  {
    id: 'p14',
    pergunta: 'Qual é o papel de um "CISO" (Chief Information Security Officer)?',
    ..._(['A) Apenas operar firewall', 'B) Liderar a estratégia, governança e gestão de riscos de segurança da informação na organização', 'C) Apenas responder a incidentes', 'D) Apenas pentest'], 1, 'CISO define estratégia, alinha segurança ao negócio, reporta ao board e gerencia equipe e orçamento de segurança.', 'casp-plus'),
  },
  {
    id: 'p15',
    pergunta: 'O que é "security orchestration" (SOAR)?',
    ..._(['A) Apenas SIEM', 'B) Orquestração de ferramentas e automação de playbooks de resposta a incidentes', 'C) Apenas firewall', 'D) Apenas backup'], 1, 'SOAR integra SIEM, ticketing e outras ferramentas para automatizar e padronizar a resposta.', 'casp-plus'),
  },
  {
    id: 'p16',
    pergunta: 'Qual tipo de controle é "treinamento de conscientização"?',
    ..._(['A) Controle técnico', 'B) Controle administrativo (ou de gestão)', 'C) Apenas físico', 'D) Nenhum'], 1, 'Controles administrativos são políticas, procedimentos e treinamento; técnicos são sistemas; físicos são barreiras.', 'casp-plus'),
  },
  {
    id: 'p17',
    pergunta: 'O que é "data classification" em governança?',
    ..._(['A) Apenas backup', 'B) Categorização de dados por sensibilidade e criticidade para aplicar controles adequados', 'C) Apenas criptografia', 'D) Apenas LGPD'], 1, 'Classificação (ex.: pública, interna, confidencial, restrita) define quem acessa e como os dados são protegidos.', 'casp-plus'),
  },
  {
    id: 'p18',
    pergunta: 'Para que serve um "penetration test report" em nível executivo?',
    ..._(['A) Apenas listar vulnerabilidades técnicas', 'B) Resumir riscos de negócio, impacto e recomendações prioritizadas para decisão', 'C) Substituir o relatório técnico', 'D) Apenas para TI'], 1, 'Versão executiva traduz achados em risco de negócio e ações prioritárias para a gestão.', 'casp-plus'),
  },
  {
    id: 'p19',
    pergunta: 'O que é "secure baseline" em arquitetura?',
    ..._(['A) Apenas backup inicial', 'B) Configuração padrão endurecida (hardening) para sistemas e rede', 'C) Apenas política', 'D) Apenas antivírus'], 1, 'Baseline segura é a configuração mínima recomendada (CIS Benchmarks, vendor) para cada tipo de sistema.', 'casp-plus'),
  },
  {
    id: 'p20',
    pergunta: 'Qual norma ISO é referência para Sistema de Gestão de Segurança da Informação?',
    ..._(['A) ISO 9001', 'B) ISO/IEC 27001', 'C) ISO 22301 apenas', 'D) LGPD'], 1, 'ISO/IEC 27001 define requisitos para um SGSI; ISO 27002 traz controles e boas práticas.', 'casp-plus'),
  },
  {
    id: 'p21',
    pergunta: 'O que é "virtualization security" em ambiente enterprise?',
    ..._(['A) Ignorar hipervisor', 'B) Segurança do hipervisor, isolamento entre VMs, rede virtual e gestão de imagens', 'C) Apenas uma VM', 'D) Apenas backup'], 1, 'Segurança da virtualização inclui hardening do hypervisor, segmentação, patch e gestão de snapshots/imagens.', 'casp-plus'),
  },
  {
    id: 'p22',
    pergunta: 'Qual conceito descreve a proteção de dados em uso (processamento)?',
    ..._(['A) Apenas criptografia em repouso', 'B) Confidential computing / proteção de dados em uso (ex.: TEE, enclaves)', 'C) Apenas em trânsito', 'D) Backup'], 1, 'Confidential computing protege dados enquanto são processados (ex.: Intel SGX, AMD SEV, enclaves).', 'casp-plus'),
  },
  {
    id: 'p23',
    pergunta: 'O que é "risk acceptance"?',
    ..._(['A) Aceitar todos os riscos', 'B) Decisão formal de aceitar um risco residual após análise (documentada)', 'C) Ignorar riscos', 'D) Apenas transferir risco'], 1, 'Risk acceptance é a decisão consciente de aceitar um risco (geralmente com aprovação e documentação).', 'casp-plus'),
  },
  {
    id: 'p24',
    pergunta: 'Para que serve "audit trail" em conformidade?',
    ..._(['A) Apenas performance', 'B) Rastro de ações para auditoria, responsabilização e conformidade', 'C) Apenas backup', 'D) Apenas para TI'], 1, 'Audit trail registra quem fez o quê e quando; essencial para auditoria e investigação.', 'casp-plus'),
  },
  {
    id: 'p25',
    pergunta: 'O que é "security architecture" no contexto CASP+?',
    ..._(['A) Apenas um firewall', 'B) Projeto de controles, componentes e padrões para proteger ativos alinhado ao negócio e ao risco', 'C) Apenas rede', 'D) Apenas política'], 1, 'Arquitetura de segurança define como os controles se integram (rede, identidade, dados, aplicação) de forma coerente.', 'casp-plus'),
  },
  // CASP+ – mais questões (Architecture, Operations, Engineering/Crypto, GRC)
  { id: 'p26', pergunta: 'O que é "microsegmentação" em zero trust?', ..._(['A) Apenas VLAN', 'B) Segmentação em nível de carga/workload para limitar movimento lateral', 'C) Apenas um firewall', 'D) Apenas VPN'], 1, 'Microsegmentação aplica políticas por workload/serviço, não só por rede; reduz blast radius.', 'casp-plus') },
  { id: 'p27', pergunta: 'Qual modelo de responsabilidade em SaaS?', ..._(['A) Cliente gerencia tudo', 'B) Provedor: app, OS, rede, físico; Cliente: dados, identidade, configuração', 'C) Tudo do provedor', 'D) Apenas rede do cliente'], 1, 'Em SaaS o provedor gerencia aplicação e infraestrutura; cliente é responsável por dados e configurações de acesso.', 'casp-plus') },
  { id: 'p28', pergunta: 'O que é "STRIDE" em threat modeling?', ..._(['A) Apenas modelo de rede', 'B) Classificação de ameaças: Spoofing, Tampering, Repudiation, Info disclosure, DoS, Elevation', 'C) Apenas criptografia', 'D) Apenas backup'], 1, 'STRIDE (Microsoft) categoriza ameaças para identificar e mitigar no design.', 'casp-plus') },
  { id: 'p29', pergunta: 'Para que serve o "NIST RMF" (Risk Management Framework)?', ..._(['A) Apenas pentest', 'B) Ciclo de gestão de risco: categorizar, selecionar, implementar, avaliar, autorizar, monitorar', 'C) Apenas backup', 'D) Apenas firewall'], 1, 'RMF (SP 800-37) estrutura seleção e avaliação de controles de segurança (ex.: 800-53).', 'casp-plus') },
  { id: 'p30', pergunta: 'O que é "SAST"?', ..._(['A) Scan em produção apenas', 'B) Static Application Security Testing – análise do código-fonte sem executar', 'C) Apenas pentest', 'D) Apenas firewall'], 1, 'SAST analisa código estático; DAST testa a aplicação em execução.', 'casp-plus') },
  { id: 'p31', pergunta: 'O que é "HSM" (Hardware Security Module)?', ..._(['A) Apenas disco criptografado', 'B) Dispositivo físico que protege e gerencia chaves criptográficas', 'C) Apenas antivírus', 'D) Apenas backup'], 1, 'HSM armazena e processa chaves de forma segura; usado em PKI, transações e TDE.', 'casp-plus') },
  { id: 'p32', pergunta: 'O que é "secure baseline" para imagens de VM?', ..._(['A) Backup da VM', 'B) Imagem padrão endurecida (hardening) usada para deploy', 'C) Apenas snapshot', 'D) Apenas rede'], 1, 'Imagens base devem seguir hardening (patch, serviços desnecessários desativados, configuração segura).', 'casp-plus') },
  { id: 'p33', pergunta: 'Qual documento define o nível de risco que a organização aceita?', ..._(['A) Apenas relatório de pentest', 'B) Risk appetite / política de gestão de riscos', 'C) Apenas SLA', 'D) Apenas backup'], 1, 'Risk appetite define quanto risco é aceitável; políticas e controles são alinhados a ele.', 'casp-plus') },
  { id: 'p34', pergunta: 'O que é "purple team"?', ..._(['A) Apenas red', 'B) Colaboração entre red team (ataque) e blue team (defesa) para melhorar detecção e resposta', 'C) Apenas blue', 'D) Apenas pentest'], 1, 'Purple team une atacantes e defensores para validar e melhorar controles e playbooks.', 'casp-plus') },
  { id: 'p35', pergunta: 'Para que serve "OCSP" (Online Certificate Status Protocol)?', ..._(['A) Apenas emitir certificado', 'B) Verificar em tempo real se um certificado foi revogado', 'C) Apenas CRL', 'D) Apenas backup'], 1, 'OCSP permite consulta em tempo real ao status de revogação; alternativa à CRL.', 'casp-plus') },
  { id: 'p36', pergunta: 'O que é "BIA" (Business Impact Analysis)?', ..._(['A) Apenas backup', 'B) Análise do impacto da interrupção de processos/sistemas para priorizar BCP/DRP', 'C) Apenas pentest', 'D) Apenas firewall'], 1, 'BIA identifica processos críticos, tempo de recuperação e impacto; base para BCP e DRP.', 'casp-plus') },
  { id: 'p37', pergunta: 'O que é "image scanning" em containers?', ..._(['A) Apenas backup de imagem', 'B) Varredura de vulnerabilidades em imagens de container antes do deploy', 'C) Apenas rede', 'D) Apenas runtime'], 1, 'Scan de imagens (Trivy, Clair) detecta CVEs e misconfigs nas camadas da imagem.', 'casp-plus') },
  { id: 'p38', pergunta: 'Qual é o papel do "board" em governança de segurança?', ..._(['A) Apenas operar sistemas', 'B) Aprovar apetite ao risco, políticas e responsabilizar a gestão', 'C) Apenas responder a incidentes', 'D) Apenas TI'], 1, 'Board define direção e aceitação de risco; CISO reporta e executa a estratégia.', 'casp-plus') },
  { id: 'p39', pergunta: 'O que é "SOAR" (Security Orchestration, Automation and Response)?', ..._(['A) Apenas SIEM', 'B) Orquestração de ferramentas e automação de playbooks de resposta', 'C) Apenas firewall', 'D) Apenas backup'], 1, 'SOAR integra SIEM, ticketing e outras ferramentas para automatizar triagem e resposta.', 'casp-plus') },
  { id: 'p40', pergunta: 'Qual tipo de controle é "firewall"?', ..._(['A) Apenas administrativo', 'B) Controle técnico (preventivo)', 'C) Apenas físico', 'D) Nenhum'], 1, 'Firewall é controle técnico; políticas e treinamento são administrativos.', 'casp-plus') },
  { id: 'p41', pergunta: 'O que é "data classification" em governança?', ..._(['A) Apenas backup', 'B) Categorizar dados por sensibilidade para aplicar controles adequados', 'C) Apenas criptografia', 'D) Apenas LGPD'], 1, 'Classificação (pública, interna, confidencial) define quem acessa e como proteger.', 'casp-plus') },
  { id: 'p42', pergunta: 'Para que serve "audit trail" em conformidade?', ..._(['A) Apenas performance', 'B) Rastro de ações para auditoria, responsabilização e conformidade', 'C) Apenas backup', 'D) Apenas rede'], 1, 'Audit trail registra quem fez o quê e quando; essencial para auditoria e investigação.', 'casp-plus') },
  { id: 'p43', pergunta: 'O que é "risk acceptance"?', ..._(['A) Aceitar todos os riscos', 'B) Decisão formal de aceitar risco residual (documentada)', 'C) Ignorar riscos', 'D) Apenas transferir'], 1, 'Risk acceptance é decisão consciente e documentada de aceitar um risco residual.', 'casp-plus') },
  { id: 'p44', pergunta: 'O que é "confidential computing"?', ..._(['A) Apenas criptografia em repouso', 'B) Proteção de dados em uso (processamento) com TEE/enclaves', 'C) Apenas em trânsito', 'D) Apenas backup'], 1, 'Confidential computing protege dados durante o processamento (ex.: Intel SGX, AMD SEV).', 'casp-plus') },
  { id: 'p45', pergunta: 'Qual norma ISO cobre continuidade de negócios?', ..._(['A) Apenas ISO 27001', 'B) ISO 22301 (BCMS)', 'C) Apenas LGPD', 'D) Nenhuma'], 1, 'ISO 22301 define requisitos para Sistema de Gestão de Continuidade de Negócios.', 'casp-plus') },
  { id: 'p46', pergunta: 'O que é "secure DevOps" (DevSecOps)?', ..._(['A) Segurança só em produção', 'B) Integrar segurança em todo o pipeline CI/CD', 'C) Apenas SAST', 'D) Apenas pentest'], 1, 'DevSecOps incorpora segurança (SAST, DAST, dependências, secrets) no pipeline.', 'casp-plus') },
  { id: 'p47', pergunta: 'O que é "SDN" do ponto de vista de segurança?', ..._(['A) Rede sem controle', 'B) Rede com plano de controle separado; permite segmentação e políticas centralizadas', 'C) Apenas VLAN', 'D) Apenas físico'], 1, 'SDN centraliza controle e permite políticas de segurança (segmentação, QoS) programáveis.', 'casp-plus') },
  { id: 'p48', pergunta: 'Qual é a função do "CISO" em relação ao board?', ..._(['A) Apenas operar firewall', 'B) Reportar riscos, estratégia e necessidades de investimento em segurança', 'C) Apenas responder a incidentes', 'D) Apenas pentest'], 1, 'CISO comunica postura de risco e alinhamento da segurança com o negócio ao board.', 'casp-plus') },
  { id: 'p49', pergunta: 'O que é "TEE" (Trusted Execution Environment)?', ..._(['A) Apenas VM', 'B) Ambiente isolado (hardware/software) para executar código sensível', 'C) Apenas container', 'D) Apenas backup'], 1, 'TEE (ex.: enclaves) protege código e dados em execução de outros processos e do SO.', 'casp-plus') },
  { id: 'p50', pergunta: 'Qual framework NIST é usado para melhorar postura de cybersecurity?', ..._(['A) Apenas 800-53', 'B) NIST Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover)', 'C) Apenas LGPD', 'D) Apenas ISO 27001'], 1, 'NIST CSF organiza atividades em cinco funções e é amplamente adotado para gestão de segurança.', 'casp-plus') },

  // --- OSCP (25) ---
  {
    id: 'o1',
    pergunta: 'Qual ferramenta é essencial para enumeração SMB em máquinas Windows?',
    ..._(['A) Nmap apenas', 'B) enum4linux, smbclient, crackmapexec', 'C) Apenas browser', 'D) Apenas Wireshark'], 1, 'enum4linux e smbclient enumeram shares, usuários e políticas; crackmapexec automatiza ações em rede Windows.', 'oscp'),
  },
  {
    id: 'o2',
    pergunta: 'O que é "privilege escalation" no contexto OSCP?',
    ..._(['A) Apenas obter qualquer acesso', 'B) Passar de um nível de acesso menor para maior (ex.: usuário → root/Administrator)', 'C) Escalar apenas na rede', 'D) Apenas explorar serviço'], 1, 'Privilege escalation é elevar privilégios (kernel exploit, misconfig, credenciais em claro) para admin/root.', 'oscp'),
  },
  {
    id: 'o3',
    pergunta: 'Qual técnica é comum para explorar serviços com buffer overflow no OSCP?',
    ..._(['A) Apenas nmap', 'B) Identificar tamanho do buffer, EIP overwrite, shellcode, bad chars', 'C) Apenas SQLi', 'D) Apenas phishing'], 1, 'Buffer overflow: encontrar offset para EIP, controlar EIP, encontrar ret addr, tratar bad chars, shellcode.', 'oscp'),
  },
  {
    id: 'o4',
    pergunta: 'O que é "pivoting" em um pentest?',
    ..._(['A) Apenas escanear uma máquina', 'B) Usar uma máquina comprometida como salto para acessar redes internas não acessíveis diretamente', 'C) Apenas explorar um serviço', 'D) Apenas relatório'], 1, 'Pivoting usa o host comprometido como proxy (SSH, chisel, etc.) para atacar segmentos internos.', 'oscp'),
  },
  {
    id: 'o5',
    pergunta: 'Qual comando ou ferramenta é usado para listar processos em Linux durante pós-exploração?',
    ..._(['A) dir', 'B) ps aux, pstree', 'C) ipconfig', 'D) net user'], 1, 'ps aux e pstree mostram processos; útil para encontrar serviços rodando como root ou credenciais em memória.', 'oscp'),
  },
  {
    id: 'o6',
    pergunta: 'O que é "reverse shell"?',
    ..._(['A) Concha invertida na tela', 'B) Conexão iniciada pela vítima de volta para o atacante (contorna firewall de saída)', 'C) Apenas bind shell', 'D) Apenas web shell'], 1, 'Reverse shell: a máquina alvo conecta ao IP:porta do atacante; útil quando a vítima não aceita conexões inbound.', 'oscp'),
  },
  {
    id: 'o7',
    pergunta: 'Qual ferramenta é comumente usada para exploração de banco de dados via SQL injection?',
    ..._(['A) Nmap', 'B) sqlmap, manual UNION-based/error-based', 'C) Apenas browser', 'D) Apenas Wireshark'], 1, 'sqlmap automatiza SQLi; em OSCP também se usa manual (UNION, error-based, time-based) para provar impacto.', 'oscp'),
  },
  {
    id: 'o8',
    pergunta: 'O que deve constar em um relatório de penetração profissional (OSCP)?',
    ..._(['A) Apenas lista de IPs', 'B) Metodologia, descobertas, evidências (screenshots), impacto e recomendações remediadoras', 'C) Apenas conclusão', 'D) Apenas comandos'], 1, 'Relatório deve ser reproduzível: metodologia, passos, evidências (screenshots/comandos), severidade e correções.', 'oscp'),
  },
  {
    id: 'o9',
    pergunta: 'Qual serviço é frequentemente explorado para obter shell em hosts Windows (RCE)?',
    ..._(['A) Apenas HTTP', 'B) SMB (EternalBlue, scripts), RDP (se credenciais), serviços com buffer overflow', 'C) Apenas SSH', 'D) Apenas DNS'], 1, 'SMB (ex.: MS17-010), serviços com buffer overflow e RDP com credenciais são vetores comuns em Windows.', 'oscp'),
  },
  {
    id: 'o10',
    pergunta: 'O que é "enumeração" na fase de pentest?',
    ..._(['A) Apenas port scan', 'B) Coletar informações detalhadas sobre serviços, usuários, shares, versões', 'C) Apenas explorar', 'D) Apenas relatório'], 1, 'Enumeração aprofunda o recon: usuários, grupos, shares, versões de software, configurações fracas.', 'oscp'),
  },
  {
    id: 'o11',
    pergunta: 'Qual distro é a base do curso PWK/OSCP?',
    ..._(['A) Ubuntu apenas', 'B) Kali Linux (e Parrot)', 'C) Windows', 'D) CentOS'], 1, 'PWK usa Kali Linux como ambiente principal de ataque; o exame pode ser feito em Kali ou Parrot.', 'oscp'),
  },
  {
    id: 'o12',
    pergunta: 'O que é "bind shell"?',
    ..._(['A) Shell que se conecta ao atacante', 'B) Shell que abre uma porta na vítima e espera conexão do atacante', 'C) Apenas web shell', 'D) Apenas reverse'], 1, 'Bind shell: serviço na vítima escuta em uma porta; atacante conecta. Pode ser bloqueado por firewall na vítima.', 'oscp'),
  },
  {
    id: 'o13',
    pergunta: 'Qual técnica é usada para manter acesso após comprometer um sistema (persistência)?',
    ..._(['A) Apenas não fazer nada', 'B) Crontab, serviço, registry Run keys, WMI, backdoor', 'C) Apenas relatório', 'D) Apenas sair'], 1, 'Persistência: agendamento (cron, at), serviços, chaves de registro, WMI subscription, backdoors (só em escopo autorizado).', 'oscp'),
  },
  {
    id: 'o14',
    pergunta: 'O que é "kernel exploit" no contexto de privilege escalation Linux?',
    ..._(['A) Exploit de aplicação', 'B) Exploração de vulnerabilidade no kernel do SO para obter root', 'C) Apenas script', 'D) Apenas rede'], 1, 'Kernel exploits (ex.: Dirty COW, overlayfs) exploram bugs no kernel para elevar a root.', 'oscp'),
  },
  {
    id: 'o15',
    pergunta: 'Qual ferramenta é usada para transferir arquivos da máquina do atacante para a vítima em pentest?',
    ..._(['A) Apenas browser', 'B) Python HTTP server, scp (se SSH), smb share, wget/curl na vítima', 'C) Apenas e-mail', 'D) Apenas USB'], 1, 'Servidor HTTP simples (python -m http.server), SMB, ou scp quando há SSH; na vítima: wget, curl, certutil (Windows).', 'oscp'),
  },
  {
    id: 'o16',
    pergunta: 'O que é "password spraying"?',
    ..._(['A) Ataque de força bruta em um único usuário', 'B) Tentativa de uma ou poucas senhas comuns em muitos usuários para evitar bloqueio', 'C) Apenas hash crack', 'D) Apenas phishing'], 1, 'Password spraying testa poucas senhas (ex.: Winter2024!) em muitos usuários para evitar lockout.', 'oscp'),
  },
  {
    id: 'o17',
    pergunta: 'Qual formato de hash do Windows é obtido com "sekurlsa::logonpasswords" (Mimikatz)?',
    ..._(['A) Apenas /etc/shadow', 'B) NTLM hashes (e credenciais em claro se disponíveis) da memória LSASS', 'C) Apenas SHA-256', 'D) Apenas MD5'], 1, 'Mimikatz (sekurlsa) extrai hashes e às vezes senhas em claro do LSASS (post-exploitation Windows).', 'oscp'),
  },
  {
    id: 'o18',
    pergunta: 'O que é "LFI" (Local File Inclusion)?',
    ..._(['A) Apenas SQLi', 'B) Vulnerabilidade que permite incluir arquivos locais do servidor via parâmetro (ex.: /etc/passwd)', 'C) Apenas XSS', 'D) Apenas RCE'], 1, 'LFI: parâmetro (ex.: page=../../../etc/passwd) faz o servidor incluir arquivo local; pode levar a RCE com log poisoning.', 'oscp'),
  },
  {
    id: 'o19',
    pergunta: 'Qual comando no Linux é usado para encontrar arquivos com SUID para privilege escalation?',
    ..._(['A) dir', 'B) find / -perm -4000 2>/dev/null', 'C) ipconfig', 'D) net user'], 1, 'find / -perm -4000 lista binários SUID; executáveis SUID rodam como dono (pode ser root) e podem ser explorados.', 'oscp'),
  },
  {
    id: 'o20',
    pergunta: 'O que é "port forwarding" em um pentest?',
    ..._(['A) Apenas abrir porta no firewall', 'B) Redirecionar tráfego de uma porta (local ou remota) para outro destino (ex.: acessar serviço interno via pivot)', 'C) Apenas nmap', 'D) Apenas fechar porta'], 1, 'Port forwarding (SSH -L/-D, chisel, etc.) encaminha portas através de máquina comprometida para alcançar redes internas.', 'oscp'),
  },
  {
    id: 'o21',
    pergunta: 'O que é "web shell"?',
    ..._(['A) Apenas shell reverso', 'B) Script (PHP, ASP, etc.) enviado ou instalado no servidor web para executar comandos via browser', 'C) Apenas bind shell', 'D) Apenas SSH'], 1, 'Web shell é um script no servidor que aceita comandos via HTTP e retorna saída; permite execução remota.', 'oscp'),
  },
  {
    id: 'o22',
    pergunta: 'Qual ferramenta é usada para escanear portas e versões de serviços no OSCP?',
    ..._(['A) Apenas browser', 'B) Nmap (-sV -sC -p-), masscan para varredura rápida', 'C) Apenas Wireshark', 'D) Apenas sqlmap'], 1, 'nmap -sV -sC -p- identifica portas e serviços; masscan acelera varreduras em grandes ranges.', 'oscp'),
  },
  {
    id: 'o23',
    pergunta: 'O que é "pass-the-hash" (PtH)?',
    ..._(['A) Criptografar senha', 'B) Autenticar em sistemas Windows usando o hash NTLM em vez da senha em claro', 'C) Apenas crack de hash', 'D) Apenas phishing'], 1, 'PtH usa o hash NTLM (ex.: de dump) para autenticar sem precisar da senha em texto claro (Mimikatz, crackmapexec).', 'oscp'),
  },
  {
    id: 'o24',
    pergunta: 'Qual etapa do relatório OSCP é crítica para o cliente corrigir as falhas?',
    ..._(['A) Apenas introdução', 'B) Metodologia reproduzível, evidências e recomendações de correção por prioridade', 'C) Apenas conclusão', 'D) Apenas lista de IPs'], 1, 'Recomendações acionáveis e priorizadas (crítico/alto/médio/baixo) permitem remediar e reduzir risco.', 'oscp'),
  },
  {
    id: 'o25',
    pergunta: 'O que é "buffer overflow" em termos de exploração?',
    ..._(['A) Backup cheio', 'B) Escrever dados além do espaço alocado na memória para sobrescrever endereços de retorno e controlar o fluxo (ex.: EIP)', 'C) Apenas SQLi', 'D) Apenas XSS'], 1, 'Buffer overflow: entrada maior que o buffer sobrescreve memória adjacente; controlando EIP pode-se executar shellcode.', 'oscp'),
  },
  // OSCP – mais questões (Recon, Scanning, Vuln/Exploit, Post-Exploit, Reporting)
  { id: 'o26', pergunta: 'Qual comando Nmap descobre hosts vivos em uma rede sem escanear portas?', ..._(['A) nmap -sV', 'B) nmap -sn (ping sweep)', 'C) nmap -p-', 'D) nmap -O'], 1, 'nmap -sn faz descoberta de hosts (ICMP, TCP, etc.) sem varredura de portas.', 'oscp') },
  { id: 'o27', pergunta: 'O que é "bind shell" vs "reverse shell"?', ..._(['A) São iguais', 'B) Bind: vítima escuta; atacante conecta. Reverse: vítima conecta ao atacante', 'C) Apenas reverse existe', 'D) Apenas bind existe'], 1, 'Reverse shell contorna firewall de saída; bind pode ser bloqueado se a vítima não aceitar conexões.', 'oscp') },
  { id: 'o28', pergunta: 'Qual ferramenta enumera usuários e shares em SMB?', ..._(['A) Apenas Nmap', 'B) enum4linux, smbclient, crackmapexec', 'C) Apenas sqlmap', 'D) Apenas Wireshark'], 1, 'enum4linux e smbclient listam usuários, grupos, shares e políticas em hosts Windows.', 'oscp') },
  { id: 'o29', pergunta: 'O que é "EIP" no contexto de buffer overflow?', ..._(['A) Endereço de backup', 'B) Instruction Pointer – registrador que indica a próxima instrução; controlá-lo permite redirecionar execução', 'C) Apenas IP de rede', 'D) Apenas hash'], 1, 'Sobrescrever EIP com endereço de shellcode ou ROP permite execução de código malicioso.', 'oscp') },
  { id: 'o30', pergunta: 'Como fazer "pivoting" após comprometer um host?', ..._(['A) Apenas escanear de novo', 'B) Usar o host como proxy (SSH -D, chisel, proxychains) para atacar rede interna', 'C) Apenas explorar outro serviço', 'D) Apenas relatório'], 1, 'Pivoting: usar host comprometido como salto (proxy/SOCKS) para alcançar redes não acessíveis.', 'oscp') },
  { id: 'o31', pergunta: 'O que é "LFI" (Local File Inclusion)?', ..._(['A) Apenas SQLi', 'B) Incluir arquivo local do servidor via parâmetro (ex.: /etc/passwd)', 'C) Apenas XSS', 'D) Apenas RCE'], 1, 'LFI permite ler arquivos do servidor; com log poisoning ou /proc pode levar a RCE.', 'oscp') },
  { id: 'o32', pergunta: 'Qual comando Linux lista binários SUID para privilege escalation?', ..._(['A) ls -la', 'B) find / -perm -4000 2>/dev/null', 'C) id apenas', 'D) cat /etc/passwd'], 1, 'SUID (4000) faz o binário rodar como dono; se dono for root, pode levar a escalada.', 'oscp') },
  { id: 'o33', pergunta: 'O que é "pass-the-hash" (PtH)?', ..._(['A) Criptografar senha', 'B) Autenticar em Windows usando hash NTLM em vez da senha em claro', 'C) Apenas crack de hash', 'D) Apenas phishing'], 1, 'PtH usa hash NTLM (ex.: do LSASS) para autenticar sem senha em texto claro.', 'oscp') },
  { id: 'o34', pergunta: 'Para que serve "msfvenom"?', ..._(['A) Apenas escanear', 'B) Gerar payloads (exe, elf, php) para reverse/bind shell', 'C) Apenas enumeração', 'D) Apenas relatório'], 1, 'msfvenom gera payloads com LHOST/LPORT para uso em exploit ou engenharia social (escopo autorizado).', 'oscp') },
  { id: 'o35', pergunta: 'O que é "web shell"?', ..._(['A) Apenas reverse shell', 'B) Script no servidor (PHP, etc.) que executa comandos via HTTP', 'C) Apenas bind shell', 'D) Apenas SSH'], 1, 'Web shell é script enviado ou explorado no servidor para executar comandos remotamente.', 'oscp') },
  { id: 'o36', pergunta: 'Qual ferramenta automatiza exploração de SQL injection?', ..._(['A) Nmap', 'B) sqlmap', 'C) Apenas browser', 'D) Apenas Wireshark'], 1, 'sqlmap testa parâmetros e extrai dados ou shell; uso apenas em ambiente autorizado.', 'oscp') },
  { id: 'o37', pergunta: 'O que deve constar no relatório de pentest (OSCP)?', ..._(['A) Apenas IPs', 'B) Metodologia, passos reproduzíveis, evidências (screenshots), impacto e recomendações', 'C) Apenas conclusão', 'D) Apenas comandos sem contexto'], 1, 'Relatório profissional inclui metodologia, evidências e recomendações priorizadas.', 'oscp') },
  { id: 'o38', pergunta: 'O que é "password spraying"?', ..._(['A) Força bruta em um usuário', 'B) Uma ou poucas senhas em muitos usuários para evitar lockout', 'C) Apenas hash crack', 'D) Apenas phishing'], 1, 'Password spraying testa senhas comuns (ex.: Winter2024!) em muitos usuários.', 'oscp') },
  { id: 'o39', pergunta: 'Como transferir arquivo do atacante para a vítima Linux?', ..._(['A) Apenas e-mail', 'B) python -m http.server + wget/curl na vítima; ou SCP se tiver SSH', 'C) Apenas USB', 'D) Apenas RDP'], 1, 'Servidor HTTP simples na máquina do atacante; na vítima: wget http://atacante/arquivo.', 'oscp') },
  { id: 'o40', pergunta: 'O que é "kernel exploit" em privilege escalation Linux?', ..._(['A) Exploit de aplicação', 'B) Exploração de vulnerabilidade no kernel para obter root', 'C) Apenas script', 'D) Apenas rede'], 1, 'Kernel exploits (ex.: Dirty COW) exploram bugs no kernel para elevar a root.', 'oscp') },
  { id: 'o41', pergunta: 'Qual técnica mantém acesso após comprometer um host (persistência)?', ..._(['A) Apenas não fazer nada', 'B) Crontab, serviço, registry Run keys, WMI (em escopo autorizado)', 'C) Apenas relatório', 'D) Apenas sair'], 1, 'Persistência: agendamento, serviços, chaves de registro; só em escopo definido no contrato.', 'oscp') },
  { id: 'o42', pergunta: 'O que é "port forwarding" em pentest?', ..._(['A) Abrir porta no firewall', 'B) Encaminhar tráfego de uma porta para outro destino (ex.: via pivot)', 'C) Apenas nmap', 'D) Fechar porta'], 1, 'SSH -L, chisel, etc. redirecionam portas através do host comprometido.', 'oscp') },
  { id: 'o43', pergunta: 'Qual payload do Metasploit é comum para shell reversa Windows?', ..._(['A) Apenas linux/x86/shell_reverse_tcp', 'B) windows/meterpreter/reverse_tcp ou windows/shell_reverse_tcp', 'C) Apenas browser', 'D) Apenas PHP'], 1, 'reverse_tcp e meterpreter são usados para obter shell após exploit Windows.', 'oscp') },
  { id: 'o44', pergunta: 'O que é "enumeração" após o port scan?', ..._(['A) Apenas listar portas', 'B) Coletar detalhes: versões, usuários, shares, banners', 'C) Apenas explorar', 'D) Apenas relatório'], 1, 'Enumeração aprofunda: versões de serviço, usuários, shares, configurações fracas.', 'oscp') },
  { id: 'o45', pergunta: 'Qual distro é a base do ambiente PWK/OSCP?', ..._(['A) Ubuntu apenas', 'B) Kali Linux (ou Parrot)', 'C) Windows', 'D) CentOS'], 1, 'PWK e exame OSCP usam Kali (ou Parrot) como ambiente de ataque.', 'oscp') },
  { id: 'o46', pergunta: 'O que é "Mimikatz" usado para (post-exploitation Windows)?', ..._(['A) Apenas escanear', 'B) Extrair hashes e credenciais da memória (LSASS)', 'C) Apenas firewall', 'D) Apenas backup'], 1, 'Mimikatz (sekurlsa::logonpasswords) extrai hashes NTLM e às vezes senhas em claro do LSASS.', 'oscp') },
  { id: 'o47', pergunta: 'Qual comando Nmap combina versão e scripts padrão em todas as portas?', ..._(['A) nmap -sn', 'B) nmap -sC -sV -p-', 'C) nmap -O apenas', 'D) nmap --script vuln apenas'], 1, '-sC (default scripts), -sV (versão), -p- (todas as portas) é combinação comum.', 'oscp') },
  { id: 'o48', pergunta: 'O que é "RFI" (Remote File Inclusion)?', ..._(['A) Apenas LFI', 'B) Incluir arquivo de um servidor remoto controlado pelo atacante', 'C) Apenas XSS', 'D) Apenas SQLi'], 1, 'RFI permite incluir código de URL remota; pode levar a RCE se permitido pelo servidor.', 'oscp') },
  { id: 'o49', pergunta: 'Para que serve "searchsploit"?', ..._(['A) Apenas nmap', 'B) Buscar exploits no repositório Exploit-DB', 'C) Apenas Wireshark', 'D) Apenas sqlmap'], 1, 'searchsploit busca por CVE, nome de software, etc. no Exploit-DB (Kali).', 'oscp') },
  { id: 'o50', pergunta: 'O que é "privilégio mínimo" no contexto de relatório de pentest?', ..._(['A) Não fazer nada', 'B) Recomendar que contas e serviços tenham apenas permissões necessárias', 'C) Apenas explorar mais', 'D) Apenas documentar'], 1, 'Recomendações devem incluir aplicar menor privilégio para reduzir impacto de comprometimento.', 'oscp') },
];

export function getQuestoesByCertificacao(certId) {
  if (!certId) return questoesSimulado;
  return questoesSimulado.filter((q) => q.certificacao === certId);
}

export function getQuestaoById(id) {
  return questoesSimulado.find((q) => q.id === id) || null;
}
