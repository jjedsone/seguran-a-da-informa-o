import { createContext, useContext, useState, useCallback, useRef } from 'react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({ visible: false, message: '' });
  const timeoutRef = useRef(null);

  const showToast = useCallback((message, duration = 2500) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setToast({ visible: true, message });
    timeoutRef.current = setTimeout(() => {
      setToast((t) => (t.visible ? { ...t, visible: false } : t));
    }, duration);
  }, []);

  const hideToast = useCallback(() => {
    setToast((t) => ({ ...t, visible: false }));
  }, []);

  const value = { toast, showToast, hideToast };

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toast.visible && (
        <div
          className="toast-global"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {toast.message}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) return { showToast: () => {}, hideToast: () => {}, toast: { visible: false } };
  return ctx;
}
