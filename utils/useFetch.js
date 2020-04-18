import { useState, useEffect } from 'react';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

const useFetch = (saveLocation) => {
  const [ location, setLocation] = useState('');

  useEffect(() => {
    const getLocationPermission  = async() => {
       const { status } = await Permissions.askAsync(Permissions.LOCATION);
       if (!status === 'granted') {
         return;
       }
  
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setLocation(location);
      saveLocation({ latitude, longitude});
    };
    
    getLocationPermission();
  }, []);

  return location;
};

export default useFetch;
