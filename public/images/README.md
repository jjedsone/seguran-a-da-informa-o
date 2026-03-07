# Imagens do projeto

Você pode colocar aqui suas próprias imagens de **segurança da informação** e usá-las no app.

## Como usar imagens locais

1. Salve as imagens nesta pasta (`public/images/`), por exemplo:
   - `seguranca-header.png` – imagem do cabeçalho da página Curso
   - `seguranca-login.png` – imagem do card de login

2. Abra `src/data/imagens.js` e troque as URLs pelas rotas locais:

```js
// Exemplo com imagens locais:
export const IMAGEM_HEADER = '/images/seguranca-header.png';
export const IMAGEM_LOGIN = '/images/seguranca-login.png';
```

3. No Vite, arquivos em `public/` são servidos na raiz. Então `/images/seguranca-header.png` aponta para `public/images/seguranca-header.png`.

## Sugestões de temas para as imagens

- Cadeado, escudo, firewall
- Rede e proteção de dados
- Cybersecurity, análise de ameaças
- Cores em harmonia com o tema do app (verde destaque, fundo escuro)

Atualmente o app usa imagens gratuitas do Unsplash; você pode substituir por fotos ou ilustrações próprias a qualquer momento.
