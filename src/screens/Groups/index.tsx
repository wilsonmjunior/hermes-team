import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

import { Container, HeaderWrapper } from "./styles";
import { useState } from "react";
import { FlatList } from "react-native";

export function Groups() {
  const [groups, setGroups] = useState([
    'Galera do ignite',
    'Galera do falcone',
    'Galera do pep',
  ]);

  return (
    <Container>
      <HeaderWrapper>
        <Header showBackButton />
      </HeaderWrapper>

      <Highlight 
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  )
}