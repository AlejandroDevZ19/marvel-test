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
        <div css={footerContainer}>
            
            <Text
                      text={'Téminos y condiciones'}
                      fontSize={16}
                      color={'#fefefe'}
                      fontWeight={400}
                      href={'https://marvel-alejandro-zuniga.web.app/'}
                  />
                   <Text
                      text={'Política de tratamiento de datos'}
                      fontSize={16}
                      color={'#fefefe'}
                      fontWeight={400}
                  />
                    <Text
                      text={'Contactenos'}
                      fontSize={16}
                      color={'#fefefe'}
                      fontWeight={400}
                  />
                  <Text
                      text={'Síguenos'}
                      fontSize={16}
                      color={'#fefefe'}
                      fontWeight={400}
                  />
                  <FiInstagram  color={'#FFF'} size={22}/>
                  <FiFacebook  color={'#FFF'} size={22}/>
        </div>
    )
}

export default memo(GlobalHeader);

const footerContainer = css({
    display:'flex',
    flexDirection:'row',
    padding:5,
    });