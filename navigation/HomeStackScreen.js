import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeContainer from '../containers/HomeContainer';
import { Button } from 'react-native';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
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
            <Button 
              onPress={() => alert('ddddd')}
              title="+"
              style={{ padding: 40 }}
            />
          ),
          headerLeft: () => (
            <Button 
              onPress={() => alert('ddddd')}
              title="ss"
              style={{ padding: 40 }}
          />
          )
        }} 
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
