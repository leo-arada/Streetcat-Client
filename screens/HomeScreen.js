import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, Dimensions, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import getToken from '../utils/getToken';
import { APP_ID, SERVER_API } from 'react-native-dotenv';
// import { Constants, Location, Permissions } from 'expo';

const HomeScreen = (props) => {
  // console.log(props)
  const { latitude, longitude } = props.containerProps.location;
  const { fetchCatsData, catsAroud } = props.containerProps;

  // console.log(latitude, longitude);
  console.log(catsAroud, '홈스크린');

  useEffect(() => {
    getToken(`${SERVER_API}/cat`);
    fetchCatsData({ latitude, longitude });
  }, [])

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
        {catsAroud.map((cat, i) => (
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
