import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

import { Box } from "@components/Box";

export const Container = styled(Box)``;

export const HeaderWrapper = styled.View`
  margin-top: 16px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => {
  return ({
    size: 56,
    color: theme.COLORS.GREEN_700,
  })
})`
  align-self: center;
`;

export const ButtonWrapper = styled.View`
  margin-top: 16px;
`;
