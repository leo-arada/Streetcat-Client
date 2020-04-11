import { AsyncStorage } from "react-native";

const getRequestWithToken = async (api) => {
  const token = await AsyncStorage.getItem('token');
  const response = await fetch(api, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });

  const res = await response.json();
  return res;
};

export default getRequestWithToken;
