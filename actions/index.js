import { LOG_IN_SUCCESS, ERROR, LOCATION_SUCCESS, FETCH_CATS_DATA, UPDATE_CATS_DATA } from '../constants'

export const logInSuccess = (data) => {
  return { type: LOG_IN_SUCCESS, data }
};

export const error = (message) => {
  return { type: ERROR, message }
};

export const locationSuccess = (location) => {
  return { type: LOCATION_SUCCESS, location }
};

export const catsData = (location) => {
  return { type: FETCH_CATS_DATA, location }
};

export const updateCats = (catLists) => {
  return { type: UPDATE_CATS_DATA, catLists }
};
