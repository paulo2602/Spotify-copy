import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/globalStyles';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 12px 32px;
  background: linear-gradient(180deg, rgba(29, 185, 84, 0.15) 0%, rgba(15, 15, 15, 0) 100%);
  border-bottom: 1px solid ${colors.border};
  backdrop-filter: blur(10px);
  animation: slideInLeft 0.5s ease;
  position: relative;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 10px 24px;
    gap: 12px;
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    gap: 4px;
    flex-wrap: nowrap;
    min-height: 64px;
  }
`;

export const HomeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  color: ${colors.text};
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 48px;
    height: 48px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 44px;
    height: 44px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.surface};
  border-radius: 24px;
  padding: 12px 16px;
  width: 480px;
  border: 1px solid ${colors.border};
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  flex-shrink: 1;

  &:focus-within {
    border-color: ${colors.primary};
    background-color: rgba(25, 20, 20, 0.8);
    box-shadow: 0 4px 20px rgba(29, 185, 84, 0.3);
    transform: scale(1.02);
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 380px;
    padding: 10px 14px;
  }

  @media (max-width: 900px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 280px;
    padding: 8px 12px;
    border-radius: 20px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const SearchInput = styled.input`
  background: transparent;
  color: ${colors.text};
  font-size: 14px;
  flex: 1;
  margin-left: 8px;

  &::placeholder {
    color: ${colors.textSecondary};
  }
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  color: ${colors.text};
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 48px;
    height: 48px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  position: absolute;
  right: 32px;
  display: none;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 12px;
    right: 16px;
  }
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  color: ${colors.textSecondary};
  transition: all 0.3s ease;
  position: relative;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: ${colors.text};
    background-color: ${colors.surface};
    transform: scale(1.1);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(29, 185, 84, 0.2) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 36px;
    height: 36px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const UserButton = styled(IconButton)`
  background-color: ${colors.surface};
  color: ${colors.text};

  &:hover {
    background-color: ${colors.border};
  }
`;
