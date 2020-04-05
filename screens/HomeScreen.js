import React from 'react';
import { StyleSheet, View, Text, Button, Dimensions, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const HomeScreen = ({ location, nearCat, onPresshandler}) => {
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
            // style={{ width: '100%'}}
            coordinate={{ latitude: Number(cat.location[0]), longitude: Number(cat.location[1]) }}
          >
            <View style={styles.markerBox}>
              <Text style={styles.pinText}>{cat.name}</Text>
              <Image
                style={styles.image}
                source={{
                  uri: "https://cdn.iconscout.com/icon/premium/png-256-thumb/marker-155-684987.png"
                }}
              />
            </View>
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
  }
});

export default HomeScreen;
