import { ProfileState } from '../models/profileState';
import { createSelector } from '@reduxjs/toolkit';
import { getMenu } from './models/helpers';

const selectState: (state: any) => ProfileState = state => state.profile;
export const selectProfileState = createSelector(selectState, x => x);
export const selectIsLoading = createSelector(
  selectProfileState,
  x => x.loading,
);
export const selectMenu = createSelector(selectProfileState, x =>
  getMenu(x.dishes),
);

export const selectDishCategories = createSelector(selectMenu, x =>
  Object.keys(x),
);
