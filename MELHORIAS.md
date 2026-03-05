# Sugestões para deixar o projeto mais profissional

## Já implementado nesta entrega
- **Página Certificações**: informações completas sobre CompTIA (Security+, CySA+, CASP+) e OSCP.
- **Página Simulado**: mais de 100 perguntas e respostas com explicações; filtro por certificação; navegação anterior/próxima e contador de acertos.

---

## Melhorias recomendadas

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
