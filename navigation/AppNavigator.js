import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginContainer from '../containers/LoginContainer';
import AppTabs from './AppTabs';

const Stack = createStackNavigator();

const AppNavigator = ({ isLoggedIn }) => {

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <AppTabs />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginContainer} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
