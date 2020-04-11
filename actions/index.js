import { 
  LOG_IN_SUCCESS, 
  ERROR, LOCATION_SUCCESS, 
  FETCH_CATS_DATA, 
  ADD_CAT_DATA, 
  CHOSEN_CAT, 
  UPDATE_CATS_DATA_LIKE,
  MODIFY_CAT_DATA,
  DELETE_CAT,
  UPDATE_USER_CATS,
} from '../constants';

export const logInSuccess = (data) => {
  return { type: LOG_IN_SUCCESS, data };
};

export const error = (message) => {
  return { type: ERROR, message };
};

export const locationSuccess = (location) => {
  return { type: LOCATION_SUCCESS, location };
};

export const catsData = (location) => {
  return { type: FETCH_CATS_DATA, location };
};

export const addAcat = (newCat) => {
  return { type: ADD_CAT_DATA, newCat };
};

export const clickedCat = (catIndex) => {
  return { type: CHOSEN_CAT, catIndex };
};

export const updateAcatForLike = (cat) => {
  return { type: UPDATE_CATS_DATA_LIKE, cat };
}

export const modifyAcat = (cat) => {
  return { type: MODIFY_CAT_DATA, cat };
};

export const deleteAcat = (cat) => {
  return { type: DELETE_CAT, cat };
};

export const updateUserCats = (cats) => {
  return { type: UPDATE_USER_CATS, cats} ;
};
