import { combineEpics } from 'redux-observable';
import { dishesEpics } from './profile/effects';

export const rootEpic = combineEpics(dishesEpics);
