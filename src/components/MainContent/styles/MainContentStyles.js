import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/globalStyles';

export const MainContentContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  animation: fadeIn 0.5s ease;
`;

export const ContentSection = styled.section`
  padding: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px;
  }

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 24px;
  color: ${colors.text};

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const PlaylistsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-bottom: 20px;
  }
`;

export const PlaylistCard = styled.div`
  background: linear-gradient(135deg, ${colors.surface} 0%, rgba(24, 24, 24, 0.5) 100%);
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(29, 185, 84, 0.1);
  animation: fadeIn 0.5s ease forwards;

  &:hover {
    background: linear-gradient(135deg, ${colors.border} 0%, rgba(40, 40, 40, 0.8) 100%);
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(29, 185, 84, 0.3);
    box-shadow: 0 12px 30px rgba(29, 185, 84, 0.2);

    .play-button {
      opacity: 1;
      transform: translateY(0) scale(1);
      animation: bounce 0.4s ease;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 12px;
  }
`;

export const PlaylistImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  margin-bottom: 12px;
  background-size: cover;
  background-position: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 36px;
    margin-bottom: 8px;
  }
`;

export const PlaylistName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const PlaylistDesc = styled.p`
  font-size: 12px;
  color: ${colors.textSecondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PlayButton = styled.button`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${colors.primary};
  color: ${colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(8px) scale(0.9);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), 0 0 16px rgba(29, 185, 84, 0.4);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${colors.hover};
    transform: scale(1.15);
    box-shadow: 0 8px 24px rgba(29, 185, 84, 0.4), 0 0 24px rgba(29, 185, 84, 0.6);
    filter: drop-shadow(0 0 8px ${colors.primary});
  }

  svg {
    width: 24px;
    height: 24px;
    margin-left: 2px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    bottom: 12px;
    right: 12px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const TracksTable = styled.div`
  margin-bottom: 40px;
`;

export const TrackHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 150px 80px;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid ${colors.border};
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${colors.textSecondary};
  text-transform: uppercase;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 100px 80px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const TrackRow = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 150px 80px;
  gap: 16px;
  padding: 8px 12px;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    background-color: ${colors.surface};
    transform: translateX(4px);
    box-shadow: inset 0 0 12px rgba(29, 185, 84, 0.1);

    .track-play-btn {
      opacity: 1;
      transform: scale(1.2);
      animation: bounce 0.3s ease;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 100px 80px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 12px 8px;
    margin-bottom: 12px;
  }
`;

export const TrackIndex = styled.div`
  color: ${colors.textSecondary};
  font-weight: 600;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const TrackInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`;

export const TrackImage = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${colors.surface};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
  background-size: cover;
  background-position: center;

  @media (max-width: ${breakpoints.mobile}) {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }
`;

export const TrackDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

export const TrackTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const TrackArtist = styled.p`
  font-size: 12px;
  color: ${colors.textSecondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TrackAlbum = styled.p`
  font-size: 13px;
  color: ${colors.textSecondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const TrackDuration = styled.div`
  font-size: 13px;
  color: ${colors.textSecondary};
  text-align: right;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;
`;

export const TrackPlayBtn = styled.button`
  opacity: 0;
  transition: all 0.2s ease;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  border: none;
  background: none;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    transition: all 0.2s ease;
  }

  &:hover svg {
    color: ${colors.hover};
    filter: drop-shadow(0 0 4px ${colors.primary});
  }

  @media (max-width: ${breakpoints.mobile}) {
    opacity: 1;
  }
`;

export const HeartButton = styled.button`
  opacity: 0;
  transition: all 0.2s ease;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.liked ? colors.primary : colors.textSecondary)};
  border: none;
  background: none;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
    transition: all 0.2s ease;
  }

  &:hover {
    color: ${colors.primary};

    svg {
      filter: drop-shadow(0 0 4px ${colors.primary});
      animation: bounce 0.3s ease;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    opacity: 1;
  }
`;

export const PlaylistBadge = styled.div`
  display: none;
`;

export const SpotifyLogo = styled.img`
  width: 120px;
  height: auto;
  margin: 0 auto 24px;
  display: block;
`;
