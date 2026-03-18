# Deploy no Firebase Hosting e Firestore

## 1. Criar projeto no Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em **Adicionar projeto** e crie um projeto (ex.: `seguranca-da-informacao`)
3. Anote o **ID do projeto**

## 2. Firestore (banco de dados)

O Firestore já está configurado no projeto. O banco armazena preferências (tema) e progresso do simulado por usuário (login anônimo).

- **Publicar regras:** ao fazer deploy, as regras em `firestore.rules` são enviadas:

```bash
npx firebase deploy --only firestore
```

Ou tudo de uma vez:

```bash
npx firebase deploy
```

## 3. Autenticação

- **Login com Google (tela de login):** Authentication → **Sign-in method** → **Google** → Ativar.
- **Anônimo (tema/progresso no Firestore):** mesma aba → **Provedor anônimo** → Ativar.
- **Domínios autorizados:** Authentication → **Settings** → **Authorized domains** → inclua `localhost`, `127.0.0.1`, `seguran-39f39.web.app`, `seguran-39f39.firebaseapp.com`.

## 4. Configuração do app (`.env`)

Sem as variáveis `VITE_FIREBASE_*`, o site mostra login **demo** (usuário/senha). Com elas preenchidas, o login passa a ser **só com Google**.

**Opção A – Console:** Configurações do projeto → **Seus apps** → app Web → copie o objeto `firebaseConfig` para o `.env`.

**Opção B – CLI (na pasta do projeto, após `firebase login`):**

```bash
firebase apps:list --project seguran-39f39
firebase apps:sdkconfig web 1:89927120912:web:fc4c1ac92ff23fd635f295 --project seguran-39f39
```

Use os valores retornados no `.env`:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=seguran-39f39.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seguran-39f39
VITE_FIREBASE_STORAGE_BUCKET=seguran-39f39.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

Copie `.env.example` para `.env` e preencha (o arquivo `.env` não vai para o Git).

## 5. Ajustar o ID no projeto (se necessário)

Edite **`.firebaserc`** e use o ID do seu projeto:

```json
{
  "projects": {
    "default": "SEU_ID_DO_PROJETO"
  }
}
```

## 6. Fazer login e publicar

No terminal, na pasta do projeto:

```bash
npx firebase login
npm run deploy:firebase
```

Para publicar só o Hosting:

```bash
npm run build:firebase
npx firebase deploy --only hosting
```

Para publicar só as regras do Firestore:

```bash
npx firebase deploy --only firestore
```

O site ficará no ar em: **https://SEU_ID_DO_PROJETO.web.app**
