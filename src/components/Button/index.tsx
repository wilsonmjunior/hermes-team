import { TouchableOpacityProps } from "react-native";

import { ButtonTypeStyleProps, Container, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'primary', ...othersProps }: ButtonProps) {
  return (
    <Container type={type} {...othersProps}>
      <Title>
        {title}
      </Title>
    </Container>
  )
}