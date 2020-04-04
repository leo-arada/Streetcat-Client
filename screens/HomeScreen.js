import React from 'react';
import { StyleSheet, View, Text, Button, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// import { Constants, Location, Permissions } from 'expo';

const HomeScreen = (props) => {
  const { latitude, longitude } = props.containerProps.location;
  console.log(latitude, longitude);

  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
      >
         <Marker
          coordinate={{ latitude: latitude, longitude: longitude }}
          title="333"
        >
          <View>
            <Text style={styles.pinText}>까망이</Text>
          </View>
          <View style={styles.circle}>
          </View>
          
        </Marker>
      </MapView>
       
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
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 30 / 2,
    backgroundColor: 'red',
  },
  pinText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
});

export default HomeScreen;
