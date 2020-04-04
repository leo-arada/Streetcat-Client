import React from 'react';
import { StyleSheet, View, Text, Button, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
// import { Constants, Location, Permissions } from 'expo';

const HomeScreen = (props) => {
  const { latitude, longitude } = props.containerProps.location;
  console.log(latitude, longitude);

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.2,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});

export default HomeScreen;
