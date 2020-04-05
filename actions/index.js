import { LOG_IN_SUCCESS, ERROR, LOCATION_SUCCESS, FETCH_DEFAULT_CAT_DATA } from '../constants'
import { getDistance } from 'geolib';

export const logInSuccess = (data) => {
  // console.log(data, 'inaction');

  return { type: LOG_IN_SUCCESS, data }
};

export const error = (message) => {
  return { type: ERROR, message }
};

export const locationSuccess = (location) => {
  return { type: LOCATION_SUCCESS, location }
}

export const catsData = (location) => {
  return { type: FETCH_DEFAULT_CAT_DATA, location }
}
