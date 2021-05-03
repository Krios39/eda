/**
 * Asynchronously loads the component for MenuPage
 */

import { lazyLoad } from 'utils/loadable';

export const MenuPage = lazyLoad(
  () => import('./index'),
  module => module.MenuPage,
);
