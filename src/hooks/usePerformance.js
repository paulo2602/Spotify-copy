import { useEffect, useState } from 'react';

/**
 * Hook para virtualização de listas grandes
 * @param {Array} items - Array de items
 * @param {number} itemHeight - Altura de cada item em pixels
 * @param {number} visibleCount - Quantidade de items visíveis
 * @returns {Object} - { visibleItems, totalHeight, offset, setScrollTop }
 */
export const useVirtualization = (items, itemHeight, visibleCount) => {
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = startIndex + visibleCount;
  const visibleItems = items.slice(startIndex, Math.min(endIndex + 1, items.length));
  const offsetY = startIndex * itemHeight;
  const totalHeight = items.length * itemHeight;

  return {
    visibleItems,
    totalHeight,
    offsetY,
    startIndex,
    endIndex,
    setScrollTop,
  };
};

/**
 * Hook para medir performance de rendering
 * @param {string} componentName - Nome do componente
 * @param {boolean} logEnabled - Se deve fazer log (padrão: true)
 */
export const usePerformanceMetrics = (componentName, logEnabled = false) => {
  useEffect(() => {
    if (!logEnabled) return;

    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      console.log(`${componentName} render time: ${(endTime - startTime).toFixed(2)}ms`);
    };
  }, [componentName, logEnabled]);
};

/**
 * Hook para pré-carregar imagens
 * @param {Array<string>} imageUrls - URLs das imagens
 * @param {function} onComplete - Callback ao finalizar
 */
export const useImagePreload = (imageUrls = [], onComplete = null) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setIsLoading(false);
      return;
    }

    let loaded = 0;
    let hasError = false;

    const preloadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load ${url}`));
      });
    };

    Promise.all(imageUrls.map(preloadImage))
      .then(() => {
        setIsLoading(false);
        onComplete?.();
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [imageUrls, onComplete]);

  return { isLoading, error };
};
