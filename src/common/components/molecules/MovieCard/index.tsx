/** @jsxImportSource @emotion/react */

import React, {FC, memo} from 'react';
import Text from '../../atoms/Text';
import { Container, Row, Col } from 'react-grid-system';
import styled from '@emotion/styled/';
import {css} from '@emotion/react/macro';
import Button from '../../atoms/Button'


interface Props {
    img: string;
    title: string;
    description: string;
    iconType?: string;
    onClick?: () => void;
    key?: number;
  }

  const CardContainer = styled.div<{img?: string}>`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 12px;
  background: ${(props) =>
    props.img ? `url${props.img}` : `rgba(228,236,250,0.3)`};
  box-shadow: 0 0 1px 0 rgba(40, 41, 61, 0.08),
    0 0.5px 2px 0 rgba(96, 97, 112, 0.16);
  cursor: pointer;
  &:hover {
    background-color: rgba(228, 236, 250, 0.5);
  }
`;

  const MovieCard: FC<Props> =({title,description, img}) =>{
      return(
          <CardContainer img={img}>
             <Text
                text={title}
                fontSize={24}
                color={'#fefefe'}
                fontWeight={400}
            />
            <Text
                text={description}
                fontSize={16}
                color={'#fefefe'}
                fontWeight={400}
            />
            <Button
                backgroundColor={'#808080'}
                text={'Ver detalle'}
                outline
                />

          </CardContainer>
      )
  }

  export default memo(MovieCard);
