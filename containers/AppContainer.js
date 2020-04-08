import React from 'react';
import { useSelector } from 'react-redux';
import AppNavigator from '../navigation/AppNavigator';

const AppContainer = () => {
  const { isLoggedIn } = useSelector((state) => state.render);

  return <AppNavigator isLoggedIn={isLoggedIn} />;
};

export default AppContainer;
