import { AsyncStorage } from "react-native";

const getRequestWithToken = async (api) => {
  const token = await AsyncStorage.getItem('token');
  const response = await fetch(api, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });

  const { result } = await response.json();
  return ;
};

export default getRequestWithToken;