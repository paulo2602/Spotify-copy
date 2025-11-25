import React, { createContext, useContext, useState } from 'react';
import { ToastContainer, Toast } from './styles/ToastStyles';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

/**
 * Toast Context for global notifications
 */
const ToastContextData = createContext();

/**
 * Toast Provider Component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  /**
   * Adiciona um novo toast à tela
   * @param {string} message - Mensagem do toast
   * @param {string} type - Tipo: 'success', 'error', 'info'
   * @param {number} duration - Duração em ms (padrão: 3000)
   */
  const addToast = (message, type = 'info', duration = 3000) => {
    const id = Date.now();
    const newToast = { id, message, type };

    setToasts((prev) => [...prev, newToast]);

    if (duration) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }

    return id;
  };

  /**
   * Remove um toast específico
   * @param {number} id
   */
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContextData.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer>
        {toasts.map((toast) => (
          <Toast key={toast.id} type={toast.type}>
            {toast.type === 'success' && <CheckCircle size={20} />}
            {toast.type === 'error' && <AlertCircle size={20} />}
            {toast.type === 'info' && <Info size={20} />}
            <span>{toast.message}</span>
            <button onClick={() => removeToast(toast.id)}>
              <X size={16} />
            </button>
          </Toast>
        ))}
      </ToastContainer>
    </ToastContextData.Provider>
  );
};

/**
 * Hook para usar o Toast Context
 * @returns {Object} {addToast, removeToast}
 */
export const useToast = () => {
  const context = useContext(ToastContextData);
  if (!context) {
    throw new Error('useToast deve ser usado dentro de um ToastProvider');
  }
  return context;
};
