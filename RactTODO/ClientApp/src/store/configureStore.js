import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import serverMiddlewear from '../middlewares/serverMiddlewar' 
import reducers from '../reducers'
import {createLogger} from 'redux-logger'

export default function configureStore(history, initialState) {

  const middleware = [
    thunk,
    serverMiddlewear,
    routerMiddleware(history),
    createLogger()
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  return createStore(
      reducers,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
}
