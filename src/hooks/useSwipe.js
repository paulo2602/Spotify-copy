import React from 'react';

/**
 * Hook personalizado para detecção de swipe gestures
 * @param {React.RefObject} elementRef - Ref do elemento a monitorar
 * @param {Object} handlers - Callbacks para swipe handlers
 * @param {function} handlers.onSwipeLeft - Callback ao fazer swipe para esquerda
 * @param {function} handlers.onSwipeRight - Callback ao fazer swipe para direita
 * @param {function} handlers.onSwipeUp - Callback ao fazer swipe para cima
 * @param {function} handlers.onSwipeDown - Callback ao fazer swipe para baixo
 * @param {number} threshold - Distância mínima em pixels (padrão: 50)
 */
export const useSwipe = (elementRef, handlers = {}, threshold = 50) => {
  const startX = React.useRef(null);
  const startY = React.useRef(null);
  const endX = React.useRef(null);
  const endY = React.useRef(null);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    endX.current = e.changedTouches[0].clientX;
    endY.current = e.changedTouches[0].clientY;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!startX.current || !startY.current || !endX.current || !endY.current) {
      return;
    }

    const diffX = startX.current - endX.current;
    const diffY = startY.current - endY.current;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // Movimento horizontal
      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          // Swipe para esquerda
          handlers.onSwipeLeft?.();
        } else {
          // Swipe para direita
          handlers.onSwipeRight?.();
        }
      }
    } else {
      // Movimento vertical
      if (Math.abs(diffY) > threshold) {
        if (diffY > 0) {
          // Swipe para cima
          handlers.onSwipeUp?.();
        } else {
          // Swipe para baixo
          handlers.onSwipeDown?.();
        }
      }
    }

    // Reset
    startX.current = null;
    startY.current = null;
    endX.current = null;
    endY.current = null;
  };

  React.useEffect(() => {
    const element = elementRef?.current;
    if (!element) return;

    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchend', handleTouchEnd);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handlers]);
};
