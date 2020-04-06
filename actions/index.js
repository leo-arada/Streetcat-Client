import { LOG_IN_SUCCESS, ERROR, LOCATION_SUCCESS, FETCH_DEFAULT_CAT_DATA } from '../constants'

export const logInSuccess = (data) => {
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
};
