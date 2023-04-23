import { Highlight } from "@components/Highlight";
import { Container, HeaderWrapper } from "./styles";

import { Header } from "@components/Header";

export function Groups() {
  return (
    <Container>
      <HeaderWrapper>
        <Header showBackButton />
      </HeaderWrapper>

      <Highlight 
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />
    </Container>
  )
}