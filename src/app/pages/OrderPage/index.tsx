import React from 'react';
import { Page } from '../../components/Page';
import {
  CenteredFlex,
  ColumnCenteredFlexWithPadding,
  ColumnFlexWithPadding,
} from '../../typography/flex';
import styled from 'styled-components';
import { Order } from './components/Order';
import { Span } from 'app/typography/text';
import { ruble } from '../../constants/ruble';
import {
  buttonBackground,
  buttonBackgroundClick,
  buttonBackgroundHover,
  mainWhite,
} from '../../themes/colors';

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
];

export function OrderPage() {
  return (
    <Page alignItems={'flex-end'}>
      <OrderList spacing={'10px'}>
        {dishes.map((dish, index) => (
          <Order key={index} dish={dish} />
        ))}
      </OrderList>
      <Total spacing={'20px'}>
        <TotalText>Общая сумма заказа: 228 {ruble}</TotalText>
        <AcceptButton>Подтвердить</AcceptButton>
      </Total>
    </Page>
  );
}

const OrderList = styled(ColumnCenteredFlexWithPadding)`
  width: 100%;
`;

const Total = styled(ColumnFlexWithPadding)`
  justify-content: flex-end;
  margin-top: 20px;
`;

const TotalText = styled(Span)`
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  text-align: right;
`;

const AcceptButton = styled(CenteredFlex)`
  padding: 12px;
  width: 270px;
  background-color: ${buttonBackground};
  color: ${mainWhite};
  border-radius: 10px;

  :hover {
    background-color: ${buttonBackgroundHover};
  }

  :active {
    background-color: ${buttonBackgroundClick};
  }
`;
