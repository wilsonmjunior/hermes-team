import { TouchableOpacityProps } from "react-native";

import { ButtonTypeStyleProps, Container, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'primary' }: ButtonProps) {
  return (
    <Container type={type}>
      <Title>
        {title}
      </Title>
    </Container>
  )
}