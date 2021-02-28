import {memo} from 'react';
import styled from '@emotion/styled/macro';

interface Props {
  size: number;
  direction: 'vertical' | 'horizontal';
  display?: 'block' | 'inline-block';
  showLine?: boolean;
}

const Separator = styled.div<Props>`
  display: ${({display = 'block'}) => display};
  height: ${({direction}) => (direction === 'horizontal' ? '1px' : 'auto')};
  margin-top: ${({size, direction}) =>
    direction === 'horizontal' ? `${size / 2}px` : 0};
  margin-bottom: ${({size, direction}) =>
    direction === 'horizontal' ? `${size / 2}px` : 0};
  width: ${({direction}) => (direction === 'vertical' ? '1px' : 'auto')};
  margin-left: ${({size, direction}) =>
    direction === 'vertical' ? `${size / 2}px` : 0};
  margin-right: ${({size, direction}) =>
    direction === 'vertical' ? `${size / 2}px` : 0};
  background-color: ${({showLine}) =>
    showLine ? '#8898AE' : 'transparent'};
  opacity: 0.3;
`;

export default memo(Separator);