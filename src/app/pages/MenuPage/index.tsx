import { Page } from 'app/components/Page';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { Flexbox } from '../../typography/flex';
import { CategoriesList } from './components/CategoriesList';
import { useDispatch } from 'react-redux';
import { RefObject, useEffect, useState } from 'react';
import { profileSlice } from '../../../store/profile/slice';
import { Dish } from '../../../store/models/dish';
import { Categories } from './components/Categories';

const dishes: Dish[] = [
  {
    id: 1,
    title: 'fffffff',
    type: 'fffff',
    price: 50,
    composition: 'ffffffffffffff',
    weight: 'fffff г.',
    image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
    foodValue: {
      fats: '20 г',
      carb: '20 г',
      protein: '20г',
      energyValue: '20г',
    },
  },
  {
    id: 2,
    title: 'fffffff',
    type: 'fffff',
    price: 50,
    composition: 'ffffffffffffff',
    weight: 'fffff г.',
    image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
    foodValue: {
      fats: '20 г',
      carb: '20 г',
      protein: '20г',
      energyValue: '20г',
    },
  },
  {
    id: 3,
    title: 'fffffff',
    type: 'fffff',
    price: 50,
    composition: 'ffffffffffffff',
    weight: 'fffff г.',
    image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
    foodValue: {
      fats: '20 г',
      carb: '20 г',
      protein: '20г',
      energyValue: '20г',
    },
  },
  {
    id: 4,
    title: 'fffffff',
    type: 'fffff',
    price: 50,
    composition: 'ffffffffffffff',
    weight: 'fffff г.',
    image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
    foodValue: {
      fats: '20 г',
      carb: '20 г',
      protein: '20г',
      energyValue: '20г',
    },
  },
  {
    id: 5,
    title: 'aaaaaaa',
    type: 'fffff',
    price: 50,
    composition: 'ffffffffffffff',
    weight: 'fffff г.',
    image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
    foodValue: {
      fats: '20 г',
      carb: '20 г',
      protein: '20г',
      energyValue: '20г',
    },
  },
  {
    id: 6,
    title: 'aaaaaaa',
    type: 'aaaaaaa',
    price: 50,
    composition: 'ffffffffffffff',
    weight: 'fffff г.',
    image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
    foodValue: {
      fats: '20 г',
      carb: '20 г',
      protein: '20г',
      energyValue: '20г',
    },
  },
  {
    id: 7,
    title: 'aaaaaaa',
    type: 'aaaaaaa',
    price: 50,
    composition: 'ffffffffffffff',
    weight: 'fffff г.',
    image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
    foodValue: {
      fats: '20 г',
      carb: '20 г',
      protein: '20г',
      energyValue: '20г',
    },
  },
  {
    id: 8,
    title: 'fffffff',
    type: 'aaaaaaa',
    price: 50,
    composition: 'ffffffffffffff',
    weight: 'fffff г.',
    image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
    foodValue: {
      fats: '20 г',
      carb: '20 г',
      protein: '20г',
      energyValue: '20г',
    },
  },
  {
    id: 9,
    title: 'fffffff',
    type: 'vvvvvv',
    price: 50,
    composition: 'ffffffffffffff',
    weight: 'fffff г.',
    image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
    foodValue: {
      fats: '20 г',
      carb: '20 г',
      protein: '20г',
      energyValue: '20г',
    },
  },
  {
    id: 10,
    title: 'fffffff',
    type: 'vvvvvv',
    price: 50,
    composition: 'ffffffffffffff',
    weight: 'fffff г.',
    image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
    foodValue: {
      fats: '20 г',
      carb: '20 г',
      protein: '20г',
      energyValue: '20г',
    },
  },
  {
    id: 11,
    title: 'fffffff',
    type: 'vvvvvv',
    price: 50,
    composition: 'ffffffffffffff',
    weight: 'fffff г.',
    image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
    foodValue: {
      fats: '20 г',
      carb: '20 г',
      protein: '20г',
      energyValue: '20г',
    },
  },
  {
    id: 12,
    title: 'fffffff',
    type: 'vvvvvv',
    price: 50,
    composition: 'ffffffffffffff',
    weight: 'fffff г.',
    image: 'http://edatomsk.ru/images/delivery/items/307.jpg',
    foodValue: {
      fats: '20 г',
      carb: '20 г',
      protein: '20г',
      energyValue: '20г',
    },
  },
];

export function MenuPage() {
  const dispatch = useDispatch();

  const [refs, setRefs] = useState<RefObject<HTMLDivElement>[]>([]);

  useEffect(() => {
    // dispatch(profileSlice.actions.loadDishes());
    dispatch(profileSlice.actions.loadDishesSuccess({ dishes: dishes }));
  }, []);

  return (
    <Page>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <MenuPageContent>
        <CategoriesList refs={refs} />
        <Categories refs={refs} setRefs={setRefs} />
      </MenuPageContent>
    </Page>
  );
}

const MenuPageContent = styled(Flexbox)`
  width: 100%;
  min-height: 100px;
`;
