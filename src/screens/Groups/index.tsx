import { Alert, FlatList } from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { Loading } from "@components/Loading";
import { getGroups } from "@storage/group/getGroups";

import { Container, HeaderWrapper } from "./styles";

export function Groups() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  function handleNew() {
    navigation.navigate('new');
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group });
  }

  useFocusEffect(
    useCallback(() => {
      async function loadGroups() {
        try {
          setIsLoading(true);
          const data = await getGroups();
          setGroups(data);
        } catch (error) {
          Alert.alert('Turmas', 'Não foi possível carregar as turmas.');
        } finally {
          setIsLoading(false);
        }
      }

      loadGroups();
    }, [])
  )

  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <Highlight
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />

      {
        isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <GroupCard
                title={item}
                onPress={() => handleOpenGroup(item)}
              />
            )}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
            ListEmptyComponent={<ListEmpty message="Comece cadastrando uma turma!" />}
          />
        )
      }

      <Button
        title="Criar nova turma"
        onPress={handleNew}
      />
    </Container>
  )
}