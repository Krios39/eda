import { HttpService } from '../http.service';
import { DishesSet } from '../../../store/profile/models/dishesSet';
import { ApiRoutes } from '../../constants/apiRoutes';

class ProfileServiceImpl {
  loadDishes() {
    return HttpService.get<DishesSet>(ApiRoutes.dishes).then(
      response => response.data,
    );
  }
}

const ProfileService = new ProfileServiceImpl();

export { ProfileService };
