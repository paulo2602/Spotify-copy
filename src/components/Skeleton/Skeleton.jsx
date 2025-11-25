import React from 'react';
import {
  SkeletonLoaderContainer,
  SkeletonImage,
  SkeletonText,
  SkeletonBlock,
} from './SkeletonStyles';

/**
 * Componente de Skeleton Loading para tracks
 */
export const TrackSkeleton = () => (
  <SkeletonLoaderContainer>
    <SkeletonImage width="32px" height="32px" />
    <div style={{ flex: 1 }}>
      <SkeletonText width="80%" height="12px" style={{ marginBottom: '8px' }} />
      <SkeletonText width="60%" height="10px" />
    </div>
    <SkeletonText width="50px" height="12px" />
  </SkeletonLoaderContainer>
);

/**
 * Componente de Skeleton Loading para playlist card
 */
export const PlaylistSkeleton = () => (
  <div>
    <SkeletonBlock height="160px" style={{ marginBottom: '12px' }} />
    <SkeletonText width="90%" height="12px" style={{ marginBottom: '8px' }} />
    <SkeletonText width="70%" height="10px" />
  </div>
);

/**
 * Componente de Skeleton Loading - Container com múltiplos items
 * @param {Object} props
 * @param {number} props.count - Quantidade de skeleton items
 * @param {string} props.type - Tipo: 'track' ou 'playlist'
 */
export const SkeletonLoader = ({ count = 4, type = 'track' }) => (
  <div>
    {Array.from({ length: count }).map((_, index) => (
      <div key={index}>
        {type === 'track' && <TrackSkeleton />}
        {type === 'playlist' && <PlaylistSkeleton />}
      </div>
    ))}
  </div>
);
