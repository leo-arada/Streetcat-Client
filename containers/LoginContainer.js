import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Dimensions, Image } from 'react-native';
import { APP_ID, SERVER_API } from 'react-native-dotenv';
import * as Facebook from 'expo-facebook';
import { useSelector, useDispatch } from 'react-redux';
import saveToken from '../utils/saveToken';
import { logInSuccess, error, locationSuccess, catsData } from '../actions';
import useFetch from '../utils/useFetch';
import LoginScreen from '../screens/LoginScreen';

const LoginContainer = () => {
  const dispatch = useDispatch();

  const saveLocation = (location) => {
    dispatch(locationSuccess(location));
  };

  const location = useFetch(saveLocation);

  const fetchFacebookData = async () => {
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
        dispatch(logInSuccess(data));
        saveToken('token', data.token, 'userId', id);
      } 
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  return (
    <LoginScreen fetchFacebookData={fetchFacebookData}/>
  )
};

export default LoginContainer;
