import { Page } from 'app/components/Page';
import * as React from 'react';
import { RefObject, useState } from 'react';
import styled from 'styled-components';
import { ColumnCenteredFlex, Flexbox } from '../../typography/flex';
import { CategoriesList } from './components/CategoriesList';
import { useSelector } from 'react-redux';
import { Categories } from './components/Categories';
import { selectDishCategories } from '../../../store/profile/selectors';
import noMenuImg from '../../images/no_menu.svg';
import { Span } from 'app/typography/text';
// const dishes: Dish[] = [
//   {
//     id: 1,
//     title: 'fffffff',
//     type: 'fffff',
//     price: 50,
//     composition: 'ffffffffffffff',
//     weight: 'fffff г.',
//     image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
//     foodValue: {
//       fats: '20 г',
//       carb: '20 г',
//       protein: '20г',
//       energyValue: '20г',
//     },
//   },
//   {
//     id: 2,
//     title: 'fffffff',
//     type: 'fffff',
//     price: 50,
//     composition: 'ffffffffffffff',
//     weight: 'fffff г.',
//     image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
//     foodValue: {
//       fats: '20 г',
//       carb: '20 г',
//       protein: '20г',
//       energyValue: '20г',
//     },
//   },
//   {
//     id: 3,
//     title: 'fffffff',
//     type: 'fffff',
//     price: 50,
//     composition: 'ffffffffffffff',
//     weight: 'fffff г.',
//     image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
//     foodValue: {
//       fats: '20 г',
//       carb: '20 г',
//       protein: '20г',
//       energyValue: '20г',
//     },
//   },
//   {
//     id: 4,
//     title: 'fffffff',
//     type: 'fffff',
//     price: 50,
//     composition: 'ffffffffffffff',
//     weight: 'fffff г.',
//     image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
//     foodValue: {
//       fats: '20 г',
//       carb: '20 г',
//       protein: '20г',
//       energyValue: '20г',
//     },
//   },
//   {
//     id: 5,
//     title: 'aaaaaaa',
//     type: 'fffff',
//     price: 50,
//     composition: 'ffffffffffffff',
//     weight: 'fffff г.',
//     image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
//     foodValue: {
//       fats: '20 г',
//       carb: '20 г',
//       protein: '20г',
//       energyValue: '20г',
//     },
//   },
//   {
//     id: 6,
//     title: 'aaaaaaa',
//     type: 'aaaaaaa',
//     price: 50,
//     composition: 'ffffffffffffff',
//     weight: 'fffff г.',
//     image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
//     foodValue: {
//       fats: '20 г',
//       carb: '20 г',
//       protein: '20г',
//       energyValue: '20г',
//     },
//   },
//   {
//     id: 7,
//     title: 'aaaaaaa',
//     type: 'aaaaaaa',
//     price: 50,
//     composition: 'ffffffffffffff',
//     weight: 'fffff г.',
//     image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
//     foodValue: {
//       fats: '20 г',
//       carb: '20 г',
//       protein: '20г',
//       energyValue: '20г',
//     },
//   },
//   {
//     id: 8,
//     title: 'fffffff',
//     type: 'aaaaaaa',
//     price: 50,
//     composition: 'ffffffffffffff',
//     weight: 'fffff г.',
//     image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
//     foodValue: {
//       fats: '20 г',
//       carb: '20 г',
//       protein: '20г',
//       energyValue: '20г',
//     },
//   },
//   {
//     id: 9,
//     title: 'fffffff',
//     type: 'vvvvvv',
//     price: 50,
//     composition: 'ffffffffffffff',
//     weight: 'fffff г.',
//     image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
//     foodValue: {
//       fats: '20 г',
//       carb: '20 г',
//       protein: '20г',
//       energyValue: '20г',
//     },
//   },
//   {
//     id: 10,
//     title: 'fffffff',
//     type: 'vvvvvv',
//     price: 50,
//     composition: 'ffffffffffffff',
//     weight: 'fffff г.',
//     image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
//     foodValue: {
//       fats: '20 г',
//       carb: '20 г',
//       protein: '20г',
//       energyValue: '20г',
//     },
//   },
//   {
//     id: 11,
//     title: 'fffffff',
//     type: 'vvvvvv',
//     price: 50,
//     composition: 'ffffffffffffff',
//     weight: 'fffff г.',
//     image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
//     foodValue: {
//       fats: '20 г',
//       carb: '20 г',
//       protein: '20г',
//       energyValue: '20г',
//     },
//   },
//   {
//     id: 12,
//     title: 'fffffff',
//     type: 'vvvvvv',
//     price: 50,
//     composition: 'ffffffffffffff',
//     weight: 'fffff г.',
//     image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
//     foodValue: {
//       fats: '20 г',
//       carb: '20 г',
//       protein: '20г',
//       energyValue: '20г',
//     },
//   },
// ];

export function MenuPage() {
  const [refs, setRefs] = useState<RefObject<HTMLDivElement>[]>([]);
  const categories = useSelector(selectDishCategories);

  return (
    <MenuPageComponent>
      {/*<MenuPageContent>*/}
      {categories.length ? (
        <MenuPageContent>
          <CategoriesList refs={refs} />
          <Categories refs={refs} setRefs={setRefs} />
        </MenuPageContent>
      ) : (
        <NoMenu />
      )}
      {/*</MenuPageContent>*/}
    </MenuPageComponent>
  );
}

const MenuPageComponent = styled(Page)`
  position: relative;
`;

const NoMenu = () => {
  return (
    <ColumnCenteredFlex>
      <NoMenuImage />
      <NoMenuText>Сегодня блюд нет, приходите позднее</NoMenuText>
    </ColumnCenteredFlex>
  );
};

const NoMenuImage = styled.div`
  height: 778px;
  width: 662px;
  background: url(${noMenuImg});
  position: absolute;
  top: 30px;
`;

const NoMenuText = styled(Span)`
  font-size: 30px;
  line-height: 35px;
`;

const MenuPageContent = styled(Flexbox)`
  width: 100%;
  min-height: 100px;
`;
