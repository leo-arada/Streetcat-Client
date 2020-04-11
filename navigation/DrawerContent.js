import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text } from 'react-native';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 10 }}>
        <Text style={{ textAlign: 'center', fontSize: 20 }}>{props.name}</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
