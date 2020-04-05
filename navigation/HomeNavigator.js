import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

function HomeStackScreen({ isLoggedIn }) {
  return (
    <HomeStack.Navigator>
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
            {/* <Stack.Screen name="Loading" options={{ headerShown: false }}>
              {props => <LoadingScreen {...props} isLoggedIn={isLoggedIn} />}
            </Stack.Screen> */}
          </>
        )}
        {/* <Stack.Screen name="Login" component={LoginScreen} options={{ title: '로그인안하냥' }} /> */}
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen