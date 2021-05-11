import { ProfileState } from '../models/profileState';
import { createSelector } from '@reduxjs/toolkit';

const selectState: (state: any) => ProfileState = state => state.profile;
export const selectProfileState = createSelector(selectState, x => x);
export const selectIsLoading = createSelector(
  selectProfileState,
  x => x.loading,
);
export const selectMenu = createSelector(selectProfileState, x => x.dishes);
