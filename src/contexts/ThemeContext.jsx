import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { initFirebaseUserAndPrefs, subscribePreferencias, savePreferencias } from '../lib/firestorePrefs';

const THEME_KEY = 'seguranca-app-theme';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState(() => localStorage.getItem(THEME_KEY) || 'dark');
  const [firebaseUserId, setFirebaseUserId] = useState(null);
  const temaFromFirestoreRef = useRef(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem(THEME_KEY, tema);
  }, [tema]);

  useEffect(() => {
    let unsub = () => {};
    initFirebaseUserAndPrefs().then((uid) => {
      if (!uid) return;
      setFirebaseUserId(uid);
      unsub = subscribePreferencias(uid, (data) => {
        if (data.tema && !temaFromFirestoreRef.current) {
          temaFromFirestoreRef.current = true;
          setTema(data.tema);
        }
      });
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!firebaseUserId) return;
    savePreferencias(firebaseUserId, { tema }).catch(() => {});
  }, [firebaseUserId, tema]);

  const toggleTema = () => setTema((t) => (t === 'dark' ? 'light' : 'dark'));

  const value = {
    tema,
    setTema,
    toggleTema,
    firebaseUserId,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  return ctx;
}
