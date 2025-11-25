import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/globalStyles';

export const PlayerContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: linear-gradient(90deg, rgba(25, 20, 20, 0.6) 0%, rgba(24, 24, 24, 0.8) 100%);
  border-top: 1px solid ${colors.border};
  height: 90px;
  gap: 20px;
  backdrop-filter: blur(10px);
  animation: slideInLeft 0.5s ease;

  @media (max-width: ${breakpoints.tablet}) {
    height: 80px;
    padding: 10px 16px;
    gap: 16px;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 60px;
    padding: 6px 8px;
    gap: 6px;
    flex-wrap: wrap;
  }
`;

export const TrackInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 200px;
  flex: 0 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    min-width: 160px;
    gap: 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    min-width: 100px;
    gap: 8px;
  }
`;

export const TrackImage = styled.div`
  width: 56px;
  height: 56px;
  background-color: ${colors.surface};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background-size: cover;
  background-position: center;

  @media (max-width: ${breakpoints.tablet}) {
    width: 48px;
    height: 48px;
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
`;

export const TrackDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const TrackTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TrackArtist = styled.p`
  font-size: 12px;
  color: ${colors.textSecondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PlayerControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex: 1;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 12px;
  }
`;

export const ControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: transparent;
  color: ${colors.textSecondary};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  svg {
    width: 18px;
    height: 18px;
    transition: all 0.3s ease;
  }

  &:hover {
    color: ${colors.text};
    transform: scale(1.15);
  }

  &:hover svg {
    transform: rotate(10deg);
  }

  &.active {
    color: ${colors.primary};
    text-shadow: 0 0 8px rgba(29, 185, 84, 0.5);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 32px;
    height: 32px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const PlayButton = styled(ControlButton)`
  width: 40px;
  height: 40px;
  background-color: ${colors.primary};
  color: ${colors.text};
  box-shadow: 0 4px 12px rgba(29, 185, 84, 0.3);

  &:hover {
    background-color: ${colors.hover};
    color: ${colors.text};
    transform: scale(1.15);
    box-shadow: 0 6px 20px rgba(29, 185, 84, 0.5);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  max-width: 400px;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const TimeLabel = styled.span`
  font-size: 12px;
  color: ${colors.textSecondary};
  min-width: 30px;
`;

export const ProgressBar = styled.input`
  flex: 1;
  height: 4px;
  background: linear-gradient(to right, ${colors.primary} 0%, ${colors.primary} 30%, ${colors.surface} 30%);
  border-radius: 2px;
  appearance: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${colors.text};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${colors.text};
    cursor: pointer;
    border: none;
  }
`;

export const VolumeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 150px;
  flex: 0 0 auto;

  @media (max-width: ${breakpoints.mobile}) {
    min-width: 100px;
  }
`;

export const VolumeSlider = styled.input`
  width: 100px;
  height: 4px;
  background: linear-gradient(to right, ${colors.primary} 0%, ${colors.primary} 50%, ${colors.surface} 50%);
  border-radius: 2px;
  appearance: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${colors.text};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${colors.text};
    cursor: pointer;
    border: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 60px;
  }
`;
