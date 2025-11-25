import styled from 'styled-components';
import { colors } from '../../styles/globalStyles';

export const SkeletonLoaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background: linear-gradient(90deg, ${colors.surface} 25%, ${colors.border} 50%, ${colors.surface} 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;

  @media (max-width: 768px) {
    padding: 8px;
    gap: 8px;
  }
`;

export const SkeletonImage = styled.div`
  width: ${(props) => props.width || '40px'};
  height: ${(props) => props.height || '40px'};
  background: linear-gradient(90deg, ${colors.surface} 25%, ${colors.border} 50%, ${colors.surface} 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
  flex-shrink: 0;
`;

export const SkeletonText = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '12px'};
  background: linear-gradient(90deg, ${colors.surface} 25%, ${colors.border} 50%, ${colors.surface} 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
`;

export const SkeletonBlock = styled.div`
  width: 100%;
  height: ${(props) => props.height || '60px'};
  background: linear-gradient(90deg, ${colors.surface} 25%, ${colors.border} 50%, ${colors.surface} 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;
