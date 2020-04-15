import React, { useEffect, useState, useCallback } from 'react';
import CatRegisterScreen from '../screens/CatRegisterScreen';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { useSelector, useDispatch } from 'react-redux';
import { SERVER_API } from 'react-native-dotenv';
import { AsyncStorage } from "react-native";
import { catsData, addAcat, userLocation } from '../actions';
import { Alert } from 'react-native';

const CatRegisterContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.user);
  const [photo, setPhoto] = useState({});

  const getPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      Alert.alert('위치 정보가 필요합니다');
    }
  };

  useEffect(() => {
    let mounted = true;
    getPermission();
    return () => mounted = false;
  }, [photo]);

  const displyPhoto = useCallback(async () => {
    const photo = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 3],
      quality: 1,
    });

    setPhoto(photo);
  }, []);

  const sendDataToServer = async (catData, catPhoto) => {
    try {

      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('userId');
      const photo = {
        uri: catPhoto.uri,
        name: 'new-photo.jpg',
        type: 'multipart/form-data',
      };

      let data = new FormData();
      data.append('accessibility', catData.accessibility);
      data.append('description', catData.description);
      data.append('friendliness', catData.friendliness);
      data.append('id', id);
      data.append('image', photo);
      data.append('latitude', catData.location[0]);
      data.append('longitude', catData.location[1]);
      data.append('name', catData.name);
      data.append('time', new Date().toISOString());

      const response = await fetch(`${SERVER_API}/cat`,{
        method: 'POST',
        body: data,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },  
      });
    
      const { cat, message } = await response.json();
      if (message !== 'ok') {
        return Alert.alert('고양이 등록이 실패했습니다. 다시 시도해 주세요');
      }
      const currentLocation = { latitude: location.latitude, longitude: location.longitude }
      dispatch(addAcat(cat));
      dispatch(userLocation(currentLocation));
      dispatch(catsData(currentLocation));
      Alert.alert('고양이 등록이 완료돼었습니다.');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('고양이 등록이 실패했습니다. 다시 시도해 주세요');
    }
  };

  return (
    <CatRegisterScreen 
      sendDataToServer={sendDataToServer} 
      photo={photo} 
      displyPhoto={displyPhoto}
      location={location}
      navigation={navigation}
    />
  );
};

export default CatRegisterContainer;
