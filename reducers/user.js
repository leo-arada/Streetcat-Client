import { LOG_IN_SUCCESS } from '../constants/index'

const initialState = {
  facebookId: null,
  name: null,
  location: null,
  cats: null,
}


const user = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN_SUCCESS:
      console.log(action)
      console.log(111111)
      return {
        ...state,
        ...action.user,
      }
    default:
      return {
        ...state,
      }
  }
};

export default user;
