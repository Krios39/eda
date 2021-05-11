import { ActionsObservable, combineEpics, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';

import { profileSlice } from './slice';
import { ProfileService } from '../../app/services/profile-service';

const loadDishesEpic$ = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType(profileSlice.actions.loadDishes.type),
    switchMap(action => {
      return ProfileService.loadDishes()
        .then(dishes => profileSlice.actions.loadDishesSuccess(dishes))
        .catch(error => profileSlice.actions.loadDishesFailure(error));
    }),
  );
export const dishesEpics = combineEpics(loadDishesEpic$);
