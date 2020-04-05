import { combineReducers } from 'redux';
import user from './user';
import render from './render';
import cat from './cat';
export default combineReducers({
  user,
  render,
  cat,
});
