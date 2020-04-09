import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeContainer from '../containers/HomeContainer';
import CatRegisterContainer from '../containers/CatRegisterContainer';
import CatPageContainer from '../containers/CatPageContainer';
import { Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeContainer} 
        options={{ 
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
          },
          title: '',
          headerRight: () => (
            <Ionicons 
              name="md-add-circle" 
              size={50}
              onPress={() => navigation.navigate('Register')}
            />
          ),
          headerLeft: () => (
            <Ionicons
              name="md-list-box" size={50}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }} 
      />
      <HomeStack.Screen name="Register" component={CatRegisterContainer}/>
      <HomeStack.Screen name="Detail" component={CatPageContainer} options= {{ headerShown: false }}/>
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
