import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { CommonActions, StackActions  } from '@react-navigation/native';

const LoadingScreen = ({ isLoggedIn }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>Loading</Text>
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

export default LoadingScreen;
