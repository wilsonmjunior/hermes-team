import { FlatList } from "react-native";
import { useState } from "react";

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
  ButtonWrapper,
  HeaderList,
  NumberOfPlayers,
} from "./styles";

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<string[]>([]);

  const handleAddPlayer = () => {
    setPlayers(oldState => [...oldState, 'Algo'])
  }

  const handleRemove = (value: string) => {
    // 
  }

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder="Nome do participante"
          autoCorrect={false}
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
