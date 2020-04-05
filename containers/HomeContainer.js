import React, { useEffect, useState } from 'react';
import HomeScreen from '../screens/HomeScreen'
import LoadingScreen from '../screens/LoadingScreen';
import { logInSuccess, error, locationSuccess, catsData } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import getToken from '../utils/getToken';
import { SERVER_API } from 'react-native-dotenv';

const HomeContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const { latitude, longitude }= useSelector(state => state.user.location);
  const { catsAroud } = useSelector(state => state.cat);
  const [newLocation, setNewLocaiton] = useState({ latitude, longitude });
  // console.log(navigation)

  const onPresshandler = (e) => {
    console.log('렌더링')
    const { latitude, longitude} = e.nativeEvent.coordinate;
    setNewLocaiton({ latitude, longitude });
  };

  useEffect(() => {
    getToken(`${SERVER_API}/cat`);
    dispatch(catsData({ latitude: newLocation.latitude, longitude: newLocation.longitude }));
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
