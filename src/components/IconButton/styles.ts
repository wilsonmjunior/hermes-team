import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type IconButtonTypeStyleProps = 'primary' | 'secondary';

type IconTypeProps = {
  type: IconButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialIcons).attrs<IconTypeProps>(({ theme, type }) => {
  return ({
    size: theme.FONT_SIZE.LG,
    color: type === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK,
  })
})``;
