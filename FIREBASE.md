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

## 3. Autenticação anônima (para Firestore)

Para o app salvar tema e progresso no Firestore, é preciso ativar **Login anônimo**:

1. No [Firebase Console](https://console.firebase.google.com/) → seu projeto → **Authentication**
2. Aba **Sign-in method** → **Provedor anônimo** → Ativar → Salvar

## 4. Configuração do app (variáveis de ambiente)

1. No Firebase Console → **Configurações do projeto** (ícone de engrenagem) → **Seus apps**
2. Se ainda não tiver um app Web, clique em **</>** e registre um; anote o `apiKey`, `appId`, etc.
3. Na pasta do projeto, copie `.env.example` para `.env` e preencha:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=seguran-39f39.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seguran-39f39
VITE_FIREBASE_STORAGE_BUCKET=seguran-39f39.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

Sem o `.env` preenchido, o app continua funcionando com `localStorage` (tema e login); o Firestore só é usado quando as variáveis estão configuradas.

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
