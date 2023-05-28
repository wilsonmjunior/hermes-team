import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/config';
import { getGroups } from "./getGroups";

export async function removeGroupByName(groupName: string) {
  try {
    const storageGroups = await getGroups();
    const groups = storageGroups.filter((group) => group !== groupName);

    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`)
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
  } catch (error) {
    throw error;
  }
}
