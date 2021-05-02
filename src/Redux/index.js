import {combineReducers} from 'redux';
import {categoryList} from './Reducers/categoryList';
import {phrases} from './Reducers/phrases';

export default combineReducers({
  categoryList,
  phrases,
});
