import { LOG_IN_SUCCESS, FETCH_CATS_DATA, UPDATE_CATS_DATA } from '../constants/index'
import { getDistance } from 'geolib';

const initialState = {
  catLists: null,
  catsAroud: [],
};

const cat = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN_SUCCESS:
      const { cats } = action.data;
      return {
        ...state,
        catLists: cats,
      };
    case FETCH_CATS_DATA:
     
      const { latitude, longitude } = action.location;
      let { catLists } = state;
      const catsAroud = catLists.filter((cat) => {
        const distance = getDistance(
          { latitude, longitude },
          { latitude: cat.location[0], longitude: cat.location[1] }
        );
        if (distance < 500) {
          return cat;
        }
      });
      return {
        ...state,
        catsAroud,
      };
    case UPDATE_CATS_DATA:
      catLists = action.catLists
    default:
      return {
        ...state,
        catLists,
      };
  }
};

export default cat;
