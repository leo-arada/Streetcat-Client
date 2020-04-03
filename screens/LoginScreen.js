import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { CommonActions, StackActions  } from '@react-navigation/native';
import * as Facebook from 'expo-facebook';

const LogInScreen = ({ navigation }) => {

  const login = async () => {
    const ff = await Facebook.logInWithReadPermissionsAsync('<APP_ID>', { permission: ['public_profile'] });
    console.log(ff);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button 
        title="google login"
        onPress={() => {
          login();
          navigation.dispatch(
            StackActions.replace('Home')
          )
        }
        }     
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
