import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logInSuccess } from '../actions';
import AppNavigator from '../navigation/AppNavigator';
import * as Facebook from 'expo-facebook';
import { APP_ID, SERVER_API } from 'react-native-dotenv';
import  saveToken from '../utils/saveToken'
import { AsyncStorage } from 'react-native';

const AppContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const props = {
    isLoading,
    async fetchFacebookData() {
      try {
        await Facebook.initializeAsync(APP_ID);
        const { type, token } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });
        if (type === 'success') {
          const fetchedData = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          const { id, name } = await fetchedData.json();
          const response = await fetch(`${SERVER_API}/auth/login`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ facebookId: id, name }),
          });
          const data = await response.json();
          dispatch(logInSuccess(data.user));
          saveToken('token', data.token);
        } else {
        }
      } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
      }
    },
  }


  return (
    <AppNavigator containerProps={props}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppContainer;
