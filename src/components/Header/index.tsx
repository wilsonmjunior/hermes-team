import logo from "@assets/logo.png";

import {
  Container,
  BackButton,
  BackIcon,
  Logo,
} from "./styles";

type HeaderProps = {
  showBackButton?: boolean;
  onBack?(): void;
}

export function Header({ showBackButton, onBack }: HeaderProps) {
  return (
    <Container center={!showBackButton}>
      {
        showBackButton ? (
          <BackButton onPress={onBack}>
            <BackIcon />
          </BackButton>
        ) : null
      }

      <Logo source={logo} />
    </Container>
  )
}
