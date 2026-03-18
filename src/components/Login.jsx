import { useState } from 'react';
import { IMAGEM_LOGIN } from '../data/imagens';
import {
  isFirebaseConfigured,
  loginWithGoogle,
  enviarRedefinicaoSenha,
  salvarSolicitacaoAcesso,
} from '../lib/firebase';
import './Login.css';

/** Credenciais de demonstração apenas via variáveis de ambiente (sem Firebase). */
function getDemoCredentials() {
  const user = import.meta.env.VITE_DEMO_USER ?? '';
  const pass = import.meta.env.VITE_DEMO_PASS ?? '';
  return { user: String(user).trim(), pass: String(pass).trim() };
}

export default function Login({ onLogin }) {
  const firebaseOn = isFirebaseConfigured();
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregandoGoogle, setCarregandoGoogle] = useState(false);
  const [imgQuebrada, setImgQuebrada] = useState(false);

  const [modal, setModal] = useState(null);
  const [emailRecuperar, setEmailRecuperar] = useState('');
  const [msgRecuperar, setMsgRecuperar] = useState('');
  const [nomeCadastro, setNomeCadastro] = useState('');
  const [emailCadastro, setEmailCadastro] = useState('');
  const [mensagemCadastro, setMensagemCadastro] = useState('');
  const [sucessoCadastro, setSucessoCadastro] = useState(false);
  const [carregandoRecuperar, setCarregandoRecuperar] = useState(false);
  const [carregandoCadastro, setCarregandoCadastro] = useState(false);
  const [erroRecuperar, setErroRecuperar] = useState('');
  const [erroCadastro, setErroCadastro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firebaseOn) return;
    setErro('');
    const email = login.trim();
    const password = senha;
    const { user: demoUser, pass: demoPass } = getDemoCredentials();
    if (demoUser && demoPass && email === demoUser && password === demoPass) {
      onLogin();
      return;
    }
    setErro('Usuário ou senha incorretos. Configure VITE_DEMO_USER e VITE_DEMO_PASS no .env para modo local.');
  };

  const handleGoogleLogin = async () => {
    setErro('');
    setCarregandoGoogle(true);
    const { user, error } = await loginWithGoogle();
    setCarregandoGoogle(false);
    if (error) {
      setErro(error);
      return;
    }
    if (user) onLogin();
  };

  const handleRecuperarSenha = async (e) => {
    e.preventDefault();
    setErroRecuperar('');
    const email = emailRecuperar.trim();
    if (!email) {
      setErroRecuperar('Informe o e-mail.');
      return;
    }
    if (!isFirebaseConfigured()) {
      setMsgRecuperar('Entre em contato com o administrador para redefinir sua senha.');
      return;
    }
    setCarregandoRecuperar(true);
    const { error } = await enviarRedefinicaoSenha(email);
    setCarregandoRecuperar(false);
    if (error) {
      setErroRecuperar(error);
      return;
    }
    setMsgRecuperar('Se existir uma conta com este e-mail, você receberá um link para redefinir a senha. Verifique a caixa de entrada e o spam.');
    setEmailRecuperar('');
  };

  const handleSolicitarAcesso = async (e) => {
    e.preventDefault();
    setErroCadastro('');
    const nome = nomeCadastro.trim();
    const email = emailCadastro.trim();
    if (!email) {
      setErroCadastro('Informe o e-mail.');
      return;
    }
    if (firebaseOn) {
      setCarregandoCadastro(true);
      const { error } = await salvarSolicitacaoAcesso({ nome, email, mensagem: mensagemCadastro });
      setCarregandoCadastro(false);
      if (error) {
        setErroCadastro(error);
        return;
      }
    }
    setSucessoCadastro(true);
    setNomeCadastro('');
    setEmailCadastro('');
    setMensagemCadastro('');
  };

  const fecharModal = () => {
    setModal(null);
    setMsgRecuperar('');
    setErroRecuperar('');
    setErroCadastro('');
    setSucessoCadastro(false);
  };

  return (
    <div className="login">
      <div className="login__card">
        {!imgQuebrada ? (
          <img
            src={IMAGEM_LOGIN}
            alt=""
            className="login__img"
            onError={() => setImgQuebrada(true)}
          />
        ) : (
          <div className="login__img-placeholder" aria-hidden="true">
            <span className="login__img-icon">🔐</span>
            <span className="login__img-texto">Segurança Cibernética</span>
          </div>
        )}
        <h1 className="login__titulo">Curso de Segurança Cibernética</h1>

        {firebaseOn ? (
          <>
            <p className="login__subtitulo login__subtitulo--google">
              Entre com sua conta <strong>Google</strong> (Gmail). O acesso usa o e-mail da conta que você escolher no login do Google.
            </p>
            <button
              type="button"
              className="login__btn-google login__btn-google--principal"
              onClick={handleGoogleLogin}
              disabled={carregandoGoogle}
              aria-label="Entrar com conta Google"
            >
              <span className="login__btn-google-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
              </span>
              {carregandoGoogle ? 'Abrindo Google…' : 'Entrar com Google'}
            </button>
            {erro && (
              <p className="login__erro login__erro--google" role="alert">
                {erro}
              </p>
            )}
            <p className="login__google-dica">
              Não precisa digitar senha aqui: a autenticação é feita na janela segura do Google.
            </p>
          </>
        ) : (
          <>
            <p className="login__aviso-firebase" role="note">
              <strong>Firebase não configurado.</strong> Preencha <code>VITE_FIREBASE_*</code> no arquivo{' '}
              <code>.env</code> na raiz do projeto para usar <strong>Entrar com Google</strong>. Guia:{' '}
              <code>FIREBASE.md</code>.
            </p>
            <p className="login__subtitulo">Ou use o modo demonstração abaixo (usuário/senha do .env)</p>
            <form
              className="login__form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Formulário de login"
            >
              <label htmlFor="login-usuario" className="login__label">
                E-mail ou usuário
              </label>
              <input
                id="login-usuario"
                type="text"
                className="login__input"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Digite o e-mail ou usuário"
                autoComplete="username"
                autoFocus
                required
                aria-required="true"
                aria-invalid={!!erro}
                aria-describedby={erro ? 'login-erro' : undefined}
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
                required
                aria-required="true"
              />
              <button
                type="button"
                className="login__link"
                onClick={() => { setModal('recuperar'); setMsgRecuperar(''); setErroRecuperar(''); }}
              >
                Esqueci minha senha
              </button>
              {erro && (
                <p id="login-erro" className="login__erro" role="alert">
                  {erro}
                </p>
              )}
              <button type="submit" className="login__btn">
                Entrar
              </button>
            </form>
          </>
        )}

        <p className="login__cadastro-texto">
          {firebaseOn ? 'Precisa de liberação? ' : 'Não tem acesso? '}
          <button
            type="button"
            className="login__link"
            onClick={() => { setModal('cadastro'); setSucessoCadastro(false); setErroCadastro(''); }}
          >
            Solicitar acesso
          </button>
        </p>
      </div>

      {modal === 'recuperar' && !firebaseOn && (
        <div className="login__overlay" onClick={fecharModal} role="dialog" aria-modal="true" aria-labelledby="login-recuperar-titulo">
          <div className="login__modal" onClick={(e) => e.stopPropagation()}>
            <h2 id="login-recuperar-titulo" className="login__modal-titulo">Esqueci minha senha</h2>
            <p className="login__modal-desc">Informe o e-mail da sua conta. Enviaremos um link para redefinir a senha.</p>
            <form onSubmit={handleRecuperarSenha} className="login__form">
              <label htmlFor="login-email-recuperar" className="login__label">E-mail</label>
              <input
                id="login-email-recuperar"
                type="email"
                className="login__input"
                value={emailRecuperar}
                onChange={(e) => setEmailRecuperar(e.target.value)}
                placeholder="seu@email.com"
                autoComplete="email"
                disabled={!!msgRecuperar}
              />
              {msgRecuperar && <p className="login__sucesso" role="status">{msgRecuperar}</p>}
              {erroRecuperar && <p className="login__erro" role="alert">{erroRecuperar}</p>}
              <div className="login__modal-botoes">
                <button type="button" className="login__btn login__btn--sec" onClick={fecharModal}>
                  Fechar
                </button>
                {!msgRecuperar && (
                  <button type="submit" className="login__btn" disabled={carregandoRecuperar}>
                    {carregandoRecuperar ? 'Enviando…' : 'Enviar link'}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

      {modal === 'cadastro' && (
        <div className="login__overlay" onClick={fecharModal} role="dialog" aria-modal="true" aria-labelledby="login-cadastro-titulo">
          <div className="login__modal" onClick={(e) => e.stopPropagation()}>
            <h2 id="login-cadastro-titulo" className="login__modal-titulo">Solicitar acesso</h2>
            <p className="login__modal-desc">
              {firebaseOn
                ? 'Envie seus dados. O administrador poderá entrar em contato.'
                : 'Preencha os dados abaixo. Você receberá uma mensagem com os dados de acesso quando seu cadastro for liberado.'}
            </p>
            {sucessoCadastro ? (
              <>
                <p className="login__sucesso" role="status">
                  Solicitação enviada! Você receberá retorno em breve.
                </p>
                <button type="button" className="login__btn" onClick={fecharModal}>
                  Fechar
                </button>
              </>
            ) : (
              <form onSubmit={handleSolicitarAcesso} className="login__form">
                <label htmlFor="login-cadastro-nome" className="login__label">Nome</label>
                <input
                  id="login-cadastro-nome"
                  type="text"
                  className="login__input"
                  value={nomeCadastro}
                  onChange={(e) => setNomeCadastro(e.target.value)}
                  placeholder="Seu nome"
                  autoComplete="name"
                />
                <label htmlFor="login-cadastro-email" className="login__label">E-mail *</label>
                <input
                  id="login-cadastro-email"
                  type="email"
                  className="login__input"
                  value={emailCadastro}
                  onChange={(e) => setEmailCadastro(e.target.value)}
                  placeholder="seu@email.com"
                  autoComplete="email"
                  required
                />
                <label htmlFor="login-cadastro-msg" className="login__label">Mensagem (opcional)</label>
                <textarea
                  id="login-cadastro-msg"
                  className="login__input login__textarea"
                  value={mensagemCadastro}
                  onChange={(e) => setMensagemCadastro(e.target.value)}
                  placeholder="Motivo do interesse ou observação"
                  rows={3}
                />
                {erroCadastro && <p className="login__erro" role="alert">{erroCadastro}</p>}
                <div className="login__modal-botoes">
                  <button type="button" className="login__btn login__btn--sec" onClick={fecharModal}>
                    Cancelar
                  </button>
                  <button type="submit" className="login__btn" disabled={carregandoCadastro}>
                    {carregandoCadastro ? 'Enviando…' : 'Enviar solicitação'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
