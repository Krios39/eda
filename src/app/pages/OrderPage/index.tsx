import React, { ReactNode, useEffect, useState } from 'react';
import { Page } from '../../components/Page';
import {
  CenteredFlex,
  CenteredFlexWithSpacing,
  ColumnCenteredFlexWithPadding,
  ColumnFlexWithPadding,
} from '../../typography/flex';
import styled from 'styled-components';
import { Order } from './components/Order';
import { Header, Span } from 'app/typography/text';
import { ruble } from '../../constants/ruble';
import {
  buttonBackground,
  buttonBackgroundClick,
  buttonBackgroundHover,
  mainWhite,
} from '../../themes/colors';
import { useSelector } from 'react-redux';
import { selectSelectedDishes } from '../../../store/profile/selectors';
import { getOrderPrice } from 'store/profile/helpers';
import { Modal } from '../../modals/Modal';

export function OrderPage() {
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState<boolean>(false);

  const selectedDishes = useSelector(selectSelectedDishes);

  return (
    <Page alignItems={'flex-end'}>
      <OrderList spacing={'10px'}>
        {selectedDishes.map(selectedDish => (
          <Order key={selectedDish.dish.dishId} selectedDish={selectedDish} />
        ))}
      </OrderList>
      <Total spacing={'20px'}>
        <TotalText>
          Общая сумма заказа: {getOrderPrice(selectedDishes)} {ruble}
        </TotalText>
        <AcceptButton onClick={() => setIsAcceptModalOpen(true)}>
          Подтвердить
        </AcceptButton>
      </Total>

      <AcceptModal
        isOpen={isAcceptModalOpen}
        onClose={() => setIsAcceptModalOpen(false)}
      />
    </Page>
  );
}

const OrderList = styled(ColumnCenteredFlexWithPadding)`
  width: 100%;
`;

const Total = styled(ColumnFlexWithPadding)`
  justify-content: flex-end;
  margin-top: 20px;
  margin-bottom: 80px;
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

const AcceptModal = (props: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ColumnFlexWithPadding spacing={'38px'}>
        <Header>Вы действительно хотите подтвердить свой заказ?</Header>
        <CenteredFlexWithSpacing spacing={'130px'}>
          <BlueButton onClick={props.onClose}>Да</BlueButton>
          <WhiteButton onClick={props.onClose}>Нет</WhiteButton>
        </CenteredFlexWithSpacing>
      </ColumnFlexWithPadding>
    </Modal>
  );
};

const Button = (props: {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <ButtonComponent className={props.className} onClick={props.onClick}>
      {props.children}
    </ButtonComponent>
  );
};

const ButtonComponent = styled(CenteredFlex)`
  width: 200px;
  height: 40px;
  border-radius: 10px;
`;

const WhiteButton = styled(Button)`
  color: #0079c2;
  background: ${mainWhite};
  border: 1px solid #0079c2;
  :hover {
    background: #ebf2f6;
  }
`;

const BlueButton = styled(Button)`
  color: ${mainWhite};
  background: #0079c2;
  border: 1px solid ${mainWhite};
  :hover {
    background: #00639e;
  }
`;
