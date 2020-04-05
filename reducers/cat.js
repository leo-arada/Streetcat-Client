import { LOG_IN_SUCCESS, ERROR, FETCH_DEFAULT_CAT_DATA } from '../constants/index'
import { getDistance } from 'geolib';

const initialState = {
  catLists: null,
  catsAroud: [],
}

const cat = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN_SUCCESS:
      const { cats } = action.data;
      return {
        ...state,
        catLists: cats,
      }
    case FETCH_DEFAULT_CAT_DATA:
      const { catLists } = state;
      const { latitude, longitude } = action.location;
      const catsAroud = catLists.filter((cat) => {
        const distance = getDistance(
          { latitude, longitude },
          { latitude: cat.location[0], longitude: cat.location[1] }
        );
        if (distance < 5000) {
          return cat;
        }
      });
      return {
        ...state,
        catsAroud,
      }
    default:
      return {
        ...state,
      }
  }
};

export default cat;
