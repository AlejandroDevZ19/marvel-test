/** @jsxImportSource @emotion/react */

import React, {FC, memo, useCallback} from 'react';
import Text from '../../atoms/Text';
import { Container, Row, Col } from 'react-grid-system';
import styled from '@emotion/styled/';
import {css} from '@emotion/react/macro';
import Button from '../../atoms/Button';
import PercentageBar from '../PercentageBar';
import { FiThumbsUp , FiThumbsDown} from "react-icons/fi";
import Separator from '../../atoms/Separator';
import {
    SUB_TITLE_TEXT_SIZE,
    HEADER_TEXT_SIZE,
    LABEL_TEXT_SIZE,
    SUB_IMPACT_TEXT_SIZE
  } from '../.././../ultils/constants/textSize';


interface Props {
    movieTitle: string;
    movieDescription: string;
    movieProducer: string;
    bodyRender: 'PositiveRated'| 'NegativeRated' |'NoRated';
    onPressRateAgain?: () => void;
    onPressPositive?: () => void;
    onPressNegatieve?: () => void;
  }

  const VotationCard:FC<Props> =(
        {movieTitle,
        movieDescription,
        movieProducer,
        bodyRender='NoRated',
        onPressRateAgain,
        onPressNegatieve,
        onPressPositive}
     )=>{

        const renderAlreadyRated = useCallback((renderType:string)=>{
            return(
                <div css={infoCard}>
                    <Text
                        text={`${movieProducer} - ${movieTitle}`}
                        fontSize={SUB_IMPACT_TEXT_SIZE}
                        color={'#fefefe'}
                        fontWeight={400}
                    />
                    <Separator size={10} direction={'horizontal'}/>
                    <div css={row} >
                        <div css={ renderType === 'PositiveRated' ? backgroundColorPositiveIcon : backgroundColorNegativeIcon } >
                            {renderType === 'PositiveRated' ? <FiThumbsUp color={'#FFF'} size={30}/> : <FiThumbsDown color={'#FFF'} size={30}/>}
                        </div>
                        <Separator size={10} direction={'vertical'}/>
                        <div css={alignCenter} >
                             <Text
                                text={'Tu voto ha sido registrado!'}
                                fontSize={HEADER_TEXT_SIZE}
                                color={'#fefefe'}
                                fontWeight={700}
                             />
                        </div>
                    </div>
                    <Separator size={10} direction={'horizontal'}/>
                    <Text
                        text={`Gracias por participar en la votación de la película ${movieTitle} seguiremos subiendo contenido :P`}
                        fontSize={SUB_TITLE_TEXT_SIZE}
                        color={'#fefefe'}
                        fontWeight={200}
                    />
                    <Separator size={20} direction={'horizontal'}/>
                        <Button
                            backgroundColor={'#fff'}
                            text={'Volver a votar'}
                            onClick={onPressRateAgain}
                            outline
                         />
                </div>
            );
          },[]);

        return(
            <div css={fixWidth}>
                {bodyRender === 'NoRated'?
            
                <div css={infoCard}>
                    <Text
                        text={'Dinos tu opinión sobre'}
                        fontSize={18}
                        color={'#fefefe'}
                        fontWeight={200}
                    />
                    <Text
                        text={`${movieTitle}?`}
                        fontSize={35}
                        color={'#fefefe'}
                        fontWeight={800}
                    />
                    <Separator size={10} direction={'horizontal'}/>
                    <Text
                        text={movieDescription}
                        fontSize={20}
                        color={'#fefefe'}
                        fontWeight={200}
                    />
                    <Separator size={20} direction={'horizontal'}/>
                    <Text
                        text={'¿Cuál es tu voto?'}
                        fontSize={20}
                        color={'#fefefe'}
                        fontWeight={700}
                        />
                    <Separator size={10} direction={'horizontal'}/>
                    <Row nogutter>
                        <Col sm={6}>
                            <div css={bacgroundPostivieVote}  onClick={onPressPositive}>
                            <FiThumbsUp color={'#FFF'} size={22}/>
                            </div>
                            
                        </Col>
                        <Col sm={6}>
                            <div css={bacgroundNegativieVote} onClick={onPressNegatieve}>
                                <FiThumbsDown color={'#FFF'} size={22}/>
                            </div>
                        </Col>
                        
                    </Row>
            </div>
           :renderAlreadyRated(bodyRender)}
           </div>
        );
  };

  export default memo(VotationCard);
  const infoCard = css({
    background: 'rgba(0,0,0,0.3)',
    display:'flex',
    flexDirection:'column',
    padding:25,
    margin:25,
    backdropFilter: 'blur(5px)',
    borderRadius:10,
    });
    const fixWidth = css({
        width:'100%,'
        });
    const backgroundColorPositiveIcon = css({
        background:'rgba(81,140,202,1)',
        cursor:'pointer',
        width:60,
        padding:20,
        borderRadius: 5,
       });
    const bacgroundPostivieVote = css({
        background:'rgba(81,140,202,1)',
        cursor:'pointer',
        padding:10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign:'middle',
       });
       const bacgroundNegativieVote = css({
        background:'rgba(247,143,63, 1)',
        cursor:'pointer',
        padding:10,
      
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign:'middle',
       });
       const backgroundColorNegativeIcon = css({
        background:'rgba(247,143,63, 1)',
        cursor:'pointer',
        width:60,
        padding:20,
        borderRadius: 5,
       });
       const row=css({
        display: 'flex',
        flexDirection: 'row',
       });
       const alignCenter = css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign:'middle',
           });