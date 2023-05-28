import { Alert, FlatList, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
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
import { Loading } from "@components/Loading";
import { PlayerCard } from "@components/PlayerCard";
import { addPlayers } from "@storage/players/addPlayers";
import { PlayerStorageDTO } from "@storage/players/dtos/PlayerStorageDTO";
import { removeGroupByName } from "@storage/group/removeGroupByName";
import { getPlayersByGroupAndTeam } from "@storage/players/getPlayersByGroupAndTeam";
import { removePlayersByGroup } from "@storage/players/removePlayersByGroup";
import { AppError } from "@utils/AppError";

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

  const [isLoading, setIsLoading] = useState(true);
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [playerName, setPlayerName] = useState('');

  const inputRef = useRef<TextInput>(null)

  async function fetchPlayers() {
    try {
      setIsLoading(true);

      const playersByTeam = await getPlayersByGroupAndTeam(params.group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log('error:: ', error);
      Alert.alert('Players', 'Não foi possível carregar os players do time selecionado.');
    } finally {
      setIsLoading(false);
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

      inputRef.current?.blur();

      setPlayerName('');
      await fetchPlayers();
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

  async function handleRemovePlayer(playerName: string) {
    try {
      await removePlayersByGroup(playerName, params.group);
      await fetchPlayers();
    } catch (error) {
      Alert.alert('Remover player', 'Não foi possível remover o player.')
    }
  }

  async function removeGroup() {
    try {
      await removeGroupByName(params.group);

      navigation.navigate('groups');
    } catch (error) {
      Alert.alert('Remover grupo', 'Não foi possível remover Turma.');
    }
  }

  async function handleRemoveGroup() {
    Alert.alert('Remover grupo', 'Deseja remover o grupo?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => removeGroup
      }
    ])
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
          inputRef={inputRef}
          placeholder="Nome do participante"
          autoCorrect={false}
          onChangeText={(text) => setPlayerName(text)}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
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

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handleRemovePlayer(item.name)}
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
      )}

      <Button
        type="secondary"
        title="Remover Turma"
        onPress={handleRemoveGroup}
      />
    </Container>
  )
}
