import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginContainer from '../containers/LoginContainer';
import AppTabs from './AppTabs';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();

const AppNavigator = ({ isLoggedIn }) => {
  const Drawer = createDrawerNavigator();
  const Notifications = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications Screen</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={AppTabs} />
          <Drawer.Screen name="Notifications" component={Notifications} />
        </Drawer.Navigator>
        // <AppTabs />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginContainer} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
