import logo from "@assets/logo.png";

import {
  Container,
  BackButton,
  BackIcon,
  Logo,
} from "./styles";

type HeaderProps = {
  showBackButton?: boolean;
}

export function Header({ showBackButton }: HeaderProps) {
  return (
    <Container center={!showBackButton}>
      {
        showBackButton ? (
          <BackButton>
            <BackIcon />
          </BackButton>
        ) : null
      }

      <Logo source={logo} />
    </Container>
  )
}
