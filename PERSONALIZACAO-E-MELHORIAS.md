# Personalização e melhorias – Curso Segurança Cibernética

Este guia indica **onde mudar** o visual do projeto e **melhorias que você pode implementar**, por prioridade e esforço.

---

## Melhorias que você pode fazer no projeto

### Rápidas (poucas horas)

| Melhoria | O que fazer | Onde |
|----------|-------------|------|
| **Toast "Copiado!"** | Ao clicar em "Copiar" nos blocos de código, mostrar um aviso breve "Copiado!" que some sozinho. | `PaginaAtalhos.jsx` (BlocoCodigo), estado + div animada |
| **Atalho Esc no modal** | Fechar o detalhe da disciplina ao pressionar `Esc`. | `StudyDetail.jsx` ou `App.jsx` – `useEffect` com `keydown` |
| **Título da aba (tab)** | Mostrar o nome da página atual no `<title>` do navegador (ex.: "Curso – Segurança Cibernética"). | `App.jsx` – `useEffect` que define `document.title` conforme `pagina` |
| **Versão para impressão** | CSS `@media print` para esconder nav, botões e fundos; mostrar só conteúdo. | `src/index.css` ou novo `print.css` |
| **Indicador de tema** | Ícone ou texto mais claro no botão (ex.: "Tema claro" / "Tema escuro"). | `App.jsx` – texto do botão já existe; pode adicionar ícone |

### Médias (1–2 dias)

| Melhoria | O que fazer | Onde |
|----------|-------------|------|
| **Progresso do curso** | Barra ou % "X de Y disciplinas vistas" ou "Z% do período 1". Salvar no Firebase ou localStorage quais disciplinas foram abertas. | Novo componente + Firestore/localStorage + `estudos.js` |
| **Favoritos** | Botão de estrela nos cards; filtrar "Só favoritos". Salvar no Firebase (já tem usuário). | `StudyCard.jsx`, `App.jsx` (filtro), Firestore |
| **Busca global** | Uma busca que procure em curso, atalhos e simulados ao mesmo tempo; mostrar resultados por seção. | Novo componente ou ampliar `buscarEstudos` + buscar em `atalhos.js` e questões |
| **Lazy load das páginas** | Carregar cada `Pagina*` só quando o usuário clicar no menu (`React.lazy` + `Suspense`). | `App.jsx` – import dinâmico |
| **Skeleton loading** | Enquanto os dados ou a página carregam, mostrar blocos cinza animados no lugar dos cards. | Novo componente `SkeletonCard.css` + uso em lista |
| **PWA (instalar app)** | `manifest.json` + service worker para funcionar offline e "Adicionar à tela inicial". | Raiz do projeto + `vite.config` ou config do build |

### Maiores (uma semana ou mais)

| Melhoria | O que fazer | Onde |
|----------|-------------|------|
| **Modo offline** | Cachear conteúdo do curso e atalhos; quando sem internet, mostrar versão em cache. | Service worker + estratégia de cache |
| **Exportar disciplina em PDF** | Botão "Exportar PDF" no modal da disciplina; gerar PDF do texto (ex.: jsPDF ou biblioteca de impressão). | `StudyDetail.jsx` + lib de PDF |
| **Analytics / métricas** | Registrar eventos: "abriu disciplina X", "concluiu simulado", "trocou tema". Você já usa Firebase; pode usar Firebase Analytics. | `App.jsx`, `PaginaSimulado.jsx`, `StudyDetail.jsx` |
| **Acessibilidade (WCAG)** | Revisar contraste, `aria-label` em botões/links, ordem de foco (Tab), leitores de tela. | Todos os componentes + `index.css` (foco visível) |
| **Sidebar compacta** | Menu lateral com ícones; ao passar o mouse ou em mobile, expandir com texto. | Novo layout em `App.jsx` + CSS |
| **Simulado com tempo** | Modo "prova": X questões em Y minutos; cronômetro e envio ao acabar. | `PaginaSimulado.jsx` + estado de tempo |
| **Certificados** | Ao "concluir" um período ou o curso, gerar ou exibir um certificado (imagem/PDF). | Nova página ou modal + lógica de conclusão |

### Resumo por categoria

- **UX:** Toast ao copiar, Esc no modal, título da aba, progresso, favoritos, busca global, sidebar.
- **Performance:** Lazy load, PWA, modo offline, skeleton.
- **Conteúdo:** Exportar PDF, certificados, simulado com tempo.
- **Técnico:** Analytics, acessibilidade, impressão.

Comece pelas **rápidas** para ganhar impacto com pouco esforço; depois escolha uma ou duas **médias** conforme sua prioridade (progresso, favoritos ou busca costumam ser muito valorizados).

---

## Onde personalizar

### 1. Cores e tema global  
**Arquivo:** `src/index.css`

- **Linhas ~5–30 (tema escuro):**
  - `--accent` – cor de destaque (botões, links, bordas ativas). Ex.: `#10b981` (verde) → troque por `#3b82f6` (azul) ou `#8b5cf6` (roxo).
  - `--bg`, `--bg-card`, `--text-primary`, `--text-muted` – fundos e textos.
- **Linhas ~58–70 (tema claro):** mesmas variáveis para o modo claro.
- **Transições e bordas:** `--transition-fast`, `--transition-normal`, `--transition-slow`, `--radius-sm`, `--radius-md`, `--radius-lg` – controlam velocidade das animações e arredondamento.

### 2. Fontes  
**Arquivo:** `src/index.css` (topo)

- Troque a URL do Google Fonts e as variáveis `--font-sans` e `--font-mono`.  
  Ex.: `Inter`, `Outfit`, `JetBrains Mono`.

### 3. Navegação (menu principal)  
**Arquivo:** `src/App.css`

- `.app__global-nav-link` – estilo dos botões do menu.
- Efeitos atuais: hover com `translateY(-1px)`, transições suaves.

### 4. Cards do curso  
**Arquivo:** `src/components/StudyCard.css`

- `.study-card` – borda, sombra, hover (elevação e borda com cor de destaque).
- `.study-card__badge` – cor do badge (usa `--card-accent` no JSX/componente).

### 5. Páginas específicas  
Cada página tem seu próprio CSS, por exemplo:

- `src/components/PaginaAtalhos.css`
- `src/components/PaginaAtalhosTeclado.css`
- `src/components/PaginaSimulado.css`
- `src/components/PaginaSimulador.css`
- `src/components/Login.css`

Edite o arquivo da página que você quer mudar.

### 6. Tela de login  
**Arquivo:** `src/components/Login.css`

- Card com animação de entrada (`fadeInScale`).
- Botão com hover (elevação e sombra).

### 7. Imagens de segurança da informação  
**Arquivo:** `src/data/imagens.js`

- `IMAGEM_HEADER` – imagem exibida no topo da página **Curso**.
- `IMAGEM_LOGIN` – imagem no card da tela de **Login**.
- Para usar imagens locais: coloque os arquivos em `public/images/` e em `imagens.js` use `/images/nome-do-arquivo.png`.
- Ver também: `public/images/README.md`.

---

## Efeitos dinâmicos já aplicados

| Onde | Efeito |
|------|--------|
| **Scroll** | `scroll-behavior: smooth` (rolagem suave ao clicar em âncoras). |
| **Página principal** | Conteúdo com animação `fadeIn` ao carregar. |
| **Cards do curso** | Entrada em cascata (cada card com pequeno delay). |
| **Cards** | Hover: sobe 4px, borda com cor de destaque, sombra. |
| **Menu** | Hover: botão sobe 1px; tema/sair: leve `scale(1.02)`. |
| **Filtros (períodos)** | Hover: sobe 1px. |
| **Login** | Card entra com `fadeInScale`; botão sobe no hover com sombra. |
| **Barra de busca** | Transição suave no `focus-within` (borda e sombra). |

---

## Ideias de melhorias para acrescentar

### Visual e UX
- **Gradiente no header:** fundo com gradiente sutil no título ou na nav.
- **Modo “compacto”:** nav em ícones + texto ao passar o mouse (sidebar).
- **Progresso do curso:** barra ou percentual “X% concluído” por período.
- **Favoritos:** marcar disciplinas/atalhos como favoritos e filtrar por eles.
- **Atalhos de teclado:** ex.: `Esc` fecha modais, `?` abre ajuda.

### Conteúdo
- **Modo “só leitura” / impressão:** CSS `@media print` e botão “Versão para imprimir”.
- **Exportar resumo:** baixar conteúdo da disciplina em PDF ou Markdown.
- **Busca global:** buscar em todas as páginas (curso, atalhos, simulados).

### Técnico e performance
- **PWA:** `manifest.json` + service worker para uso offline e “instalar app”.
- **Lazy load:** carregar páginas/componentes sob demanda (React.lazy).
- **Acessibilidade:** revisar contraste (WCAG), `aria-labels`, navegação por teclado.
- **Analytics:** evento ao abrir disciplina ou concluir simulado (ex.: Firebase).

### Efeitos extras (se quiser mais dinâmico)
- **Skeleton loading:** placeholders animados enquanto o conteúdo carrega.
- **Micro-animação em botões:** ícone ou texto com leve movimento no hover.
- **Parallax leve:** fundo da página com movimento suave no scroll.
- **Toast/notificação:** “Copiado!” ao copiar um comando, com animação de entrada/saída.

---

## Resumo dos arquivos que controlam o visual

| Objetivo | Arquivo |
|----------|---------|
| Cores, fontes, animações globais | `src/index.css` |
| Menu, filtros, grid do curso | `src/App.css` |
| Cards das disciplinas | `src/components/StudyCard.css` |
| Modal de detalhe da disciplina | `src/components/StudyDetail.css` |
| Login | `src/components/Login.css` |
| Barra de busca | `src/components/SearchBar.css` |
| Atalhos (comandos) | `src/components/PaginaAtalhos.css` |
| Atalhos de teclado | `src/components/PaginaAtalhosTeclado.css` |
| Simulado | `src/components/PaginaSimulado.css` |
| Simulador (Cyber Defense) | `src/components/PaginaSimulador.css` |
| Demais páginas | `Pagina*.css` em `src/components/` |

Alterando principalmente `src/index.css` (variáveis) e os CSS dos componentes acima, você deixa o projeto **personalizado** e pode ir acrescentando os efeitos e melhorias que quiser.
