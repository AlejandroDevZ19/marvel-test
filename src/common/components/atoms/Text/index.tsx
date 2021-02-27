/** @jsxImportSource @emotion/react */

import {FC, memo, CSSProperties, useMemo} from 'react';
import styled from '@emotion/styled/';


interface StyledProps<T> {
  noWrap?: boolean;
  fillWidth?: boolean;
  disableOverflow?: boolean;
  display: 'block' | 'inline-block';
  color: string;
  fontSize: T;
  fontFamily: string;
  fontWeight: number;
  textAlign: string;
}

interface Props<T> extends Partial<StyledProps<T>> {
  tag?: 'p' | 'label' | 'a';
  htmlFor?: string;
  href?: string;
  text: string | number;
  style?: CSSProperties;
  onClick?: () => void;
}

const StyledText = styled.p<StyledProps<string>>`
  overflow: ${({disableOverflow}) => (disableOverflow ? 'visible' : 'hidden')};
  text-overflow: ellipsis;
  margin: 0;
  display: ${({display}) => display};
  vertical-align: middle;
  white-space: ${({noWrap}) => (noWrap ? 'nowrap' : 'normal')};
  width: ${({fillWidth}) => (fillWidth ? '100%' : 'auto')};
  color: ${({color}) => color};
  font-size: ${({fontSize}) => fontSize};
  font-family: ${({fontFamily}) => fontFamily};
  font-weight: ${({fontWeight}) => fontWeight};
  text-align: ${({textAlign}) => textAlign};
`;

const StyledLabel = StyledText.withComponent('label');

const StyledA = StyledText.withComponent(
  styled('a')({
    cursor: 'pointer',
  })
);

const Text: FC<Props<number>> = ({
  disableOverflow,
  noWrap,
  tag = 'p',
  display = 'inline-block',
  htmlFor,
  href,
  fillWidth = false,
  color = 'mainTextColor',
  fontSize = 10,
  fontFamily = "'Nunito', sans-serif",
  fontWeight = 400,
  textAlign = 'left',
  text,
  style,
  onClick,
}) => {
  const renderText = useMemo(() => {
    switch (tag) {
      case 'a':
        return (
          <StyledA
            onClick={onClick}
            href={href}
            target={'_blank'}
            style={style}
            display={display}
            fillWidth={fillWidth}
            color={color}
            fontSize={`${fontSize}px`}
            noWrap={noWrap}
            disableOverflow={disableOverflow}
            fontFamily={fontFamily}
            fontWeight={fontWeight}
            textAlign={textAlign}>
            {text}
          </StyledA>
        );
      case 'label':
        return (
          <StyledLabel
            onClick={onClick}
            style={style}
            display={display}
            htmlFor={htmlFor}
            fillWidth={fillWidth}
            color={color}
            fontSize={`${fontSize}px`}
            noWrap={noWrap}
            disableOverflow={disableOverflow}
            fontFamily={fontFamily}
            fontWeight={fontWeight}
            textAlign={textAlign}>
            {text}
          </StyledLabel>
        );
      case 'p':
        return (
          <StyledText
            onClick={onClick}
            style={style}
            display={display}
            fillWidth={fillWidth}
            color={color}
            fontSize={`${fontSize}px`}
            noWrap={noWrap}
            disableOverflow={disableOverflow}
            fontFamily={fontFamily}
            fontWeight={fontWeight}
            textAlign={textAlign}>
            {text}
          </StyledText>
        );
    }
  }, [
    tag,
    color,
    display,
    fillWidth,
    fontSize,
    fontFamily,
    fontWeight,
    noWrap,
    disableOverflow,
    htmlFor,
    style,
    text,
    textAlign,
    href,
    onClick,
  ]);
  return <>{renderText}</>;
};
export default memo(Text);
