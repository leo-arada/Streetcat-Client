import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import CatScreen from '../screens/CatScreen';
import LoadingScreen from '../screens/LoadingScreen';
import HomeContainer from '../containers/HomeContainer';
import LoginContainer from '../containers/LoginContainer';

const Stack = createStackNavigator();

const AppNavigator = ({ isLoggedIn }) => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeContainer} />
            <Stack.Screen name="Cat" component={CatScreen} options={{ title: 'Cat' }} />  
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginContainer} />
            {/* <Stack.Screen name="Loading" options={{ headerShown: false }}>
              {props => <LoadingScreen {...props} isLoggedIn={isLoggedIn} />}
            </Stack.Screen> */}
          </>
        )}
        {/* <Stack.Screen name="Login" component={LoginScreen} options={{ title: '로그인안하냥' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
