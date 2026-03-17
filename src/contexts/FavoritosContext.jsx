import { createContext, useContext, useState, useCallback } from 'react';
import { getFavoritos, getVistos, toggleFavorito, marcarComoVisto } from '../lib/cursoStorage';

const FavoritosContext = createContext(null);

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState(() => getFavoritos());
  const [vistos, setVistos] = useState(() => getVistos());

  const refresh = useCallback(() => {
    setFavoritos(getFavoritos());
    setVistos(getVistos());
  }, []);

  const handleToggleFavorito = useCallback((id, e) => {
    if (e) e.stopPropagation();
    toggleFavorito(id);
    setFavoritos(getFavoritos());
  }, []);

  const marcarVisto = useCallback((id) => {
    if (id) marcarComoVisto(id);
    setVistos(getVistos());
  }, []);

  const value = {
    favoritos,
    vistos,
    refresh,
    toggleFavorito: handleToggleFavorito,
    marcarVisto,
  };

  return (
    <FavoritosContext.Provider value={value}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  const ctx = useContext(FavoritosContext);
  if (!ctx) throw new Error('useFavoritos deve ser usado dentro de FavoritosProvider');
  return ctx;
}
