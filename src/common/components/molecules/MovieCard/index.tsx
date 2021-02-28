/** @jsxImportSource @emotion/react */

import React, {FC, memo} from 'react';
import Text from '../../atoms/Text';
import { Container, Row, Col } from 'react-grid-system';
import styled from '@emotion/styled/';
import {css} from '@emotion/react/macro';
import Button from '../../atoms/Button';
import PercentageBar from '../PercentageBar';


interface Props {
    img: string;
    title: string;
    description: string;
    positiveRate: number;
    negativeRate: number;
    iconType?: string;
    onClick?: () => void;
    key?: number;
  }

  const CardContainer = styled.div<{img?: string}>`
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 0px;
      border-radius: 5px;
      margin-bottom: 25px;
      background: ${(props) =>
        props.img ? `url(${props.img})` : `rgba(228,236,250,0.3)`};
        height: 400px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
      box-shadow: 0 0 1px 0 rgba(40, 41, 61, 0.08),
        0 0.5px 2px 0 rgba(96, 97, 112, 0.16);
      cursor: pointer;
      &:hover {
        background-color: rgba(228, 236, 250, 0.5);
  }
`;
const InfoContainer = styled.div<{img?: string}>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: linear-gradient(0deg,rgba(0,0,0,8),rgba(0,0,0,0.5),rgba(0,0,0,0));
}
`;

  const MovieCard: FC<Props> =(
    { title,
      description,
      img,
      positiveRate,
      negativeRate}) =>{
      return(
          <CardContainer img={img}>
            <div css={infoCard}>
              <Text
                  text={title}
                  fontSize={27}
                  color={'#fefefe'}
                  fontWeight={700}
              />
              <Text
                  text={description}
                  fontSize={16}
                  color={'#fefefe'}
                  fontWeight={400}
              />
              <Button
                  backgroundColor={'#fff'}
                  text={'Ver detalle'}
                  outline
                  />
            </div>
            <PercentageBar positiveRate={positiveRate} negativeRate={negativeRate} />
          </CardContainer>
      )
  }

  export default memo(MovieCard);

  const infoCard = css({
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    width: '100%',
    background: 'linear-gradient(0deg,rgba(0,0,0,8),rgba(0,0,0,0.5),rgba(0,0,0,0))',
    });