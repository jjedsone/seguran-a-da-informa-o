// Conteúdo completo de cada disciplina – nível faculdade de elite
// Cada chave = id da disciplina em estudos.js

export const conteudoCompleto = {
  'p1-conceitos-computacao': `# Conceitos de Computação (72h)
## Ementa
Estudo do funcionamento interno do computador: arquitetura de hardware, software, ciclo de processamento e relações entre dado, informação e conhecimento. Base para raciocínio técnico em segurança da informação.

## Objetivos gerais
- Compreender o computador como máquina lógica que executa instruções.
- Relacionar cada componente com possíveis falhas de segurança.
- Diferenciar dado, informação e conhecimento no contexto computacional.

## Objetivos específicos
- Descrever o ciclo entrada → processamento → saída e sua importância para segurança.
- Identificar funções da CPU, RAM, disco e periféricos e riscos associados.
- Explicar o papel do sistema operacional, aplicativos, drivers e firmware.
- Associar ataques comuns (buffer overflow, DDoS, exploração de memória) aos componentes envolvidos.

---

## Unidade 1 – O que é um computador
Computador não é “uma caixa que liga”. É uma máquina lógica que executa instruções. Todo computador segue: **entrada → processamento → saída**. Segurança começa entendendo esse fluxo.

---

## Unidade 2 – Hardware (parte física)

### CPU (Processador)
- Cérebro da máquina; executa instruções.
- Núcleos e threads: paralelismo e sobrecarga.
- Ataques de negação de serviço exploram limite de processamento.
- Ciclo de máquina: fetch → decode → execute → store.

### Memória RAM
- Volátil; onde programas e dados são carregados durante a execução.
- Senhas e tokens passam pela RAM; ataques em memória (dump, injeção).
- Stack e heap; buffer overflow como exploração clássica.
- Dado em RAM pode ser capturado se não houver isolamento adequado.

### Disco (HD / SSD)
- Armazenamento persistente; sistema de arquivos.
- Apagar arquivo não significa destruir dado (sobrescrita).
- Dados em repouso: criptografia de disco, sanitização.
- HD vs SSD: diferenças para recuperação forense.

### Placa-mãe e periféricos
- Barramentos; comunicação entre componentes.
- Riscos físicos: USB malicioso, firmware alterado, cold boot.
- Dispositivos de entrada/saída como vetores de ataque.

---

## Unidade 3 – Software (parte lógica)

### Sistema operacional
- Gerencia memória, processos, usuários, dispositivos e permissões.
- Quem controla o SO controla a máquina.
- Conceitos: processo, thread, espaço de endereçamento, sistema de arquivos.

### Aplicativos
- Programas que executam tarefas; usam recursos do sistema.
- Vulnerabilidades nascem frequentemente no software (bugs, má configuração).

### Drivers e firmware
- Camada entre hardware e SO; comunicação direta com dispositivos.
- Falhas em firmware/driver são críticas (acesso privilegiado).
- Atualizações de segurança devem incluir drivers e firmware.

---

## Unidade 4 – Memória e processamento
- Como dados entram (entrada), são processados (CPU + RAM) e saem (saída).
- Caminho do dado: entender onde proteger e onde atacar.
- Isolamento entre processos; falha de isolamento = escalada de privilégio.

---

## Unidade 5 – Dado, informação e conhecimento
- **Dado**: fato bruto (ex.: número, caractere).
- **Informação**: dado com contexto e significado.
- **Conhecimento**: uso da informação para decisão ou ação.
- Em segurança: proteger dados e informação; vazamento de dado pode virar perda de conhecimento estratégico.

---

## Mentalidade profissional
O profissional de segurança entende a máquina. O operador fraco depende de ferramenta e vira refém dela. Nada acontece “do nada” em um computador — sempre há causa técnica.

## Prática recomendada
- Montar um PC (ou usar diagrama) e nomear cada componente e seu papel em segurança.
- Listar três ataques possíveis por componente (ex.: RAM → dump de credenciais, buffer overflow).
- Pesquisar um CVE relacionado a CPU, memória ou firmware.

## Checklist de aprendizagem
- [ ] Explicar o ciclo entrada–processamento–saída com exemplo.
- [ ] Diferenciar RAM e disco em termos de volatilidade e segurança.
- [ ] Citar um ataque que explore memória e um que explore armazenamento.
- [ ] Descrever por que “quem controla o SO controla tudo”.`,

  'p1-fundamentos-administracao': `# Fundamentos da Administração (72h)
## Ementa
Estrutura organizacional, processos, normas, hierarquia e tomada de decisão. Contexto em que a segurança da informação atua: proteção do negócio, da operação e das pessoas.

## Objetivos gerais
- Compreender como as organizações funcionam além da técnica.
- Justificar políticas, controles e auditoria com base em gestão.
- Posicionar a segurança como função que serve ao negócio.

## Objetivos específicos
- Descrever estrutura organizacional típica (níveis, departamentos).
- Explicar o que são processos e por que precisam de regras.
- Relacionar responsabilidade e accountability com segurança.
- Argumentar por que “acesso não é livre” e “auditoria é necessária”.

---

## Unidade 1 – Estrutura organizacional
- Organograma; divisão por funções (TI, RH, Financeiro, Operações).
- Onde a segurança da informação se encaixa: área de TI, compliance ou estrutura própria.
- Canais de comunicação e cadeia de comando.

---

## Unidade 2 – Processos
- Processo = conjunto de atividades que transformam insumos em resultados.
- Processos de TI: aquisição, desenvolvimento, operação, suporte.
- Segurança como parte dos processos (ex.: aprovação de acesso, mudança, incidente).
- Documentação de processos (procedimentos, fluxos).

---

## Unidade 3 – Normas e hierarquia
- Normas internas (políticas, padrões) e externas (leis, regulamentos).
- Hierarquia: quem decide, quem executa, quem responde.
- Delegação e limite de autoridade; consequências do não cumprimento.

---

## Unidade 4 – Responsabilidade e tomada de decisão
- Responsabilidade pelo ativo de informação (dono, custodiante, usuário).
- Tomada de decisão com base em risco e em conformidade.
- Segurança não é opinião; é dever e evidência (documentação, auditoria).

---

## Unidade 5 – Segurança a serviço do negócio
- Segurança protege disponibilidade, integridade e confidencialidade para o negócio funcionar.
- Custo x benefício; risco aceitável; alinhamento com objetivos da organização.
- Comunicação com áreas não técnicas (gestores, jurídico, RH).

---

## Mentalidade profissional
Segurança não protege “computador”. Protege o negócio, a operação e as pessoas. Políticas existem porque organização sem regras vira caos; auditoria existe para demonstrar que as regras são cumpridas.

## Prática recomendada
- Escolher uma empresa fictícia (ou real, com dados públicos) e mapear: estrutura, um processo crítico e onde a segurança da informação é decisiva.
- Redigir uma política de senha em uma página, justificando cada regra.

## Checklist de aprendizagem
- [ ] Explicar a diferença entre processo e projeto.
- [ ] Citar três motivos para existência de políticas de segurança.
- [ ] Descrever quem é “responsável” por um dado em uma organização.`,

  'p1-infraestrutura-ti': `# Infraestrutura de Tecnologia da Informação (72h)
## Ementa
Ambiente tecnológico que sustenta uma organização: estações de trabalho, servidores, redes, armazenamento, datacenter e serviços. Objetivo: conhecer o que será protegido e onde estão os riscos.

## Objetivos gerais
- Mapear uma infraestrutura de TI típica (componentes e funções).
- Identificar pontos críticos de risco físico e lógico.
- Relacionar cada camada com controles de segurança adequados.

## Objetivos específicos
- Descrever papel de estações, servidores, rede, armazenamento e datacenter.
- Listar riscos em cada camada (acesso físico, rede, dados em repouso e em trânsito).
- Explicar importância de monitoramento e redundância em ambientes críticos.

---

## Unidade 1 – Visão geral de infraestrutura
- Infraestrutura = conjunto de hardware, software, rede e instalações que suportam os sistemas.
- Computadores, servidores, redes, armazenamento, energia, climatização.
- Analogia: computador = médico; infraestrutura = hospital inteiro funcionando.

---

## Unidade 2 – Estações de trabalho (workstations)
- PCs e notebooks dos usuários; sistemas operacionais e aplicações.
- **Risco**: usuário como maior superfície de ataque — phishing, downloads, USB, engenharia social.
- Controles: política de uso, atualização, antimalware, privilégios limitados, conscientização.

---

## Unidade 3 – Servidores
- Função: servir serviços a outros (arquivos, banco de dados, e-mail, autenticação, web).
- Um servidor comprometido pode afetar centenas ou milhares de usuários.
- Controles: endurecimento (hardening), atualização, controle de acesso, monitoramento, backup.

---

## Unidade 4 – Rede
- LAN (local), WAN (longa distância), internet.
- Rede como “sistema circulatório”: dados trafegam; interceptação, invasão, DDoS.
- Componentes: switches, roteadores, firewalls; segmentação e monitoramento.

---

## Unidade 5 – Armazenamento
- Onde os dados ficam: discos locais, NAS, SAN, nuvem.
- Riscos: perda (falha, desastre), roubo (acesso não autorizado), vazamento.
- Backup, replicação, criptografia e política de retenção.

---

## Unidade 6 – Datacenter
- Ambiente físico onde ficam servidores e equipamentos de rede.
- Requisitos: energia (preferencialmente redundante), refrigeração, controle de acesso físico.
- Segurança física: biometria, câmeras, log de acesso; risco de alguém com acesso físico desligar, roubar ou adulterar.

---

## Unidade 7 – Serviços e monitoramento
- Serviços de rede: DNS, DHCP, diretório, e-mail, web.
- Monitoramento: uso de rede, status de servidores, atividades de usuários, falhas.
- Ambiente profissional não opera “no escuro”; monitorar para detectar antes de virar crise.

---

## Mentalidade profissional
Não se protege o que não se conhece. Quem não entende infraestrutura faz segurança às cegas. Mapear primeiro; depois identificar riscos e controles.

## Prática recomendada
- Desenhar um diagrama de infraestrutura de uma empresa pequena (5 estações, 1 servidor, 1 roteador, internet).
- Apontar em cada elemento: um risco e um controle recomendado.
- Pesquisar um caso real de falha de datacenter (energia, incêndio, acesso físico).

## Checklist de aprendizagem
- [ ] Listar cinco componentes típicos de infraestrutura de TI.
- [ ] Explicar por que “usuário é a maior superfície de ataque”.
- [ ] Diferenciar risco em estação de trabalho e em servidor.`,

  'p1-pensamento-computacional': `# Pensamento Computacional (72h)
## Ementa
Decomposição de problemas, reconhecimento de padrões, abstração e algoritmos. Desenvolvimento de raciocínio lógico e metódico para diagnóstico e solução de problemas técnicos — base para atuação em segurança.

## Objetivos gerais
- Aplicar decomposição, padrões, abstração e sequência lógica a problemas de TI e segurança.
- Reduzir reação por impulso e aumentar análise antes da ação.
- Formar mentalidade de investigação (causa e efeito).

## Objetivos específicos
- Decompor um problema grande em subproblemas verificáveis.
- Reconhecer padrões em falhas, ataques e comportamentos de sistema.
- Especificar um algoritmo (passo a passo) para diagnóstico de um problema típico.
- Explicar que “nada acontece por mistério” em sistemas computacionais.

---

## Unidade 1 – Decomposição de problemas
- Problemas grandes = soma de problemas menores.
- Exemplo: “Internet não funciona” → cabo/Wi-Fi? Placa de rede? IP? Gateway? DNS? Serviço do provedor?
- Profissional não diz “está sem internet”; pergunta e testa cada camada.

---

## Unidade 2 – Reconhecimento de padrões
- Falhas de rede, ataques e erros humanos se repetem.
- Padrões: erro de DNS, conflito de IP, falha de autenticação, varredura de portas.
- Quem reconhece padrões acelera diagnóstico; especialistas já viram aquele padrão antes.

---

## Unidade 3 – Abstração
- Ignorar o que não importa e focar no essencial.
- Em segurança: quem acessa? O que executa? Onde está o dado? Quem pode modificar?
- Abstrair do “milhão de detalhes” do computador para as perguntas que importam.

---

## Unidade 4 – Algoritmos (passo a passo)
- Algoritmo = sequência lógica de passos para atingir um objetivo.
- Exemplo de diagnóstico de rede: 1) Verificar cabo/Wi-Fi 2) Verificar IP 3) Verificar gateway 4) Ping no gateway 5) Testar DNS.
- Sem método, o técnico vira “tentador de sorte”; com método, reproduzível e documentável.

---

## Unidade 5 – Lógica causa e efeito
- Sistemas seguem lógica; se algo aconteceu, há causa técnica.
- Exemplos: usuário não acessa sistema → permissão ou credencial; computador lento → processo consumindo recurso; rede caiu → falha de conexão ou configuração.
- Investigação de incidente = aplicar causa e efeito a evidências (logs, tráfego, artefatos).

---

## Mentalidade profissional
O profissional analisa; o amador reage. Resolver problemas por etapas, sem pular fases e sem achismo, é sinal de maturidade técnica e essencial para segurança (resposta a incidentes, forense).

## Prática recomendada
- Escolher três problemas comuns (ex.: “não consigo imprimir”, “sistema lento”, “e-mail não abre”) e escrever um algoritmo de diagnóstico em até 10 passos.
- Analisar um caso real de incidente (reportagem ou estudo) e listar causa e efeito na linha do tempo.

## Checklist de aprendizagem
- [ ] Decompor “usuário não consegue acessar o sistema” em pelo menos 5 verificações.
- [ ] Dar um exemplo de padrão em falha de rede e um em ataque.
- [ ] Escrever um algoritmo de 5 passos para “verificar se um computador está na rede”.`,

  'p1-pesquisa-tecnologia-sociedade': `# Pesquisa, Tecnologia e Sociedade (72h)
## Ementa
Evolução da tecnologia, impacto na sociedade, ética profissional, legislação (com foco em proteção de dados) e consequências do mau uso da TI. Formação de visão crítica e responsável.

## Objetivos gerais
- Compreender a tecnologia como fenômeno social e não apenas técnico.
- Posicionar ética e responsabilidade como centrais na atuação em segurança.
- Conhecer marcos legais e consequências de falhas e abusos.

## Objetivos específicos
- Descrever evolução da computação e da internet e seus impactos.
- Diferenciar uso legítimo e abusivo do conhecimento técnico.
- Explicar aspectos relevantes da LGPD para profissionais de TI.
- Analisar casos reais em que falhas ou crimes digitais tiveram impacto social.

---

## Unidade 1 – Evolução tecnológica
- 1940–1960: computadores grandes, uso governamental e militar.
- 1970–1990: computador pessoal.
- 1990–2010: internet global, comércio e serviços online.
- 2010–hoje: nuvem, móveis, IoT, IA. Cada onda traz novos riscos e demandas de segurança.

---

## Unidade 2 – Tecnologia e sociedade
- Dependência de sistemas: bancos, saúde, transporte, energia, governo, comunicação.
- Quando sistemas falham, a sociedade sofre; segurança cibernética é tema estratégico mundial.
- Benefícios (acesso à informação, produtividade) e desafios (dependência, desinformação, crime).

---

## Unidade 3 – Ética na tecnologia
- Conhecimento técnico pode proteger ou prejudicar.
- Diferença entre profissional (White Hat) e criminoso (Black Hat) é ética e autorização.
- Códigos de conduta; responsabilidade ao reportar vulnerabilidades; uso de ferramentas apenas em contexto autorizado.

---

## Unidade 4 – Legislação e responsabilidade
- **LGPD (Lei 13.709/2018)**: proteção de dados pessoais no Brasil.
- Princípios: finalidade, necessidade, transparência, segurança, prevenção, não discriminação, responsabilização.
- Direitos do titular: acesso, correção, eliminação, portabilidade, revogação do consentimento.
- Bases legais para tratamento (consentimento, contrato, interesse legítimo, etc.).
- Multas e sanções; papel do DPO e da governança de dados.

---

## Unidade 5 – Impactos sociais e casos
- Vazamentos de dados; ataques a hospitais e infraestrutura; desinformação; crimes financeiros.
- Analisar casos: causa técnica/organizacional, impacto em pessoas e organizações, lições para segurança e governança.

---

## Mentalidade profissional
Conhecimento sem ética destrói carreiras. Segurança sem responsabilidade vira crime. O profissional protege sistemas e pessoas e atua dentro da lei e dos princípios éticos.

## Prática recomendada
- Ler os artigos 1º a 18 da LGPD e resumir objetivos, princípios e direitos do titular.
- Escolher um caso real de vazamento ou ataque com impacto social e redigir uma página: o que aconteceu, por quê e o que poderia ter sido feito.

## Checklist de aprendizagem
- [ ] Citar três princípios da LGPD.
- [ ] Explicar uma base legal para tratamento de dados além do consentimento.
- [ ] Descrever a diferença entre atuação ética e não ética em segurança da informação.`,

  'p1-projeto-integrador-diagnostico': `# Projeto Integrador – Diagnóstico de Soluções em TI (72h)
## Ementa
Integração do conhecimento do 1º período: levantamento de ambiente, identificação de problemas, análise de riscos e proposta de soluções técnicas. Produção de relatório técnico profissional.

## Objetivos gerais
- Aplicar em um caso (real ou simulado) as disciplinas do período.
- Produzir diagnóstico técnico claro e propostas viáveis.
- Desenvolver postura de “diagnosticar antes de agir”.

## Objetivos específicos
- Realizar levantamento de ambiente (estações, SO, rede, servidores, serviços).
- Identificar problemas técnicos e organizacionais.
- Classificar riscos (baixo, médio, alto) e priorizar ações.
- Redigir relatório com descrição, problemas, riscos e recomendações.

---

## Unidade 1 – Levantamento do ambiente
- Quantidade e tipo de computadores; sistemas operacionais e versões.
- Topologia de rede; equipamentos (roteador, switch, firewall se houver).
- Servidores e serviços (arquivos, e-mail, banco, diretório, etc.).
- Políticas e procedimentos existentes (senha, backup, acesso).
- Ferramentas: entrevistas, questionários, observação, coleta de configuração (onde permitido).

---

## Unidade 2 – Identificação de problemas
- Exemplos: usuários com privilégio de administrador; sistemas desatualizados; rede sem segmentação; ausência de backup; senhas fracas ou compartilhadas; falta de política de uso; ausência de logs ou monitoramento.
- Relacionar cada problema com conceitos das disciplinas (hardware, processo, infraestrutura, pensamento computacional, ética/lei).

---

## Unidade 3 – Análise de riscos
- **Risco** = probabilidade × impacto.
- Classificação típica: baixo (inconveniente), médio (afeta operação ou imagem), alto (vazamento, perda de dados, parada crítica).
- Priorizar: tratar primeiro os de alto impacto e maior probabilidade.

---

## Unidade 4 – Proposta de soluções
- Para cada problema prioritário: solução técnica ou organizacional viável.
- Exemplos: remover privilégios administrativos; implementar política de senha e MFA; atualizar sistemas; configurar backup automático; segmentar rede; ativar e revisar logs.
- Não propor o ideal inalcançável; propor o que pode ser implementado no contexto.

---

## Unidade 5 – Relatório técnico
- Estrutura: sumário; introdução/contexto; metodologia; descrição do ambiente; problemas identificados; análise de riscos; recomendações; conclusão; anexos se necessário.
- Linguagem clara, objetiva, sem achismo; evidências e referências quando possível.
- Relatório é o produto que comunica o diagnóstico e sustenta decisões.

---

## Mentalidade profissional
Antes de agir, diagnosticar. Isso separa o técnico do profissional. Relatório técnico é instrumento de trabalho em qualquer organização séria.

## Critérios de avaliação (sugestão)
- Completude do levantamento.
- Clareza na identificação de problemas e riscos.
- Viabilidade e coerência das recomendações.
- Qualidade da redação e da estrutura do relatório.

## Checklist de entrega
- [ ] Levantamento documentado (ambiente, equipamentos, serviços).
- [ ] Lista de problemas com breve justificativa.
- [ ] Matriz ou lista de riscos classificados.
- [ ] Recomendações priorizadas e factíveis.
- [ ] Relatório final revisado e formatado.`,

  // ========== 2º PERÍODO ==========
  'p2-banco-dados': `# Banco de Dados (72h)
## Ementa
Sistemas de armazenamento estruturado de dados: modelos, SGBD, linguagem SQL, segurança e auditoria. Ataques a bancos de dados (SQL Injection, acesso não autorizado) e controles.

## Objetivos gerais
- Compreender como os dados são armazenados, consultados e protegidos em SGBD.
- Escrever consultas SQL básicas e reconhecer vulnerabilidades que levam a SQL Injection.
- Aplicar controles de acesso, criptografia, backup e auditoria em ambiente de banco de dados.

## Objetivos específicos
- Descrever modelo relacional (tabelas, registros, campos, chaves).
- Usar SELECT, INSERT, UPDATE, DELETE e filtros (WHERE).
- Explicar SQL Injection (entrada maliciosa concatenada na query) e mitigação (consultas parametrizadas, least privilege).
- Listar boas práticas: usuário dedicado por aplicação, criptografia de dados sensíveis, backup e restauração testada, logs de acesso.

---

## Unidade 1 – Modelo de dados e SGBD
Banco de dados = conjunto organizado de dados. SGBD (MySQL, PostgreSQL, SQL Server, Oracle) controla armazenamento, consulta, integridade e permissões. Tabela = entidade; linha = registro; coluna = atributo; chave primária, chave estrangeira.

## Unidade 2 – Linguagem SQL
SELECT (consulta), INSERT (inserir), UPDATE (atualizar), DELETE (excluir). WHERE para filtrar. JOIN para relacionar tabelas. Agregações (COUNT, SUM, AVG). Ordem e agrupamento (ORDER BY, GROUP BY).

## Unidade 3 – SQL Injection e mitigação
SQL Injection: atacante injeta trechos de SQL em entrada do usuário; a aplicação concatena na query e o servidor executa. Resultado: leitura, alteração ou exclusão de dados; às vezes execução de comandos no SO. Mitigação: consultas parametrizadas/prepared statements; validação de entrada; princípio do menor privilégio; WAF e auditoria.

## Unidade 4 – Segurança em banco de dados
Controle de acesso por usuário e papel (role). Criptografia em repouso (TDE, column-level). Criptografia em trânsito (TLS para conexão). Backup regular e teste de restauração. Logs de acesso e alteração (auditoria). Dados valem dinheiro; proteger dados é proteger o coração do sistema.

## Mentalidade profissional
Grande parte dos ataques modernos busca dados, não apenas máquinas. Quem entende como os dados são armazenados e consultados sabe onde reforçar defesas e como investigar vazamentos.`,

  'p2-etica-cidadania-sustentabilidade': `# Ética, Cidadania e Sustentabilidade (72h)
## Ementa
Ética profissional, cidadania digital, sustentabilidade e responsabilidade social. Limites legais e morais no uso da tecnologia e na atuação em segurança da informação.

## Objetivos gerais
- Consolidar ética como base da atuação em segurança.
- Relacionar cidadania digital com direitos, deveres e impacto coletivo.
- Reconhecer responsabilidade ambiental e social das organizações de TI.

## Objetivos específicos
- Aplicar códigos de conduta e princípios éticos em cenários reais.
- Discutir limites entre teste autorizado e acesso não autorizado.
- Relacionar sustentabilidade com uso de recursos (energia, hardware, descarte) e políticas corporativas.

---

## Unidade 1 – Ética aplicada à TI
Diferença entre “poder fazer” e “dever fazer”. Uso de conhecimento apenas em contexto autorizado. Reporte responsável de vulnerabilidades. Confidencialidade e sigilo profissional. Consequências legais e de carreiras por má conduta.

## Unidade 2 – Cidadania digital
Direitos e deveres no ambiente digital. Privacidade, liberdade de expressão e limites. Combate à desinformação e ao uso malicioso de dados. Papel da educação e da política de uso aceitável.

## Unidade 3 – Sustentabilidade
Uso eficiente de energia e recursos em datacenters e equipamentos. Ciclo de vida de hardware; descarte e reciclagem. Sustentabilidade como critério em licitações e políticas de compra.

## Mentalidade profissional
Segurança sem ética vira crime. O profissional conhece limites, leis e consequências; atua com responsabilidade perante clientes, empregadores e sociedade.`,

  'p2-protocolos-redes': `# Protocolos de Redes (72h)
## Ementa
Modelo TCP/IP, endereçamento IP, DNS, DHCP, protocolos de aplicação (HTTP/HTTPS, SSH, FTP) e portas. Como os dados trafegam na rede e como ataques exploram protocolos.

## Objetivos gerais
- Compreender a pilha TCP/IP e o papel de cada camada.
- Explicar IP, máscara, gateway, DNS e DHCP em um cenário de rede.
- Associar portas e protocolos a serviços e a vetores de ataque.

## Objetivos específicos
- Desenhar o fluxo de uma requisição HTTP desde o cliente até o servidor (incluindo DNS e TCP).
- Diferenciar HTTP e HTTPS (criptografia, certificado).
- Listar portas comuns (80, 443, 22, 3389, 21, 25, 53) e riscos de serviços expostos.

---

## Unidade 1 – Modelo TCP/IP
Camada de aplicação (HTTP, DNS, etc.), transporte (TCP, UDP), internet (IP), rede/enlace (Ethernet, Wi-Fi). Encapsulamento; cada camada adiciona cabeçalho. IP cuida de endereçamento e roteamento; TCP de entrega confiável e ordenada.

## Unidade 2 – Endereço IP e máscara
IP identifica interface na rede. IPv4 (ex.: 192.168.1.10); máscara define a rede (ex.: /24 = 255.255.255.0). IP privado (RFC 1918) x público. Gateway = roteador que leva ao exterior.

## Unidade 3 – DNS e DHCP
DNS: resolve nome → IP (google.com → 142.250.x.x). Ataques: DNS spoofing, cache poisoning, DDoS a servidores DNS. DHCP: atribui IP, gateway e DNS automaticamente; riscos se servidor DHCP for malicioso ou não autorizado.

## Unidade 4 – HTTP/HTTPS e portas
HTTP (porta 80): texto em claro. HTTPS (443): TLS/SSL; confidencialidade e integridade; certificado para autenticidade do servidor. Portas = identificador do serviço (22 SSH, 3389 RDP, 21 FTP, 25 SMTP, 53 DNS). Cada porta aberta é possível vetor de ataque.

## Mentalidade profissional
Quem não entende protocolo não entende ataque. Perguntas centrais: quem está falando com quem? Por qual porta? Por qual protocolo? Respostas permitem detectar invasões e anomalias.`,

  'p2-seguranca-auditoria-sistemas': `# Segurança e Auditoria de Sistemas de Informação (72h)
## Ementa
Tríade CIA (Confidencialidade, Integridade, Disponibilidade), controle de acesso, políticas de segurança, auditoria de sistemas, logs e gestão de vulnerabilidades.

## Objetivos gerais
- Aplicar os pilares da segurança da informação (CIA) na análise de riscos e controles.
- Definir e revisar políticas de segurança e controle de acesso.
- Realizar auditoria de sistemas com base em evidências (logs, configurações, permissões).

## Objetivos específicos
- Explicar cada pilar da CIA e dar exemplos de violação.
- Aplicar princípio do menor privilégio em cenários de usuário e serviço.
- Interpretar logs de acesso e de segurança para identificar anomalias.
- Descrever ciclo de gestão de vulnerabilidades (identificar, priorizar, corrigir, reavaliar).

---

## Unidade 1 – Tríade CIA
**Confidencialidade**: só quem tem autorização acessa. Violação: vazamento, espionagem. **Integridade**: dados não são alterados de forma não autorizada. Violação: adulteração, malware. **Disponibilidade**: informação e sistemas acessíveis quando necessários. Violação: DDoS, ransomware, falha de hardware. Se um pilar falha, a segurança falha.

## Unidade 2 – Controle de acesso
Autenticação (quem é?), autorização (o que pode fazer?). Menor privilégio: cada usuário/serviço só tem o acesso necessário. Contas privilegiadas (admin) protegidas e monitoradas. Revogação ao sair da função.

## Unidade 3 – Políticas e auditoria
Políticas: senha (complexidade, troca, MFA), uso aceitável, backup, acesso remoto. Auditoria: verificar se políticas e controles estão em vigor (revisão de permissões, logs, configurações). Evidências objetivas; relatório de achados e recomendações.

## Unidade 4 – Logs e gestão de vulnerabilidades
Logs registram quem acessou, quando e o quê. Essenciais para detecção e resposta a incidentes e para auditoria. Vulnerabilidade = fraqueza explorável; gestão contínua: inventário, varredura, priorização (CVSS/risco), correção, nova varredura.

## Mentalidade profissional
Saber se um sistema está seguro exige método: políticas claras, controles implementados, auditoria e análise de logs. Ataques frequentemente exploram vulnerabilidades conhecidas e configurações fracas.`,

  'p2-sistema-operacional-i': `# Sistema Operacional I (72h)
## Ementa
Administração de sistemas operacionais (Windows e Linux): usuários e grupos, permissões e ACL, processos e serviços, atualizações e logs. Base para hardening e resposta a incidentes.

## Objetivos gerais
- Gerenciar usuários, permissões, processos e serviços em ambiente Windows e Linux.
- Aplicar atualizações de segurança e interpretar logs do sistema.
- Relacionar configurações do SO com vetores de ataque e defesa.

## Objetivos específicos
- Criar/remover usuários e grupos; atribuir permissões a arquivos e pastas (Linux: chmod/chown; Windows: ACL).
- Listar e analisar processos e serviços; identificar consumo anômalo.
- Descrever importância de atualizações e de desativar serviços desnecessários.
- Localizar e interpretar logs de login, erros e segurança.

---

## Unidade 1 – Usuários e grupos
Conta por pessoa/serviço; grupos para simplificar permissões. Nunca compartilhar conta de administrador; conta admin apenas para tarefas administrativas. Linux: /etc/passwd, /etc/group; Windows: Gerenciador de usuários, grupos locais/AD.

## Unidade 2 – Permissões
Linux: rwx (leitura, escrita, execução) para dono, grupo e outros; chmod, chown. Windows: ACL por usuário/grupo (ler, gravar, executar, etc.). Princípio do menor privilégio: só o necessário para a função.

## Unidade 3 – Processos e serviços
Processo = programa em execução; consome CPU e memória. Serviço = processo em segundo plano (servidor web, banco, agente). Listar processos (ps, tasklist); identificar suspeitos. Cada serviço ativo é possível vetor; desativar o que não é necessário.

## Unidade 4 – Atualizações e logs
Patches corrigem vulnerabilidades; atraso = janela de exploração. Política de atualização (teste em homologação, janela de manutenção). Logs: login (sucesso/falha), erros do sistema, eventos de segurança; ferramentas: journalctl, Event Viewer; retenção e análise.

## Mentalidade profissional
Segurança não é só ferramenta avançada; grande parte depende de usuários bem configurados, permissões adequadas e sistemas atualizados. Muitas invasões exploram configurações fracas.`,

  'p2-projeto-integrador-rede-local': `# Projeto Integrador – Rede Local (72h)
## Ementa
Planejamento, montagem e configuração de uma rede local corporativa: endereçamento IP, componentes (switch, roteador, servidor), serviços (DHCP, DNS, arquivos), testes de conectividade e segurança básica.

## Objetivos gerais
- Projetar e documentar uma rede local com endereçamento e serviços.
- Configurar equipamentos e estações; testar conectividade e diagnosticar falhas.
- Aplicar noções de segmentação e controle de acesso na rede local.

## Objetivos específicos
- Definir faixa de IP (ex.: 192.168.0.0/24), gateway e DNS.
- Configurar DHCP e (opcional) DNS interno; servidor de arquivos ou diretório.
- Usar ping, tracert, ipconfig/ifconfig para diagnóstico.
- Identificar problemas comuns: conflito de IP, cabo, DNS, firewall; propor correções.

---

## Unidade 1 – Planejamento
Requisitos: número de estações, servidores, necessidade de Wi-Fi, acesso à internet. Escolha de faixa privada (ex.: 192.168.0.0/24). Definição de gateway (roteador) e de servidores (IP fixo). Documentação do plano de endereçamento.

## Unidade 2 – Componentes e configuração
Switch (conexão interna), roteador (gateway e possível NAT), servidor (DHCP, DNS, arquivos). Configuração de IP estático em servidores; DHCP para estações. Teste de conectividade entre nós e para a internet.

## Unidade 3 – Diagnóstico
Conflito de IP: dois dispositivos com mesmo IP. Falha de cabo ou Wi-Fi. Gateway incorreto ou inacessível. DNS não responde. Firewall bloqueando. Metodologia: isolar camada por camada (física, IP, gateway, DNS, serviço).

## Unidade 4 – Segurança na rede local
Controle de quem pode conectar (802.1X, lista MAC onde aplicável). Segmentação (VLANs) para separar setores. Monitoramento básico (tráfego, dispositivos desconhecidos). Política de uso e de dispositivos pessoais.

## Mentalidade profissional
Rede local é a base da infraestrutura. Quem monta e diagnostica rede entende onde estão os fluxos de dados e onde aplicar controles. Projeto integrador consolida protocolos, SO e segurança em um único cenário prático.`,

  // ========== 3º PERÍODO ==========
  'p3-conectividade-redes': `# Conectividade de Redes (72h)
## Ementa
Roteamento, tabelas de rota, NAT, VLANs e VPN. Como redes se interconectam e como segmentar e proteger tráfego entre elas.

## Objetivos gerais
- Explicar roteamento e decisão de encaminhamento de pacotes.
- Configurar e interpretar NAT e VLANs em cenários corporativos.
- Descrever VPN como túnel seguro e casos de uso (acesso remoto, site-to-site).

## Objetivos específicos
- Ler uma tabela de rotas e explicar destino, gateway e interface.
- Diferenciar NAT estático e dinâmico; explicar por que vários hosts usam um IP público.
- Planejar VLANs para segmentar departamentos ou visitantes.
- Explicar VPN (criptografia, tunelamento) e quando usar.

---

## Unidade 1 – Roteamento
Roteador encaminha pacotes com base no destino (IP). Tabela de rotas: rede destino, gateway (próximo salto), interface, métrica. Roteamento estático x dinâmico (protocolos como OSPF, BGP em redes maiores).

## Unidade 2 – NAT
Network Address Translation: traduz IP privado ↔ IP público. Um IP público pode atender muitos hosts internos (NAT dinâmico). Reduz necessidade de IPs públicos; esconde topologia interna. Port forwarding para expor serviço interno.

## Unidade 3 – VLAN
Virtual LAN: rede lógica sobre infraestrutura física. Segmentar por departamento (VLAN 10 admin, 20 financeiro, 30 visitantes). Isolamento: tráfego de uma VLAN não cruza outra sem roteador/firewall. Melhora organização e segurança.

## Unidade 4 – VPN
Túnel criptografado sobre rede não confiável (internet). VPN de acesso remoto: usuário conecta à rede corporativa. Site-to-site: duas sedes conectadas. Protocolos: IPsec, SSL/TLS. Confidencialidade e integridade do tráfego.

## Mentalidade profissional
Quem entende roteamento e segmentação entende como o tráfego flui e onde colocar firewalls e políticas. VPN é peça central para trabalho remoto seguro.`,

  'p3-criptografia': `# Criptografia (72h)
## Ementa
Conceitos de texto claro e cifrado; criptografia simétrica e assimétrica; funções hash; certificados digitais e TLS/HTTPS. Uso em confidencialidade, integridade e autenticidade.

## Objetivos gerais
- Diferenciar criptografia simétrica e assimétrica e quando usar cada uma.
- Explicar hash (integridade, senhas) e certificados (autenticidade do servidor, HTTPS).
- Relacionar criptografia com proteção de dados em trânsito e em repouso.

## Objetivos específicos
- Citar algoritmos: simétricos (AES), assimétricos (RSA, ECC), hash (SHA-256).
- Explicar troca de chaves em TLS (hibrido: assimétrico para chave, simétrico para dados).
- Descrever papel da CA e do certificado no HTTPS.
- Aplicar noção de “não usar hash para criptografar” e “não armazenar senha em texto claro”.

---

## Unidade 1 – Fundamentos
Texto claro (legível) x texto cifrado (ilegível sem chave). Chave = segredo que controla cifração/decifração. Objetivos: confidencialidade, integridade, autenticidade, não repúdio.

## Unidade 2 – Criptografia simétrica
Uma chave para cifrar e decifrar. Rápida; usada para volume (disco, fluxo de comunicação). AES é padrão. Desafio: distribuir a chave com segurança; em TLS isso é resolvido com criptografia assimétrica na fase de handshake.

## Unidade 3 – Criptografia assimétrica
Par de chaves: pública (pode ser divulgada) e privada (secreta). Cifrar com a pública só o dono da privada decifra; assinar com a privada qualquer um verifica com a pública. RSA, ECC. Usada em TLS, assinaturas, e-mail seguro.

## Unidade 4 – Hash
Função que produz “resumo” de tamanho fixo; mesmo entrada → mesmo saída; pequena mudança → saída muito diferente; praticamente irreversível. Uso: integridade de arquivo, armazenamento de senha (com salt), assinaturas. SHA-256 comum.

## Unidade 5 – Certificados e HTTPS
Certificado digital vincula identidade (nome/domínio) a uma chave pública; assinado por uma CA (autoridade certificadora). No HTTPS, o servidor apresenta o certificado; o cliente verifica a CA e usa a chave pública para estabelecer sessão criptografada. Sem certificados, não há garantia de autenticidade do servidor.

## Mentalidade profissional
Segurança moderna depende de criptografia. Sem criptografia forte em trânsito (TLS) e em repouso (quando necessário), dados e senhas ficam expostos.`,

  'p3-empreendedorismo-inovacao': `# Empreendedorismo, Inovação e Economia Criativa (72h)
## Ementa
Visão de negócio, inovação e economia criativa aplicadas ao contexto de TI e segurança. Segurança como valor e como diferencial competitivo.

## Objetivos gerais
- Posicionar segurança como parte da estratégia e do valor da organização.
- Identificar oportunidades de inovação em produtos e processos de segurança.
- Relacionar economia criativa com soluções e modelos de negócio em tecnologia.

## Objetivos específicos
- Argumentar o retorno do investimento em segurança (evitar perdas, conformidade, confiança).
- Esboçar um plano simples de produto ou serviço ligado à segurança.
- Discutir tendências (nuvem, zero trust, SOC) como oportunidades de atuação.

---

## Unidade 1 – Segurança e negócio
Risco = impacto no negócio (financeiro, reputacional, operacional). Segurança não é custo puro; é habilitador de confiança e de conformidade. Comunicar em linguagem de gestão (risco, impacto, custo de não fazer).

## Unidade 2 – Inovação em segurança
Novas ameaças e novas defesas; zero trust, SOC, SOAR, threat intelligence. O profissional acompanha tendências e propõe melhorias. Inovação em processo (automação, resposta a incidentes) e em produto (ferramentas, serviços).

## Unidade 3 – Economia criativa
Modelos de negócio baseados em conhecimento e criatividade. Serviços de consultoria, pentest, treinamento, desenvolvimento de soluções. Sustentabilidade do negócio e diferenciação no mercado.

## Mentalidade profissional
Pensar como estrategista, não só como técnico. Segurança também é negócio: entender o que o cliente ou a organização valorizam permite priorizar e entregar valor.`,

  'p3-ethical-hacking': `# Ethical Hacking (36h)
## Ementa
Teste de invasão autorizado (pentest): reconhecimento, varredura, enumeração, exploração e pós-exploração. Metodologias e limites legais e éticos. Relatório de achados.

## Objetivos gerais
- Executar as fases de um pentest em ambiente controlado e autorizado.
- Pensar como atacante para identificar falhas antes que criminosos explorem.
- Documentar vulnerabilidades e recomendações em relatório técnico.

## Objetivos específicos
- Realizar reconhecimento (OSINT) e varredura de portas/serviços.
- Identificar vulnerabilidades conhecidas (CVE, configuração fraca, senha fraca).
- Explicar exploração controlada e pós-exploração (alcance do acesso).
- Redigir relatório com achados, risco e recomendações.

---

## Unidade 1 – Contexto legal e ético
Só testar com autorização explícita (contrato, termo). White Hat (legal, defensivo) x Black Hat (criminoso) x Gray Hat (ambiguidade). Responsabilidade por danos se ultrapassar escopo.

## Unidade 2 – Reconhecimento (OSINT)
Coleta de informações em fontes abertas: domínios, subdomínios, endereços IP, tecnologias, pessoas (redes sociais, vazamentos). Ferramentas e técnicas sem acesso direto ao alvo.

## Unidade 3 – Varredura e enumeração
Varredura de portas (Nmap); identificação de serviços e versões. Enumeração: usuários, shares, SNMP, etc. Objetivo: mapear superfície de ataque e pontos fracos.

## Unidade 4 – Exploração e pós-exploração
Exploração: usar vulnerabilidade para obter acesso (exploit, credencial, má configuração). Pós-exploração: escalar privilégio, persistência, movimento lateral, coleta de dados. Sempre dentro do escopo autorizado.

## Unidade 5 – Relatório
Descrição do escopo, metodologia, vulnerabilidades (com severidade), evidências, recomendações e conclusão. Linguagem clara para técnicos e gestores.

## Mentalidade profissional
“Se eu fosse tentar entrar, por onde começaria?” Essa pergunta guia o pentest. Objetivo é fortalecer a defesa, não provar que “quebrou tudo”.`,

  'p3-sistema-operacional-ii': `# Sistema Operacional II (72h)
## Ementa
Hardening de sistemas (Windows e Linux), controle avançado de permissões (GPO, sudo, SELinux/AppArmor), monitoramento, análise de logs e automação. Administração em nível corporativo.

## Objetivos gerais
- Aplicar hardening para reduzir superfície de ataque.
- Usar políticas de grupo (Windows) e controles avançados (Linux) para reforçar segurança.
- Monitorar sistemas e analisar logs para detecção de anomalias.

## Objetivos específicos
- Listar passos típicos de hardening (desativar serviços, remover software desnecessário, atualizar, restringir permissões).
- Configurar GPO para senha, bloqueio de USB, restrição de instalação.
- Interpretar logs de segurança (login, alteração de permissão, serviço) e correlacionar com incidentes.
- Usar ferramentas de administração remota e automação (scripts, Ansible/PowerShell onde aplicável).

---

## Unidade 1 – Hardening
Remover ou desativar serviços e portas desnecessários. Aplicar patches. Configurar firewall do SO. Política de senha e bloqueio de conta. Menor privilégio. Menor superfície = menos vetores de ataque.

## Unidade 2 – Controle avançado
Windows: GPO (Group Policy) para senha, bloqueio de mídia, software permitido/negado, configurações de segurança. Linux: sudo, grupos, SELinux/AppArmor (MAC). Objetivo: impor política de segurança de forma centralizada.

## Unidade 3 – Monitoramento e logs
Monitorar CPU, memória, disco, rede; alertas para limiares. Logs: onde estão (Linux: journalctl, /var/log; Windows: Event Viewer), o que registrar, retenção. Correlação para detectar sequência de ações maliciosas.

## Unidade 4 – Automação e acesso remoto
Scripts para tarefas repetidas (atualização, backup, deploy). Acesso remoto seguro (SSH, RDP com VPN ou restrição de IP). Gerenciamento de muitas máquinas: ferramentas de configuração e patch (WSUS, Ansible, etc.).

## Mentalidade profissional
Segurança não é só bloquear ataque; é manter sistemas organizados, atualizados e bem configurados. Grande parte dos problemas vem de configuração fraca e serviços desnecessários.`,

  'p3-projeto-integrador-trafego': `# Projeto Integrador – Interpretação de Tráfego de Rede (72h)
## Ementa
Estrutura de pacotes de rede, captura e análise de tráfego (ferramentas como Wireshark), protocolos comuns, detecção de anomalias e uso em investigação de incidentes.

## Objetivos gerais
- Capturar e filtrar tráfego de rede; identificar protocolos e fluxos.
- Interpretar cabeçalhos e payload para entender comunicação e detectar anomalias.
- Aplicar análise de tráfego em cenários de resposta a incidentes.

## Objetivos específicos
- Descrever estrutura de um pacote (cabeçalho, carga útil).
- Usar filtros (IP, porta, protocolo) em ferramenta de captura.
- Identificar tráfego HTTP, HTTPS, DNS, e comportamento suspeito (varredura, C2, exfiltração).
- Redigir breve análise de um captura (o que aconteceu, evidências).

---

## Unidade 1 – Pacotes e captura
Pacote = cabeçalho (endereços, portas, protocolo, controle) + payload (dados). Captura passiva (espelho de porta, tap); ferramentas: Wireshark, tcpdump. Filtros por IP, porta, protocolo, string.

## Unidade 2 – Protocolos na prática
Reconhecer no tráfego: HTTP (texto), HTTPS (criptografado), DNS (consultas e respostas), FTP, SSH. Entender handshake TCP e estabelecimento de sessão. DNS como alvo (poisoning, exfiltração via DNS).

## Unidade 3 – Anomalias e ataques
Padrões suspeitos: muitas conexões para uma porta (varredura), tráfego para IPs desconhecidos (C2, exfiltração), volume anormal (DDoS), tentativas repetidas de login. Correlação com outros indicadores (logs, alertas).

## Unidade 4 – Investigação de incidentes
Usar captura para responder: quem se comunicou com quem, quando, que dados. Reconstruir linha do tempo. Preservar evidência (cópia da captura, hash, documentação).

## Mentalidade profissional
Quem lê tráfego entende o que está acontecendo na rede. Análise de pacotes é fundamental para SOC, resposta a incidentes e forense de rede.`,

  // ========== 4º e 5º PERÍODOS – Conteúdo completo resumido em formato elite ==========
  'p4-cybersecurity': `# Cybersecurity (72h)
## Ementa
Estratégia da segurança cibernética: ameaças (malware, phishing, DDoS, etc.), superfície de ataque, defesa em profundidade, monitoramento e gestão contínua. Papel de tecnologia, processos e pessoas.

## Objetivos gerais
- Compreender o ecossistema de ameaças e tipos de ataques comuns.
- Aplicar conceito de defesa em profundidade e reduzir superfície de ataque.
- Integrar monitoramento e resposta em um modelo de segurança contínua.

## Conteúdo completo (unidades)
## Objetivos específicos
- Listar e descrever ameaças: malware, phishing, engenharia social, DDoS, insider threat.
- Mapear superfície de ataque (portas, serviços, aplicações, usuários) e propor redução.
- Desenhar camadas de defesa (perímetro, rede, endpoint, dados, aplicação).
- Explicar papel do monitoramento (SIEM, logs, tráfego) na detecção e resposta.

---

## Unidade 1 – Ameaças cibernéticas
- **Malware**: vírus, trojan, ransomware, spyware; vetores (e-mail, download, vulnerabilidade, USB).
- **Phishing e engenharia social**: persuasão para obter credenciais ou acesso; treinamento e conscientização.
- **Força bruta e credential stuffing**: proteção com MFA, bloqueio, política de senha.
- **DDoS**: negação de serviço por sobrecarga; mitigação com redundância, CDN, filtros.
- **Insider threat**: risco interno; controle de acesso, monitoramento, desligamento de contas.

---

## Unidade 2 – Superfície de ataque
- Tudo que está exposto pode ser alvo: portas abertas, serviços desnecessários, aplicações web, usuários (phishing).
- Inventário de ativos e de pontos de entrada; minimizar o exposto (hardening, segmentação).
- Quanto maior a superfície, maior o esforço de defesa e o risco.

---

## Unidade 3 – Defesa em profundidade
- Nenhuma tecnologia sozinha resolve; várias camadas: perímetro (firewall), rede (segmentação), endpoint (antimalware, EDR), dados (criptografia), aplicação (segurança no código).
- Se uma camada falhar, as outras podem conter o ataque.
- Políticas, treinamento e processos fazem parte da defesa.

---

## Unidade 4 – Monitoramento e resposta
- **SIEM**: agregação de logs e eventos; correlação e alertas.
- Tráfego de rede, comportamento de usuário e de sistemas; detecção de anomalias.
- Resposta a incidentes: identificar, conter, erradicar, recuperar, documentar.

---

## Unidade 5 – Gestão contínua de segurança
- Políticas (senha, uso aceitável, backup, acesso remoto); revisão periódica.
- Treinamento de usuários; testes (pentest, simulação de phishing).
- Melhoria contínua: novos riscos surgem; segurança nunca fica pronta.

---

## Mentalidade profissional
Segurança é processo, não projeto com data de fim. Tecnologia, processos e pessoas devem estar alinhados.

## Prática recomendada
- Mapear a superfície de ataque de um ambiente pequeno (estações, servidor, portas).
- Listar três ameaças e uma camada de defesa para cada uma.

## Checklist de aprendizagem
- [ ] Citar cinco tipos de ameaça cibernética e uma mitigação para cada.
- [ ] Explicar defesa em profundidade com exemplo de três camadas.
- [ ] Descrever o papel do monitoramento na detecção de incidentes.

---`,

  'p4-teste-intrusao-redes': `# Práticas de Teste de Intrusão em Redes (72h)
## Ementa
Pentest em redes: planejamento, reconhecimento, varredura, enumeração, exploração, pós-exploração e relatório. Uso de ferramentas e metodologias em ambiente autorizado.

## Objetivos e conteúdo
Aplicar na prática as fases do Ethical Hacking em rede: mapear hosts e serviços, identificar vulnerabilidades (CVE, configuração, credenciais), explorar de forma controlada, avaliar impacto (pós-exploração) e documentar em relatório técnico com severidade e recomendações. Escopo e regras de engajamento; limites legais e éticos.`,

  'p4-protecao-perimetro': `# Proteção de Perímetro (72h)
## Ementa
Firewall, IDS, IPS, segmentação de rede e DMZ. Primeira linha de defesa entre rede interna e externa.

## Objetivos e conteúdo
Compreender e configurar firewall (regras de permitir/bloquear por IP, porta, protocolo). Diferenciar IDS (detecção, alerta) e IPS (detecção e bloqueio). Aplicar segmentação (VLANs, zonas) para limitar blast radius. DMZ para serviços públicos (web, e-mail) isolados da rede interna. Políticas e hardening de equipamentos de perímetro.`,

  'p4-seguranca-mobile-iot': `# Segurança em Redes Móveis e IoT (72h)
## Ementa
Riscos em dispositivos móveis e na Internet das Coisas; vetores de ataque, botnets, boas práticas e controles.

## Objetivos e conteúdo
Descrever ameaças em redes móveis (2G a 5G) e em dispositivos IoT (câmeras, sensores, wearables). Vulnerabilidades comuns: senha padrão, firmware desatualizado, falta de criptografia. Botnets de IoT (Mirai e variantes). Boas práticas: alterar senha padrão, atualizar firmware, isolar IoT em rede dedicada, monitorar. Políticas de BYOD e MDM.`,

  'p4-tratamento-resposta-incidentes': `# Tratamento e Resposta a Incidentes (72h)
## Ementa
Ciclo de resposta a incidentes: identificação, contenção, erradicação, recuperação e lições aprendidas. Planos, equipes e comunicação.

## Objetivos e conteúdo
Identificar incidente (alertas, logs, usuários). Conter (isolar host, bloquear IP, desligar serviço) para evitar propagação. Erradicar (remover malware, corrigir vulnerabilidade, trocar credenciais). Recuperar (restaurar de backup, validar integridade). Analisar pós-incidente (causa raiz, melhorias). Documentar e comunicar. Planos de resposta e runbooks; papel do SOC e da liderança.`,

  'p4-projeto-integrador-defesa': `# Projeto Integrador – Defesa e Resposta a Incidentes (36h)
## Ementa
Simulação de ambiente corporativo com incidente de segurança: detecção, análise, contenção, erradicação e relatório. Integração de cybersecurity, pentest, perímetro e resposta a incidentes.

## Objetivos e conteúdo
Ambiente simulado (servidores, rede, firewall, estações). Cenário de ataque (invasão, malware ou exfiltração). Equipe detecta (monitoramento, logs, tráfego), analisa, contém e erradica. Produz relatório: cronologia, causa, impacto, ações tomadas, recomendações. Prática de trabalho em equipe e comunicação sob pressão.`,

  'p5-analise-malwares': `# Análise de Malwares (36h)
## Ementa
Tipos de malware (vírus, trojan, ransomware, spyware); vetores de infecção; técnicas de ofuscação; análise estática e dinâmica (sandbox); relatório de análise.

## Objetivos e conteúdo
Identificar como malware chega (e-mail, download, vulnerabilidade, USB). Análise estática: strings, imports, estrutura do binário, sem executar. Análise dinâmica: executar em ambiente controlado (sandbox/VM isolada); observar arquivos criados, registro, rede, processos. Documentar comportamento (IOCs, artefatos) para detecção e resposta. Ética e ambiente seguro (nunca em rede de produção).`,

  'p5-pericia-forense': `# Análise e Perícia Forense Computacional (72h)
## Ementa
Coleta e preservação de evidências digitais; imagem forense; análise de mídia, arquivos e logs; reconstrução de linha do tempo e relatório pericial com validade técnica e jurídica.

## Objetivos e conteúdo
Princípios: não alterar original; documentar toda ação; cadeia de custódia. Criar imagem forense (bit-a-bit) antes de analisar. Análise de arquivos (incluindo apagados), sistema de arquivos, registro (Windows), logs. Reconstruir sequência de eventos (quem, quando, o quê). Relatório pericial: metodologia, evidências, conclusões. Noções de admissibilidade em processo.`,

  'p5-auditoria-conformidade': `# Auditoria e Conformidade em Segurança Cibernética (72h)

## Ementa
Normas (ISO 27001, LGPD, GDPR), políticas de segurança, controles técnicos e administrativos, avaliação de riscos e relatório de auditoria. Governança e conformidade.

## Objetivos gerais
- Interpretar requisitos de ISO 27001, LGPD e GDPR e aplicá-los no dia a dia.
- Definir e revisar políticas; mapear controles para requisitos.
- Realizar avaliação de riscos e auditoria com evidências, achados e plano de ação.
- Compreender o papel do auditor e do DPO.

---

## Como a ISO 27001 funciona (ensino de especialista)

A **ISO/IEC 27001** é a norma internacional que define requisitos para um **Sistema de Gestão de Segurança da Informação (SGSI)**. Não é uma lista solta de “boas práticas”: é um **sistema** com contexto, liderança, planejamento, operação, avaliação e melhoria.

### Ciclo PDCA
- **Plan (Planejar)**: definir escopo, política, análise de riscos e decisão sobre quais controles (Anexo A) aplicar.
- **Do (Fazer)**: implementar os controles e operar o SGSI.
- **Check (Verificar)**: monitorar, fazer auditoria interna, análise crítica pela direção.
- **Act (Agir)**: tratar não conformidades e melhorar continuamente.

### Estrutura da norma (cláusulas 4 a 10)
- **4 – Contexto**: quem é a organização, partes interessadas, escopo do SGSI.
- **5 – Liderança**: política de segurança, papéis (ex.: dono do SGSI), responsabilidades.
- **6 – Planejamento**: riscos (identificação, análise, avaliação, tratamento); objetivos de segurança.
- **7 – Suporte**: recursos, competência, conscientização, comunicação, documentação.
- **8 – Operação**: implementação dos controles (Anexo A), gestão de mudanças.
- **9 – Avaliação**: monitoramento, auditoria interna, análise crítica pela direção.
- **10 – Melhoria**: não conformidades, ações corretivas, melhoria contínua.

### Anexo A – Controles
O Anexo A traz uma lista de controles organizados em domínios (organizacional, pessoas, físico, tecnológico). A organização **não precisa** aplicar todos; faz a **análise de riscos** e justifica quais controles aplica e quais não (statement of applicability – SoA).

---

## Exemplos práticos (como professor especialista)

### Exemplo 1 – Política de senha (controle A.5.16)
**Requisito (resumido)**: regras de autenticação por senha (complexidade, troca, proteção).  
**Prática**: política aprovada pela direção: mínimo 12 caracteres, mistura de tipos, troca a cada 90 dias (ou uso de SSO/MFA que dispense troca periódica), bloqueio após 5 tentativas, sem reutilização das últimas 5. Treinamento para usuários; auditoria de contas (verificar contas sem login há 90 dias).

### Exemplo 2 – Backup (controle A.8.13)
**Requisito**: informação deve ser protegida por backup; testes de restauração.  
**Prática**: backup diário automatizado (incremental/diferencial + full semanal); retenção definida (ex.: 30 dias); backup em local ou mídia separada; **teste de restauração** mensal com registro (quem testou, quando, resultado). Em auditoria, o auditor pede: política de backup, logs de backup e **evidência de teste de restauração**.

### Exemplo 3 – Gestão de vulnerabilidades (controle A.8.8)
**Requisito**: vulnerabilidades técnicas devem ser identificadas e tratadas.  
**Prática**: varredura mensal (ou contínua) com ferramenta (ex.: Nessus, OpenVAS); classificação por criticidade (CVSS); prazo para correção (ex.: crítico 7 dias, alto 30 dias); registro de exceção quando patch não for possível (mitigação alternativa, risco aceito por escrito). Auditor pede: relatório de varredura, matriz de vulnerabilidades e evidência de correção ou exceção.

### Exemplo 4 – Auditoria interna (cláusula 9.2)
**Requisito**: auditorias internas em intervalos planejados para verificar se o SGSI está conforme a norma e implementado.  
**Prática**: plano de auditoria anual (quais processos/áreas, quando, quem); auditores com independência (não auditam o próprio processo); relatório de achados (conformidade, não conformidade, oportunidade de melhoria); análise crítica pela direção com base nos relatórios.

---

## LGPD e GDPR – em poucas linhas
- **LGPD (Brasil)**: proteção de dados pessoais; bases legais (consentimento, legítimo interesse, etc.); direitos do titular (acesso, correção, eliminação, portabilidade); ANPD aplica sanções. Controles de segurança (ISO 27001) ajudam a atender ao princípio de segurança.
- **GDPR (Europa)**: aplicável a dados de residentes na UE; princípios semelhantes; multas altas; DPO obrigatório em certos casos. Empresas que processam dados na UE precisam mapear base legal, direitos e medidas técnicas/organizacionais.

---

## Papel do auditor e do DPO
- **Auditor (interno ou externo)**: verifica se o SGSI está implementado e em conformidade com a norma; coleta evidências (documentos, entrevistas, amostras); emite relatório com achados (conformidade/não conformidade). Não implementa; avalia.
- **DPO (Data Protection Officer)**: focado em proteção de dados (LGPD/GDPR); canal entre organização, titulares e ANPD; orienta sobre tratamento de dados pessoais, bases legais e resposta a incidentes. Pode ser interno ou externo.

---

## Atalho ISO 27001
Para uma **referência rápida** da ISO 27001 (estrutura, Anexo A, checklist e paralelo LGPD/GDPR), use a seção **Atalhos** desta base de conhecimento e busque por **ISO 27001** ou categoria **Conformidade / ISO**.

---

## Mentalidade profissional
Conformidade não é “documento para mostrar na auditoria”. É **governança**: política clara, riscos tratados, evidências de que os controles funcionam. O profissional de cybersecurity que entende ISO 27001 e LGPD/GDPR consegue dialogar com compliance, jurídico e direção e propor ações factíveis.

## Checklist de aprendizagem
- [ ] Explicar o ciclo PDCA na ISO 27001.
- [ ] Dar um exemplo prático de controle do Anexo A (ex.: backup, senha, vulnerabilidades).
- [ ] Diferenciar papel do auditor e do DPO.
- [ ] Citar três princípios da LGPD e como a ISO 27001 apoia a conformidade.`,

  'p5-cyberwar': `# Cyberwar (36h)
## Ementa
Guerra cibernética: atores estatais, espionagem, ataques a infraestrutura crítica, operações de influência e defesa cibernética nacional.

## Objetivos e conteúdo
Definir guerra cibernética e operações cibernéticas ofensivas/defensivas. Espionagem e roubo de propriedade intelectual e dados de Estado. Ataques a energia, saúde, financeiro, transporte. Papel de agências e forças de defesa. Noções de direito internacional e atribuição. Impacto geopolítico e na segurança nacional.`,

  'p5-mitigacao-vulnerabilidades': `# Mitigação de Vulnerabilidades (72h)
## Ementa
Identificação (varredura, pentest, auditoria), classificação (CVSS, risco), correção (patch, configuração, hardening) e gestão contínua de vulnerabilidades.

## Objetivos e conteúdo
Fonte de vulnerabilidades: software desatualizado, má configuração, senha fraca. Varredura automatizada e análise manual. Priorizar por criticidade e contexto. Corrigir: atualizar, aplicar hardening, segmentar. Reavaliar após correção. Programa contínuo de gestão de vulnerabilidades (VM). Integração com aquisição e desenvolvimento (secure SDLC).`,

  'p5-projeto-integrador-final': `# Projeto Integrador Final – Segurança Cibernética e Forense (36h)
## Ementa
Cenário integrado: infraestrutura simulada sofre incidente (invasão e/ou malware). Detecção, investigação (incluindo análise de tráfego e forense), contenção, erradicação, recuperação e relatório final. Síntese do curso.

## Objetivos e conteúdo
Ambiente: rede, servidores, estações, firewall, possivelmente honeypot. Incidente injetado (ex.: ransomware, exfiltração). Equipe: detecta (SIEM, tráfego, logs), investiga (forense, malware), contém, erradica, recupera. Relatório executivo e técnico: cronologia, causa raiz, impacto, IOCs, recomendações. Apresentação e defesa. Consolida competências de analista de segurança, SOC, resposta a incidentes e forense.`,
};
