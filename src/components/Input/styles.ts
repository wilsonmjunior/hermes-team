import { ColorValue, TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput).attrs(({ theme }) => {
  return ({
    placeholderTextColor: theme.COLORS.GRAY_300 as ColorValue,
  })
})`
  min-height: 56px;
  max-height: 56px;
  
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  
  border-radius: 6px;
  padding: 16px;
`;
