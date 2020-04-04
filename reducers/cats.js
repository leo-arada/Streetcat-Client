import { LOG_IN_SUCCESS, ERROR } from '../constants/index'

const initialState = {
  cats: null,
}

const cats = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN_SUCCESS:
      const { cats } = action.data;
      console.log(cats);
      return {
        ...state,
        cats,
      }
    default:
      return {
        ...state,
      }
  }
};

export default cats;
