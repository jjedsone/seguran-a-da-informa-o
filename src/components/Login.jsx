import { useState } from 'react';
import './Login.css';

const LOGIN_VALIDO = '565656';
const SENHA_VALIDA = '565656';

export default function Login({ onLogin }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');
    if (login === LOGIN_VALIDO && senha === SENHA_VALIDA) {
      onLogin();
    } else {
      setErro('Login ou senha incorretos.');
    }
  };

  return (
    <div className="login">
      <div className="login__card">
        <h1 className="login__titulo">Curso de Segurança Cibernética</h1>
        <p className="login__subtitulo">Entre para acessar o material</p>
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="login-usuario" className="login__label">
            Usuário
          </label>
          <input
            id="login-usuario"
            type="text"
            className="login__input"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Digite o usuário"
            autoComplete="username"
            autoFocus
          />
          <label htmlFor="login-senha" className="login__label">
            Senha
          </label>
          <input
            id="login-senha"
            type="password"
            className="login__input"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite a senha"
            autoComplete="current-password"
          />
          {erro && <p className="login__erro" role="alert">{erro}</p>}
          <button type="submit" className="login__btn">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
