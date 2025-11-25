import styled from 'styled-components';
import { colors } from '../../styles/globalStyles';

export const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 9999;
  pointer-events: none;

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    left: 10px;
  }
`;

export const Toast = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: ${(props) => {
    switch (props.type) {
      case 'success':
        return 'linear-gradient(135deg, #1DB954, #1ed760)';
      case 'error':
        return 'linear-gradient(135deg, #e74c3c, #c0392b)';
      case 'info':
      default:
        return `linear-gradient(135deg, ${colors.surface}, ${colors.border})`;
    }
  }};
  color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  animation: slideUp 0.3s ease forwards;
  pointer-events: auto;
  min-width: 200px;
  max-width: 400px;
  font-size: 14px;
  font-weight: 500;

  svg {
    flex-shrink: 0;
    animation: slideInLeft 0.3s ease;
  }

  span {
    flex: 1;
  }

  button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    min-width: auto;
    max-width: 100%;
    font-size: 13px;
  }
`;
