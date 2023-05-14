import { User, X } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  flex-direction: row;
  align-items: center;
  
  border-radius: 6px;

  padding: 16px;
  margin-bottom: 16px;
`;

export const Name = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const UserIcon = styled(User).attrs(({ theme }) => {
  return ({
    color: theme.COLORS.GRAY_200,
    size: 24,
  })
})`
  margin-right: 16px;
  margin-left: 4px;
`;
