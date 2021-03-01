/** @jsxImportSource @emotion/react */

import React, {FC, memo, useCallback} from 'react';
import Text from '../../atoms/Text';
import { Container, Row, Col } from 'react-grid-system';
import styled from '@emotion/styled/';
import {css} from '@emotion/react/macro';
import Button from '../../atoms/Button';
import { FiFacebook , FiInstagram} from "react-icons/fi";



const GlobalHeader: FC =()=>{
    return(
        <div css={HeaderContainer}>
            
            <Text
                text={'Logo de Marvel'}
                fontSize={24}
                color={'#fefefe'}
                fontWeight={600}
                href={'https://marvel-alejandro-zuniga.web.app/'}
            />
            <Text
                text={'Iniciar Sesión'}
                fontSize={19}
                color={'#fefefe'}
                fontWeight={400}
            />
        </div>
    )
}

export default memo(GlobalHeader);

const HeaderContainer = css({
    display:'flex',
    flexDirection:'row',
    width:'80%',
    padding:5,
    alignItems:'center',
    justifyContent:'space-between'
    });