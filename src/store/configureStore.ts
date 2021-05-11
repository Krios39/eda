/**
 * Create the store with dynamic reducers
 */

import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';

import { createReducer } from './reducers';
import { profileSlice } from './profile/slice';
import { rootEpic } from './root-epic';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;
  const epicMiddleware = createEpicMiddleware();
  const logger = createLogger();

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware, epicMiddleware, logger];
  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const rootReducers = combineReducers({
    profile: profileSlice.reducer,
  });

  const store = configureStore({
    reducer: rootReducers,
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });

  epicMiddleware.run(rootEpic);

  return store;
}
