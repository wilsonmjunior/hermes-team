import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { createGroup } from "@storage/group/createGroup";
import { AppError } from "@utils/AppError";

import {
  ButtonWrapper,
  Container,
  Content,
  Icon,
} from "./styles";

export function NewGroup() {
  const navigation = useNavigation();

  const [group, setGroup] = useState('');

  async function handleAddPlayers() {
    try {
      if (!!group.trim().length) {
        return Alert.alert('Nova Turma', 'Informe o nome da turma.');
      }

      await createGroup(group);
      navigation.navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova Turma', error.message);
      } else {
        console.log('error:: ', error);
        Alert.alert('Nova Turma', 'Não foi possível criar um nova turma');
      }
    }
  }

  function handleBack() {
    navigation.navigate('groups');
  }

  return (
    <Container>
      <Header
        showBackButton
        onBack={handleBack}
      />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie uma turma para adicionar pessoas"
        />

        <Input
          onChangeText={setGroup}
        />

        <ButtonWrapper>
          <Button
            title="Criar"
            onPress={handleAddPlayers}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  )
}
