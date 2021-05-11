import React, { useState } from 'react';
import styled from 'styled-components';
import {
  CenteredFlex,
  ColumnFlexbox,
  ColumnFlexWithPadding,
  Flexbox,
  FlexWithSpacing,
  VerticallyCenteredFlexWithSpaceBetween,
} from '../../../../typography/flex';
import { orderImageHeight, orderImageWidth } from '../../../../constants/sizes';
import { Dish } from '../../../../../store/models/dish';
import { ReactComponent as PlusIcon } from 'app/icons/plus.svg';
import { ReactComponent as MinusIcon } from 'app/icons/minus.svg';
import { ReactComponent as CloseIcon } from 'app/icons/close.svg';
import { Hint, TextRegular } from '../../../../typography/text';
import { ruble } from '../../../../constants/ruble';

export function Order(props: { dish: Dish }) {
  return (
    <OrderComponent>
      <Image src={props.dish.image} />
      <Description>
        <ColumnFlexbox>
          <DishTitle>{props.dish.title}</DishTitle>
          <DishComposition>{props.dish.composition}</DishComposition>
          <Hint>В 100 г продукта содержится:</Hint>
          {props.dish.foodValue && (
            <FlexWithSpacing spacing={'38px'}>
              <Hint>Белки: {props.dish.foodValue.protein}</Hint>
              <Hint>Жиры: {props.dish.foodValue.fats}</Hint>
              <Hint>Углеводы: {props.dish.foodValue.carb}</Hint>
              <Hint>{props.dish.foodValue.energyValue}</Hint>
            </FlexWithSpacing>
          )}
        </ColumnFlexbox>

        <ColumnFlexbox style={{ alignItems: 'flex-end' }}>
          <CloseIcon />
          <WeightAndPrice spacing={'3px'}>
            <TextRegular>{props.dish.weight} г.</TextRegular>
            <PriceText>
              {props.dish.price} {ruble}
            </PriceText>
          </WeightAndPrice>
        </ColumnFlexbox>
      </Description>
      <CounterBox>
        <Counter />
      </CounterBox>
    </OrderComponent>
  );
}

const PriceText = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;

const WeightAndPrice = styled(ColumnFlexWithPadding)`
  margin-top: 46px;
  text-align: right;
`;

const OrderComponent = styled(Flexbox)`
  border: 1px solid #c4c4c4;
  width: 100%;
`;

const Image = styled.img`
  height: ${orderImageHeight};
  width: ${orderImageWidth};
`;

const CounterBox = styled(CenteredFlex)`
  width: 230px;
  margin: 6px 0;
  border-left: 1px solid #c4c4c4;
  padding: 0 50px;
`;

const Counter = () => {
  const [counter, setCounter] = useState<number>(1);

  const onMinusClick = () => {
    if (counter > 1) setCounter(prevState => prevState - 1);
  };

  return (
    <CounterComponent>
      <Minus onClick={onMinusClick}>
        <MinusIcon />
      </Minus>
      {counter}
      <Plus onClick={() => setCounter(prevState => prevState + 1)}>
        <PlusIcon />
      </Plus>
    </CounterComponent>
  );
};

const CounterComponent = styled(CenteredFlex)`
  width: 126px;
  height: 40px;
  justify-content: space-between;
  border: 1px solid #c4c4c4;
  border-radius: 7px;
`;

const Minus = styled(CenteredFlex)`
  width: 40px;
  height: 100%;
  border-right: 1px solid #c4c4c4;
`;

const Plus = styled(CenteredFlex)`
  width: 40px;
  height: 100%;
  border-left: 1px solid #c4c4c4;
`;

const Description = styled(VerticallyCenteredFlexWithSpaceBetween)`
  width: calc(100% - ${orderImageWidth} - 230px);
  padding: 13px 20px;
`;

const DishTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
`;
const DishComposition = styled.span`
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  margin-top: 0.5rem;
  margin-bottom: 18px;
`;
