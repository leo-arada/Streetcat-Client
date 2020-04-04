import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen';
import CatScreen from '../screens/CatScreen';
import LoadingScreen from '../screens/LoadingScreen';

const Stack = createStackNavigator();

const AppNavigator = ({ containerProps }) => {
  const { isLoggedIn } = containerProps;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
            <Stack.Screen name="Cat" component={CatScreen} options={{ title: 'Cat' }} />  
          </>
        ) : (
          <>
            <Stack.Screen name="Login" options={{ title: '로그인안하냥' }}>
              {props => <LoginScreen {...props} containerProps={containerProps} />}
            </Stack.Screen>
            <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
          </>
        )}
        {/* <Stack.Screen name="Login" component={LoginScreen} options={{ title: '로그인안하냥' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator