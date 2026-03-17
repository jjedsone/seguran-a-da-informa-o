/**
 * Destrinchamento das 16 Aulas – Conteúdo organizado em 4 páginas temáticas.
 * Baseado nas apostilas: AULA 01 a AULA 16 (Conceitos, Ameaças, OSI, Protocolos, Ataques,
 * Exploração, Serviços de Segurança, Criptografia, Controles, Proteção de Dados,
 * Ferramentas, Ambiente Corporativo, Políticas, Controles de Acesso).
 */

export const paginasAulas = [
  {
    id: 'fundamentos',
    titulo: 'Fundamentos, Ameaças e Arquitetura',
    subtitulo: 'Aulas 01 a 05 – Conceitos, ameaças, OSI, protocolos e ataques',
    ordem: 1,
    cor: '#0ea5e9',
    aulas: [
      {
        id: 'aula-01',
        titulo: 'AULA 01 — Conceitos de Segurança de Computadores',
        ordem: 1,
        pdfArquivo: 'AULA-01.pdf',
        conteudo: `# Conceitos de Segurança de Computadores

## Objetivos
- Definir **segurança da informação** e seus pilares (CIA: Confidencialidade, Integridade, Disponibilidade).
- Diferenciar ativo, ameaça, vulnerabilidade, risco e impacto.
- Introduzir **autenticidade** e **não repúdio** como extensões do modelo.

## Pilares (CIA)
- **Confidencialidade**: informação acessível apenas a quem tem autorização.
- **Integridade**: garantia de que a informação não foi alterada de forma não autorizada.
- **Disponibilidade**: acesso à informação quando necessário.

## Conceitos-chave
- **Ativo**: recurso com valor (dados, sistemas, pessoas).
- **Ameaça**: evento potencial que pode causar dano.
- **Vulnerabilidade**: fraqueza que pode ser explorada.
- **Risco**: combinação de ameaça × vulnerabilidade × impacto.
- **Controle**: medida para reduzir o risco.`,
      },
      {
        id: 'aula-02',
        titulo: 'AULA 02 — Ameaças e Vulnerabilidades',
        ordem: 2,
        pdfArquivo: 'AULA-02.pdf',
        conteudo: `# Ameaças e Vulnerabilidades

## Classificação de ameaças
- **Naturais**: incêndio, enchente, terremoto.
- **Humanas**: intencionais (malware, phishing, insider) ou acidentais (erro operacional).
- **Tecnológicas**: falha de hardware/software, obsolescência.

## Vulnerabilidades comuns
- Senhas fracas ou padrão.
- Software desatualizado (sem patch).
- Configurações inadequadas (portas abertas, serviços desnecessários).
- Falta de segmentação de rede.
- Ausência de criptografia em dados sensíveis.

## Ciclo de vida
Identificação de ativos → Análise de ameaças → Identificação de vulnerabilidades → Avaliação de risco → Tratamento (mitigar, aceitar, transferir, evitar).`,
      },
      {
        id: 'aula-03',
        titulo: 'AULA 03 — Arquitetura de Segurança OSI | Fundamentos',
        ordem: 3,
        pdfArquivo: 'AULA-03.pdf',
        conteudo: `# Arquitetura de Segurança OSI – Fundamentos

## Modelo OSI (7 camadas)
1. Física | 2. Enlace | 3. Rede | 4. Transporte | 5. Sessão | 6. Apresentação | 7. Aplicação.

## Segurança por camada
- **Física**: controle de acesso ao datacenter, cabos, dispositivos.
- **Enlace**: MAC, VLANs, 802.1X.
- **Rede**: firewall, IPsec, filtros.
- **Transporte**: TLS/SSL, segmentação.
- **Aplicação**: WAF, validação de entrada, autenticação.

## Defesa em profundidade
Múltiplas camadas de controle para que a falha de uma não comprometa todo o sistema.`,
      },
      {
        id: 'aula-04',
        titulo: 'AULA 04 — Protocolos e Segurança em Redes',
        ordem: 4,
        pdfArquivo: 'AULA-04.pdf',
        conteudo: `# Protocolos e Segurança em Redes

## Protocolos e riscos
- **TCP/IP**: base da internet; sem criptografia nativa.
- **HTTP**: tráfego em claro; usar **HTTPS** (TLS).
- **DNS**: pode ser spoofado; DNSSEC e DNS over HTTPS.
- **SMTP/POP/IMAP**: uso de TLS para e-mail.

## Boas práticas
- Criptografar tráfego (TLS 1.2+).
- Desabilitar protocolos obsoletos (SSLv3, TLS 1.0).
- Segmentar redes (VLANs, firewall).
- Monitorar tráfego (IDS/IPS).`,
      },
      {
        id: 'aula-05',
        titulo: 'AULA 05 — Ataques Passivos e Ativos',
        ordem: 5,
        pdfArquivo: 'AULA-05.pdf',
        conteudo: `# Ataques Passivos e Ativos

## Ataques passivos
- **Eavesdropping**: escuta do tráfego (sniffing).
- **Análise de tráfego**: padrões de comunicação sem alterar dados.
- Objetivo: obter informação sem ser detectado.
- Mitigação: criptografia (confidencialidade).

## Ataques ativos
- **Modificação de dados**, **repúdio**, **negação de serviço (DoS)**.
- **Spoofing**: falsificação de identidade (IP, MAC, DNS).
- **Replay**: repetir captura de tráfego válido.
- Mitigação: integridade (HMAC, assinaturas), autenticação forte, controles de disponibilidade.`,
      },
    ],
  },
  {
    id: 'servicos-controles',
    titulo: 'Serviços de Segurança, Controles e Dados',
    subtitulo: 'Aulas 06 a 10 – Exploração, confidencialidade, criptografia, controles e continuidade',
    ordem: 2,
    cor: '#10b981',
    aulas: [
      {
        id: 'aula-06',
        titulo: 'AULA 06 — Exploração de Vulnerabilidades em Redes e Aplicações',
        ordem: 1,
        pdfArquivo: 'AULA-06.pdf',
        conteudo: `# Exploração de Vulnerabilidades em Redes e Aplicações

## Redes
- Varredura de portas (Nmap), exploração de serviços mal configurados.
- Man-in-the-middle (MITM), ARP spoofing, DNS spoofing.
- Uso de vulnerabilidades conhecidas (CVE) em sistemas desatualizados.

## Aplicações
- **Injeção** (SQL, comandos, LDAP).
- **XSS** (Cross-Site Scripting).
- **CSRF** (Cross-Site Request Forgery).
- **Quebra de autenticação e controle de acesso** (OWASP Top 10).

## Mitigação
- Patch management, hardening, WAF, validação de entrada, princípio do menor privilégio.`,
      },
      {
        id: 'aula-07',
        titulo: 'AULA 07 — Serviços de Segurança | Confidencialidade e Integridade',
        ordem: 2,
        pdfArquivo: 'AULA-07.pdf',
        conteudo: `# Serviços de Segurança – Confidencialidade e Integridade

## Confidencialidade
- Garantir que apenas autorizados acessem a informação.
- **Criptografia** (simétrica e assimétrica), controle de acesso, ofuscação quando aplicável.
- Classificação da informação (pública, interna, confidencial, restrita).

## Integridade
- Garantir que a informação não foi alterada de forma não autorizada.
- **Hashes** (SHA-256), **HMAC**, **assinaturas digitais**.
- Controle de versão, logs de alteração, detecção de intrusão.`,
      },
      {
        id: 'aula-08',
        titulo: 'AULA 08 — Serviços de Segurança | Criptografia e Gestão de Chaves',
        ordem: 3,
        pdfArquivo: 'AULA-08.pdf',
        conteudo: `# Criptografia e Gestão de Chaves

## Tipos
- **Simétrica**: mesma chave para cifrar e decifrar (AES, ChaCha20). Uso: volume de dados.
- **Assimétrica**: par de chaves pública/privada (RSA, ECC). Uso: troca de chaves, assinaturas.
- **Híbrida**: assimétrica para trocar chave simétrica; simétrica para o dado.

## Gestão de chaves
- **Ciclo de vida**: geração, armazenamento, distribuição, rotação, revogação, destruição.
- **HSM** (Hardware Security Module) para chaves críticas.
- Políticas: tamanho mínimo, algoritmo, período de rotação.`,
      },
      {
        id: 'aula-09',
        titulo: 'AULA 09 — Controles Preventivos, Detectivos e Corretivos',
        ordem: 4,
        pdfArquivo: 'AULA-09.pdf',
        conteudo: `# Controles Preventivos, Detectivos e Corretivos

## Preventivos
- Evitam a ocorrência do incidente: firewall, antivírus, políticas de senha, segmentação, treinamento.

## Detectivos
- Identificam a ocorrência: IDS/IPS, SIEM, logs, monitoramento, auditoria.
- Permitem resposta rápida e análise forense.

## Corretivos
- Reduzem o impacto após o incidente: restauração de backup, patch, revogação de acesso, plano de resposta a incidentes.

## Modelo PDC
Usar os três tipos em conjunto para defesa em profundidade.`,
      },
      {
        id: 'aula-10',
        titulo: 'AULA 10 — Proteção de Dados e Continuidade Operacional',
        ordem: 5,
        pdfArquivo: 'AULA-10.pdf',
        conteudo: `# Proteção de Dados e Continuidade Operacional

## Proteção de dados
- **Backup**: 3-2-1 (3 cópias, 2 mídias, 1 off-site). Teste de restauração.
- **Criptografia** em repouso e em trânsito.
- **Classificação** e retenção conforme política e LGPD.

## Continuidade
- **BIA** (Business Impact Analysis): identificar processos críticos e RTO/RPO.
- **BCP** (Business Continuity Plan) e **DRP** (Disaster Recovery Plan).
- Redundância, sites alternativos, procedimentos documentados e testados.`,
      },
    ],
  },
  {
    id: 'ferramentas-corporativo',
    titulo: 'Ferramentas e Ambiente Corporativo',
    subtitulo: 'Aulas 11 e 12 – Ferramentas de apoio e segurança corporativa',
    ordem: 3,
    cor: '#f59e0b',
    aulas: [
      {
        id: 'aula-11',
        titulo: 'AULA 11 — Ferramentas de Apoio à Segurança',
        ordem: 1,
        pdfArquivo: 'AULA-11.pdf',
        conteudo: `# Ferramentas de Apoio à Segurança

## Monitoramento e detecção
- **SIEM** (Security Information and Event Management): correlação de logs e alertas.
- **IDS/IPS**: detecção e prevenção de intrusão em rede.
- **Antivírus/EDR**: endpoint detection and response.

## Varredura e testes
- **Nmap**: varredura de portas e serviços.
- **Nessus/OpenVAS**: varredura de vulnerabilidades.
- **Burp Suite, OWASP ZAP**: testes em aplicações web.

## Outras
- **Firewall** (perimetral, WAF, host).
- **VPN** para acesso remoto seguro.
- **Gestão de identidade** (SSO, MFA).`,
      },
      {
        id: 'aula-12',
        titulo: 'AULA 12 — Segurança em Ambientes Corporativos',
        ordem: 2,
        pdfArquivo: 'AULA-12.pdf',
        conteudo: `# Segurança em Ambientes Corporativos

## Governança
- Políticas de segurança alinhadas ao negócio.
- Comitê de segurança, papéis (CISO, analistas, operação).
- Conformidade (ISO 27001, LGPD, PCI-DSS).

## Operação
- Gestão de identidade e acesso (IAM), provisionamento e desprovisionamento.
- Segmentação de rede (DMZ, VLANs, microsegmentação).
- Resposta a incidentes (playbooks, comunicação, lições aprendidas).

## Cultura
- Conscientização e treinamento contínuos.
- Canal de reporte de incidentes e whistleblowing.`,
      },
    ],
  },
  {
    id: 'politicas-acesso',
    titulo: 'Políticas e Controles de Acesso',
    subtitulo: 'Aulas 13 a 16 – Políticas de segurança e controles de acesso lógico',
    ordem: 4,
    cor: '#8b5cf6',
    aulas: [
      {
        id: 'aula-13',
        titulo: 'AULA 13 — Políticas de Segurança da Informação | Estrutura',
        ordem: 1,
        pdfArquivo: 'AULA-13.pdf',
        conteudo: `# Políticas de Segurança da Informação – Estrutura

## Hierarquia típica
- **Política corporativa de segurança**: documento de alto nível, aprovado pela direção.
- **Políticas específicas**: uso aceitável, senha, controle de acesso, backup, classificação.
- **Normas e procedimentos**: detalhamento operacional (como implementar).

## Elementos de uma política
- Escopo, objetivos, responsabilidades.
- Regras claras e mensuráveis.
- Referência a normas (ISO, LGPD).
- Revisão periódica e aprovação formal.
- Divulgação e aceite (termo de ciência).`,
      },
      {
        id: 'aula-14',
        titulo: 'AULA 14 — Políticas de Segurança da Informação | Gestão',
        ordem: 2,
        pdfArquivo: 'AULA-14.pdf',
        conteudo: `# Políticas de Segurança da Informação – Gestão

## Ciclo de vida
- **Elaboração**: envolvimento das áreas, alinhamento ao negócio.
- **Revisão por pares e jurídico**.
- **Aprovação** pela alta direção.
- **Comunicação e treinamento**.
- **Implementação** (controles, sistemas).
- **Monitoramento e auditoria**.
- **Revisão periódica** (ex.: anual) e atualização.

## Indicadores
- Conformidade com políticas (% de adesão, desvios).
- Incidentes relacionados a violação de política.
- Cobertura de treinamento.`,
      },
      {
        id: 'aula-15',
        titulo: 'AULA 15 — Controles de Acesso Lógico | Modelos',
        ordem: 3,
        pdfArquivo: 'AULA-15.pdf',
        conteudo: `# Controles de Acesso Lógico – Modelos

## DAC (Discretionary Access Control)
- Dono do recurso define quem acessa (permissões por usuário/grupo).
- Flexível, porém mais difícil de garantir isolamento (ex.: Windows, Linux).

## MAC (Mandatory Access Control)
- Sistema define acesso com base em rótulos (classificação, categorias).
- Usado em ambientes militares/classificados (ex.: SELinux).

## RBAC (Role-Based Access Control)
- Acesso por **papéis** (roles); usuário recebe papéis.
- Facilita gestão em ambientes corporativos (princípio do menor privilégio por função).

## ABAC (Attribute-Based Access Control)
- Decisão com base em atributos (usuário, recurso, contexto, ambiente).
- Mais flexível para cenários complexos e dinâmicos.`,
      },
      {
        id: 'aula-16',
        titulo: 'AULA 16 — Controles de Acesso Lógico | Tecnologias',
        ordem: 4,
        pdfArquivo: 'AULA-16.pdf',
        conteudo: `# Controles de Acesso Lógico – Tecnologias

## Autenticação
- **Senha** (políticas: complexidade, rotação, histórico).
- **MFA/2FA**: algo que você sabe + algo que você tem (token, app) ou é (biometria).
- **SSO** (Single Sign-On): um login para vários sistemas (SAML, OAuth/OIDC).
- **Certificados digitais** e smart cards.

## Autorização
- **IAM** (Identity and Access Management): provisionamento, revisão de acessos, desprovisionamento.
- **LDAP/Active Directory**: diretório de identidades e grupos.
- **PAM** (Privileged Access Management): controle de contas privilegiadas (admin).`,
      },
    ],
  },
];

export function getPaginaAulas(id) {
  return paginasAulas.find((p) => p.id === id);
}

export function getAulaById(paginaId, aulaId) {
  const pagina = getPaginaAulas(paginaId);
  return pagina?.aulas?.find((a) => a.id === aulaId);
}
