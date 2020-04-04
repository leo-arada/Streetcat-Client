import { LOG_IN_SUCCESS, ERROR, LOCATION_SUCCESS } from '../constants'

export const logInSuccess = (user) => {
  return { type: LOG_IN_SUCCESS, user }
};

export const error = (message) => {
  return { type: ERROR, message }
};

export const locationSuccess = (location) => {
  return { type: LOCATION_SUCCESS, location }
}

