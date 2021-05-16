import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileState } from '../models/profileState';
import { UserData } from '../models/userData';
import { DishesSet } from './models/dishesSet';
import { DishPayload } from './models/dishPayload';

export const initialState: ProfileState = {
  userData: {
    userId: 0,
    name: 'undefined',
    surname: 'undefined',
    email: 'undefined',
  },
  dishes: [],
  selectedDishes: [],
  loading: false,
};

export const profileSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    loadUserId(state, action: PayloadAction<UserData>) {
      state.userData.userId = action.payload.userId;
      return state;
    },
    loadDishes(state) {
      state.loading = true;
      return state;
    },
    loadDishesSuccess(state, action: PayloadAction<DishesSet>) {
      state.loading = false;
      state.dishes = action.payload.dishes;
      return state;
    },
    loadDishesFailure(state, action) {
      state.loading = false;
      console.log('PHOBLEMS');
      return state;
    },
    selectDish(state, action: PayloadAction<DishPayload>) {
      state.selectedDishes = state.selectedDishes.concat({
        dish: action.payload.dish,
        count: 1,
      });
      return state;
    },
    removeDish(state, action: PayloadAction<DishPayload>) {
      state.selectedDishes = state.selectedDishes.filter(
        n => n.dish.id !== action.payload.dish.id,
      );
      return state;
    },
    addPortion(state, action: PayloadAction<DishPayload>) {
      state.selectedDishes.find(
        n => n.dish.id === action.payload.dish.id,
      )!.count =
        state.selectedDishes.find(n => n.dish.id === action.payload.dish.id)!
          .count + 1;
      return state;
    },
    removePortion(state, action: PayloadAction<DishPayload>) {
      state.selectedDishes.find(
        n => n.dish.id === action.payload.dish.id,
      )!.count =
        state.selectedDishes.find(n => n.dish.id === action.payload.dish.id)!
          .count - 1;
      return state;
    },
    loadProfileId(state, action) {
      state.userData.userId = action.payload;
      return state;
    },
  },
});
