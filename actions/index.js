import { LOG_IN_SUCCESS, ERROR, LOCATION_SUCCESS } from '../constants'

export const logInSuccess = (data) => {
  return { type: LOG_IN_SUCCESS, data }
};

export const error = (message) => {
  return { type: ERROR, message }
};

export const locationSuccess = (location) => {
  return { type: LOCATION_SUCCESS, location }
}

