import { Page } from 'app/components/Page';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { DishCard } from './components/DishCard';
import styled from 'styled-components';
import { Flexbox, FlexWithSpacing } from '../../typography/flex';
import { dishCardImageWidth } from '../../constants/sizes';
import { Categories } from './components/Categories';

const dishes = [
  {
    id: 1,
    name: 'Салат "Винегрет"',
    price: 46,
    weight: '130/20',
    imageUrl: 'https://edatomsk.ru/images/delivery/items/24.jpg',
    composition:
      'Картофель, свёкла, горошек, капуста, огурец, морковь, лук, масло',
    nutritionalValue: {
      energyValue: '228',
      protein: '228',
      carb: '228',
      fats: '228',
    },
  },
  {
    id: 1,
    name: 'Салат "Винегрет"',
    price: 46,
    weight: '130/20',
    imageUrl: 'https://edatomsk.ru/images/delivery/items/24.jpg',
    composition:
      'Картофель, свёкла, горошек, капуста, огурец, морковь, лук, масло',
    nutritionalValue: {
      energyValue: '228',
      protein: '228',
      carb: '228',
      fats: '228',
    },
  },
  {
    id: 1,
    name: 'Салат "Винегрет"',
    price: 46,
    weight: '130/20',
    imageUrl: 'https://edatomsk.ru/images/delivery/items/24.jpg',
    composition:
      'Картофель, свёкла, горошек, капуста, огурец, морковь, лук, масло',
    nutritionalValue: {
      energyValue: '228',
      protein: '228',
      carb: '228',
      fats: '228',
    },
  },
  {
    id: 1,
    name: 'Салат "Винегрет"',
    price: 46,
    weight: '130/20',
    imageUrl: 'https://edatomsk.ru/images/delivery/items/24.jpg',
    composition:
      'Картофель, свёкла, горошек, капуста, огурец, морковь, лук, масло',
    nutritionalValue: {
      energyValue: '228',
      protein: '228',
      carb: '228',
      fats: '228',
    },
  },
  {
    id: 1,
    name: 'Салат "Винегрет"',
    price: 46,
    weight: '130/20',
    imageUrl: 'https://edatomsk.ru/images/delivery/items/24.jpg',
    composition:
      'Картофель, свёкла, горошек, капуста, огурец, морковь, лук, масло',
    nutritionalValue: {
      energyValue: '228',
      protein: '228',
      carb: '228',
      fats: '228',
    },
  },
  {
    id: 1,
    name: 'Салат "Винегрет"',
    price: 46,
    weight: '130/20',
    imageUrl: 'https://edatomsk.ru/images/delivery/items/24.jpg',
    composition:
      'Картофель, свёкла, горошек, капуста, огурец, морковь, лук, масло',
    nutritionalValue: {
      energyValue: '228',
      protein: '228',
      carb: '228',
      fats: '228',
    },
  },
  {
    id: 1,
    name: 'Салат "Винегрет"',
    price: 46,
    weight: '130/20',
    imageUrl: 'https://edatomsk.ru/images/delivery/items/24.jpg',
    composition:
      'Картофель, свёкла, горошек, капуста, огурец, морковь, лук, масло',
    nutritionalValue: {
      energyValue: '228',
      protein: '228',
      carb: '228',
      fats: '228',
    },
  },
  {
    id: 1,
    name: 'Салат "Винегрет"',
    price: 46,
    weight: '130/20',
    imageUrl: 'https://edatomsk.ru/images/delivery/items/24.jpg',
    composition:
      'Картофель, свёкла, горошек, капуста, огурец, морковь, лук, масло',
    nutritionalValue: {
      energyValue: '228',
      protein: '228',
      carb: '228',
      fats: '228',
    },
  },
];

export function MenuPage() {
  return (
    <Page>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <MenuPageContent>
        <Categories />
        <Dishes spacing={'58px'}>
          {dishes.map((dish, index) => (
            <DishCard key={index} dish={dish} />
          ))}
        </Dishes>
      </MenuPageContent>
    </Page>
  );
}

const MenuPageContent = styled(Flexbox)`
  width: 100%;
  min-height: 100px;
  //height: 100%;
  //position: relative;
`;

const Dishes = styled(FlexWithSpacing)`
  width: calc(3 * ${dishCardImageWidth} + 2 * 58px);
  flex-wrap: wrap;
`;
