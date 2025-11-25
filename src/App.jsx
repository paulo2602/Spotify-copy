import { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyle, breakpoints } from './styles/globalStyles';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { MainContent } from './components/MainContent/MainContent';
import { Player } from './components/Player/Player';
import { ToastProvider } from './context/ToastContext';
import { mockTracks } from './data/mockData';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const MainLayout = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

/**
 * Componente principal da aplicação
 */
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ToastProvider>
      <>
        <GlobalStyle />
        <AppContainer>
          <MainLayout>
            <Sidebar onNavigate={setCurrentPage} />
            <ContentWrapper>
              <Header onSearch={setSearchQuery} />
              <MainContent />
            </ContentWrapper>
          </MainLayout>
          <Player
            currentTrack={{
              title: mockTracks[0].title,
              artist: mockTracks[0].artist,
              image: mockTracks[0].image,
            }}
          />
        </AppContainer>
      </>
    </ToastProvider>
  );
}

export default App;
