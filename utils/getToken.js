import { AsyncStorage } from "react-native";

const getToken = async (api) => {
  const token = await AsyncStorage.getItem('token');
  console.log(api)
  const response = await fetch(api, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })

  console.log(token);
  return ;
};

export default getToken;
