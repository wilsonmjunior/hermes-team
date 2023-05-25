import { Alert, FlatList } from "react-native";
import { useEffect, useState } from "react";
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
import { addPlayers } from "@storage/players/addPlayers";
import { PlayerStorageDTO } from "@storage/players/dtos/PlayerStorageDTO";
import { getPlayersByGroup } from "@storage/players/getPlayersByGroup";
import { AppError } from "@utils/AppError";

import {
  Container,
  Form,
  HeaderList,
  NumberOfPlayers,
} from "./styles";
import { getPlayersByGroupAndTeam } from "@storage/players/getPlayersByGroupAndTeam";

type RouteParams = RouteProp<ParamListBase, string> & {
  params: {
    group: string;
  }
}

export function Players() {
  const navigation = useNavigation();
  const { params } = useRoute<RouteParams>();

  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [playerName, setPlayerName] = useState('');

  async function fetchPlayers() {
    try {
      const playersByTeam = await getPlayersByGroupAndTeam(params.group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log('error:: ', error);
      Alert.alert('Players', 'Não foi possível carregar os players do time selecionado.');
    }
  }

  async function handleAddPlayer() {
    if (!playerName.trim().length) {
      return Alert.alert('Novo participante', 'Informe o nome da pessoa para adicionar.')
    }

    const newPlayer = {
      name: playerName,
      team,
    };

    try {
      await addPlayers(newPlayer, params.group);

      setPlayerName('');
      // fetch players again
      setPlayers(oldState => [...oldState, newPlayer]);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo participante', error.message);
      } else {
        console.log('error:: ', error);
        Alert.alert('Novo participante', 'Erro ao adicionar participante.')
      }
    }
  }

  function handleBack() {
    navigation.navigate('groups');
  }

  function handleRemove(value: string) {
    // 
  }

  useEffect(() => {
    fetchPlayers();
  }, [params.group, team]);

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
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
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
