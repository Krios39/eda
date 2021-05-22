import { ActionsObservable, combineEpics, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';

import { profileSlice } from './slice';
import { ProfileService } from '../../app/services/profile-service';
import { PayloadAction } from '@reduxjs/toolkit';
import { OrderPayload } from 'store/models/orderPayload';

const loadDishesEpic$ = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType(profileSlice.actions.loadDishes.type),
    switchMap(() => {
      return ProfileService.loadDishes()
        .then(dishes => profileSlice.actions.loadDishesSuccess(dishes))
        .catch(error => profileSlice.actions.loadDishesFailure(error));
    }),
  );

const sendOrderEpic$ = (
  action$: ActionsObservable<PayloadAction<OrderPayload>>,
) =>
  action$.pipe(
    ofType(profileSlice.actions.sendOrder.type),
    switchMap(action => {
      return ProfileService.sendOrder(action.payload)
        .then(() => profileSlice.actions.sendOrderSuccess())
        .catch(error => profileSlice.actions.sendOrderFailure());
    }),
  );

export const dishesEpics = combineEpics(loadDishesEpic$, sendOrderEpic$);
