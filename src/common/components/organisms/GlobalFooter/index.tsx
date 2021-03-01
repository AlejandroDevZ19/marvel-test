/** @jsxImportSource @emotion/react */

import React, {FC, memo, useCallback} from 'react';
import Text from '../../atoms/Text';
import { Container, Row, Col } from 'react-grid-system';
import styled from '@emotion/styled/';
import {css} from '@emotion/react/macro';
import Button from '../../atoms/Button';
import { FiFacebook , FiInstagram} from "react-icons/fi";
import { FaFacebookSquare,FaInstagramSquare } from "react-icons/fa";
import Separator from '../../atoms/Separator';

const FooterContainer = styled.div<{img?: string}>`
    display: flex;
    flex-direction: column;
   
    width: 80%;
    @media (max-width: 768px) {
      width: 90%;
    }

}
`;

const GlobalFooter: FC =()=>{
    return(
        <div css={footerContainer}>
            <FooterContainer>
            <Separator size={50} direction={'horizontal'} showLine/>
            
            <div css={textContainer}>
               
                    <Text
                        text={'Contactenos'}
                        fontSize={16}
                        color={'#001A4F'}
                        fontWeight={400}
                    />
        
                    <div css={iconSide}> 
                        <Text
                            text={'Síguenos'}
                            fontSize={16}
                            color={'#001A4F'}
                            fontWeight={400}
                        />
                        <FaFacebookSquare  color={'#001A4F'} size={22}/>
                        <FaInstagramSquare  color={'#001A4F'} size={22}/>
                    </div>   

            </div>

           
            
        <Separator size={50} direction={'horizontal'}/>
        </FooterContainer>
        </div>
     
    )
}

export default memo(GlobalFooter);

const footerContainer = css({
    display:'flex',
    flexDirection:'column',
    width:'100%',
    alignItems:'center',
    });
    const iconSide = css({
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        });
        const textContainer=css({
            width:'100%',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
        });