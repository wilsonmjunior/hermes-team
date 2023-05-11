import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { IconButtonTypeStyleProps, Container, Icon } from "./styles";

type IconButtonProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: IconButtonTypeStyleProps
}

export function IconButton({ icon, type = 'primary', ...othersProps }: IconButtonProps) {
  return (
    <Container {...othersProps}>
      <Icon type={type} name={icon} />
    </Container>
  )
}
