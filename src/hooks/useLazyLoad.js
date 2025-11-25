import { useEffect, useRef, useState } from 'react';
import React from 'react';

/**
 * Hook para lazy loading de imagens
 * @param {Object} options - Opções do Intersection Observer
 * @returns {[React.RefObject, boolean]} - Ref e isVisible
 */
export const useLazyLoad = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return [elementRef, isVisible];
};

/**
 * Componente de LazyImage para carregar imagens sob demanda
 * @param {Object} props
 * @param {string} props.src - URL da imagem
 * @param {string} props.alt - Texto alternativo
 * @param {string} props.placeholder - URL da imagem placeholder
 */
export const LazyImage = ({ src, alt, placeholder, ...props }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, isVisible] = useLazyLoad();

  useEffect(() => {
    if (isVisible && src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
      };
    }
  }, [isVisible, src]);

  return React.createElement('img', {
    ref: imageRef,
    src: imageSrc,
    alt: alt,
    ...props,
  });
};
