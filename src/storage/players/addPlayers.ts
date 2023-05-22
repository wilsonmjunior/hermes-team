import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "@storage/config";
import { AppError } from "@utils/AppError";
import { PlayerStorageDTO } from "./dtos/PlayerStorageDTO";
import { getPlayersByGroup } from "./getPlayersByGroup";

export async function addPlayers(newPlayer: PlayerStorageDTO, group: string) {
  try {
    const players = await getPlayersByGroup(group);

    const playerAlreadyExistis = players.filter(p => p.name === newPlayer.name)
    if (!!playerAlreadyExistis.length) {
      throw new AppError('Essa pessoa já está adicionada em um time.');
    }

    const storage = JSON.stringify([...players, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
