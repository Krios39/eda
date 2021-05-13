import { NutritionalValue } from './nutritionalValue';

export interface Dish {
  id: number;
  type: string;
  title: string;
  price: number;
  composition?: string;
  weight?: string;
  image: string;
  foodValue?: NutritionalValue;
  // description?: string;
}
