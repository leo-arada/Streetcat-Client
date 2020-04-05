import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { CommonActions, StackActions  } from '@react-navigation/native';

const MyMenuScreen = ({ fetchFacebookData }) => {
  console.log(fetchFacebookData);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>dasdfasfdasdfasf</Text>
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

export default MyMenuScreen;
