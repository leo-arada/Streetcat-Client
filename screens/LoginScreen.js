import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { CommonActions, StackActions  } from '@react-navigation/native';
import * as Facebook from 'expo-facebook';
import { useSelector, useDispatch } from 'react-redux';
import { APP_ID, SERVER_API } from 'react-native-dotenv';

const LogInScreen = (props) => {
  const { fetchFacebookData, isLoading } = props.containerProps;
  const { navigation }  = props;

  const goToHomeScreen = () => {
    fetchFacebookData();
    navigation.dispatch(
      StackActions.replace('Home')
    )
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button 
        title="google login"
        onPress={goToHomeScreen}     
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LogInScreen;
