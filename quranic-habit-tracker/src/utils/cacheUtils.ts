// src/utils/cacheUtils.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveCache(key, data) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    // handle error
  }
}

export async function getCache(key) {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}
