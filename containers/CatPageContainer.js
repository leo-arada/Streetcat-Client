import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CatpageScreen from '../screens/CatPageScreen';
import { modifyAcat, updateAcatForLike, catsData } from '../actions';
import { SERVER_API } from 'react-native-dotenv';
import { AsyncStorage } from "react-native";
import likePostRequest from '../utils/likePostRequest';
import { Alert } from 'react-native';

const CatPageContainer = ({ route , navigation }) => {
  const dispatch = useDispatch();
  const { index } = route.params;
  const { mongoId } = useSelector((state) => state.user);
  const cat = useSelector((state) => state.cat.catsAround[index]);
  const [isFounder, setIsFounder] = useState(false);

  useEffect(() => {
    setIsFounder(mongoId === cat.founder);
  }, [cat]);

  const snedModifiedData = async (updatedata, catId) => {
    const token = await AsyncStorage.getItem('token');
    const response = await fetch(`${SERVER_API}/cat/${catId}`,{
      method: 'PUT',
      body: JSON.stringify(updatedata),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },  
    });

    const res = await response.json();
    dispatch(modifyAcat(res.cat));
    navigation.goBack();
  };

  const sendLikePostRequest = async (catId) => {
    const { cat, message } = await likePostRequest(catId);
    if (message === 'User already liked it') {
      return;
    }

    dispatch(updateAcatForLike(cat));
  };

  const sendDeleteRequest = async () => {
    const helper = async () => {
      const { _id } = cat;
      const token = await AsyncStorage.getItem('token');
      const response = await fetch(`${SERVER_API}/cat/${_id}`,{
        method: 'DELETE',
        body: JSON.stringify({ _id }),
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },  
      });
    };
    
    Alert.alert(
      '삭제',
      '정말 삭제하시겠습니까?',
      [
        {text: '네', onPress:() => helper()},
        {text: '취소'}
      ],
    );
  };

  return(
    <CatpageScreen 
      cat={cat} 
      navigation={navigation} 
      isFounder={isFounder}
      snedModifiedData={snedModifiedData}
      sendLikePostRequest={sendLikePostRequest}
      sendDeleteRequest={sendDeleteRequest}
    />
  );
};

export default CatPageContainer;
