import { AsyncStorage } from 'react-native';

const saveToken = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch(error) {
    console.log('토큰저장에러', error.message);
  }
};

export default saveToken;
