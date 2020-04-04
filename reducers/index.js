import { combineReducers } from 'redux';
import user from './user';
import render from './render';

export default combineReducers({
  user,
  render,
});
