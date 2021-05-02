import React from 'react';
import HOME_SCREEN_CATEGORY_LIST from '../Constants';
import categoryList from '../data/categories.json';

export function CategoryList() {
  return async dispatch => {
    dispatch({
      type: HOME_SCREEN_CATEGORY_LIST,
      payload: categoryList,
      loading: true,
    });
  };
}

export function SeenPrases(phrases) {
  return {
    type: SEEN_PRASES,
    payload: phrases,
  };
}

export function LearntPrases(phrases) {
  return {
    type: LEARNT_PHRASES,
    payload: prases,
  };
}
