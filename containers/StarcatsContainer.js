import React, { useEffect, useState } from 'react';
import StarCatsScreen from '../screens/StarcatsScreen';
import { useSelector } from 'react-redux';
import getRequestWithToken from '../utils/getRequestWithToken'
import { SERVER_API } from 'react-native-dotenv';
import { useDispatch } from 'react-redux';
import { updateCatsData } from '../actions';

const StarcatContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const foucsListner = navigation.addListener('focus', async () => {
      const { result, cats } = await getRequestWithToken(`${SERVER_API}/cat/starcats`);
      if (result !== 'ok') {
        return Alert.alert('스타냥이 정보 가져오기를 실패했습니다. 다시 시도해주세요');
      }

      setCats(cats);
      dispatch(updateCatsData(cats));
    });
 
    return foucsListner;
  }, []);

  const getPopularCats = (catLists) => {
    return catLists
      .sort((a, b) => b.likes.length - a.likes.length)
      .slice(0, 10);
  };

  const popularCats = getPopularCats(cats);
  return <StarCatsScreen popularCats={popularCats} navigation={navigation} />;
};

export default StarcatContainer;
