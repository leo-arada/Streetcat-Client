import React, { useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { CommonActions, StackActions  } from '@react-navigation/native';
import * as Permissions from 'expo-permissions';
import useFetch from '../utils/useFetch';

const LogInScreen = (props) => {
  const { fetchFacebookData, saveLocation } = props.containerProps;
  const { navigation }  = props;
  const location = useFetch(saveLocation);
  const logIn = () => {
    fetchFacebookData();
    // navigation.navigate('Loading')
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* { location ? (
        <Button 
         title="google login"
         onPress={logIn}     
       />
      ) :alert('asdfsdfasdf')} */}
      <Button 
         title="google login"
         onPress={logIn}     
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
