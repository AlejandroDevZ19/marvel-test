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
    publicationDate?: string,
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
        height: 500px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
      box-shadow: 0 0 1px 0 rgba(40, 41, 61, 0.08),
        0 0.5px 2px 0 rgba(96, 97, 112, 0.16);
      &:hover {
       
  }
`;
const IconContainer = styled.div<{color?: string}>`
    border-radius: 0px 20px 20px 0px;
    background: ${(props) =>
      props.color ? `${props.color}` : `rgba(228,236,250,0.3)`};
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-start;
    padding:10px;
}
`;

  const MovieCard: FC<Props> =(
    { title,
      description,
      publicationDate,
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

        const iconColor= useCallback((positiveRateValue, negativeRateValue)=>{
          if(positiveRateValue > negativeRateValue){
            return 'rgba(81,140,202,1)';
          } else{
            return 'rgba(247,143,63, 0.8)';
          }

        },[]);


        return(
            <CardContainer img={img}>
              <div css={infoWrapper}>
                <div css={GeneralinfoWrapper}>
                <IconContainer color={iconColor(positiveRate, negativeRate)}>
                  {renderIcon(positiveRate, negativeRate)}
                </IconContainer>
               
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
                <div css={timeText}>
                  <Text
                    text={'Hace 1 mes'}
                    fontSize={16}
                    color={'#fefefe'}
                    fontWeight={400}
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
    const timeText = css({
      display:'flex',
      flexDirection:'column',
      justifyContent:'flex-end',
      padding:5,
      marginBottom:15,
      marginRight:10,
      });
      const GeneralinfoWrapper=css({
        display:'flex',
        flexDirection:'row', 
        justifyContent:'space-between',
      });


  const infoWrapper = css({
    display:'flex',
    flexDirection:'row', 
    justifyContent:'space-between',
    background: 'linear-gradient(0deg,rgba(0,0,0,8),rgba(0,0,0,0.5),rgba(0,0,0,0))',
  })