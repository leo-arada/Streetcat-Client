import React from 'react';
import { APP_ID, SERVER_API } from 'react-native-dotenv';
import * as Facebook from 'expo-facebook';
import { useDispatch, useSelector } from 'react-redux';
import saveToken from '../utils/saveToken';
import { logInSuccess, locationSuccess, loading } from '../actions';
import useFetch from '../utils/useFetch';
import Loading from '../components/Loading';
import LoginScreen from '../screens/LoginScreen';
import { Alert } from 'react-native';

const LoginContainer = () => {
  const { isLoading } = useSelector((state) => state.render);                                                                                                                                                                                                                                                                                                                                     
  const dispatch = useDispatch();

  const saveLocation = (location) => {
    dispatch(locationSuccess(location));
  };
  console.log(SERVER_API)
  useFetch(saveLocation);
  
  const changeLoadingStatus = () => {
    dispatch(loading());
  };

  const fetchFacebookData = async () => {
    try {
      await Facebook.initializeAsync(APP_ID);
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        changeLoadingStatus();
        const fetchedData = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        const { id, name } = await fetchedData.json();
        const response = await fetch(`${SERVER_API}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ facebookId: id, name }),
        });
        const data = await response.json();
        if (data.result !== 'ok') {
          return Alert.alert('로그인 에러입니다. 다시 시도해주세요');
        }
        
        dispatch(logInSuccess(data));
        saveToken('token', data.token, 'userId', data.user.mongoId);
        changeLoadingStatus();
      } 
    } catch (error) {
      Alert.alert('로그인 에러입니다. 다시 시도해주세요');
    }
  };

  return isLoading ? <Loading /> : <LoginScreen fetchFacebookData={fetchFacebookData} />;
};

export default LoginContainer;
