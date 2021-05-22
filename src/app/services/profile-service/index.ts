import { HttpService } from '../http.service';
import { DishesSet } from '../../../store/profile/models/dishesSet';
import { ApiRoutes } from '../../constants/apiRoutes';
import { OrderPayload } from 'store/models/orderPayload';

class ProfileServiceImpl {
  loadDishes() {
    return HttpService.get<DishesSet>(ApiRoutes.dishes).then(
      response => response.data,
    );
  }

  sendOrder(orderPayload: OrderPayload) {
    return HttpService.post(
      `${ApiRoutes.sendOrder}?id=${orderPayload.id}`,
      orderPayload.order,
    ).then(response => response.data);
  }
}

const ProfileService = new ProfileServiceImpl();

export { ProfileService };
