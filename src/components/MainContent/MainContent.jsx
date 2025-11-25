import React, { useState } from 'react';
import { Play, Heart } from 'lucide-react';
import { mockPlaylists, mockTracks } from '../../data/mockData';
import { useToast } from '../../context/ToastContext';
import { Modal } from '../Modal/Modal';
import {
  MainContentContainer,
  ContentSection,
  SectionTitle,
  PlaylistsGrid,
  PlaylistCard,
  PlaylistImage,
  PlaylistName,
  PlaylistDesc,
  PlayButton,
  TracksTable,
  TrackHeader,
  TrackRow,
  TrackIndex,
  TrackInfo,
  TrackImage,
  TrackDetails,
  TrackTitle,
  TrackArtist,
  TrackAlbum,
  TrackDuration,
  TrackPlayBtn,
  HeartButton,
} from './styles/MainContentStyles';

/**
 * Formata duração em segundos para formato MM:SS
 * @param {number} seconds
 * @returns {string}
 */
const formatDuration = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const MainContent = () => {
  const [likedTracks, setLikedTracks] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState({ name: '', description: '' });
  const { addToast } = useToast();

  /**
   * Alterna like de uma track
   */
  const toggleLike = (trackId) => {
    setLikedTracks((prev) => {
      const updated = new Set(prev);
      if (updated.has(trackId)) {
        updated.delete(trackId);
        addToast('Removido de favoritos', 'info');
      } else {
        updated.add(trackId);
        addToast('Adicionado aos favoritos', 'success');
      }
      return updated;
    });
  };

  /**
   * Busca em tempo real
   */
  const handleSearch = (value) => {
    setSearchQuery(value);
    if (value.length > 1) {
      const filtered = mockTracks.filter(
        (track) =>
          track.title.toLowerCase().includes(value.toLowerCase()) ||
          track.artist.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  /**
   * Cria nova playlist
   */
  const handleCreatePlaylist = () => {
    if (newPlaylist.name.trim()) {
      addToast(`Playlist "${newPlaylist.name}" criada com sucesso!`, 'success');
      setNewPlaylist({ name: '', description: '' });
      setIsModalOpen(false);
    } else {
      addToast('Digite o nome da playlist', 'error');
    }
  };

  /**
   * Play track
   */
  const handlePlayTrack = (track) => {
    addToast(`Reproduzindo: ${track.title}`, 'info');
  };

  return (
    <MainContentContainer>
      <ContentSection>
        <SectionTitle>Featured Playlists</SectionTitle>
        <PlaylistsGrid>
          {mockPlaylists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              onDoubleClick={() => handlePlayTrack(playlist)}
            >
              <PlaylistImage
                style={{ backgroundImage: `url('${playlist.image}')` }}
              ></PlaylistImage>
              <PlaylistName>{playlist.name}</PlaylistName>
              <PlaylistDesc>{playlist.description}</PlaylistDesc>
              <PlayButton
                className="play-button"
                onClick={() => handlePlayTrack(playlist)}
                title="Play"
              >
                <Play size={24} />
              </PlayButton>
            </PlaylistCard>
          ))}
        </PlaylistsGrid>

        <SectionTitle>Popular Tracks</SectionTitle>
        <TracksTable>
          <TrackHeader>
            <div>#</div>
            <div>Title</div>
            <div>Album</div>
            <div>Duration</div>
          </TrackHeader>

          {mockTracks.map((track, index) => (
            <TrackRow key={track.id}>
              <TrackIndex>{index + 1}</TrackIndex>
              <TrackInfo>
                <TrackImage
                  style={{ backgroundImage: `url('${track.image}')` }}
                ></TrackImage>
                <TrackDetails>
                  <TrackTitle>{track.title}</TrackTitle>
                  <TrackArtist>{track.artist}</TrackArtist>
                </TrackDetails>
              </TrackInfo>
              <TrackAlbum>{track.album}</TrackAlbum>
              <TrackDuration>
                <TrackPlayBtn
                  className="track-play-btn"
                  onClick={() => handlePlayTrack(track)}
                  title="Play"
                >
                  <Play size={20} />
                </TrackPlayBtn>
                <HeartButton
                  liked={likedTracks.has(track.id)}
                  onClick={() => toggleLike(track.id)}
                  title="Add to favorites"
                >
                  <Heart size={18} fill={likedTracks.has(track.id) ? 'currentColor' : 'none'} />
                </HeartButton>
                <div>{formatDuration(track.duration)}</div>
              </TrackDuration>
            </TrackRow>
          ))}
        </TracksTable>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Create New Playlist"
          actions={[
            { label: 'Cancel', onClick: () => {} },
            { label: 'Create', onClick: handleCreatePlaylist, primary: true },
          ]}
        >
          <div>
            <input
              type="text"
              placeholder="Playlist name"
              value={newPlaylist.name}
              onChange={(e) =>
                setNewPlaylist({ ...newPlaylist, name: e.target.value })
              }
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #282828',
                background: '#191414',
                color: '#fff',
                marginBottom: '16px',
                fontSize: '14px',
              }}
            />
            <textarea
              placeholder="Description (optional)"
              value={newPlaylist.description}
              onChange={(e) =>
                setNewPlaylist({ ...newPlaylist, description: e.target.value })
              }
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #282828',
                background: '#191414',
                color: '#fff',
                marginBottom: '16px',
                fontSize: '14px',
                minHeight: '80px',
                fontFamily: 'inherit',
                resize: 'vertical',
              }}
            />
          </div>
        </Modal>
      </ContentSection>
    </MainContentContainer>
  );
};

export default MainContent;
