export const LOADING = 'LOADING';
export const POSTER  = 'POSTER';
export const COMMENTER = 'COMMENTER';
export const FETCH_CATS_DATA = 'FETCH_CATS_DATA';
export const ADD_CAT_DATA = 'ADD_CAT_DATA';
export const UPDATE_CATS_DATA_LIKE = 'UPDATE_CATS_DATA_LIKE';
export const MODIFY_CAT_DATA = 'MODIFY_CAT_DATA';
export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_COMMENT_DATA = 'FETCH_COMMENT_DATA';
export const LIKE_CAT = 'LIKE_CAT';
export const MODIFY_CAT = 'MODIFY_CAT';
export const DELETE_CAT = 'DELETE_CAT';
export const SAVE_CURRENT_CAT_INDEX = 'SAVE_CURRENT_CAT_INDEX';
export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT = 'LOG_OUT';
export const ADD_NEW_CAT = 'ADD_NEW_CAT';
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
export const REFRESH = 'REFRESH';
export const ERROR = 'ERROR';
export const LOCATION_SUCCESS = 'LOCATION_SUCCESS';
export const regPatterns = {
  name: /[1-9|$&+,:;=?@#|'<>.^*()%!-]/g,
  textArea: /^[a-zA-Z0-9[ㄱ-ㅎ|ㅏ-ㅣ|가-힣.,\s]{1,30}$/g,
};

export const checkboxValues = ['상', '중', '하'];
export const actionSheetValue = ['상', '중', '하', '취소'];
export const CHOSEN_CAT = 'CHOSEN_CAT';
