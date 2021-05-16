import React from 'react';
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
import { ReactComponent as PlusIcon } from 'app/icons/plus.svg';
import { ReactComponent as MinusIcon } from 'app/icons/minus.svg';
import { ReactComponent as CloseIcon } from 'app/icons/close.svg';
import { Hint, TextRegular } from '../../../../typography/text';
import { ruble } from '../../../../constants/ruble';
import { SelectedDish } from '../../../../../store/models/selectedDish';
import { useDispatch } from 'react-redux';
import { profileSlice } from '../../../../../store/profile/slice';
import { getSelectedDishPrice } from '../../../../../store/profile/helpers';

export function Order(props: { selectedDish: SelectedDish }) {
  return (
    <OrderComponent>
      <DishCard selectedDish={props.selectedDish} />
      <CounterBox>
        <Counter selectedDish={props.selectedDish} />
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

const Counter = (props: { selectedDish: SelectedDish }) => {
  const dispatch = useDispatch();

  const onMinusClick = () => {
    if (props.selectedDish.count > 1)
      dispatch(
        profileSlice.actions.removePortion({ dish: props.selectedDish.dish }),
      );
    else
      dispatch(
        profileSlice.actions.removeDish({ dish: props.selectedDish.dish }),
      );
  };

  return (
    <CounterComponent>
      <Minus onClick={onMinusClick}>
        <MinusIcon />
      </Minus>
      {props.selectedDish.count}
      <Plus
        onClick={() =>
          dispatch(
            profileSlice.actions.addPortion({ dish: props.selectedDish.dish }),
          )
        }
      >
        <PlusIcon />
      </Plus>
    </CounterComponent>
  );
};

const DishCard = (props: { selectedDish: SelectedDish }) => {
  const dispatch = useDispatch();

  const onDeleteButtonClick = () => {
    dispatch(
      profileSlice.actions.removeDish({ dish: props.selectedDish.dish }),
    );
  };

  return (
    <>
      <Image src={props.selectedDish.dish.image} />
      <Description>
        <ColumnFlexbox>
          <DishTitle>{props.selectedDish.dish.title}</DishTitle>
          <DishComposition>
            {props.selectedDish.dish.composition}
          </DishComposition>
          <Hint>В 100 г продукта содержится:</Hint>
          {props.selectedDish.dish.foodValue && (
            <FlexWithSpacing spacing={'38px'}>
              <Hint>Белки: {props.selectedDish.dish.foodValue!.protein}</Hint>
              <Hint>Жиры: {props.selectedDish.dish.foodValue!.fats}</Hint>
              <Hint>Углеводы: {props.selectedDish.dish.foodValue!.carb}</Hint>
              <Hint>{props.selectedDish.dish.foodValue!.energyValue}</Hint>
            </FlexWithSpacing>
          )}
        </ColumnFlexbox>

        <ColumnFlexbox style={{ alignItems: 'flex-end' }}>
          <CloseIcon onClick={onDeleteButtonClick} />
          <WeightAndPrice spacing={'3px'}>
            <TextRegular>{props.selectedDish.dish.weight} г.</TextRegular>
            <PriceText>
              {getSelectedDishPrice(props.selectedDish)} {ruble}
            </PriceText>
          </WeightAndPrice>
        </ColumnFlexbox>
      </Description>
    </>
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
  cursor: pointer;
  width: 40px;
  height: 100%;
  border-right: 1px solid #c4c4c4;
`;

const Plus = styled(CenteredFlex)`
  cursor: pointer;
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
