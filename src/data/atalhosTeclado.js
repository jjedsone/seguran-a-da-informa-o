// Atalhos de teclado – Windows, macOS e Linux (ambientes gráficos comuns)

export const plataformasTeclado = [
  { id: 'windows', nome: 'Windows', cor: '#0078d4' },
  { id: 'macos', nome: 'macOS', cor: '#555' },
  { id: 'linux', nome: 'Linux', cor: '#fcc624' },
];

export const categoriasTeclado = [
  { id: 'sistema', nome: 'Sistema / Geral' },
  { id: 'navegacao', nome: 'Navegação' },
  { id: 'janelas', nome: 'Janelas e abas' },
  { id: 'edicao', nome: 'Edição de texto' },
  { id: 'arquivos', nome: 'Arquivos e pasta' },
  { id: 'busca', nome: 'Busca e ajuda' },
  { id: 'seguranca', nome: 'Segurança e sessão' },
];

// Formato: { categoriaId, acao, windows, macos, linux }
export const atalhosTeclado = [
  // --- Sistema / Geral ---
  { categoriaId: 'sistema', acao: 'Abrir menu Iniciar (Windows) / Spotlight (Mac) / Atividades (Linux)', windows: 'Win', macos: 'Cmd + Espaço', linux: 'Super (Win) ou Alt' },
  { categoriaId: 'sistema', acao: 'Abrir Central de Ações / Notificações', windows: 'Win + A', macos: '—', linux: 'Super + N (GNOME) ou depende do DE' },
  { categoriaId: 'sistema', acao: 'Bloquear a sessão', windows: 'Win + L', macos: 'Ctrl + Cmd + Q', linux: 'Ctrl + Alt + L (ou Super + L em alguns)' },
  { categoriaId: 'sistema', acao: 'Desligar / opções de energia', windows: 'Win + X depois U, U (ou abrir menu)', macos: 'Ctrl + Cmd + Eject (ou menu Maçã)', linux: 'Super depois digitar "desligar" ou menu' },
  { categoriaId: 'sistema', acao: 'Abrir Gerenciador de Tarefas', windows: 'Ctrl + Shift + Esc', macos: 'Cmd + Option + Esc (Forçar sair)', linux: 'Ctrl + Shift + Esc ou Super → "Monitor do sistema"' },
  { categoriaId: 'sistema', acao: 'Abrir Configurações', windows: 'Win + I', macos: 'Cmd + , (no app) ou Preferências do Sistema', linux: 'Super → Configurações (depende do DE)' },
  { categoriaId: 'sistema', acao: 'Executar comando / Abrir arquivo', windows: 'Win + R', macos: 'Cmd + Espaço (Spotlight) e digitar', linux: 'Alt + F2 (GNOME/KDE)' },
  { categoriaId: 'sistema', acao: 'Imprimir tela / captura de tela', windows: 'PrtScn / Win + Shift + S (Recorte)', macos: 'Cmd + Shift + 3 (tela) / 4 (área)', linux: 'PrtScn / Shift + PrtScn (área em muitos)' },
  { categoriaId: 'sistema', acao: 'Histórico da área de transferência (colar itens anteriores)', windows: 'Win + V', macos: '—', linux: 'Depende do DE (ex.: GNOME Clipboard)' },
  { categoriaId: 'sistema', acao: 'Painel de emojis e símbolos', windows: 'Win + . ou Win + ;', macos: 'Ctrl + Cmd + Espaço', linux: 'Depende do DE' },
  { categoriaId: 'sistema', acao: 'Mostrar/ocultar área de trabalho', windows: 'Win + D', macos: 'F11 (Mission Control) ou Cmd + F3', linux: 'Ctrl + Super + D ou depende do DE' },
  { categoriaId: 'sistema', acao: 'Minimizar todas as janelas', windows: 'Win + M', macos: 'Cmd + Option + M (no app)', linux: 'Depende do DE' },
  { categoriaId: 'sistema', acao: 'Restaurar janelas minimizadas', windows: 'Win + Shift + M', macos: '—', linux: '—' },
  { categoriaId: 'sistema', acao: 'Task View / alternar desktops virtuais', windows: 'Win + Tab', macos: 'Ctrl + Cmd + F3 (Mission Control)', linux: 'Super ou Ctrl + Alt + setas (depende do DE)' },
  { categoriaId: 'sistema', acao: 'Novo desktop virtual (Windows)', windows: 'Win + Ctrl + D', macos: '—', linux: 'Depende do DE' },
  { categoriaId: 'sistema', acao: 'Fechar desktop virtual atual', windows: 'Win + Ctrl + F4', macos: '—', linux: '—' },
  { categoriaId: 'sistema', acao: 'Alternar entre desktops virtuais', windows: 'Win + Ctrl + Seta esq. / dir.', macos: 'Ctrl + seta esq. / dir. (full screen apps)', linux: 'Ctrl + Alt + setas ou Super + número' },
  { categoriaId: 'sistema', acao: 'Opções de projeção / segundo monitor', windows: 'Win + P', macos: '—', linux: 'Depende do DE' },
  { categoriaId: 'sistema', acao: 'Conectar (Bluetooth, Miracast, etc.)', windows: 'Win + K', macos: '—', linux: '—' },
  { categoriaId: 'sistema', acao: 'Xbox Game Bar (gravação de tela, etc.)', windows: 'Win + G', macos: '—', linux: '—' },
  { categoriaId: 'sistema', acao: 'Digitação por voz (Windows 10/11)', windows: 'Win + H', macos: '—', linux: '—' },
  // --- Navegação ---
  { categoriaId: 'navegacao', acao: 'Fechar janela / aba atual', windows: 'Alt + F4 (janela) / Ctrl + W (aba)', macos: 'Cmd + W', linux: 'Alt + F4 (janela) / Ctrl + W (aba)' },
  { categoriaId: 'navegacao', acao: 'Minimizar janela', windows: 'Win + Seta para baixo', macos: 'Cmd + M', linux: 'Super + Seta para baixo (ou depende do DE)' },
  { categoriaId: 'navegacao', acao: 'Maximizar janela', windows: 'Win + Seta para cima', macos: 'Ctrl + Cmd + F (tela cheia) / Option + Cmd + F', linux: 'Super + Seta para cima' },
  { categoriaId: 'navegacao', acao: 'Alternar entre janelas abertas', windows: 'Alt + Tab', macos: 'Cmd + Tab', linux: 'Alt + Tab (ou Super + Tab)' },
  { categoriaId: 'navegacao', acao: 'Alternar entre abas (navegador/editor)', windows: 'Ctrl + Tab / Ctrl + Shift + Tab', macos: 'Ctrl + Tab / Ctrl + Shift + Tab', linux: 'Ctrl + Tab / Ctrl + Shift + Tab' },
  { categoriaId: 'navegacao', acao: 'Ir para a barra de endereço (navegador)', windows: 'Ctrl + L ou Alt + D', macos: 'Cmd + L', linux: 'Ctrl + L ou Alt + D' },
  { categoriaId: 'navegacao', acao: 'Atualizar página', windows: 'F5 ou Ctrl + R', macos: 'Cmd + R', linux: 'F5 ou Ctrl + R' },
  { categoriaId: 'navegacao', acao: 'Voltar / Avançar (navegador)', windows: 'Alt + Seta esq. / dir.', macos: 'Cmd + [ / Cmd + ]', linux: 'Alt + Seta esq. / dir.' },
  // --- Janelas e abas ---
  { categoriaId: 'janelas', acao: 'Nova aba', windows: 'Ctrl + T', macos: 'Cmd + T', linux: 'Ctrl + T' },
  { categoriaId: 'janelas', acao: 'Nova janela', windows: 'Ctrl + N', macos: 'Cmd + N', linux: 'Ctrl + N' },
  { categoriaId: 'janelas', acao: 'Fechar aba', windows: 'Ctrl + W', macos: 'Cmd + W', linux: 'Ctrl + W' },
  { categoriaId: 'janelas', acao: 'Reabrir aba fechada', windows: 'Ctrl + Shift + T', macos: 'Cmd + Shift + T', linux: 'Ctrl + Shift + T' },
  { categoriaId: 'janelas', acao: 'Dividir tela (metade esquerda/direita) – Windows 11', windows: 'Win + Seta esq. / dir.', macos: '— (usar Split View manual)', linux: 'Super + Seta esq. / dir. (em alguns DEs)' },
  { categoriaId: 'janelas', acao: 'Alternar modo tela cheia', windows: 'F11 (navegador)', macos: 'Ctrl + Cmd + F', linux: 'F11' },
  { categoriaId: 'janelas', acao: 'Abrir menu da janela (restaurar/mover/fechar)', windows: 'Alt + Espaço', macos: '—', linux: 'Alt + Espaço (em muitos WMs)' },
  // --- Edição de texto ---
  { categoriaId: 'edicao', acao: 'Selecionar tudo', windows: 'Ctrl + A', macos: 'Cmd + A', linux: 'Ctrl + A' },
  { categoriaId: 'edicao', acao: 'Copiar', windows: 'Ctrl + C', macos: 'Cmd + C', linux: 'Ctrl + C' },
  { categoriaId: 'edicao', acao: 'Colar', windows: 'Ctrl + V', macos: 'Cmd + V', linux: 'Ctrl + V' },
  { categoriaId: 'edicao', acao: 'Recortar', windows: 'Ctrl + X', macos: 'Cmd + X', linux: 'Ctrl + X' },
  { categoriaId: 'edicao', acao: 'Desfazer', windows: 'Ctrl + Z', macos: 'Cmd + Z', linux: 'Ctrl + Z' },
  { categoriaId: 'edicao', acao: 'Refazer', windows: 'Ctrl + Y', macos: 'Cmd + Shift + Z', linux: 'Ctrl + Shift + Z ou Ctrl + Y' },
  { categoriaId: 'edicao', acao: 'Localizar no texto', windows: 'Ctrl + F', macos: 'Cmd + F', linux: 'Ctrl + F' },
  { categoriaId: 'edicao', acao: 'Substituir', windows: 'Ctrl + H', macos: 'Cmd + Option + F (ou Cmd + H)', linux: 'Ctrl + H' },
  { categoriaId: 'edicao', acao: 'Salvar', windows: 'Ctrl + S', macos: 'Cmd + S', linux: 'Ctrl + S' },
  // --- Arquivos e pasta ---
  { categoriaId: 'arquivos', acao: 'Abrir Explorador de Arquivos / Finder', windows: 'Win + E', macos: 'Cmd + Shift + N (nova pasta no Finder) / Cmd + Option + Espaço', linux: 'Super + E (em muitos) ou Nautilus/Nemo' },
  { categoriaId: 'arquivos', acao: 'Renomear arquivo/pasta selecionado', windows: 'F2', macos: 'Enter (no Finder)', linux: 'F2' },
  { categoriaId: 'arquivos', acao: 'Excluir (mover para lixeira)', windows: 'Delete ou Shift + Delete (permanente)', macos: 'Cmd + Delete', linux: 'Delete ou Shift + Delete (permanente)' },
  { categoriaId: 'arquivos', acao: 'Nova pasta', windows: 'Ctrl + Shift + N', macos: 'Cmd + Shift + N', linux: 'Ctrl + Shift + N' },
  { categoriaId: 'arquivos', acao: 'Abrir propriedades / informações', windows: 'Alt + Enter', macos: 'Cmd + I', linux: 'Alt + Enter (em muitos gerenciadores)' },
  // --- Busca e ajuda ---
  { categoriaId: 'busca', acao: 'Busca global no sistema', windows: 'Win + S ou Win e digitar', macos: 'Cmd + Espaço (Spotlight)', linux: 'Super e digitar (GNOME/KDE)' },
  { categoriaId: 'busca', acao: 'Ajuda do aplicativo', windows: 'F1', macos: 'Cmd + ?', linux: 'F1' },
  { categoriaId: 'busca', acao: 'Buscar na página (navegador)', windows: 'Ctrl + F', macos: 'Cmd + F', linux: 'Ctrl + F' },
  // --- Segurança e sessão ---
  { categoriaId: 'seguranca', acao: 'Bloquear computador', windows: 'Win + L', macos: 'Ctrl + Cmd + Q', linux: 'Ctrl + Alt + L / Super + L' },
  { categoriaId: 'seguranca', acao: 'Trocar usuário / sair', windows: 'Win + L (bloquear) / Ctrl + Alt + Del → Trocar usuário', macos: 'Ctrl + Shift + Cmd + Q (sair)', linux: 'Depende do gerenciador de login' },
  { categoriaId: 'seguranca', acao: 'Abrir Terminal / Prompt (admin no Windows)', windows: 'Win + X → Terminal (Admin)', macos: 'Cmd + Espaço → Terminal', linux: 'Ctrl + Alt + T (em muitos)' },
  { categoriaId: 'seguranca', acao: 'Forçar fechar aplicativo', windows: 'Ctrl + Shift + Esc → finalizar tarefa', macos: 'Cmd + Option + Esc → Forçar sair', linux: 'xkill ou Monitor do sistema' },
];

export function getAtalhosTecladoPorCategoria(categoriaId) {
  return atalhosTeclado.filter((a) => a.categoriaId === categoriaId);
}

export function getAtalhosTecladoPorPlataforma(plataformaId) {
  return atalhosTeclado.map((a) => ({
    ...a,
    atalho: plataformaId === 'windows' ? a.windows : plataformaId === 'macos' ? a.macos : a.linux,
  }));
}
