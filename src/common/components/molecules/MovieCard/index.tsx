/** @jsxImportSource @emotion/react */

import React, {FC, memo, useCallback} from 'react';
import Text from '../../atoms/Text';
import { Container, Row, Col } from 'react-grid-system';
import styled from '@emotion/styled/';
import {css} from '@emotion/react/macro';
import Button from '../../atoms/Button';
import PercentageBar from '../PercentageBar';
import { FiThumbsUp , FiThumbsDown} from "react-icons/fi";


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
      margin-bottom: 25px;
      border-radius:12px;
      overflow:hidden;
      background: ${(props) =>
        props.img ? `url(${props.img})` : `rgba(228,236,250,0.3)`};
        height: 430px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
      box-shadow: 0 0 1px 0 rgba(40, 41, 61, 0.08),
        0 0.5px 2px 0 rgba(96, 97, 112, 0.16);
      &:hover {
       
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

        const renderIcon = useCallback((positiveRateValue, negativeRateValue)=>{
            if(positiveRateValue > negativeRateValue){
              return (
                <div>
                  <FiThumbsUp color={'#FFF'} size={22}/>
                </div>
              )
            } else{
              return(
                <div>
                     <FiThumbsDown color={'#FFF'} size={22}/>
                </div>         
              )
            }
        },[]);


        return(
            <CardContainer img={img}>
              <div css={infoWrapper}>
                <div css={iconBackground}>
                  {renderIcon(positiveRate, negativeRate)}
                </div>
                <div css={infoCard}>
                  <Text
                      text={title}
                      fontSize={32}
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
    padding:5,
    marginBottom:15,
    overflow:'hidden',
    
    });
  const iconBackground = css({
      padding:10,
      borderRadius: '0px 20px 20px 0px',
      display:'flex',
      flexDirection:'column',
      alignSelf:'flex-start',
      alignItems: 'center',
      background: 'rgba(81,140,202,1)',
      });

  const infoWrapper = css({
    display:'flex',
    flexDirection:'row',
   
    background: 'linear-gradient(0deg,rgba(0,0,0,8),rgba(0,0,0,0.5),rgba(0,0,0,0))',
  })