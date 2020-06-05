import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import rootReducer from './root-reducer';

// Allows you to use console in Chrome.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [logger, thunk];

composeEnhancers(applyMiddleware(thunk))

export const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export default { store, persistor };