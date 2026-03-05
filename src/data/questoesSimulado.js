// Banco de questões para simulado – CompTIA Security+, CySA+, CASP+ e OSCP
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
];

export function getQuestoesByCertificacao(certId) {
  if (!certId) return questoesSimulado;
  return questoesSimulado.filter((q) => q.certificacao === certId);
}

export function getQuestaoById(id) {
  return questoesSimulado.find((q) => q.id === id) || null;
}
