// Persistência local: favoritos e disciplinas vistas (progresso do curso)

const FAVORITOS_KEY = 'seguranca-app-favoritos';
const VISTOS_KEY = 'seguranca-app-vistos';

function parseIds(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

function saveIds(key, set) {
  localStorage.setItem(key, JSON.stringify([...set]));
}

export function getFavoritos() {
  return parseIds(FAVORITOS_KEY);
}

export function toggleFavorito(id) {
  const set = parseIds(FAVORITOS_KEY);
  if (set.has(id)) set.delete(id);
  else set.add(id);
  saveIds(FAVORITOS_KEY, set);
  return set;
}

export function getVistos() {
  return parseIds(VISTOS_KEY);
}

export function marcarComoVisto(id) {
  const set = parseIds(VISTOS_KEY);
  set.add(id);
  saveIds(VISTOS_KEY, set);
  return set;
}
