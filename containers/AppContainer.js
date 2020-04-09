import React from 'react';
import { Root } from "native-base";
import { useSelector } from 'react-redux';
import AppNavigator from '../navigation/AppNavigator';

const AppContainer = () => {
  const { currentCat } = useSelector((state) => state.cat)
  const { isLoggedIn } = useSelector((state) => state.render);
  
  return (
    <Root>
      <AppNavigator isLoggedIn={isLoggedIn} />
    </Root>
  )

};

export default AppContainer;
