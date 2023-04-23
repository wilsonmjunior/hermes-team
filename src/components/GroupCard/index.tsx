import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Title } from "./styles";

type GroupCardProps = TouchableOpacityProps & {
  title: string;
}

export function GroupCard({ title, ...othersProps }: GroupCardProps) {
  return (
    <Container {...othersProps}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}
