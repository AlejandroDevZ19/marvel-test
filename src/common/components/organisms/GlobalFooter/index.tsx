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



const GlobalFooter: FC =()=>{
    return(
        <Container>
            <Separator size={50} direction={'horizontal'} showLine/>
            <Row>
                <Col>
                    <Text
                        text={'Téminos y condiciones'}
                        fontSize={16}
                        color={'#001A4F'}
                        fontWeight={400}
                        href={'https://marvel-alejandro-zuniga.web.app/'}
                    />
                </Col>
                <Col>
                    <Text
                        text={'Política de tratamiento de datos'}
                        fontSize={16}
                        color={'#001A4F'}
                        fontWeight={400}
                    />
                </Col>
                <Col>
                    <Text
                        text={'Contactenos'}
                        fontSize={16}
                        color={'#001A4F'}
                        fontWeight={400}
                    />
                </Col>
                <Col>
                    <Row>
                        <Text
                            text={'Síguenos'}
                            fontSize={16}
                            color={'#001A4F'}
                            fontWeight={400}
                        />
                        <FaFacebookSquare  color={'#001A4F'} size={22}/>
                        <FaInstagramSquare  color={'#001A4F'} size={22}/>
                    </Row>   
                </Col>

            </Row>
        <Separator size={50} direction={'horizontal'}/>
        </Container>
     
    )
}

export default memo(GlobalFooter);

const footerContainer = css({
    display:'flex',
    flexDirection:'row',
    padding:5,
    });