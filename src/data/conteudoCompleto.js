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
Sistemas de armazenamento estruturado de dados: modelos, SGBD, linguagem SQL, segurança e auditoria. Ataques a bancos de dados (SQL Injection, acesso não autorizado) e controles. Módulos do fundamento ao avançado: modelo relacional, SQL profissional, estrutura (normalização, índices), SQL Injection, defesa e segurança corporativa.

## Objetivos gerais
- Compreender como os dados são armazenados, consultados e protegidos em SGBD.
- Escrever consultas SQL e reconhecer vulnerabilidades que levam a SQL Injection.
- Aplicar controles de acesso, criptografia, backup e auditoria em ambiente de banco de dados.
- Pensar como atacante (exploração) e como defensor (prepared statements, menor privilégio, WAF, auditoria).

## Objetivos específicos
- Descrever modelo relacional (tabela, linha, coluna, chave primária, chave estrangeira) e SGBD.
- Usar SELECT, INSERT, UPDATE, DELETE, WHERE, JOIN, ORDER BY, GROUP BY e funções agregadas.
- Explicar SQL Injection (tipos: login, UNION, error-based, blind) e ferramentas (SQLMap).
- Aplicar defesa: consultas parametrizadas, validação de entrada, menor privilégio, WAF, logs.
- Descrever segurança avançada: criptografia em repouso e em trânsito, roles, backup (full/incremental/diferencial), auditoria.

---

## Módulo 1 — Fundamentos de dados / Modelo de dados e SGBD (10h)

Aqui você entende como a informação nasce dentro de um sistema. Sem isso, SQL vira só comando decorado.

### O que é um banco de dados
Um banco de dados é um sistema estruturado de armazenamento de informação. Exemplo simples: tabela **usuarios** com colunas id, nome, email, senha; cada linha representa um registro real do mundo.

### O que é um SGBD
SGBD = Sistema de Gerenciamento de Banco de Dados. Software que controla armazenamento, recuperação, acessos, integridade, consultas e logs. Exemplos: PostgreSQL, MySQL/MariaDB, SQL Server, Oracle.

### Estrutura do modelo relacional (Codd, IBM – 1970)
Organiza dados em **relações (tabelas)**. Tabela = entidade; linha = registro; coluna = atributo.

### Chave primária (PRIMARY KEY)
Identifica cada registro de forma única; nunca pode repetir (ex.: \`id_usuario\`).

### Chave estrangeira (FOREIGN KEY)
Liga duas tabelas. Ex.: tabela **pedidos** com \`id_usuario\` apontando para **usuarios** — cria relacionamento entre dados.

### Integridade
NOT NULL, UNIQUE, FOREIGN KEY: o banco garante consistência (ex.: pedido não pode apontar para usuário inexistente).

### Armazenamento físico
Dados em arquivos binários, páginas de memória, blocos de disco; data pages; índices internos para localizar registros rapidamente.

### Laboratório 1
Instalar PostgreSQL ou MySQL. Criar banco: \`CREATE DATABASE empresa;\` Criar tabela: \`CREATE TABLE usuarios (id SERIAL PRIMARY KEY, nome VARCHAR(100), email VARCHAR(100), senha VARCHAR(255));\` Inserir: \`INSERT INTO usuarios (nome,email,senha) VALUES ('Ana','ana@email.com','123');\` Consultar: \`SELECT * FROM usuarios;\`

### Visão de segurança
Cada banco contém credenciais, dados pessoais, financeiros, histórico — um tesouro digital. Atacante que entra pode copiar dados; muitos vazamentos famosos começaram por falha em banco ou aplicação web.

### Exercício do Módulo 1
Criar banco \`empresa\`, três tabelas (usuarios, clientes, pedidos), relacionar clientes com pedidos por chave estrangeira, inserir 5 registros em cada tabela.

---

## Módulo 2 — SQL na prática / Linguagem SQL (12h)

SQL = Structured Query Language; linguagem universal de consulta a bancos.

### SELECT — consulta
\`SELECT * FROM usuarios;\` — todas as colunas. \`SELECT nome, email FROM usuarios;\` — colunas específicas (desempenho e segurança).

### WHERE — filtro
\`SELECT * FROM usuarios WHERE nome = 'Ana';\` Operadores: =, >, <, <>.

### INSERT, UPDATE, DELETE
\`INSERT INTO usuarios (nome,email,senha) VALUES ('Carlos','c@email.com','123');\` \`UPDATE usuarios SET email='novo@email.com' WHERE id=2;\` \`DELETE FROM usuarios WHERE id=2;\` Sem WHERE em UPDATE/DELETE altera ou apaga toda a tabela — erro crítico em produção.

### ORDER BY
\`SELECT * FROM usuarios ORDER BY nome;\` ou \`ORDER BY nome DESC;\`

### Funções agregadas
\`SELECT COUNT(*) FROM usuarios;\` \`SELECT SUM(valor) FROM pedidos;\` \`SELECT AVG(valor) FROM pedidos;\`

### JOIN — cruzar tabelas
\`SELECT usuarios.nome, pedidos.valor FROM usuarios JOIN pedidos ON usuarios.id = pedidos.id_usuario;\`

### Agrupamento
\`SELECT cliente_id, SUM(valor) FROM pedidos GROUP BY cliente_id;\`

### Laboratório 2
Criar tabelas clientes e pedidos, inserir dados, praticar JOIN e agregações. Visão de cibersegurança: toda aplicação faz consultas SQL; se mal construídas, surgem vulnerabilidades — a mais famosa é SQL Injection (coração do próximo módulo).

---

## Módulo 3 — Estrutura profissional de banco (10h)

### Normalização
Evita redundância. Exemplo ruim: cliente com telefone, telefone2, telefone3. Correto: tabela clientes + tabela telefones.

### Índices
\`CREATE INDEX idx_email ON usuarios(email);\` — aceleram buscas; sem índice a consulta fica lenta.

### Integridade
NOT NULL, UNIQUE, FOREIGN KEY garantem consistência.

---

## Módulo 4 — SQL Injection e exploração de banco (12h)

Um dos ataques mais antigos da internet e ainda muito eficaz. Grande parte dos vazamentos ocorreu assim: o atacante engana a aplicação para executar SQL malicioso.

### Como nasce um SQL Injection
Login monta: \`SELECT * FROM usuarios WHERE email = 'entrada_usuario' AND senha = 'entrada_usuario'\`. Se o atacante digitar \`' OR 1=1 --\`, a consulta vira \`WHERE email='' OR 1=1 --\`; 1=1 é sempre verdadeiro — o banco retorna todos os usuários e a autenticação quebra.

### Por que acontece
Concatenar dados do usuário na consulta: \`query = "SELECT * FROM usuarios WHERE email='"+email+"'"\` — o banco não distingue dado de comando.

### Tipos de SQL Injection
- **Login**: quebra autenticação (payload \`' OR '1'='1\`).
- **UNION**: extrai dados de outras tabelas (\`UNION SELECT usuario,senha FROM admin --\`).
- **Error-based**: erros do banco revelam tabelas, estrutura, colunas.
- **Blind**: sistema não mostra erro; atacante faz perguntas lógicas (\`AND 1=1\` / \`AND 1=2\`) e infere dados.

### O que o ataque pode fazer
Roubar banco inteiro, alterar ou apagar tabelas, criar usuários admin, às vezes executar comandos no SO.

### Ferramenta: SQLMap
\`sqlmap -u "http://site.com/produto?id=1"\` — testa vulnerabilidades automaticamente; usada por pentesters para testar antes de um invasor real.

### Sinais de sistema vulnerável
Mensagens de erro SQL na tela (ex.: "You have an error in your SQL syntax", ORA-01756, SQLSTATE[42000]); adicionar apóstrofo \`'\` e o sistema quebrar.

### Laboratório
Ambiente de teste: MySQL, XAMPP, DVWA (Damn Vulnerable Web Application). Criar login ligado ao banco, testar \`' OR 1=1 --\` e observar o comportamento.

---

## Módulo 5 — Defesa contra SQL Injection (12h)

O banco precisa distinguir **dados** de **comandos**. Quando feito corretamente, SQL Injection praticamente desaparece.

### Consultas parametrizadas (Prepared Statements)
Nunca concatenar entrada do usuário. **Errado:** \`query = "SELECT * FROM users WHERE email='"+email+"'"\`. **Correto:** \`SELECT * FROM users WHERE email = ?\` — estrutura fixa, valor enviado separadamente; mesmo \`' OR 1=1 --\` é tratado só como texto.

### Validação de entrada
Aceitar apenas o esperado: idade → só números; e-mail → formato de e-mail. Reduz superfície de ataque.

### Princípio do menor privilégio
Aplicação não deve usar usuário root. Criar usuário limitado: \`CREATE USER app_user; GRANT SELECT, INSERT ON usuarios TO app_user;\` — se houver ataque, o dano fica limitado.

### Separação de usuários
Usuário da aplicação, de administração e de backup — cada um com permissões específicas.

### WAF (Web Application Firewall)
Filtra requisições HTTP; bloqueia padrões suspeitos. Exemplos: ModSecurity, Cloudflare, AWS WAF. Camada adicional; não substitui código seguro.

### Logs e auditoria
Registrar quem acessou, quando, quais consultas e alterações — essencial para investigação e compliance.

### Laboratório
Sistema de login com consultas parametrizadas, validação e usuário de banco limitado; testar \`' OR 1=1 --\` — o ataque não deve funcionar. Segurança é arquitetura: defesa nasce no projeto.

---

## Módulo 6 — Segurança avançada de banco (16h)

Território de segurança corporativa: dados valem mais que os servidores.

### Criptografia em repouso
Dados protegidos no disco (ex.: TDE — Transparent Data Encryption em SQL Server, Oracle, PostgreSQL). Se alguém roubar o HD, os dados continuam criptografados.

### Criptografia em trânsito
Conexão aplicação–banco com TLS/SSL; sem isso a senha trafega em texto (sniffing).

### Controle de acesso
Roles e permissões: Administrador, Analista, Aplicação, Auditoria. Ex.: \`CREATE ROLE analista; GRANT SELECT ON clientes TO analista;\`

### Segurança de senhas
Nunca texto simples; armazenar hash (bcrypt, argon2, pbkdf2). Comparar hash no login.

### Backup profissional
**Full** (todo o banco), **incremental** (o que mudou desde o último), **diferencial** (desde o último full). Regra de ouro: backup que nunca foi testado não é backup — sempre testar restauração.

### Logs de auditoria
Registrar logins, consultas, alterações, exclusões — detecção de ataques, investigação, normas.

### Proteção de dados sensíveis
CPF, cartão, endereço, dados médicos: criptografia em nível de coluna ou segmentação de ambientes (dev/teste/produção).

### Monitoramento
Comportamento anômalo (ex.: usuário que normalmente consulta 10 registros tenta baixar milhões) — alerta.

### Laboratório do módulo
Banco \`seguranca_empresa\`, tabela usuarios (id, nome, email, senha_hash); hash de senha, usuário com privilégio limitado, backup e logs.

---

## Laboratório final (projeto)

Construir sistema simples: banco \`empresa\`, tabelas usuarios, clientes, pedidos. Testar: consultas SQL, controle de acesso, criptografia, tentativa de SQL Injection e correção da vulnerabilidade.

---

## Mentalidade de profissional de elite

Hackers atacam **dados** — dinheiro, identidade, segredos corporativos. Quem entende banco: investiga vazamentos, descobre ataques, protege aplicações, detecta manipulação. Em ataques famosos (Sony, Yahoo, Equifax) o problema muitas vezes não foi vírus avançado, e sim falha em banco ou aplicação web — uma porta pequena derrubou castelos gigantes. O coração de qualquer sistema digital é o dado; protegê-lo é proteger toda a organização.

## Prática recomendada
- Instalar PostgreSQL ou MySQL em VM; criar usuário com privilégio mínimo; escrever consulta parametrizada e explicar por que evita SQL Injection; configurar backup e testar restauração.

## Checklist de aprendizagem
- [ ] Explicar modelo relacional (tabela, chave primária, chave estrangeira) e papel do SGBD.
- [ ] Escrever SELECT, INSERT, UPDATE, DELETE, WHERE, JOIN e uma agregação (COUNT/SUM/AVG).
- [ ] Descrever como nasce um SQL Injection e um tipo (login, UNION, blind).
- [ ] Aplicar defesa: prepared statement, validação, menor privilégio; citar WAF e auditoria.
- [ ] Diferenciar criptografia em repouso e em trânsito; listar tipos de backup e a regra de testar restauração.`,

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

### 2 — Limites: teste autorizado x não autorizado
**Autorizado**: escopo por escrito, autorização do dono do ativo. **Não autorizado**: acessar sistema ou dado sem permissão é crime (Art. 154-A CP). **Gray area**: teste sem documentar ou em sistema de terceiro “para ajudar” — não defensável.

### 3 — Cidadania digital
**Direitos**: privacidade, LGPD, liberdade de expressão na lei. **Deveres**: não difamar, não invadir, não usar dados alheios sem base legal. **Desinformação**: verificar fonte. **Uso aceitável**: política da organização sobre e-mail, internet, dispositivos.

### 4 — Sustentabilidade em TI
**Energia**: eficiência em datacenters (PUE, virtualização). **Hardware**: ciclo de vida, descarte e reciclagem; dados apagados antes de descarte. **Compras**: critérios de sustentabilidade em licitações.

### 5 — Responsabilidade
**Cliente**: entregar o combinado, não expor dados. **Empregador**: seguir políticas, proteger ativos. **Sociedade**: não desenvolver ferramentas para uso malicioso; reportar crimes quando aplicável.

## Mentalidade profissional
Segurança sem ética vira crime. O profissional conhece limites, leis e consequências; atua com responsabilidade perante clientes, empregadores e sociedade.

## Prática recomendada
- Ler um código de conduta (ex.: (ISC)², ISACA) e comparar com cenário de reporte de vulnerabilidade.
- Pesquisar um caso de condenação por crime cibernético e resumir o que foi considerado ilícito.

## Checklist de aprendizagem
- [ ] Explicar diferença entre poder fazer e dever fazer em segurança.
- [ ] Citar três consequências (legais ou profissionais) de má conduta.
- [ ] Descrever um passo ético para reporte responsável de vulnerabilidade.`,

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

## Objetivos gerais
- Aplicar na prática as fases do Ethical Hacking em rede (mapear, identificar vulnerabilidades, explorar de forma controlada, documentar).
- Respeitar escopo e regras de engajamento; limites legais e éticos.

---

### 1 — Planejamento e escopo
**Documento de escopo**: o que pode e o que não pode ser testado (IPs, horários, tipos de teste). **Regras de engajamento**: até onde ir (ex.: sem DoS, sem alterar dados de produção). **Autorização**: contrato ou termo por escrito. **Ferramentas**: definir ambiente (VM, laboratório) e ferramentas (Nmap, Nessus/OpenVAS, Metasploit, etc.). **O que você aprende**: redigir um escopo de pentest de uma página com limites claros.

### 2 — Reconhecimento e varredura
**Reconhecimento**: OSINT (domínios, IPs, tecnologias); whois, DNS, sublist3r, theHarvester. **Varredura de portas**: Nmap ( -sV para versões, -sC para scripts). Identificar hosts ativos e serviços (22 SSH, 80 HTTP, 443 HTTPS, 3389 RDP, etc.). **O que você aprende**: rodar Nmap em um lab e interpretar saída (portas abertas, versões); listar possíveis vetores (ex.: RDP aberto, HTTP desatualizado).

### 3 — Enumeração e identificação de vulnerabilidades
**Enumeração**: usuários (SMTP, SMB), shares (SMB), SNMP, diretórios web (gobuster, dirb). **Vulnerabilidades**: varredura com Nessus/OpenVAS; consultar CVE para versões conhecidas; senhas fracas (Hydra, Medusa); configuração fraca (permissores excessivos, serviços default). **Priorizar**: crítico e alto primeiro. **O que você aprende**: correlacionar versão de um serviço com um CVE; anotar vulnerabilidade, impacto e prova de conceito.

### 4 — Exploração e pós-exploração (controladas)
**Exploração**: usar vulnerabilidade para obter acesso (exploit do Metasploit, credencial descoberta, upload de webshell). Sempre dentro do escopo. **Pós-exploração**: escalar privilégio (se autorizado), ver até onde o acesso chega (arquivos, banco, outros hosts); documentar sem causar dano. **O que você aprende**: explorar uma vulnerabilidade conhecida em VM (ex.: Metasploitable) e documentar os passos; não explorar em ambiente não autorizado.

### 5 — Relatório técnico
**Estrutura**: escopo, metodologia, resumo executivo; lista de vulnerabilidades com severidade (crítico, alto, médio, baixo), descrição, evidência (screenshot, comando), impacto e recomendação; conclusão. **Linguagem**: técnica para equipe; resumo para gestão. **O que você aprende**: escrever uma entrada de relatório completa para uma vulnerabilidade (título, severidade, descrição, evidência, recomendação).

## Mentalidade profissional
Pentest é teste de defesa, não ataque real. Objetivo é encontrar falhas para corrigir; sempre com autorização e dentro do escopo. Relatório bem feito vale mais que “quebrar tudo”.

## Prática recomendada
- Montar lab (ex.: Metasploitable, DVWA) e executar as fases do zero ao relatório.
- Pesquisar um CVE recente e descrever impacto e mitigação.

## Checklist de aprendizagem
- [ ] Definir escopo e regras de engajamento de um pentest simulado.
- [ ] Usar Nmap para mapear hosts e portas; interpretar resultados.
- [ ] Identificar pelo menos uma vulnerabilidade (CVE ou configuração) e descrevê-la com evidência.
- [ ] Redigir relatório com severidade e recomendações.`,

  'p4-protecao-perimetro': `# Proteção de Perímetro (72h)
## Ementa
Firewall, IDS, IPS, segmentação de rede e DMZ. Primeira linha de defesa entre rede interna e externa.

---

### 1 — Firewall
**Função**: controlar tráfego (permitir/bloquear) por IP, porta, protocolo e, em firewalls modernos, por aplicação e conteúdo. **Regras**: ordem importa (primeira regra que bater decide); política padrão (negar tudo e liberar o necessário, ou o inverso). **Tipos**: stateless (pacote a pacote) x stateful (acompanha sessão). **Exemplos**: permitir 443 (HTTPS) para internet; negar acesso da VLAN usuários à VLAN servidores exceto em portas específicas. **Ferramentas**: pfSense, OPNsense, iptables, firewalls de fabricantes. **O que você aprende**: desenhar um diagrama Internet–Firewall–DMZ–Rede interna e escrever cinco regras de firewall (ordem e justificativa).

### 2 — IDS e IPS
**IDS (Intrusion Detection System)**: monitora tráfego e gera **alerta** ao detectar assinatura ou anomalia; não bloqueia. **IPS (Intrusion Prevention System)**: detecta e **bloqueia** em linha. **Assinaturas**: regras (ex.: Snort, Suricata) para tráfego malicioso conhecido (exploit, C2, varredura). **Anomalia**: desvio de padrão (volume, destino, horário). **O que você aprende**: interpretar um alerta de IDS (qual regra disparou, qual pacote, IP origem/destino); decidir se é falso positivo ou real.

### 3 — Segmentação (VLANs e zonas)
**Objetivo**: limitar blast radius — se um segmento for comprometido, o ataque não se espalha livremente. **VLANs**: separar usuários, servidores, administração, visitantes. **Zonas**: no firewall, agrupar interfaces em zonas (ex.: LAN, DMZ, WAN) e definir política entre zonas (LAN pode acessar DMZ em 80/443; DMZ não acessa LAN). **O que você aprende**: propor segmentação para uma empresa (quatro VLANs) e justificar quem pode falar com quem.

### 4 — DMZ (zona desmilitarizada)
**Função**: hospedar serviços acessíveis da internet (web, e-mail, VPN) **isolados** da rede interna. Tráfego: Internet ↔ DMZ (permitido em portas específicas); DMZ ↔ Rede interna (restrito ou negado); Rede interna ↔ Internet (controlado). **Risco**: servidor na DMZ comprometido não deve ter acesso direto aos dados internos. **O que você aprende**: descrever o fluxo de uma requisição web do usuário da internet até o servidor na DMZ e por que a rede interna não fica exposta.

### 5 — Hardening de perímetro
**Equipamentos**: desativar serviços desnecessários (HTTP de administração em interface externa), trocar senhas padrão, atualizar firmware, usar HTTPS/SSH para gestão, restringir acesso de administração por IP. **Políticas**: documentar regras, revisar periodicamente, testar (varrer do exterior e ver o que está exposto). **O que você aprende**: checklist de hardening para um firewall (dez itens).

## Mentalidade profissional
Perímetro não é “firewall e pronto”. É firewall + IDS/IPS + segmentação + DMZ + políticas e hardening. Uma camada falha; as outras reduzem o impacto.

## Prática recomendada
- Simular regras de firewall em lab (pfSense ou GNS3) e testar conectividade entre segmentos.
- Pesquisar uma regra Snort/Suricata para um CVE e explicar o que ela detecta.

## Checklist de aprendizagem
- [ ] Explicar diferença entre IDS e IPS e dar exemplo de uso de cada um.
- [ ] Desenhar topologia com DMZ e justificar isolamento da rede interna.
- [ ] Listar cinco boas práticas de hardening de firewall.`,

  'p4-seguranca-mobile-iot': `# Segurança em Redes Móveis e IoT (72h)
## Ementa
Riscos em dispositivos móveis e na Internet das Coisas; vetores de ataque, botnets, boas práticas e controles.

---

### 1 — Redes móveis (2G a 5G)
**Evolução**: 2G (voz, SMS), 3G (dados), 4G (banda larga móvel), 5G (baixa latência, mais dispositivos). **Riscos**: interceptação (IMSI catcher em 2G/3G), roteamento malicioso, ataques a core da rede. **Dispositivos**: perda/roubo (dados no aparelho), malware, apps maliciosos, phishing em mobile. **O que você aprende**: listar três ameaças específicas a dispositivos móveis corporativos e um controle para cada.

### 2 — IoT: o que é e por que é alvo
**IoT**: câmeras, sensores, wearables, impressoras, roteadores, smart home, industrial. **Problemas comuns**: senha padrão ou inexistente, firmware desatualizado (sem patch), serviços de gestão expostos na internet, falta de criptografia, falta de segmentação. **Superfície de ataque**: milhões de dispositivos fracos; muitos nem são gerenciados por equipe de segurança. **O que você aprende**: pesquisar um modelo de câmera IP e listar vulnerabilidades conhecidas (CVE); propor três controles.

### 3 — Botnets de IoT (Mirai e variantes)
**Mirai**: malware que infecta IoT com senha padrão; dispositivos viram parte de botnet para DDoS e outros ataques. **Lição**: dispositivo “burro” pode virar arma; senha padrão e exposição na internet são vetores. **Variantes**: outros malwares seguem a mesma lógica (buscar IoT, tentar credenciais padrão, incorporar à botnet). **O que você aprende**: explicar em cinco linhas como o Mirai se propaga e qual o papel da senha padrão.

### 4 — Boas práticas: IoT
**Alterar senha padrão** antes de colocar em produção. **Atualizar firmware** (verificar se fabricante divulga patches). **Não expor** gestão à internet; acessar só de rede interna ou VPN. **Isolar** IoT em VLAN/rede dedicada; firewall entre IoT e rede crítica. **Monitorar**: tráfego anômalo (dispositivo falando com IP externo suspeito). **Inventário**: saber quais dispositivos existem e onde estão. **O que você aprende**: redigir uma política de uma página para aquisição e uso de dispositivos IoT na empresa.

### 5 — Mobile: BYOD e MDM
**BYOD (Bring Your Own Device)**: funcionário usa dispositivo pessoal para trabalho. **Riscos**: dados corporativos em aparelho não controlado; perda, malware, apps inseguros. **MDM (Mobile Device Management)**: ferramenta para aplicar política (senha, criptografia, apagar remotamente, listar apps). **Políticas**: o que pode e não pode (download de dados, uso de nuvem pessoal); consequências em caso de perda. **O que você aprende**: listar cinco controles que um MDM pode aplicar e por que cada um importa.

### 6 — Celular na rede Wi‑Fi: como o atacante enxerga e como o sistema é comprometido

Quando o celular está no mesmo Wi‑Fi que um notebook (atacante), ambos estão na **mesma rede local**. O atacante enxerga o aparelho como mais um host e pode tentar ataques na camada de rede e de aplicação. Conteúdo estritamente educacional; uso apenas em lab ou com autorização.

**1 — Ver o celular na rede**  
O atacante descobre hosts ativos na faixa de IP da rede. No notebook (Kali/Linux): \`nmap -sn 192.168.1.0/24\` (ping sweep) ou \`arp-scan -l\`. O celular aparece com um IP (ex.: 192.168.1.15). Ferramentas como Nmap, arp-scan, Fing (app no próprio celular) listam dispositivos na mesma LAN. Conclusão: **na mesma Wi‑Fi, o celular é “visível” por IP**; não há invisibilidade por ser móvel.

**2 — Varredura no IP do celular**  
\`nmap -sV -p- 192.168.1.15\` (ou faixa de portas reduzida). Celulares Android e iOS são **fechados por padrão**: poucas ou nenhuma porta TCP/UDP aberta para a rede local. Podem aparecer portas de serviços específicos (ex.: mídia, AirDrop em rede Apple, compartilhamento de arquivos se habilitado). Se não houver serviço escutando, não há “porta para explorar” diretamente; o ataque muda de estratégia.

**3 — Rogue AP (ponto de acesso falso)**  
O atacante faz o **notebook (ou placa externa) emitir um Wi‑Fi** com nome parecido ao legítimo (ex.: “Cafe_WiFi” ao lado do “Cafe_WiFi” real). Se a vítima **conectar nesse Wi‑Fi falso**, todo o tráfego do celular passa pelo atacante. **Como “bula” o sistema**: o celular acredita que está na internet, mas na verdade envia e recebe dados pelo notebook do atacante. Tráfego **não criptografado (HTTP)** pode ser lido; o atacante pode injetar páginas (phishing, malware) ou redirecionar DNS. **Resultado**: interceptação de senhas em sites HTTP, injeção de conteúdo malicioso, possível instalação de malware se o usuário clicar em algo. **Defesa**: não conectar em redes duplicadas ou suspeitas; usar VPN em Wi‑Fi público; preferir dados móveis para acesso sensível.

**4 — MITM com ARP spoofing**  
Mesmo na Wi‑Fi legítima, o atacante pode se colocar **entre o celular e o roteador**. Ferramentas como **ettercap**, **bettercap** ou **arpspoof** enviam respostas ARP falsas: o celular passa a enviar os pacotes para o MAC do notebook do atacante; o atacante encaminha para o roteador e recebe as respostas. **Como “bula” o sistema**: o tráfego da vítima **passa pelo atacante**. Tudo que for HTTP (não HTTPS) pode ser lido ou alterado. O atacante pode fazer **SSL stripping** (downgrade HTTPS para HTTP onde o usuário não percebe) e então capturar credenciais. **Resultado**: roubo de sessões, senhas, cookies; injeção de conteúdo. **Defesa**: usar apenas sites/apps com HTTPS; VPN de confiança na rede; rede com **DHCP Snooping** e **Dynamic ARP Inspection (DAI)** no switch (ambiente corporativo) reduz ARP spoofing.

**5 — Exploração de apps com serviço na rede**  
Se algum **app no celular** abrir uma porta na rede local (serviço que escuta – raro em apps comuns), o atacante poderia tentar explorar vulnerabilidade nesse serviço (buffer overflow, comando injetado, etc.). A maioria dos apps não expõe porta; quando expõe (ex.: app de transferência de arquivos, app de controle remoto mal configurado), o vetor existe. **Como “bula”**: exploit no serviço pode dar execução de código ou acesso a dados do app. **Defesa**: manter apps atualizados; não instalar apps de fonte desconhecida; revisar permissões (rede local).

**6 — Resumo: como o “sistema” (celular) é comprometido na prática**  
- **Pela rede direta**: raro – celular tem poucas portas abertas.  
- **Rogue AP**: vítima conecta no Wi‑Fi falso → todo tráfego pelo atacante → MITM, phishing, possível malware.  
- **ARP spoofing na Wi‑Fi legítima**: tráfego desviado para o atacante → leitura/injeção de conteúdo não criptografado ou SSL stripping.  
- **Malware no celular** (instalado por enganação – app falso, phishing): aí o controle não é “só pela rede”; o malware abre backdoor e se conecta a servidor do atacante (C2).  

**O que você aprende**: explicar em cinco passos como um atacante na mesma Wi‑Fi pode ver o celular e quais dois ataques (Rogue AP e MITM/ARP spoofing) permitem comprometer o tráfego; listar três defesas para o usuário do celular.

## Mentalidade profissional
Cada dispositivo conectado é um possível ponto de entrada. IoT e mobile ampliam a superfície; segurança precisa incluir inventário, política e segmentação, não só PC e servidor. Celular na mesma Wi‑Fi que um atacante é “mais um host” – visível por IP; a defesa passa por rede segura, não conectar em Wi‑Fi suspeito, HTTPS/VPN e aparelho atualizado.

## Prática recomendada
- Fazer inventário de dispositivos IoT em um ambiente (casa ou escritório) e classificar risco (senha padrão? exposto?).
- Pesquisar um caso real de botnet de IoT (Mirai ou outro) e resumir impacto.

## Checklist de aprendizagem
- [ ] Citar três vulnerabilidades comuns em IoT e um controle para cada.
- [ ] Explicar como uma botnet de IoT se forma e qual o papel da senha padrão.
- [ ] Descrever o que é MDM e três controles que ele permite.
- [ ] Explicar como o atacante vê o celular na mesma Wi‑Fi (nmap/arp-scan) e como Rogue AP e MITM (ARP spoofing) comprometem o tráfego; citar três defesas.`,

  'p4-tratamento-resposta-incidentes': `# Tratamento e Resposta a Incidentes (72h)
## Ementa
Ciclo de resposta a incidentes: identificação, contenção, erradicação, recuperação e lições aprendidas. Planos, equipes e comunicação.

---

### 1 — Identificação
**Fontes**: alertas do SIEM, IDS, logs de autenticação e de endpoint, reclamação de usuário. **Triagem**: é incidente real ou falso positivo? Severidade (crítica, alta, média, baixa). **Primeiras perguntas**: o que foi afetado? Quando começou? Há propagação? **Documentar**: horário, quem detectou, primeiro indicador. **O que você aprende**: descrever um fluxo de detecção (alerta → triagem → abertura de caso) com exemplo de um tipo de incidente (ex.: ransomware).

### 2 — Contenção
**Objetivo**: impedir propagação e novo acesso do atacante. **Ações**: isolar hosts comprometidos (desconectar rede ou VLAN quarentena); bloquear IPs/domínios maliciosos no firewall/DNS; desabilitar contas comprometidas; desligar serviço explorado se necessário. **Comunicação**: avisar gestão; se dados pessoais, avaliar notificação (LGPD). **Documentar**: o que foi isolado/bloqueado e quando. **O que você aprende**: para um cenário (ex.: um host com ransomware), listar três ações de contenção em ordem e justificar.

### 3 — Erradicação
**Remover malware**: antivírus/EDR, ferramenta do fabricante ou reinstalação limpa se persistência complexa. **Corrigir vulnerabilidade**: patch, mudança de configuração que permitiu o ataque. **Trocar credenciais**: contas que possam ter sido comprometidas; senha forte e MFA onde possível. **Remover backdoors**: contas não autorizadas, tarefas agendadas, serviços instalados. **O que você aprende**: montar um checklist de erradicação (cinco itens) para um incidente de invasão por RDP.

### 4 — Recuperação
**Restaurar**: de backup anterior ao incidente; validar que o backup não está contaminado. **Testar restauração**: não esperar o incidente para descobrir que o backup falha. **Reconfigurar**: hardening e patches após restore. **Reestabelecer**: recolocar hosts na rede em etapas, com monitoramento. **Validar**: varredura e revisão de logs; só encerrar quando não houver evidência de atividade maliciosa. **O que você aprende**: descrever os critérios para considerar um incidente “encerrado” (quem valida, o que verificar).

### 5 — Lições aprendidas e plano de resposta
**Lições aprendidas**: o que funcionou, o que falhou, o que melhorar (detecção, resposta, backup, treinamento). Inserir no relatório e em plano de ação. **Plano de resposta a incidentes**: documento que define papéis, etapas, contatos, critérios de escalação. **Runbooks**: procedimentos passo a passo para cenários comuns (ex.: ransomware, phishing em massa). **SOC**: equipe que monitora, tria e responde; integração com liderança e outras áreas. **O que você aprende**: esboçar a estrutura de um plano de resposta (cinco seções) e um runbook de uma página para “detecção de ransomware”.

## Mentalidade profissional
Resposta a incidentes é processo, não improviso. Quem tem plano e runbooks age mais rápido e com menos erro; quem documenta melhora no próximo incidente.

## Prática recomendada
- Participar de um exercício de mesa (tabletop) de resposta a incidentes (cenário, decisões em grupo).
- Revisar um caso real (reportagem ou estudo) e mapear as fases: identificação, contenção, erradicação, recuperação.

## Checklist de aprendizagem
- [ ] Listar as cinco fases do ciclo de resposta e uma ação principal em cada.
- [ ] Diferenciar contenção e erradicação com exemplos.
- [ ] Descrever o que é um runbook e dar um exemplo de uso.`,

  'p4-projeto-integrador-defesa': `# Projeto Integrador – Defesa e Resposta a Incidentes (36h)
## Ementa
Simulação de ambiente corporativo com incidente de segurança: detecção, análise, contenção, erradicação e relatório. Integração de cybersecurity, pentest, perímetro e resposta a incidentes.

---

### 1 — Ambiente e cenário
**Montar ou usar**: rede com servidores (arquivos, banco, e-mail ou diretório), estações, firewall; opcional: IDS, SIEM ou agregador de logs. **Cenário de ataque**: definir um tipo (invasão por vulnerabilidade, malware, exfiltração de dados) e “injetar” de forma controlada (ex.: executar um script que simula comportamento malicioso ou explorar uma VM vulnerável). **Documentar**: como o ataque começou, em qual host, em qual momento — para depois reconstruir na análise. **O que você aprende**: desenhar a topologia do lab e descrever o cenário de ataque em um parágrafo.

### 2 — Detecção
**Fontes**: logs do firewall, do servidor, do SO (Windows Event, syslog); tráfego (Wireshark, NetFlow) se disponível; alertas se houver IDS/SIEM. **Triagem**: o alerta ou o log indica incidente real? Severidade? **Primeiras perguntas**: o que foi afetado? Quando? Há propagação? **O que você aprende**: identificar o primeiro indicador do seu cenário (qual log ou tráfego) e anotar data/hora e host.

### 3 — Análise (investigação básica)
**Linha do tempo**: ordenar eventos por data/hora (logs, tráfego). **Causa raiz**: por onde o atacante entrou? Qual vulnerabilidade ou vetor? Qual primeiro host ou conta? **Evidências**: anotar IPs, hashes, trechos de log relevantes (IOCs). Não é necessário forense avançada; o foco é correlação de logs e tráfego para entender o que aconteceu. **O que você aprende**: montar uma cronologia de pelo menos cinco eventos e escrever um parágrafo de causa raiz.

### 4 — Contenção e erradicação
**Contenção**: isolar host(s) comprometido(s), bloquear IP malicioso no firewall (se aplicável), desabilitar conta comprometida. **Erradicação**: remover malware ou corrigir vulnerabilidade explorada; trocar senhas se credenciais foram usadas. No lab, pode ser “restaurar VM” ou “aplicar patch e remover backdoor”. **O que você aprende**: listar as ações de contenção e erradicação que você executou no cenário e o resultado (ataque parou? acesso removido?).

### 5 — Relatório e comunicação
**Relatório**: cronologia, causa raiz, impacto (o que foi afetado, quais dados em risco), ações tomadas (contenção, erradicação), recomendações (hardening, monitoramento, backup). **Comunicação**: simular comunicação com “gestão” (resumo em uma página) e com “equipe técnica” (detalhes para quem for continuar o trabalho). **Trabalho em equipe**: dividir papéis (quem monitora, quem analisa logs, quem contém, quem redige); prática de comunicação sob pressão. **O que você aprende**: redigir relatório de uma a duas páginas e um resumo executivo de um parágrafo.

## Mentalidade profissional
Este projeto integra o que você viu em Cybersecurity, Pentest, Perímetro e Resposta a Incidentes em um único fluxo: detectar, analisar, conter, erradicar e documentar. É a base do que um analista de SOC faz no dia a dia.

## Prática recomendada
- Usar lab isolado; repetir o cenário variando o tipo de ataque (malware vs invasão vs exfiltração) para treinar detecção e resposta.
- Cronometrar o tempo desde a detecção até a contenção e discutir como reduzir (runbooks, ferramentas).

## Checklist de aprendizagem
- [ ] Descrever o ambiente simulado e o cenário de ataque injetado.
- [ ] Explicar como o incidente foi detectado e qual foi a causa raiz.
- [ ] Listar ações de contenção e erradicação executadas.
- [ ] Entregar relatório com cronologia, causa, impacto, ações e recomendações.`,

  'p5-analise-malwares': `# Análise de Malwares (36h)
## Ementa
Tipos de malware (vírus, trojan, ransomware, spyware); vetores de infecção; técnicas de ofuscação; análise estática e dinâmica (sandbox); relatório de análise.

---

### 1 — Tipos de malware e vetores
**Tipos**: vírus (replicação), trojan (aparenta ser legítimo), ransomware (criptografa e cobra resgate), spyware (coleta dados), backdoor (acesso remoto). **Vetores**: e-mail (anexo, link), download malicioso, exploração de vulnerabilidade (RDP, servidor web), USB, drive-by download. **O que você aprende**: para cada tipo, dar um exemplo real e um vetor comum; explicar por que ransomware costuma chegar por e-mail ou RDP.

### 2 — Ofuscação e persistência
**Ofuscação**: empacotamento, criptografia do payload, strings ofuscadas — para dificultar análise estática e evasão de AV. **Persistência**: registro (Run keys), tarefas agendadas, serviços, arquivos em pastas de autostart; objetivo do malware é voltar após reinício. **O que você aprende**: listar três mecanismos de persistência no Windows e onde procurar (registro, pastas, agendador).

### 3 — Análise estática (sem executar)
**Strings**: extrair texto do binário (URLs, IPs, caminhos, chaves de registro) — ferramenta \`strings\` ou similar. **Imports**: DLLs e funções que o executável usa (rede, arquivo, registro) — PEview, pestudio. **Recursos**: ícones, outros arquivos embutidos. **Hash**: MD5, SHA-256 para identificar amostra e buscar em VirusTotal ou bases de IOCs. **O que você aprende**: abrir um PE (Windows) no pestudio ou PEview e anotar imports e strings suspeitas; calcular hash e buscar no VirusTotal.

### 4 — Análise dinâmica (sandbox)
**Ambiente**: VM ou sandbox isolada (Cuckoo, Any.Run, Joe Sandbox); **nunca** em rede de produção. **Executar** a amostra e observar: arquivos criados/alterados, chaves de registro, processos filhos, conexões de rede, consultas DNS. **Relatório da sandbox**: já traz muitos IOCs (hashes, IPs, URLs, mutex, paths). **O que você aprende**: submeter uma amostra (de repositório de samples para estudo) ao Cuckoo ou Any.Run e preencher uma tabela de IOCs (hash, IP, URL, comportamento em uma linha).

### 5 — IOCs e relatório
**IOCs (Indicators of Compromise)**: hashes (arquivo, dropped files), IPs e domínios (C2, download), URLs, paths, chaves de registro, mutex. **Uso**: alimentar SIEM, firewall e EDR para detecção e bloqueio. **Relatório de análise**: resumo do comportamento (o que o malware faz), vetor provável, IOCs em tabela, recomendação (bloquear IPs, procurar por hash no ambiente). **Ética**: só analisar amostras em ambiente controlado e com autorização; nunca em rede de produção. **O que você aprende**: redigir um relatório de uma página para uma amostra (comportamento, IOCs, recomendação).

## Mentalidade profissional
Análise de malware serve para entender o ataque e gerar IOCs que protejam a rede. Ambiente sempre isolado; documentação clara para que outros possam usar os IOCs.

## Prática recomendada
- Usar repositórios de samples para educação (ex.: MalwareBazaar, amostras de cursos); nunca baixar malware “na solta” em máquina não isolada.
- Comparar análise estática e dinâmica da mesma amostra: o que a estática não revelou e a dinâmica mostrou?

## Checklist de aprendizagem
- [ ] Diferenciar análise estática e dinâmica e citar duas ferramentas para cada.
- [ ] Extrair pelo menos três IOCs de uma amostra (hash, IP ou URL) e descrever o comportamento em uma frase.
- [ ] Redigir relatório de análise com comportamento, IOCs e recomendação.`,

  'p5-pericia-forense': `# Análise e Perícia Forense Computacional (72h)
## Ementa
Coleta e preservação de evidências digitais; imagem forense; análise de mídia, arquivos e logs; reconstrução de linha do tempo e relatório pericial com validade técnica e jurídica.

---

### 1 — Princípios e ordem de volatilidade
**Não alterar o original**: toda análise em cópia ou imagem; o original fica intocado e armazenado com controle de acesso. **Documentar toda ação**: quem fez o quê, quando, com qual ferramenta — rastreabilidade. **Cadeia de custódia**: quem coletou, quem transportou, quem armazenou, quem acessou; quebra de custódia pode inviabilizar evidência em processo. **Ordem de volatilidade**: preservar primeiro o que se perde mais rápido (RAM, conexões, processos), depois disco, logs. **O que você aprende**: explicar por que “trabalhar no original” invalida a evidência; descrever o que é cadeia de custódia em três linhas.

### 2 — Imagem forense
**Imagem bit-a-bit**: cópia sector a sector do disco (dd, FTK Imager, Guymager); gera arquivo .dd ou .e01. **Hash**: calcular SHA-256 da imagem e do disco original; devem coincidir (integridade). **Documentação**: modelo do disco, número de série, capacidade; data/hora da coleta; local de armazenamento da imagem. **O que você aprende**: criar imagem de um disco virtual (ex.: VDI) com FTK Imager ou dd; verificar hash; abrir a imagem no Autopsy sem tocar no “original”.

### 3 — Análise de mídia e arquivos
**Sistema de arquivos**: estrutura (NTFS, ext4); arquivos apagados (ainda recuperáveis até sobrescrita); metadados (data de criação, modificação, acesso). **Arquivos suspeitos**: extensão, assinatura real (magic bytes), conteúdo; arquivo ofuscado ou em local anômalo. **Registro (Windows)**: Run keys, serviços, últimas chaves acessadas; ferramentas (RegEdit, RegRipper). **O que você aprende**: no Autopsy ou similar, localizar um arquivo apagado e um artefato de interesse (ex.: entrada no registro); anotar caminho e data.

### 4 — Análise de logs e linha do tempo
**Logs**: do SO (Windows Event, syslog), de aplicação, de firewall; quem acessou, quando, o quê. **Linha do tempo**: reunir eventos de disco, registro e logs em ordem cronológica (ferramentas: log2timeline/Plaso, Timesketch ou planilha). **Objetivo**: reconstruir sequência — quem fez o quê, quando, em qual host. **O que você aprende**: montar uma timeline de pelo menos 10 eventos a partir de um conjunto de logs ou artefatos; identificar o primeiro evento malicioso.

### 5 — Relatório pericial e admissibilidade
**Relatório pericial**: metodologia (como a coleta e a análise foram feitas), evidências (o que foi encontrado, com referência a arquivo/hash/log), conclusões (respostas às perguntas do caso). Linguagem técnica mas clara. **Admissibilidade**: noções de que a evidência digital pode ser questionada (alteração, custódia, método); documentação e hash servem para demonstrar integridade e método. **O que você aprende**: esboçar a estrutura de um relatório pericial (metodologia, evidências, conclusões) e redigir um parágrafo de conclusão para um cenário fictício.

## Mentalidade profissional
Forense não é “achar algo no disco”; é preservar, documentar e analisar com método para que o resultado seja defensável técnica e juridicamente. Cadeia de custódia e não alterar o original são inegociáveis.

## Prática recomendada
- Praticar em laboratório com imagens forenses de desafios (ex.: desafios de forense disponíveis online) ou com disco virtual que você mesmo “contaminou” com artefatos.
- Pesquisar um caso judicial em que evidência digital foi aceita ou rejeitada e o motivo.

## Checklist de aprendizagem
- [ ] Explicar os três princípios: não alterar original, documentar toda ação, cadeia de custódia.
- [ ] Descrever como criar e validar (hash) uma imagem forense.
- [ ] Montar uma linha do tempo a partir de logs/artefatos e redigir conclusão em um parágrafo.`,

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

---

### 1 — O que é guerra cibernética
**Definição**: uso de operações no ciberespaço por atores estatais (ou com apoio estatal) para atingir objetivos políticos, militares ou econômicos. **Ofensiva**: ataques para degradar, espionar ou influenciar. **Defensiva**: proteção de redes, sistemas e dados nacionais; detecção e resposta a intrusões. **Diferença** em relação a crime cibernético: atores (Estado vs criminosos), motivação (estratégica vs lucro) e recursos. **O que você aprende**: em três linhas, diferenciar guerra cibernética de um ataque de ransomware criminoso.

### 2 — Espionagem e roubo de ativos
**Espionagem cibernética**: acesso não autorizado a segredos de Estado, propriedade intelectual, dados de empresas estratégicas (defesa, energia, saúde, tecnologia). **Atores**: agências de inteligência; grupos ligados a Estados (APT). **Alvos**: redes governamentais, contratistas de defesa, universidades, indústria. **Impacto**: perda de vantagem competitiva, risco à segurança nacional. **O que você aprende**: pesquisar um caso real de espionagem cibernética atribuída a um Estado (ex.: APT) e resumir alvo, método e impacto.

### 3 — Ataques a infraestrutura crítica
**Setores**: energia (elétrica, petróleo e gás), saúde, financeiro, transporte, água, telecomunicações, governo. **Risco**: paralisação ou sabotagem afeta população e economia. **Exemplos**: ataques a redes elétricas (Ukraine 2015, 2016), hospitais (ransomware), sistemas financeiros. **Defesa**: segmentação, monitoramento, planos de contingência, cooperação público-privada. **O que você aprende**: listar três setores de infraestrutura crítica e um tipo de ataque ou ameaça para cada.

### 4 — Operações de influência e desinformação
**Influência**: uso de redes sociais, bots e campanhas para manipular opinião, eleições ou estabilidade. **Desinformação**: divulgação de informação falsa para confundir ou polarizar. **Fake news, deepfakes**: desafio para confiança na informação. **Resposta**: educação midiática, verificação de fatos, resiliência das instituições. **O que você aprende**: explicar por que “segurança cibernética” inclui desinformação e qual o limite entre defesa técnica e liberdade de expressão.

### 5 — Atribuição, direito internacional e defesa nacional
**Atribuição**: identificar quem está por trás de um ataque (Estado, grupo, indivíduo) — difícil no ciberespaço (proxy, false flag). Técnicas: análise de TTPs, infraestrutura, linguagem. **Direito internacional**: aplicação de leis de guerra e soberania ao ciberespaço ainda em evolução; normas voluntárias (ONU, etc.). **Defesa cibernética nacional**: papel de agências (Ciber do Exército, Marinha, Aeronáutica; agências civis); proteção de redes governamentais e de infraestrutura crítica; cooperação internacional. **O que você aprende**: citar duas dificuldades da atribuição de ataques cibernéticos e por que isso importa para a resposta (sanção, retaliação, diplomacia).

## Mentalidade profissional
Cyberwar não é ficção; é realidade geopolítica. O profissional de segurança precisa entender o contexto (atores, motivações, infraestrutura crítica) para priorizar defesas e participar de discussões sobre política e estratégia.

## Prática recomendada
- Acompanhar notícias sobre ataques a infraestrutura crítica e operações de APT; classificar por tipo (espionagem, sabotagem, influência).
- Pesquisar a estrutura de defesa cibernética do Brasil (quem faz o quê).

## Checklist de aprendizagem
- [ ] Definir guerra cibernética e diferenciar de crime cibernético.
- [ ] Citar três setores de infraestrutura crítica e um exemplo de ameaça para cada.
- [ ] Explicar por que a atribuição de ataques cibernéticos é difícil e importante.`,

  'p5-mitigacao-vulnerabilidades': `# Mitigação de Vulnerabilidades (72h)
## Ementa
Identificação (varredura, pentest, auditoria), classificação (CVSS, risco), correção (patch, configuração, hardening) e gestão contínua de vulnerabilidades.

---

### 1 — Fontes de vulnerabilidades
**Software desatualizado**: versões antigas com CVEs conhecidos; atacantes exploram atraso de patch. **Má configuração**: serviços desnecessários, permissões excessivas, senhas padrão, configurações de desenvolvimento em produção. **Senha fraca**: brute force, vazamentos; MFA e política de senha reduzem risco. **Dependências**: bibliotecas e pacotes com vulnerabilidades (ex.: npm, pip); varredura de dependências (SAST/SCA). **O que você aprende**: listar cinco fontes comuns de vulnerabilidade em um ambiente corporativo e um exemplo para cada.

### 2 — Identificação: varredura e auditoria
**Varredura automatizada**: Nessus, OpenVAS, Qualys — varre rede/servidores e compara com base de CVEs; gera relatório de vulnerabilidades. **Pentest**: teste de intrusão autorizado; encontra falhas de configuração e lógica que o scanner não cobre. **Auditoria**: revisão manual de configurações (benchmarks CIS, hardening guides). **Inventário**: saber o que existe (ativos, software, versões) para saber o que varrer. **O que você aprende**: interpretar um relatório de varredura (uma vulnerabilidade crítica e uma alta): CVE, descrição, recomendação.

### 3 — Classificação: CVSS e priorização
**CVSS (Common Vulnerability Scoring System)**: pontuação de 0 a 10 (e severidade: baixo, médio, alto, crítico) com base em vetor de ataque, complexidade, privilégios necessários, impacto. **Contexto**: mesma CVE pode ser crítica em um sistema exposto na internet e média em um sistema interno; priorizar por criticidade **e** contexto (exposição, valor do ativo). **SLA de correção**: ex.: crítico em 7 dias, alto em 30 dias; documentar exceções (mitigação alternativa, risco aceito). **O que você aprende**: consultar um CVE no NVD (nvd.nist.gov), anotar score e vetor; decidir se seria crítico ou alto no seu contexto (ex.: servidor web público).

### 4 — Correção e mitigação
**Patch**: atualizar software para versão que corrige a CVE; testar em homologação antes de produção. **Configuração**: desativar serviço, restringir acesso, aplicar workaround (ex.: desabilitar recurso vulnerável). **Hardening**: seguir guia de endurecimento (CIS, vendor); reduz superfície de ataque. **Segmentação**: isolar sistema que não pode ser corrigido de imediato; reduzir blast radius. **O que você aprende**: para uma vulnerabilidade “conhecida mas sem patch”, listar três medidas de mitigação possíveis.

### 5 — Programa contínuo e Secure SDLC
**Ciclo de gestão de vulnerabilidades**: inventariar → varrer → priorizar → corrigir/mitigar → reavaliar (nova varredura); repetir continuamente. **Integração**: aquisição (exigir que fornecedor informe vulnerabilidades); desenvolvimento (secure SDLC — análise de código, dependências, testes de segurança antes do deploy). **Métricas**: tempo médio para corrigir por severidade; quantidade de vulnerabilidades em aberto; tendência. **O que você aprende**: esboçar um fluxo de “descoberta de vulnerabilidade até correção” em cinco etapas e indicar quem é responsável em cada uma (ex.: TI, segurança, desenvolvimento).

## Mentalidade profissional
Vulnerabilidades sempre existirão; o objetivo é conhecê-las, priorizá-las e tratá-las de forma contínua. Varredura sem correção não protege; correção sem priorização desperdiça recurso.

## Prática recomendada
- Rodar uma varredura em lab (OpenVAS ou Nessus em VM) e gerar relatório; classificar as dez primeiras vulnerabilidades por prioridade no contexto do lab.
- Pesquisar um CVE recente de alto impacto e descrever: vetor, impacto, mitigação.

## Checklist de aprendizagem
- [ ] Explicar o que é CVSS e como usar a pontuação na priorização.
- [ ] Listar três formas de “corrigir” uma vulnerabilidade (patch, configuração, mitigação).
- [ ] Descrever o ciclo de gestão de vulnerabilidades em quatro etapas.`,

  'p5-projeto-integrador-final': `# Projeto Integrador Final – Segurança Cibernética e Forense (36h)
## Ementa
Cenário integrado: infraestrutura simulada sofre incidente (invasão e/ou malware). Detecção, investigação (análise de tráfego, forense digital, análise de malware), contenção, erradicação, recuperação e relatório executivo e técnico. Síntese e consolidação de todo o curso: analista de segurança, SOC, resposta a incidentes e forense computacional.

## Objetivos gerais
- Integrar em um único cenário realista as competências de detecção, investigação, resposta a incidentes e forense.
- Produzir relatório executivo (gestão) e técnico (equipe/auditoria) com cronologia, causa raiz, IOCs e recomendações.
- Defender o trabalho perante banca: metodologia, evidências e conclusões.

## Objetivos específicos
- Montar ou utilizar ambiente simulado (rede, servidores, estações, firewall, opcional: honeypot) e injetar incidente controlado (ransomware, exfiltração, invasão).
- Detectar o incidente usando SIEM, análise de tráfego (PCAP/NetFlow) e logs.
- Investigar: forense (imagem de disco, memória, logs), análise de malware (estática/dinâmica), linha do tempo.
- Aplicar ciclo de resposta: contenção, erradicação, recuperação e lições aprendidas.
- Documentar IOCs (Indicators of Compromise), causa raiz, impacto e recomendações.
- Redigir relatório executivo (resumo para gestão) e técnico (detalhes para equipe e auditoria).
- Apresentar e defender o projeto perante banca.

---

## Unidade 1 — Ambiente e Cenário do Projeto (Laboratório de Resposta a Incidentes)

Aqui você cria um mini-mundo corporativo. Nada de teoria solta. Você monta uma empresa fictícia dentro de máquinas virtuais. Esse ambiente simula o que existe em empresas reais.

### 1 — Infraestrutura Simulada

Rede e segmentação (VLAN): **VLAN 10** (Usuários), **VLAN 20** (Servidores), **VLAN 30** (Administração), **VLAN 40** (DMZ). Esquema: Internet → Firewall → Switch → VLAN10 | VLAN20 | VLAN40. Máquinas: Usuários (Windows 10/11), Servidores (Linux ou Windows Server), DMZ (servidor web, e-mail). VirtualBox ou VMware.

### 2 — Servidores do Ambiente

**FILE-SRV** (arquivos): Windows Server ou Samba; pastas /financeiro, /rh, /projetos, /backups — alvo de ransomware. **DB-SRV** (banco): PostgreSQL ou MySQL; clientes, pedidos, pagamentos — alvo de exfiltração. **MAIL-SRV**: Postfix ou Exchange — phishing. **Active Directory**: autenticação, controle de acesso — coração da rede.

### 3 — Firewall | 4 — IDS/IPS | 5 — Honeypot

Firewall: pfSense, OPNsense. IDS/IPS: Snort, Suricata. Honeypot (opcional): Cowrie, Dionaea.

### 6 — Definição do Incidente | 7 — Injeção | 8 — Papéis | 9 — Ferramentas

Cenários: Ransomware (e-mail + anexo, criptografa FILE-SRV); Exfiltração (cópia do banco); Vulnerabilidade (Apache desatualizado); Conta comprometida (brute force). Documentar injeção com data/hora e host. Papéis SOC: Detecção, Forense, Contenção, Coordenador, Redator. Ferramentas: SIEM (Elastic, Splunk, Wazuh), Wireshark/tcpdump, Autopsy/FTK/Sleuth Kit, Volatility/Rekall, Cuckoo/Any.Run. **Resultado**: laboratório completo de investigação digital.

- Conteúdo detalhado nas seções 6 a 9 acima (cenários, injeção, papéis, ferramentas) (ransomware, exfiltração de dados, invasão por exploração de vulnerabilidade, conta comprometida). Ver seção 7 (injeção) e 8 (papéis). “injeção” do incidente (como foi introduzido, em qual host, em qual momento) para depois reconstruir na investigação.
---

## Unidade 2 — Detecção do Incidente (Alerta e Triagem)

### 1 — Fontes de detecção

**SIEM**: Centraliza eventos e aplica regras de correlação. Ex.: "Muitos logins falhos no AD + login bem-sucedido em conta privilegiada em 5 min → alerta." Ferramentas: Elastic Stack, Splunk, Wazuh. Configure quais logs enviar (firewall, AD, servidores, endpoints) e crie regras (ex.: MITRE ATT&CK).

**Tráfego**: NetFlow (fluxos, volume, exfiltração); PCAP com Wireshark, tcpdump, Zeek; IDS Snort/Suricata (assinaturas e anomalia). Correlacione no SIEM: mesmo IP em firewall e alerta de malware.

**Autenticação**: AD (eventos 4624, 4625, 4648 — login, falha, mudança de senha); SSH/auth.log (brute force, comandos). Envie ao SIEM (ex.: mesmo usuário em dois países em minutos).

**Endpoint**: EDR, Sysmon, Wazuh agent — processo suspeito, arquivo em pasta sensível, conexão indevida. Regra ex.: processo criptografando muitos arquivos = possível ransomware. **Objetivo**: sem agregar fontes não há triagem de qualidade.
### 2 — Triagem

**Severidade**: Crítica (ransomware em propagação, exfiltração — ação imediata); Alta (invasão/malware em um host — contenção no mesmo dia); Média (suspeito não confirmado — 24–48 h); Baixa (falso positivo — fechar). **Passos**: 1) Ver qual regra/fonte disparou. 2) Conferir no dado bruto (log, PCAP). 3) Decidir: falso positivo ou real. 4) Se real: abrir “caso”, atribuir responsável e iniciar investigação.
- **Primeiras perguntas**: Responder por escrito: **O que foi afetado?** (um host, servidor, várias estações?) **Quando começou?** (horário do primeiro evento; se não tiver precisão, aproximar.) **Há propagação?** (tráfego entre hosts, logs de RDP/SMB.) **Quais ativos e dados em risco?** (pessoais/LGPD, financeiros, segredos — define impacto e notificação.) Essas respostas são a base da cronologia e orientam onde fazer imagem forense e análise de tráfego.

### 4 — Documentação desde o início

Registrar: data/hora da detecção, quem detectou, primeiro indicador (qual alerta/log/tráfego), ações imediatas (ex.: host isolado, IP bloqueado). Use planilha, documento ou ferramenta de resposta; alimenta relatório e auditoria. **Resultado Unidade 2**: alerta triado, caso aberto, primeiras respostas documentadas — incidente vira caso de resposta com dono e próxima etapa (investigação).

---

## Unidade 3 — Investigação (Forense e Análise)

### 1 — Ordem de volatilidade

Preservar primeiro o que se perde mais rápido. **Ordem típica**: 1) Memória RAM (processos, conexões, malware em execução — Volatility, Rekall). 2) Conexões de rede ativas e processos. 3) Disco (só depois de imagem bit-a-bit; nunca analisar o original). 4) Logs (servidor, firewall, aplicação). 5) Backups (se existirem e forem confiáveis). **Regra**: nunca alterar evidência original; sempre trabalhar em cópia ou imagem. **O que você aprende**: em laboratório, simule coletar RAM de um host (VM) com Volatility; depois desligue e veja como parte da evidência se perde.

### 2 — Imagem forense do disco

**Por quê**: sem imagem, não há forense defensável; o original fica intocado. **Como**: imagem bit-a-bit (sector a sector) com dd, FTK Imager ou Guymager. Gera arquivo .dd ou .e01. **Integridade**: calcular hash SHA-256 da imagem e do disco original; devem coincidir. **Cadeia de custódia**: documentar quem coletou, quando, onde está armazenado, quem acessou depois — essencial para validade jurídica. Ferramentas: FTK Imager, Autopsy, Sleuth Kit, Guymager. **O que você aprende**: criar imagem de um disco virtual (ex.: VDI do VirtualBox) e verificar hash; abrir a imagem no Autopsy e navegar no sistema de arquivos.

### 3 — Análise de tráfego (PCAP / NetFlow)

**PCAP**: captura completa de pacotes (Wireshark, tcpdump, Zeek). Filtrar por IP do host comprometido; identificar IPs e domínios externos (possível C2 ou exfiltração). **NetFlow**: resumo de fluxos (origem, destino, porta, bytes) — bom para volume e padrões. **O que procurar**: conexões para IPs em listas de ameaça; DNS para domínios suspeitos; tráfego em horário incomum; upload grande (exfiltração). Correlacionar com horários dos logs do host e do SIEM. **O que você aprende**: capturar tráfego de uma VM (Wireshark ou tcpdump), filtrar por IP da VM e listar conexões externas; identificar um fluxo de dados suspeito (ex.: upload para IP desconhecido).

### 4 — Análise de malware (estática e dinâmica)

**Estática (sem executar)**: strings (texto no binário — URLs, IPs), imports (bibliotecas usadas), recursos (PEview, pestudio). **Dinâmica (sandbox)**: executar em VM ou Cuckoo/Any.Run; observar arquivos criados, registro, rede, processos. Relatório da sandbox já traz IOCs (hashes, IPs, URLs). **IOCs a extrair**: hashes MD5/SHA-256, IPs e domínios de C2, URLs, paths, chaves de registro — tabela para SIEM e bloqueio no firewall. **O que você aprende**: rodar um sample em Cuckoo ou VM isolada; anotar hashes e IPs; montar uma linha na tabela de IOCs.

### 5 — Linha do tempo (timeline)

**Objetivo**: reconstruir sequência — quem, quando, o quê, em qual host. **Fontes**: logs do SO (Windows Event, syslog), logs de aplicação, tráfego (primeira e última conexão), artefatos forenses (arquivo criado, registro modificado). **Ferramentas**: log2timeline (Plaso), Timesketch; ou planilha com colunas data/hora, host, evento, fonte. **O que você aprende**: exportar eventos do Windows (ex.: Security) para CSV; ordenar por data/hora; identificar o primeiro evento malicioso (ex.: execução do malware) e a sequência até o dano.

### 6 — Causa raiz

Responder com evidência: **Vetor inicial** (phishing, RDP exposto, vulnerabilidade em servidor web?). **Primeiro host ou conta comprometido** (qual máquina ou usuário — documentar com log ou tráfego). **Movimento lateral** (como foi do primeiro host para outros — RDP, SMB, credenciais roubadas). Isso fecha a parte técnica da investigação e alimenta o relatório. **Resultado Unidade 3**: evidências preservadas, IOCs extraídos, timeline e causa raiz documentadas — pronto para contenção e relatório.

---

## Unidade 4 — Contenção, Erradicação e Recuperação

### 1 — Contenção (parar o mal)

**Objetivo**: impedir propagação e novo acesso do atacante. **Isolar hosts**: desconectar da rede (unplug ou VLAN de quarentena) ou desligar de forma controlada. Máquinas com ransomware ou backdoor não podem continuar na rede. Documentar quais hosts e quando. **Bloquear IOCs**: usar tabela de IOCs (IPs, domínios de C2, URLs); bloquear no firewall e, se possível, no DNS interno (sinkhole). **Desabilitar contas**: conta de usuário ou serviço que o atacante usou — desabilitar; senha será trocada na erradicação. **Comunicação**: coordenador comunica gestão; se dados pessoais, avaliar notificação (LGPD/ANPD). **O que você aprende**: no laboratório, simule isolamento (desligar NIC da VM ou mover para VLAN isolada); adicione um IP malicioso no firewall e teste bloqueio.

### 2 — Erradicação (remover o mal)

**Remover malware**: antivírus/EDR em modo limpeza ou ferramenta do fabricante; se rootkit ou persistência complexa, planejar reinstalação limpa (na recuperação). **Corrigir vulnerabilidades**: aplicar patch (servidor web, SO, aplicação) ou mudar configuração que permitiu o ataque; sem isso o ambiente volta a ser explorável. **Trocar senhas**: todas as contas que possam ter sido comprometidas (usuário que clicou no phishing, conta de serviço no servidor invadido); senha forte e MFA onde possível. **Remover backdoors**: verificar contas novas, tarefas agendadas, serviços instalados, chaves SSH/registro; remover o que não for legítimo. **O que você aprende**: checklist de erradicação — lista de itens (malware, patch, senhas, contas, agendamentos) e marcar cada um como feito.

### 3 — Recuperação (restaurar operação)

**Restaurar de backup**: usar backup anterior ao incidente; validar que o backup não está contaminado. **Teste de restauração**: garantir que o procedimento de restore foi testado; em incidente real não é hora de descobrir que o backup falha. **Reconfigurar**: após restore ou reinstalação — hardening, patches, configurações seguras. **Reestabelecer conectividade**: recolocar hosts na rede em etapas (ex.: primeiro servidores críticos), com monitoramento; observar se indicador de comprometimento reaparece. **Validação final**: varredura de vulnerabilidades ou malware; revisão de logs; só considerar incidente encerrado quando não houver evidência de atividade maliciosa. **O que você aprende**: documentar o plano de recuperação (ordem de restore, quem faz o quê, critérios de validação).

### 4 — Lições aprendidas

**O que documentar**: Detecção — as regras do SIEM pegaram? Tempo até detectar foi aceitável? Resposta — contenção foi rápida? Equipe tinha runbooks? Backup — íntegro e restaurado a tempo? Treinamento — usuários reconhecem phishing? Senhas fortes e MFA? Inserir no relatório e em plano de ação (recomendações e melhorias). **Resultado Unidade 4**: ataque contido, malware e backdoors erradicados, sistemas recuperados e validados — ciclo de resposta fechado na prática; falta documentar e apresentar.

---

## Unidade 5 — Relatório Executivo e Técnico (Documentação e Defesa)

### 1 — Relatório executivo (para a gestão)

**Tamanho**: uma a duas páginas. **Quem lê**: direção, gerência (não necessariamente técnico). **Conteúdo**: Resumo do incidente — o quê aconteceu, quando (período), impacto em negócio e operação (parada de serviço, dados vazados, custo estimado). Causa raiz em linguagem acessível (ex.: "invasão a partir de e-mail malicioso aberto por colaborador" ou "servidor web desatualizado explorado por atacante"). Ações tomadas — contenção, erradicação, recuperação em poucas linhas. Recomendações prioritárias — investimento (ferramentas, treinamento), processo (políticas, runbooks), próximos passos (auditoria, testes de backup). **Linguagem**: objetiva, sem jargão; números e prazos quando fizer sentido. **O que você aprende**: escrever um parágrafo de causa raiz que um gestor não técnico entenda; listar três recomendações em uma frase cada.

### 2 — Relatório técnico (para equipe, auditoria, conformidade)

**Estrutura sugerida**: **Metodologia** — como foi feita a detecção (SIEM, IDS, logs), a investigação (imagem forense, tráfego, malware) e a resposta (contenção, erradicação, recuperação). **Cronologia detalhada** — linha do tempo com data/hora, host, evento e fonte (log, tráfego, artefato). **Evidências** — IOCs (tabela), hashes, IPs, domínios, trechos de log ou tráfego (sem dados sensíveis); análise forense e de malware (comportamento, artefatos). **Causa raiz técnica** — vetor, primeiro host/conta comprometido, movimento lateral, com referência às evidências. **Medidas** — contenção, erradicação, recuperação (o que foi feito, em qual ordem, resultado). **Recomendações técnicas** — hardening, monitoramento (regras SIEM, IDS), backup e teste de restauração, gestão de vulnerabilidades, treinamento. **O que você aprende**: usar a cronologia que você montou na Unidade 3 como seção do relatório; citar um log ou um IOC como evidência de cada conclusão.

### 3 — Tabela de IOCs e anexos

**Tabela de IOCs**: colunas — tipo (hash, IP, domínio, URL, nome de arquivo), valor, contexto (ex.: C2, malware, exfiltração), data de coleta. **Uso**: alimentar SIEM e firewall para bloqueio e detecção futura; anexar ao relatório técnico. **Anexos** (se aplicável): trechos de regras SIEM ou IDS usadas na detecção; capturas de tela da linha do tempo ou do fluxo de tráfego (anonimizadas); resumo do relatório da sandbox (malware). Tudo sem expor dados sensíveis. **O que você aprende**: preencher pelo menos cinco linhas da tabela de IOCs a partir da sua análise (ex.: um hash, dois IPs, um domínio, uma URL).

### 4 — Apresentação e defesa perante banca

**Slides ou documento de apoio**: cenário do laboratório e tipo de incidente; metodologia (detecção, investigação, resposta); principais achados (causa raiz, IOCs, impacto); conclusões e recomendações; lições aprendidas. **Durante a defesa**: explicar escolhas técnicas (por que essa ferramenta, por que essa ordem de volatilidade); justificar conclusões com evidências (qual log, qual tráfego); responder perguntas sobre alternativas (outras ferramentas, outros cenários). **O que você aprende**: isso demonstra que você não só executou mas entende o porquê e sabe comunicar — essencial para analista de SOC, resposta a incidentes e forense.

---

## Mentalidade profissional
O Projeto Integrador Final replica o que um analista de SOC e um perito forense fazem na vida real: detectar, investigar, conter, erradicar, recuperar e documentar. Relatório bem escrito e defesa clara demonstram que você não só “sabe fazer” mas sabe comunicar e sustentar suas conclusões — essencial para carreiras em segurança, auditoria e resposta a incidentes.

## Prática recomendada
- **Laboratório isolado**: nunca rede de produção; definir cenário e “injetar” o incidente de forma controlada.
- **Documentar cada etapa**: detecção, triagem, imagem forense, análise, contenção — data/hora e responsável; no relatório você consolida o que anotou.
- **Revisar relatório**: foco em clareza — gestor entende o executivo; técnico reproduz a análise a partir do técnico. **Treinar defesa**: antecipar perguntas da banca (por que Volatility antes do disco? por que essa regra?) e preparar respostas com evidência.

## Checklist de aprendizagem

- [ ] **Ambiente e incidente**: Descrever ambiente simulado (VLANs, servidores, ferramentas) e tipo de incidente injetado, com data/hora de injeção.
- [ ] **Detecção e triagem**: Explicar como foi detectado (SIEM, tráfego, logs), triagem (severidade, abertura de caso), primeiras perguntas respondidas.
- [ ] **Investigação**: Listar etapas (ordem de volatilidade, imagem forense, tráfego, malware, timeline, causa raiz) e citar pelo menos uma ferramenta por etapa.
- [ ] **Resposta**: Diferenciar contenção, erradicação e recuperação; dar exemplo aplicado ao cenário (ex.: contenção = isolamos host X e bloqueamos IP Y).
- [ ] **Relatório**: Redigir executivo (1–2 páginas) e técnico (metodologia, cronologia, evidências, IOCs, recomendações); tabela de IOCs com pelo menos 5 entradas.
- [ ] **Defesa**: Apresentar perante banca (slides ou documento), explicar escolhas técnicas e justificar conclusões com evidências.

## Formação final
Ao concluir o curso e este projeto: analista de segurança, operador de SOC, resposta a incidentes, auditor de segurança, forense computacional, pentester. O Projeto Integrador Final consolida que você sabe integrar detecção, investigação, resposta e documentação em um cenário realista.`,
};
