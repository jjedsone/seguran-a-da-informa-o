# Sugestões para deixar o projeto mais profissional

## Já implementado nesta entrega
- **Página Certificações**: informações completas sobre CompTIA (Security+, CySA+, CASP+) e OSCP.
- **Página Simulado**: mais de 100 perguntas e respostas com explicações; filtro por certificação; navegação anterior/próxima e contador de acertos.

## Melhorias implementadas (última atualização)

### Segurança
- **Login**: Firebase Auth (e-mail/senha) quando configurado; senão uso de credenciais via variáveis de ambiente (`VITE_DEMO_USER`, `VITE_DEMO_PASS`) — sem credenciais fixas no código.
- **Variáveis de ambiente**: `.env.example` com todas as chaves Firebase e instruções; uso de `import.meta.env` no `firebase.js`.

### Arquitetura e rotas
- **React Router**: rotas por URL (`/`, `/atalhos`, `/simulado`, etc.), histórico do navegador e deep links.
- **Contextos**: `AuthContext` (login/logout), `ThemeContext` (tema + Firebase sync), `ToastContext` (feedback global), `FavoritosContext` (favoritos e vistos).

### UX
- **Menu hamburger** no mobile (telas &lt; 1024px): links em menu colapsável.
- **Breadcrumb**: “Início > [página atual]” para orientação.
- **Toast global**: mensagem “Copiado!” ao copiar código (Atalhos e Backdoor).
- **Modal**: tecla **Esc** para fechar (já existia em `StudyDetail`).

### Simulado
- **Timer opcional**: checkbox e campo em minutos na tela inicial; contagem regressiva durante o simulado.
- **Resumo ao final**: tela com acertos/total, percentual e lista de questões erradas para revisão.
- **Modo “só erradas”**: botão “Revisar só erradas” no resumo; filtra apenas as questões respondidas incorretamente.
- **Botão “Ver resumo”** na barra durante o simulado.

### Performance e PWA
- **Skeleton** no fallback do `Suspense` em vez de “Carregando…”.
- **PWA**: `vite-plugin-pwa` com service worker (autoUpdate), cache de assets e manifest (nome, tema, standalone).

### Acessibilidade
- **ARIA**: `aria-label`, `aria-expanded`, `aria-controls` no menu; `role="status"` e `aria-live` no toast e no resumo; `role="timer"` no cronômetro.
- **Teclado**: setas ← → no simulado (anterior/próxima); **Enter** para confirmar resposta.
- **Login**: `aria-required`, `aria-invalid`, `aria-describedby` nos campos; botão desabilitado durante carregamento.

### Deploy
- **GitHub Actions**: workflow `.github/workflows/deploy-firebase.yml` para build e deploy no Firebase Hosting ao push em `main` (requer secrets configurados no repositório).

---

## Melhorias recomendadas (próximos passos)

### 1. **Navegação e UX**
- **Menu colapsável** no mobile: em telas pequenas, agrupar os links em um menu hambúrguer para não poluir o header.
- **Breadcrumb** ou indicador de página atual mais visível (ex.: subtítulo “Você está em: Certificações”).
- **Atalho de teclado** no Simulado: setas ← → para anterior/próxima; Enter para confirmar resposta.

### 2. **Simulado**
- **Timer opcional**: modo “prova cronometrada” (ex.: 90 min para Security+) para simular tempo real.
- **Resumo ao final**: tela com total de acertos, percentual e lista de questões erradas para revisão.
- **Persistência**: salvar progresso no `localStorage` (última questão, histórico de respostas) para retomar depois.
- **Modo “só erradas”**: após terminar, permitir refazer apenas as que foram respondidas incorretamente.

### 3. **Certificações**
- **Links externos** abrindo em nova aba (já feito com `target="_blank"` e `rel="noopener noreferrer"`).
- **Favoritos**: marcar certificações de interesse e listar em “Minhas certificações” (localStorage ou backend futuro).

### 4. **Visual e acessibilidade**
- **Contraste**: garantir que badges e textos atendam WCAG (já há uso de cores distintas por certificação).
- **Focus visible**: manter e reforçar o outline em todos os botões e links (já definido no `index.css`).
- **Meta description e título** por “página” (React Helmet ou atualizar `document.title` ao trocar de aba) para SEO.

### 5. **Performance**
- **Lazy loading** de rotas: carregar `PaginaSimulado` e `PaginaCertificacoes` só quando acessadas (`React.lazy` + `Suspense`).
- **Build**: o bundle já está em um chunk; considerar dividir o arquivo de questões em chunks por certificação se o conjunto crescer muito.

### 6. **Conteúdo**
- **Mais questões**: ampliar o banco (ex.: 200+) e revisar periodicamente com base nos objetivos oficiais das provas.
- **Tags por domínio**: permitir filtrar o simulado por domínio (ex.: “Security Architecture”) além da certificação.
- **Referências**: adicionar link “Fonte: CompTIA / Offensive Security” nas páginas de certificação.

### 7. **Deploy e CI/CD**
- **GitHub Actions**: o projeto já tem `.github/workflows`; configurar deploy automático no Firebase ao push na branch `main`.
- **Variáveis de ambiente**: se no futuro houver API ou Firebase Auth, usar `.env` e não commitar segredos.

### 8. **Segurança e boas práticas**
- **Login**: hoje é apenas um flag no `localStorage`; para produção, considerar Firebase Auth ou outro IdP.
- **HTTPS**: Firebase Hosting já serve em HTTPS; manter e ativar HSTS se necessário.

---

## Subir no GitHub

Se ainda não tiver um repositório no GitHub:

1. Crie um novo repositório em https://github.com/new (ex.: `seguranca-informacao`).
2. No terminal, na pasta do projeto:
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
   git branch -M main
   git push -u origin main
   ```
3. Para deploy automático no Firebase, configure o segredo `FIREBASE_SERVICE_ACCOUNT` (ou token) no GitHub conforme a documentação do Firebase CI.

---

## Deploy no Firebase

O build já foi gerado em `dist/`. Para publicar:

```bash
npm run build
npx firebase deploy
```

Se aparecer erro de autenticação, faça login primeiro:

```bash
npx firebase login
```

Depois execute novamente `npx firebase deploy`.
