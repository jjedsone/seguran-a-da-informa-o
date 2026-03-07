/**
 * Projetos e Ferramentas de Segurança – Temas detalhados
 * Cada item explica: o que é, como fazer, o que precisa, como funciona na prática.
 */

export const temasFerramentas = [
  {
    id: 'monitor-rede',
    titulo: 'Ferramentas de monitoramento de rede',
    ordem: 1,
    conteudo: `# Ferramentas de Monitoramento de Rede

## Pergunta central
“Como um técnico desenvolve um sistema que monitora a rede da empresa em tempo real?”

**O que esse tipo de software faz:** detectar tráfego suspeito, identificar portas abertas, mapear dispositivos conectados e alertar sobre ataques.

## Como funciona na prática

**1. Captura de tráfego** – O sistema “escuta” os pacotes que passam pela rede (modo promíscuo na interface ou espelhamento de porta no switch). Cada pacote traz: origem, destino, porta, protocolo (TCP/UDP), tamanho e conteúdo (se não criptografado).

**2. Análise em tempo real** – Sobre esse fluxo você aplica regras: “quantas conexões por segundo por IP?”, “algum host escaneando muitas portas?”, “tráfego para IPs de lista negra?”. Resultado: métricas e alertas.

**3. Mapeamento de dispositivos** – Varreduras periódicas (ARP, ping, descoberta de serviços) montam um mapa: quem está na rede, qual IP, qual OS/serviço. Dispositivo novo = evento que pode gerar alerta.

## O que você precisa para fazer

- **Linguagens:** Python (Scapy, socket, pyshark), Go (gopacket), Rust (libpcap), C (libpcap), Node.js (cap).
- **Bibliotecas:** **Scapy** (montar/inspecionar pacotes), **socket** (conexões e portas), integração com **Nmap** (varredura de portas e serviços).
- **Ambiente:** Acesso à rede (interface em modo promíscuo ou tráfego espelhado); em produção, muitas vezes um **tap** ou **span** no switch.

## Passo a passo – Projeto “Network Monitor” mínimo

**1. Definir escopo** – Uma sub-rede; monitorar apenas camada de rede (IP/porta) ou também inspecionar payload (ex.: HTTP).

**2. Scanner de IPs** – Script que varre a faixa (ex.: 192.168.1.0/24) com ping ou ARP; lista hosts ativos. Pode usar Nmap em subprocesso ou biblioteca nativa.

**3. Análise de portas abertas** – Por host ativo, varrer portas comuns (22, 80, 443, 3389, etc.); registrar quais estão abertas. Cuidado: varredura em rede alheia pode ser proibida; use em rede própria ou autorizada.

**4. Detecção de novos dispositivos** – Manter um “mapa” (arquivo ou banco) dos dispositivos já vistos; a cada varredura, comparar. Se aparecer MAC/IP novo → alerta “dispositivo desconhecido”.

**5. Alertas** – Canal simples: e-mail, arquivo de log, webhook. Regras exemplo: “mais de 100 conexões em 1 min do mesmo IP”, “porta 22 acessada de fora”, “novo dispositivo na VLAN de gestão”.

## Ferramentas famosas que seguem essa linha

- **Wireshark** – Análise de pacotes (nasceu de projeto universitário).
- **Nmap** – Varredura de rede e portas (criado por estudante).
- **Zeek (Bro)** – Monitoramento de rede com scripts e logs de eventos.

Muitas ferramentas famosas começaram como projetos pessoais ou acadêmicos; o seu projeto pode evoluir para algo usado na empresa ou na comunidade.`,
  },
  {
    id: 'scanner-vuln',
    titulo: 'Scanner de vulnerabilidades',
    ordem: 2,
    conteudo: `# Scanner de Vulnerabilidades

## Pergunta central
“Como criar um sistema que descobre falhas de segurança antes que um atacante descubra?”

**Objetivo:** Verificar portas abertas, versões vulneráveis de software, configurações inseguras e serviços expostos na rede ou nos hosts.

## Como funciona na prática

**1. Descoberta** – O scanner descobre hosts (IPs) e, em cada um, quais portas estão abertas e quais serviços respondem (SSH, HTTP, banco, etc.). Às vezes identifica versão do software (ex.: Apache 2.4.41).

**2. Comparação com base de vulnerabilidades** – Cada versão conhecida é confrontada com um banco (CVE, NVD, exploit-db). Ex.: “Apache 2.4.41 tem CVE-2020-xxxx → vulnerável”.

**3. Verificação de configuração** – Alguns scanners testam: TLS fraco, diretórios listáveis, páginas de admin padrão, credenciais fracas. Isso cobre “configurações inseguras”.

**4. Relatório** – Lista de achados com severidade (crítico, alto, médio, baixo), descrição, CVE quando houver e recomendação (atualizar, desabilitar, corrigir configuração).

## O que você precisa para fazer

- **Varredura de rede/portas:** Nmap (scriptação ou integração), ou bibliotecas (Python: python-nmap, socket).
- **Base de vulnerabilidades:** Fontes públicas (NVD, CVE); APIs ou feeds; em projeto interno pode começar com lista de CVEs conhecidos para os produtos que você usa.
- **Linguagens:** Python, Go ou Rust para orquestrar Nmap, chamar APIs de CVE e gerar relatórios.

## Passo a passo – Projeto “Vulnerability Scanner interno”

**1. Definir alvos** – Lista de IPs ou faixas autorizadas para varredura (sempre com autorização da empresa).

**2. Varredura de portas e serviços** – Usar Nmap (ou equivalente) para descobrir portas abertas e banner/versão quando possível. Guardar resultado (host, porta, serviço, versão).

**3. Consultar base de vulnerabilidades** – Para cada (serviço, versão), consultar CVE/NVD (API ou ficheiro). Marcar: vulnerável (CVE crítico/alto), desatualizado (versão antiga), ok.

**4. Classificar risco** – Regra simples: CVE crítico = risco alto; CVE alto = risco alto; CVE médio = risco médio; serviço exposto desnecessário = médio. Gerar pontuação ou nível (seguro / médio / alto).

**5. Relatório automático** – Saída em HTML ou PDF: por host, lista de achados, CVE, recomendação, data da varredura. Agendar execução (cron) e enviar por e-mail para a equipe de segurança.

## Ferramentas famosas que nasceram assim

- **Nessus** – Scanner comercial (versão community gratuita).
- **OpenVAS** – Open source, evolução do Nessus antigo.
- **Nikto** – Focado em servidores web (CGI, arquivos perigosos, headers).

Um scanner interno bem feito pode virar padrão da empresa para compliance e auditoria.`,
  },
  {
    id: 'analise-logs',
    titulo: 'Sistema de análise de logs',
    ordem: 3,
    conteudo: `# Sistema de Análise de Logs (Mini SIEM)

## Pergunta central
“Como criar um sistema que coleta logs, analisa padrões, detecta comportamento estranho e gera alertas?”

**Contexto:** Máquinas e serviços geram milhões de eventos por dia (login, erro, acesso a arquivo, conexão). O problema é volume e dispersão; a solução é centralizar, normalizar e analisar.

## O que são logs

**Logs** são registros de eventos: quem fez o quê, quando, de onde e com qual resultado. Exemplos: “usuário X logou no servidor às 10h”, “serviço Y falhou ao conectar no banco”, “IP Z acessou a pasta compartilhada”.

## Como funciona na prática

**1. Coleta** – Agentes ou sondas nos servidores e estações enviam logs para um **coletor central** (via syslog, API, arquivo, agent). Protocolos comuns: Syslog (UDP/TCP), WinRM (Windows), agent (Filebeat, Wazuh agent).

**2. Normalização e armazenamento** – Cada evento vira um registro com campos comuns: data/hora, origem (host, aplicação), tipo (auth, network, file), usuário, IP, mensagem. Armazenar em base pesquisável (Elasticsearch, banco, arquivo indexado).

**3. Análise de padrões** – Regras de correlação: “mesmo usuário logou em 3 países em 1 hora”, “10 falhas de login seguidas do mesmo IP”, “processo desconhecido executando em servidor crítico”. Quando a regra bate → evento de alerta.

**4. Alertas** – Canalizar alertas para e-mail, Slack, painel ou SOAR. Severidade conforme criticidade (login suspeito = alto; falha de disco = médio).

## O que você precisa para fazer

- **Coleta:** Syslog server (rsyslog, syslog-ng), ou agent (Filebeat, Fluentd), ou leitura de arquivos de log (tail, watchdog).
- **Armazenamento:** Elasticsearch, ou SQLite/PostgreSQL para volume menor, ou até arquivos JSON por dia.
- **Linguagens:** Python, Go ou Node.js para o “cérebro”: ingestão, regras, alertas. Queries em linguagem do banco (KQL, SQL) ou scripts.

## Passo a passo – Projeto “Mini SIEM”

**1. Coletar logs de servidores** – Configurar rsyslog ou agent para enviar auth.log, syslog, logs de aplicação para um único endpoint. Definir formato (ex.: JSON com timestamp, host, program, message).

**2. Ingerir e indexar** – Script ou serviço que recebe os eventos e grava em Elasticsearch (ou em arquivo/database). Índice por data e por tipo para consultas rápidas.

**3. Regras de análise** – Implementar 3–5 regras no início: “múltiplas falhas de login do mesmo IP em 5 min”, “login root de IP externo”, “novo serviço escutando em porta alta”. Cada regra consulta o armazenamento (últimas 24h, por exemplo) e, se condição verdadeira, gera alerta.

**4. Detecção de login suspeito** – Correlacionar: mesmo usuário, IPs diferentes em pouco tempo; ou horário incomum (3h da manhã em conta de escritório). Lista de IPs “conhecidos” por usuário ajuda a reduzir falso positivo.

**5. Gerar alertas** – Saída: e-mail, webhook, arquivo. Incluir no alerta: tipo, severidade, host, usuário, resumo e link para busca nos logs.

## Ferramentas profissionais parecidas

- **Splunk** – SIEM e análise de logs (comercial).
- **ELK Stack** (Elasticsearch, Logstash, Kibana) – Open source; muito usado.
- **Wazuh** – SIEM + EDR open source; coleta, regras e dashboards.

Um mini SIEM interno já traz valor: visibilidade e primeiros alertas automatizados.`,
  },
  {
    id: 'auditoria-seguranca',
    titulo: 'Ferramenta de auditoria de segurança',
    ordem: 4,
    conteudo: `# Ferramenta de Auditoria de Segurança

## Pergunta central
“Como criar um programa que verifica se os computadores da empresa estão configurados corretamente do ponto de vista de segurança?”

**Objetivo:** Verificar firewall ativo, antivírus atualizado, atualizações instaladas, serviços inseguros ativos e gerar relatório (máquina segura / risco médio / risco alto). Muito usado em auditorias internas e compliance.

## Como funciona na prática

**1. Inventário do endpoint** – O agente ou script roda **no próprio computador** (ou via acesso remoto autorizado) e coleta: versão do SO, lista de serviços, regras de firewall, status do antivírus, última atualização, usuários locais, senha de tela de bloqueio, etc.

**2. Comparação com política** – Cada item é confrontado com uma **política** definida pela empresa. Ex.: “firewall deve estar ativo”, “antivírus com definições com menos de 7 dias”, “Windows Update automático habilitado”, “RDP desabilitado ou restrito”.

**3. Pontuação ou classificação** – Por desvio da política, soma-se “pontos de risco” ou marca-se falha crítica/alta/média. Resultado por máquina: **seguro**, **risco médio** ou **risco alto**.

**4. Relatório** – Lista de máquinas com status, itens em conformidade e itens fora. Relatório serve para gestão (“quantos % dos PCs estão em risco?”) e para TI corrigir (“estes 10 PCs têm firewall desativado”).

## O que você precisa para fazer

- **Execução no endpoint:** Script (Python, PowerShell, Bash) que rode em cada máquina (GPO, agente, ou execução remota com credenciais).
- **Windows:** PowerShell para firewall (Get-NetFirewallProfile), WMI para antivírus e updates, registro para políticas.
- **Linux:** comandos (ufw, iptables, clamav, apt/yum), arquivos em /etc.
- **Saída:** JSON ou CSV por máquina; depois um “consolidador” gera o relatório (HTML, PDF) ou envia para um servidor central.

## Passo a passo – Projeto “Security Audit Tool”

**1. Definir checklist** – Lista de verificações: firewall ativo? antivírus instalado e atualizado? atualizações automáticas? RDP/SSH restrito? senha de tela de bloqueio? compartilhamentos desnecessários?

**2. Implementar coleta por item** – Para cada item, um comando ou chamada de API. Ex. Windows: Get-NetFirewallProfile | Select-Object Enabled; Get-MpComputerStatus para Defender. Guardar resultado (ok / falha / não aplicável).

**3. Aplicar política** – Arquivo de configuração (YAML/JSON) com regras: “firewall_enabled: true”, “av_max_def_age_days: 7”. Comparar resultado da coleta com a política.

**4. Calcular nível de risco** – Ex.: 0 falhas críticas e 0 altas = seguro; 1 alta ou 2+ médias = risco médio; 1 crítica ou 2+ altas = risco alto. Persistir resultado (hostname, IP, data, nível, detalhes).

**5. Relatório** – Gerar por execução: resumo (X máquinas seguras, Y em risco médio, Z em risco alto) e tabela por máquina com itens em falha. Exportar para CSV/HTML para auditoria.

## Uso em auditorias

Auditores internos ou externos pedem evidência de que os ativos estão configurados conforme política. Sua ferramenta automatiza a coleta e o relatório, substituindo planilhas manuais e amostragem pequena.`,
  },
  {
    id: 'ids',
    titulo: 'Sistema de detecção de intrusão (IDS)',
    ordem: 5,
    conteudo: `# Sistema de Detecção de Intrusão (IDS)

## Pergunta central
“Como criar um sistema que detecta invasões na rede analisando tráfego, comportamento e padrões de ataque?”

**Nível mais avançado.** O IDS não bloqueia sozinho (quem bloqueia é o firewall/IPS); ele **observa** o tráfego e **alerta** quando identifica comportamento malicioso.

## Como funciona na prática

**1. Captura do tráfego** – O IDS recebe cópia do tráfego (espelhamento de porta, tap ou sensor na rede). Analisa cada pacote ou sessão (reconexão de fluxos TCP, por exemplo).

**2. Assinaturas e regras** – Compara o tráfego com **assinaturas** conhecidas (ex.: padrão de um exploit, string de malware, comportamento de scanner) ou com **regras** (ex.: “muitas conexões SYN sem conclusão = possível SYN flood”). Quando há correspondência → alerta.

**3. Análise de comportamento** – Além de assinatura, alguns IDS usam **anomalia**: baseline do que é “normal” na rede e alertam quando algo foge (muito tráfego de um host, protocolo em porta errada, etc.).

**4. Tipos de ataques que pode identificar** – Força bruta (muitas tentativas de login), varredura de portas, negação de serviço (DDoS), movimentação lateral (tráfego entre hosts internos típico de atacante que já está dentro).

## O que você precisa para fazer

- **Captura:** libpcap, raw sockets ou integração com bibliotecas que leem pcap. Em ambiente real, tráfego vem de span/tap.
- **Protocolos:** Decodificar Ethernet, IP, TCP/UDP e, se for o caso, payload (HTTP, DNS). Bibliotecas: Scapy (Python), gopacket (Go), ou usar saída de Zeek/Snort como fonte de eventos.
- **Motor de regras:** Regras em texto (tipo Snort): “alert tcp any any -> any 22 (content:”fail”; threshold: type threshold, track by_src, count 5, seconds 60;)”. Ou implementar regras em código (contadores, estados).

## Passo a passo – Projeto “IDS mínimo”

**1. Obter tráfego** – Em laboratório: capturar com tcpdump ou Scapy em uma interface; em produção: receber pcap de um span ou usar sensor que já gera eventos (ex.: Zeek).

**2. Detectar varredura de portas** – Contar, por IP de origem, quantas portas diferentes foram acessadas em uma janela de tempo (ex.: 1 min). Se passar de N (ex.: 20) → alerta “possível port scan”.

**3. Detectar força bruta** – Para tráfego em porta 22 (SSH) ou 3389 (RDP), contar tentativas com mesmo IP de origem e mesmo destino em X minutos. Muitas tentativas → alerta “possível brute force”.

**4. Detectar padrão de negação de serviço** – Ex.: muitos SYN sem SYN-ACK de volta (início de conexão sem conclusão); ou volume anormal de pacotes por segundo de um IP. Regra simples: threshold por IP e por janela de tempo.

**5. Movimentação lateral** – Em rede segmentada, tráfego entre sub-redes que normalmente não se falam (ex.: escritório acessando servidor de backup sem necessidade) pode ser indicador. Regra: “conexão de host da VLAN X para host da VLAN Y na porta Z” → alerta se não estiver na whitelist.

## Ferramentas famosas

- **Snort** – IDS open source com linguagem de regras.
- **Suricata** – IDS/IPS open source, multithread, compatível com regras Snort.
- **Zeek (Bro)** – Gera logs de eventos de rede (conexões, DNS, HTTP, etc.); você escreve scripts para detectar e alertar.

Um IDS caseiro em laboratório é excelente para aprender redes e segurança; em produção, costuma-se usar Snort/Suricata/Zeek e customizar regras.`,
  },
  {
    id: 'forense',
    titulo: 'Ferramentas de análise forense',
    ordem: 6,
    conteudo: `# Ferramentas de Análise Forense

## Pergunta central
“Como criar ferramentas que analisam arquivos suspeitos, memória RAM, registros de sistema e comportamento de malware após um ataque?”

**Contexto:** Quando ocorre um ataque, a **forense digital** entra para entender o que aconteceu, preservar evidências e identificar malware ou ações do atacante.

## Como funciona na prática

**1. Imagem de disco e memória** – Antes de analisar, faz-se **cópia bit a bit** (imagem) do disco e, se possível, **dump da memória RAM**. Trabalha-se sobre a cópia para não alterar o original; hash (SHA-256) garante integridade.

**2. Análise de arquivos** – Arquivos suspeitos: hash, strings, metadados, tipo real (magic bytes). Comparação com base de malwares (VirusTotal, YARA). Descompactar/desofuscar se necessário.

**3. Análise de memória** – Na RAM ficam processos, conexões de rede, chaves e dados que não estão no disco. Ferramentas “enxergam” estruturas do SO (listas de processos, handles, módulos) e permitem buscar padrões (URLs, IPs, injetados).

**4. Registros de sistema** – Windows: Registry (Registry hive files). Linux: arquivos em /var/log, histórico de shell. Extrair: últimas execuções, programas instalados, persistência (Run keys, serviços, cron).

**5. Comportamento de malware** – Em ambiente controlado (sandbox), executar o malware e observar: arquivos criados/alterados, chaves de registro, rede. Isso gera relatório de comportamento (dropper, backdoor, ransomware, etc.).

## O que você precisa para fazer

- **Linguagens:** Python (struct, binário, parsing), C/C++ para performance em leitura de disco/memória.
- **Formato de imagem:** Entender formato raw (dd) ou E01/aff4; bibliotecas para ler (pytsk3, libewf).
- **Memória:** Estruturas do Windows (EPROCESS, etc.) ou do Linux; ler dump com offset e estruturas documentadas. Volatility usa isso.
- **Arquivos:** YARA para regras de detecção; hashlib, magic bytes; descompactar (zip, etc.) com cuidado (bomb attack).

## Passo a passo – Projeto “Memory Analyzer” mínimo

**1. Capturar memória** – Em laboratório: usar ferramenta (DumpIt, WinPMem, LiME no Linux) para gerar dump da RAM. Arquivo grande (igual ao tamanho da RAM); guardar em disco com espaço suficiente.

**2. Listar processos no dump** – Ler estruturas do SO a partir do dump (endereços de listas de processos). Documentação do Windows (ntoskrnl structures) ou uso de biblioteca/Volatility como referência. Saída: lista de PIDs, nomes de processo, caminho.

**3. Procurar processos suspeitos** – Heurísticas: processo com nome estranho, em caminho temporário, sem assinatura digital, com módulos injetados. Comparar com lista de processos “normais” do SO.

**4. Identificar malware oculto** – Processos que tentam se esconder (rootkit) podem aparecer na memória mesmo que o SO não os liste. Varredura por padrões conhecidos (injeção de DLL, código em regiões não executáveis), ou uso de YARA no dump.

**5. Extrair indicadores** – Do dump e dos arquivos: IPs, URLs, hashes, mutex. Exportar para formato (IOC) e usar em SIEM/EDR para buscar em outros sistemas.

## Ferramentas parecidas existentes

- **Volatility** – Análise de memória (Windows, Linux, Mac); plugins para processos, rede, registry.
- **Autopsy** – Interface gráfica para análise forense de disco (imagem, arquivos, timeline).
- **Sleuth Kit** – Ferramentas de linha de comando para análise de disco e arquivos.

Projetos forenses exigem cuidado com cadeia de custódia e integridade das evidências; em ambiente real, seguir procedimentos legais.`,
  },
  {
    id: 'simulador-ataques',
    titulo: 'Simulador de ataques (laboratório)',
    ordem: 7,
    conteudo: `# Simulador de Ataques (Laboratório)

## Pergunta central
“Como criar um simulador de ataques cibernéticos para treinamento de segurança, onde a pessoa toma decisões de defesa?”

**Ideia:** Simular cenários (phishing, ransomware, ataque de rede, vazamento de dados) em ambiente controlado; o usuário pratica resposta e entende consequências sem risco real.

## Como funciona na prática

**1. Cenários** – Cada cenário descreve um “ataque”: ex. “e-mail de phishing chegou; o usuário clicou; o que você faz?”. Opções: bloquear conta, isolar máquina, avisar equipe, verificar e-mail em busca de outros alvos. Cada escolha leva a um próximo passo (consequência) e a uma pontuação ou feedback.

**2. Fluxo ramificado** – Árvore de decisões: decisão A → resultado A1 ou A2; A1 → próxima pergunta. No final: “você contido o ataque” ou “vazamento ocorreu” com explicação do que deveria ter sido feito.

**3. Simulação técnica (opcional)** – Em vez de só texto, um laboratório real: VM com “malware” simulado (script que simula ransomware bloqueando arquivos), rede com “atacante” (script que faz scan). O treinando usa ferramentas reais (isolamento, bloqueio, análise) e o sistema verifica se as ações corretas foram tomadas.

**4. Uso em treinamento** – Empresas usam para treinar equipe de SOC, TI e usuários finais (conscientização). Simulador de phishing real (envio de e-mail de teste) é comum; simulador de “ataque completo” é mais avançado.

## O que você precisa para fazer

- **Lógica do jogo/simulador:** Fluxos em JSON ou código (estados, transições, condições). Interface web ou desktop.
- **Conteúdo:** Roteiros escritos por quem entende de IR (resposta a incidentes): phishing, ransomware, DDoS, vazamento de dados, com decisões certas e erradas e feedback didático.
- **Se for laboratório técnico:** VMs (VirtualBox, VMware), rede isolada, scripts que “atacam” (ex.: script que simula ransomware em pasta de teste) e scripts que “corrigem” (restaurar backup, isolar host). Plataforma tipo CyberRange ou ambiente caseiro.

## Passo a passo – Conceito do simulador

**1. Definir cenários** – Ex.: “Phishing com link malicioso”, “Ransomware em uma estação”, “Ataque de rede (scan + exploração)”. Para cada um: descrição inicial, gatilho, 3–5 decisões possíveis, consequência de cada uma.

**2. Implementar fluxo** – Estrutura de dados: cenário → lista de passos; cada passo tem texto, opções (botões) e próximo passo (por ID). Ao clicar em “Isolar máquina”, ir para passo “Máquina isolada; próximo: verificar outras estações”.

**3. Feedback e pontuação** – Ao final do cenário, mostrar: “Você fez X; o correto seria Y; pontuação Z”. Explicar por que a decisão certa é a certa (tempo de contenção, redução de impacto).

**4. Integrar com “ataque de rede”** – Se quiser nível técnico: em lab, script que simula varredura e tentativa de exploit; o treinando deve usar firewall, IDS ou isolamento para “vencer”. Sistema verifica se tráfego malicioso foi bloqueado ou se host foi isolado no tempo esperado.

**5. Reutilizar para conscientização** – Mesmo motor de cenários pode servir para treino de usuário final: “Você recebeu este e-mail. É phishing? O que fazer?”. Resposta correta: não clicar, reportar.

Simuladores assim são usados em treinamento de segurança em empresas e em cursos; muitos começam simples (só texto e escolhas) e evoluem para laboratório técnico.`,
  },
  {
    id: 'soar',
    titulo: 'Ferramentas de automação de segurança (SOAR)',
    ordem: 8,
    conteudo: `# Automação de Segurança (SOAR)

## Pergunta central
“Como criar scripts ou sistemas que automatizam análise de incidentes, bloqueio de IPs, isolamento de máquinas e resposta a ataques?”

**SOAR** = Security Orchestration, Automation and Response. Não é uma ferramenta única; é a **ideia** de orquestrar ferramentas (SIEM, firewall, EDR, e-mail) e automatizar passos de resposta para ganhar velocidade e consistência.

## Como funciona na prática

**1. Orquestração** – Um “cérebro” (plataforma ou scripts) se conecta a várias ferramentas: SIEM (alertas), firewall (bloquear IP), EDR (isolar host), Active Directory (desabilitar conta), e-mail (notificar). Cada uma tem API ou interface que o script usa.

**2. Automação** – Em vez de o analista fazer manualmente “pegar IP do alerta → logar no firewall → criar regra de bloqueio”, um **playbook** automatizado: “quando alerta de tipo ‘brute force’ chega, extrair IP de origem e chamar API do firewall para bloquear”. O humano só intervém quando a regra exige (ex.: aprovação para desabilitar conta de diretor).

**3. Resposta** – Ações típicas: bloquear IP no firewall ou proxy, isolar máquina na rede (EDR ou VLAN), desabilitar conta, enviar e-mail para usuário “troque sua senha”, criar ticket no sistema de gestão, adicionar IOC na lista de bloqueio.

**4. Análise automatizada** – Parte da “análise” também pode ser automatizada: buscar no SIEM eventos do mesmo IP na última hora; consultar Threat Intelligence (é IP malicioso?); decidir com base em regra (“se IP em lista negra e alerta crítico → bloquear e isolar”).

## O que você precisa para fazer

- **APIs:** Firewall (REST, por exemplo), EDR (isolamento via API), SIEM (buscar eventos, criar alerta). Muitos produtos expõem API ou webhook.
- **Linguagem:** Python (requests, SDKs), Node.js ou Go para scripts que rodam em cron ou como serviço; ou plataforma low-code (n8n, Zapier) para fluxos simples.
- **Condições e playbooks:** “Se evento tipo X e severidade Y, então fazer A e B”. Formato: YAML/JSON com steps, ou código (if/else, chamadas de API).

## Passo a passo – Automação mínima

**1. Receber alerta** – Fonte: webhook do SIEM, fila (RabbitMQ, SQS), e-mail, arquivo. Script acordado quando chega um novo alerta; payload contém tipo, IP, host, usuário, etc.

**2. Analisar contexto** – Script busca no SIEM: “eventos do mesmo IP nas últimas 2 horas”. Opcional: consultar API de threat intel (“IP está em lista de malware?”). Decisão: é automático ou precisa de aprovação? (Ex.: bloquear IP externo = automático; desabilitar conta de gestor = aprovação.)

**3. Bloquear IP automaticamente** – Se regra disser “bloquear”, chamar API do firewall ou do proxy com o IP. Registrar em log: “IP X bloqueado por playbook Y em razão de alerta Z”.

**4. Isolar máquina (se aplicável)** – Se o alerta for “malware em host W”, chamar API do EDR para isolar o host da rede. Notificar equipe por e-mail ou Slack.

**5. Registrar e notificar** – Criar registro do incidente (ticket, planilha ou banco) com: data, alerta, ações tomadas, responsável (sistema ou humano). Enviar resumo para o canal de segurança.

Com o tempo você adiciona mais playbooks (phishing, conta comprometida, ransomware) e mais integrações; o SOAR caseiro vira o “automatizador” da equipe de segurança.`,
  },
  {
    id: 'sandbox-malware',
    titulo: 'Sistemas de análise de malware (sandbox)',
    ordem: 9,
    conteudo: `# Sistemas de Análise de Malware (Sandbox)

## Pergunta central
“Como criar um sistema que executa arquivos suspeitos em ambiente isolado e observa comportamento, alterações no sistema e comunicação com servidores externos?”

**Sandbox** = ambiente isolado onde o malware “roda” sem contaminar a rede real. O sistema observa o que o programa faz (arquivos, registro, rede) para identificar vírus, trojans e ransomwares.

## Como funciona na prática

**1. Isolamento** – A amostra roda em VM ou container sem acesso à rede de produção (ou com rede “fake” que simula internet e registra tudo). Disco e memória podem ser descartados após o teste (snapshot revert).

**2. Execução e monitoramento** – O sistema inicia o arquivo (ex.: .exe, .dll via rundll32) e monitora: **arquivos** (criados, alterados, excluídos), **registro** (chaves criadas/alteradas), **processos** (filhos criados), **rede** (conexões, DNS, HTTP). Tudo é logado com timestamp.

**3. Análise do comportamento** – Após um tempo (ex.: 5 min) ou quando o processo termina, o sistema gera um **relatório**: “criou arquivo em AppData”, “alterou Run key no Registry”, “conectou a IP 1.2.3.4 na porta 443”, “injetou código em processo legítimo”. Isso classifica o tipo de malware (backdoor, ransomware, infostealer) e gera IOCs (IPs, domínios, hashes de arquivos criados).

**4. Evasão** – Malwares modernos detectam sandbox (VM, debugger, usuário “admin”) e não executam o payload real. Contramedidas: sandbox “mais realista” (tempo, interação de usuário simulado, menos artefatos de VM), análise estática complementar, múltiplos ambientes.

## O que você precisa para fazer

- **Ambiente isolado:** VM (VirtualBox, VMware, QEMU) ou container (Docker com restrições; menos isolado que VM para malware). Rede: NAT ou rede interna com servidor fake (DNS, HTTP) que registra requisições.
- **Monitoramento no guest:** Hook de API (Windows: criar/abrir arquivo, registro, rede); ou ferramentas (Process Monitor, Wireshark) e parser dos logs. Em Linux: ptrace, inotify, netfilter.
- **Linguagens:** Python ou C para o “orquestrador” (iniciar VM, injetar amostra, coletar artefatos, gerar relatório). Análise de comportamento pode usar saída do Cuckoo ou de ferramentas similares.

## Passo a passo – Sandbox mínimo

**1. Preparar VM** – Uma VM (Windows ou Linux) com snapshot “limpo”. Rede em modo host-only ou interna, com serviço que simula internet (opcional) e captura tráfego (tcpdump).

**2. Coletar baseline** – Antes de rodar a amostra, listar arquivos em pastas sensíveis (Temp, AppData), chaves de registro (Run, RunOnce), processos. Isso é o “estado antes”.

**3. Executar amostra** – Copiar amostra para a VM (pasta compartilhada ou upload) e executar (double-click simulado ou linha de comando). Esperar tempo fixo (ex.: 2–5 min) ou até processo terminar.

**4. Coletar estado depois** – Listar novamente arquivos, registro, processos; capturar tráfego de rede. Diferença em relação ao baseline = o que o malware fez.

**5. Gerar relatório** – Saída: arquivos criados/alterados, chaves de registro, conexões (IP, porta, domínio), processos criados. Classificação simples por regras: “alterou Run + conectou na porta 4444” → provável backdoor. Incluir hashes e IOCs para usar em SIEM/EDR.

Ferramentas open source como **Cuckoo Sandbox** e **Joe Sandbox** já fazem isso; estudar o código delas ajuda a implementar a sua ou a integrar com sua base de ameaças.`,
  },
  {
    id: 'conscientizacao',
    titulo: 'Aplicações para conscientização de segurança',
    ordem: 10,
    conteudo: `# Aplicações para Conscientização de Segurança

## Pergunta central
“Como criar sistemas de educação em segurança: plataforma de treinamento de phishing, simulador de engenharia social ou jogo de segurança corporativa?”

**Nem tudo é ataque e defesa técnica.** Conscientização reduz risco humano: phishing, engenharia social, senhas fracas, uso indevido de dados. Empresas usam treinamentos e simuladores para treinar funcionários.

## Como funciona na prática

**1. Treinamento de phishing** – Plataforma que **envia e-mails de phishing simulado** para os colaboradores (com autorização da empresa). Quem clica é redirecionado para uma página “Você caiu em um simulador; veja o que fazer na próxima vez” e recebe conteúdo educativo. Quem não clica é reforço positivo. Métricas: taxa de cliques por campanha, por setor, evolução no tempo.

**2. Simulador de engenharia social** – Cenários interativos: “Alguém liga dizendo ser da TI e pede sua senha. O que você faz?”. Opções com consequências (dar senha = “vazamento”; recusar e reportar = “correto”). Pode incluir vídeos, quiz e certificação.

**3. Jogo de segurança corporativa** – Gamificação: missões (“complete o módulo de senhas fortes”), pontos, ranking por equipe, certificado. Objetivo: tornar o treinamento engajante. Conteúdo: políticas da empresa, boas práticas, como identificar phishing, uso de MFA, proteção de dados.

**4. Conteúdo educativo** – Vídeos curtos, cartilhas, pôsteres, e-learning (módulos com quiz). Tópicos: LGPD, senha, phishing, tailgating, clean desk, dispositivos móveis. Plataforma pode rastrear quem completou cada módulo (compliance).

## O que você precisa para fazer

- **Phishing simulado:** Servidor de e-mail (ou serviço de envio) para disparar e-mails que parecem reais mas com link para seu domínio (ex.: training.empresa.com/phish?id=xxx). Página de destino: “Simulação; você foi treinado” e registro de que o usuário clicou (para métrica). Cuidado: só com autorização e em domínio/e-mail corporativo.
- **Plataforma de treinamento:** Site (React, Vue, etc.) com módulos (vídeo + texto + quiz). Backend para salvar progresso (quem completou o quê). Opcional: integração com SSO para identificar usuário.
- **Gamificação:** Pontos por conclusão de módulo, por acerto no quiz; ranking; badges. Dados em banco ou planilha; dashboard para gestão ver evolução.

## Passo a passo – Plataforma de treinamento de phishing

**1. Definir cenários** – Ex.: “E-mail de suposto RH pedindo clicar em link para atualizar dados”; “E-mail de suporte falso”. Criar HTML do e-mail e URL de destino (sua página de “você caiu na simulação”).

**2. Enviar e-mails** – Lista de endereços (corporativa); enviar em horário combinado. Link no e-mail aponta para sua página com parâmetro único (ex.: token) para identificar quem clicou. Registrar: user_id, data/hora, campanha_id.

**3. Página de destino** – Se clicou: “Esta era uma simulação. Veja dicas para não cair em phishing real.” Exibir vídeo ou texto educativo. Se não clicou (acesso direto): “Você não caiu; parabéns.” Opcional: pequeno quiz após o “caiu” para fixar aprendizado.

**4. Métricas** – Dashboard: total de destinatários, quantos clicaram (taxa de cliques), por setor, por campanha. Comparar campanhas ao longo do tempo para medir melhoria.

**5. Integrar com treinamento** – Quem clica pode ser direcionado a um módulo obrigatório de “Phishing e engenharia social” antes de fechar o ciclo. Gestão exige conclusão para compliance.

## Curiosidade

Muitas ferramentas famosas de segurança começaram como projetos pessoais ou acadêmicos: **Wireshark** (projeto universitário), **Metasploit** (ferramenta de pesquisa), **Nmap** (criado por estudante). O mesmo vale para educação: simuladores e plataformas de conscientização podem nascer de um projeto interno e virar produto ou padrão da empresa.`,
  },
  {
    id: 'estudo-wireshark',
    titulo: 'Estudo: Wireshark – Análise de pacotes',
    ordem: 11,
    conteudo: `# Estudo: Wireshark – Análise de Pacotes

## Pergunta central
“O que é o Wireshark, para que serve e como usar na prática?”

**Wireshark** é um analisador de protocolos de rede (packet analyzer) que **captura** e **exibe** o tráfego em nível de pacote. Nasceu de projeto universitário (Ethereal) e hoje é padrão em troubleshooting, investigação de incidentes e aprendizado de redes. **Open source**, multiplataforma (Windows, Linux, macOS).

## Para que serve

- **Capturar tráfego** – A interface de rede entra em modo promíscuo e grava todos os pacotes que passam (ou só os endereçados ao host, conforme configuração). Saída em arquivo **PCAP** (ou PCAPNG).
- **Analisar protocolos** – Decodifica Ethernet, IP, TCP, UDP, HTTP, DNS, TLS e centenas de outros. Cada pacote aparece em árvore: camada física → rede → transporte → aplicação, com todos os campos visíveis.
- **Investigar incidentes** – Encontrar tráfego suspeito (IP de atacante, domínio de C2, upload anômalo), reconstruir sessões (Follow TCP Stream), exportar objetos (arquivos transferidos via HTTP).
- **Troubleshooting** – Ver por que uma conexão falha (RST, timeout), medir latência, checar DNS e certificados.

## Como usar – Passo a passo básico

**1. Instalar** – Baixar em wireshark.org; no Linux pode precisar de permissões para captura (sudo ou grupo wireshark). Escolher a **interface** que tem tráfego (Wi‑Fi ou Ethernet).

**2. Iniciar captura** – Clicar no ícone de tubo de rede ou duplo clique na interface. Os pacotes aparecem em tempo real. **Parar** quando tiver o suficiente (alguns segundos ou minutos conforme o caso).

**3. Filtrar** – Na barra de filtro (Display Filter):
- **ip.addr == 192.168.1.10** – só pacotes em que esse IP aparece (origem ou destino).
- **tcp.port == 80** – tráfego na porta 80 (HTTP).
- **http** – apenas pacotes do protocolo HTTP (Wireshark decodifica e mostra como “HTTP”).
- **dns** – apenas DNS.
- **tcp.flags.syn == 1** – pacotes SYN (início de conexão TCP).
- **Combinação:** \`ip.addr == 10.0.0.1 && tcp.port == 443\` – tráfego com esse IP na porta 443.

**4. Inspecionar um pacote** – Painel do meio: árvore com todas as camadas. Clicar em um campo mostra o bytes correspondentes no painel inferior (hex + ASCII). Útil para ver payload e cabeçalhos.

**5. Follow TCP Stream** – Botão direito em um pacote TCP → “Follow” → “TCP Stream”. Wireshark monta a conversa completa (requisição e resposta HTTP, por exemplo) em texto. Ajuda a ver o que foi enviado/recebido naquela conexão.

## Filtros úteis (resumo)

| Filtro | Uso |
|--------|-----|
| \`http\` | Apenas HTTP |
| \`dns\` | Apenas DNS |
| \`tcp.port == 22\` | Tráfego SSH |
| \`ip.src == X\` ou \`ip.dst == X\` | Origem ou destino |
| \`tcp.flags.rst == 1\` | Conexões resetadas |
| \`tcp.analysis.retransmission\` | Retransmissões (problemas de rede) |
| \`tls\` ou \`ssl\` | Tráfego TLS (conteúdo cifrado não aparece) |

## Casos de uso em segurança

- **Incidente:** capturar tráfego do host comprometido; filtrar por \`ip.addr == <IP do host>\`; identificar IPs/domínios externos (possível C2 ou exfiltração).
- **Phishing / malware:** abrir PCAP de e-mail ou download; Follow TCP Stream em conexões HTTP para ver URL e conteúdo.
- **Brute force:** filtrar por porta 22 ou 3389; contar pacotes por IP de origem (muitas tentativas = suspeita).
- **Vazamento de dados:** procurar uploads grandes (tamanho de pacotes, Follow Stream) ou tráfego para IP desconhecido em horário incomum.

## Boas práticas

- **Só em rede autorizada** – Capturar tráfego de terceiros sem autorização pode ser ilegal. Em empresa, seguir política e escopo de investigação.
- **HTTPS/TLS** – Conteúdo criptografado não aparece em texto; só metadados (IP, porta, SNI, tamanho dos fluxos). Para inspecionar HTTPS interno às vezes se usa proxy com certificado corporativo (MITM).
- **Arquivos grandes** – Capturas longas geram arquivos enormes; usar filtros de captura (Capture Filter) para reduzir já na captura, ou limitar por tempo/tamanho.

Wireshark é a base para quem trabalha com redes e resposta a incidentes; dominar filtros e Follow Stream já resolve a maioria dos casos de análise de tráfego.`,
  },
  {
    id: 'estudo-nmap',
    titulo: 'Estudo: Nmap – Varredura de rede e portas',
    ordem: 12,
    conteudo: `# Estudo: Nmap – Varredura de Rede e Portas

## Pergunta central
“O que é o Nmap, para que serve e como usar em pentest e administração de rede?”

**Nmap** (Network Mapper) é uma ferramenta de **descoberta de hosts** e **varredura de portas e serviços** em redes. Criado por Gordon Lyon (Fyodor), começou como projeto de estudante e virou padrão em segurança ofensiva e inventário de rede. **Open source**, linha de comando; existe interface gráfica (Zenmap).

## Para que serve

- **Descobrir hosts vivos** – Quais IPs em uma faixa respondem (ping sweep, ARP, etc.).
- **Varredura de portas** – Quais portas estão abertas em cada host (22, 80, 443, 3389, etc.).
- **Detecção de versão** – Qual software e versão está por trás da porta (SSH 8.2, Apache 2.4, etc.).
- **Scripts (NSE)** – Automação: vulnerabilidades, enumeração, descoberta de serviços. Ex.: \`--script vuln\`, \`--script http-title\`.
- **Detecção de OS** – Inferir sistema operacional do alvo (requer privilégios e algumas respostas).

## Como usar – Comandos principais

**1. Descoberta de hosts (sem varrer portas)**  
\`nmap -sn 192.168.1.0/24\`  
Ping sweep: descobre quais IPs estão “vivos”. \`-sn\` = “no port scan”. Em rede local pode usar ARP: \`nmap -sn -PR 192.168.1.0/24\`.

**2. Pular descoberta (host que bloqueia ICMP)**  
\`nmap -Pn 192.168.1.1\`  
Considera o host ativo e varre portas mesmo sem resposta a ping. Útil para hosts atrás de firewall.

**3. Varredura de portas**  
- \`nmap -sT 192.168.1.1\` – TCP connect (não precisa root; mais lento).  
- \`nmap -sS 192.168.1.1\` – SYN stealth (precisa root/admin; mais rápido e discreto).  
- \`nmap -p 80,443,8080 192.168.1.1\` – Apenas portas específicas.  
- \`nmap -p- 192.168.1.1\` – Todas as portas (1–65535). Demora mais.

**4. Versão de serviços**  
\`nmap -sV 192.168.1.1\`  
Tenta identificar o serviço e a versão (ex.: OpenSSH 8.2, Apache httpd 2.4.41). Essencial para buscar CVEs.

**5. Scripts padrão + versão + todas as portas**  
\`nmap -sC -sV -p- 192.168.1.1\`  
\`-sC\` = scripts default (NSE); \`-sV\` = versão; \`-p-\` = todas as portas. Combinação muito usada em pentest.

**6. Scripts de vulnerabilidade**  
\`nmap -sV --script vuln 192.168.1.1\`  
Roda scripts NSE da categoria “vuln” (usa CVE conhecidos). Complementa scanners dedicados (Nessus, OpenVAS).

**7. Detecção de OS**  
\`nmap -O 192.168.1.1\`  
Requer root; pode ser impreciso. Útil para mapear parque.

**8. Saída em arquivo**  
- \`nmap -oN scan.txt 192.168.1.1\` – Normal (texto).  
- \`nmap -oX scan.xml 192.168.1.1\` – XML (para integração).  
- \`nmap -oA scan 192.168.1.1\` – Todas (.nmap, .xml, .gnmap).

**9. Velocidade**  
\`-T0\` (muito lento e discreto) a \`-T5\` (muito rápido e barulhento). \`-T4\` é comum em lab; \`-T2\` ou \`-T3\` quando quiser menos ruído.

## Tabela resumo – Comandos Nmap

| Objetivo | Exemplo |
|----------|--------|
| Hosts vivos | \`nmap -sn 192.168.1.0/24\` |
| Portas TCP (connect) | \`nmap -sT 192.168.1.1\` |
| Portas TCP (SYN, root) | \`nmap -sS 192.168.1.1\` |
| Versão dos serviços | \`nmap -sV 192.168.1.1\` |
| Scripts + versão + todas portas | \`nmap -sC -sV -p- 192.168.1.1\` |
| Scripts de vuln | \`nmap -sV --script vuln 192.168.1.1\` |
| Salvar resultado | \`nmap -oA scan 192.168.1.1\` |

## Uso ético e legal

- **Só em rede própria ou com autorização** – Varredura em rede alheia pode ser crime (invasão de dispositivo). Em pentest, **sempre** contrato/escopo por escrito.
- **Redes de terceiros** – Muitos provedores e empresas detectam Nmap e podem bloquear ou acionar resposta a incidentes. Use apenas onde tiver permissão.

O Nmap é a ferramenta número um para reconhecimento de rede em pentest e para inventário técnico; dominar \`-sn\`, \`-sS\`/ \`-sT\`, \`-sV\`, \`-sC\` e \`-p-\` cobre a maior parte dos casos.`,
  },
  {
    id: 'estudo-zeek',
    titulo: 'Estudo: Zeek (Bro) – Monitoramento de rede com scripts',
    ordem: 13,
    conteudo: `# Estudo: Zeek (Bro) – Monitoramento de Rede com Scripts

## Pergunta central
“O que é o Zeek, para que serve e como funciona em relação a Wireshark e IDS?”

**Zeek** (antes chamado **Bro**) é uma **plataforma de monitoramento de rede** que não armazena cada pacote como o Wireshark; em vez disso, **interpreta** o tráfego e gera **logs de eventos** (conexões, DNS, HTTP, arquivos, etc.) e permite **scripts** para detecção e alertas. Muito usado em SOCs e ambientes de segurança como “sensor de rede” que alimenta SIEM e análise.

## Para que serve

- **Gerar logs estruturados** – A partir do tráfego (PCAP ou em tempo real), Zeek produz logs em texto (TSV ou JSON): conn.log (conexões TCP/UDP), dns.log, http.log, files.log, ssl.log, etc. Cada linha = um evento com campos (timestamp, origem, destino, duração, bytes, domínio, método HTTP, etc.).
- **Detecção por script** – Linguagem de script própria (estilo C/JavaScript) para escrever **políticas**: “alertar se mesmo IP fizer mais de 10 conexões em 1 minuto”, “alertar se DNS para domínio conhecido de malware”, “extrair arquivos executáveis transferidos por HTTP”.
- **Integração com SIEM/analytics** – Os logs são fáceis de ingerir (Elasticsearch, Splunk, etc.); muitos fluxos de detecção usam Zeek como fonte primária de “eventos de rede”.
- **Diferença em relação ao Wireshark** – Wireshark = ver **cada pacote** e inspecionar manualmente. Zeek = **resumo do que aconteceu** (conexões, requisições, arquivos) em formato de log, com possibilidade de alertas automáticos por script.

## Como funciona na prática

**1. Modo de operação** – Zeek roda como **sensor**: recebe tráfego (interface em modo promíscuo, ou lê arquivo PCAP). Não bloqueia; só observa e gera logs. Em produção costuma ficar em um host dedicado com rede espelhada (span/tap).

**2. Política (scripts)** – Conjunto de scripts em linguagem Zeek que definem o que extrair e quando alertar. Scripts padrão já geram conn, dns, http, ssl, etc.; você pode adicionar scripts próprios (ex.: detectar scan de portas, padrão de C2).

**3. Saída** – Por padrão, logs em **/var/log/zeek/** (ou diretório configurado): conn.log, dns.log, http.log, etc. Formato TSV com cabeçalho; pode ser JSON. **Alerts** vão para arquivo ou para syslog/SIEM.

**4. Uso típico** – Em laboratório: \`zeek -r captura.pcap\` para processar um PCAP e gerar os logs. Em produção: Zeek em modo contínuo lendo da interface; os logs são enviados para um coletor ou SIEM.

## Logs principais (resumo)

| Log | Conteúdo |
|-----|----------|
| **conn.log** | Conexões TCP/UDP: origem, destino, porta, duração, bytes, estado |
| **dns.log** | Consultas e respostas DNS: query, resposta, tipo (A, AAAA, etc.) |
| **http.log** | Requisições HTTP: host, URI, método, user-agent, status |
| **ssl.log** | Sessões TLS: SNI (nome do servidor), certificado, JA3 (fingerprint) |
| **files.log** | Arquivos extraídos ou identificados (hash, tipo MIME, origem) |
| **x509.log** | Certificados SSL/TLS vistos |

## Exemplo de uso em detecção

- **Port scan** – Script que conta, por IP de origem, quantas portas diferentes foram acessadas em uma janela; se passar de um limiar → alerta.
- **DNS para domínio malicioso** – Comparar \`query\` em dns.log com lista de domínios de ameaça; se bater → alerta.
- **Exfiltração** – Conexão com muitos bytes de origem (upload) para IP externo em pouco tempo; script em cima de conn.log ou usar ferramenta de analytics.
- **Malware** – files.log com hash de executável; comparar com VirusTotal ou lista de hashes conhecidos.

## Instalação e primeiro teste

- **Linux:** Pacotes oficiais (ver zeek.org). Depois de instalar, processar um PCAP: \`zeek -r arquivo.pcap\`. Os logs aparecem no diretório atual (conn.log, dns.log, etc.).
- **Com Wireshark:** Capturar tráfego no Wireshark, salvar em PCAP; rodar Zeek nesse arquivo para obter os logs estruturados. Combinar: Wireshark para inspeção manual, Zeek para extração em massa e detecção por script.

## Zeek vs Snort/Suricata

- **Snort/Suricata** – IDS baseado em **assinaturas** (e opcionalmente anomalia); foco em “esse pacote bate com regra X?”. Saída principal: alertas.
- **Zeek** – Foco em **eventos de rede** (logs) e **scripts** que interpretam esse fluxo. Não é só “alerta”; é “registrar tudo que importa e depois decidir com script ou no SIEM”. Muitos ambientes usam **Zeek + Suricata** juntos: Zeek para logs e análise de protocolo, Suricata para assinaturas e bloqueio (IPS).

Quem trabalha com SOC ou resposta a incidentes se beneficia de conhecer Zeek: entender conn.log e dns.log já permite correlacionar tráfego com outros dados (EDR, SIEM) e automatizar detecções.`,
  },
  {
    id: 'otimizacao-windows',
    titulo: 'Otimização do Windows e processos em segundo plano',
    ordem: 14,
    conteudo: `# Otimização do Windows e Processos em Segundo Plano

## Pergunta central
“Como deixar o PC mais rápido e eficiente gerenciando processos em segundo plano, sem prejudicar a segurança?”

**Objetivo:** Entender o que são processos em segundo plano, quais podem ser reduzidos ou desativados com segurança, e como usar as ferramentas do Windows para melhorar desempenho **mantendo** antivírus, firewall e atualizações ativos.

## O que são processos em segundo plano

**Processos em segundo plano** são programas e serviços que rodam mesmo quando você não está usando um aplicativo na tela. Exemplos: atualização do Windows, antivírus, sincronização de nuvem (OneDrive, Dropbox), impressora, drivers de áudio e vídeo, serviços do sistema. Alguns são essenciais; outros consomem RAM e CPU e podem ser controlados.

**Por que o PC fica lento?** Muitos programas na inicialização, serviços desnecessários, pouca RAM, disco cheio ou antigo (HDD), e às vezes malware. Otimizar = reduzir o que não é necessário **sem** desativar defesas (antivírus, firewall, atualizações de segurança).

## Como funciona na prática

**1. Gerenciador de Tarefas** – Abra com \`Ctrl+Shift+Esc\` ou clique direito na barra de tarefas → “Gerenciador de Tarefas”. Abas úteis:
- **Processos** – Lista o que está usando CPU, memória, disco e rede. Você vê qual programa está pesado.
- **Desempenho** – Gráficos de CPU, RAM, disco, rede. Ajuda a identificar gargalo (ex.: disco 100% = HD lento ou muitos programas acessando disco).
- **Inicialização** – Programas que iniciam com o Windows. Desabilitar os que não precisa acelera a inicialização.

**2. Serviços do Windows** – \`Win+R\` → \`services.msc\`. Lista serviços (background): alguns são do sistema, outros de programas instalados. **Cuidado:** desativar serviço errado pode quebrar o sistema ou a rede. Só desative o que você entende e que não é segurança (nunca desative Windows Update, Windows Defender, Firewall por “economia”).

**3. Configurações → Aplicativos → Inicialização** – No Windows 10/11, mostra quais apps podem iniciar com o sistema. Desative jogos, comunicadores que você não usa no arranque, etc. Menos programas na inicialização = PC liga mais rápido e fica mais leve no dia a dia.

**4. Armazenamento** – Disco cheio deixa tudo lento. Use “Configurações → Sistema → Armazenamento” para ver o que ocupa espaço (arquivos temporários, downloads, lixeira) e liberar. **Limpeza de disco** (\`cleanmgr\`) remove temporários com segurança.

## O que NÃO fazer (segurança em primeiro lugar)

- **Não desative o antivírus ou o firewall** “para o PC ficar mais rápido”. Eles protegem contra malware e ataques; desativar expõe o sistema.
- **Não desative as atualizações do Windows** (Windows Update). Patches de segurança fecham vulnerabilidades; atrasar ou desligar aumenta risco de ransomware e invasão.
- **Não use “otimizadores” desconhecidos** que prometem “limpar tudo” ou “acelerar 500%” – muitos são inúteis ou até maliciosos. Use apenas ferramentas do próprio Windows ou de fabricantes confiáveis.
- **Não desative serviços do sistema** sem saber o que fazem. Serviços como “Plug and Play”, “RPC”, “Event Log” são necessários; desativar pode travar o PC ou a rede.

## Passo a passo – Otimização segura

**1. Ver o que mais consome recurso** – Abra o Gerenciador de Tarefas (Ctrl+Shift+Esc). Na aba “Processos”, ordene por “CPU” ou “Memória”. Se algum programa que você não usa estiver no topo, feche-o ou desinstale. Se for “Sistema” ou “Antivírus”, é normal; não desative.

**2. Reduzir programas na inicialização** – Aba “Inicialização”. Desative tudo que não precisa abrir assim que o PC liga (jogos, Spotify, comunicadores que você abre manualmente). Reinicie e veja se o arranque melhorou.

**3. Liberar espaço em disco** – Configurações → Sistema → Armazenamento → “Arquivos temporários” e “Lixeira”; limpar. Executar \`cleanmgr\` e marcar “Arquivos temporários”, “Miniaturas”, etc. Se tiver pouco espaço, considere mover arquivos grandes para outro disco ou nuvem.

**4. Verificar se há malware** – PC lento pode ser vírus ou cryptominer. Rode uma verificação completa com o Windows Defender (Segurança do Windows → Proteção contra vírus e ameaças → Verificação completa). Mantenha o Defender ativo.

**5. Atualizar drivers e Windows** – Às vezes lentidão vem de driver antigo ou bug corrigido em atualização. Configurações → Atualização e segurança → Verificar atualizações. Para drivers, use o site do fabricante do PC ou da placa.

## Resumo: equilíbrio entre desempenho e segurança

| Fazer | Evitar |
|-------|--------|
| Desativar apps de inicialização desnecessários | Desativar antivírus ou firewall |
| Limpar arquivos temporários e liberar disco | Desativar Windows Update |
| Fechar programas que não está usando | Desativar serviços do sistema sem conhecimento |
| Usar Gerenciador de Tarefas para identificar o que consome recurso | Instalar “otimizadores” suspeitos |
| Manter Windows e drivers atualizados | Deixar disco quase cheio |

Um PC “otimizado” continua **protegido**: antivírus e firewall ligados, atualizações automáticas, e apenas menos programas e lixo consumindo recurso. Assim você ganha desempenho sem abrir porta para ataques.`,
  },
];

export function getTemaById(id) {
  return temasFerramentas.find((t) => t.id === id);
}

export function getTemasOrdenados() {
  return [...temasFerramentas].sort((a, b) => a.ordem - b.ordem);
}
