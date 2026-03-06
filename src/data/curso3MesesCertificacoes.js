// Curso de 3 meses: Security+ → CySA+ → CASP+ → OSCP
// Cada semana tem várias aulas (conteúdo tipo “aula”) para estudo guiado

export const curso3Meses = {
  titulo: 'Curso de 3 meses: do fundamento ao pentest',
  descricao: 'Plano de estudos em 12 semanas, destrinchando Security+, CySA+, CASP+ e OSCP em aulas sequenciais. Sugestão: 8–12 h/semana.',
  meses: [
    {
      numero: 1,
      nome: 'Mês 1 – Fundação (CompTIA Security+)',
      foco: 'Conceitos gerais, ameaças, arquitetura, operações e gestão de segurança.',
      semanas: [
        {
          numero: 1,
          titulo: 'Semana 1: Conceitos gerais de segurança',
          certificacao: 'Security+',
          aulas: [
            {
              titulo: 'Aula 1.1 – Triângulo CIA e princípios fundamentais',
              conteudo: 'Confidencialidade (dados só para quem tem autorização), Integridade (dados corretos e não alterados) e Disponibilidade (acesso quando necessário). Conheça também: autenticidade, não repúdio, accountability. Princípio do menor privilégio, defesa em profundidade e separação de duties.',
              duracao: '1h',
            },
            {
              titulo: 'Aula 1.2 – Tipos de ataques e ameaças',
              conteudo: 'Ataques passivos vs ativos. Phishing, spear phishing, whaling. Malware: vírus, worm, trojan, ransomware, spyware, rootkit. Ataques de negação de serviço (DoS/DDoS). Man-in-the-middle (MITM). Spoofing (IP, DNS, e-mail). Introdução a ataques de engenharia social.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 1.3 – Autenticação, autorização e controle de acesso',
              conteudo: 'Diferença entre autenticação (quem é você?) e autorização (o que pode fazer?). Fatores de autenticação: algo que você sabe (senha), tem (token, celular) e é (biometria). MFA e 2FA. SSO (Single Sign-On). Controle de acesso: DAC, MAC, RBAC, ABAC. Políticas de senha e lockout.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 1.4 – Criptografia básica e hashing',
              conteudo: 'Criptografia simétrica (AES, chave única) vs assimétrica (RSA, par de chaves pública/privada). Uso: confidencialidade (simétrica/assimétrica), integridade (hash), não repúdio (assinatura digital). Funções de hash: MD5 e SHA-1 (evitar); SHA-256 e SHA-3 (recomendados). Salting para senhas.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 1.5 – PKI e certificados digitais',
              conteudo: 'Infraestrutura de chaves públicas (PKI). Papel da CA (Certificate Authority) e da RA (Registration Authority). Ciclo de vida do certificado: emissão, renovação, revogação. CRL e OCSP. Certificados X.509. Uso em HTTPS, e-mail (S/MIME), VPN e assinatura de código.',
              duracao: '1h30',
            },
          ],
        },
        {
          numero: 2,
          titulo: 'Semana 2: Ameaças, vulnerabilidades e mitigação',
          certificacao: 'Security+',
          aulas: [
            {
              titulo: 'Aula 2.1 – Vulnerabilidades e exploração',
              conteudo: 'O que é vulnerabilidade: fraqueza que pode ser explorada. CVE (identificador público), CWE (tipos de falhas de software). Zero-day: vulnerabilidade ainda sem patch. Surface attack e vetores de ataque. Gestão de vulnerabilidades: inventário, priorização (CVSS), correção e validação.',
              duracao: '1h',
            },
            {
              titulo: 'Aula 2.2 – Varredura e testes de segurança',
              conteudo: 'Varredura de vulnerabilidades (scan) com ferramentas (ex.: Nessus, OpenVAS): escopo, agendamento, análise de resultados. Diferença entre scan e penetration test. Teste de penetração: black box, gray box, white box. Bug bounty e limites legais e contratuais.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 2.3 – Malware analysis e prevenção',
              conteudo: 'Ciclo de vida do malware: entrega, exploração, persistência, propagação. Antivírus (assinatura e heurística), EDR (Endpoint Detection and Response), sandbox. Prevenção: hardening, menor privilégio, segmentação, treinamento de usuários.',
              duracao: '1h',
            },
            {
              titulo: 'Aula 2.4 – Resposta a incidentes – conceitos',
              conteudo: 'Ciclo de resposta a incidentes: Preparação, Identificação, Contenção, Erradicação, Recuperação, Lições aprendidas. Papéis: CSIRT, CISO, comunicação com gestão e com autoridades (LGPD/ANPD). Documentação e cadeia de custódia para evidências.',
              duracao: '1h30',
            },
          ],
        },
        {
          numero: 3,
          titulo: 'Semana 3: Arquitetura de segurança',
          certificacao: 'Security+',
          aulas: [
            {
              titulo: 'Aula 3.1 – Rede: firewalls, IDS/IPS e segmentação',
              conteudo: 'Firewall: filtro por IP, porta e estado (stateful). DMZ e regras de permissão/negação. IDS (detecção e alerta) vs IPS (detecção e bloqueio). Segmentação de rede e VLANs para limitar movimento lateral. Next-Generation Firewall (NGFW): inspeção de aplicação e conteúdo.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 3.2 – Segurança de rede sem fio e remota',
              conteudo: 'Wi-Fi: WPA2/WPA3, evitar WEP. Rogue AP e ataques a Wi-Fi. VPN: IPsec (IKE, AH, ESP), SSL/TLS VPN. Remote access: RDP com NLA, SSH, evitar Telnet. Controle de acesso à rede (NAC) e 802.1X.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 3.3 – Hardening de sistemas',
              conteudo: 'Reduzir superfície de ataque: desabilitar serviços desnecessários, remover software não usado. Patch management: ciclo de identificação, teste e implantação. Configurações seguras: políticas de senha, bloqueio de conta, logs. Benchmarks (ex.: CIS).',
              duracao: '1h',
            },
            {
              titulo: 'Aula 3.4 – Cloud e arquitetura híbrida',
              conteudo: 'Modelos de serviço: IaaS, PaaS, SaaS. Responsabilidade compartilhada: o que é do provedor e o que é do cliente em cada modelo. Segurança em cloud: identidade (IAM), criptografia, rede virtual, conformidade. Introdução a zero trust: nunca confiar, sempre verificar.',
              duracao: '1h30',
            },
          ],
        },
        {
          numero: 4,
          titulo: 'Semana 4: Operações de segurança e gestão',
          certificacao: 'Security+',
          aulas: [
            {
              titulo: 'Aula 4.1 – SIEM e monitoramento',
              conteudo: 'SIEM: agregação de logs, correlação de eventos, alertas. Fontes de dados: firewall, IDS, endpoints, aplicações. Uso para detecção de anomalias e resposta a incidentes. Retenção de logs e requisitos legais/regulatórios.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 4.2 – Backup, BCP e DRP',
              conteudo: 'Estratégia 3-2-1: três cópias, dois tipos de mídia, uma off-site. Tipos de backup: completo, incremental, diferencial. RTO e RPO. Business Continuity Plan (BCP) e Disaster Recovery Plan (DRP). Testes de restauração e exercícios de continuidade.',
              duracao: '1h',
            },
            {
              titulo: 'Aula 4.3 – Políticas e conformidade',
              conteudo: 'Política de segurança da informação, políticas aceitáveis de uso, classificação de dados. LGPD: bases legais, direitos dos titulares, ANPD. GDPR (Europa). Regulamentação setorial (BACEN, saúde). Auditoria e evidências.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 4.4 – Revisão Security+ e simulado',
              conteudo: 'Revisão dos cinco domínios da SY0-701: General Security Concepts (12%), Threats/Vulnerabilities (22%), Security Architecture (18%), Security Operations (28%), Security Program Management (20%). Resolver questões de prática e simular tempo de prova (90 min).',
              duracao: '2h',
            },
          ],
        },
      ],
    },
    {
      numero: 2,
      nome: 'Mês 2 – Analista e arquitetura (CySA+ e CASP+)',
      foco: 'Operações de SOC, vulnerabilidades, resposta a incidentes e arquitetura enterprise.',
      semanas: [
        {
          numero: 5,
          titulo: 'Semana 5: Operações de segurança (CySA+)',
          certificacao: 'CySA+',
          aulas: [
            {
              titulo: 'Aula 5.1 – SIEM em profundidade e correlação',
              conteudo: 'Regras de correlação: múltiplas fontes, tempo, contexto. Detecção de anomalias e comportamento (UEBA). Construção de dashboards e alertas acionáveis. Tuning para reduzir falsos positivos. Integração com ticketing e orquestração (SOAR).',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 5.2 – IOC e IOA',
              conteudo: 'Indicator of Compromise (IOC): artefatos que indicam comprometimento (IPs, hashes, domínios C2, padrões em logs). Indicator of Attack (IOA): comportamento do atacante em tempo real. Uso em detecção e threat hunting. Fontes de threat intelligence.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 5.3 – Análise de logs e network flow',
              conteudo: 'Tipos de logs: sistema, aplicação, segurança, rede. Formato comum (ex.: syslog). NetFlow e análise de fluxo para detectar exfiltração e C2. Identificação de tráfego anômalo. Ferramentas: Wireshark, tcpdump, analisadores de flow.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 5.4 – Baseline e detecção de desvios',
              conteudo: 'Definir baseline de rede e de sistemas: comportamento “normal”. Detecção de desvios: novos processos, conexões, alterações em arquivos. Integração com EDR e honeypots. Threat hunting proativo a partir de hipóteses.',
              duracao: '1h',
            },
          ],
        },
        {
          numero: 6,
          titulo: 'Semana 6: Gestão de vulnerabilidades (CySA+)',
          certificacao: 'CySA+',
          aulas: [
            {
              titulo: 'Aula 6.1 – CVSS e priorização',
              conteudo: 'CVSS (Common Vulnerability Scoring System): vetor e pontuação (0–10). Severidade: crítico, alto, médio, baixo. Contexto do ambiente (ex.: exposição à internet). Priorização de correção com base em risco e criticidade dos ativos.',
              duracao: '1h',
            },
            {
              titulo: 'Aula 6.2 – Scanning e integração ao ciclo de vida',
              conteudo: 'Scanner de vulnerabilidades: configuração, escopo, credenciais para varredura autenticada. Integração com pipeline (CI/CD): scan em build e em deploy. Tratamento de falsos positivos e exceções. Relatórios para gestão e desenvolvedores.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 6.3 – Remediation e patch management',
              conteudo: 'Remediation: patch, workaround ou aceitação de risco (documentada). Janelas de manutenção e testes em staging. Rollback. Gestão de vulnerabilidades em containers e em cloud. Métricas: tempo médio para corrigir (MTTR).',
              duracao: '1h',
            },
            {
              titulo: 'Aula 6.4 – Pentest vs red team e validação',
              conteudo: 'Pentest: escopo definido, relatório de vulnerabilidades e recomendações. Red team: simulação de adversário com objetivos realistas. Validação pós-remediation: re-scan e testes para confirmar que a falha foi corrigida.',
              duracao: '1h30',
            },
          ],
        },
        {
          numero: 7,
          titulo: 'Semana 7: Resposta a incidentes e comunicação (CySA+)',
          certificacao: 'CySA+',
          aulas: [
            {
              titulo: 'Aula 7.1 – Playbooks e runbooks',
              conteudo: 'Playbook: procedimento para um tipo de incidente (ransomware, phishing, DDoS, vazamento de dados). Runbook: passos operacionais para tarefas (ex.: como escalar, como isolar host). Automação de etapas com SOAR.',
              duracao: '1h',
            },
            {
              titulo: 'Aula 7.2 – Análise de malware (dinâmica e estática)',
              conteudo: 'Análise estática: sem executar (hashes, strings, PE headers). Análise dinâmica: execução em sandbox (comportamento em rede, arquivos, registro). Ferramentas: sandbox (Cuckoo, Joe Sandbox), debuggers. Cadeia de custódia para evidências.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 7.3 – Forense básica e preservação de evidências',
              conteudo: 'Ordem de volatilidade. Preservação: imagem de disco, memória, logs. Ferramentas forenses (ex.: FTK, EnCase, ferramentas open source). Cadeia de custódia e admissibilidade. Relatório de incidente para gestão e compliance.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 7.4 – Comunicação com stakeholders e métricas',
              conteudo: 'Comunicação durante e após o incidente: gestão, jurídico, compliance, clientes/ANPD se aplicável. KPIs e KRIs do SOC: MTTD, MTTR, número de incidentes, taxa de falsos positivos. Relatórios executivos e técnicos.',
              duracao: '1h',
            },
          ],
        },
        {
          numero: 8,
          titulo: 'Semana 8: Arquitetura de segurança enterprise (CASP+)',
          certificacao: 'CASP+',
          aulas: [
            {
              titulo: 'Aula 8.1 – Zero trust em profundidade',
              conteudo: 'Princípios: never trust, always verify; assume breach; least privilege. Componentes: identidade, dispositivo, rede, aplicação, dados. Microsegmentação. Aplicação em rede, cloud e híbrido. Referências: NIST Zero Trust Architecture.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 8.2 – Cloud security (IaaS, PaaS, SaaS)',
              conteudo: 'Responsabilidade compartilhada por camada. IaaS: hardening de VMs, rede virtual, identidade. PaaS: configuração segura, secrets. SaaS: SSO, DLP, CASB. Segurança em multicloud e híbrido.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 8.3 – Virtualização e SDN',
              conteudo: 'Segurança do hipervisor e isolamento entre VMs. Rede definida por software (SDN): plano de controle centralizado, segmentação e políticas dinâmicas. Containers: segurança de imagem, runtime e orquestração (Kubernetes).',
              duracao: '1h',
            },
            {
              titulo: 'Aula 8.4 – Threat modeling',
              conteudo: 'Threat modeling no design: identificar ativos, fluxos, trust boundaries e ameaças. Metodologias: STRIDE (Spoofing, Tampering, Repudiation, Information disclosure, DoS, Elevation). Diagramas (DFD) e priorização de mitigação.',
              duracao: '1h30',
            },
          ],
        },
      ],
    },
    {
      numero: 3,
      nome: 'Mês 3 – Avançado e hands-on (CASP+ e OSCP)',
      foco: 'Engenharia de segurança, governança e penetração testing prático.',
      semanas: [
        {
          numero: 9,
          titulo: 'Semana 9: Engenharia, criptografia e governança (CASP+)',
          certificacao: 'CASP+',
          aulas: [
            {
              titulo: 'Aula 9.1 – PKI avançada e criptografia em uso',
              conteudo: 'PKI enterprise: HSM, políticas (CPS), múltiplas CAs. Criptografia em repouso, em trânsito e em uso (confidential computing, TEE, enclaves). Escolha de algoritmos e tamanhos de chave. Gestão do ciclo de vida de chaves.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 9.2 – Secure DevOps (DevSecOps)',
              conteudo: 'Integração de segurança no pipeline: SAST, DAST, análise de dependências (SCA), gestão de secrets. Security as Code. Imagens de container seguras e escaneadas. Compliance em CI/CD.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 9.3 – Gestão de risco (NIST, ISO)',
              conteudo: 'Framework de risco: NIST RMF, ISO 27005. Identificação, análise e avaliação de risco. Tratamento: mitigar, transferir, aceitar, evitar. Risk appetite. Documentação e comunicação para o board.',
              duracao: '1h',
            },
            {
              titulo: 'Aula 9.4 – Governança e compliance',
              conteudo: 'ISO/IEC 27001 (SGSI). Controles e auditoria. Relação com LGPD, PCI-DSS, setores regulados. Papel do CISO. Auditoria interna e externa. Relatórios de conformidade.',
              duracao: '1h',
            },
          ],
        },
        {
          numero: 10,
          titulo: 'Semana 10: OSCP – Reconhecimento e enumeração',
          certificacao: 'OSCP',
          aulas: [
            {
              titulo: 'Aula 10.1 – Ambiente e metodologia (Kali, PWK)',
              conteudo: 'Kali Linux: ferramentas essenciais. Metodologia de pentest: planejamento, reconhecimento, scanning, enumeração, exploração, pós-exploração, relatório. Escopo e autorização. Documentação desde o início.',
              duracao: '1h',
            },
            {
              titulo: 'Aula 10.2 – Reconhecimento (OSINT e passivo)',
              conteudo: 'Coleta de informações sem tocar no alvo: whois, DNS (subdomínios, registros), redes sociais, fóruns, vazamentos. Ferramentas: theHarvester, Maltego, Shodan. Uso ético e legal.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 10.3 – Scanning (Nmap e masscan)',
              conteudo: 'Varredura de portas: TCP/UDP, técnicas de evasão. Detecção de versão de serviços (-sV). Scripts NSE (-sC). Identificação de OS. Organização de resultados e documentação para as próximas fases.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 10.4 – Enumeração (SMB, HTTP, SQL)',
              conteudo: 'Enumeração de serviços: SMB (enum4linux, smbclient, shares, usuários). HTTP: diretórios, parâmetros, tecnologias. SQL: identificação de pontos de injeção. Documentar usuários, versões e configurações para exploração.',
              duracao: '2h',
            },
          ],
        },
        {
          numero: 11,
          titulo: 'Semana 11: OSCP – Exploração e pós-exploração',
          certificacao: 'OSCP',
          aulas: [
            {
              titulo: 'Aula 11.1 – Exploração de serviços e buffer overflow',
              conteudo: 'Exploração de serviços vulneráveis: FTP, SSH, RDP, serviços web (SQLi, LFI, RCE). Buffer overflow: identificação do offset, controle de EIP, bad chars, shellcode. Uso de frameworks (Metasploit) e exploração manual.',
              duracao: '2h',
            },
            {
              titulo: 'Aula 11.2 – Shells (reverse, bind, web shell)',
              conteudo: 'Reverse shell: vítima conecta ao atacante (contorna firewall). Bind shell: atacante conecta à vítima. Web shell em aplicações web. Transferência de arquivos: Python HTTP server, SMB, wget/curl. Encoding e evasão.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 11.3 – Pivoting e port forwarding',
              conteudo: 'Usar máquina comprometida como salto para redes internas. Port forwarding: SSH -L/-D, chisel, proxychains. Técnicas de pivoting em Windows e Linux. Escopo e documentação de redes descobertas.',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 11.4 – Privilege escalation (Linux e Windows)',
              conteudo: 'Linux: SUID/SGID, kernel exploits, cron, credenciais em arquivos. Windows: token impersonation, serviços, registry, WMI, kernel. Ferramentas: LinPEAS, WinPEAS, Mimikatz (LSASS, pass-the-hash).',
              duracao: '2h',
            },
          ],
        },
        {
          numero: 12,
          titulo: 'Semana 12: OSCP – Relatório e revisão final',
          certificacao: 'OSCP',
          aulas: [
            {
              titulo: 'Aula 12.1 – Relatório profissional de pentest',
              conteudo: 'Estrutura: resumo executivo, metodologia, descobertas (severidade, descrição, evidência, impacto, recomendação), anexos (screenshots, comandos). Linguagem clara para técnicos e gestão. Formato PDF e entrega no prazo (ex.: 24h pós-exame OSCP).',
              duracao: '1h30',
            },
            {
              titulo: 'Aula 12.2 – Prática em lab (máquinas tipo OSCP)',
              conteudo: 'Praticar em labs (HTB, PG Practice, lab PWK): fluxo completo de recon → scan → enum → exploit → privesc → documentação. Cronometrar e simular condições de exame. Gerenciar tempo e priorizar alvos.',
              duracao: '4h+',
            },
            {
              titulo: 'Aula 12.3 – Revisão de certificações e dicas de exame',
              conteudo: 'Security+: tempo por questão, performance-based. CySA+/CASP+: cenários longos, múltiplas respostas. OSCP: gestão das 23h45, descanso, backup de notas e screenshots. Checklist pré-prova.',
              duracao: '1h',
            },
            {
              titulo: 'Aula 12.4 – Próximos passos e carreira',
              conteudo: 'Manutenção de certificações (CE para CompTIA). Outras credenciais: CEH, PNPT, eLearnSecurity. Especialização: red team, forense, cloud security. Construção de portfólio e experiência prática.',
              duracao: '1h',
            },
          ],
        },
      ],
    },
  ],
};

export function getAulasPorSemana(mesIndex, semanaIndex) {
  const mes = curso3Meses.meses[mesIndex];
  if (!mes || !mes.semanas[semanaIndex]) return [];
  return mes.semanas[semanaIndex].aulas || [];
}

export function getTotalAulas() {
  let total = 0;
  curso3Meses.meses.forEach((m) => {
    m.semanas.forEach((s) => {
      total += (s.aulas && s.aulas.length) || 0;
    });
  });
  return total;
}
