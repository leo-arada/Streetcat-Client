import { SERVER_API } from 'react-native-dotenv';
import { AsyncStorage } from "react-native";

const likePostRequest = async (catId) => {
  const token = await AsyncStorage.getItem('token');
  const id = await AsyncStorage.getItem('userId');
  const response = await fetch(`${SERVER_API}/cat/${catId}/like`, {
    method: 'POST',
    body: JSON.stringify({ id, catId }),
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
     },
  });

  const result  = await response.json();
  return result;
};

export default likePostRequest;
