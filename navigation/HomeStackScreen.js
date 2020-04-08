import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeContainer from '../containers/HomeContainer';
import CatScrren from '../screens/CatScreen';
import CatContainer from '../containers/CatContainer';
import { Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  console.log(navigation);
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
              onPress={() => navigation.navigate('Cat')}
            />
          ),
          headerLeft: () => (
            <Ionicons
              name="md-list-box" size={50}
              onPress={() => navigation.openDrawer()}
            />
          )
        }} 
      />
      <HomeStack.Screen name="Cat" component={CatContainer}/>
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
