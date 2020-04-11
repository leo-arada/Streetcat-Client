import React from 'react';
import { Root } from 'native-base';
import { useSelector } from 'react-redux';
import AppNavigator from '../navigation/AppNavigator';
import { SERVER_API } from 'react-native-dotenv';
import getRequestWithToken from '../utils/getRequestWithToken';

const AppContainer = () => {
  const { isLoggedIn } = useSelector((state) => state.render);
  const { user } = useSelector((state) => state);

  const fetchMyCats = async (userId) => {
    const api = `${SERVER_API}/user/${userId}/mycats`;
    return await getRequestWithToken(api);
  };

  const fetchLikedcats = async (userId) => {
    const api = `${SERVER_API}/user/${userId}/likedcats`;
    return await getRequestWithToken(api);
  };

  return (
    <Root>
      <AppNavigator 
        isLoggedIn={isLoggedIn} 
        user={user} 
        fetchMyCats={fetchMyCats} 
        fetchLikedcats={fetchLikedcats}
      />
    </Root>
  );

};

export default AppContainer;
