import { LOG_IN_SUCCESS } from '../constants/index'

const initialState = {
  email: null,
  name: null,
  isLoggedIn: false,
  location: null,
  cats: null,
}



export const loginAction = (data) => {
  return { type: LOG_IN_SUCCESS, data }
} 

const user = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN_SUCCESS:
      const { email, isLoggedIn, name } = action.data;
      // console.log(data);
      return {
        ...state,
        email,
        isLoggedIn,
        name
      }
    default:
      return {
        ...state,
      }
  }
};

export default user;
