import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { auth, isFirebaseConfigured, logoutFirebase } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AUTH_KEY = 'seguranca-app-auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(() => localStorage.getItem(AUTH_KEY) === 'true');
  const [firebaseUser, setFirebaseUser] = useState(null);

  useEffect(() => {
    if (!isFirebaseConfigured() || !auth) return;
    const unsub = onAuthStateChanged(auth, (user) => {
      setFirebaseUser(user);
      if (user && !user.isAnonymous) {
        setAutenticado(true);
        localStorage.setItem(AUTH_KEY, 'true');
      }
    });
    return () => unsub();
  }, []);

  const login = useCallback(() => {
    localStorage.setItem(AUTH_KEY, 'true');
    setAutenticado(true);
  }, []);

  const logout = useCallback(async () => {
    await logoutFirebase();
    localStorage.removeItem(AUTH_KEY);
    setAutenticado(false);
    setFirebaseUser(null);
  }, []);

  const value = {
    autenticado,
    firebaseUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth deve ser usado dentro de AuthProvider');
  return ctx;
}
