/** @jsxImportSource @emotion/react */

import React, {FC, memo, useCallback, useState} from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from '@emotion/styled/';
import {css} from '@emotion/react/macro';
import PercentageBar from '../../molecules/PercentageBar';
import VotationCard from '../../molecules/VotationCard';


interface Props {
    img?: string;
    title?: string;
    description?: string;
    positiveRate?: number;
    negativeRate?: number;
    iconType?: string;
    onClick?: () => void;
    key?: number;
  }

  const BannerContainer = styled.div<{img?: string}>`
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      border-radius:   0px 0px 10px 10px;
      overflow:hidden;
      margin-bottom: 25px;
      background: ${(props) =>
        props.img ? `url(${props.img})` : `rgba(228,236,250,0.3)`};
        height: 70vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
      box-shadow: 0 0 1px 0 rgba(40, 41, 61, 0.08),
        0 0.5px 2px 0 rgba(96, 97, 112, 0.16);
      &:hover { 
  }
`;

  const Banner: FC<Props> =(
    { title,
      description,
      img,
      positiveRate=20,
      negativeRate=10}) =>{

        const [alreadyRate, setAlreadyRate]= useState<'PositiveRated'| 'NegativeRated' |'NoRated'>('NoRated');

        const [rates, setRates] = useState(()=>{
            const storage:any= (localStorage.getItem('myRates'));
            const storageParse = storage ? JSON.parse(storage) : undefined;
                console.log('el storage del state',storageParse?.initialNegativeRate);
            return{ 
                initialPositiveRate: storageParse && storageParse.initialPositiveRate ? storageParse.initialPositiveRate: 1 ,
                initialNegativeRate: storageParse && storageParse.initialNegativeRate ? storageParse.initialNegativeRate:  1 }
        });

        const savePositiveRate = useCallback(()=>{
            setRates((state:any)=>{
                localStorage.setItem('myRates', JSON.stringify( {initialPositiveRate: state.initialPositiveRate +1, initialNegativeRate:state.initialNegativeRate}));
                return {initialPositiveRate: state.initialPositiveRate +1, initialNegativeRate:state.initialNegativeRate};
            });
            setAlreadyRate('PositiveRated');
        },[]);

        const saveNegativeRate = useCallback(()=>{
            setRates((state:any)=>{
                localStorage.setItem('myRates', JSON.stringify({initialPositiveRate: state.initialPositiveRate, initialNegativeRate:state.initialNegativeRate+1}));
                return {initialPositiveRate: state.initialPositiveRate, initialNegativeRate:state.initialNegativeRate+1};
            });
            setAlreadyRate('NegativeRated');
        },[]);
        console.log('estado de calificacion',alreadyRate);


        const rateAgain = useCallback(()=>{
                setAlreadyRate('NoRated')
        },[setAlreadyRate, alreadyRate])


    return(
        <BannerContainer img={img}>
            <div css={infoWrapper}>
                <Col xs={12} md={12} sm={12} lg={6} xl={6} xxl={6}>
                    <VotationCard  
                        movieTitle={'Ironman'} 
                        movieDescription={'Gracias al sacrificio de Tony Stark en Avengers EndGame podemos ver WandaVision por Disney+ :) '}
                        movieProducer={'Marvel'}
                        bodyRender={alreadyRate}
                        onPressRateAgain={()=>rateAgain()}
                        onPressNegatieve={()=>saveNegativeRate()}
                        onPressPositive={()=>savePositiveRate()}/>
                </Col>
            </div>
                
                
         <PercentageBar positiveRate={rates.initialPositiveRate} negativeRate={rates.initialNegativeRate} />
        </BannerContainer>
        );
    };

  export default memo(Banner);

  const infoWrapper = css({
    display:'flex',
    flexDirection:'row',
    width:'100%',
    background: 'linear-gradient(0deg,rgba(0,0,0,8),rgba(0,0,0,0.5),rgba(0,0,0,0))',
  })