# Deploy no Firebase Hosting

## 1. Criar projeto no Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em **Adicionar projeto** e crie um projeto (ex.: `seguranca-da-informacao`)
3. Anote o **ID do projeto**

## 2. Ajustar o ID no projeto

Edite o arquivo **`.firebaserc`** e troque `seguranca-da-informacao` pelo ID do seu projeto:

```json
{
  "projects": {
    "default": "SEU_ID_DO_PROJETO"
  }
}
```

## 3. Fazer login e publicar

No terminal, na pasta do projeto:

```bash
npx firebase login
npm run deploy:firebase
```

O site ficará no ar em: **https://SEU_ID_DO_PROJETO.web.app**
