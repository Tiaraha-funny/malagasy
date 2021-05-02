import React from 'react';
import {createStore} from 'react-redux';
import rootReducers from './ReduxReducers';

export function store() {
  return createStore(rootReducers);
}
