import React from 'react';
import {combineReducers} from 'react-redux';
import HOME_SCREEN_CATEGORY_LIST from '../Constants';

const initialState = {
  category: [],
  loading: false,
};

const HomeScreenReducers = (state = initialState, action) => {
  switch (action.type) {
    case HOME_SCREEN_CATEGORY_LIST:
      return {
        ...state,
      };

      break;

    default:
      break;
  }
};

export default rootReducers = combineReducers({
  HomeScreenReducers,
});
