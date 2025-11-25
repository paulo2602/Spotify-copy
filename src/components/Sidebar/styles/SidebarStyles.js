import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/globalStyles';

export const SidebarContainer = styled.aside`
  width: 300px;
  background: linear-gradient(180deg, #191414 0%, #0f0f0f 100%);
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 90px);
  overflow-y: auto;
  border-right: 1px solid ${colors.border};
  animation: slideInLeft 0.5s ease;

  @media (max-width: ${breakpoints.tablet}) {
    width: 250px;
    padding: 16px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  margin-bottom: 32px;
  margin-left: 0;
  padding-left: 8px;
  font-size: 24px;
  font-weight: bold;
  color: ${colors.primary};

  img {
    width: 36px;
    height: 36px;
    object-fit: contain;
    border-radius: 50%;
    filter: drop-shadow(0 2px 8px rgba(29, 185, 84, 0.3));
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 16px;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
`;

export const NavSection = styled.div`
  margin-bottom: 32px;
`;

export const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  margin-bottom: 8px;
  color: ${colors.textSecondary};
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent, rgba(29, 185, 84, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    color: ${colors.text};
    background-color: ${colors.surface};
    transform: translateX(4px);
    box-shadow: inset 0 0 8px rgba(29, 185, 84, 0.1);

    &::before {
      opacity: 1;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover svg {
    transform: scale(1.1) rotate(5deg);
    filter: drop-shadow(0 0 4px ${colors.primary});
  }

  span {
    font-size: 14px;
    font-weight: 500;
  }

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
    padding: 12px;

    span {
      display: none;
    }
  }
`;

export const PlaylistsSection = styled.div`
  margin-top: auto;
`;

export const PlaylistsTitle = styled.h3`
  display: none;
`;

export const PlaylistItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  margin-bottom: 12px;
  color: ${colors.textSecondary};
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 14px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(29, 185, 84, 0.15), transparent);
    transition: right 0.5s ease;
  }

  &:hover {
    color: ${colors.text};
    background-color: ${colors.surface};
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(29, 185, 84, 0.1);

    &::after {
      right: 100%;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover svg {
    transform: scale(1.15) rotate(8deg);
    color: ${colors.primary};
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;

    span {
      display: none;
    }
  }
`;

export const CreatePlaylistBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 12px;
  background: linear-gradient(135deg, transparent, rgba(29, 185, 84, 0.05));
  color: ${colors.textSecondary};
  border-radius: 6px;
  border: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(29, 185, 84, 0.2), transparent);
    opacity: 0;
    animation: slideLeft 0.6s ease infinite;
  }

  &:hover {
    color: ${colors.primary};
    background: linear-gradient(135deg, rgba(29, 185, 84, 0.1), rgba(29, 185, 84, 0.05));
    border-color: rgba(29, 185, 84, 0.3);
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(29, 185, 84, 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
    transition: all 0.3s ease;
  }

  &:hover svg {
    transform: rotate(90deg) scale(1.1);
    color: ${colors.primary};
  }

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;

    span {
      display: none;
    }
  }
`;
