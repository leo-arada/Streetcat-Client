import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';
import AppNavigator from '../navigation/AppNavigator';

const dummy = {
  email: 'asdf@naver.com',
  name: 'sexy',
  isLoggedIn: true,
}


const AppContainer = () => {
  return (
    <AppNavigator />
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
