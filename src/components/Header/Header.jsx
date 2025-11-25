import { useState, useRef } from 'react';
import { Search, Bell, User, Home, ShoppingCart } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { useSwipe } from '../../hooks/useSwipe';
import {
  HeaderContainer,
  HomeButton,
  SearchContainer,
  SearchInput,
  CartButton,
  IconsContainer,
  IconButton,
  UserButton,
} from './styles/HeaderStyles';

/**
 * @param {Object} props
 * @param {(query: string) => void} [props.onSearch]
 */
export const Header = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const headerRef = useRef(null);
  const { addToast } = useToast();

  /**
   * Handlers de swipe
   */
  useSwipe(headerRef, {
    onSwipeLeft: () => {
      addToast('Próxima seção →', 'info', 1500);
    },
    onSwipeRight: () => {
      addToast('← Seção anterior', 'info', 1500);
    },
  }, 30);

  /**
   * Handle search
   */
  const handleSearch = (value) => {
    setSearchValue(value);
    onSearch?.(value);
  };

  /**
   * Handle home click
   */
  const handleHomeClick = () => {
    addToast('Voltando à Home', 'info', 1500);
  };

  /**
   * Handle cart click
   */
  const handleCartClick = () => {
    addToast('Carrinho vazio', 'info', 1500);
  };

  return (
    <HeaderContainer ref={headerRef}>
      <HomeButton onClick={handleHomeClick} title="Home">
        <Home size={24} />
      </HomeButton>

      <SearchContainer>
        <Search size={20} color="#b3b3b3" />
        <SearchInput
          type="text"
          placeholder="O que você quer ouvir?"
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </SearchContainer>

      <CartButton onClick={handleCartClick} title="Cart">
        <ShoppingCart size={24} />
      </CartButton>

      <IconsContainer>
        <IconButton title="Notifications">
          <Bell size={20} />
        </IconButton>
        <UserButton title="User">
          <User size={20} />
        </UserButton>
      </IconsContainer>
    </HeaderContainer>
  );
};

export default Header;
