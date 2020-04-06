import React from 'react';
import { StyleSheet, View, Button } from 'react-native';


const LogInScreen = ({ fetchFacebookData }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button 
         title="Facebook login"
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
