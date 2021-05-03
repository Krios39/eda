import { lazyLoad } from 'utils/loadable';

export const OrderPage = lazyLoad(
  () => import('./index'),
  module => module.OrderPage,
);
