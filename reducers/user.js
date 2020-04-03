import { LOG_IN_SUCCESS } from '../constants/index'

const initialState = {
  facebookId: null,
  name: null,
  isLoggedIn: false,
  location: null,
  cats: null,
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN_SUCCESS:
      console.log(action)
      return {
        ...state,
        ...action.user,
        isLoggedIn: true,
      }
    default:
      return {
        ...state,
      }
  }
};

export default user;
