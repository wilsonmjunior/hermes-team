import { FlatList } from "react-native";
import { useState } from "react";

import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";

import { Container, HeaderWrapper } from "./styles";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState([
    'Galera do ignite',
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
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={<ListEmpty message="Comece cadastrando uma turma!"/>}
      />

      <Button 
        title="Criar nova turma"
      />
    </Container>
  )
}