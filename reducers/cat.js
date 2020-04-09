import { 
  LOG_IN_SUCCESS, 
  FETCH_CATS_DATA, 
  ADD_CAT_DATA, 
  CHOSEN_CAT, 
  UPDATE_CATS_DATA_LIKE, 
  MODIFY_CAT_DATA 
} from '../constants/index';
import { getDistance } from 'geolib';

const initialState = {
  catLists: null,
  catsAround: [],
  currentCat: null,
  catIndex: null,
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

      let catsAround = catLists.filter((cat) => {
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
        catsAround,
      };
    case ADD_CAT_DATA:
      const { newCat } = action;
      return {
        ...state,
        catLists: [...state.catLists, newCat],
      };
    case UPDATE_CATS_DATA_LIKE:
      let { cat } = action;
      catLists = state.catLists;
      let newLists = catLists.filter((eachCat)=> eachCat._id !== cat._id);

      return {
        ...state,
        catLists: [...newLists, cat],
        currentCat: cat,
      };

    case MODIFY_CAT_DATA:
      cat = action.cat;
      catLists = state.catLists;
      catsAround = state.catsAround;
      newLists = catLists.filter((eachCat)=> eachCat._id !== cat._id);
      return {
        ...state,
        catLists: [...newLists, cat],
        catsAround: [...catsAround.filter((eachCat)=> eachCat._id !== cat._id), cat],
        currentCat: cat,
      }

    case CHOSEN_CAT:
      const { catIndex } = action;
      const currentCat = state.catsAround[catIndex];
      return {
        ...state,
        currentCat,
        catIndex,
      };
    default:
      return {
        ...state,
        catLists,
      };
  }
};

export default cat;
