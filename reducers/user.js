import { LOG_IN_SUCCESS, LOCATION_SUCCESS } from '../constants/index'

const initialState = {
  facebookId: null,
  name: null,
  location: null,
  cats: null,
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN_SUCCESS:
      return {
        ...state,
        ...action.data.user,
      }
    case LOCATION_SUCCESS:
      return {
        ...state,
        location: action.location,
      }
    default:
      return {
        ...state,
      }
  }
};

export default user;
