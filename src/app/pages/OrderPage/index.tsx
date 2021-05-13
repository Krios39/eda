import React, { useEffect } from 'react';
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
import { useSelector } from 'react-redux';
import { selectMenu } from '../../../store/profile/selectors';

export function OrderPage() {
  // const menu = useSelector(selectMenu);

  const menu = [];
  return (
    <Page alignItems={'flex-end'}>
      <OrderList spacing={'10px'}>
        {/*{menu.map((dish, index) => (*/}
        {/*  <Order key={dish.id} dish={dish} />*/}
        {/*))}*/}
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
