import React, { useEffect, useState } from 'react';
import { Dish } from 'store/models/dish';
import styled from 'styled-components';
import {
  CenteredFlex,
  ColumnCenteredFlex,
  ColumnFlexWithPadding,
  VerticallyCenteredFlexWithSpaceBetween,
} from '../../../../typography/flex';
import {
  dishCardImageHeight,
  dishCardImageWidth,
  dishCardWidth,
} from '../../../../constants/sizes';
import { mainWhite } from '../../../../themes/colors';
import { NutritionalValue } from '../../../../../store/models/nutritionalValue';
import { Hint, TextRegular } from '../../../../typography/text';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedDishes } from '../../../../../store/profile/selectors';
import { profileSlice } from '../../../../../store/profile/slice';
import { isThisDishInOrder } from 'store/profile/helpers';
import PlusCircleIcon from '../../../../icons/plus_circle.svg';
import PlusCircleHoverIcon from '../../../../icons/plus_circle_hover.svg';
import CheckCircleIcon from '../../../../icons/check_circle.svg';
import CheckCircleHoverIcon from '../../../../icons/check_circle_hover.svg';

enum DishStatus {
  Regular,
  RegularHover,
  Selected,
  SelectedHover,
}

export function DishCard(props: { dish: Dish }) {
  const dispatch = useDispatch();
  const selectedDishes = useSelector(selectSelectedDishes);

  const [dishStatus, setDishStatus] = useState<DishStatus>(DishStatus.Regular);

  const onAddButtonClick = () => {
    if (isThisDishInOrder(props.dish, selectedDishes)) {
      dispatch(profileSlice.actions.removeDish({ dish: props.dish }));
      setDishStatus(DishStatus.Regular);
    } else {
      dispatch(profileSlice.actions.selectDish({ dish: props.dish }));
      setDishStatus(DishStatus.Selected);
    }
  };

  return (
    <DishCardComponent>
      <Image src={props.dish.image} />
      <DishInfo>
        <DishTitle>{props.dish.title}</DishTitle>
        {props.dish.composition && (
          <DishComposition>{props.dish.composition}</DishComposition>
        )}
        {(props.dish.foodValue || props.dish.weight) && (
          <NutritionalValueBox
            nutritionalValue={props.dish.foodValue}
            weight={props.dish.weight}
          />
        )}
        <VerticallyCenteredFlexWithSpaceBetween style={{ width: '100%' }}>
          <PriceText>{props.dish.price} ₽</PriceText>
          <AddDishButton
            onClick={onAddButtonClick}
            dishStatus={dishStatus}
            setDishStatus={setDishStatus}
          />
        </VerticallyCenteredFlexWithSpaceBetween>
      </DishInfo>
    </DishCardComponent>
  );
}

const Image = styled.img`
  height: ${dishCardImageHeight};
  width: ${dishCardImageWidth};
`;

const DishCardComponent = styled(ColumnCenteredFlex)`
  width: ${dishCardWidth};
  background-color: ${mainWhite};
  justify-content: flex-start;
  margin-bottom: 20px;
  :nth-child(3n) {
    margin-right: 0 !important;
  }
`;

const DishTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
`;
const DishComposition = styled.span`
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  margin-top: 26px;
`;

const DishInfo = styled(ColumnCenteredFlex)`
  padding: 10px;
  width: 100%;
`;

const PriceText = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;

const NutritionalValueBox = (props: {
  nutritionalValue?: NutritionalValue;
  weight?: string;
}) => {
  return (
    <NutritionalValuesComponent spacing={'5px'}>
      {props.nutritionalValue && (
        <>
          <Hint>В 100 г продукта содержится:</Hint>
          <VerticallyCenteredFlexWithSpaceBetween>
            <Hint>Белки: {props.nutritionalValue.protein}</Hint>
            <Hint>Жиры: {props.nutritionalValue.fats}</Hint>
          </VerticallyCenteredFlexWithSpaceBetween>
          <VerticallyCenteredFlexWithSpaceBetween>
            <Hint>Углеводы: {props.nutritionalValue.carb}</Hint>
            <Hint>{props.nutritionalValue.energyValue}</Hint>
          </VerticallyCenteredFlexWithSpaceBetween>
        </>
      )}
      {props.weight && <TextRegular>{props.weight} г.</TextRegular>}
    </NutritionalValuesComponent>
  );
};

const NutritionalValuesComponent = styled(ColumnFlexWithPadding)`
  margin-top: 40px;
  width: 100%;
`;

const AddDishButton = (props: {
  onClick?: () => void;
  dishStatus: DishStatus;
  setDishStatus: (DishStatus: (prev) => DishStatus) => void;
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  useEffect(() => {
    props.setDishStatus(prev => {
      return getNewStatus(prev);
    });
  }, [isHover]);

  const getNewStatus = (prevStatus: DishStatus): DishStatus => {
    return prevStatus === DishStatus.Regular ||
      prevStatus === DishStatus.RegularHover
      ? isHover
        ? DishStatus.RegularHover
        : DishStatus.Regular
      : isHover
      ? DishStatus.SelectedHover
      : DishStatus.Selected;
  };

  const DishStatusButton = {
    [DishStatus.Regular]: PlusCircleIcon,
    [DishStatus.RegularHover]: PlusCircleHoverIcon,
    [DishStatus.Selected]: CheckCircleIcon,
    [DishStatus.SelectedHover]: CheckCircleHoverIcon,
  };

  return (
    <CenteredFlex
      onMouseLeave={() => setIsHover(false)}
      onMouseEnter={() => setIsHover(true)}
      onClick={props.onClick}
    >
      <AddButton background={DishStatusButton[props.dishStatus]} />
    </CenteredFlex>
  );
};

const AddButton = styled(CenteredFlex)<{ background: string }>`
  height: 30px;
  width: 30px;
  background: url(${props => props.background});
  cursor: pointer;
`;
