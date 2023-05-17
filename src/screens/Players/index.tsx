import { FlatList } from "react-native";
import { useState } from "react";
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { Button } from "@components/Button";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { IconButton } from "@components/IconButton";
import { Input } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";

import {
  Container,
  Form,
  HeaderList,
  NumberOfPlayers,
} from "./styles";

type RouteParams = RouteProp<ParamListBase, string> & {
  params: {
    group: string;
  }
}

export function Players() {
  const navigation = useNavigation();
  const { params } = useRoute<RouteParams>();

  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<string[]>([]);
  const [playerName, setPlayerName] = useState('');

  const handleAddPlayer = () => {
    setPlayers(oldState => [...oldState, playerName])
  }

  const handleBack = () => {
    navigation.navigate('groups');
  }

  const handleRemove = (value: string) => {
    // 
  }

  return (
    <Container>
      <Header
        showBackButton
        onBack={handleBack}
      />

      <Highlight
        title={params.group}
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder="Nome do participante"
          autoCorrect={false}
          onChangeText={(text) => setPlayerName(text)}
        />
        <IconButton icon='add' onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B', 'Time C', 'Time D', 'Time E', 'Time F']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={handleRemove}
          />
        )}
        ListEmptyComponent={
          <ListEmpty
            message="Não há pessoas nesse time"
          />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          !players.length && { flex: 1 }
        ]}
      />

      <Button
        type="secondary"
        title="Remover Turma"
      />
    </Container>
  )
}
