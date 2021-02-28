/** @jsxImportSource @emotion/react */

import React, {FC, memo, useCallback, useEffect, useState} from 'react';
import Text from '../../atoms/Text';
import styled from '@emotion/styled/';
import {css} from '@emotion/react/macro';
import { FiThumbsUp , FiThumbsDown} from "react-icons/fi";


interface Props {
    positiveColorBar?: string; //esta propiedad es opcional
    negativeColorBar?: string; //esta propiedad es opcional
    positiveRate: number;//esta propiedad es obligatoria
    negativeRate: number;//esta propiedad es obligatoria
  }
  
  const IndividualBar = styled.div<{width: number, backgroundColor:string}>`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background: ${(props) =>
        props.backgroundColor ? `${props.backgroundColor}` : `rgba(228,236,250,0.3)`};
    width: ${(props) => `${props.width}%`};
    padding: 10px;
    opacity: 0.8;
    box-shadow: 0 0 1px 0 rgba(40, 41, 61, 0.08),
        0 0.5px 2px 0 rgba(96, 97, 112, 0.16);
    cursor: pointer;
`;

const PercentageBar : FC<Props> = (
    { positiveColorBar= '#4E4FD6', 
      negativeColorBar = '#FF7C31',
      negativeRate =0, 
      positiveRate =0 }) => {
        
    const totalVotes = negativeRate + positiveRate;

    const getWidthPercentBar = useCallback((totalVotes, votes)=>{
        return parseInt(((votes*100)/totalVotes).toString(), 10);;
    },[]);

    return(
        <div css={generalContainer}>
           <IndividualBar width={getWidthPercentBar(totalVotes,positiveRate)} backgroundColor={positiveColorBar}>
            <div css={separationRight}>
            <FiThumbsUp color={'#FFF'} size={22}/>
            </div>
            
           <Text
                  text={`${getWidthPercentBar(totalVotes,positiveRate)}%`}
                  fontSize={22}
                  color={'#fefefe'}
                  fontWeight={400}
              />
            </IndividualBar> 
            <IndividualBar width={getWidthPercentBar(totalVotes,negativeRate)} backgroundColor={negativeColorBar}>
                <div css={separationRight}>
                <FiThumbsDown  color={'#FFF'} size={22}/>
                </div>
           
            <Text
                  text={`${getWidthPercentBar(totalVotes,negativeRate)}%`}
                  fontSize={22}
                  color={'#fefefe'}
                  fontWeight={400}
              />
            </IndividualBar> 
        </div>
    );
}

export default memo(PercentageBar);

const generalContainer = css({
    display:'flex',
    flexDirection:'row',
    width: '100%',
    });
const separationRight = css({
     marginRight:10,
    });