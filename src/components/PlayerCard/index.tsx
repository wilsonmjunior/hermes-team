import { IconButton } from "@components/IconButton";
import {
  Container,
  Name,
  UserIcon,
} from "./styles";

type PlayerCardProps = {
  name: string;
  onRemove(value: string): void;
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <Container>
      <UserIcon />

      <Name>{name}</Name>

      <IconButton
        icon="close"
        type="secondary"
        onPress={() => onRemove(name)}
      />
    </Container>
  )
}
