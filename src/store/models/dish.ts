import { NutritionalValue } from './nutritionalValue';

export interface Dish {
  id: number;
  title: string;
  price: number;
  composition?: string;
  weight?: string;
  image: string;
  foodValue?: NutritionalValue;
  // description?: string;
}
