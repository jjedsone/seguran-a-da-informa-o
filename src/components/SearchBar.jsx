import './SearchBar.css';

export default function SearchBar({ value, onChange, placeholder = 'Buscar por título, resumo ou tag...' }) {
  return (
    <div className="search-bar">
      <span className="search-bar__icon" aria-hidden>🔍</span>
      <input
        type="search"
        className="search-bar__input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Buscar estudos"
      />
      {value && (
        <button
          type="button"
          className="search-bar__clear"
          onClick={() => onChange('')}
          aria-label="Limpar busca"
        >
          ✕
        </button>
      )}
    </div>
  );
}
