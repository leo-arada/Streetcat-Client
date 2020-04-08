import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Circle } from 'react-native-maps';
import CatScreen from './CatScreen';

const HomeScreen = ({ location, nearCat, onPresshandler, navigation }) => {

  return (
    <View style={styles.container}>
      <MapView
        onPress={onPresshandler}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
      > 
        <Circle
          center = {{ latitude: location.latitude, longitude: location.longitude }}
          radius = {500}
          fillColor={'rgba(200, 300, 200, 0.5)'}
        />
        <Marker
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
        >
          <View style={styles.markerBox}>
            <Text style={styles.pinText}>현재위치</Text>
            <Image
              style={styles.image}
              source={{
                uri: "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/66-512.png"
              }}
            />
          </View>
        </Marker>
        {nearCat.map((cat, i) => (
          <Marker
            key={i}
            coordinate={{ 
              latitude: Number(cat.location[0]), 
              longitude: Number(cat.location[1]) 
            }}
          >
            <View style={styles.markerBox}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://cdn.iconscout.com/icon/premium/png-256-thumb/marker-155-684987.png"
                }}
              />
            </View>
            <Callout onPress={() => navigation.push('Cat')}>
              <Text>{cat.name}</Text>
            </Callout>
          </Marker>
        ))}
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
  markerBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  pinText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  image: {
    width: 40,
    height: 40
  },
  callOut: {
    flex: -1,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    shadowColor: "red",
    shadowOffset: {
	    width: 0,
	    height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
  },
});

export default HomeScreen;
