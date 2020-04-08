import React, { useEffect, useState } from 'react';
import HomeScreen from '../screens/HomeScreen'
import { catsData } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import getRequestWithToken from '../utils/getRequestWithToken';
import { SERVER_API } from 'react-native-dotenv';

const HomeContainer = ({ navigation }) => {
  const { latitude, longitude } = useSelector((state) => state.user.location);
  const [newLocation, setNewLocaiton] = useState({ latitude, longitude });
  const dispatch = useDispatch();
  const { catsAroud } = useSelector((state) => state.cat);

  const onPresshandler = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setNewLocaiton({ latitude, longitude });
  };

  useEffect(() => {
    getRequestWithToken(`${SERVER_API}/cat`);
    dispatch(
      catsData({ 
        latitude: newLocation.latitude, 
        longitude: newLocation.longitude,
      })
    );
  }, [newLocation]);

  return (
    <HomeScreen 
      location={newLocation} 
      nearCat={catsAroud} 
      onPresshandler={onPresshandler}
      navigation={navigation}
    />
  );
};

export default HomeContainer;
