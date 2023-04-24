import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

import { ButtonWrapper, Container, Content, Icon } from "./styles";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        
        <Highlight 
          title="Nova turma" 
          subtitle="crie uma turma para adicionar pessoas" 
        />
        
        <Input />

        <ButtonWrapper>
          <Button 
            title="Criar"
          />
        </ButtonWrapper>
      </Content>
    </Container>
  )
}
