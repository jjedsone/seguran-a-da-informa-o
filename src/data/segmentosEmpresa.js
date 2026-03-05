// Como o profissional de cybersecurity protege a empresa – por segmento
// 6 ramos diferentes: onde começar, como é feita a análise e como proceder

export const segmentos = [
  {
    id: 'saude',
    nome: 'Saúde (hospital, clínica, laboratório)',
    cor: '#0ea5e9',
    ondeComecar: 'Dados de pacientes (prontuário, exames, laudos) são ativos críticos. Comece pelo inventário: onde estão os dados (ERP, prontuário eletrônico, laboratório, nuvem?), quem acessa, quais sistemas têm interface com a internet (agendamento, portal do paciente). LGPD e resolução do CFM/CONEP exigem proteção específica.',
    comoAnalisa: 'Mapear fluxo de dados pessoais e de saúde; classificar sensíveis. Verificar: controle de acesso (perfil por função), auditoria de acesso a prontuário, criptografia em repouso e em trânsito, backup e plano de continuidade. Testar: segmentação da rede (rede clínica separada de Wi‑Fi visitantes), atualização de sistemas (pacotes médicos costumam ter versões antigas), gestão de dispositivos (tablets, estações em enfermaria).',
    comoProceder: 'Priorizar: (1) política de acesso a dados de saúde e treinamento; (2) MFA e menor privilégio; (3) criptografia e backup testado; (4) plano de resposta a incidentes e notificação (LGPD/ANPD em caso de vazamento). Documentar para auditoria e certificações (ex.: acreditação).',
  },
  {
    id: 'financeiro',
    nome: 'Financeiro (banco, fintech, corretora)',
    cor: '#eab308',
    ondeComecar: 'Reguladores (BACEN, CVM) e LGPD exigem governança e segurança. Comece pela governança: política de segurança, comitê de riscos, responsável por segurança da informação. Depois: inventário de sistemas críticos (core bancário, pagamentos, canais digitais), dados sensíveis (financeiros e pessoais) e terceiros (APIs, parceiros).',
    comoAnalisa: 'Análise de risco formal (metodologia alinhada ao BACEN se aplicável). Controles: controle de acesso forte (MFA, segregação de funções), criptografia ponta a ponta em transações, monitoramento de fraude e comportamento anômalo, DLP para dados sensíveis, testes de penetração e varredura de vulnerabilidades em prazo definido. Revisar contratos com terceiros (subprocessadores).',
    comoProceder: 'Implementar camadas: prevenção (hardening, patch, MFA), detecção (SIEM, alertas de fraude, logs de acesso), resposta (plano de incidente, comunicação com BACEN/ANPD se necessário). Relatórios periódicos para comitê e auditoria interna/externa. Manter evidências para regulador.',
  },
  {
    id: 'varejo',
    nome: 'Varejo (loja física e e-commerce)',
    cor: '#f97316',
    ondeComecar: 'Dados de clientes (cadastro, compras, cartão), PDV, e-commerce e estoque. Comece pelo canal mais exposto: site e aplicativo (pagamento, login, dados pessoais). Depois: rede das lojas (Wi‑Fi, PDV, câmeras), integração com gateway de pagamento e ERP.',
    comoAnalisa: 'E-commerce: OWASP Top 10, PCI DSS se armazena/processa cartão (ou uso de tokenização). Rede de lojas: segmentar PDV e câmeras da rede administrativa; não usar senha padrão em roteadores; atualizar firmwares. Inventariar quais dados são coletados e base legal (LGPD). Verificar vazamento de dados em fóruns (vazamentos conhecidos).',
    comoProceder: 'Priorizar: (1) não guardar dados de cartão completos (usar gateway tokenizado); (2) HTTPS e proteção de sessão (cookie seguro); (3) MFA para painel administrativo e acesso a dados; (4) segmentação e hardening em lojas; (5) política de privacidade e consentimento (LGPD). Treinamento anti-phishing para equipe.',
  },
  {
    id: 'industria',
    nome: 'Indústria (manufatura, supply chain)',
    cor: '#64748b',
    ondeComecar: 'Ambiente OT (tecnologia operacional): PLCs, SCADA, redes de chão de fábrica. Comece pelo desenho: rede industrial separada da TI corporativa? Acesso remoto (manutenção, fornecedor)? Inventário de ativos industriais e protocolos (Modbus, OPC, etc.). Dados: projetos, receitas, produção (segredo industrial).',
    comoAnalisa: 'Risco de parada de produção e segurança física. Análise: segmentação (DMZ entre TI e OT; rede industrial isolada); controle de acesso remoto (VPN, conta única por fornecedor, revogação); lista branca de dispositivos e tráfego; patch em janela de manutenção (testar em ambiente espelho). Backup de configurações de PLC/SCADA. Não aplicar patch de TI em ambiente OT sem validação.',
    comoProceder: 'Estratégia defensiva: (1) segmentar OT da TI e da internet; (2) controle rigoroso de acesso remoto e mídia (USB); (3) monitoramento de tráfego OT (anomalias); (4) plano de resposta que inclua operação industrial (quem desliga o quê, comunicação com produção). Alinhar com área de manutenção e operações.',
  },
  {
    id: 'educacao',
    nome: 'Educação (escola, universidade, EAD)',
    cor: '#8b5cf6',
    ondeComecar: 'Dados de alunos e professores (cadastro, notas, frequência), ambientes virtuais de aprendizagem (Moodle, Google Classroom), rede Wi‑Fi aberta ou por senha, muitos dispositivos pessoais (BYOD). Comece pelo inventário de sistemas que tratam dados pessoais e pela rede (quantos pontos de acesso, quem gerencia).',
    comoAnalisa: 'LGPD aplica-se (dados de menores com cuidado redobrado). Verificar: controle de acesso aos sistemas acadêmicos (perfil por papel: aluno, professor, secretaria, admin); backup de dados acadêmicos; segurança do ambiente EAD (senha, vazamento de provas). Rede: segmentar Wi‑Fi visitantes; não expor serviços internos. Conscientização (phishing, uso aceitável) para alunos e corpo docente.',
    comoProceder: 'Política de uso aceitável e de privacidade (comunicação aos pais/responsáveis quando menor). MFA para acesso a sistemas com dados sensíveis (secretaria, notas). Backup e teste de restauração. Resposta a incidentes: em caso de vazamento, avaliar notificação à ANPD e aos titulares. Treinamento periódico para equipe e docentes.',
  },
  {
    id: 'governo',
    nome: 'Governo (prefeitura, estado, órgão federal)',
    cor: '#dc2626',
    ondeComecar: 'Dados de cidadãos (cadastros, tributos, saúde, educação), sistemas legados, muitas repartições e terceiros. Comece pela governança: norma (ex.: e-PING, política de segurança do órgão), responsável por segurança e privacidade. Inventário de sistemas críticos e dados que tratam.',
    comoAnalisa: 'Lei de Acesso à Informação e LGPD; normas setoriais (ex.: saúde, fazenda). Análise: classificação de informação (pública, restrita, secreta); controle de acesso por necessidade de conhecer; certificação digital onde aplicável; segurança de sistemas legados (isolamento, monitoramento). Terceiros: contratos com cláusulas de segurança e auditoria. Preparar para auditoria do TCU e controladorias.',
    comoProceder: 'Implementar controles alinhados à política de segurança do órgão e à LGPD. Documentar decisões (base legal, finalidade). Plano de resposta a incidentes com comunicação interna e, se necessário, CGU/ANPD. Treinamento e conscientização para servidores e estagiários. Ciclo de auditoria e melhoria contínua.',
  },
];
