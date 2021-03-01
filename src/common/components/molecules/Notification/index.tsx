/** @jsxImportSource @emotion/react */

import React, {FC, memo, useCallback} from 'react';
import Text from '../../atoms/Text';
import { Container, Row, Col } from 'react-grid-system';
import styled from '@emotion/styled/';
import {css} from '@emotion/react/macro';
import Button from '../../atoms/Button';
import { FiFacebook , FiInstagram} from "react-icons/fi";
import { FaTimes} from "react-icons/fa";
import Separator from '../../atoms/Separator';



const Notification: FC =()=>{
    return(
        <div  css={container}>
           <Col css={rightSide} >
                <Text
                    text={'Lorem ipsum'}
                    fontSize={30}
                    color={'#001A4F'}
                    fontWeight={200}
                />
                <Text
                    text={'IP Lorem Ip'}
                    fontSize={32}
                    color={'#001A4F'}
                    fontWeight={800}
                />                
           </Col>
           <div css={midSide}>
           <Text
                text={'Recuerda que para realizar una votación deberás votar :D si quieres puedes cerrar esto ->'}
                fontSize={18}
                color={'#001A4F'}
                fontWeight={400}
                />  
           </div>
           <div css={leftSide}>
            <FaTimes color={'#001A4F'} size={22}/>
           </div>
    
        </div>
     
    )
}

export default memo(Notification);

const container = css({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:15,
    background: '#DCE4ED',
    borderRadius:10,
    });
const rightSide = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    });
const midSide =css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:5,
});
const leftSide =css({
    display: 'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    marginLeft:5,
});
