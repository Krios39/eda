import { SelectedDish } from './selectedDish';

export interface OrderPayload {
  id: number;
  order: SelectedDish[];
}
