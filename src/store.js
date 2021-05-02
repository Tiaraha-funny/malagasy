import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../src/Redux';
import state from '../src/state';

const store = () => {
  return createStore(reducers, state, applyMiddleware(thunk));
};

export default store;
