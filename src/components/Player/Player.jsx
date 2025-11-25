import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';
import { useState } from 'react';
import { colors } from '../../styles/globalStyles';
import {
  PlayerContainer,
  TrackInfo,
  TrackImage,
  TrackDetails,
  TrackTitle,
  TrackArtist,
  PlayerControls,
  ControlButton,
  PlayButton,
  ProgressContainer,
  TimeLabel,
  ProgressBar,
  VolumeContainer,
  VolumeSlider,
} from './styles/PlayerStyles';

/**
 * @typedef {Object} CurrentTrack
 * @property {string} id
 * @property {string} title
 * @property {string} artist
 * @property {string} image
 * @property {number} duration
 */

/**
 * Componente Player - Controles de reprodução e informações da faixa atual
 * @component
 * @returns {JSX.Element}
 */
export const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(100);
  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState(0); // 0: no repeat, 1: repeat all, 2: repeat one

  /** @type {CurrentTrack} */
  const currentTrack = {
    id: '1',
    title: 'Graça Divina',
    artist: 'Damares',
    image: '/images/damares.svg',
    duration: 245,
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const handleRepeat = () => {
    setRepeatMode((prev) => (prev + 1) % 3);
  };

  const handleProgressChange = (e) => {
    setCurrentTime(parseFloat(e.target.value));
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <PlayerContainer>
      <TrackInfo>
        <TrackImage style={{ backgroundImage: `url('${currentTrack.image}')` }}></TrackImage>
        <TrackDetails>
          <TrackTitle>{currentTrack.title}</TrackTitle>
          <TrackArtist>{currentTrack.artist}</TrackArtist>
        </TrackDetails>
      </TrackInfo>

      <PlayerControls>
        <ControlButton
          isShuffle={isShuffle}
          onClick={handleShuffle}
          title="Shuffle"
        >
          <Shuffle size={20} />
        </ControlButton>

        <ControlButton onClick={() => {}} title="Previous">
          <SkipBack size={20} />
        </ControlButton>

        <PlayButton isPlaying={isPlaying} onClick={handlePlayPause}>
          {isPlaying ? <Pause size={28} /> : <Play size={28} />}
        </PlayButton>

        <ControlButton onClick={() => {}} title="Next">
          <SkipForward size={20} />
        </ControlButton>

        <ControlButton
          repeatMode={repeatMode}
          onClick={handleRepeat}
          title={repeatMode === 0 ? 'Repeat off' : repeatMode === 1 ? 'Repeat all' : 'Repeat one'}
        >
          <Repeat size={20} />
        </ControlButton>
      </PlayerControls>

      <ProgressContainer>
        <TimeLabel>{formatTime(currentTime)}</TimeLabel>
        <ProgressBar
          type="range"
          min="0"
          max={currentTrack.duration}
          value={currentTime}
          onChange={handleProgressChange}
        />
        <TimeLabel>{formatTime(currentTrack.duration)}</TimeLabel>
      </ProgressContainer>

      <VolumeContainer>
        <Volume2 size={20} color={colors.textSecondary} />
        <VolumeSlider
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
      </VolumeContainer>
    </PlayerContainer>
  );
};

export default Player;
