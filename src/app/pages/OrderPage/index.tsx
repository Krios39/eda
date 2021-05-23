import React, { ReactNode, useEffect, useState } from 'react';
import { Page } from '../../components/Page';
import {
  CenteredFlex,
  CenteredFlexWithSpacing,
  ColumnCenteredFlexWithPadding,
  ColumnFlexWithPadding,
  Flexbox,
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
import noOrderImage from '../../images/no_order.svg';
import { useParams } from 'react-router-dom';

export function OrderPage() {
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState<boolean>(false);
  const selectedDishes = useSelector(selectSelectedDishes);

  return (
    <Page>
      {selectedDishes.length ? (
        <>
          <OrderList spacing={'10px'}>
            {selectedDishes.map(selectedDish => (
              <Order
                key={selectedDish.dish.dishId}
                selectedDish={selectedDish}
              />
            ))}
          </OrderList>
          <Total
            sum={getOrderPrice(selectedDishes)}
            onAcceptButtonClick={() => setIsAcceptModalOpen(true)}
          />
        </>
      ) : (
        <EmptyOrder />
      )}

      <AcceptModal
        isOpen={isAcceptModalOpen}
        onClose={() => setIsAcceptModalOpen(false)}
      />
    </Page>
  );
}

const EmptyOrder = () => {
  // @ts-ignore
  let { id } = useParams();

  return (
    <EmptyOrderComponent>
      <EmptyOrderText>
        Вы еще ничего не выбрали, перейдите в{' '}
        <a href={`http://localhost:3000/menu/${id}`}>меню</a>, чтобы добавить
        блюдо
      </EmptyOrderText>
      <EmptyOrderImg />
    </EmptyOrderComponent>
  );
};

const EmptyOrderComponent = styled(Flexbox)`
  height: 700px;
  align-items: center;
`;

const EmptyOrderText = styled(Span)`
  font-size: 30px;
  font-weight: 300;
  line-height: 35px;
  width: 70%;
  text-wrap: normal;
`;

const EmptyOrderImg = styled.div`
  position: fixed;
  right: 0;
  top: 109px;
  width: 705px;
  height: 849px;
  background: url(${noOrderImage});
`;

const OrderList = styled(ColumnCenteredFlexWithPadding)`
  width: 100%;
`;

const TotalComponent = styled(ColumnFlexWithPadding)`
  margin-left: auto;
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

const Total = (props: { onAcceptButtonClick: () => void; sum: number }) => {
  return (
    <TotalComponent spacing={'20px'}>
      <TotalText>
        Общая сумма заказа: {props.sum} {ruble}
      </TotalText>
      <AcceptButton onClick={props.onAcceptButtonClick}>
        Подтвердить
      </AcceptButton>
    </TotalComponent>
  );
};

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
