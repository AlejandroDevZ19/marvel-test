/** @jsxImportSource @emotion/react */

import React, {FC, memo, useCallback, useState} from 'react';
import Text from '../../atoms/Text';
import { Container, Row, Col } from 'react-grid-system';
import {css} from '@emotion/react/macro';
import { FaTimes} from "react-icons/fa";
import {
    SUB_TITLE_TEXT_SIZE,
    HEADER_TEXT_SIZE,
    LABEL_TEXT_SIZE,
  } from '../.././../ultils/constants/textSize';


  interface Props {
    title?: string;
    subTitle?: string;
    description: string;
  }

const Notification: FC<Props> =({title,subTitle,description})=>{
    const [visible, setVisible] = useState<boolean>(true);

    const closeNotification = useCallback(()=>{
        setVisible(false);
    },[setVisible]);

    return(
        <>
            {visible? (
                <Row nogutter css={container}>
                    <Col sm={3} css={rightSide} >
                        <Text
                            text={title ?? ' '}
                            fontSize={SUB_TITLE_TEXT_SIZE}
                            color={'#001A4F'}
                            fontWeight={400}
                        />
                        <Text
                            text={subTitle ?? ' '}
                            fontSize={HEADER_TEXT_SIZE}
                            color={'#001A4F'}
                            fontWeight={800}
                        />                
                    </Col>
                    <Col  sm={7} css={midSide}>
                    <Text
                            text={description}
                            fontSize={LABEL_TEXT_SIZE}
                            color={'#001A4F'}
                            fontWeight={400}
                            />  
                    </Col>
                    <Col  sm={2} css={leftSide} >
                        <FaTimes color={'#001A4F'} size={22} onClick={closeNotification}/>
                    </Col>
    
                </Row>

            ):<></>}
        </>
        
     
    )
}

export default memo(Notification);

const container = css({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
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
    justifyContent:'center',
    alignItems:'center',
    marginLeft:5,
    cursor:'pointer',
});
