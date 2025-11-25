import styled from 'styled-components';
import { colors } from '../../styles/globalStyles';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: slideUp 0.3s ease;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;

  @media (max-width: 768px) {
    align-items: flex-end;
  }
`;

export const ModalContent = styled.div`
  background: linear-gradient(135deg, ${colors.surface} 0%, ${colors.secondary} 100%);
  border-radius: 12px;
  padding: 24px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 1px solid ${colors.border};
  animation: scaleIn 0.3s ease;

  @media (max-width: 768px) {
    border-radius: 16px 16px 0 0;
    width: 100%;
    max-height: 70vh;
    margin: 0;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${colors.border};

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: ${colors.text};
  }

  button {
    background: none;
    border: none;
    color: ${colors.textSecondary};
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.primary};
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 20px;
    }
  }
`;

export const ModalBody = styled.div`
  margin-bottom: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid ${colors.border};
`;

export const ModalButton = styled.button`
  flex: 1;
  padding: 12px 20px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  ${(props) =>
    props.primary
      ? `
    background: ${colors.primary};
    color: #000;

    &:hover {
      background: ${colors.hover};
      transform: scale(1.02);
    }
  `
      : `
    background: ${colors.surface};
    color: ${colors.text};
    border: 1px solid ${colors.border};

    &:hover {
      background: ${colors.border};
      transform: scale(1.02);
    }
  `}

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 13px;
  }
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  background: ${colors.secondary};
  border: 1px solid ${colors.border};
  color: ${colors.text};
  font-size: 14px;
  margin-bottom: 16px;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${colors.primary};
    background: rgba(29, 185, 84, 0.1);
    box-shadow: 0 0 0 3px rgba(29, 185, 84, 0.1);
  }

  &::placeholder {
    color: ${colors.textSecondary};
  }
`;

export const ModalTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  background: ${colors.secondary};
  border: 1px solid ${colors.border};
  color: ${colors.text};
  font-size: 14px;
  font-family: inherit;
  margin-bottom: 16px;
  resize: vertical;
  min-height: 80px;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${colors.primary};
    background: rgba(29, 185, 84, 0.1);
    box-shadow: 0 0 0 3px rgba(29, 185, 84, 0.1);
  }

  &::placeholder {
    color: ${colors.textSecondary};
  }
`;
