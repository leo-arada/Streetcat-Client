import { LOG_IN_SUCCESS, LOCATION_SUCCESS, FETCH_CATS_DATA } from '../constants/index'

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
    default:
      return {
        ...state,
      };
  }
};

export default user;
