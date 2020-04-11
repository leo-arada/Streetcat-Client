import React, { useEffect, useState } from 'react';
import CatRegisterScreen from '../screens/CatRegisterScreen';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { useSelector, useDispatch } from 'react-redux';
import { SERVER_API } from 'react-native-dotenv';
import { AsyncStorage } from "react-native";
import { catsData, addAcat, updateUserCats } from '../actions';

const CatRegisterContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.user);
  const [photo, setPhoto] = useState({});

  const getPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('We need to get your permision to uplode photos!');
    }
  };

  useEffect(() => {
    getPermission();
  }, []);

  const displyPhoto = async () => {
    const photo = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 3],
      quality: 1,
    });

    setPhoto(photo);
  };

  const sendDataToServer = async (catData, catPhoto) => {
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
    
    const response = await fetch(`${SERVER_API}/cat/uploadImages`,{
      method: 'POST',
      body: data,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },  
    });
  
    const res = await response.json();
    dispatch(addAcat(res.cat));
    dispatch(updateUserCats(res.user.cats));
    dispatch(catsData({ latitude: location.latitude, longitude: location.longitude }));
    
    if (res.message === 'ok') return navigation.navigate('Home');
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
}

export default CatRegisterContainer;
