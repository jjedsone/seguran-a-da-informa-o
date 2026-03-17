import './PaginaWindows11.css';

const SECOES = [
  {
    id: 'desligar-sozinho',
    titulo: 'Desligar o PC sozinho (agendado)',
    icon: '⏱️',
    itens: [
      {
        subtitulo: 'Programar horário fixo: desligar todo dia no mesmo horário',
        texto: 'Use o Agendador de Tarefas do Windows para o PC desligar sozinho no horário que você escolher (ex.: 23h todo dia). Passo a passo:',
        passos: [
          'Pressione Win + R, digite taskschd.msc e pressione Enter (abre o Agendador de Tarefas).',
          'No painel direito, clique em "Criar Tarefa Básica".',
          'Nome e descrição: dê um nome (ex.: "Desligar PC às 23h") e clique em Avançar.',
          'Gatilho: escolha "Diariamente" e Avançar.',
          'Horário: defina o horário em que o PC deve desligar (ex.: 23:00:00) e repita todos os dias. Avançar.',
          'Ação: escolha "Iniciar um programa" e Avançar.',
          'Programa: em "Programa/script" digite: shutdown. Em "Adicionar argumentos" digite: /s /f. (/s = desligar, /f = forçar fechamento de programas.) Avançar.',
          'Marque "Abrir a caixa de diálogo Propriedades..." e conclua com Concluir.',
          'Nas propriedades da tarefa (se abriu): em "Configurações gerais", marque "Executar com privilégios mais altos" se precisar. Em "Condições", desmarque "Iniciar a tarefa somente se o computador estiver conectado à energia CA" se for notebook na bateria. OK.',
        ],
        obs: 'A partir daí o PC desligará sozinho todo dia no horário programado. Para desativar: no Agendador de Tarefas, encontre a tarefa, clique com o botão direito → Desabilitar.',
      },
      {
        subtitulo: 'Desligar daqui a X minutos (comando rápido)',
        texto: 'Abra o Prompt de Comando (Win + R → cmd → Enter) ou o PowerShell e use:',
        codigo: 'shutdown /s /t 3600',
        obs: 'O número é o tempo em segundos até desligar. Exemplos: 1800 = 30 min, 3600 = 1 h, 7200 = 2 h. Para cancelar um desligamento já agendado: shutdown /a',
      },
      {
        subtitulo: 'Tabela: segundos para desligar',
        texto: 'Use estes valores no lugar do número em shutdown /s /t NÚMERO: 5 min = 300 | 15 min = 900 | 30 min = 1800 | 1 h = 3600 | 2 h = 7200 | 3 h = 10800.',
      },
      {
        subtitulo: 'Atalho na área de trabalho para desligar em 1 hora',
        texto: 'Clique com o botão direito na área de trabalho → Novo → Atalho. Em "Local do item" coloque:',
        codigo: 'shutdown /s /t 3600',
        obs: 'Troque 3600 pelos segundos que quiser. Nome do atalho: ex. "Desligar em 1h". Para cancelar: atalho ou cmd com shutdown /a.',
      },
    ],
  },
  {
    id: 'marca-dagua',
    titulo: 'Tirar a marca d\'água (watermark) do Windows 11',
    icon: '💧',
    itens: [
      {
        subtitulo: 'Por que a marca d\'água aparece?',
        texto: 'A marca d\'água "Windows 11" ou "Build XXXXX" no canto da tela costuma aparecer quando: (1) o Windows não está ativado; (2) você está usando uma versão de avaliação (Insider ou Trial); (3) a licença expirou ou há problema na ativação.',
      },
      {
        subtitulo: 'Solução recomendada: ativar o Windows',
        texto: 'Configurações → Sistema → Ativação. Insira uma chave de produto válida do Windows 11 ou use "Solução de problemas" se o PC já veio com Windows. Após a ativação correta, a marca d\'água de "não ativado" some. Use sempre licenças oficiais por segurança e conformidade.',
      },
      {
        subtitulo: 'Se for versão Insider (Preview)',
        texto: 'Em versões Insider (Dev/Canary), a marca d\'água do build é normal e não some pela ativação. Para sair: Configurações → Windows Update → Windows Insider Program → Parar de receber as versões de visualização. Depois, pode ser necessário reinstalar uma versão estável. Em versões de avaliação (trial), a marca some ao ativar com uma licença válida.',
      },
    ],
  },
  {
    id: 'reiniciar-sozinho',
    titulo: 'Impedir o PC de reiniciar sozinho para atualizações',
    icon: '🔄',
    itens: [
      {
        subtitulo: 'Adiar reinicialização automática',
        texto: 'Configurações → Windows Update → Opções avançadas. Ajuste "Atividade" (para escolher horários em que o PC pode reiniciar) e use "Pausar atualizações" por alguns dias se precisar. Em "Período ativo", defina as horas em que você usa o PC para o Windows evitar reiniciar nesse período.',
      },
      {
        subtitulo: 'Desativar reinicialização automática (via Serviços)',
        texto: 'Win + R → services.msc. Procure "Windows Update". Clique com o botão direito → Propriedades. Tipo de inicialização: Manual ou Desabilitado (Desabilitado impede atualizações automáticas; use com cuidado e atualize manualmente quando possível). Em algumas edições, isso pode ser limitado pela política de grupo.',
      },
    ],
  },
  {
    id: 'inicializacao',
    titulo: 'Desativar programas que abrem ao ligar o PC',
    icon: '🚀',
    itens: [
      {
        subtitulo: 'Pelo Windows',
        texto: 'Configurações → Aplicativos → Aplicativos de inicialização. Liste mostra os apps que podem iniciar com o Windows; desative os que não precisar (toggle em "Desligado"). Isso deixa a inicialização mais rápida.',
      },
      {
        subtitulo: 'Pelo Gerenciador de Tarefas',
        texto: 'Ctrl + Shift + Esc para abrir o Gerenciador de Tarefas → aba "Inicialização". Clique com o botão direito em um programa → Desabilitar. Você pode ver o "Impacto na inicialização" (Alto, Médio, Baixo) para decidir o que desativar.',
      },
    ],
  },
  {
    id: 'modo-escuro',
    titulo: 'Modo escuro e aparência',
    icon: '🌙',
    itens: [
      {
        subtitulo: 'Ativar modo escuro',
        texto: 'Configurações → Personalização → Cores. Em "Escolher seu modo", selecione "Escuro" (tema escuro em todo o sistema) ou "Personalizado" para definir "Modo padrão do Windows" e "Modo padrão do aplicativo" separadamente (ex.: Windows escuro e aplicativos claros).',
      },
      {
        subtitulo: 'Cor de destaque',
        texto: 'Na mesma página (Personalização → Cores) você pode escolher a "Cor de destaque" (botões, links, realces). Há opção de usar uma cor automática baseada no plano de fundo.',
      },
    ],
  },
  {
    id: 'privacidade',
    titulo: 'Privacidade e telemetria',
    icon: '🔒',
    itens: [
      {
        subtitulo: 'Configurações de privacidade',
        texto: 'Configurações → Privacidade e segurança. Revise: Localização, Câmera, Microfone, Histórico de diagnósticos, Publicidade (desative "Personalização de anúncios" se preferir). Em "Diagnóstico e comentários" você pode reduzir dados de diagnóstico e desativar comentários opcionais.',
      },
      {
        subtitulo: 'Desativar anúncios e sugestões no menu Iniciar',
        texto: 'Configurações → Personalização → Iniciar. Desative "Mostrar sugestões ocasionalmente no Iniciar" e outras opções de conteúdo sugerido, se não quiser.',
      },
    ],
  },
  {
    id: 'performance',
    titulo: 'Desempenho e manutenção',
    icon: '⚡',
    itens: [
      {
        subtitulo: 'Modo de desempenho (energia)',
        texto: 'Configurações → Sistema → Energia e bateria. Em "Modo de energia" escolha "Melhor desempenho" quando precisar de mais velocidade (em notebooks isso consome mais bateria). "Economia de energia" reduz consumo e pode deixar o PC um pouco mais lento.',
      },
      {
        subtitulo: 'Desfragmentar e otimizar unidades (SSD/HD)',
        texto: 'Pesquise "Desfragmentar e otimizar unidades" no menu Iniciar. Em SSDs o Windows faz "Otimizar" (TRIM), não desfragmentação pesada. Execute de vez em quando; agendamento já vem ativo por padrão.',
      },
      {
        subtitulo: 'Limpar espaço em disco',
        texto: 'Configurações → Sistema → Armazenamento. Use "Limpeza de arquivos temporários" e "Recomendações de armazenamento" para remover arquivos desnecessários, atualizações antigas do Windows e lixeira.',
      },
    ],
  },
  {
    id: 'atalhos',
    titulo: 'Atalhos úteis do Windows 11',
    icon: '⌨️',
    itens: [
      { subtitulo: 'Win + A', texto: 'Central de Ação (notificações e atalhos rápidos).' },
      { subtitulo: 'Win + E', texto: 'Abre o Explorador de Arquivos.' },
      { subtitulo: 'Win + I', texto: 'Abre Configurações.' },
      { subtitulo: 'Win + L', texto: 'Bloqueia o PC (útil para segurança).' },
      { subtitulo: 'Win + V', texto: 'Histórico da área de transferência.' },
      { subtitulo: 'Win + Shift + S', texto: 'Ferramenta de captura de tela.' },
      { subtitulo: 'Win + Tab', texto: 'Exibir todas as áreas de trabalho e janelas (Visão de Tarefas).' },
      { subtitulo: 'Alt + Tab', texto: 'Alternar entre janelas abertas.' },
    ],
  },
  {
    id: 'seguranca',
    titulo: 'Segurança no Windows 11',
    icon: '🛡️',
    itens: [
      {
        subtitulo: 'Windows Security (Defender)',
        texto: 'Configurações → Privacidade e segurança → Segurança do Windows → Abrir Segurança do Windows. Mantenha a proteção em tempo real ativada, antivírus e firewall. Execute verificações periódicas.',
      },
      {
        subtitulo: 'Atualizações de segurança',
        texto: 'Configurações → Windows Update. Deixe as atualizações automáticas ligadas para receber correções de segurança. Se pausar, lembre de atualizar manualmente em seguida.',
      },
      {
        subtitulo: 'Conta e senha / PIN',
        texto: 'Configurações → Contas → Opções de entrada. Use senha forte ou PIN. Ative a opção "Requer entrada do Windows Hello para contas da Microsoft" se usar biometria ou PIN para mais segurança.',
      },
    ],
  },
];

export default function PaginaWindows11() {
  return (
    <div className="win11">
      <header className="win11__hero">
        <h1 className="win11__titulo">Tudo sobre o Windows 11</h1>
        <p className="win11__subtitulo">
          Dicas práticas: desligar o PC sozinho, tirar a marca d'água, impedir reinicialização automática, desativar programas na inicialização, modo escuro, privacidade, desempenho e atalhos.
        </p>
      </header>

      <main className="win11__main">
        {SECOES.map((secao) => (
          <section key={secao.id} className="win11__card" id={secao.id}>
            <h2 className="win11__card-titulo">
              <span className="win11__card-icon" aria-hidden="true">{secao.icon}</span>
              {secao.titulo}
            </h2>
            <div className="win11__card-body">
              {secao.itens.map((item, idx) => (
                <div key={idx} className="win11__bloco">
                  <h3 className="win11__bloco-titulo">{item.subtitulo}</h3>
                  {item.texto && <p className="win11__bloco-texto">{item.texto}</p>}
                  {item.passos && (
                    <ol className="win11__bloco-passos">
                      {item.passos.map((passo, i) => (
                        <li key={i}>{passo}</li>
                      ))}
                    </ol>
                  )}
                  {item.codigo && (
                    <pre className="win11__bloco-codigo" role="img" aria-label="Comando">
                      <code>{item.codigo}</code>
                    </pre>
                  )}
                  {item.obs && <p className="win11__bloco-obs">{item.obs}</p>}
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="win11__footer">
        <p>
          As opções podem variar conforme a edição (Home, Pro, Enterprise) e a versão do Windows 11. Mantenha o sistema atualizado e use sempre licenças oficiais.
        </p>
      </footer>
    </div>
  );
}
