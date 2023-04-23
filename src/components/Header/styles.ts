import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

type ContainerProps = {
  center: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: ${({ center }) => center ? 'center' : 'space-between' };
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({ 
  color: theme.COLORS.WHITE, 
  size: 36, 
}))``;
