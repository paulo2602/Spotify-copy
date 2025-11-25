import React from 'react';
import { X } from 'lucide-react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from './ModalStyles';

/**
 * Modal Component
 * @param {Object} props
 * @param {boolean} props.isOpen - Se o modal está aberto
 * @param {function} props.onClose - Função callback ao fechar
 * @param {string} props.title - Título do modal
 * @param {React.ReactNode} props.children - Conteúdo do modal
 * @param {Array} props.actions - Array de ações [{label, onClick, primary}]
 */
export const Modal = ({ isOpen, onClose, title, children, actions }) => {
  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>{title}</h2>
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        {actions && actions.length > 0 && (
          <ModalFooter>
            {actions.map((action, index) => (
              <ModalButton
                key={index}
                primary={action.primary}
                onClick={() => {
                  action.onClick();
                  if (action.closeOnClick !== false) onClose();
                }}
              >
                {action.label}
              </ModalButton>
            ))}
          </ModalFooter>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};
