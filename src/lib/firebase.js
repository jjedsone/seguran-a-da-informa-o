import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? 'seguran-39f39.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? 'seguran-39f39',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? 'seguran-39f39.appspot.com',
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

export async function ensureAnonymousAuth() {
  if (!isFirebaseConfigured() || !auth) return null;
  const { user } = auth.currentUser
    ? { user: auth.currentUser }
    : await signInAnonymously(auth);
  return user;
}
