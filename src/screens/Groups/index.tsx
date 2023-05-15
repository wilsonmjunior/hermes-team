import { FlatList } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";

import { Container, HeaderWrapper } from "./styles";
import { Button } from "@components/Button";

export function Groups() {
  const navigation = useNavigation();

  const [groups, setGroups] = useState<string[]>([
    'Galera do ignite',
  ]);

  const handleNew = () => {
    navigation.navigate('new');
  }

  return (
    <Container>
      <HeaderWrapper>
        <Header />
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
        ListEmptyComponent={<ListEmpty message="Comece cadastrando uma turma!" />}
      />

      <Button
        title="Criar nova turma"
        onPress={handleNew}
      />
    </Container>
  )
}