import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { CommonActions, StackActions  } from '@react-navigation/native';

const LogInScreen = ({ fetchFacebookData }) => {
  console.log(fetchFacebookData);
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
         onPress={fetchFacebookData}     
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
