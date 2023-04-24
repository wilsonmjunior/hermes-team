import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  flex-direction: row;
  align-items: center;

  padding: 32px 24px;
  margin-bottom: 12px;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => {
  return ({
    color: theme.COLORS.GREEN_700,
    size: 32,
    weight: 'fill',
  })
})`
  margin-right: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
