import React from 'react';
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
import { Header, Hint, TextRegular } from '../../../../typography/text';

export function DishCard(props: { dish: Dish }) {
  return (
    <DishCardComponent>
      <Image src={props.dish.imageUrl} />
      <DishInfo>
        <DishTitle>{props.dish.name}</DishTitle>
        {props.dish.composition && (
          <DishComposition>{props.dish.composition}</DishComposition>
        )}
        {(props.dish.nutritionalValue || props.dish.weight) && (
          <NutritionalValueBox
            nutritionalValue={props.dish.nutritionalValue}
            weight={props.dish.weight}
          />
        )}
        <VerticallyCenteredFlexWithSpaceBetween style={{ width: '100%' }}>
          <PriceText>{props.dish.price} ₽</PriceText>
          <AddDishButton />
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

const AddDishButton = (props: { onClick?: () => void }) => {
  return (
    <AddButtonWrapper onClick={props.onClick}>
      <Header color={'#0079C2'}>+</Header>
    </AddButtonWrapper>
  );
};

const AddButtonWrapper = styled(CenteredFlex)`
  height: 27.5px;
  width: 27.5px;
  border-radius: 50%;
  border: 2px solid #0079c2;
`;
