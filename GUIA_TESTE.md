#  Guia de Teste - Spotify Clone com Todas as Melhorias

##  Como Testar as Melhorias

### Pré-requisitos
```bash
cd /Users/thiagomoreira/Documents/Spotify-copia
npm install
npm run dev
```

O servidor estará rodando em `http://localhost:5173`

---

## 1⃣ Testando Animações e Transições

###  Card Hover (Playlist)
- **O quê:** Passe o mouse sobre um card de playlist
- **Esperado:** 
  - Card sobe 8px (translateY)
  - Background escurece
  - Border muda de cor (mais verde)
  - Box-shadow com glow verde aparece
  - Play button aparece com bounce

###  Play Button Glow
- **O quê:** Hover no play button dentro do card
- **Esperado:**
  - Button fica mais brilhante
  - Drop-shadow aumenta
  - Scale aumenta para 1.15
  - Animação fluida com cubic-bezier

###  Sidebar Icons
- **O quê:** Hover nos ícones da sidebar
- **Esperado:**
  - Ícone rotaciona 5°
  - Scale aumenta para 1.1
  - Drop-shadow verde aparece
  - Background do item fica mais escuro

###  Playlist Items Shine
- **O quê:** Hover num item de playlist
- **Esperado:**
  - Shine effect (brilho) passa pelo item
  - Coração fica maior (1.15x)
  - Cor muda para verde Spotify

---

## 2⃣ Testando Componentes Visuais

###  Playlist Badge
- **O quê:** Hover num card de playlist
- **Esperado:**
  - Badge "Playlist" aparece no canto superior direito
  - Gradient verde/mais claro
  - Animação slideUp
  - Desaparece ao sair o mouse

###  Heart Button (Favoritos)
- **O quê:** Clique em um coração ao lado da duração de uma track
- **Esperado:**
  - Coração fica preenchido em verde
  - Toast notification: "Adicionado aos favoritos"
  - Coração volta ao branco ao clicar novamente
  - Toast notification: "Removido de favoritos"

###  Hover em Tracks
- **O quê:** Passe o mouse numa linha de track
- **Esperado:**
  - Fundo muda de cor
  - Play button aparece (se não estiver em mobile)
  - Pequeno brilho (inset shadow)

---

## 3⃣ Testando Funcionalidades Interativas

###  Modal de Criar Playlist
- **O quê:** 
  1. Clique em "Create Playlist" no sidebar
  2. Digite um nome para a playlist
  3. Clique no botão "Create"
- **Esperado:**
  - Modal aparece com overlay blur
  - Título, input e textarea aparecem
  - Botões "Cancel" e "Create" funcionam
  - Toast notification: "Playlist 'Nome' criada com sucesso!"
  - Modal fecha após criar

###  Modal Fechar
- **O quê:**
  1. Abra o modal
  2. Clique no X no canto superior direito
  3. Ou clique fora do modal
- **Esperado:**
  - Modal desaparece com animação suave
  - Overlay blur desaparece

###  Toast Notifications
- **O quê:**
  1. Clique no botão "Home"
  2. Clique no botão "Cart"
  3. Clique em "Create Playlist"
- **Esperado:**
  - Toast azul: "Voltando à Home"
  - Toast azul: "Carrinho vazio"
  - Toast verde: "Playlist criada com sucesso!"
  - Toasts desaparecem automaticamente após 3 segundos

###  Toast Close Button
- **O quê:** Clique no X no toast enquanto ele ainda está visível
- **Esperado:**
  - Toast desaparece imediatamente
  - Animação suave de saída

---

## 4⃣ Testando Skeleton Loading

###  Skeleton Components (Verificar no código)
```jsx
import { SkeletonLoader } from '../components/Skeleton/Skeleton';

// Uso:
<SkeletonLoader count={4} type="track" />
<SkeletonLoader count={3} type="playlist" />
```

###  Shimmer Animation
- **O quê:** Observe a animação de shimmer nos skeletons
- **Esperado:**
  - Brilho passa da esquerda para direita continuamente
  - Efeito suave de "carregamento"

---

## 5⃣ Testando Toast Notifications & Swipe

###  Toast Notifications (Desktop)
- **O quê:** Qualquer clique em botão principal
- **Esperado:**
  - Toast aparece no canto superior direito
  - Cor baseada no tipo (success/error/info)
  - Ícone correspondente (checkmark/alerta/info)
  - Desaparece após 3 segundos

###  Swipe Gestures (Mobile/Tablet)
- **O quê:** 
  1. Abra em um dispositivo móvel (ou simule no DevTools)
  2. Faça swipe left no header
  3. Faça swipe right no header
- **Esperado:**
  - Swipe left: Toast "Próxima seção →"
  - Swipe right: Toast "← Seção anterior"
  - Toasts informativos em azul

###  Toast Types
- **Success:** Verde (#1DB954), checkmark icon
- **Error:** Vermelho (#e74c3c), alert icon
- **Info:** Azul (gradient), info icon

---

## 6⃣ Testando Performance & Lazy Loading

###  useLazyLoad Hook
```jsx
import { LazyImage, useLazyLoad } from '../../hooks/useLazyLoad';

// Uso:
<LazyImage 
  src="large-image.jpg"
  alt="Imagem"
  placeholder="tiny-placeholder.jpg"
/>
```

###  useVirtualization Hook
```jsx
import { useVirtualization } from '../../hooks/usePerformance';

const { visibleItems, totalHeight, setScrollTop } = 
  useVirtualization(items, 50, 10);
```

###  useImagePreload Hook
```jsx
import { useImagePreload } from '../../hooks/usePerformance';

const { isLoading, error } = useImagePreload([
  'img1.jpg',
  'img2.jpg',
  'img3.jpg'
]);
```

###  Performance Metrics
```jsx
import { usePerformanceMetrics } from '../../hooks/usePerformance';

usePerformanceMetrics('MeuComponente', true); // true = log enabled
// Aparecerá no console: "MeuComponente render time: X.XXms"
```

---

##  Teste Mobile (iPhone 14 Pro Max)

###  Responsive Design
- **O quê:** Redimensione a tela para 430x932px (iPhone 14 Pro Max)
- **Esperado:**
  - Sidebar desaparece (display: none)
  - Todos os componentes se reorganizam
  - Toasts aparecem full-width
  - Modal vira bottom-sheet (arredondado só na parte inferior)
  - Botões permanecem touchable

###  Swipe Gestures Mobile
- **O quê:** Faça swipe left/right/up/down em diversos componentes
- **Esperado:**
  - Swipe no header funciona
  - Toast notification aparece
  - Gesture é suave e responsiva

###  Touch Buttons
- **O quê:** Toque em todos os botões em mobile
- **Esperado:**
  - Tamanho suficiente para toque (min 44px)
  - Feedback visual (hover state)
  - Nenhum elemento é muito pequeno

---

##  Checklist de Teste Completo

```
ANIMAÇÕES E TRANSIÇÕES
[ ] Card hover com scale + glow
[ ] Play button bounce animation
[ ] Sidebar icon rotate + scale
[ ] Playlist item shine effect
[ ] Modal scaleIn animation
[ ] Toast slideUp animation

COMPONENTES VISUAIS
[ ] Badge "Playlist" aparece no hover
[ ] Heart button muda de cor ao clicar
[ ] Track hover com inset shadow
[ ] Play buttons com drop-shadow

FUNCIONALIDADES INTERATIVAS
[ ] Modal cria playlist
[ ] Modal fecha com X
[ ] Modal fecha ao clicar fora
[ ] Toast notifications funcionam
[ ] Todos os 3 tipos de toast

SKELETON & EFFECTS
[ ] Skeleton shimmer animation
[ ] Modal blur background
[ ] TrackSkeleton renders
[ ] PlaylistSkeleton renders

NOTIFICATIONS & SWIPE
[ ] Home button toast
[ ] Cart button toast
[ ] Playlist create toast
[ ] Swipe left toast (mobile)
[ ] Swipe right toast (mobile)

PERFORMANCE & LAZY LOAD
[ ] useLazyLoad importa corretamente
[ ] useVirtualization disponível
[ ] useImagePreload disponível
[ ] usePerformanceMetrics funciona

MOBILE RESPONSIVENESS
[ ] Sidebar desaparece em mobile
[ ] Toasts full-width em mobile
[ ] Modal é bottom-sheet em mobile
[ ] Swipe gestures funcionam
[ ] Botões têm tamanho adequado
```

---

##  Troubleshooting

### Toast não aparece
- Verifique se `ToastProvider` está envolvendo `App`
- Verifique se está usando `useToast()` corretamente
- Console.log para debug

### Modal não aparece
- Verifique se estado `isOpen` está correto
- Verifique se `onClose` está definido
- Verifique se `Modal` foi importado

### Swipe não funciona
- Apenas funciona em touch devices (mobile/tablet)
- No DevTools, ative device emulation
- Verifique threshold (padrão 50px)

### Animações muito rápidas/lentas
- Altere duração em `globalStyles.js`
- Mude `cubic-bezier` para timing diferente
- Use DevTools para comparar velocidades

---

##  Métricas de Sucesso

-  Todas as 6 categorias funcionando
-  Sem console errors
-  Sem console warnings
-  Responsive em todos os breakpoints
-  Toasts aparecem e desaparecem corretamente
-  Modal é acessível e funcional
-  Animações são suaves (60 FPS)
-  Mobile swipe funciona

---

##  Resultado Esperado

Após completar todos os testes, seu Spotify Clone deverá ter:

1.  Animações fluidas e elegantes
2.  UI moderna com glow effects
3.  Sistema de notificações funcional
4.  Modal interativo para criar playlists
5.  Skeleton loading pronto para uso
6.  Swipe gestures em mobile
7.  Performance otimizada
8.  Tudo responsivo e testado

**Parabéns! Seu projeto está pronto para o próximo nível! **
