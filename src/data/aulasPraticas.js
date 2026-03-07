// Aulas práticas do curso de Segurança Cibernética – por período
// Cada prática tem título e passos numerados (passo a passo) para executar no laboratório

const aulasPraticasPorPeriodo = [
  {
    periodoId: '1',
    nome: '1º Período',
    titulo: 'Fundamentos Sólidos',
    cor: '#10b981',
    disciplinas: [
      {
        id: 'p1-conceitos-computacao',
        titulo: 'Conceitos de Computação',
        itens: [
          {
            titulo: 'Montar diagrama de PC e associar componentes a riscos de segurança',
            passos: [
              'Abra um editor de desenho (Draw.io, PowerPoint ou papel) e desenhe um retângulo central com a etiqueta "CPU".',
              'Ao redor, adicione blocos: RAM, disco (HD/SSD), placa-mãe, fonte, periféricos (teclado, mouse, rede). Ligue com setas indicando fluxo de dados.',
              'Em cada componente, anote em uma linha o papel em segurança (ex.: RAM → "dados e senhas em uso; dump de memória pode vazar credenciais").',
              'Para a CPU, anote: execução de instruções; ataques de negação de serviço exploram limite de processamento.',
              'Para o disco, anote: dados em repouso; criptografia e sanitização antes de descarte.',
              'Pesquise um CVE em cve.mitre.org ou nvd.nist.gov filtrando por "memory", "cpu" ou "firmware"; anote número do CVE, produto afetado e em uma frase o impacto.',
            ],
          },
        ],
      },
      {
        id: 'p1-fundamentos-administracao',
        titulo: 'Fundamentos da Administração',
        itens: [
          {
            titulo: 'Mapear empresa fictícia e redigir política de senha',
            passos: [
              'Defina uma empresa fictícia (nome, setor, tamanho aproximado). Ex.: "Tech Solutions, 50 funcionários, desenvolvimento de software."',
              'Desenhe uma estrutura simples: direção, TI, RH, operações. Marque um processo crítico (ex.: "entrega de software ao cliente") e onde a segurança da informação é decisiva (acesso ao código, dados do cliente).',
              'Abra um editor de texto e crie a seção "Política de senha – [Nome da empresa]".',
              'Escreva a regra 1: "Mínimo de 8 caracteres." Justificativa em uma linha: dificulta adivinhação e ataques de força bruta.',
              'Regra 2: "Uso de letras maiúsculas, minúsculas, números e símbolos." Justificativa: aumenta o espaço de combinações.',
              'Regra 3: "Troca a cada 90 dias" ou "Não reutilizar as últimas 5 senhas." Justificativa: limita o tempo de uso se a senha vazar.',
              'Regra 4: "Não compartilhar senha; não anotar em local visível." Justificativa: responsabilidade e confidencialidade.',
              'Salve o documento em uma página e guarde como modelo para auditoria.',
            ],
          },
        ],
      },
      {
        id: 'p1-infraestrutura-ti',
        titulo: 'Infraestrutura de TI',
        itens: [
          {
            titulo: 'Diagrama de infraestrutura com riscos e controles',
            passos: [
              'Desenhe um retângulo "Internet" na parte superior; abaixo, um ícone de roteador/firewall com a etiqueta "Roteador".',
              'Abaixo do roteador, desenhe um servidor (um retângulo com "Servidor – arquivos, e-mail ou web").',
              'Na base, desenhe 5 estações de trabalho (5 quadrados com "Estação 1" a "Estação 5") ligadas a um switch (círculo ou quadrado central).',
              'Em cada elemento, adicione uma etiqueta de risco: Roteador → "Acesso não autorizado se senha fraca"; Servidor → "Ransomware ou perda de dados"; Estações → "Malware ou uso indevido."',
              'Para cada risco, anote um controle: Roteador → "Senha forte e atualização de firmware"; Servidor → "Backup automático e restrição de acesso"; Estações → "Antimalware e políticas de uso."',
              'Pesquise na internet "falha datacenter" ou "incidente datacenter energia/incêndio"; escolha um caso real, anote em 5 linhas: o que aconteceu, causa, impacto e uma lição para segurança.',
            ],
          },
        ],
      },
      {
        id: 'p1-pensamento-computacional',
        titulo: 'Pensamento Computacional',
        itens: [
          {
            titulo: 'Algoritmo de diagnóstico para "não consigo imprimir"',
            passos: [
              'Abra um editor de texto e titule: "Algoritmo – Usuário não consegue imprimir".',
              'Passo 1: "Verificar se a impressora está ligada e com papel e tinta."',
              'Passo 2: "Verificar se o cabo USB/rede está conectado ou se a impressora aparece na rede."',
              'Passo 3: "No computador, abrir Dispositivos e impressoras (ou Configurações) e verificar se a impressora está listada e definida como padrão."',
              'Passo 4: "Enviar um trabalho de teste (impressão de teste) a partir das propriedades da impressora."',
              'Passo 5: "Se não imprimir, verificar se há fila de impressão travada; abrir fila, cancelar trabalhos pendentes e tentar de novo."',
              'Passo 6: "Verificar se o driver está instalado e atualizado; reinstalar se necessário."',
              'Passo 7: "Testar de outro computador na mesma rede para isolar se o problema é da impressora ou da estação."',
              'Repita o exercício para "sistema lento" e "e-mail não abre" com até 10 passos cada, em ordem lógica.',
            ],
          },
        ],
      },
      {
        id: 'p1-pesquisa-tecnologia-sociedade',
        titulo: 'Pesquisa, Tecnologia e Sociedade',
        itens: [
          {
            titulo: 'Caso de vazamento de dados e princípios da LGPD',
            passos: [
              'Pesquise "vazamento de dados Brasil" ou "data breach" e escolha um caso real (empresa ou órgão público).',
              'Anote: nome do fato, ano, tipo de dado vazado (ex.: CPF, e-mail), número aproximado de afetados.',
              'Escreva em meia página o impacto social: prejuízo financeiro, phishing, constrangimento, perda de confiança, possível processo na justiça.',
              'Acesse o site da LGPD (planalto.gov.br) ou um resumo oficial; escolha três princípios (ex.: finalidade, necessidade, transparência) e um direito do titular (ex.: acesso aos dados, correção, exclusão).',
              'Para cada um, escreva uma frase de explicação e um exemplo prático (ex.: "Finalidade: só coletar dado para um objetivo declarado; exemplo: pedir CPF só se for necessário para nota fiscal").',
            ],
          },
        ],
      },
      {
        id: 'p1-projeto-integrador-diagnostico',
        titulo: 'Projeto Integrador – Diagnóstico de Soluções em TI',
        itens: [
          {
            titulo: 'Levantamento de ambiente e relatório técnico',
            passos: [
              'Liste os elementos do ambiente: número de estações, sistemas operacionais (Windows/Linux), se há servidor (arquivos, e-mail, etc.), tipo de rede (cabo, Wi‑Fi), acesso à internet.',
              'Se for ambiente real, anote sem expor dados sensíveis; se simulado, defina um cenário (ex.: "5 estações Windows 10, 1 servidor Windows Server, 1 roteador").',
              'Identifique 5 problemas: técnicos (ex.: falta de backup, senhas fracas, atualizações atrasadas) ou organizacionais (ex.: sem política de uso, acesso compartilhado).',
              'Classifique cada problema em risco baixo, médio ou alto e justifique em uma linha (ex.: "Sem backup = alto; se houver ransomware, perda total de dados").',
              'Redija o relatório em 2–3 páginas: capa com título e data; seção "Descrição do ambiente" (um parágrafo); "Problemas identificados" (tabela: problema, classificação, justificativa); "Recomendações" (lista priorizada); conclusão em um parágrafo.',
            ],
          },
        ],
      },
    ],
  },
  {
    periodoId: '2',
    nome: '2º Período',
    titulo: 'Sistemas, Redes e Controle',
    cor: '#3b82f6',
    disciplinas: [
      {
        id: 'p2-banco-dados',
        titulo: 'Banco de Dados',
        itens: [
          {
            titulo: 'Instalar PostgreSQL/MySQL, criar usuário limitado e consulta parametrizada',
            passos: [
              'Baixe o instalador do PostgreSQL (postgresql.org) ou MySQL (mysql.com) e instale em uma VM ou no seu PC; durante a instalação, anote a senha do usuário administrador (postgres ou root).',
              'Abra o cliente (pgAdmin para PostgreSQL ou MySQL Workbench para MySQL) e conecte ao servidor local.',
              'Crie um banco: no SQL, execute CREATE DATABASE empresa; (ou equivalente no menu).',
              'Crie um usuário só para a aplicação: CREATE USER app_user WITH PASSWORD \'sua_senha\'; (PostgreSQL) ou CREATE USER \'app_user\'@\'localhost\' IDENTIFIED BY \'sua_senha\'; (MySQL).',
              'Conceda apenas o necessário: GRANT CONNECT ON DATABASE empresa TO app_user; GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO app_user; (ajuste para MySQL se necessário: GRANT SELECT, INSERT, UPDATE ON empresa.* TO \'app_user\'@\'localhost\';).',
              'Crie uma tabela de teste: CREATE TABLE usuarios (id SERIAL PRIMARY KEY, nome VARCHAR(100), email VARCHAR(100)); e insira um registro.',
              'Escreva uma consulta parametrizada (ex.: em uma aplicação ou script: "SELECT * FROM usuarios WHERE id = $1" passando o id como parâmetro, não concatenado). Documente em 3 linhas: "A consulta usa placeholder ($1 ou ?); o valor é enviado separado; assim o banco trata como dado, não como comando, evitando SQL Injection."',
              'Configure um backup (pg_dump ou mysqldump) em um script ou comando; execute o backup; depois restaure em outro banco ou com outro nome e confira se os dados estão iguais. Anote os comandos usados em um arquivo "passos_backup_restauracao.txt".',
            ],
          },
        ],
      },
      {
        id: 'p2-etica-cidadania-sustentabilidade',
        titulo: 'Ética, Cidadania e Sustentabilidade',
        itens: [
          {
            titulo: 'Código de conduta e caso de crime cibernético',
            passos: [
              'Acesse o site do (ISC)² ou da ISACA e localize o código de conduta ou ética (geralmente em "About" ou "Ethics").',
              'Leia as seções sobre confidencialidade, conduta profissional e reporte de irregularidades.',
              'Imagine o cenário: você descobriu uma vulnerabilidade crítica no sistema da empresa. Redija um parágrafo comparando o que o código diz (ex.: reportar de forma responsável, não explorar) com o que você faria: a quem reportar, por escrito ou verbal, e o que não fazer (vender a falha, explorar).',
              'Pesquise "condenação crime cibernético invasão" ou "caso lei Carolina Dieckmann" e escolha um caso com sentença.',
              'Resuma em 10 linhas: nome do caso, o que o réu fez (invasão, vazamento, etc.), qual lei ou artigo foi aplicado, resultado (multa, prisão) e a "lição" sobre o que é considerado ilícito.',
            ],
          },
        ],
      },
      {
        id: 'p2-protocolos-redes',
        titulo: 'Protocolos de Redes',
        itens: [
          {
            titulo: 'Fluxo HTTP, seu IP e portas de serviço',
            passos: [
              'Desenhe o fluxo de uma requisição HTTP em 5 passos: (1) Usuário digita URL no navegador; (2) Cliente pergunta ao DNS "qual o IP de exemplo.com?" e recebe o IP; (3) Cliente inicia conexão TCP com o servidor (three-way handshake) na porta 80; (4) Cliente envia requisição HTTP GET; (5) Servidor responde com a página. Anote em um documento ou desenho.',
              'No seu PC, abra o terminal: no Windows digite ipconfig, no Linux/macOS ifconfig ou ip a. Anote em uma tabela: Endereço IPv4, Máscara de sub-rede, Gateway padrão, Servidores DNS.',
              'Pesquise e preencha uma tabela: Porta 80 → Serviço HTTP; 443 → HTTPS; 22 → SSH; 3389 → RDP; 53 → DNS. Para cada uma, escreva um risco se exposta à internet sem proteção (ex.: 22 SSH – tentativas de login por força bruta; 3389 RDP – acesso remoto se senha fraca).',
            ],
          },
        ],
      },
      {
        id: 'p2-seguranca-auditoria-sistemas',
        titulo: 'Segurança e Auditoria de Sistemas',
        itens: [
          {
            titulo: 'Política de senha e checklist de auditoria',
            passos: [
              'Redija uma política de senha em uma página: mínimo 8 caracteres; uso de maiúsculas, minúsculas, números e símbolos; troca a cada 90 dias; proibição de reutilizar as últimas 5; não compartilhar. Inclua uma linha de justificativa para cada regra.',
              'Crie um "Checklist de auditoria – Política de senha" com 5 itens verificáveis, ex.: (1) A política está documentada e acessível? (2) O sistema exige mínimo de 8 caracteres? (3) Há histórico de senhas (não reutilizar as últimas 5)? (4) Os usuários foram treinados? (5) Há processo de troca periódica configurado?',
              'Escolha uma pasta compartilhada (Windows: clique direito → Propriedades → Compartilhamento/Segurança; Linux: ls -l e getfacl). Anote quem tem acesso (usuários e grupos) e que permissão (leitura, gravação, total).',
              'Se houver acesso em excesso (ex.: "Todos" com permissão total), escreva uma recomendação: "Remover permissão de Todos; criar grupo Projeto_X com apenas leitura para usuários Y e Z; gravação apenas para o responsável."',
            ],
          },
        ],
      },
      {
        id: 'p2-sistema-operacional-i',
        titulo: 'Sistema Operacional I',
        itens: [
          {
            titulo: 'Usuário limitado, processos e logs de login',
            passos: [
              'Windows: Abra Gerenciamento do Computador → Usuários e Grupos Locais → Usuários. Crie um novo usuário (ex.: usuario_teste), não coloque em Administradores. Crie uma pasta (ex.: C:\\\\Dados\\\\PastaTeste), clique direito → Propriedades → Segurança → Editar → Adicionar esse usuário com permissão apenas de "Leitura" ou "Leitura e gravação" só nessa pasta. Teste fazer login com esse usuário e acessar a pasta.',
              'Linux: Use sudo useradd -m usuario_teste e sudo passwd usuario_teste. Crie uma pasta: mkdir /home/compartilhada e chown usuario_teste:usuario_teste /home/compartilhada (ou defina permissões com chmod). Confirme que o usuário não está no grupo sudo.',
              'Liste processos: no Windows abra o CMD e digite tasklist; no Linux use ps aux. Identifique um serviço que você reconheça (ex.: svchost, systemd) e um que poderia ser desativado em um servidor enxuto (ex.: um player de mídia se for servidor). Anote o nome e o motivo.',
              'Abra os logs de login: Windows → Visualizador de Eventos → Logs do Windows → Segurança; filtre por "Logon" ou "4624". Linux: cat /var/log/auth.log (ou journalctl -u ssh). Encontre um evento de logon bem-sucedido (ex.: 4624 tipo 10) e um de falha (ex.: 4625). Anote data/hora, usuário e resultado (sucesso/falha).',
            ],
          },
        ],
      },
      {
        id: 'p2-projeto-integrador-rede-local',
        titulo: 'Projeto Integrador – Rede Local',
        itens: [
          {
            titulo: 'Planejar rede, configurar IP/DHCP e diagnosticar falha',
            passos: [
              'Defina o planejamento em uma tabela: Faixa de rede 192.168.0.0/24; Gateway 192.168.0.1; DNS 8.8.8.8 (ou o do seu provedor); 10 estações usarão IPs 192.168.0.10 a 192.168.0.19 (ou use DHCP na mesma faixa).',
              'Em uma VM (ou PC), configure IP estático: Windows em Propriedades do adaptador IPv4; Linux com nmtui ou ip. Use 192.168.0.10, máscara 255.255.255.0, gateway 192.168.0.1. Em outra VM ou no roteador, configure o DHCP para entregar IPs na mesma faixa.',
              'Teste: da VM com IP estático, execute ping 192.168.0.1 (gateway) e ping para o IP da outra VM. Anote se há resposta.',
              'Simule um problema: altere o gateway da VM para um IP errado (ex.: 192.168.0.99). Tente ping 8.8.8.8 ou um site. Observe que falha. Use ipconfig ou ip a para conferir a configuração; anote a causa: "Gateway incorreto; pacotes não são encaminhados para a internet." Corrija o gateway e teste de novo.',
            ],
          },
        ],
      },
    ],
  },
  {
    periodoId: '3',
    nome: '3º Período',
    titulo: 'Defesa e Ataque Controlado',
    cor: '#f59e0b',
    disciplinas: [
      {
        id: 'p3-conectividade-redes',
        titulo: 'Conectividade de Redes',
        itens: [
          {
            titulo: 'Tabela de rotas, VLAN e VPN',
            passos: [
              'No terminal, execute route print (Windows) ou ip route (Linux). Copie duas rotas (linhas) da tabela. Para cada uma, identifique: Destino (rede ou host), Gateway (próximo salto) e Interface (qual adaptador). Escreva em uma frase o que cada rota significa (ex.: "tráfego para 192.168.1.0/24 sai pelo gateway 192.168.0.1 na interface Ethernet").',
              'Se tiver um switch gerenciável ou emulador (Packet Tracer, GNS3): acesse o switch, entre em modo configuração e crie duas VLANs (ex.: vlan 10 e vlan 20). Atribua portas a cada VLAN (ex.: portas 1–5 na VLAN 10, 6–10 na VLAN 20). Documente em uma tabela: VLAN ID, nome (opcional), portas. Se não tiver equipamento, pesquise os comandos (Cisco: vlan 10, interface range fa0/1-5, switchport access vlan 10) e descreva o que cada comando faz.',
              'Pesquise "WireGuard" ou "OpenVPN" em um parágrafo. Escreva em 5 linhas: (1) o tráfego entre seu PC e o servidor VPN é criptografado; (2) ninguém no meio (ISP, rede local) vê o conteúdo; (3) o destino final vê o IP do servidor VPN, não o seu; (4) isso protege confidencialidade e integridade; (5) use sempre em redes não confiáveis (Wi‑Fi público).',
            ],
          },
        ],
      },
      {
        id: 'p3-criptografia',
        titulo: 'Criptografia',
        itens: [
          {
            titulo: 'Par de chaves, assinatura e hash SHA-256',
            passos: [
              'Abra o terminal. Gere um par de chaves: openssl genrsa -out chave_privada.pem 2048 e openssl rsa -in chave_privada.pem -pubout -out chave_publica.pem. Crie um arquivo de texto (ex.: documento.txt) com qualquer conteúdo.',
              'Assine o arquivo: openssl dgst -sha256 -sign chave_privada.pem documento.txt > documento.sig. Verifique a assinatura: openssl dgst -sha256 -verify chave_publica.pem -signature documento.sig documento.txt. Deve aparecer "Verified OK". Alterar um caractere no documento e verificar de novo; deve falhar.',
              'Calcule o hash SHA-256 do arquivo: openssl dgst -sha256 documento.txt (ou sha256sum documento.txt no Linux). Anote o hash. Abra documento.txt, altere um único byte (uma letra), salve. Calcule o hash de novo; anote. Mostre que os dois hashes são completamente diferentes — isso prova integridade.',
              'Opcional: configure HTTPS em um servidor web local (Apache/Nginx) com certificado autoassinado (openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout chave.key -out cert.crt) e aponte o servidor para esse certificado; acesse pelo navegador e inspecione o cadeado e o certificado.',
            ],
          },
        ],
      },
      {
        id: 'p3-empreendedorismo-inovacao',
        titulo: 'Empreendedorismo, Inovação e Economia Criativa',
        itens: [
          {
            titulo: 'Plano de produto/serviço em segurança e tendências',
            passos: [
              'Defina o produto ou serviço: ex. "Consultoria de teste de invasão para pequenas empresas" ou "Treinamento em conscientização em segurança".',
              'Em uma página, escreva: (1) Nome e em uma frase o que é; (2) Público-alvo (quem paga); (3) Diferencial (por que você e não um concorrente); (4) Entregas principais (ex.: relatório de pentest, 4 horas de treinamento); (5) Precificação sugerida (por projeto ou por hora).',
              'Pesquise três tendências: Zero Trust, SOC (Security Operations Center), Threat Intelligence. Para cada uma, escreva em 2 linhas o que é e uma oportunidade de atuação (ex.: "SOC — empresas contratam analistas para monitorar 24/7; oportunidade: trabalhar como analista de SOC ou montar um SOC como serviço").',
            ],
          },
        ],
      },
      {
        id: 'p3-ethical-hacking',
        titulo: 'Ethical Hacking',
        itens: [
          {
            titulo: 'Escopo de pentest, Nmap e relatório de vulnerabilidade',
            passos: [
              'Redija um documento de uma página "Escopo do Teste de Invasão": (1) Nome do cliente e do projeto; (2) Alvos permitidos (ex.: IP 192.168.1.10–20, domínio alvo.com.br); (3) O que NÃO testar (ex.: ambiente de produção em horário de pico); (4) Período e horários; (5) Tipos de teste (varredura, exploração web, sem DoS); (6) Entrega (relatório em 10 dias). Guarde como modelo.',
              'Em um lab isolado, suba uma VM alvo (ex.: Metasploitable2). Na sua máquina, execute: nmap -sV -sC -p- <IP_ALVO> (ou faixa -p 1-1000 se preferir mais rápido). Anote: IP, portas abertas, serviços e versões. Ex.: "22/tcp OpenSSH 4.7; 80/tcp Apache 2.2.8." Pesquise se essa versão tem CVE conhecido e liste uma vulnerabilidade provável.',
              'Redija uma entrada de relatório: Título da vulnerabilidade; Severidade (Crítica/Alta/Média/Baixa); Descrição (2 linhas); Evidência (comando Nmap ou screenshot); Impacto (o que um atacante poderia fazer); Recomendação (atualizar, desativar serviço, regra de firewall). Use modelo profissional (ex.: OWASP ou PTES).',
            ],
          },
        ],
      },
      {
        id: 'p3-sistema-operacional-ii',
        titulo: 'Sistema Operacional II',
        itens: [
          {
            titulo: 'Hardening, GPO/política de senha e alerta',
            passos: [
              'Em uma VM de laboratório, aplique 5 passos de hardening: (1) Desative um serviço desnecessário (ex.: Bluetooth, impressora em servidor); (2) Instale atualizações de segurança (Windows Update ou apt update && apt upgrade); (3) Habilite e configure o firewall do SO (bloquear entrada exceto SSH/RDP se necessário); (4) Ajuste política de senha (mínimo 8 caracteres, complexidade); (5) Desabilite login como root/Administrator direto se possível (use usuário com elevação). Documente cada passo e o comando ou tela usada.',
              'Windows: Abra Editor de Diretiva de Grupo (gpedit.msc) ou use Política de Grupo em domínio. Navegue até Configuração do Computador → Configurações do Windows → Configurações de Segurança → Políticas de Conta → Política de Senha. Defina "Comprimento mínimo da senha" = 8 e "A senha deve atender aos requisitos de complexidade" = Habilitado. Ou crie uma regra para bloquear USB (Bluetooth e outros dispositivos ou Dispositivos de armazenamento removível). Documente o caminho da política e o que foi configurado.',
              'Configure um alerta simples: no Linux, crie um script que verifique espaço em disco (df -h) e, se uso > 90%, envie um e-mail ou escreva em um log; agende com cron (crontab -e) para rodar a cada hora. Ou use uma ferramenta como Nagios/Zabbix em lab. No Windows, use o Visualizador de Eventos para criar um Assinatura que dispare ao registrar "Falha no logon" várias vezes (possível força bruta). Documente o que configurou.',
            ],
          },
        ],
      },
      {
        id: 'p3-projeto-integrador-trafego',
        titulo: 'Projeto Integrador – Interpretação de Tráfego de Rede',
        itens: [
          {
            titulo: 'Captura com Wireshark, TCP/DNS e análise',
            passos: [
              'Instale o Wireshark. Inicie uma captura na interface ativa (Wi‑Fi ou Ethernet). Acesse um site HTTP (não HTTPS para ver o conteúdo) em outro navegador ou use um site de teste. Capture por cerca de 5 minutos e pare.',
              'No Wireshark, aplique o filtro: http. Identifique um pacote HTTP (GET ou POST). Clique nele e, no painel inferior, expanda "Hypertext Transfer Protocol". Anote: método (GET), Host, URL solicitada (Request URI).',
              'Remova o filtro. Localize uma conexão TCP: procure um pacote com flags [SYN], depois [SYN, ACK], depois [ACK] (three-way handshake). Anote IP de origem, IP de destino, porta de origem e porta de destino.',
              'Aplique o filtro dns. Encontre um pacote de consulta (Query). Anote o nome consultado (ex.: google.com) e o tipo (A, AAAA). Em um pacote de resposta, anote o endereço IP retornado.',
              'Redija uma análise de uma página: "Na captura observou-se o host [seu IP] acessando [domínio]. O tráfego incluiu consulta DNS (nome X → IP Y), estabelecimento TCP na porta 80 e requisição HTTP GET para [URL]. Evidências: pacotes nº [número], filtros http e tcp."',
            ],
          },
        ],
      },
    ],
  },
  {
    periodoId: '4',
    nome: '4º Período',
    titulo: 'Operações de Segurança',
    cor: '#ef4444',
    disciplinas: [
      {
        id: 'p4-cybersecurity',
        titulo: 'Cybersecurity',
        itens: [
          {
            titulo: 'Diagrama defesa em profundidade e ameaças/controles',
            passos: [
              'Desenhe três camadas horizontais: (1) Perímetro – Internet e borda; (2) Rede interna – switches, VLANs; (3) Endpoint – estações e servidores.',
              'Em cada camada, escreva um controle: Perímetro → Firewall e filtro de tráfego; Rede interna → Segmentação (VLANs) e IDS; Endpoint → Antimalware, EDR e política de patch. Conecte com setas mostrando que o tráfego passa por cada camada.',
              'Liste 5 ameaças (malware, phishing, DDoS, ransomware, acesso não autorizado) em uma tabela. Na coluna ao lado, escreva um controle ou mitigação para cada uma (ex.: malware → antimalware e backup; phishing → treinamento e filtro de e-mail; DDoS → mitigação na borda/CDN; ransomware → backup offline e restauração testada; acesso não autorizado → MFA e menor privilégio).',
            ],
          },
        ],
      },
      {
        id: 'p4-teste-intrusao-redes',
        titulo: 'Práticas de Teste de Intrusão em Redes',
        itens: [
          {
            titulo: 'Lab Metasploitable/DVWA e relatório de pentest',
            passos: [
              'Monte o lab: instale VirtualBox ou VMware; baixe a imagem do Metasploitable2 ou DVWA e importe como VM. Configure rede em modo bridge ou NAT conforme necessário. Anote o IP da VM alvo.',
              'Fase Reconhecimento: anote o alvo (IP, nome se houver). Varredura: execute nmap -sV -sC -p- <IP>. Documente portas e serviços.',
              'Fase Enumeração: para cada serviço (ex.: HTTP na 80), use browser ou ferramentas (nikto, dirb) para listar diretórios ou versões. Anote caminhos interessantes (ex.: /phpmyadmin, /admin).',
              'Fase Exploração: escolha uma vulnerabilidade conhecida (ex.: CVE do vsftpd 2.3.4 no Metasploitable). Use searchsploit ou Metasploit (msfconsole, search, use exploit/..., set RHOSTS, run). Documente o comando exato e o resultado (shell, acesso).',
              'Redija um relatório curto: Sumário executivo; Escopo; Metodologia (reconhecimento, varredura, enumeração, exploração); Achados (tabela: vulnerabilidade, severidade, evidência); Recomendações; Anexos (screenshots).',
            ],
          },
        ],
      },
      {
        id: 'p4-protecao-perimetro',
        titulo: 'Proteção de Perímetro',
        itens: [
          {
            titulo: 'Topologia firewall, regras e Snort/Suricata',
            passos: [
              'Desenhe a topologia: [Internet] → [Firewall] → [DMZ: servidor web] e → [Rede interna: estações]. Setas indicando fluxo.',
              'Escreva 5 regras de firewall em ordem (a última é geralmente "negar todo o resto"): (1) Permitir HTTP (80) e HTTPS (443) da Internet para DMZ; (2) Permitir tráfego da Rede interna para DMZ (se necessário); (3) Permitir apenas resposta (estabelecido) da DMZ/Internet para Rede interna; (4) Negar tudo da Internet para Rede interna direto; (5) Negar qualquer outro tráfego. Justifique cada uma em uma linha.',
              'Em lab com pfSense ou Linux (iptables): configure as regras (ex.: permitir 80/443 para um IP da DMZ, resto negar). Teste da rede interna: acesso ao servidor web na DMZ e à internet; da internet: apenas o servidor web acessível. Documente os comandos ou telas.',
              'Pesquise um CVE (ex.: CVE de um servidor web ou SSH). No site do Snort ou Suricata, busque uma regra (rule) para esse CVE. Copie a regra e escreva em 3 linhas o que ela detecta (ex.: "Detecta tentativa de exploração do CVE-XXXX no tráfego HTTP; verifica se o payload contém a assinatura do exploit.").',
            ],
          },
        ],
      },
      {
        id: 'p4-seguranca-mobile-iot',
        titulo: 'Segurança em Redes Móveis e IoT',
        itens: [
          {
            titulo: 'Inventário IoT, política e caso Mirai',
            passos: [
              'Faça uma lista de dispositivos IoT em casa ou no escritório: roteador, câmera, smart TV, assistente de voz, lâmpada inteligente, etc. Para cada um, anote: ainda usa senha padrão? Está exposto na internet (port forwarding)? Recebe atualizações? Classifique risco (baixo/médio/alto) e justifique em uma linha.',
              'Redija uma política de uma página "Aquisição e Uso de Dispositivos IoT": (1) Apenas dispositivos aprovados pela TI; (2) Troca de senha padrão antes de conectar à rede; (3) Dispositivos em VLAN ou rede separada; (4) Sem exposição direta à internet quando desnecessário; (5) Atualizações aplicadas em prazo definido.',
              'Pesquise "botnet Mirai". Resuma em 5 linhas: o que é (malware que vira dispositivos IoT em bot); como se propaga (senhas padrão, telnet/SSH); qual o impacto (DDoS); papel da senha padrão (entrada fácil); lição (mudar senha e não expor serviços de gestão à internet).',
            ],
          },
        ],
      },
      {
        id: 'p4-tratamento-resposta-incidentes',
        titulo: 'Tratamento e Resposta a Incidentes',
        itens: [
          {
            titulo: 'Tabletop ransomware, runbook e caso real',
            passos: [
              'Organize um exercício de mesa (tabletop) com 2–4 pessoas. Cenário: "Às 9h a equipe descobre que vários arquivos foram criptografados e há um aviso de resgate." Cada participante representa um papel (TI, RH, Jurídico, Comunicação). Discutam em 30 min: (1) Quem é acionado primeiro? (2) Como conter (desligar máquinas? Isolar rede?); (3) Como erradicar (backup? Pagar resgate?); (4) Quem fala com a imprensa ou clientes? Anote as decisões em um resumo de uma página.',
              'Esboce um runbook "Detecção de Ransomware" em uma página: (1) Primeiro passo: isolar o(s) equipamento(s) afetados da rede (desconectar cabo/Wi‑Fi); (2) Quem avisar: gerente de TI, segurança da informação, se aplicável jurídico; (3) O que não fazer: não desligar de imediato se for preciso preservar evidência para forense; (4) Verificar escopo: quantas estações/servidores; (5) Consultar backup: último backup íntegro; (6) Decisão de restauração ou erradicação conforme política.',
              'Escolha um caso real de incidente (reportagem ou relatório público). Mapeie em uma tabela as fases: Identificação (como descobriram), Contenção (o que fizeram para parar), Erradicação (remover causa), Recuperação (volta ao normal). Escreva um parágrafo com a lição aprendida.',
            ],
          },
        ],
      },
      {
        id: 'p4-projeto-integrador-defesa',
        titulo: 'Projeto Integrador – Defesa e Resposta a Incidentes',
        itens: [
          {
            titulo: 'Ambiente simulado, detecção e contenção com relatório',
            passos: [
              'Monte o ambiente: pelo menos 2 VMs (uma servidor, uma estação) e, se possível, firewall (pfSense) ou regras no roteador. Documente a topologia e os IPs.',
              'Injete o cenário: use uma VM vulnerável (ex.: Metasploitable) e explore-a de outra VM (exploit conhecido) ou simule um "malware" (script que cria arquivos e altera registro). Anote data/hora em que executou e o que foi feito (ex.: "Exploração do vsftpd; acesso obtido às 10h15").',
              'Do ponto de vista do defensor: consulte logs (Event Viewer, /var/log, ou tráfego capturado). Monte uma cronologia de pelo menos 5 eventos (ex.: 10h14 conexão na porta 21; 10h15 comando executado; 10h16 novo arquivo em /tmp). Escreva um parágrafo de causa raiz: "O atacante explorou o serviço X na porta Y; a causa foi a versão vulnerável sem patch."',
              'Execute contenção: isole a VM comprometida (desligue a interface de rede ou mova para rede de quarentena); bloqueie o IP de origem no firewall se for externo. Erradicação: reinstale o SO ou aplique patch e troque todas as senhas que possam ter sido expostas. Redija relatório de 1–2 páginas: resumo, cronologia, causa raiz, ações de contenção e erradicação, lições e recomendações.',
            ],
          },
        ],
      },
    ],
  },
  {
    periodoId: '5',
    nome: '5º Período',
    titulo: 'Especialização e Investigação',
    cor: '#8b5cf6',
    disciplinas: [
      {
        id: 'p5-analise-malwares',
        titulo: 'Análise de Malwares',
        itens: [
          {
            titulo: 'Análise estática com PE e sandbox, relatório de IOCs',
            passos: [
              'Baixe um executável de amostra de um repositório educacional (ex.: MalwareBazaar, theZoo). Nunca use amostra de origem desconhecida no seu sistema principal; use VM isolada.',
              'Abra o arquivo no pestudio ou PEview. Anote: imports (DLLs e funções chamadas — ex.: kernel32.dll, CreateProcess); strings (procure URLs, caminhos, nomes suspeitos). Calcule o hash (MD5/SHA256) com certutil ou Get-FileHash; busque o hash no VirusTotal e anote a detecção (quantos motores marcam como malicioso).',
              'Submeta a amostra a um sandbox (Cuckoo em lab, ou Any.Run / Hybrid Analysis online). Aguarde o relatório. Preencha uma tabela de IOCs: Hash do arquivo; IPs contactados; URLs; chaves de registro alteradas; arquivos criados; comportamento (ex.: injetou em processo, alterou boot).',
              'Redija um relatório de uma página: Nome da amostra e hash; Comportamento resumido; IOCs (tabela); Recomendação de bloqueio (bloquear IPs/URLs no firewall, regra de detecção por hash ou assinatura).',
            ],
          },
        ],
      },
      {
        id: 'p5-pericia-forense',
        titulo: 'Análise e Perícia Forense Computacional',
        itens: [
          {
            titulo: 'Imagem forense, Autopsy e timeline',
            passos: [
              'Crie um disco virtual (VDI/VHD) de poucos GB, formate, copie alguns arquivos e depois apague um ou dois. Esse será o "disco de prova".',
              'Use FTK Imager (Windows) ou dd (Linux: dd if=/dev/sdX of=imagem.raw bs=4M) para criar uma imagem forense do disco. Calcule o hash (MD5/SHA256) da imagem e anote; isso serve para provar integridade.',
              'Abra a imagem no Autopsy: New Case → adicione a imagem como data source. Deixe o Autopsy indexar.',
              'No Autopsy, navegue até "Deleted Files" ou "File System"; localize um arquivo que você apagou. Anote o caminho, nome e data de exclusão. Se for Windows, use a função de "Registry" ou "Recent Activity" e anote um artefato (ex.: última execução de um programa).',
              'Monte uma timeline: use a ferramenta de timeline do Autopsy ou exporte eventos (arquivos, registro, logs) e ordene por data. Liste pelo menos 10 eventos. Se tiver simulado uma ação maliciosa (ex.: execução de um .exe em determinada hora), identifique na timeline o primeiro evento relacionado e escreva: "Primeiro evento malicioso: [data/hora] – execução de [arquivo]."',
            ],
          },
        ],
      },
      {
        id: 'p5-auditoria-conformidade',
        titulo: 'Auditoria e Conformidade',
        itens: [
          {
            titulo: 'PDCA/ISO 27001, política de backup e LGPD',
            passos: [
              'Pesquise o ciclo PDCA (Plan-Do-Check-Act) no contexto da ISO 27001. Escreva em um parágrafo: Plan = planejar controles com base em riscos; Do = implementar; Check = monitorar e auditar; Act = corrigir e melhorar. Dê um exemplo de controle do Anexo A (ex.: A.12.3.1 Backup — "Backups de informação devem ser feitos regularmente"; no Check, auditar se os backups são testados).',
              'Redija uma política de backup de uma página: objetivo; escopo (quais sistemas); frequência (diário completo, incremental a cada X horas); retenção (ex.: 30 dias no site, 1 ano em fita/nuvem); responsável; teste de restauração (mensal, documentado); armazenamento off-site e criptografia.',
              'Pesquise a diferença entre o papel do auditor e o do DPO (Data Protection Officer). Escreva: Auditor = avalia conformidade (ex.: LGPD, ISO), independente; DPO = responsável por orientar a organização sobre proteção de dados e atender titulares. Cite três princípios da LGPD (ex.: finalidade, necessidade, transparência) e onde se aplicam (ex.: só coletar dado necessário para a finalidade declarada).',
            ],
          },
        ],
      },
      {
        id: 'p5-cyberwar',
        titulo: 'Cyberwar',
        itens: [
          {
            titulo: 'Caso APT, infraestrutura crítica e defesa cibernética no Brasil',
            passos: [
              'Pesquise um caso real de APT ou espionagem cibernética (ex.: SolarWinds, APT29, grupo ligado a algum país). Resuma em 10 linhas: nome do grupo ou operação; alvo (setor, país); método (phishing, supply chain, zero-day); impacto (dados roubados, acesso prolongado); lição para defesa.',
              'Liste três setores de infraestrutura crítica (ex.: energia, saúde, financeiro). Para cada um, escreva um exemplo de ameaça cibernética (ex.: energia — ataque a SCADA pode desligar usinas; saúde — ransomware em hospital paralisa atendimento; financeiro — fraude e roubo de dados de clientes).',
              'Pesquise a estrutura de defesa cibernética no Brasil: quem coordena (ex.: GSI, CERT.br); qual o papel do Exército, da PF, da ANATEL; existência de CERT nacional ou setorial. Resuma em meia página quem faz o quê.',
            ],
          },
        ],
      },
      {
        id: 'p5-mitigacao-vulnerabilidades',
        titulo: 'Mitigação de Vulnerabilidades',
        itens: [
          {
            titulo: 'Varredura com OpenVAS/Nessus, CVE e fluxo de correção',
            passos: [
              'Em um lab, instale OpenVAS (ou use Nessus em trial). Configure um alvo (IP da VM vulnerável, ex.: Metasploitable). Execute um scan completo.',
              'Abra o relatório gerado. Escolha as 5 primeiras vulnerabilidades (ou as 5 mais críticas). Para cada uma, anote: nome, CVSS (se houver), severidade. Classifique por prioridade (ex.: Crítica = corrigir em 24h; Alta = 7 dias; Média = 30 dias) e justifique em uma linha.',
              'Acesse o NVD (nvd.nist.gov) e busque um CVE conhecido (ex.: um que apareceu no scan). Anote o CVE ID, score CVSS, vetor (ex.: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H). Decida se no seu contexto (ex.: servidor interno sem internet) seria crítico, alto ou médio e por quê.',
              'Desenhe um fluxo de 5 etapas: (1) Descoberta (varredura ou report); (2) Triagem (classificar severidade e responsável); (3) Atribuição (equipe de desenvolvimento ou infra); (4) Correção (patch, workaround ou aceitação de risco); (5) Verificação (re-scan ou teste). Indique quem é o responsável em cada etapa (ex.: Segurança na 1 e 2; Dev/Infra na 3 e 4; Segurança na 5).',
            ],
          },
        ],
      },
      {
        id: 'p5-projeto-integrador-final',
        titulo: 'Projeto Integrador Final – Segurança Cibernética e Forense',
        itens: [
          {
            titulo: 'Lab completo, incidente, investigação e relatório para banca',
            passos: [
              'Monte o laboratório: VLANs, pelo menos um servidor e uma estação, firewall (pfSense ou iptables), IDS (Snort/Suricata) se possível. Documente o diagrama e os IPs.',
              'Injete o incidente: use ransomware simulado (script que criptografa arquivos em uma pasta) ou cenário de exfiltração (cópia de arquivos para um "servidor atacante"). Registre data/hora e o que foi feito (passo a passo da injeção).',
              'Detecte o incidente: consulte logs do firewall, IDS, SO e, se aplicável, tráfego (Wireshark). Triage: quais hosts afetados, qual a primeira evidência. Investigue: faça imagem forense do disco afetado (FTK Imager ou dd); analise tráfego e malware se houver. Extraia IOCs (hashes, IPs, URLs) e monte uma timeline de pelo menos 10 eventos. Redija um parágrafo de causa raiz.',
              'Execute contenção (isolar host, bloquear IP/domínio), erradicação (remover malware, aplicar patch, trocar senhas) e recuperação (restaurar de backup testado). Documente cada ação.',
              'Redija o relatório executivo (uma página para gestão) e técnico (método, cronologia, IOCs, evidências, recomendações). Prepare uma apresentação de 10–15 min para defender perante banca: contexto, o que aconteceu, como descobriram, causa raiz, ações tomadas e lições aprendidas.',
            ],
          },
        ],
      },
    ],
  },
];

export { aulasPraticasPorPeriodo };
export default aulasPraticasPorPeriodo;
