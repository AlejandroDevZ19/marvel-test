import {FC, memo, MouseEventHandler, useMemo} from 'react';

import styled from '@emotion/styled/macro';
import Text from '../Text';
import {useTheme} from '@emotion/react/macro';

interface Props {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    showShadow?: boolean;
    disabled?: boolean;
    rounded?: boolean;
    loadingButton?: boolean;
    outline?: boolean;
    fullWidth?: boolean;
    wrapWhiteSpace?: boolean;
    buttonType?: 'submit' | 'reset' | 'button';
    text: string;
    fontSize?: number;
    FeatherIconName?: String;
    iconPosition?: 'left' | 'right';
    backgroundColor?: string;
    textColor?: string;
    fixedColor?: string | null;
  }

  const StyledButton = styled.button<
  Required<
    Pick<
      Props,
      | 'fullWidth'
      | 'backgroundColor'
      | 'showShadow'
      | 'wrapWhiteSpace'
      | 'rounded'
      | 'outline'
      | 'fixedColor'
      | 'loadingButton'
    >
  >
>`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: ${({wrapWhiteSpace}) => (wrapWhiteSpace ? 'normal' : 'nowrap')};
  transition: box-shadow 500ms, filter 500ms;
  width: ${({fullWidth}) => (fullWidth ? '100%' : 'auto')};
  padding: 10px 15px;
  border-radius: ${({rounded}) => (rounded ? '20.5' : '7')}px;
  border: ${({outline, backgroundColor}) =>
    outline ? `solid 2px ${backgroundColor}` : 'none'};
  background-color: ${({backgroundColor, fixedColor, outline}) =>
    outline ? 'transparent' : fixedColor ?? backgroundColor};
  box-sizing: border-box;
  box-shadow: ${({showShadow}) =>
    showShadow
      ? '0 0 1px 0 rgba(40, 41, 61, 0.04), 0 2px 4px 0 rgba(96, 97, 112, 0.16)'
      : 'none'};
  opacity: ${({loadingButton}) => (loadingButton ? 0.3 : 1)};
  filter: brightness(1);
  &:hover:enabled {
    transition: box-shadow 500ms, filter 500ms;
    cursor: pointer;
    filter: brightness(1.1);
    box-shadow: ${({showShadow}) =>
      showShadow
        ? '0 2px 4px 0 rgba(40, 41, 61, 0.04), 0 8px 16px 0 rgba(96, 97, 112, 0.16)'
        : 'none'};
  }
  &:hover:disabled {
    cursor: not-allowed;
  }
  &:active {
    transition: box-shadow 200ms, filter 200ms;
    filter: brightness(0.9);
    box-shadow: ${({showShadow}) =>
      showShadow
        ? '0 0 1px 0 rgba(40, 41, 61, 0.08), 0 0.5px 2px 0 rgba(96, 97, 112, 0.16)'
        : 'none'};
  }
  &:hover:enabled:active {
    transition: box-shadow 200ms, filter 200ms;
    filter: brightness(0.9);
    box-shadow: ${({showShadow}) =>
      showShadow
        ? '0 0 1px 0 rgba(40, 41, 61, 0.08), 0 0.5px 2px 0 rgba(96, 97, 112, 0.16)'
        : 'none'};
  }
`;


  const Button: FC<Props> =({
    onClick,
    disabled,
    loadingButton = false,
    rounded = false,
    outline = false,
    wrapWhiteSpace = true,
    text,
    showShadow = true,
    fullWidth = false,
    FeatherIconName,
    iconPosition = 'right',
    textColor,
    backgroundColor = 'primaryColor',
    fixedColor = null,
    fontSize = 16,
    buttonType = 'button',
  })=>{
    return(
        <StyledButton
        fullWidth={fullWidth}
        disabled={disabled || loadingButton}
        loadingButton={loadingButton}
        wrapWhiteSpace={wrapWhiteSpace}
        rounded={rounded}
        outline={outline}
        type={buttonType}
        onClick={onClick}
        showShadow={showShadow}
        backgroundColor={backgroundColor}
        fixedColor={fixedColor}>
        <Text
          text={text}
          color={outline ? backgroundColor : textColor}
          fontSize={fontSize}
          fontWeight={500}
        />
      </StyledButton>

    )
  }
  export default memo(Button);