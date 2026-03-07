# Curso de Segurança Cibernética – Formação Profissional

Aplicação web de **curso completo de Segurança da Informação**: 5 períodos de disciplinas, apostila complementar (Governança, IAM, Criptografia, Nuvem, AppSec, IR/Forense, Threat Intel, Física/OT, Red Team), simulados (curso + certificações), atalhos de comando e teclado, certificações e material de estudo.

## Funcionalidades

- **Curso** – Disciplinas por período, busca, favoritos, progresso (disciplinas vistas)
- **Atalhos** – Comandos CMD/PowerShell, Kali, rede, LGPD, scripts, estratégias de ataque e defesa
- **Atalhos de teclado** – Windows, macOS e Linux
- **Proteção por segmento** – Conteúdo por área da empresa
- **Backdoor & Acesso remoto** – Material didático
- **Certificações** – Security+, CySA+, CASP+, OSCP
- **Aulas Práticas** – Roteiros e exercícios
- **Simulado** – Questões por período do curso e por certificação (220+ questões)
- **Simulador** – Cyber Defense (métricas)
- **Extrair o estudo** – Resumos por período e flashcards
- **Apostila** – Módulos do básico ao avançado (Governança, IAM, Criptografia, Nuvem, AppSec, IR, Threat Intel, Física/OT, Red Team)
- **Busca global** – Pesquisa em curso, atalhos e apostila (barra no menu)
- **Tema** claro/escuro, **impressão** (CSS print), **PWA** (manifest para “Adicionar à tela inicial”)

## Como rodar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação e desenvolvimento

```bash
# Clonar o repositório (ou baixar o ZIP)
git clone https://github.com/jjedsone/seguran-a-da-informa-o.git
cd seguran-a-da-informa-o

# Instalar dependências
npm install

# Rodar em desenvolvimento (http://localhost:5173)
npm run dev
```

### Build para produção

```bash
npm run build
```

A pasta `dist/` será gerada. Para preview local:

```bash
npm run preview
```

### Deploy no GitHub Pages

1. No repositório: **Settings → Pages**
2. **Source:** GitHub Actions (ou “Deploy from a branch”)
3. Se usar branch: escolha a branch (ex.: `main`) e pasta `/ (root)` ou `dist` conforme o workflow
4. Se usar **Vite** com branch: em `vite.config.js` use `base: '/nome-do-repo/'` (ex.: `base: '/seguran-a-da-informa-o/'`) e faça build; publique a pasta `dist` na branch `gh-pages` ou use um workflow que faça o build e deploy

Exemplo de `base` no `vite.config.js` para GitHub Pages:

```js
base: process.env.GITHUB_PAGES ? '/seguran-a-da-informa-o/' : '/',
```

E no workflow ou antes do build: `GITHUB_PAGES=1 npm run build`.

### Login

O app usa um **login simples** (apenas para controle de acesso à tela inicial). Credenciais padrão estão no código (ambiente de estudo). Para produção com usuários reais, recomenda-se integrar **Firebase Authentication** ou outro backend; o projeto já está preparado para Firebase (tema e progresso do simulado).

## Firebase (opcional)

Para sincronizar **tema** e **progresso do simulado** entre dispositivos:

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com)
2. Ative **Authentication** (método de login desejado) e **Firestore**
3. Copie `.env.example` para `.env` e preencha as variáveis:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

4. Deploy (se quiser hospedar no Firebase Hosting):

```bash
npm run build:firebase
npm run deploy:firebase
```

Sem Firebase, o app funciona normalmente (tema e progresso em `localStorage`).

## Estrutura do projeto

```
src/
  App.jsx           # Layout, navegação, estado global
  main.jsx
  index.css         # Variáveis de tema, estilos globais, print
  components/       # Páginas e componentes (Curso, Atalhos, Apostila, etc.)
  data/             # Conteúdo (estudos, questões, apostila, atalhos)
  lib/              # cursoStorage, firestorePrefs
public/
  images/           # Imagens (header, login)
```

## Scripts

| Comando              | Descrição                    |
|----------------------|------------------------------|
| `npm run dev`        | Servidor de desenvolvimento  |
| `npm run build`      | Build de produção            |
| `npm run preview`    | Preview do build             |
| `npm run build:firebase` | Build com base para Firebase |
| `npm run deploy:firebase` | Build + deploy Firebase  |
| `npm run lint`       | ESLint                      |

## Licença

Projeto educacional. Consulte o repositório para termos de uso.
