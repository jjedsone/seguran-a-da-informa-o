import { useState } from 'react';
import { IMAGEM_LOGIN } from '../data/imagens';
import { isFirebaseConfigured, loginEmailPassword, enviarRedefinicaoSenha, salvarSolicitacaoAcesso } from '../lib/firebase';
import './Login.css';

/** Credenciais de demonstração apenas via variáveis de ambiente (nunca no código). */
function getDemoCredentials() {
  const user = import.meta.env.VITE_DEMO_USER ?? '';
  const pass = import.meta.env.VITE_DEMO_PASS ?? '';
  return { user: String(user).trim(), pass: String(pass).trim() };
}

export default function Login({ onLogin }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [imgQuebrada, setImgQuebrada] = useState(false);

  // Modais: 'recuperar' | 'cadastro' | null
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
    setErro('');
    const email = login.trim();
    const password = senha;

    if (isFirebaseConfigured()) {
      setCarregando(true);
      const { user, error } = await loginEmailPassword(email, password);
      setCarregando(false);
      if (error) {
        setErro(error);
        return;
      }
      if (user) {
        onLogin();
        return;
      }
    }

    const { user: demoUser, pass: demoPass } = getDemoCredentials();
    if (demoUser && demoPass && email === demoUser && password === demoPass) {
      onLogin();
      return;
    }
    setErro('Usuário ou senha incorretos.');
  };

  const handleRecuperarSenha = async (e) => {
    e.preventDefault();
    setErroRecuperar('');
    const email = emailRecuperar.trim();
    if (!email) {
      setErroRecuperar('Informe o e-mail.');
      return;
    }
    if (isFirebaseConfigured()) {
      setCarregandoRecuperar(true);
      const { error } = await enviarRedefinicaoSenha(email);
      setCarregandoRecuperar(false);
      if (error) {
        setErroRecuperar(error);
        return;
      }
      setMsgRecuperar('Se existir uma conta com este e-mail, você receberá um link para redefinir a senha. Verifique a caixa de entrada e o spam.');
      setEmailRecuperar('');
    } else {
      setMsgRecuperar('Entre em contato com o administrador para redefinir sua senha.');
    }
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
    if (isFirebaseConfigured()) {
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
        <p className="login__subtitulo">Entre para acessar o material</p>
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
          <button type="submit" className="login__btn" disabled={carregando}>
            {carregando ? 'Entrando…' : 'Entrar'}
          </button>
        </form>
        <p className="login__cadastro-texto">
          Não tem acesso?{' '}
          <button
            type="button"
            className="login__link"
            onClick={() => { setModal('cadastro'); setSucessoCadastro(false); setErroCadastro(''); }}
          >
            Solicitar acesso
          </button>
        </p>
      </div>

      {/* Modal Esqueci senha */}
      {modal === 'recuperar' && (
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

      {/* Modal Solicitar acesso (cadastro) */}
      {modal === 'cadastro' && (
        <div className="login__overlay" onClick={fecharModal} role="dialog" aria-modal="true" aria-labelledby="login-cadastro-titulo">
          <div className="login__modal" onClick={(e) => e.stopPropagation()}>
            <h2 id="login-cadastro-titulo" className="login__modal-titulo">Solicitar acesso</h2>
            <p className="login__modal-desc">
              Preencha os dados abaixo. Você receberá uma mensagem com os dados de acesso quando seu cadastro for liberado.
            </p>
            {sucessoCadastro ? (
              <>
                <p className="login__sucesso" role="status">
                  Solicitação enviada! Você receberá uma mensagem com os dados de acesso assim que seu cadastro for aprovado.
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
