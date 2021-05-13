import { Dish } from '../../models/dish';

export const getMenu = (dishes: Dish[]) => {
  return dishes.reduce((prev: any[], item: Dish) => {
    if (`${item.type}` in prev) prev[item.type].push(item);
    else prev[item.type] = [item];
    return prev;
  }, []);
};
