import React from 'react';
import CATEGORY_LIST from '../Constants';
import CategoryList from '../data/categories.json';
import Phrases from '../data/phrases.json';

export function getCategoryList() {
  return async dispatch => {
    dispatch({
      type: CATEGORY_LIST,
      payload: CategoryList,
      loading: true,
    });
  };
}

export function getPhrases() {
  return async dispatch => {
    dispatch({
      type: GET_PHRASES,
      payload: Phrases,
      loading: true,
    });
  };
}

export function getSeenPhrases(phrases) {
  return {
    type: SEEN_PRASES,
    payload: phrases,
  };
}

export function getLearntPrases(phrases) {
  return {
    type: LEARNT_PHRASES,
    payload: prases,
  };
}
