import { combineReducers } from 'redux';
import user from './user';
import render from './render';
import cats from './cats';
export default combineReducers({
  user,
  render,
  cats,
});
