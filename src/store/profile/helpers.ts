import { SelectedDish } from '../models/selectedDish';
import { Dish } from '../models/dish';

export const isThisDishInOrder = (
  dish: Dish,
  selectedDishes: SelectedDish[],
) => {
  return selectedDishes.find(n => n.dish.dishId === dish.dishId);
};

export const getSelectedDishPrice = (selectedDish: SelectedDish) => {
  return selectedDish.dish.price * selectedDish.count;
};

export const getOrderPrice = (selectedDishes: SelectedDish[]) => {
  return selectedDishes.reduce(
    (sum, dish) => sum + getSelectedDishPrice(dish),
    0,
  );
};
