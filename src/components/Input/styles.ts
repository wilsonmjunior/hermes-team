import { ColorValue, TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput).attrs(({ theme }) => {
  return ({
    placeholderTextColor: theme.COLORS.GRAY_300 as ColorValue,
  })
})`
  min-height: 56px;
  max-height: 56px;
  
  ${({ theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.WHITE};
    background-color: ${theme.COLORS.GRAY_700};
  `}
  
  border-radius: 6px;
  padding: 16px;
`;
