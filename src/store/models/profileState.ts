import { Dish } from './dish';
import { UserData } from './userData';
import { SelectedDish } from './selectedDish';

export interface ProfileState {
  userData: UserData;
  dishes: Dish[];
  selectedDishes: SelectedDish[];
  loading: boolean;
}
