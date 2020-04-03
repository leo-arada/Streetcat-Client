import { LOG_IN_SUCCESS } from '../constants'

export const logInSuccess = (user) => {
  return { type: LOG_IN_SUCCESS, user }
} 
