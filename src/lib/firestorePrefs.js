import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { db, ensureAnonymousAuth, isFirebaseConfigured } from './firebase';

export async function getPreferencias(userId) {
  if (!isFirebaseConfigured() || !userId) return null;
  const ref = doc(db, 'users', userId);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

export function subscribePreferencias(userId, callback) {
  if (!isFirebaseConfigured() || !userId) return () => {};
  const ref = doc(db, 'users', userId);
  return onSnapshot(ref, (snap) => {
    callback(snap.exists() ? snap.data() : {});
  });
}

export async function savePreferencias(userId, data) {
  if (!isFirebaseConfigured() || !userId) return;
  const ref = doc(db, 'users', userId);
  await setDoc(ref, data, { merge: true });
}

export async function initFirebaseUserAndPrefs() {
  const user = await ensureAnonymousAuth();
  return user?.uid ?? null;
}

export async function saveSimuladoProgress(userId, progress) {
  if (!isFirebaseConfigured() || !userId) return;
  const ref = doc(db, 'users', userId);
  await setDoc(ref, {
    simulado: {
      acertos: progress.acertos,
      total: progress.total,
      updatedAt: new Date().toISOString(),
    },
  }, { merge: true });
}
