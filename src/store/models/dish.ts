import { NutritionalValue } from './nutritionalValue';

export interface Dish {
  dishId: number;
  type: string;
  title: string;
  price: number;
  // composition?: string;
  weight?: string;
  image: string;
  foodValue?: NutritionalValue;
  description: [
    {
      content: string;
    },
  ];
}
