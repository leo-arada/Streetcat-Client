import React, { useEffect, useState } from 'react';
import CatScreen from '../screens/CatScreen';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { SERVER_API } from 'react-native-dotenv';

const CatContainer = () => {
  const [photo, setPhoto] = useState({});
  const getPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('We need to get your permision to uplode photos!')
    }
  };

  useEffect(() => {
    getPermission();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 3],
      quality: 1,
    });
    setPhoto(result);
    const file = {
      uri: result.uri,
      name: '12312313',
      type: 'image/png'
    }

    fetch(`${SERVER_API}cat/uploadImages`,{
      method: 'POST',
    });
  };

  return (
    <CatScreen pickImage={pickImage} photo={photo}/>
  );
}

export default CatContainer;
