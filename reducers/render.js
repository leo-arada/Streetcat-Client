import { LOG_IN_SUCCESS, ERROR } from '../constants/index'

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  isError: false,
}

const render = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default render;
