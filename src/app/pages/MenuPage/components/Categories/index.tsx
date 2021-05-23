import React, { RefObject, SetStateAction, useEffect, useRef } from 'react';
import {
  ColumnCenteredFlex,
  ColumnCenteredFlexWithPadding,
  FlexWithSpacing,
} from '../../../../typography/flex';
import { DishCard } from '../DishCard';
import { useSelector } from 'react-redux';
import {
  selectDishCategories,
  selectMenu,
} from '../../../../../store/profile/selectors';
import styled from 'styled-components';
import { dishCardImageWidth } from '../../../../constants/sizes';
import { Span } from '../../../../typography/text';

export function Categories(props: {
  refs: RefObject<HTMLDivElement>[];
  setRefs: React.Dispatch<SetStateAction<RefObject<HTMLDivElement>[]>>;
}) {
  const categories = useSelector(selectDishCategories);

  return (
    <CategoriesComponent>
      {categories.map((category, index) => (
        <Category category={category} setRefs={props.setRefs} key={index} />
      ))}
    </CategoriesComponent>
  );
}

const Dishes = styled(FlexWithSpacing)`
  //width: calc(3 * ${dishCardImageWidth} + 2 * 58px);
  flex-wrap: wrap;
`;

const CategoryText = styled(Span)`
  font-size: 28px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0.045em;
  text-align: center;
`;

const CategoriesComponent = styled(ColumnCenteredFlex)`
  margin-bottom: 50px;
`;

const Category = (props: {
  category: string;
  setRefs: React.Dispatch<SetStateAction<RefObject<HTMLDivElement>[]>>;
}) => {
  const menu = useSelector(selectMenu);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    props.setRefs(prevState => [...prevState, ref]);
  }, []);

  return (
    <ColumnCenteredFlexWithPadding ref={ref} spacing={'22px'}>
      <CategoryText>{props.category}</CategoryText>
      <Dishes spacing={'58px'}>
        {menu[props.category].map(dish => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </Dishes>
    </ColumnCenteredFlexWithPadding>
  );
};
