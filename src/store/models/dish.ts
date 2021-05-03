import { NutritionalValue } from './nutritionalValue';

export interface Dish {
  id: number;
  name: string;
  price: number;
  composition?: string;
  weight?: string;
  imageUrl: string;
  nutritionalValue?: NutritionalValue;
  // description?: string;
}
