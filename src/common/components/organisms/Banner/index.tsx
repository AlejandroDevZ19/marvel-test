/** @jsxImportSource @emotion/react */

import React, {FC, memo, useCallback, useState} from 'react';
import Text from '../../atoms/Text';
import { Container, Row, Col } from 'react-grid-system';
import styled from '@emotion/styled/';
import {css} from '@emotion/react/macro';
import Button from '../../atoms/Button';
import PercentageBar from '../../molecules/PercentageBar';
import { FiThumbsUp , FiThumbsDown} from "react-icons/fi";
import { constants } from 'crypto';



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
const InfoContainer = styled.div<{img?: string}>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: linear-gradient(0deg,rgba(0,0,0,8),rgba(0,0,0,0.5),rgba(0,0,0,0));
}
`;

  const Banner: FC<Props> =(
    { title,
      description,
      img,
      positiveRate=20,
      negativeRate=10}) =>{

        let initialPositiveRate: number = 1;
        let initialNegativeRate: number = 1;

        const [rates, setRates] = useState({
            initialPositiveRate: 1,
            initialNegativeRate: 1
        })

        console.log('voto positivo', rates)

        const savePositiveRate = useCallback(()=>{
            console.log('aouchh');
            setRates((state:any)=>{
                return {initialPositiveRate: state.initialPositiveRate +1, initialNegativeRate:state.initialNegativeRate};
            });
          
        },[]);
        const saveNegativeRate = useCallback(()=>{
            setRates((state:any)=>{
                return {initialPositiveRate: state.initialPositiveRate, initialNegativeRate:state.initialNegativeRate+1};
            });
    
        },[]);

    const voteCard = useCallback(()=>{

        return(
            <div css={infoCard}>
                <Text
                      text={'Dino tu opinion sobre'}
                      fontSize={18}
                      color={'#fefefe'}
                      fontWeight={200}
                  />
                <Text
                      text={'Ironman?'}
                      fontSize={35}
                      color={'#fefefe'}
                      fontWeight={800}
                  />
                  <Text
                      text={'dednakendkandknd aendaekndaek dnakendaenda'}
                      fontSize={22}
                      color={'#fefefe'}
                      fontWeight={200}
                  />
                <Text
                      text={'¿Cuál es tu voto?'}
                      fontSize={24}
                      color={'#fefefe'}
                      fontWeight={700}
                  />

                <Row>
                    <Col sm={6}>
                        <div onClick={()=>savePositiveRate()}>
                        <FiThumbsUp color={'#FFF'} size={22}/>
                        </div>
                        
                    </Col>
                    <div>
                    <Col sm={6}>
                        <div onClick={()=>saveNegativeRate()}>
                            <FiThumbsDown color={'#FFF'} size={22}/>
                        </div>
                        
                    </Col>
                    </div>
                    
                </Row>
            </div>
        )

    },[])



    return(
        <BannerContainer img={img}>
           <div css={infoWrapper}>
             {voteCard()}
            </div>
         <PercentageBar positiveRate={rates.initialPositiveRate} negativeRate={rates.initialNegativeRate} />
        </BannerContainer>
        );
    };

  export default memo(Banner);

  const infoCard = css({
    background: 'rgba(0,0,0,0.3)',
    display:'flex',
    flexDirection:'column',
    padding:20,
    margin:25,
    backdropFilter: 'blur(5px)',
    borderRadius:10,
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