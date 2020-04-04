import { LOG_IN_SUCCESS } from '../constants/index'

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  isError: false,
}

const render = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN_SUCCESS:
      console.log(action)
      return {
        ...state,
        isLoggedIn: true,
      }
    default:
      return {
        ...state,
      }
  }
};

export default render;
