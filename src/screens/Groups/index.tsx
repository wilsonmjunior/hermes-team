import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";

import { Container, HeaderWrapper } from "./styles";
import { GroupCard } from "@components/GroupCard";

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

      <GroupCard title="Nome da turma" />
    </Container>
  )
}