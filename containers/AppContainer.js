import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppNavigator from '../navigation/AppNavigator';


const AppContainer = () => {
  const { isLoggedIn, isError }= useSelector(state => state.render);

  return (
    <AppNavigator isLoggedIn={isLoggedIn}/>
  );
}

export default AppContainer;
