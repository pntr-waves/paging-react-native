import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {users} from '../reducers/users'

export const configureStore = () => {
  const store = createStore(
    combineReducers({users}),
    applyMiddleware(thunk, logger),
  );
  return store;
};
