import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStackScreen';

const Tabs = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name ="Home" component={HomeStackScreen} />
    </Tabs.Navigator>
  )
};

export default AppTabs;
