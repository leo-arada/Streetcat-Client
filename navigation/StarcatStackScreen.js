import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StarcatContainer from '../containers/StarcatContainer';

const Starstack = createStackNavigator();

const StacatStackScreen = () => {
  return (
    <Starstack.Navigator>
      <Starstack.Screen name ="Starcat" component={StarcatContainer} />
    </Starstack.Navigator>
  );
};

export default StacatStackScreen;
