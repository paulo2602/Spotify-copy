import { useState } from 'react';
import { Home, Search, Music, Heart, Plus } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import {
  SidebarContainer,
  Logo,
  NavSection,
  NavItem,
  PlaylistsSection,
  PlaylistsTitle,
  PlaylistItem,
  CreatePlaylistBtn,
} from './styles/SidebarStyles';

/**
 * @param {Object} props
 * @param {(page: string) => void} [props.onNavigate]
 */
export const Sidebar = ({ onNavigate }) => {
  const [playlists, setPlaylists] = useState(['Liked Songs', 'Discover', 'Recent', 'Saved']);
  const { addToast } = useToast();

  /**
   * Handle criar playlist
   */
  const handleCreatePlaylist = () => {
    addToast('Playlist criada com sucesso!', 'success');
  };

  return (
    <SidebarContainer>
      <Logo>
        <img src="spotify-logo.png" alt="Spotify" />
      </Logo>

      <NavSection>
        <NavItem onClick={() => onNavigate?.('home')}>
          <Home size={24} />
          <span>Home</span>
        </NavItem>
        <NavItem onClick={() => onNavigate?.('search')}>
          <Search size={24} />
          <span>Search</span>
        </NavItem>
        <NavItem onClick={() => onNavigate?.('library')}>
          <Music size={24} />
          <span>Your Library</span>
        </NavItem>
      </NavSection>

      <PlaylistsSection>
        <PlaylistsTitle>Playlists</PlaylistsTitle>
        <CreatePlaylistBtn onClick={handleCreatePlaylist}>
          <Plus size={20} />
          <span>Create Playlist</span>
        </CreatePlaylistBtn>

        {playlists.map((playlist) => (
          <PlaylistItem key={playlist} onClick={() => onNavigate?.('playlist')}>
            <Heart size={20} />
            <span>{playlist}</span>
          </PlaylistItem>
        ))}
      </PlaylistsSection>
    </SidebarContainer>
  );
};

export default Sidebar;
