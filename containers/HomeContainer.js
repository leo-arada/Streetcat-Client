import React, { useEffect, useState } from 'react';
import HomeScreen from '../screens/HomeScreen'
import { catsData, clickedCat, userLocation } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import getRequestWithToken from '../utils/getRequestWithToken';
import { SERVER_API } from 'react-native-dotenv';
import { Alert } from 'react-native';

const HomeContainer = ({ navigation }) => {
  const { location } = useSelector((state) => state.user);
  const [newLocation, setNewLocaiton] = useState({ 
    latitude: location.latitude, 
    longitude: location.longitude,
  });
  
  const { catsAround } = useSelector((state) => state.cat);
  const dispatch = useDispatch();
  
  const getClickedCatData = (index) => {
    dispatch(clickedCat(index));
  };

  const changeLocation = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    Alert.alert('위치변경', '위치변경을 하시겠습니까?',
      [
        { text: '네', onPress:() => {
          setNewLocaiton({ latitude, longitude });
          getRequestWithToken(`${SERVER_API}/cat`);
          dispatch(userLocation({ latitude, longitude }))
          dispatch(catsData({ latitude, longitude }));
        }
         },
        { text: '취소' }
      ],
    );
  };

  useEffect(() => {
    const fetchData = async() => {
      await getRequestWithToken(`${SERVER_API}/cat`);
      const currentLocation = { 
        latitude: location.latitude, 
        longitude: location.longitude,
      };

      dispatch(userLocation(currentLocation));
      dispatch(catsData(currentLocation));
    }
    
    fetchData();
  }, []);
  
  return (
    <HomeScreen 
      location={location}
      newLocation={newLocation}
      nearCat={catsAround} 
      changeLocation={changeLocation}
      navigation={navigation}
      getClickedCatData={getClickedCatData}
    />
  );
};

export default HomeContainer;
