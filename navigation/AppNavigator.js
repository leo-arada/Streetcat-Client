import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import { StyleSheet, View, Text, Button, Dimensions, Image } from 'react-native';
import CatScreen from '../screens/CatScreen';
import LoadingScreen from '../screens/LoadingScreen';
import HomeContainer from '../containers/HomeContainer';
import LoginContainer from '../containers/LoginContainer';
import MyMenuScreen from '../screens/MyMenuScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const Stack = createStackNavigator();

const AppNavigator = ({ isLoggedIn }) => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen 
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
            <Stack.Screen name="Cat" component={CatScreen} options={{ title: 'Cat' }} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginContainer} />

          </>
        )}
 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;


            {/* <Stack.Screen name="Loading" options={{ headerShown: false }}>
              {props => <LoadingScreen {...props} isLoggedIn={isLoggedIn} />}
            </Stack.Screen> */}