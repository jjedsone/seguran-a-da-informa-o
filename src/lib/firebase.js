import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID ?? '',
};

function isConfigValid() {
  return Boolean(
    firebaseConfig.apiKey &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
  );
}

let app = null;
let db = null;
let auth = null;

if (isConfigValid()) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
}

export { db, auth };

export function isFirebaseConfigured() {
  return isConfigValid();
}

/** Autenticação anônima para sync de preferências (tema, progresso). */
export async function ensureAnonymousAuth() {
  if (!isConfigValid() || !auth) return null;
  const { user } = auth.currentUser
    ? { user: auth.currentUser }
    : await signInAnonymously(auth);
  return user;
}

/** Login com conta Google (Gmail). Ative o provedor Google em Firebase Console → Authentication → Sign-in method. */
export async function loginWithGoogle() {
  if (!isConfigValid() || !auth) return { user: null, error: 'Firebase não configurado.' };
  try {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    const { user } = await signInWithPopup(auth, provider);
    return { user, error: null };
  } catch (err) {
    const code = err?.code || '';
    let msg = 'Não foi possível entrar com o Google.';
    if (code === 'auth/popup-closed-by-user') msg = 'Login cancelado.';
    else if (code === 'auth/popup-blocked') msg = 'Pop-up bloqueado. Permita pop-ups para este site e tente de novo.';
    else if (code === 'auth/unauthorized-domain') msg = 'Este domínio não está autorizado no Firebase. Adicione-o em Authentication → Settings → Authorized domains.';
    else if (code === 'auth/account-exists-with-different-credential') msg = 'Já existe uma conta com este e-mail usando outro método de login.';
    else if (err?.message) msg = err.message;
    return { user: null, error: msg };
  }
}

/** Login com e-mail e senha (Firebase Auth). Use em produção; configure usuários no Console Firebase. */
export async function loginEmailPassword(email, password) {
  if (!isConfigValid() || !auth) return { user: null, error: 'Firebase não configurado.' };
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return { user, error: null };
  } catch (err) {
    const msg = err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found'
      ? 'Usuário ou senha incorretos.'
      : err.message || 'Erro ao entrar.';
    return { user: null, error: msg };
  }
}

/** Logout (Firebase Auth). */
export async function logoutFirebase() {
  if (auth) await signOut(auth);
}

/** Enviar e-mail para redefinir senha (Firebase Auth). */
export async function enviarRedefinicaoSenha(email) {
  if (!isConfigValid() || !auth) return { ok: false, error: 'Firebase não configurado.' };
  try {
    await sendPasswordResetEmail(auth, email);
    return { ok: true, error: null };
  } catch (err) {
    const msg = err.code === 'auth/user-not-found'
      ? 'Não há conta com este e-mail.'
      : err.message || 'Erro ao enviar. Tente novamente.';
    return { ok: false, error: msg };
  }
}

/** Salvar solicitação de acesso (novo usuário) no Firestore para o admin liberar depois. */
export async function salvarSolicitacaoAcesso(dados) {
  if (!isConfigValid() || !db) return { ok: false, error: 'Firebase não configurado.' };
  try {
    const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
    await addDoc(collection(db, 'solicitacoesAcesso'), {
      nome: dados.nome?.trim() || '',
      email: dados.email?.trim() || '',
      mensagem: dados.mensagem?.trim() || '',
      createdAt: serverTimestamp(),
    });
    return { ok: true, error: null };
  } catch (err) {
    return { ok: false, error: err.message || 'Erro ao enviar solicitação.' };
  }
}
