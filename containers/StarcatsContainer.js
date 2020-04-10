import React from 'react';
import StarCatsScreen from '../screens/StarcatsScreen';
import { useSelector } from 'react-redux';

const StarcatContainer = ({ navigation }) => {
  const { catLists } = useSelector((state) => state.cat);

  const getPopularCats = (catLists) => {
    return catLists
      .sort((a, b) => b.likes.length - a.likes.length)
      .slice(0, 10);
  };
  
  const popularCats = getPopularCats(catLists);
  return <StarCatsScreen popularCats={popularCats} navigation={navigation} />;
};

export default StarcatContainer;
