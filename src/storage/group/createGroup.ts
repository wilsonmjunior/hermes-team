import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/config";
import { AppError } from "@utils/AppError";

import { getGroups } from "./getGroups";

export async function createGroup(groupName: string) {
  try {
    const groups = await getGroups();

    const groupAlreadyExists = groups.includes(groupName);
    if (groupAlreadyExists) {
      throw new AppError('Já existe um turma cadastrada com este nome');
    }

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...groups, groupName]),
    );
  } catch (error) {
    throw error;
  }
}
