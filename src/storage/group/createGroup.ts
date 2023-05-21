import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/config";
import { getGroups } from "./getGroups";

export async function createGroup(groupName: string) {
  try {
    const groups = await getGroups();

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...groups, groupName]),
    );
  } catch (error) {
    throw error;
  }
}
