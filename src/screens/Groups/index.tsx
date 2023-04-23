import { Container, HeaderWrapper } from "./styles";

import { Header } from "@components/Header";

export function Groups() {
  return (
    <Container>
      <HeaderWrapper>
        <Header showBackButton />
      </HeaderWrapper>
    </Container>
  )
}