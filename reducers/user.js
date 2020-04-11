import { LOG_IN_SUCCESS, LOCATION_SUCCESS, FETCH_CATS_DATA, UPDATE_USER_CATS } from '../constants/index'

const initialState = {
  facebookId: null,
  name: null,
  location: null,
  cats: null,
};

const user = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN_SUCCESS:
      return {
        ...state,
        ...action.data.user,
      };
    case LOCATION_SUCCESS:
      return {
        ...state,
        location: action.location,
      };
    case FETCH_CATS_DATA:
      return {
        ...state,
        location: action.location,
      };
    case UPDATE_USER_CATS:
      return {
        ...state,
        cats: action.cats,

      };
    default:
      return {
        ...state,
      };
  }
};

export default user;
